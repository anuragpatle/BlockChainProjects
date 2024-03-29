import React from "react";
import { BiPackage } from "react-icons/bi";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Badge = ({ text, color }) => (
  <div className="flex-initial w-40">
    <span
      className={`bg-[${color}] text-${color}-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-${color}-700 dark:text-${color}-300`}
    >
      {text}
    </span>
  </div>
);

const ServiceCard = ({
  id,
  color,
  title,
  drugName,
  icon,
  walletAddressAndvendorName,
  orderId,
}) => {
  const { updateDeliveryStatusOfOrder } = useContext(TransactionContext);

  const handleUpdateDeliveryStatusOfOrder = (e) => {
    updateDeliveryStatusOfOrder({ id }.id, "ACCEPTED");
  };

  return (
    <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
      <div
        className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
      >
        {icon}
      </div>

      <div className="ml-5 flex flex-col flex-1">
        <h3 className="mt-2 text-white text-lg">{title}</h3>

        <div className="flex mt-2">
          <div className="flex-initial w-40">
            <span className="bg-[cadetblue] text-cadetblue-800 text-sm font-semibold  mr-2 px-2.5 py-0.5 rounded dark:bg-cadetblue-700 dark:text-cadetblue-300">
              Order Id
            </span>
          </div>
          <div className=" mt-1 text-white text-sm md:w-9/12">{orderId}</div>
        </div>

        <div className="flex mt-2">
          <div className="flex-initial w-40">
            <span className="bg-[cornflowerblue] text-cornflowerblue-800 text-sm font-semibold  mr-2 px-2.5 py-0.5 rounded dark:bg-cornflowerblue-700 dark:text-cornflowerblue-300">
              Drug
            </span>
          </div>
          <div className=" mt-1 text-white text-sm md:w-9/12">{drugName}</div>
        </div>

        <div className="flex mt-2">
          <div className="flex-initial w-40">
            <span className="bg-[cadetblue] text-cadetblue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-cadetblue-700 dark:text-cadetblue-300">
              Vendor
            </span>
          </div>
          <div className=" mt-1 text-white text-sm md:w-9/12">
            {walletAddressAndvendorName}
          </div>
        </div>

        <div className="flex mt-2">
          <div className="flex-initial w-40">
            <span className="bg-[firebrick] text-firebrick-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-firebrick-700 dark:text-firebrick-300">
              Max Temp. (°C)
            </span>
          </div>
          <div className=" mt-1 text-white text-sm md:w-9/12">5</div>
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-2 w-full mt-10">
          <button
            type="button"
            onClick={handleUpdateDeliveryStatusOfOrder}
            className="bg-[darkgreen] text-green-200/100 font-medium  lg:w-56 sm:w-32 md:w-32 mt-2 mr-5 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7f] rounded-full cursor-pointer"
          >
            Accept Order
          </button>
          <button
            type="button"
            className="bg-[#9a20209c] text-green-200/100 font-medium  lg:w-56 sm:w-32 md:w-32 mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7f] rounded-full cursor-pointer"
          >
            Reject Order
          </button>
        </div>
      </div>
    </div>
  );
};

const NoPendingOrdersCard = () => {
  return (
    <div className="flex w-full h-full mt-7 mx-10 p-20 flex-row justify-start items-start white-glassmorphism cursor-pointer hover:shadow-xl">
      <div
        className={`w-10 h-10 rounded-full flex justify-center items-center bg-[#8945F8]`}
      >
        <BiPackage fontSize={21} className="text-white" />
      </div>

      <div className="ml-5 flex flex-col flex-1">
        <h3 className="mt-2 text-white text-lg">No Pending Orders</h3>
        <div className="flex mt-5">
          <div className="flex-initial w-full">
            <span className="bg-[cadetblue] text-cadetblue-800 text-sm font-semibold  mr-2 px-2.5 py-0.5 rounded dark:bg-cadetblue-700 dark:text-cadetblue-300">
              Order a New Product
            </span>
          </div>
          {/* <div className=" mt-1 text-white text-sm md:w-9/12">

          </div> */}
        </div>
      </div>
    </div>
  );
};

const ConfirmDelivery = () => {
  const { pendingOrdersArray } = useContext(TransactionContext);
  let unreachedPendingOrders = pendingOrdersArray.filter((o) => o.deliveryStatus != "ACCEPTED");

  return (
    <div>
      <div className="flex w-full justify-center items-center ">
        <div className="flex mf:flex-row flex-col items-center justify-between md:p-5">
          <div className="flex-1 flex flex-col justify-start items-center">
            {/* <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10"> */}
            {/* {console.log("pendingOrdersArray: : : ", pendingOrdersArray)} */}

            {unreachedPendingOrders.length == 0 && <NoPendingOrdersCard />}

            {unreachedPendingOrders.map((order) => (
              // <DispatchOrdersCard key={order.orderId} order={order} />
              <ServiceCard
                id={order.id}
                key={order.orderId}
                color="bg-[#8945F8]"
                title="Is this order reached to you?"
                drugName={order.product}
                orderId={order.orderId}
                icon={<BiPackage fontSize={21} className="text-white" />}
                subtitle={`${order.criticalTemperatureInCelcius} °C as permissible Temperature`}
                orderDate="Ordered On 20 May 2020"
                walletAddressAndvendorName="Wallet Ad. 0xcC..7u | Zealin"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelivery;
