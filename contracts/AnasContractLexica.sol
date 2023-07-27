// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract AnasContract is ERC721Enumerable {
    // Token ID counter
    uint256 private _tokenIdCounter;

    // Prompt description used to generate NFTs
    string private _promptDescription;

    // Mapping to store token URIs
    mapping(uint256 => string) private _tokenURIs;

    constructor(string memory name, string memory symbol, string memory promptDescription) ERC721(name, symbol) {
        _tokenIdCounter = 1; // Start token IDs from 1
        _promptDescription = promptDescription;
    }

    // Mint function to create a new NFT
    function mintNFT(address receiver, string memory newTokenURI) public {
        uint256 newTokenId = _tokenIdCounter;
        _mint(receiver, newTokenId);
        _setTokenURI(newTokenId, newTokenURI);
        _tokenIdCounter++;
    }

    // Internal function to set the token URI
    function _setTokenURI(uint256 tokenId, string memory uri) internal {
        require(_exists(tokenId), "ERC721Metadata: URI set of nonexistent token");
        _tokenURIs[tokenId] = uri;
    }

    // Override the base function to return the tokenURI of a specific token
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        return _tokenURIs[tokenId];
    }

    // Get the prompt description used to generate the NFTs
    function getPromptDescription() public view returns (string memory) {
        return _promptDescription;
    }
}