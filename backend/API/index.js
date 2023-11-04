const express = require("express");
// Import Moralis
const Moralis = require("moralis").default;
// Import the EvmChain dataType
const { EvmChain } = require("@moralisweb3/common-evm-utils");
// Import dotenv to use environment variables
require('dotenv').config();

// initializing firebase
const admin = require('firebase-admin');
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const serviceAccount = require("./wagmi-club-firebase-adminsdk-cde6r-4f3cc52568.json");

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

const app = express();
const port = 3000;

const apiKey = process.env.MORALIS_API;

// Add this a startServer function that initialises Moralis
const startServer = async () => {
    await Moralis.start({
      apiKey: apiKey,
    });
  
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/getNFTAmount", async (req, res) => {
    // get the userAddress, chain and contractAddress from the requset/query
    const userAddress = req.query.userAddress;
    const nftName = req.query.nftName;
    const chain = req.query.chain;

    try {
      // Get and return the crypto data
      const data = await getCollectionAmount(userAddress, chain, nftName);
      const jsonResponse = { RESULT: data };
      res.json(jsonResponse);
      res.status(200);
      res.json(jsonResponse);
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500);
      res.json({ error: error.message });
    }
});

// function to get the amount of NFTs of a collection an account has
const getCollectionAmount = async (address, _chain, nftName) => {
  // const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
  var chain;
  switch (_chain) {
      case "Polygon":
          chain = EvmChain.POLYGON;
          break;
      case "BSC":
          chain = EvmChain.BSC;
          break;
      case "Arbitrum":
          chain = EvmChain.ARBITRUM;
          break;
      default:
          chain = EvmChain.ETHEREUM;
  }

  // check moralis API on how to get the name of an NFT collection fromt the contract address
  try {
  const response = await Moralis.EvmApi.nft.getWalletNFTs({
      address,
      chain,
  });

  const amount = sumAmountByName(response.raw.result, nftName);
  console.log(amount);
  return amount;

  } catch (error) {
      console.error(error);
      return error;
  }
}

const sumAmountByName = (data, name) => {
  // Filter the array to include only objects with the specified 'name'
  const filteredData = data.filter((item) => item.name === name);

  // Sum the 'amount' values in the filtered array
  const sum = filteredData.reduce((total, item) => total + Number(item.amount), 0);

  return sum;
}

app.get("/getDonationAmount", async (req, res) => {
    const userAddress = req.query.userAddress;
    const doneeAddress = req.query.doneeAddress;
    const chain = req.query.chain;

    try {
      // Get and return the crypto data
      const data = await getDonationAmount(userAddress, chain, doneeAddress);
      const jsonResponse = { RESULT: data };
      res.json(jsonResponse);
      res.status(200);
      res.json(jsonResponse);
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500);
      res.json({ error: error.message });
    }
});

app.get("/addBadge", async (req, res) => {
  try {
    const address = req.query.userAddress;
    const users = db.collection('users');
    const userSnapshot = await users.where('address', '==', address).get();
    if (userSnapshot.empty) {
      const jsonResponse = { response: "user does not exist" }
      res.status(200);
      res.json(jsonResponse);
    }
    else {
      const userDoc = userSnapshot.docs[0];
      const currentBadgeCount = userDoc.data().badges;
      const newBadgeCount = currentBadgeCount + 1;

      await db.collection('users').doc(userDoc.id).update({badges: newBadgeCount});
      console.log(userDoc.id, newBadgeCount);
      const jsonResponse = { status: "successful" };
      res.json(jsonResponse);
      res.status(200);
    }
  } catch (error) {
    console.error(error);
    res.status(500);
    res.json({ error: error.message });
  }

})

app.get("/addMedal", async (req, res) => {
  try {
    const address = req.query.userAddress;
    const users = db.collection('users');
    const userSnapshot = await users.where('address', '==', address).get();
    if (userSnapshot.empty) {
      const jsonResponse = { response: "user does not exist" }
      res.status(200);
      res.json(jsonResponse);
    }
    else {
      const userDoc = userSnapshot.docs[0];
      const currentMedalCount = userDoc.data().medals;
      const newMedalCount = currentMedalCount + 1;

      await db.collection('users').doc(userDoc.id).update({medals: newMedalCount});
      console.log(userDoc.id, newMedalCount);
      const jsonResponse = { status: "successful" };
      res.json(jsonResponse);
      res.status(200);
    }
  } catch (error) {
    console.error(error);
    res.status(500);
    res.json({ error: error.message });
  }

})

app.get("/getBoard", async (req, res) => {
  try {
    const profession = req.query.profession;
    const type = req.query.type;

    const leaderBoardRef = db.collection('users');
    // filter the users by the type and profession
    const leaderBoardSnapshot = await leaderBoardRef.where('profession', '==', profession).orderBy('medals', 'desc').get();
    if (leaderBoardSnapshot.empty) {
      const jsonResponse = { response: "No users available" }
      res.status(200);
      res.json(jsonResponse);
    } else if(type == 'medals') {
      const _leaderBoard = leaderBoardSnapshot.docs;
      console.log(_leaderBoard);
      const leaderBoard_ = _leaderBoard.map(item => ({
        username: item.data().username,
        imageURL: item.data().imageURL,
        score: item.data().medals
      }));

      const leaderBoard = JSON.stringify(leaderBoard_);
      res.status(200);
      res.json(leaderBoard);
      console.log(leaderBoard);
    }
    else {
      const _leaderBoard = leaderBoardSnapshot.docs;
      console.log(_leaderBoard);
      const leaderBoard_ = _leaderBoard.map(item => ({
        username: item.data().username,
        imageURL: item.data().imageURL,
        score: item.data().badges
      }));

      const leaderBoard = JSON.stringify(leaderBoard_);
      res.status(200);
      res.json(leaderBoard);
      console.log(leaderBoard);
    }

  } catch (error) {
    console.error(error);
    res.status(500);
    res.json({ error: error.message });
  }
})

const getDonationAmount = async (address, _chain, doneeAddress) => {
  // const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
  var chain;
  switch (_chain) {
      case "Polygon":
          chain = EvmChain.POLYGON;
          break;
      case "BSC":
          chain = EvmChain.BSC;
          break;
      case "Arbitrum":
          chain = EvmChain.ARBITRUM;
          break;
      default:
          chain = EvmChain.ETHEREUM;
  }

  // check moralis API on how to get the name of an NFT collection fromt the contract address
  try {
    const response = await Moralis.EvmApi.transaction.getWalletTransactions({
      address,
      chain,
    });

  const amount = sumDonationAmount(response.raw.result, doneeAddress);
  console.log(amount);
  return amount;

  } catch (error) {
      console.error(error);
      return error;
  }
}

const sumDonationAmount = (data, doneeAddress) => {
    // Initialize a variable to store the sum
    let totalValue = 0;

    // Iterate through the "result" array and sum the "value" where "to_address" matches the specific address
    data.result.forEach(result => {
      if (result.to_address === doneeAddress) {
        totalValue += Number(result.value);
      }
    });
    return totalValue;
}

// Call startServer()
startServer();