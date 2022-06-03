# ------------------------------------------------------
# 0. Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:



```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/deploy.js
npx hardhat help
```


```
npm init vite@latest

npm install -D tailwindcss

npx tailwindcss init -p

cd .\2-GiftDApp\smart_contract\



cd .\2-GiftDApp\client\
npm install react-icons --save
npm install tailwindcss --save
npm install tailwindcss/forums --save
npm install tailwindcss/forums --save
npm install --sav-dev hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
npx hardhat run scripts/deploy.js --network ropsten


npm install --save ethers

..\client$ npm run dev

```



# 1. How to run

## 1.1 Run the below command to compile the Smart Contracts.

```
2-GiftDApp\smart_contract> npx hardhat run .\scripts\deploy.js  --network ropsten
Compiled 1 Solidity file successfully
Greeter deployed to: 0xBAb16dAB53dA78AD08CF559F2A3B298E74bc0E0c
```

## 1.2 Copy the generated contract address from the previous step and paste to the constants.js file as shown below.

```
// copied from npx hardhat run .\scripts\deploy.js  --network ropsten
// Greeter deployed to: 0xBAb16dAB53dA78AD08CF559F2A3B298E74bc0E0c
export const contractAddress = '0xBAb16dAB53dA78AD08CF559F2A3B298E74bc0E0c';
```

## 1.3 Start the react client using below command

```
..2-GiftDApp\client> npm run dev
```

# ------------------------------------------------------
# 2. jSON SERVER
## Run json server at port 5000
```
$ npm run server
```

# ------------------------------------------------------
# 3. Database Information

1. transactionStatus -> COMPLETE, PENDING_PAYMENT, FAILED, INITIATED, NOT_INITIATED, ABORTED

COMPLETE  (ONLY WHEN deliveryStatus == REACHED), PENDING_PAYMENT (ONLY WHEN deliveryStatus == REACHED), FAILED  (ONLY WHEN deliveryStatus == REACHED), INITIATED  (ONLY WHEN deliveryStatus == REACHED), NOT_INITIATED (ONLY WHEN deliveryStatus == ON_THE_WAY), ABORTED (ONLY WHEN deliveryStatus == FAILED)
2. deliveryStatus -> FAILED, ON_THE_WAY, REACHED
3. deliveryFailureReason -> TEMPERATURE_CROSSED_CRITICAL_VALUE, CUSTOMER_REJECTED


