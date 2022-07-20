import { ethers } from "ethers";

import { abi as supplyChainContractAbi } from "../contracts/SupplyChain.json"

import { abi as transactionsAbi } from "../contracts/Transactions.json"
import { Transactions as transactionContractAddress, SupplyChain as supplyChainContractAddress } from "../contracts/contract-address.json"

const provider = new ethers.providers.Web3Provider(ethereum);
const signer = provider.getSigner();



// let supplyChainContractAddress = fetch("../src/contracts/contract-address.json")
// 	.then(function (res) {
// 		return res.text();
// 	}).then(function (data) {
// 		let contractAddresses = JSON.parse(data);
// 		return contractAddresses.SupplyChain;
// 	})

// let transactionContractAddress = fetch("../src/contracts/contract-address.json")
// 	.then(function (res) {
// 		return res.text();
// 	}).then(function (data) {
// 		let contractAddresses = JSON.parse(data);
// 		return contractAddresses.Transactions;
// 	})

export const supplyChainContract = new ethers.Contract(
	supplyChainContractAddress,
	supplyChainContractAbi,
	signer
);

export const transactionsContract = new ethers.Contract(
	transactionContractAddress,
	transactionsAbi,
	signer
);

console.log({ provider, signer, transactionsContract });


export default { supplyChainContract };


