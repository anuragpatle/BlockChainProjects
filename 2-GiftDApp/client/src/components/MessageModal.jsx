import Modal from "@mui/material/Modal";
import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const MessageModal = () => {
  const { handleMsgModalClose, show, ethNetworkStoredData } =
    useContext(TransactionContext);

  return (
    <div>
      <div>
        <Modal
          open={show}
          onClose={handleMsgModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {/* <div className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
            <div className="relative p-4 w-full max-w-md h-full md:h-auto"> */}
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Data Stored In Ethereum BlockChain Network
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="small-modal"
                onClick={handleMsgModalClose}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                </svg>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-6 space-y-6">
              <div>
                <div className="flex mt-5">
                  <div className="flex-initial w-45">
                    <span className="bg-[cornflowerblue] text-sm font-semibold mr-2 px-2.5 py-0.5 rounded ">
                      Order Id
                    </span>
                  </div>
                  <div className="  text-white text-sm md:w-9/12">
                    <span>{ethNetworkStoredData.orderId}</span>
                  </div>
                </div>

                <div className="flex mt-5">
                  <div className="flex-initial w-45">
                    <span className="bg-[cornflowerblue] text-sm font-semibold mr-2 px-2.5 py-0.5 rounded ">
                      Id
                    </span>
                  </div>
                  <div className="  text-white text-sm md:w-9/12">
                    <span>{ethNetworkStoredData.id}</span>
                  </div>
                </div>

                <div className="flex mt-5">
                  <div className="flex-initial w-45">
                    <span className="bg-[cornflowerblue] text-sm font-semibold mr-2 px-2.5 py-0.5 rounded ">
                      Delivery Status
                    </span>
                  </div>
                  <div className="  text-white text-sm md:w-9/12">
                    <span>{ethNetworkStoredData.deliveryStatus}</span>
                  </div>
                </div>

                <div className="flex mt-5">
                  <div className="flex-initial w-45">
                    <span className="bg-[cornflowerblue] text-sm font-semibold mr-2 px-2.5 py-0.5 rounded ">
                      Destination Address
                    </span>
                  </div>
                  <div className="  text-white text-sm md:w-9/12">
                    <span>{ethNetworkStoredData.destinationAddress}</span>
                  </div>
                </div>

                <div className="flex mt-5">
                  <div className="flex-initial w-45">
                    <span className="bg-[cornflowerblue] text-sm font-semibold mr-2 px-2.5 py-0.5 rounded ">
                      Delivery Failure Reason
                    </span>
                  </div>
                  <div className="  text-white text-sm md:w-9/12">
                    <span>{ethNetworkStoredData.deliveryFailureReason}</span>
                  </div>
                </div>

                <div className="flex mt-5">
                  <div className="flex-initial w-45">
                    <span className="bg-[cornflowerblue] text-sm font-semibold mr-2 px-2.5 py-0.5 rounded ">
                      Critical Temperature
                    </span>
                  </div>
                  <div className="  text-white text-sm md:w-9/12">
                    <span>
                      {ethNetworkStoredData.criticalTemperatureInCelcius}{" "}
                      <span>(Critical Temperature In Celcius) </span>
                    </span>
                  </div>
                </div>

                <div className="flex mt-5">
                  <div className="flex-initial w-45">
                    <span className="bg-[cornflowerblue] text-sm font-semibold mr-2 px-2.5 py-0.5 rounded ">
                      Product
                    </span>
                  </div>
                  <div className="  text-white text-sm md:w-9/12">
                    <span>{ethNetworkStoredData.product}</span>
                  </div>
                </div>

                <div className="flex mt-5">
                  <div className="flex-initial w-45">
                    <span className="bg-[cornflowerblue] text-sm font-semibold mr-2 px-2.5 py-0.5 rounded ">
                      Amount
                    </span>
                  </div>
                  <div className="  text-white text-sm md:w-9/12">
                    <span>{ethNetworkStoredData.amount}</span>
                  </div>
                </div>

                <div className="flex mt-5">
                  <div className="flex-initial w-45">
                    <span className="bg-[cornflowerblue] text-sm font-semibold mr-2 px-2.5 py-0.5 rounded ">
                      Wallet Address
                    </span>
                  </div>
                  <div className="  text-white text-sm md:w-9/12">
                    <span>{ethNetworkStoredData.ethAddress}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              {/* <button
                    data-modal-toggle="small-modal"
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Okay
                  </button> */}
              <button
                data-modal-toggle="small-modal"
                type="button"
                onClick={handleMsgModalClose}
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Close
              </button>
            </div>
          </div>
          {/* </div>
          </div> */}
        </Modal>
      </div>
    </div>
  );
};

export default MessageModal;
