const express = require("express");
// Import Moralis
const Moralis = require("moralis").default;
// Import the EvmChain dataType
const { EvmChain } = require("@moralisweb3/common-evm-utils");
// Import dotenv to use environment variables

require('dotenv').config();

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

const getTransactions = async (chain, address) => {
    try {
    const response = await Moralis.EvmApi.transaction.getWalletTransactionsVerbose({
    "chain": "0xaa36a7",
    "address": "0xdeDf26b9280620eaa52e0811bF7991a1B6aB077E"
    });

    console.log(response.raw.result);
    return(response.raw.result);
    } catch (error) {
        console.error(error);
        return error;
    }
}

app.get("/transactions", async (req, res) => {
    try {
      // Get and return the crypto data
      const data = await getTransactions();
      res.status(200);
      res.json(data);
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500);
      res.json({ error: error.message });
    }
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

// Call startServer()
startServer();