const express = require("express");
const multer = require('multer');
const path = require('path');

// Import Moralis
const Moralis = require("moralis").default;

// Import the EvmChain dataType
const { EvmChain } = require("@moralisweb3/common-evm-utils");

// Import dotenv to use environment variables
require('dotenv').config();

// initializing the needed LUKSO tools
const { LSPFactory } = require('@lukso/lsp-factory.js');

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
const port = process.env.PORT || 3000;

// LUKSO provider
const provider = 'https://rpc.testnet.lukso.network';

// ethers
const { Wallet, ethers } = require("ethers");

// initializing the LSP8 contract ABI
const LSP8ABI = [
  {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "tokenId",
          "type": "bytes32"
        },
        {
          "internalType": "bool",
          "name": "force",
          "type": "bool"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
]

app.use(express.json());

const apiKey = process.env.MORALIS_API;

const privateKey = process.env.privateKey;

// Add this a startServer function that initialises Moralis
const startServer = async () => {
    await Moralis.start({
      apiKey: apiKey,
    });
  
    app.listen(port, "0.0.0.0", () => {
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

app.post("/uploadImage", async (req, res) => {
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
          res.status(200).json({ url: fileURL });
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
    const userAddress = req.query.userAddress; // user address
    const nftName = req.query.nftName; // nft name
    const chain = req.query.chain; // chain to check on

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
    username: req.body.username,
    bio: req.body.bio,
    profession: req.body.profession,
    X : req.body.xname,
    discord: req.body.discordname,
    telegram: req.body.telegramname,
    youtube: req.body.youtubename,
    imageURL: req.body.imageURL,
    address: req.body.address,
    accountType: req.body.accountType,
    UPAddress: '0x'
  }

  const wagmiFollow = {
    username: 'WagmiClub'
  }

  try {
    const users = db.collection('users');
    const docId = req.body.username;
    await users.doc(docId).set(profileData);
    await users.doc(docId).collection("followers").add(wagmiFollow);
    await users.doc(docId).collection("following").add(wagmiFollow);
    const lspFactory = new LSPFactory(provider, {
      deployKey: privateKey,
      chainId: 4201,
    });

    const deployedContracts = await lspFactory.UniversalProfile.deploy({
      controllerAddresses: [ req.body.address ], // root address (address attached to profile)
      lsp3Profile: {
        name: req.body.username,
        description: req.body.bio,
        tags: ['wagmi-profile'],
        links: [{
          title: 'My Website',
          url: 'www.my-website.com'
        }]
      }
    });

    const UPAddress = deployedContracts.LSP0ERC725Account.address;
    await users.doc(docId).update({ UPAddress: UPAddress });

    console.log('success');
    const jsonResponse = { status: "successful" };
    res.status(200).json(jsonResponse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.post("/createBadge/:orgAddress", async (req, res) => {
  // get address
  const orgAddress = req.params.orgAddress;

  try {
    // increment the counter
    const orgBadgeRef = db.collection('Badges').doc(orgAddress);
    const orgBadgeDoc = await orgBadgeRef.get();
    const users = db.collection('users');
    const userSnapshot = await users.where('address', '==', req.body.receiver).get();
    const userId = userSnapshot.docs[0].id;

    // does not exist deploy and return
    // exist return 
    if (!orgBadgeDoc.exists) {
      // deploy 
      const lspFactory = new LSPFactory(provider, {
        deployKey: privateKey,
        chainId: 4201,
      });
      const deployedContracts = await lspFactory.LSP8IdentifiableDigitalAsset.deploy({
        name: "WAGMI BADGE",
        symbol: "WBG",
        controllerAddress: orgAddress,
        tokenIdType: 0,
      //   digitalAssetMetadata: metadataEndpointURL
      });
      const contractAddress = deployedContracts.LSP8IdentifiableDigitalAsset.address;

      // change owner
      const wallet = new Wallet(privateKey);

      const _provider = new ethers.JsonRpcProvider(provider);
      const signer = wallet.connect(_provider);
      const contract = new ethers.Contract(contractAddress, LSP8ABI, signer);
      const TX = await contract.transferOwnership(orgAddress);
      const receipt = await TX.wait();
      console.log(receipt); 

      const idCount = 0;
      const data = { contractAddress: contractAddress, idCount: idCount }
      await orgBadgeRef.set(data);
      const tokenRef = orgBadgeRef.collection('tokenIds').doc(idCount);
      await tokenRef.set(req.body);
      await db.collection('users').doc(userId).collection('badges').add(req.body);
      res.status(200).json({ contractAddress: contractAddress, id: idCount })
      await orgBadgeRef.update({ idCount: 1 })
    } else {
      const orgBadgeData = orgBadgeDoc.data();
      const contractAddress = orgBadgeData.contractAddress;
      const id = orgBadgeData.idCount;
      const newId = id + 1;
      const tokenRef = orgBadgeRef.collection('tokenIds').doc(idCount);
      await tokenRef.set(req.body);
      await orgBadgeRef.update({ idCount: newId })
      res.status(200).json({ contractAddress: contractAddress, id: id })
  }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error })
  }
})

app.get("/getUserProfileUsername/:username", async (req, res) => { // change to add
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


app.get("/getUserProfileAddress/:address", async (req, res) => { // change to add
  const address = req.params.address;  

  try {
    const users = db.collection('users');
    const userSnapshot = await users.where('address', '==', address).get();
    const userId = userSnapshot.docs[0].id;

    if (userSnapshot.empty) {
      const Response = { message: "User does not exist" }
      res.status(404);
      res.json(Response);
    } else {
      const userDoc = userSnapshot.docs[0].data();
      // get followers
      const _followerCount = await db.collection('users').doc(userId).collection('followers').get();
      const followerCount = _followerCount.size;
      // get following
      const _followingCount = await db.collection('users').doc(userId).collection('following').get();
      const followingCount = _followingCount.size;
      // get 5 badges
      const badgeList = await db.collection('users').doc(userId).collection('badges').orderBy('Title').limit(5).get();
      if (badgeList.empty) {
        const userResponse = {
          name: userDoc.displayname,
          username: userDoc.username,
          bio: userDoc.bio,
          profession: userDoc.profession,
          imageURL: userDoc.imageURL,
          followers: followerCount,
          following: followingCount
        }
        
        res.status(200);
        res.json(userResponse);
      }
      const _badgeList = [];

      for (let i = 0; i < badgeList.docs.length; i++) {
        const title = badgeList.docs[i].data().Title;
        const imageURL = badgeList.docs[i].data().imageURL;
        const badgeObj = {title: title, imageURL: imageURL};
        _badgeList.push(badgeObj)
      }

      const userResponse = {
        name: userDoc.displayname,
        username: userDoc.username,
        bio: userDoc.bio,
        profession: userDoc.profession,
        imageURL: userDoc.imageURL,
        followers: followerCount,
        following: followingCount,
        badges: _badgeList
      }
      
      res.status(200);
      res.json(userResponse);
    }
  } catch (error) {
    res.status(500);
    res.json({ error: error.message });
  }

  // add extended params to returned value

})

app.get("/checkUser/:address", async (req, res) => {
  const address = req.params.address;  
  try {
    const users = db.collection('users');
    const userSnapshot = await users.where('address', '==', address).get();
    
    if (userSnapshot.empty) {
      res.status(200).json({ exists: false })
    } else {
      res.status(200).json({ exists: true })
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message })
  }
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

app.put("/updateBadgeAddress/:orgAddress", async(req, res) => {
  const orgAddress = req.params.orgAddress;
  const contractAddress = req.body.contractAddress;

  try {
    const docRef = db.collection('Badges').doc(orgAddress);
    const doc = await docRef.get();
    if (!doc.exists) {
      const Response = { message: 'this resource does not exist' }
      res.status(200);
      res.json(Response);
    } else {
      const data = doc.data();
      await docRef.update({ contractAddress: contractAddress })
      const Response = { message: 'successful' }
      res.status(200);
      res.json(Response);
    }
  } catch (error) {
    console.log(error);
    const Response = { error: error }
    res.status(500);
    res.json(Response);
  }
});

// endpoint to store the address
// endpoint to get badge details

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
