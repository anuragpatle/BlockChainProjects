const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("testFunctionCall", () => {
  it("Should return Hello from testFunctionCall()", async () => {
    const SupplyChain = await ethers.getContractFactory("SupplyChain")
    const supplyChain = await SupplyChain.deploy();
    await supplyChain.deployed();

    expect(await supplyChain.testFunctionCall()).to.equal("Hello from testFunctionCall()");
  });
});
