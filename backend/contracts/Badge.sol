// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Badge is ERC721 {
    using Counters for Counters.Counter; // OpenZepplin Counter
    Counters.Counter private _badgeCount; // Counter for badges minted

    mapping (uint => string) URI; // mapping to keep track of the Token URI

    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {}

    // mint
    function mint(address to, string memory uri) public {
        URI[_badgeCount.current()] = uri;
        _mint(to, _badgeCount.current());
        _badgeCount.increment();
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
}