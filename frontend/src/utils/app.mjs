// import { ethers } from 'ethers';
import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.7.0/ethers.min.js";
import { ERC725 } from "@erc725/erc725.js";
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

// sign up
export const signUp = async(profileRequestBody) => {
    
    try {
        await connectWallet();
        // call create function to API with details
        const endPoint = '/ccreateProfile'
        const createProfileEndpoint = baseAPIURL + endPoint;

        const response = await fetch(createProfileEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profileRequestBody),
        });
        // return API endpoint with userName
        // pass it into the universal profile deploy and deploy UP
        if (!response.ok) {
            throw new Error('Network error')
        }
        const userProfile = await response.json();
        const profileLink = baseAPIURL + '/' + userProfile.link;
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
                console.log(deployedContracts.LSP0ERC725Account.receipt);
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
export const mintBadge = async(badgeInfo, userAddress) => {
    await connectWallet();
    const userAddress = await getUserAddress();
    // check if orgs badge doc exists if not deploy contract
    // mint the LSP8 contract
    // create endpoint to add metadata
    // return endpoint url pointing the badges metadata
    // add the endpointurl as LSP4 metadata for the contract
    // then mint to user
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
  