import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

// Get ethereum object from the metamask browser addon
// Since we are using metamask wallet extention/addon on the browser, we have access to ethereum object.
// You can check by going to the console of the browser, and write window.ethereum
const { ethereum } = window;

const ordersUrl = "http://localhost:5000/orders";


const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  console.log({ provider, signer, transactionContract });

  return transactionContract;
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");

  const [formData, setformData] = useState({
    addressTo: "",
    amount: "",
    drugName: "",
    temperature: "",
    destAddress: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  ); // saving transaction count in local storage

  const [transactions, setTransactions] = useState([]);
  const [pendingOrdersArray, setPendingOrders] = useState([]);

  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const updateTransactionStatusOfOrder = (id, status) => {
    const dataToUpdate = {
      transactionStatus: status,
    };

    console.log("dataToUpdate: " + JSON.stringify(dataToUpdate));

    fetch(ordersUrl + "/" + id, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(dataToUpdate),
    }).then((result) => {
      result.json().then((res) => {
        console.warn("res", res);
      });
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(ordersUrl)
        .then((response) => response.json())
        .then((data) => {
          // setPendingOrders([...data]);
          setPendingOrders(
            data.filter((data) => {
              if (
                (data.transactionStatus === "NOT_INITIATED" ||
                  data.transactionStatus === "PENDING_PAYMENT" ||
                  data.transactionStatus === "INITIATED") ||
                data.transactionStatus === "NOT_INITIATED"
              ) {
                return true;
              }
            })
          );
        });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        const transactionsContract = getEthereumContract();

        const availableTransactions =
          await transactionsContract.getAllTransactions();

        const structuredTransactions = availableTransactions.map(
          (transaction) => ({
            addressTo: transaction.receiver,
            addressFrom: transaction.sender,
            timestamp: new Date(
              transaction.timestamp.toNumber() * 1000
            ).toLocaleString(),
            message: transaction.message,
            keyword: transaction.keyword,
            amount: parseInt(transaction.amount._hex) / 10 ** 18,
          })
        );

        console.log(structuredTransactions);

        setTransactions(structuredTransactions);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        getAllTransactions();
      } else {
        console.log("No account found.");
      }

      console.log("##Connected Accounts: ", accounts);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  const checkIfTransactionsExists = async () => {
    try {
      if (ethereum) {
        const transactionsContract = getEthereumContract();
        const currentTransactionCount =
          await transactionsContract.getTransactionCount();

        window.localStorage.setItem(
          "transactionCount",
          currentTransactionCount
        );
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("eth_requestAccounts: ", accounts);
      setCurrentAccount(accounts[0]);
      //   window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const pendingTxn = () => {
    return new Promise((resolve) => setTimeout(resolve, 3000));
  };

  let orderCount = 0;
  const orderForDispatch = () => {
    const { addressTo, amount, destAddress, drugName, temperature } = formData;

    let timestaamp = Date.now();

    orderCount = orderCount + 1;
    let orderId = orderCount + "" + timestaamp;

    // let order = {
    //   orderId: orderId,
    //   addressTo: addressTo,
    //   amount: amount,
    //   time: new Date(),
    //   destAddress: destAddress,
    //   drugName: drugName,
    //   temperature: temperature,
    // };
    // pendingOrdersArray.push(order);
    // console.log("clicked btn, dispacthOrders: ", pendingOrdersArray);
    // if (order.drugName == "clearMeth") {
    //   setPendingOrders(
    //     pendingOrdersArray.filter((order) => order.drugName != "meth")
    //   );
    // } else {
    //   setPendingOrders([...pendingOrdersArray, order]);
    // }

    let orderToPost = {
      orderId: orderId,
      ethAddress: addressTo,
      amount: amount,
      product: drugName,
      criticalTemperatureInCelcius: temperature,
      destinationAddress: destAddress,
      deliveryStatus: "ON_THE_WAY",
      deliveryFailureReason: "",
      transactionStatus: "NOT_INITIATED",
    };

    fetch(ordersUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(orderToPost),
    }).then((result) => {
      result.json().then((res) => {
        console.warn("res", res);
      });
    });
  };

  const sendTransactionForDispatchedOrders = async (orderDetails) => {
    try {
      if (!ethereum) return alert("Please install metamask");

      const { id, orderId, ethAddress, amount } = orderDetails;

      updateTransactionStatusOfOrder(id, "INITIATED");

      const transactionContract = getEthereumContract(); // Now, use this variable to call all the contracts related functions (i.e. functions which are written in Transactions.sol file)

      const message = JSON.stringify(orderDetails);
      const keyword = orderId;

      // await pendingTxn().then(() => console.log("hi"));

      // await transactionContract.makePayment(addressTo);

      const parseedAmount = ethers.utils.parseEther(amount); // parses into gwei number from decimal number
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: ethAddress,
            gas: "0x5208", // = 21000 gwei, or 0.000021 ether
            value: parseedAmount._hex,
          },
        ],
      });

      // After sending ether to the account, we have to add this transaction as a block in the blockchain
      const transactionHash = await transactionContract.addToBlockchain(
        ethAddress,
        parseedAmount,
        message,
        keyword
      );

      setIsLoading(true);
      console.log(`Loading - ${transactionHash.hash}`);

      await transactionHash.wait(); // this will wait for the transaction to be finished.

      setIsLoading(false);
      console.log(`Success - ${transactionHash.hash}`);
      updateTransactionStatusOfOrder(id, "COMPLETE");
      const transactionCount = await transactionContract.getTransactionCount();

      setTransactionCount(transactionCount.toNumber());
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      throw new Error("No ethereum object.");
    }
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");

      const { addressTo, amount, keyword, message } = formData;

      const transactionContract = getEthereumContract(); // Now, use this variable to call all the contracts related functions (i.e. functions which are written in Transactions.sol file)

      await pendingTxn().then(() => console.log("hi"));

      await transactionContract.makePayment(addressTo);

      const parseedAmount = ethers.utils.parseEther(amount); // parses into gwei number from decimal number
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: "0x5208", // = 21000 gwei, or 0.000021 ether
            value: parseedAmount._hex,
          },
        ],
      });

      // After sending ether to the account, we have to add this transaction as a block in the blockchain
      const transactionHash = await transactionContract.addToBlockchain(
        addressTo,
        parseedAmount,
        message,
        keyword
      );

      setIsLoading(true);
      console.log(`Loading - ${transactionHash.hash}`);

      await transactionHash.wait(); // this will wait for the transaction to be finished.

      setIsLoading(false);
      console.log(`Success - ${transactionHash.hash}`);

      const transactionCount = await transactionContract.getTransactionCount();

      setTransactionCount(transactionCount.toNumber());
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      throw new Error("No ethereum object.");
    }
  };

  /**
   * By using this Hook, you tell React that your component needs to do something after render.
   * React will remember the function you passed (we’ll refer to it as our “effect”), and call
   * it later after performing the DOM updates. In this effect, we set the document title,
   * but we could also perform data fetching or call some other imperative API.
   */
  useEffect(() => {
    checkIfWalletIsConnected();
    checkIfTransactionsExists();
  }, []);

  return (
    //   Since the key and value i.e. connectWallet: connectWallet are same, we can pass just connectWallet
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        setformData,
        handleChange,
        sendTransaction,
        sendTransactionForDispatchedOrders,
        setPendingOrders,
        pendingOrdersArray,
        orderForDispatch,
        transactions,
        isLoading,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const TransactionContext = React.createContext();
