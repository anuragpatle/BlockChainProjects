# Steps

1. To initialize the truffle setup.

	BlockChainProjects/1-EThereumTruffleExample$ truffle -init

2. To use Ganache local account.

* Change in file truffle-config.js. This change is according to Ganache.

	development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },

* Run command:
	```
	$ truffle migrate
	```


3. To use infura
<code>
	ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/51b609c099c7444490b99234c2f73964`),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
</code>
	 truffle migrate --network ropsten


# Notes
1. Observe in migrations folder, the prefix 1 in 1_initial_xxx.js file.
	The prefix decides the order of deployment of the files.
	Suppose 2_xxx file is dependent of 1_yyy file.


<code>
$ truffle init

$ npm i @truffle/hdwallet-provider

$ npm install --save web3

$ truffle migrate --network ropsten

$ truffle unbox react

$ truffle develop

$ truffle compile

$ npm run start
</code>
