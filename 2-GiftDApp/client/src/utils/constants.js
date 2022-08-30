import { abi as txnAbi } from '../../../smart_contract/artifacts/contracts/Transactions.sol/Transactions.json';



// copied from npx hardhat run .\scripts\deploy.js  --network ropsten
// Greeter deployed to: 0x....
// export const TransactionsContractAddress = '0xaeCaA59C1dFcD9e3568e4137ef0d8d534A85d300';

export const companyCommonStyles =
	"min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm  text-white bg-[#4d224d] hover:bg-[#a40ea4] active:bg-[#a40ea4] focus:outline-none focus:ring focus:ring-violet-300";


export const adminAddress = '0x4d971cfc2588894d0348b02c66e13c3d4c13664c';
export const manufacturerAddress = '0x061b3aa0433e6beD7b396abea13F3Ac4A36dC87C';
export const thirdPartyAddress = '0x5720138b23259dc2efa0c8414d42245c3b48482c';
export const deliveryHubAddress = '0xc43adc9da8c024ba6df8fe986d84a07aff2267dd';
export const customerAddress = '0x22230e744ef73012be998a10c68ea8d4bb092821';


export const TransactionsContractABI = txnAbi.abi;
