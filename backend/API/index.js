const express = require("express");
const multer = require('multer');
const path = require('path');

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
const { getStorage } = require('firebase-admin/storage');

const serviceAccount = require("./wagmi-club-firebase-adminsdk-cde6r-4f3cc52568.json");

initializeApp({
  credential: cert(serviceAccount),
  storageBucket: 'wagmi-club.appspot.com'
});

const bucket = getStorage().bucket();
const storage = multer.memoryStorage(); 

const db = getFirestore();

const app = express();
const port = 3000;

app.use(express.json());

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

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
}).single('file');

app.post("/uploadMedalCSV", async (req, res) => {
  let fileURL;
  upload(req, res, async (err) => {
    if (err) {
      console.error('error uploading file:', err);
      res.status(500).json({ error: err.message });
    } else {
      if (!req.file) {
        res.status(400).json({ error: 'No file uploaded' });
      } else {
        try {
          const file = req.file;
          const fileName = file.originalname;

          const fileUpload = bucket.file(fileName);

          const fileStream = fileUpload.createWriteStream({
            metadata: {
              contentType: file.mimetype
            }
          });

          fileStream.on('error', (error) => {
            console.error('Error uploading to Firebase:', error);
            res.status(500).json({ error: 'Error uploading to Firebase' });
          });

          fileStream.on('finish', () => {
            fileURL = `https://storage.googleapis.com/${bucket.name}/${fileName}`;
            console.log('File uploaded to Firebase. Download URL:', fileURL);
            res.status(200).json({ response: 'File uploaded successfully', downloadUrl: fileURL });
          });

          fileStream.end(file.buffer);

          // push fileURL to firestore
        } catch (error) {
          console.error('Error uploading file:', error);
          res.status(500).json({ error: 'Error uploading file' });
        }
      }
    }
  });
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

app.post("/createProfile", async (req, res) => {
  const profileData = {
    displayname: req.body.name,
    username: req.body.usernane,
    bio: req.body.bio,
    profession: req.body.profession,
    X : req.body.xname,
    discord: req.body.discordname,
    telegram: req.body.telegramname,
    youtube: req.body.youtubename,
    imageURL: req.body.imageURL,
    badgeCount: 0,
    badges: [],
    medalCount: 0,
    medals: [],
    add: req.body.address,
    accountType: req.body.accountType
  }

  const wagmiFollow = {
    username: 'WagmiClub'
  }

  try {
    const users = db.collection('users');
    const docId = req.body.name;
    await users.doc(docId).set(profileData);
    await users.doc(docId).collection("followers").add(wagmiFollow);
    console.log('success');
    const jsonResponse = { status: "successful" };
    res.status(200).json(jsonResponse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.get("/getUserProfile/:username", async (req, res) => { // change to add
  const username = req.params.username;

  const userSnapshot = await db.collection('users').doc(username).get();

  try {
    if (!userSnapshot.exists) {
      const Response = { response: "User does not exist" }
      res.status(200);
      res.json(Response);
    } else {
      const userDoc = userSnapshot.data();
      const userResponse = {
        name: userDoc.displayname,
        username: userDoc.username,
        bio: userDoc.bio,
        profession: userDoc.profession,
        imageURL: userDoc.imageURL
      }
      // add number of following and followers
      
      res.status(200);
      res.json(userResponse);
    }
  } catch (error) {
    res.status(500);
    res.json({ error: error.message });
  }

  // add extended params to returned value

})

app.get("/getUPProfile/:username", async (req, res) => {
  const username = req.params.username;

  const userSnapshot = await db.collection('users').doc(username).get();

  try {
    if (!userSnapshot.exists) {
      const Response = { response: "User does not exist" }
      res.status(200);
      res.json(Response);
    } else {
      const userDoc = userSnapshot.data();
      const userResponse = {
        name: userDoc.displayname,
        username: userDoc.username,
        bio: userDoc.bio,
        profession: userDoc.profession,
        imageURL: userDoc.imageURL
      }
      // recontrsuct in up profile format
      res.status(200);
      res.json(userResponse);
    }
  } catch (error) {
    res.status(500);
    res.json({ error: error.message });
  }

})

app.put("/edit-profile/:username", async (req, res) => {
  const username = req.params.username;
  const { section, value } = req.body;

  const userRef = db.collection('users').doc(username);
  const userSnapshot = await userRef.get();

  try {
    if (!userSnapshot.exists) {
      const Response = { response: "user does not exist" }
      res.status(404);
      res.json(Response);
    } else {
      if (section == "displayname") {
        await userRef.update({ displayname: value });
      } else if(section == "bio") {
        await userRef.update({ displayname: value });
      }
      else if(section == "X") {
        await userRef.update({ X: value });
      }
      else if(section == "discord") {
        await userRef.update({ discord: value });
      }
      else if(section == "telegram") {
        await userRef.update({ telegram: value });
      }
      else if(section == "youtube") {
        await userRef.update({ youtube: value });
      }
      else {
        const Response = { response: "invalid profile field" }
        res.status(400);
        res.json(Response);
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500);
    res.json({ error: error.message });
  }
})

app.put("/followUser/:username", async (req, res) => {
  const username = req.params.username;
  const follower = req.body.username;

  try {
    const follwerDoc = {
      username: follower
    }

    const userRef = db.collection('users').doc(username);
    const userSnapshot = await userRef.get();

    if (!userSnapshot.exists) {
      const Response = { response: "user does not exist" }
      res.status(404);
      res.json(Response);
    } else {
      await userRef.collection('followers').add(follwerDoc);
      res.status(200).json({ response: 'followed successfuly' });
    }
  } catch (error) {
    console.error(error);
    res.status(500);
    res.json({ error: error.message });
  }
})

app.put("/unFollowUser/:username", async (req, res) => {
  const username = req.params.username;
  const follower = req.body.username;

  try {

    const collRef = db.collection('users').doc(username).collection('followers');
    const userSnapshot = await collRef.where('username', '==', follower).get();

    if (!userSnapshot.exists) {
      const Response = { response: "user does not exist" }
      res.status(404);
      res.json(Response);
    } else {
      const id = userSnapshot.docs[0].id;
      await userRef.collection('followers').doc(id).delete();
      res.status(200).json({ response: 'unfollowed successfuly' });
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

// TODO
// 1. include user type(organization) ✅
// 2. create followers subcollection when creating user ✅
// 3. create follow and unfollow function ✅
// 4. return No. of followers in returned user object
// 5. work on uploading file to cloudstorage ⌛
// 6. checking if address or email is in list
// 7. reading more about LSPs contract
// 8. start rewriting contract with LUKSO standard(LSPs)
// 9. create badge function
// 10. org name -- doc ref
// 11. sub-docs -- tokenIds

// new TODO
// 1. create post endpoint to return UP profile endpoint
// 2. create response.json with {link: up profile endpoint} for create profile endpoint