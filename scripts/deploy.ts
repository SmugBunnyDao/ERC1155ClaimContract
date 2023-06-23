// import { expect } from "chai";
import { ethers } from "hardhat";
// import keccak256 from "keccak256";
// import { MerkleTree } from "merkletreejs";

async function main() {

  const [owner] = await ethers.getSigners();
  console.log("owner",owner.address);

  // const nftContractFactory = await ethers.getContractFactory('ERC1155LazyPayableClaim');
  const nftContract = await nftContractFactory.deploy("0x00000000000076A84feF008CDAbe6409d2FE638B");
  // const nftContract = await nftContractFactory.deploy("0x5Ce1318B35aE2d3Bd792706ff5C043c14dE24bfD"); // CMP testnet
  // const nftContract = await nftContractFactory.deploy(); // CMP mainnet
  
  
  console.log("wait deployed to:", nftContract.address);
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
