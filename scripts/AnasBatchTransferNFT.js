const { ethers } = require("hardhat");
require("dotenv").config();

const ethereumContractAddress = process.env.CONTRACT_ADDRESS;
const ethereumContractName = "AnasContract";
const publicKey = process.env.PUBLIC_KEY;
const rootTunnelAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
const rootTunnelAbi = require("../bridgeContract/rootContractABI.json"); // Insert the ABI of the RootTunnel contract

const nftTokenIds = [1, 2, 3, 4, 5];

async function main() {

  const rootTunnelContract = await ethers.getContractAt(rootTunnelAbi, rootTunnelAddress);

  const ethereumContract = await ethers.getContractAt(ethereumContractName, ethereumContractAddress);
  for (const tokenId of nftTokenIds) {
    await ethereumContract.approve(rootTunnelAddress, tokenId);
    console.log(`NFT with Token ID ${tokenId} approved for transfer.`);
  }

  for (const tokenId of nftTokenIds){

    await rootTunnelContract.deposit(
      ethereumContractAddress,
      publicKey,
      tokenId,
      publicKey,{gasLimit: 300000}
    );

    console.log(`NFT ${tokenId} transferred successfully on Polygon Network`);
  }

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
