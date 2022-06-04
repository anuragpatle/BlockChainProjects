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
      className="border-2 border-pink-800 bg-[#181918] m-4 flex flex-1
        3xl:min-w-[450px]
        3xl:max-w-[500px]
        sm:min-w-[270px]
        sm:max-w-[300px]
        min-w-full
        flex-col p-3 rounded-lg hover:shadow-2xl"
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="display-flex justify-start w-full mb-6 p-2">
          <div className="flex mt-2">
            <div className="flex-initial w-40">
              <span className="bg-[cadetblue] text-cadetblue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-cadetblue-700 dark:text-cadetblue-300">
                To
              </span>
            </div>
            <div className=" mt-1 text-white text-sm md:w-9/12">
              <a
                href={`https://ropsten.etherscan.io/address/${order.order.ethAddress}`}
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-white text-base">
                  {shortenAddress(order.order.ethAddress)}
                </p>
              </a>
            </div>
          </div>

          <div className="flex mt-2">
            <div className="flex-initial w-40">
              <span className="bg-[cornflowerblue] text-cornflowerblue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-cornflowerblue-700 dark:text-cornflowerblue-300">
                Product
              </span>
            </div>
            <div className=" mt-1 text-white text-sm md:w-9/12">
              <p className="text-white text-base">{order.order.product}</p>
            </div>
          </div>

          <div className="flex mt-2">
            <div className="flex-initial w-40">
              <span className="bg-[cadetblue] text-cadetblue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-cadetblue-700 dark:text-cadetblue-300">
                Amount
              </span>
            </div>
            <div className=" mt-1 text-white text-sm md:w-9/12">
              <p className="text-white text-base">{order.order.amount} ETH</p>
            </div>
          </div>

          <div className="flex mt-2">
            <div className="flex-initial w-40">
              <span className="bg-[firebrick] text-firebrick-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-firebrick-700 dark:text-firebrick-300">
                Temperature
              </span>
            </div>
            <div className=" mt-1 text-white text-sm md:w-9/12">
              <p className="text-white text-base">
                {order.order.criticalTemperatureInCelcius} °C
              </p>
            </div>
          </div>
        </div>

        <DeliveryStatus obj={order.order} />
      </div>
    </div>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TransactionsCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
}) => {
  //   const gifUrl = useFetch({ keyword });

  const {
    handleMsgModalOpen,
    handleMsgModalClose,
    callSetSthNetworkStoredData,
  } = useContext(TransactionContext);

  const handleOpenModalClk = () => {
    let msg1;
    handleMsgModalOpen();
    try {
      msg1 = JSON.parse(message);
    } catch (error) {
      console.log(
        "handleOpenModalClk - error: " + error + ". For message = " + message
      );
      msg1 = {
        orderId: "OLD-VERSION-OF-SOFTWARE",
        id: message,
        ethAddress: "OLD-VERSION-OF-SOFTWARE",
        amount: "OLD-VERSION-OF-SOFTWARE",
        product: "OLD-VERSION-OF-SOFTWARE",
        criticalTemperatureInCelcius: "OLD-VERSION-OF-SOFTWARE",
        destinationAddress: "OLD-VERSION-OF-SOFTWARE",
        deliveryStatus: "OLD-VERSION-OF-SOFTWARE",
        deliveryFailureReason: "OLD-VERSION-OF-SOFTWARE",
        transactionStatus: "OLD-VERSION-OF-SOFTWARE",
      };
    }
    callSetSthNetworkStoredData(msg1);
  };

  return (
    <div
      className="border-2 border-pink-800 bg-[#181918] m-4 flex flex-1
        3xl:min-w-[450px]
        3xl:max-w-[500px]
        sm:min-w-[270px]
        sm:max-w-[300px]
        min-w-full
        flex-col p-3 rounded-lg hover:shadow-2xl"
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="display-flex justify-start w-full mb-6 p-2">
          <div className="flex mt-2">
            <div className="flex-initial w-40">
              <span className="bg-[cadetblue]  text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
                To
              </span>
            </div>
            <div className="text-white  text-sm md:w-9/12">
              <a
                href={`https://ropsten.etherscan.io/address/${addressTo}`}
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-white text-base">
                  {shortenAddress(addressTo)}
                </p>
              </a>
            </div>
          </div>

          <div className="flex mt-2">
            <div className="flex-initial w-40">
              <span className="bg-[cadetblue] text-cadetblue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-cadetblue-700 dark:text-cadetblue-300">
                From
              </span>
            </div>
            <div className="text-white text-sm md:w-9/12">
              <a
                href={`https://ropsten.etherscan.io/address/${addressFrom}`}
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-white text-base">
                  {shortenAddress(addressFrom)}
                </p>
              </a>
            </div>
          </div>

          <div className="flex mt-5">
            <div className="flex-initial w-40">
              <span className="bg-[cornflowerblue] text-sm font-semibold mr-2 px-2.5 py-0.5 rounded ">
                Message
              </span>
            </div>
            <div className="  text-white text-sm md:w-9/12">
              <button
                type="button"
                onClick={handleOpenModalClk}
                className="cursor-pointer text-[#7171d4] text-base underline"
              >
                click to show
              </button>
            </div>
          </div>

          <div className="flex mt-5">
            <div className="flex-initial w-40">
              <span className="bg-[cadetblue] text-cadetblue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-cadetblue-700 dark:text-cadetblue-300">
                Keyword
              </span>
            </div>
            <div className="text-white text-sm md:w-9/12">
              <p className="truncate px-5 text-white text-base">{keyword}</p>
            </div>
          </div>

          <div className="flex mt-5">
            <div className="flex-initial w-40">
              <span className="bg-[firebrick] text-firebrick-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-firebrick-700 dark:text-firebrick-300">
                Amount
              </span>
            </div>
            <div className="text-white text-sm md:w-9/12">
              <p className="text-white text-base">{amount} Ethers</p>
            </div>
          </div>

          <div className="flex mt-5">
            <div className="flex-initial w-40">
              <span className="bg-[cadetblue] text-cadetblue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-cadetblue-700 dark:text-cadetblue-300">
                Time
              </span>
            </div>
            <div className="md:w-10/12">
              <p className="text-white text-xs mt-2">{timestamp}</p>
            </div>
          </div>
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
        {/* {console.log("###dispatchOrders: ", pendingOrdersArray)} */}
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
