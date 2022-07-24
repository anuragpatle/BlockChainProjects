import { abi as txnAbi } from '../../../smart_contract/artifacts/contracts/Transactions.sol/Transactions.json';


// copied from npx hardhat run .\scripts\deploy.js  --network ropsten
// Greeter deployed to: 0x....
// export const TransactionsContractAddress = '0xaeCaA59C1dFcD9e3568e4137ef0d8d534A85d300';

export const adminAddress = '0x4d971cfc2588894d0348b02c66e13c3d4c13664c';

export const TransactionsContractABI = txnAbi.abi;
