import { abi as txnAbi } from '../../../smart_contract/artifacts/contracts/Transactions.sol/Transactions.json';


// copied from npx hardhat run .\scripts\deploy.js  --network ropsten
// Greeter deployed to: 0x....
// export const TransactionsContractAddress = '0xaeCaA59C1dFcD9e3568e4137ef0d8d534A85d300';

export const adminAddress = '0x5b9c17acdc46c5354689dab54af04c267291bca4';
export const manufacturerAddress = '0xb59e9cf481060c06ca7bb317de9383f89106a391';
export const thirdPartyAddress = '0x5720138b23259dc2efa0c8414d42245c3b48482c';
export const deliveryHubAddress = '0xc43adc9da8c024ba6df8fe986d84a07aff2267dd';
export const customerAddress = '0x22230e744ef73012be998a10c68ea8d4bb092821';


export const TransactionsContractABI = txnAbi.abi;
