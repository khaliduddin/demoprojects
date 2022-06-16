#!/usr/bin/python3
from brownie import NftBrownie, accounts, network, config

sample_token_uri = "https://ipfs.io/ipfs/QmQt7gWR3drkGeDi4ajTR856oXcgvcsFJZoPqvCxa1tUUj"


def main():
    dev = accounts.add(config["wallets"]["from_key"])
    print(network.show_active())
    nft_brownie = NftBrownie[len(NftBrownie) - 1]    
    transaction = nft_brownie.mintPythonNFT(sample_token_uri, {"from": dev})
    transaction.wait(1)
    print(
        "NFT successfully minted! You can view your NFT on OpenSea by connecting the your wallet"
    )
