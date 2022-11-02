const { ethers, getNamedAccounts } = require("hardhat")

async function cancel() {
    const { deployer } = await getNamedAccounts()
    const AMOUNT = ethers.utils.parseEther("3")
    const NFT = await ethers.getContract("NFT", deployer)
    const market = await ethers.getContract("Market", deployer)

    const tx = await market.buyItem(NFT.address, 11, { value: AMOUNT })
    await tx.wait(1)
    console.log("bought NFT")
}

cancel()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
