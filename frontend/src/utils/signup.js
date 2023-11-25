import axios from "axios";
import { LSPFactory } from "@lukso/lsp-factory.js";

/**
 * Signs up a user by creating a profile and deploying a Universal Profile contract.
 *
 * @param {Object} profileRequestBody - The user profile details.
 * @throws {Error} Throws an error if there's a network issue or an error during contract deployment.
 * @returns {Promise<void>} A Promise that resolves when the signup process is complete.
 */
export const signUp = async (profileRequestBody) => {
	try {
		// Connect to the user's wallet
		await connectWallet();

		// API endpoint for creating a profile
		const endPoint = "/createProfile";
		const createProfileEndpoint = baseAPIURL + endPoint;

		// Call the API to create a user profile using Axios
		const response = await axios.post(
			createProfileEndpoint,
			profileRequestBody,
			{
				headers: {
					"Content-Type": "application/json",
				},
			},
		);

		// Check for network errors
		if (!response.status === 200) {
			throw new Error("Network error");
		}

		// Retrieve the created user profile from the API response
		const userProfile = response.data;
		const profileLink = baseAPIURL + "/" + userProfile.link;

		// Request user account access from the Ethereum wallet
		await ethereum.request({ method: "eth_requestAccounts", params: [] });

		// Get the user's Ethereum address
		const userAddress = await getUserAddress();

		try {
			// Initialize the LSPFactory with the Ethereum provider and chain ID
			const lspFactory = new LSPFactory(ethereum, {
				chainId: 4201,
			});

			// Deploy the Universal Profile contract
			const deployedContracts = await lspFactory.UniversalProfile.deploy({
				controllerAddresses: [userAddress], // Root address (address attached to the profile)
				lsp3Profile: profileLink, // Link to the Universal Profile
			});

			// Log the receipt of the deployed contract
			console.log(deployedContracts.LSP0ERC725Account.receipt);
		} catch (error) {
			// Log any errors that occur during contract deployment
			console.error(error);
		}
	} catch (error) {
		// Log any errors that occur during the signup process
		console.error(error);
	}
};
