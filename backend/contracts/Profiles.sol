// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Profiles is ERC721{
    // create an auto-increment counter to track users
    using Counters for Counters.Counter; // OpenZepplin Counter
    Counters.Counter private _userCount; // Counter for userCount

    // mapping that tracks the tokenId to meetadata(IPFS hash)
    mapping (uint256 => string) profileData;

    // mapping to keep track of addresses that have minted profiles
    mapping (address => bool) minted;

    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {
        // mint our profile with tokenId 0
    }

    function mintProfile(string memory profileHash) public notMinted {
        profileData[_userCount.current()] = profileHash;
        _mint(msg.sender, _userCount.current());
        _userCount.increment();
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        _requireMinted(tokenId);

        return profileData[tokenId];
    }

    // modifier to ensure that no user can mint more than one profile
    modifier notMinted() {
        require (minted[msg.sender] != true, "you already have a profile");
        _;
    }
}