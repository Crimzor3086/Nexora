import { ethers } from "hardhat";

async function main() {
  const NexoraToken = await ethers.getContractFactory("NexoraToken");
  const token = await NexoraToken.deploy();
  await token.waitForDeployment();
  console.log("NexoraToken deployed to:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
