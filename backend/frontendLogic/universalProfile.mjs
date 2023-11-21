// functions
// 1. check if the address has a universal profile
import { ERC725 } from "@erc725/erc725.js";
import lsp3ProfileSchema from '@erc725/erc725.js/schemas/LSP3ProfileMetadata.json' assert { type: 'json' };

const SAMPLE_PROFILE_ADDRESS = "0xB031363560403179Aac100d51864e27fFF4D7807"; // static address
const SAMPLE_PROFILE_ADDRESS_1 = '0x47D43af4aa7640005D2Bd81917e6E9fE084E8428';

const RPC_URL = 'https://rpc.testnet.lukso.network';
const config = {
  ipfsGateway: 'https://api.universalprofile.cloud/ipfs',
  gas: 20_000_000, // optional, default is 1_000_000
};

const erc725 = new ERC725(lsp3ProfileSchema, SAMPLE_PROFILE_ADDRESS_1, RPC_URL, config);

export const fetchProfileData = async () => {
    try {
        const owner = await erc725.getOwner();
        const profile = await erc725.fetchData('LSP3Profile');
        console.log(owner, profile);
    } catch (error) {
        console.log(error);
    }
}

fetchProfileData();
// 2. if user has a profile read the details
// 3. if it doesn't create the universal profile