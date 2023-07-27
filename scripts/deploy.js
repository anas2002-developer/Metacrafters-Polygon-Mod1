// Import necessary libraries and Hardhat environment
const { ethers } = require('hardhat');

async function main() {
  
  const name = 'AnasNFT'; // The name of your NFT contract
  const symbol = 'ANFT'; // The symbol of your NFT contract
  const promptDescription = 'Ice cream clouds pastel color palette sky'; // The prompt description for your NFTs

  // Deploy the contract
  const AnasContract = await ethers.getContractFactory('AnasContract');
  const anasContract = await AnasContract.deploy(name, symbol, promptDescription);

  // Wait for the contract to be mined
  await anasContract.deployed();

  console.log('AnasContract deployed to:', anasContract.address);
}

// Run the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
