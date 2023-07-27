const { ethers } = require("hardhat");
require("dotenv").config();

const contractAddress = process.env.CONTRACT_ADDRESS;
const accountAddress = process.env.PUBLIC_KEY;

// NFT metadata array containing 5 token URIs
const nftMetadata = [
  "https://gateway.pinata.cloud/ipfs/QmSqCvAyqLYp7j2M8JHgvxcRSv8sCng6U7FpRTeTygE4Hh/lexica1.json",
  "https://gateway.pinata.cloud/ipfs/QmSqCvAyqLYp7j2M8JHgvxcRSv8sCng6U7FpRTeTygE4Hh/lexica2.json",
  "https://gateway.pinata.cloud/ipfs/QmSqCvAyqLYp7j2M8JHgvxcRSv8sCng6U7FpRTeTygE4Hh/lexica3.json",
  "https://gateway.pinata.cloud/ipfs/QmSqCvAyqLYp7j2M8JHgvxcRSv8sCng6U7FpRTeTygE4Hh/lexica4.json",
  "https://gateway.pinata.cloud/ipfs/QmSqCvAyqLYp7j2M8JHgvxcRSv8sCng6U7FpRTeTygE4Hh/lexica5.json",
];

async function main() {
  // Connect to the deployed contract using the contract address and private key

  const contract = await ethers.getContractAt("AnasContract", contractAddress);

  console.log("Account Address:", accountAddress);

  // Mint 5 NFTs with the given metadata
  for (let i = 0; i < nftMetadata.length; i++) {
    const metadataURI = nftMetadata[i];

    // Call the contract's mintNFT function to create a new NFT
    const transaction = await contract.mintNFT(accountAddress, metadataURI);

    // Wait for the transaction to be mined
    await transaction.wait();

    console.log(`NFT ${i + 1} minted with metadata URI: ${metadataURI}`);
  }
  console.log(`All NFTs are minted to your Contract Address.`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
