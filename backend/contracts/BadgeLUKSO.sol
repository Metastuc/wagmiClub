// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/utils/Counters.sol";
import { LSP8IdentifiableDigitalAsset } from "@lukso/lsp-smart-contracts/contracts/LSP8IdentifiableDigitalAsset/LSP8IdentifiableDigitalAsset.sol";
import { _LSP8_TOKENID_TYPE_NUMBER } from "@lukso/lsp-smart-contracts/contracts/LSP8IdentifiableDigitalAsset/LSP8Constants.sol";

contract Badge is LSP8IdentifiableDigitalAsset {
    using Counters for Counters.Counter; // OpenZepplin Counter
    Counters.Counter private _badgeCount; // Counter for badges minted

    mapping (uint => string) public URI; // mapping to keep track of the Token URI

    mapping (address => bool) public isOrganization;

    constructor(string memory _name, string memory _symbol) LSP8IdentifiableDigitalAsset(_name, _symbol, msg.sender, _LSP8_TOKENID_TYPE_NUMBER) {

    }

    // mint
    function mint(address to, string memory uri) public {
        URI[_badgeCount.current()] = uri;
        bytes32 tokenId = keccak256(abi.encodePacked(_badgeCount.current()));
        _mint(to, tokenId, true, "");
        _badgeCount.increment();
    }

    // get TokenURI
    // usage of the tokenURI function for backward compatibility with ERCs
    function tokenURI(uint256 _tokenId) public view virtual returns (string memory) {
        return(URI[_tokenId]);
    }

    // function to stop authorization of tokens in order to make it soulbound
    function authorizeOperator(address operator, bytes32 tokenId, bytes memory operatorNotificationData) public virtual override {
        revert("You cannot authorize operator beacuase this is a soulbound token");
    }

    // functions to cancel transfers to another address
    function transfer(address from, address to, bytes32 tokenId, bool force, bytes memory data) public virtual override {
        revert("Soulbound token cannot be transfered to another address");
    }

    function transferBatch(address[] memory from, address[] memory to, bytes32[] memory tokenId, bool[] memory force, bytes[] memory data) public virtual override {
        revert("Soulbound token cannot be transfered to another address");
    }

    modifier onlyOrganization {
        require(isOrganization[msg.sender] == true, "You are not authorized to call this function");
        _;
    }
    
}