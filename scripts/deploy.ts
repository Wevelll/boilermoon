import { ethers } from "hardhat";

const CONTRACT_NAME = "SampleContract";
async function deploy() {
    const signer = (await ethers.getSigners())[0];
    const balance = await signer.getBalance();
    console.log(`Deployer addr: ${signer.address}\n
                 Deployer balance: ${balance}`);
    const factory = await ethers.getContractFactory(CONTRACT_NAME);

    const contract = await factory.deploy();
    await contract.deployed();
    console.log(`${CONTRACT_NAME} deployed to: ${contract.address}`);
}

deploy().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
