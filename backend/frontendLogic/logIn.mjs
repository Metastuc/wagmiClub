// import { ethers } from 'ethers';
import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.7.0/ethers.min.js";
// import { ERC725 } from "@erc725/erc725.js";
// import lsp3ProfileSchema from '@erc725/erc725.js/schemas/LSP3ProfileMetadata.json' assert { type: 'json' };
// import { LSPFactory } from '@lukso/lsp-factory.js';
// const providerURL = 'https://rpc.testnet.lukso.network';

// const config = {
//     ipfsGateway: 'https://api.universalprofile.cloud/ipfs',
//     gas: 20_000_000,
// };

var provider;
var signer;
var userAddress;

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
    // return address;
    console.log(address);
}

// Get a reference to the button element
const myButton = document.getElementById('myButton');

// Add an event listener to the button to call the function when clicked
myButton.addEventListener('click', connectWallet);

// Get a reference to the button element
const Button = document.getElementById('add');

// Add an event listener to the button to call the function when clicked
Button.addEventListener('click', getUserAddress);
  