import { signUp } from "./signup";
export { signUp };

import { getWalletAddress } from "./getAddress";
export { getWalletAddress };

import { connectWallet } from "./connectWallet";
export { connectWallet };

// export var provider, signer, baseAPIURL;

export const { getProvider, getSigner } = {
	getProvider: () => provider,
	getSigner: () => signer,
};
