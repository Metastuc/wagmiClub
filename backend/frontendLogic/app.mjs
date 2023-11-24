import { ethers } from 'ethers';
// import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.7.0/ethers.min.js";
import { ERC725 } from "@erc725/erc725.js";
import { FormData } from 'form-data';
import lsp3ProfileSchema from '@erc725/erc725.js/schemas/LSP3ProfileMetadata.json' assert { type: 'json' };
import { LSPFactory } from '@lukso/lsp-factory.js';
import fetch from 'node-fetch';

const providerURL = 'https://rpc.testnet.lukso.network';
const config = {
    ipfsGateway: 'https://api.universalprofile.cloud/ipfs',
    gas: 20_000_000,
};

const baseAPIURL = 'APIURL'; // to be updated once deployed

var provider;
var signer;

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
    const address = await signer.address;
    console.log(address);
    return address;
}

export const logIn = async() => {
    try {
        // connect wallet
        await connectWallet();
        // get the user Address
        const address = await getUserAddress();
        // check if the wagmi tag is in tags array
        const erc725 = new ERC725(lsp3ProfileSchema, address, providerURL, config);
        const profile = await erc725.fetchData('LSP3Profile');
        const tags = profile.value.LSP3Profile.tags;
        const wagmiTag = 'Wagmi Profile'

        const isContained = tags.some(item => item === wagmiTag);

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
        
        const profileEndpoint = '/getUPProfile/';
        const profileLink = baseAPIURL + profileEndpoint + profileBody.username;

        await ethereum.request({ method: 'eth_requestAccounts', params: [] });

        const userAddress = await getUserAddress();

        try {
            const lspFactory = new LSPFactory(ethereum, {
                chainId: 4201,
                });
        
                const deployedContracts = await lspFactory.UniversalProfile.deploy({
                    controllerAddresses: [ userAddress ], // root address (address attached to profile)
                    lsp3Profile: profileLink // provision of link to universal profile (provision get endpoint?)
                });
                console.log(deployedContracts.LSP0ERC725Account.receipt); // add this user profile
        } catch (error) {
            console.log(error);
        }

    } catch (error) {
        console.log(error);
    }
}

// function to sign up
export const signIn = async() => {
    // 
    await connectWallet();
    const userAddress = await getUserAddress();

    // call endpoint to get user profile
}

// mint badge
export const mintBadge = async(badgeInfo, userAddress, inage) => {
    await connectWallet();
    const orgAddress = await getUserAddress();
    // check if orgs badge doc exists if not deploy contract
    // call baseAPIURL + /getBadgeAddress/ + orgAddress
    const response = await fetch(`${baseAPIURL}/getBadgeAddress/${orgAddress}`);
    const exists = response.exists;
    if (exists == false) {
        
        // declare the endpoint url for fetching badge data
        const lspFactory = new LSPFactory(ethereum, {
            chainId: 4201,
        });
        const metadataEndpointURL = "https://api.universalprofile.cloud/ipfs/QmQ7Wq4y2gWiuzB4a4Wd6UiidKNpzCJRpgzFqQwzyq6SsV"; // to be updated
        const deployedContracts = await lspFactory.LSP8IdentifiableDigitalAsset.deploy({
          name: "WAGMI BADGE",
          symbol: "WBG",
          controllerAddress: userAddress,
          tokenIdType: 0,
          digitalAssetMetadata: metadataEndpointURL
        });
        // badge contract address to db
        // construct contract instance
        // call mint function
    } else {
        const contractAddress = response.address;
        // construct contract instance
        // call mint function
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
  