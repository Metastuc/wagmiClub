import { ethers } from 'ethers';
// import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.7.0/ethers.min.js";
// import { ERC725 } from "@erc725/erc725.js";
import { FormData } from 'form-data';
// import lsp3ProfileSchema from '@erc725/erc725.js/schemas/LSP3ProfileMetadata.json' assert { type: 'json' };
// import { LSPFactory } from '@lukso/lsp-factory.js';
// import fetch from 'node-fetch';

const providerURL = 'https://rpc.testnet.lukso.network';
const config = {
    ipfsGateway: 'https://api.universalprofile.cloud/ipfs',
    gas: 20_000_000,
};

const baseAPIURL = 'APIURL'; // to be updated once deployed

var provider;
var signer;

const ABI = [
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
      }
]

export const connectWallet = async() => {
    // provider = new ethers.BrowserProvider(window.ethereum);
    try {
        if (window.lukso) { // connecting to UP extension instead of metamask
            provider = new ethers.BrowserProvider(window.lukso);
            await provider.send("eth_requestAccounts", []);
            signer = await provider.getSigner();
        } else if(window.ethereum) { // in case of no UP extension use metamask
            provider = new ethers.BrowserProvider(window.ethereum);
            const currentNetwork = await provider.getNetwork();
            const _currentNetworkId = currentNetwork.chainId;
            const currentNetworkId = Number(_currentNetworkId);
            if (currentNetworkId === 4201) { // checking if the network is available on the wallet
                await provider.send("eth_requestAccounts", []);
                signer = await provider.getSigner();
            } else {
                const switchLuksoTestnet = {
                    chainId: '4201',
                }
                try {
                    await ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: '4201' }],
                    });
                    await provider.send("eth_requestAccounts", []);
                    signer = await provider.getSigner();
                } catch (switchError) {
                    if (switchError.code === 4902) {
                        try {
                            await ethereum.request({
                                method: 'wallet_addEthereumChain',
                                params: [
                                    {
                                      chainId: '4201',
                                      chainName: 'LUKSO testnet',
                                      rpcUrls: ['https://rpc.testnet.lukso.network'],
                                    },
                                  ],
                            });
                            await ethereum.request({
                                method: 'wallet_switchEthereumChain',
                                params: [{ chainId: '4201' }],
                            });
                            await provider.send("eth_requestAccounts", []);
                            signer = await provider.getSigner();
                        } catch (error) {
                            console.log(error);
                        }
                    } else {
                        console.log(switchError);
                    }
                }
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: luksoTestnet.chainId }],
                  });
            }
        }
        else {
            return("No wallet installed");
        }
    } catch (error) {
        console.error(error);
    }
}

export const getUserAddress = async () => {
    const address = await signer.getAddress();
    console.log(address);
    return address;
}

export const logIn = async() => {
    try {
        // connect wallet
        // await connectWallet();
        // // get the user Address
        // const address = await getUserAddress();
        // // check if the wagmi tag is in tags array
        // // check if user exists
        // const erc725 = new ERC725(lsp3ProfileSchema, address, providerURL, config);
        // const profile = await erc725.fetchData('LSP3Profile');
        // const tags = profile.value.LSP3Profile.tags;
        // const wagmiTag = 'Wagmi Profile'

        // const isContained = tags.some(item => item === wagmiTag);

        // call API to get iscontained

        if (isContained == true) {
            // redirect user to edit profile page
        } else {
            // redirect to profile page
        }
    } catch (error) {
        console.log(error);
    }

}

// function to process file
const processImg = async(image) => {
    // reduce to 200 x 200
    // or 50 x 50
    // border radius 50
}

// sign up
export const signUp = async(profileBody, image) => {
    try {
        await connectWallet();
        // call create function to API with details
        const createEndPoint = '/ccreateProfile';
        const uploadEndpoint = '/uploadImage';
        const createProfileEndpoint = baseAPIURL + createEndPoint;
        const uploadFileEndpoint = baseAPIURL + uploadEndpoint;

        const formData = new FormData();
        formData.append('image', image); // process image first

        const uploadResponse = await fetch(`${uploadFileEndpoint}`, {
            method: 'POST',
            body: formData,
        });

        const _imageURL = uploadResponse.json();
        const imageURL = _imageURL.url;

        const createData = new FormData();
        createData.append(imageURL, imageURL);

        for (const key in profileBody) {
            if (profileBody.hasOwnProperty(key)) {
              createData.append(key, profileBody[key]);
            }
        }

        const response = await fetch(createProfileEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: createData,
        });

        if (!response.ok) {
            throw new Error('Network error')
        }

        // handle success message after calling the function

    } catch (error) {
        console.log(error);
    }
}

