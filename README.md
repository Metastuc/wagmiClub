-Problem Statement
-Solution
-Our Product 
-Tech stack 
-Team Members 
-Project features 
-Why wagmiclub 
-Future project plans 

Problem Statement-

“Professionals work too hard to build credibility and reputation but we do not have a system where they can store these merit reputations and endorsements  built over the years”

Existing networking solutions lack a dedicated platform for professionals to build their credibility and reputation in a secure and transparent manner. This creates a need for a social web3 LinkedIn-like dApp that combines the benefits of blockchain technology with professional networking, offering enhanced privacy, control, and trust. 

Solution - 

A decentralized application (dApp) that combines the features of professional networking and blockchain technology. It provides professionals with a secure and transparent platform to network, build a verifiable reputation.
Professionals need a system to independently showcase their qualifications, experience, genuine

connections, proof of previous work, transparent credential verification order than traditional networking
platforms that lack transparency and trust with limited control over personal data.

Our Product - 

Wagmiclub’ is a decentralized platform for professionals like (creators, designers, advisors, investors, marketers, founders) to network, build reputation and show proof of previous work as Nft badge awarded by organizations,DAOs. This badge is an on-chain
validation which shows an individual is recognized by a company/org. Our vision is to build a future where testimonials, staff

recognition, work reputations hold more validity and become tamper proof on-chain, as they are non
transferable, we are building wagmiclub on Lukso blockchain.
Our dapp provides super user-friendly interface that anyone can easily navigate. Professionals can effortlessly create a profile, network,

earn trustscores, reputation badge and medals.

Recruiters will have the opportunity to explore a diverse pool of professionals through our platform marketplace . We made it easy to identify
top talents by referring to the leaderboard which ranks profiles based on on-chain badge, medals and trustscore.

Tech stack - 

Technologies Used
Stack - Usage Summary
Solidity - writing the smart contracts
Node.js - writing the backend
Next.js - writing the frontend

LUKSO Stack (All LUKSO usage was done from the backend in the API/Index.js file)
Mandatory Tools
LSP7Mintable - The LSP7Mintable smart contract was used to represent the medals contract, each medal that was created was deployed on chain as an LSP7Mintable contract. This smart contract was used because of its fungible nature because more than one person can be eligible to a medal. The 'mint()' function was used to mint medals.

LSP8Mintable - The LSP8Mintable smart contract was used to represent the merit badges contract, each organization has a merit badge contract that enables the badge holders to easily verify that their badges are from a specific organization. Unlike the LSP7Mintable smart contracts the LSP8Mintable smart contract was used for badges because of its non-fungible nature. The 'mint()' function was used to mint badges to users and the 'setData' function was used to set the metadata for various tokenIds.

Universable Profile - LUKSO Universal Profile were used as user profiles on the WAGMI app, the universal profile metadata is linked to all the user activity on Wagmi Club and as such a users universal profile will always represent their profile on Wagmi.
A new universal profile is created specifically for every new user on Wagmi Club. The 'window.lukso' object was used to connect the user to the Dapp using 
the UP browser extension.

Other tools

erc725.js - This was used to fetch data about universal profiles using the fethData method.
LUKSO Factory - this was used to deploy the Universal Profile, LSP7 and LSP8 smart contracts.

Important live links - 

Team members - 

Jehee ( Ux Engineer & Team lead)

Miracle (web3 Frontend Engineer )

Natx - (Blockchain Engineer) 

Project features- 

•User profile (Built on universal profiles Lukso as self sovereign identity) 

•Merit Badge (Enables Orgs to award reputation badge to individuals as proof of their work and credibility in their professional field)

•Medals ( Orgs can award medals to recognise outstanding achievements and contributions in their company or onchain ;liquidity providers, expert trader, bug hunter etc) 

•Trustscore (This system combines and scores from various factors like badge, medals and endorsements)

•Reputation board ( Discover top talents, network and connect with professionals with ease, makes hiring and credibility check swift) 

.Endorsement (Endorse and recognise co-professionals based on personal experience working together) 

Why Wagmiclub - We are focused on helping professionals build career and onchain reputation that is tamper proof and verifiable,our dapp makes it easy to collect and showcase merit badge,medals and trustscores that is tied to your universal identity and stays forever.

Future Project Plans - we look forward to strategic partnerships with web3 organisations and investors to enhance our product adoption and utility, as our user base grows we will continue to evolve and iterate till we can’t code again