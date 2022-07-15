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
      accounts: ['bdd822d73e2c7b4b5cf987698635a5ce7ac8ce0f281ee6f85ddca7d6b4ca8d02', 'f9ac293c3273cce67f7aa52a3b4015c66bf26ec5dad235eafe9f1cf5b61dfecc']
    }
  }
};
