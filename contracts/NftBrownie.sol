// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.15;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NftBrownie is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    uint256 public totalSupply;

    event NewPythonNFTMinted(address sender, uint256 tokenId);

    constructor() ERC721("NFT with Python", "NFTPY") {
        totalSupply = 1000;
    }

    function mintPythonNFT(string memory tokenUri) public {
        uint256 newNftId = _tokenIds.current();
        require(newNftId < totalSupply, "Total supply is exceeded!");

        _safeMint(_msgSender(), newNftId);
        _setTokenURI(newNftId, tokenUri);
        _tokenIds.increment();
        emit NewPythonNFTMinted(_msgSender(), newNftId);
    }
}
