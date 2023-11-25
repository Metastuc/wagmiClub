import { ethers } from "ethers";
// import { provider, signer } from "./index";

var provider, signer;

/**
 * Connects to the user's wallet and initializes the Ethereum provider and signer.
 *
 * @throws {Error} Throws an error if there's an issue connecting to the wallet or obtaining a signer.
 * @returns {Promise<void>} A Promise that resolves when the wallet is successfully connected.
 */
export const connectWallet = async () => {
	// console.log("hello from connectWallet");

	try {
		// Check if Lukso UP extension is available
		if (window.lukso) {
			// Connect to Lukso UP extension
			provider = new ethers.BrowserProvider(window.lukso);
			await provider.send("eth_requestAccounts", []);
			signer = await provider.getSigner();
		} else if (window.ethereum) {
			// Connect to MetaMask or similar wallet
			provider = new ethers.BrowserProvider(window.ethereum);

			// Check the current network
			const currentNetwork = await provider.getNetwork();
			const currentNetworkId = Number(currentNetwork.chainId);

			if (currentNetworkId === 4201) {
				// Use the connected wallet if it's on the correct network
				await provider.send("eth_requestAccounts", []);
				signer = await provider.getSigner();
			} else {
				// Switch to Lukso testnet if not on the correct network
				const switchLuksoTestnet = {
					chainId: "4201",
				};

				try {
					await ethereum.request({
						method: "wallet_switchEthereumChain",
						params: [switchLuksoTestnet],
					});
					await provider.send("eth_requestAccounts", []);
					signer = await provider.getSigner();
				} catch (switchError) {
					if (switchError.code === 4902) {
						// Add Lukso testnet and switch if the network is not added
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
								params: [switchLuksoTestnet],
							});
							await provider.send("eth_requestAccounts", []);
							signer = await provider.getSigner();
						} catch (error) {
							console.error(error);
						}
					} else {
						console.error(switchError);
					}
				}
			}
		} else {
			// Return an error if no wallet is installed
			throw new Error("No wallet installed");
		}
	} catch (error) {
		// Log any errors that occur during the wallet connection
		console.error(error);
		throw error; // Re-throw the error to propagate it to the calling code
	}
};
