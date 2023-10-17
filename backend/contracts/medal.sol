// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol";

contract Medal is ERC721, ChainlinkClient, ConfirmedOwner {
    using Counters for Counters.Counter; // OpenZepplin Counter
    Counters.Counter private _medalCount; // Counter for medals

    bytes32 private jobId;
    uint256 private fee;

    // specifying the different values from API endpoints
    uint256 public nftCollectorValue;
    uint256 public governanceValue;
    uint256 public contributorValue;
    uint256 public liquidityValue;
    uint256 public traderValue;

    mapping (uint => string) URI; // mapping to keep track of the Token URI
    mapping (uint256 => string) categoryEndpoints; // tracks the endpoints of the categories
    mapping (uint256 => string) chainMapping; // tracks the various supported chains 

    string internal APIURL;

    // variable to hold value returned from the API
    uint256 public value;

    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) ConfirmedOwner(msg.sender) {
        setChainlinkToken(0x6D0F8D488B669aa9BA2D0f0b7B75a88bf5051CD3); // set for base
        setChainlinkOracle(0x6090149792dAAeE9D1D568c9f9a6F6B46AA29eFD); // set for base
        jobId = "ca98366cc7314957b8c012c72f05aeeb"; // set for base
        fee = (1 * LINK_DIVISIBILITY) / 10;
    }

    // struct for the medal details
    // address
    // chain
    // category
    // criteria
    // claimed
    struct medal {
        address contractAddress;
        uint256 chain;
        uint256 category;
        uint256 criteria;
        uint256 claimable;
        uint256 claimed;
        string nftName;
    }

    // mapping to keep track of medals
    mapping (uint256 => medal) public medals;

    // function to create medal
    function createMedal(string memory metadataHash, address contractAddress, uint256 contractChain, uint256 category, uint256 criteria, uint256 claimable, string memory nftName) public {
        medals[_medalCount.current()].contractAddress = contractAddress;
        medals[_medalCount.current()].chain = contractChain;
        medals[_medalCount.current()].category = category;
        medals[_medalCount.current()].criteria = criteria;
        medals[_medalCount.current()].claimable = claimable;
        medals[_medalCount.current()].nftName = nftName;
        URI[_medalCount.current()] = metadataHash;
        _medalCount.increment();
    }

    // claim
    function mint(address to, uint256 id) public {
        // require checkElig = true
        _mint(to, id);
    }

    // get TokenURI
    function tokenURI(uint256 _tokenId) public view virtual override returns (string memory) {
        return(URI[_tokenId]);
    }

    // cancel approve, transfer, transferFrom (make it soul bound)
    function approve(address to, uint256 tokenId) public virtual override {
        revert("Soulbound token cannot be approved to another address");
    }

    function transferFrom(address from, address to, uint256 tokenId) public virtual override {
        revert("Soulbound token cannot be transfered to another address");
    }

    // function to check for eligibility to claim the NFT
    function checkElig(uint256 id) public returns(bool) {
        // get medal category
        // get value to check
        // check if the value is <= medal.criteria
        // then return bool
    }

    // function to read the data from API
    function requestNFTCollectorValue(uint256 id) public returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(
            jobId,
            address(this),
            this.nftFulfillment.selector
        );

        string memory category = categoryEndpoints[medals[id].category];
        string memory chain = chainMapping[medals[id].chain];
        string memory nftName = medals[id].nftName;
        string memory userAddress = Strings.toHexString(msg.sender);

        string memory url = string.concat(APIURL, "/" , category, "?chain=", chain, "&nftName=", nftName, "&userAddress=", userAddress);

        // Set the URL to perform the GET request on
        req.add(
            "get",
            url
        );

        // Set the path to find the desired data in the API response, where the response format is:
        req.add("path", "RESULT"); // Chainlink nodes 1.0.0 and later support this format

        // Sends the request
        return sendChainlinkRequest(req, fee);
    }

    function nftFulfillment(
        bytes32 _requestId,
        uint256 nftValue
    ) public recordChainlinkFulfillment(_requestId) {
        nftCollectorValue = nftValue;
    }

}