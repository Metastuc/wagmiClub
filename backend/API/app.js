const Moralis = require("moralis").default;
// Import the EvmChain dataType
const { EvmChain } = require("@moralisweb3/common-evm-utils");
require('dotenv').config();

const apiKey = process.env.MORALIS_API;

const getTransactions = async () => {
    try {
        await Moralis.start({
            apiKey: apiKey
          });

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

// function to get the amount of NFTs of a collection an account has
const getCollectionAmount = async () => {
    const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";
    const chain = EvmChain.ETHEREUM;
    const name = 'AzuLadys';

    try {
        await Moralis.start({
            apiKey: apiKey
          });

    const response = await Moralis.EvmApi.nft.getWalletNFTs({
        address,
        chain,
    });

    const amount = sumAmountByName(response.raw.result, name);
    console.log(amount);

    } catch (error) {
        console.error(error);
        return error;
    }
}

function sumAmountByName(data, name) {
  // Filter the array to include only objects with the specified 'name'
  const filteredData = data.filter((item) => item.name === name);

  // Sum the 'amount' values in the filtered array
  const sum = filteredData.reduce((total, item) => total + Number(item.amount), 0);

  return sum;
}

getCollectionAmount();

function countGovernance(arrayOfObjects, targetAddress) {
    const filteredObjects = arrayOfObjects.filter(obj => obj.decoded_call !== null && obj.to_address === targetAddress);
    return filteredObjects.length;
}

