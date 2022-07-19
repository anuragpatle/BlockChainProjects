// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

const main = async () => {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();
  await transactions.deployed();
  console.log("Transactions deployed to:", transactions.address);
  saveFrontendFiles(transactions, "Transactions");


  const SupplyChain = await hre.ethers.getContractFactory("SupplyChain");
  const supplyChain = await SupplyChain.deploy();
  await supplyChain.deployed();
  console.log("SupplyChain deployed to:", supplyChain.address);
  saveFrontendFiles(supplyChain, "SupplyChain");


  const SupplyChainStep1 = await hre.ethers.getContractFactory("SupplyChainStep1");
  const supplyChainStep1 = await SupplyChainStep1.deploy();
  await supplyChainStep1.deployed();
  console.log("SupplyChainStep1 deployed to:", supplyChainStep1.address);
  saveFrontendFiles(supplyChainStep1, "SupplyChainStep1");


  const SupplyChainStep2 = await hre.ethers.getContractFactory("SupplyChainStep2");
  const supplyChainStep2 = await SupplyChainStep2.deploy();
  await supplyChainStep2.deployed();
  console.log("SupplyChainStep2 deployed to:", supplyChainStep2.address);
  saveFrontendFiles(supplyChainStep2, "SupplyChainStep2");


  const SupplyChainStep3 = await hre.ethers.getContractFactory("SupplyChainStep3");
  const supplyChainStep3 = await SupplyChainStep3.deploy();
  await supplyChainStep3.deployed();
  console.log("SupplyChainStep3 deployed to:", supplyChainStep3.address);
  saveFrontendFiles(supplyChainStep3, "SupplyChainStep3");


  const SupplyChainStep4 = await hre.ethers.getContractFactory("SupplyChainStep4");
  const supplyChainStep4 = await SupplyChainStep4.deploy();
  await supplyChainStep4.deployed();
  console.log("SupplyChainStep4 deployed to:", supplyChainStep4.address);
  saveFrontendFiles(supplyChainStep4, "SupplyChainStep4");


  const SupplyChainStep5 = await hre.ethers.getContractFactory("SupplyChainStep5");
  const supplyChainStep5 = await SupplyChainStep5.deploy();
  await supplyChainStep5.deployed();
  console.log("SupplyChainStep5 deployed to:", supplyChainStep5.address);
  saveFrontendFiles(supplyChainStep5, "SupplyChainStep5");


  const SupplyChainStep6 = await hre.ethers.getContractFactory("SupplyChainStep6");
  const supplyChainStep6 = await SupplyChainStep6.deploy();
  await supplyChainStep6.deployed();
  console.log("SupplyChainStep6 deployed to:", supplyChainStep6.address);
  saveFrontendFiles(supplyChainStep6, "SupplyChainStep6");

  const SupplyChainStep7 = await hre.ethers.getContractFactory("SupplyChainStep7");
  const supplyChainStep7 = await SupplyChainStep7.deploy();
  await supplyChainStep7.deployed();
  console.log("SupplyChainStep7 deployed to:", supplyChainStep7.address);
  saveFrontendFiles(supplyChainStep7, "SupplyChainStep7");


  const SupplyChainStep8 = await hre.ethers.getContractFactory("SupplyChainStep8");
  const supplyChainStep8 = await SupplyChainStep8.deploy();
  await supplyChainStep8.deployed();
  console.log("SupplyChainStep8 deployed to:", supplyChainStep8.address);
  saveFrontendFiles(supplyChainStep8, "SupplyChainStep8");

  const SupplyChainStep9 = await hre.ethers.getContractFactory("SupplyChainStep9");
  const supplyChainStep9 = await SupplyChainStep9.deploy();
  await supplyChainStep9.deployed();
  console.log("SupplyChainStep9 deployed to:", supplyChainStep9.address);
  saveFrontendFiles(supplyChainStep9, "SupplyChainStep9");



}
let contractAddressObj = {};
const saveFrontendFiles = (_contract, contractName) => {
  const fs = require("fs");
  const contractsDir = __dirname + "/../../client/src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  // Object.keys(_contract).forEach(prop => console.log(prop))

  contractAddressObj[contractName] = _contract.address;

  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify(contractAddressObj, undefined, 2)
  );

  const TokenArtifact = artifacts.readArtifactSync(contractName);

  fs.writeFileSync(
    contractsDir + "/" + contractName + ".json",
    JSON.stringify(TokenArtifact, null, 2)
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.Transactions
// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });

const runMain = async () => {
  try {
    await main();
    process.exit(0); // means process went successfully
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();
