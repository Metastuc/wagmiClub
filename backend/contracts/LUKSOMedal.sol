// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import { LSP7DigitalAsset } from "@lukso/lsp-smart-contracts/contracts/LSP7DigitalAsset/LSP7DigitalAsset.sol";

contract Medal is LSP7DigitalAsset {
    using Counters for Counters.Counter; // OpenZepplin Counter
    Counters.Counter private _medalCount; // Counter for medals

    mapping (uint256 => address) public medals;

    mapping (uint => string) URI; // mapping to keep track of the Token URI

    mapping (address => bool) public isOrganization;

    constructor(string memory _name, string memory _symbol) LSP7DigitalAsset(_name, _symbol, msg.sender, true) {}

    function rewardMedal(uint256 id, address[] memory winners) public {
        require(medals[id] == msg.sender);
        for (uint i = 0; i < winners.length; i++) {
            _mint({to: winners[i], amount: 1, force: true, data: ""});
        }
    }

    // get TokenURI
    // usage of the tokenURI function for backward compatibility with ERCs
    function tokenURI(uint256 _tokenId) public view virtual returns (string memory) {
        return(URI[_tokenId]);
    }

    // function to stop authorization of tokens in order to make it soulbound
    function authorizeOperator(address operator, uint256 amount, bytes memory operatorNotificationData) public virtual override {
        revert("You cannot authorize operator beacuase this is a soulbound token");
    }

    // functions to cancel transfers to another address
    function transfer(address from, address to, uint256 amount, bool force, bytes memory data) public virtual override {
        revert("Soulbound token cannot be transfered to another address");
    }

    function transferBatch(address[] memory from, address[] memory to, uint256[] memory amount, bool[] memory force, bytes[] memory data) public virtual override {
        revert("Soulbound token cannot be transfered to another address");
    }
}
