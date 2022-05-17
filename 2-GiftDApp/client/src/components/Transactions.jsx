import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";

import truck from "../../gifs/truck.gif";
import deliveredBoxes from "../../images/box.jpg";

// import useFetch from "../hooks/useFetch";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";

const DeliveryStatus = ({ obj }) => {
  const { sendTransactionForDispatchedOrders } = useContext(TransactionContext);

  const handlePayment = (e) => {
    console.log("%%% obj: ", obj);
    sendTransactionForDispatchedOrders(obj);
  };

  const tsNow = Math.floor(new Date().getTime() / 1000);
  const ts = Math.floor(new Date(obj.time).getTime() / 1000);
  const diff = tsNow - ts;
  let text = "Proceed to Pay Ethers";
  let _classNameBtn =
    "text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer";
  let imgPath = "";

  if (diff < 5) {
    text = "On the way";
    _classNameBtn = _classNameBtn + " pointer-events-none";
    imgPath = truck;
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
        className="w-full h-full  rounded-md shadow-lg object-cover"
      />
      <button
        disabled={diff > 5 ? false : true}
        type="button"
        onClick={handlePayment}
        className={_classNameBtn}
      >
        {text}
      </button>
    </div>
  );
};

// const DispatchOrdersCard = ({addressTo, amount, destAddress, drugName, temperature, time }) => {
const DispatchOrdersCard = (order) => {
  //   const gifUrl = useFetch({ keyword });

  const { sendTransaction } = useContext(TransactionContext);
  const tsNow = Math.floor(new Date().getTime() / 1000);
  const ts = Math.floor(new Date(order.order.time).getTime() / 1000);
  const diff = tsNow - ts;

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
          {/* <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
              <p className="text-white text-base">From: {shortenAddress(addressFrom)}</p>
            </a> */}
          <a
            href={`https://ropsten.etherscan.io/address/${order.order.addressTo}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-white text-base">
              To: {shortenAddress(order.order.addressTo)}
            </p>
          </a>
          <p className="text-white text-base">
            Amount: {order.order.amount} ETH
          </p>
          <p className="text-white text-base">
            Temperature: {order.order.temperature} Degree C
          </p>
          {order.order.drugName && (
            <>
              <br />
              <p className="text-white text-base">
                Drug: {order.order.drugName}
              </p>
            </>
          )}
        </div>
        <DeliveryStatus obj={order.order} />

        {/* {true ? (timestamp ) : ()
        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-[#37c7da] font-bold">{order.order.time}</p>
        </div> */}
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
        {/* {console.log("timestamp: ", timestamp)}
        {console.log("timestamp- date: ", new Date(timestamp))} */}

        {/* {console.log("timestamp- ts now diff : ",  (Math.floor(new Date().getTime() / 1000)) - Math.floor(new Date(timestamp).getTime() / 1000))} */}

        {/* {const difD =  (Math.floor(new Date().getTime() / 1000)) - Math.floor(new Date(timestamp).getTime() / 1000))}
        {console.log("timestamp- ts now diff days : ",  (difD) / (60 * 60 * 24) } */}
        {/* <DeliveryStatus timestamp={timestamp} /> */}
        {/* {true ? (timestamp ) : ()} */}
        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-[#37c7da] font-bold">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { transactions, currentAccount, dispatchOrdersArray } =
    useContext(TransactionContext);

  return (
    <div className=" w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Pending Orders
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to see the latest transactions
          </h3>
        )}
        {console.log("###dispatchOrders: ", dispatchOrdersArray)}
        <div className="flex flex-wrap justify-center items-center mt-10">
          {/* *************Not working */}
          {/* {dispatchOrdersArray.map((order, i) => (
            <DispatchOrdersCard key={i} obj={order} />
            // <DispatchOrdersCard {...order} />
          ))} */}

          {/* *************Not working */}
          {/* {dispatchOrdersArray.map((order) => (
            <DispatchOrdersCard key={order.time}
              addressTo={order.addressTo}
              time= {order.time}
              amount = {order.amount}
              destAddress = {order.destAddress}
              drugName = {order.drugName}
              temperature = {order.temperature}
              />
          ))} */}

          {dispatchOrdersArray.map((order) => (
            <DispatchOrdersCard key={order.time} order={order} />
          ))}
        </div>
      </div>

      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Latest Transactions
          </h3>
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
