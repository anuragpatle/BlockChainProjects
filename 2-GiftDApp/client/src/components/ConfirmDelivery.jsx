import React from "react";
import { BiPackage } from "react-icons/bi";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Badge = ({ text, color }) => (
  <div className="flex-initial w-40">
    <span
      className={`bg-${color}-100 text-${color}-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-${color}-200 dark:text-{color}-900`}
    >
      {text}
    </span>
  </div>
);

const ServiceCard = ({
  color,
  title,
  drugName,
  icon,
  subtitle,
  walletAddressAndvendorName,
  orderDate,
}) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>

    <div className="ml-5 flex flex-col flex-1">

      <h3 className="mt-2 text-white text-lg">{title}</h3>


      <div className="flex mt-2">
        <Badge text="Drug" color="green"></Badge>
        <div className=" mt-1 text-white text-sm md:w-9/12">
          {drugName}
        </div>
      </div>

      <div className="flex mt-2">
        <Badge text="Vendor" color="purple"></Badge>
        <div className=" mt-1 text-white text-sm md:w-9/12">
          {walletAddressAndvendorName}
        </div>
      </div>

      <div className="flex mt-2">
        <Badge text="Max Temp. (°C)" color="green"></Badge>
        <div className=" mt-1 text-white text-sm md:w-9/12">
         5
        </div>
      </div>

      <div className="flex mt-2">
        <Badge text="Time" color="green"></Badge>
        <div className=" mt-1 text-white text-sm md:w-9/12">
         22 May 202
        </div>
      </div>

      {/* <p className="mt-1 text-white text-sm md:w-9/12">
        Time
      </p> */}

      <div className="grid sm:grid-cols-2 grid-cols-2 w-full mt-10">
        <button
          type="button"
          className="bg-[#0080005c] bg-green-100 text-white font-bold w-32 mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7f] rounded-full cursor-pointer"
        >
          Yes
        </button>
        <button
          type="button"
          className="bg-[#9a20209c] text-green-200/100 font-bold w-32 mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7f] rounded-full cursor-pointer"
        >
          No
        </button>
      </div>
      {/* <div className="flex">
        <img
          className="w-8 h-8 rounded-full mr-4 mt-2"
          src={logo}
          alt="T-Systems logo"
        />
        <div className="text-sm mt-2">
          <p className="text-rose-600 leading-none">T-Systems</p>
          <p className="text-rose-600">May 2022</p>
        </div>
      </div> */}
    </div>
  </div>
);

function ConfirmDelivery() {
  return (
    <div>
      <div className="flex w-full justify-center items-center ">
        <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
          <div className="flex-1 flex flex-col justify-start items-center">
            <ServiceCard
              color="bg-[#8945F8]"
              title="Is this order reached to you?"
              drugName="Insulin"
              icon={<BiPackage fontSize={21} className="text-white" />}
              subtitle="5 °C as permissible Temperature"
              orderDate="Ordered On 20 May 2020"
              walletAddressAndvendorName="Wallet Ad. 0xcC..7u | Zealin"
            />

          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDelivery;
