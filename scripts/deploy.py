from brownie import NftBrownie, network, config, accounts


def deploy_contract():
    if(network.show_active() == "development"):
        account = accounts[0]
    else:
        account = accounts.add(config["wallets"]["from_key"])
    
    nftpy_contract = NftBrownie.deploy(
        {"from" : account},
        publish_source=config["networks"][network.show_active()].get("verify")
    )
    print("contract has been deployed successfully to :", nftpy_contract.address)

    #return nftpy_contract

def main():
    deploy_contract()

