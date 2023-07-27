const { ethers } = require("hardhat");
require("dotenv").config();


const polygonContractAddress = process.env.POLYGON_CONTRACT;
const accountAddress = process.env.PUBLIC_KEY;

async function balance() {
  const polygonContract = await ethers.getContractAt(
    "AnasContract",
    polygonContractAddress
  );

  const balanceOnMumbai = await polygonContract.balanceOf(accountAddress);
  console.log(`Balance of NFTs on Polygon Network: ${balanceOnMumbai}`);
}

balance().catch((err) => {
  console.log(err);
});
