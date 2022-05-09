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
