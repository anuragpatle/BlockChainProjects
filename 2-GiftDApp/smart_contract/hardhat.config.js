// https://dashboard.alchemyapi.io/apps/iigz3d0uvprfzypj

require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');


// For Alchemy
// url: is url of the application you created using Alchemy website
// accounts: is not the metamask address, rather it is the matamask private key.
// For private key: "metamask addon" --> "three dots" --> "acount details" --> "export private key"

// For Ganache


module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "ropsten",
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/XniA4dRHHlKRaYEKCR9uPUQYuHSg7x3o',
      accounts: ['0ae9094d61105fc584ded4e6d75fafbdd33a0e232a37ff39bc6be30596322777']
    },
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: ['795504a4ef6ba797e1ce5dde67095e1c2cd20a1fd7aee8c99c3e610370298919', '1463a71fe97e5be0211b0eb3ca658ad18ab809e6edc59b75790579f0f757168f']
    }
  }
};
