import { getWalletAddress } from "./getAddress";
import { connectWallet } from "./connectWallet";
// import { getWalletAddress, connectWallet } from "./index";

/**
 * Logs in a user and checks if they have the "Wagmi Profile" tag in their profile.
 * Redirects the user accordingly.
 *
 * @throws {Error} Throws an error if there's an issue connecting the wallet or fetching user data.
 * @returns {Promise<void>} A Promise that resolves when the login process is complete.
 */
export async function login() {
	// console.log("hello world from login");

	try {
		// Connect to the user's wallet
		await connectWallet();

		// Get the user's Ethereum address
		const address = await getWalletAddress();

		// Create an ERC725 instance to fetch user profile data
		const erc725 = new ERC725(
			lsp3ProfileSchema,
			address,
			providerURL,
			config,
		);

		// Fetch the user's profile data
		const profile = await erc725.fetchData("LSP3Profile");
		const tags = profile.value.LSP3Profile.tags;
		const wagmiTag = "Wagmi Profile";

		// Check if the "Wagmi Profile" tag is in the user's tags
		const isContained = tags.some((item) => item === wagmiTag);

		if (isContained) {
			// Redirect the user to the edit profile page
			window.location.href = "/edit-profile";
		} else {
			// Redirect the user to the profile page
			window.location.href = "/profile";
		}
	} catch (error) {
		// Log any errors that occur during the login process
		console.error(error);
	}
}
