// import { signer } from ".";

var signer;

/**
 * Gets the user's Ethereum address from the initialized signer.
 *
 * @throws {Error} Throws an error if the signer is not initialized.
 * @returns {Promise<string>} A Promise that resolves to the user's Ethereum address.
 */
export async function getWalletAddress() {
	// try {
	// 	// Check if the signer is initialized
	// 	if (!signer) {
	// 		throw new Error(
	// 			"Signer not initialized. Please initialize the signer before calling getUserAddress.",
	// 		);
	// 	}
	// Get the user's Ethereum address from the signer
	const address = await signer.address;
	console.log(address);
	return address;
	// } catch (error) {
	// 	// Log any errors that occur during the address retrieval
	// 	console.error(error);
	// 	throw error; // Re-throw the error to propagate it to the calling code
	// }
}
