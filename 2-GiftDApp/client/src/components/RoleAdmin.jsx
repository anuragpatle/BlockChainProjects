import React, { useContext } from "react";
import { RoleDataContext } from "../context/RoleDataContext";
import { TextField, Button, Box } from "@mui/material";
import supplyChainContract from "../utils/getSmartConrtacts";
import { TransactionContext } from "../context/TransactionContext";

const { ethereum } = window;
const ariaLabel = { "aria-label": "description" };
const accounts = await ethereum.request({
  method: "eth_requestAccounts",
});

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="border-x-0  border-t-0  border-b-2 border-b-pink-900  rounded-lg  w-full rounded-sm p-2 outline-none bg-transparent text-white  text-sm white-glassmorphism"
  />
);

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const RoleAdmin = () => {
  const [manufacturerRole, setManufacturerRole] = React.useState("");
  const { roles, setRoles } = useContext(RoleDataContext);
  const { isLoading } = useContext(TransactionContext);

  const handleAddManufacturerRole = async () => {
    await setRoles({
      ...roles,
      manufacturer: manufacturerRole,
    });

    // console.log("supplyChainContract ---- ")
    // console.log({supplyChainContract})

    localStorage.setItem("mRole", manufacturerRole);
    await supplyChainContract.supplyChainContract
      .addManufacturerRole(manufacturerRole)
      //   .send({ from: accounts[0], gas: 100000 })
      .then(console.log);

    setManufacturerRole("");
  };

  return (
    <div className="flex justify-center pt-20">
      <div className="">
        <h1 className="text-white text-3xl sm:text-5xl p-10 text-gradient ">
          Assign Roles
          <br />
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base"></p>
      </div>
      <div className=" border-2 border-amber-900 p-5 w-2/3 flex flex-col items-center blue-glassmorphism">
        <div className="mt-2 flex flex-col items-center w-full ">
          <div className="display-flex justify-start w-full mb-2">
            <div className="flex ">
              <div className="w-2/12 flex-initial mt-2 mr-1">
                <div className="bg-[#2e3150] text-[#92b4b5] text-sm font-semibold mr-2 px-2.5 py-1 rounded">
                  Manufacturer
                </div>
              </div>
              <div className="text-white text-sm w-10/12">
                <Input
                  placeholder="Address: 0xB59e.."
                  name="addressTo"
                  type="text"
                  handleChange={(e) => setManufacturerRole(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 flex flex-col items-center w-full ">
          <div className="display-flex justify-start w-full mb-2">
            <div className="flex ">
              <div className="w-2/12 flex-initial mt-2 mr-1">
                <div className="bg-[#2e3150] text-[#92b4b5] text-sm font-semibold mr-2 px-2.5 py-1 rounded">
                  Third Party
                </div>
              </div>
              <div className="text-white text-sm w-10/12">
                <Input
                  placeholder="Address: 0xB59e.."
                  name="addressTo"
                  type="text"
                  handleChange={(e) => setManufacturerRole(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 flex flex-col items-center w-full ">
          <div className="display-flex justify-start w-full mb-2">
            <div className="flex ">
              <div className="w-2/12 flex-initial mt-2 mr-1">
                <div className="bg-[#2e3150] text-[#92b4b5] text-sm font-semibold mr-2 px-2.5 py-1 rounded">
                  Delivery Hub
                </div>
              </div>
              <div className="text-white text-sm w-10/12">
                <Input
                  placeholder="Address: 0xB59e.."
                  name="addressTo"
                  type="text"
                  handleChange={(e) => setManufacturerRole(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 flex flex-col items-center w-full ">
          <div className="display-flex justify-start w-full mb-2">
            <div className="flex ">
              <div className="w-2/12 flex-initial mt-2 mr-1">
                <div className="bg-[#2e3150] text-[#92b4b5] text-sm font-semibold mr-2 px-2.5 py-1 rounded">
                  Customer
                </div>
              </div>
              <div className="text-white text-sm w-10/12">
                <Input
                  placeholder="Address: 0xB59e.."
                  name="addressTo"
                  type="text"
                  handleChange={(e) => setManufacturerRole(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-2 flex flex-col items-center w-full ">
        <div className="display-flex justify-start w-full mb-2">
          <div className="flex ">
            <div className="flex-initial mt-2 mr-1 w-20">
              <div className="w-full bg-[#2e3150] text-[#92b4b5] text-sm font-semibold mr-2 px-2.5 py-1 rounded">
                Amount
              </div>
            </div>
            <div className=" text-white text-sm md:w-9/12">
              <Input
                placeholder="Amount (ETH)"
                name="amount"
                type="number"
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 flex flex-col items-center w-full ">
        <div className="display-flex justify-start w-full mb-2">
          <div className="flex ">
            <div className="flex-initial mt-2 mr-1 w-20">
              <div className="w-full bg-[#2e3150] text-[#92b4b5] text-sm font-semibold mr-2 px-2.5 py-1 rounded">
                Product
              </div>
            </div>
            <div className=" text-white text-sm md:w-9/12">
              <Input
                placeholder="Name of the Product"
                name="drugName"
                type="text"
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 flex flex-col items-center w-full ">
        <div className="display-flex justify-start w-full mb-2">
          <div className="flex ">
            <div className="flex-initial mt-2 mr-1 w-20">
              <div className="w-full bg-[#2e3150] text-[#92b4b5] text-sm font-semibold mr-2 px-2.5 py-1 rounded">
                Temp °C
              </div>
            </div>
            <div className=" text-white text-sm md:w-9/12">
              <Input
                placeholder="Temperature °C"
                name="temperature"
                type="text"
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 flex flex-col items-center w-full ">
        <div className="display-flex justify-start w-full mb-2">
          <div className="flex ">
            <div className="flex-initial mt-2 mr-1 w-20">
              <div className="w-full bg-[#2e3150] text-[#92b4b5] text-sm font-semibold mr-2 px-2.5 py-1 rounded">
                Ship To
              </div>
            </div>
            <div className=" text-white text-sm md:w-9/12">
              <Input
                placeholder="Destination Address"
                name="destAddress"
                type="text"
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div> */}
        <div className="h-[1px] w-full bg-gray-400 my-2" />
        {isLoading ? (
          <Loader />
        ) : (
          <button
            type="button"
            onClick={handleAddManufacturerRole}
            className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default RoleAdmin;