// function to sign up
// to be called immediately the profile page loads
export const signIn = async() => {
    // 
    await connectWallet();
    const userAddress = await getUserAddress();

    // call endpoint to get user profile
}

// mint badge
export const mintBadge = async(badgeInfo, userAddress, image) => {
    await connectWallet();
    const orgAddress = await getUserAddress();

    // upload image
    const uploadEndpoint = '/uploadImage';
    const uploadFileEndpoint = baseAPIURL + uploadEndpoint;
    const createEndpoint = '/createBadge/' + orgAddress;
    const createBadgeEndpoint = baseAPIURL + createEndpoint;

    const formData = new FormData();
    formData.append('image', image); // process image first

    const uploadResponse = await fetch(uploadFileEndpoint, {
        method: 'POST',
        body: formData,
    });

    const _imageURL = uploadResponse.json();
    const imageURL = _imageURL.url;

    const createData = new FormData();
    createData.append(imageURL, imageURL);

    for (const key in badgeInfo) {
        if (badgeInfo.hasOwnProperty(key)) {
          createData.append(key, badgeInfo[key]);
        }
    }

    // add badge info to db badges and user badges
    const createResponse = await fetch(createBadgeEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: createData,
    });

    if (!createResponse.ok) {
        throw new Error('Network error')
    }

    // check if orgs badge doc exists if not deploy contract
    const exists = createResponse.exists;
    const contractAddress = createResponse.contractAddress;
    const id = createResponse.id;

    if (exists == false) {
        // declare the endpoint url for fetching badge data
        const lspFactory = new LSPFactory(ethereum, {
            chainId: 4201,
        });
        // const metadataEndpointURL = "https://api.universalprofile.cloud/ipfs/QmQ7Wq4y2gWiuzB4a4Wd6UiidKNpzCJRpgzFqQwzyq6SsV"; // to be updated endpoint
        const deployedContracts = await lspFactory.LSP8IdentifiableDigitalAsset.deploy({
          name: "WAGMI BADGE",
          symbol: "WBG",
          controllerAddress: userAddress,
          tokenIdType: 0,
        //   digitalAssetMetadata: metadataEndpointURL
        });
        const _contractAddress = deployedContracts.LSP8IdentifiableDigitalAsset.address;
        const updateData = { contractAddress: _contractAddress }
        // update contract address
        const response = await fetch(`${baseAPIURL}/updateBadgeAddress/${orgAddress}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: updateData
        });
        if (!response.ok) {
            console.log('an error occured');
        }
        // construct contract instance
        const tokenIdString = id.toString();
        const tokenId32 = ethers.encodeBytes32String(tokenIdString);
        const contract = new ethers.Contract(_contractAddress, ABI, signer);
        const data = ethers.hexlify('0x');
        // call mint function
        const tx = await contract.mint(userAddress, tokenId32, true, data);
        const receipt = await tx.wait();
        console.log(receipt);
    } else {
        // construct contract instance
        // call mint function
        const tokenIdString = id.toString();
        const tokenId32 = ethers.encodeBytes32String(tokenIdString);
        const contract = new ethers.Contract(contractAddress, ABI, signer);
        const data = ethers.hexlify('0x');
        const tx = await contract.mint(userAddress, tokenId32, true, data);
        const receipt = await tx.wait();
        console.log(receipt);
    }
}

// create medal onchain
export const createOnchainMedal = async() => {
    // get medal details
    // deploy LSP7 contract(probably with ethers)
    // get contract address
    // add LSP4 metadata
    // call endpoint to put (contract address and other info in DB)
}

// get ongoing onchain medals
// create endpoint to return ongoing medals

// get org ongoing medals
// run check for medals that have org address

// register interest
// get the wallet address of the user and add to watch list for the medal

// award onchain
// run check to determine which addresses are eligible
// return the array of eligible addresses
// mint to users

// creating online medals
// getting details
// deploy LSP7 contract(probably with ethers)
// add details db
// add LSP4 metadata

// upload csv

// Get a reference to the button element
const myButton = document.getElementById('myButton');

// Add an event listener to the button to call the function when clicked
myButton.addEventListener('click', connectWallet);

// Get a reference to the button element
const Button = document.getElementById('add');

// Add an event listener to the button to call the function when clicked
Button.addEventListener('click', getUserAddress);
  