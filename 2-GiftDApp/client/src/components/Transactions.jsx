import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";

import truck from "../../gifs/truck.gif";
import deliveredBoxes from "../../images/box.jpg";

// import useFetch from "../hooks/useFetch";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";

const ordersUrl = "http://localhost:5000/orders";

const DeliveryStatus = ({ obj }) => {
  const { sendTransactionForDispatchedOrders } = useContext(TransactionContext);

  const handlePayment = (e) => {
    console.log("%%% obj: ", obj);
    sendTransactionForDispatchedOrders(obj);
  };

  // const tsNow = Math.floor(new Date().getTime() / 1000);
  // const ts = Math.floor(new Date(obj.time).getTime() / 1000);
  // const diff = tsNow - ts;
  let text = "Proceed to Pay Ethers";
  let _classNameBtn =
    "text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer";
  let imgPath = "";

  if (obj.deliveryStatus === "ON_THE_WAY") {
    text = "On the way";
    _classNameBtn = _classNameBtn + " pointer-events-none";
    imgPath = truck;
  } else if (
    obj.transactionStatus === "INITIATED" ||
    obj.transactionStatus === "PENDING_PAYMENT"
  ) {
    _classNameBtn = _classNameBtn + " pointer-events-none";
    text = "Processing Transaction";
    imgPath = deliveredBoxes;
  } else {
    imgPath = deliveredBoxes;
  }

  // {console.log("timestamp- ts: ",  ts)};
  // {console.log("timestamp- ts now: ",  tsNow)}

  // {console.log("timestamp- ts diff: ",  diff)}

  return (
    <div>
      <img
        src={imgPath}
        alt="nature"
        className="w-60 h-28  rounded-md shadow-lg object-cover"
      />
      <button
        disabled={obj.deliveryStatus === "ON_THE_WAY" ? true : false}
        type="button"
        onClick={handlePayment}
        className={_classNameBtn}
      >
        {text}
      </button>
    </div>
  );
};

const DispatchOrdersCard = (order) => {
  const { sendTransaction } = useContext(TransactionContext);
  // const tsNow = Math.floor(new Date().getTime() / 1000);
  // const ts = Math.floor(new Date(order.order.time).getTime() / 1000);
  // const diff = tsNow - ts;

  return (
    <div
      className="bg-[#181918] m-4 flex flex-1
        3xl:min-w-[450px]
        3xl:max-w-[500px]
        sm:min-w-[270px]
        sm:max-w-[300px]
        min-w-full
        flex-col p-3 rounded-md hover:shadow-2xl"
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="display-flex justify-start w-full mb-6 p-2">
          <a
            href={`https://ropsten.etherscan.io/address/${order.order.ethAddress}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-white text-base">
              From: {shortenAddress(order.order.ethAddress)}
            </p>
          </a>
          <a
            href={`https://ropsten.etherscan.io/address/${order.order.ethAddress}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-white text-base">
              To: {shortenAddress(order.order.ethAddress)}
            </p>
            <p className="text-white text-base">
              Product: {order.order.product}
            </p>
          </a>
          <p className="text-white text-base">
            Amount: {order.order.amount} ETH
          </p>
          <p className="text-white text-base">
            Temperature: {order.order.criticalTemperatureInCelcius} Degree C
          </p>
          {order.order.drugName && (
            <>
              <br />
              <p className="text-white text-base">
                Drug: {order.order.product}
              </p>
            </>
          )}
        </div>
        <DeliveryStatus obj={order.order} />
      </div>
    </div>
  );
};

const TransactionsCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}) => {
  //   const gifUrl = useFetch({ keyword });

  return (
    <div
      className="bg-[#181918] m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl"
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="display-flex justify-start w-full mb-6 p-2">
          <a
            href={`https://ropsten.etherscan.io/address/${addressFrom}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-white text-base">
              From: {shortenAddress(addressFrom)}
            </p>
          </a>
          <a
            href={`https://ropsten.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-white text-base">
              To: {shortenAddress(addressTo)}
            </p>
          </a>
          <p className="text-white text-base">Amount: {amount} ETH</p>
          {message && (
            <>
              <br />
              <p className="text-white text-base">Message: {message}</p>
            </>
          )}
        </div>

        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-[#37c7da] font-bold">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { transactions, currentAccount, pendingOrdersArray } =
    useContext(TransactionContext);

  return (
    <div className=" w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <div className="bg-[#181918] font-bold flex flex-1 w-full flex-col p-1 rounded-md hover:shadow-2xl">
            <h3 className="text-white text-2xl text-center">ORDERS</h3>
          </div>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to see the latest transactions
          </h3>
        )}
        {console.log("###dispatchOrders: ", pendingOrdersArray)}
        <div className="flex flex-wrap justify-center items-center mt-10">
          {pendingOrdersArray.map((order) => (
            <DispatchOrdersCard key={order.orderId} order={order} />
          ))}
        </div>
      </div>

      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <div className="bg-[#181918] font-bold flex flex-1 w-full flex-col p-1 rounded-md hover:shadow-2xl">
            <h3 className="text-white text-2xl text-center">TRANSACTIONS</h3>
          </div>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to see the latest transactions
          </h3>
        )}

        <div className="flex flex-wrap justify-center items-center mt-10">
          {transactions.reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
