// functions
// 1. check if the address has a universal profile
import { ERC725 } from "@erc725/erc725.js";
import lsp3ProfileSchema from '@erc725/erc725.js/schemas/LSP3ProfileMetadata.json' assert { type: 'json' };
import { LSPFactory } from '@lukso/lsp-factory.js';
const provider = 'https://rpc.testnet.lukso.network';

const SAMPLE_PROFILE_ADDRESS = "0xB031363560403179Aac100d51864e27fFF4D7807"; // static address
const SAMPLE_PROFILE_ADDRESS_1 = '0x47D43af4aa7640005D2Bd81917e6E9fE084E8428';

const PRIVKEY = '4222eab5541962856ad0ae505df6dd1414936e77790a7a64ed3670ae076ea76a';

const RPC_URL = 'https://rpc.testnet.lukso.network';
const config = {
  ipfsGateway: 'https://api.universalprofile.cloud/ipfs',
  gas: 20_000_000, // optional, default is 1_000_000
};

const erc725 = new ERC725(lsp3ProfileSchema, SAMPLE_PROFILE_ADDRESS_1, RPC_URL, config);
const lspFactory = new LSPFactory(provider, {
    deployKey: PRIVKEY,
    chainId: 4201,
    // ipfsGateway: 'https://api.universalprofile.cloud/ipfs',
    // ipfsGateway: {
    //     host: 'ipfs.infura.io',
    //     port: 5001,
    //     protocol: 'https',
    //   },
});

export const fetchProfileData = async () => {
    try {
        const owner = await erc725.getOwner();
        const profile = await erc725.fetchData('LSP3Profile');
        console.log(owner, profile.value.LSP3Profile.tags);
    } catch (error) {
        console.log(error);
    }
}

export const createProfile = async () => {
    const myLSP3MetaData = {
        name: 'My Universal Profile',
        description: 'My cool Universal Profile',
        profileImage: [
          {
            width: 500,
            height: 500,
            verification: {
              method: 'keccak256(bytes)',
              // bytes32 hex string of the image hash
              data: '0xfdafad027ecfe57eb4ad047b938805d1dec209d6e9f960fc320d7b9b11cbed14',
            },
            url: 'ipfs://QmPLqMFHxiUgYAom3Zg4SiwoxDaFcZpHXpCmiDzxrtjSGp',
          },
        ],
        backgroundImage: [
          {
            width: 500,
            height: 500,
            verification: {
              method: 'keccak256(bytes)',
              // bytes32 hex string of the image hash
              data: '0xfdafad027ecfe57eb4ad047b938805d1dec209d6e9f960fc320d7b9b11cbed14',
            },
            url: 'ipfs://QmPLqMFHxiUgYAom3Zg4SiwoxDaFcZpHXpCmiDzxrtjSGp',
          },
        ],
        tags: ['public profile', 'creator'], // profession/about, wagmi profile
        links: [
          {
            title: 'My Website',
            url: 'www.my-website.com',
          },
          {
            title: 'X',
            url: 'www.twitter.com/NatX_eth',
          },
        ],
    };

    try {
        const myContracts = await lspFactory.UniversalProfile.deploy({
           controllerAddresses: '0xdeDf26b9280620eaa52e0811bF7991a1B6aB077E',
           lsp3Profile: myLSP3MetaData,
        });
        const myUPAddress = myContracts.LSP0ERC725Account.address;
        console.log(myUPAddress);
    } catch (error) {
        console.log(error);
    }
}

// createProfile();

async function createUniversalProfile() {
    try {
        const deployedContracts = await lspFactory.UniversalProfile.deploy({
            controllerAddresses: ['0xdeDf26b9280620eaa52e0811bF7991a1B6aB077E'], // root address (address attached to profile)
            lsp3Profile: 'https://api.universalprofile.cloud/ipfs/QmRvZRVqt47bmZ5hjjA9QxpnWz1fZFwjmXvnAyAkjoYgCt' // provision of link to universal profile (provision get endpoint?)
        });
    
        const myUPAddress = deployedContracts.LSP0ERC725Account.address;
        console.log('my Universal Profile address: ', myUPAddress);
    } catch (error) {
        console.log(error);
    }

}
// createUniversalProfile();
fetchProfileData();

// 2. if user has a profile read the details
// 3. if it doesn't create the universal profile