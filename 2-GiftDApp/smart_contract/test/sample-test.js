const { expect } = require("chai");
const { ethers } = require("hardhat");


// describe("testFunctionCall", () => {
//   it("Should return Hello from testFunctionCall()", async () => {
//     const SupplyChain = await ethers.getContractFactory("SupplyChain")
//     const supplyChain = await SupplyChain.deploy();
//     await supplyChain.deployed();

//     expect(await supplyChain.testFunctionCall()).to.equal("Hello from testFunctionCall()");
//   });
// });


describe("manufacture function call", () => {
  it("Should manufacture a product", async () => {
    const SupplyChainStep1 = await ethers.getContractFactory("SupplyChainStep1")
    const supplyChainStep1 = await SupplyChainStep1.deploy();
    await supplyChainStep1.deployed();

    // expect(await supplyChainStep1.manufactureProduct("", "", "", "", "", 1, 2, "")).to.equal("Hello from testFunctionCall()");
    // const ownerBalance = await supplyChainStep1.balanceOf("0x061b3aa0433e6beD7b396abea13F3Ac4A36dC87C");
    const ownerBalance = await supplyChainStep1.testFunctionCall();
  });
});
