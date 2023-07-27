# NFT Collection Deployment and Transfer with Polygon Bridge

## Project Overview
This project demonstrates the process of deploying an NFT collection on the Ethereum blockchain and transferring the assets to the Polygon network using the Polygon Bridge. The main objectives were to increase demand for the NFTs by leveraging Polygon's faster and cheaper transactions and to utilize an image generation tool to create unique NFT images.

## Project Highlights
- Deployed an NFT collection named "AnasNFT" on the Ethereum blockchain.
- Utilized an image generation tool (DALLE 2 or Midjourney) to create 5 unique and visually appealing NFT images.
- Stored the generated images on IPFS using pinata.cloud for efficient access.
- Developed an ERC721 smart contract, "AnasContract," with a `promptDescription` function that returns the prompt used for generating the images.
- Successfully mapped the NFT collection to the Polygon network for seamless transfer and access on Polygon.
- Implemented Hardhat scripts for batch minting all 5 NFTs and transferring them from Ethereum to Polygon Mumbai using the FxPortal Bridge.
- Conducted thorough testing to ensure the accurate balance of NFTs on the Polygon Mumbai network.

## Tools Used
- Hardhat: A development environment for Ethereum smart contracts.
- IPFS (InterPlanetary File System): Used to store and access NFT image files.
- Polygon Network: A Layer 2 scaling solution for Ethereum.
- ERC721: Ethereum standard for Non-Fungible Tokens.
- FxPortal Bridge: Facilitates the transfer of assets between Ethereum and Polygon.

## Project JavaScript Files and Usages

### Deploy Contract (deploy-contract.js)
- **Usage**: Deploy the "AnasContract" ERC721 smart contract on the Goerli Ethereum Testnet.
- **Command**: `npx hardhat run deploy-contract.js --network goerli`
- **Description**: This script deploys the "AnasContract" ERC721 smart contract on the Goerli Ethereum Testnet. The contract represents the NFT collection and includes the `promptDescription` function to store the prompt used for generating the NFT images.

### Batch Mint NFTs (mint-nfts.js)
- **Usage**: Batch mint all 5 NFTs for the "AnasNFT" collection with the specified image metadata URIs.
- **Command**: `npx hardhat run mint-nfts.js --network goerli`
- **Description**: This script mints all 5 NFTs in the "AnasNFT" collection on the Ethereum blockchain. It uses the ERC721A standard for optimized batch minting. The NFTs are associated with unique metadata URIs, pointing to the generated images stored on IPFS.

### Batch Transfer NFTs (transfer-nfts.js)
- **Usage**: Batch transfer all 5 NFTs from Ethereum to Polygon Mumbai using the FxPortal Bridge.
- **Command**: `npx hardhat run transfer-nfts.js --network mumbai`
- **Description**: This script transfers all 5 NFTs from the Ethereum blockchain to the Polygon Mumbai network using the FxPortal Bridge. It includes approvals and deposits required for the successful transfer of NFTs.

### Test NFT Balance on Mumbai (test-balance.js)
- **Usage**: Test the balance of NFTs on the Polygon Mumbai network.
- **Command**: `npx hardhat run test-balance.js --network mumbai`
- **Description**: This script tests the balance of NFTs owned by the specified account on the Polygon Mumbai network. It ensures that the batch transfer of NFTs from Ethereum to Polygon Mumbai was successful.

## Instructions
1. Clone the repository to your local machine.
2. Install the necessary dependencies by running `npm install`.
3. Set up the required environment variables in the `.env` file.
4. Execute the provided Hardhat scripts as needed for deploying, minting, transferring, and testing the NFT collection.
5. Verify the NFT balances on Polygon Mumbai to ensure successful transfer.

## Conclusion
This project successfully deployed an NFT collection on Ethereum, mapped it to the Polygon network, and transferred the NFTs to Polygon Mumbai using the FxPortal Bridge. By leveraging Polygon's Layer 2 scaling solution, the project aims to enhance the NFTs' accessibility and reduce transaction costs for users. The inclusion of unique NFT images generated through DALLE 2 or Midjourney adds an artistic touch to the collection, making it more appealing to potential buyers and collectors.

## License
[MIT](LICENSE)
