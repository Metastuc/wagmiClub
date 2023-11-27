import { ethers } from 'ethers';

const providerURL = "https://rpc.testnet.lukso.network";
const config = {
	ipfsGateway: "https://api.universalprofile.cloud/ipfs",
	gas: 20_000_000,
};

const baseAPIURL = "https://wagmi-backend.up.railway.app"; // to be updated once deployed

var provider;
var signer;

export const connectWallet = async () => {
	// provider = new ethers.BrowserProvider(window.ethereum);
	try {
		if (window.lukso) {
			// connecting to UP extension instead of metamask
			provider = new ethers.BrowserProvider(window.lukso);
			await provider.send("eth_requestAccounts", []);
			signer = await provider.getSigner();
		} else if (window.ethereum) {
			// in case of no UP extension use metamask
			provider = new ethers.BrowserProvider(window.ethereum);
			const currentNetwork = await provider.getNetwork();
			const _currentNetworkId = currentNetwork.chainId;
			const currentNetworkId = Number(_currentNetworkId);
			if (currentNetworkId === 4201) {
				// checking if the network is available on the wallet
				await provider.send("eth_requestAccounts", []);
				signer = await provider.getSigner();
			} else {
				const switchLuksoTestnet = {
					chainId: "4201",
				};
				try {
					await ethereum.request({
						method: "wallet_switchEthereumChain",
						params: [{ chainId: "4201" }],
					});
					await provider.send("eth_requestAccounts", []);
					signer = await provider.getSigner();
				} catch (switchError) {
					if (switchError.code === 4902) {
						try {
							await ethereum.request({
								method: "wallet_addEthereumChain",
								params: [
									{
										chainId: "4201",
										chainName: "LUKSO testnet",
										rpcUrls: [
											"https://rpc.testnet.lukso.network",
										],
									},
								],
							});
							await ethereum.request({
								method: "wallet_switchEthereumChain",
								params: [{ chainId: "4201" }],
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
					method: "wallet_switchEthereumChain",
					params: [{ chainId: luksoTestnet.chainId }],
				});
			}
		} else {
			return "No wallet installed";
		}
	} catch (error) {
		console.error(error);
	}
};

export const getUserAddress = async () => {
	const address = await signer.getAddress();
	console.log(address);
	return address;
};

export const logIn = async () => {
	await connectWallet();
	const address = await getUserAddress();
	try {
		const response = await fetch(`${baseAPIURL}/checkUser/${address}`);

		if (!response.ok) {
		  throw new Error('Network response was not ok');
		}
	
		const res = await response.json();
		const exists = res.exists;

		if (exists == true) {
			return true;
		} else {
			return false;
		}
	} catch (error) {
		console.log(error);
		console.log("not working");
	}
};

// sign up
export const signUp = async (profileRequestBody) => {
	try {
		await connectWallet();

		const formData = new FormData();
		formData.append('image', file);
	
		const uploadResponse = await fetch(`${baseAPIURL}/uploadImage`, {
		  method: 'POST',
		  body: formData,
		});
	
		if (!uploadResponse.ok) {
		  throw new Error('Network response was not ok');
		}
	
		const data = await uploadResponse.json();
		const imageURL = data.url;

		// call create function to API with details
		const endPoint = "/createProfile";
		const createProfileEndpoint = baseAPIURL + endPoint;

		const response = await fetch(createProfileEndpoint, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(profileRequestBody),
		});
		// return API endpoint with userName
		// pass it into the universal profile deploy and deploy UP
		if (!response.ok) {
			throw new Error("Network error");
		}

		return { success: true }

	} catch (error) {
		console.log(error);
	}
};

// function to sign up
export const signIn = async () => {
	await connectWallet();
	const userAddress = await getUserAddress();

	const response = await fetch(`${baseAPIURL}/getUserProfileAddress/${userAddress}`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
	return data

};

// mint badge

