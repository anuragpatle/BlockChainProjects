import React, { useContext } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { RoleDataContext } from "../../context/RoleDataContext";
import Loader from "../../components/Loader";
import { TransactionContext } from "../../context/TransactionContext";
import { manufacturerAddress } from "../../utils/constants";
import { supplyChainStep1, supplyChainContract } from "../../utils/getSmartConrtacts";
import { adminAddress } from "../../utils/constants";
import {ethers} from "ethers";


const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={handleChange}
    className="border-x-0  border-t-0  border-b-2 border-b-pink-900  rounded-lg  w-full rounded-sm p-2 outline-none bg-transparent text-white  text-sm white-glassmorphism"
  />
);

export default function Manufacture() {
  const { currentAccount } = useContext(TransactionContext);

  // const supplyChainContract = props.supplyChainContract;

  const { roles } = React.useContext(RoleDataContext);
  const { isLoading, setIsLoading } = React.useContext(TransactionContext);
  const [fvalid, setfvalid] = React.useState(false);
  const navItem = [
    ["Add Product", "/manufacturer/manufacture"],
    ["Ship Product", "/manufacturer/ship"],
    ["All Products", "/manufacturer/allManufacture"],
  ];
  const [manuForm, setManuForm] = React.useState({
    id: 0,
    manufacturerName: "",
    manufacturerDetails: "",
    manufacturerLongitude: "",
    manufacturerLatitude: "",
    productName: "",
    productCode: 0,
    productPrice: 0,
    productCategory: "",
  });

  const handleChangeManufacturerForm = async (name, e) => {
    setManuForm({
      ...manuForm,
      [name]: e.target.value,
    });
  };

  const handleSubmitManufacturerForm = async () => {
    setIsLoading(true);

    if (
      manuForm.manufacturerName !== "" &&
      manuForm.manufacturerDetails !== "" &&
      manuForm.productName !== "" &&
      manuForm.productCode !== 0 &&
      manuForm.productPrice !== 0
    ) {
      setfvalid(false);

      console.log(supplyChainStep1.supplyChainStep1)

      // await supplyChainStep1.testFunctionCall().then(console.log);

      // await supplyChainStep1.manufactureProduct("a", "b", "c", "d", "e", 1, 2, "f");
      await supplyChainContract.manufactureProduct(
        manuForm.manufacturerName,
        manuForm.manufacturerDetails,
        "x",
        "x",
        manuForm.productName,
        parseInt(manuForm.productCode),
        parseInt(manuForm.productPrice),
        "x"
      )
      //   // .send({ from: adminAddress, gas: 100000 })
      // .then(console.log)
      // .on("transactionHash", function (hash) {
      //   handleSetTxhash(hash);
      // });

      // await supplyChainContract.methods
      //   .manufactureProduct(
      //     manuForm.manufacturerName,
      //     manuForm.manufacturerDetails,
      //     manuForm.manufacturerLongitude,
      //     manuForm.manufacturerLatitude,
      //     manuForm.productName,
      //     parseInt(manuForm.productCode),
      //     parseInt(manuForm.productPrice),
      //     manuForm.productCategory
      //   )
      //   // .send({ from: roles.manufacturer, gas: 999999 })
      //   // .then(console.log)
      //   .on("transactionHash", function (hash) {
      //     handleSetTxhash(hash);
        // });
      setManuForm({
        id: 0,
        manufacturerName: "",
        manufacturerDetails: "",
        manufacturerLongitude: "",
        manufacturerLatitude: "",
        productName: "",
        productCode: 0,
        productPrice: 0,
        productCategory: "",
      });
    } else {
      setfvalid(true);
    }
    setIsLoading(false);
  };

  const handleSetTxhash = async (hash) => {
    await supplyChainContract.supplyChainContract
      .setTransactionHashOnManufacture(hash)
      .send({ from: manufacturerAddress, gas: 900000 });
  };

  // const createProduct = async () => {
  //     setLoading(true);
  //     for (var i = 0; i < 5; i++) {
  //         await supplyChainContract.methods
  //             .manufactureProduct(
  //                 "product" + i,
  //                 "manufacturer" + 1,
  //                 "98",
  //                 "89",
  //                 "mi" + i,
  //                 99 + i,
  //                 12000,
  //                 "electronics"
  //             )
  //             .send({ from: roles.manufacturer, gas: 999999 })
  //             .on("transactionHash", function (hash) {
  //                 handleSetTxhash(hash);
  //             });
  //     }
  //     setLoading(false);
  // };
  console.log("#### manuf: " + roles.manufacturer);
  console.log({ roles });
  console.log("#### current account: " + currentAccount);
  console.log({ currentAccount });
  console.log("#### manufacturerAddress: " + manufacturerAddress);
  console.log({ manufacturerAddress });
  return (
    <div className="flex flex-col justify-center ">
      <div>
        <div className=" p-20  flex-col justify-center w-10/12">
          <div className="">
            <h1 className="text-white text-2xl sm:text-4xl text-gradient py-1">
              Add Product
              <br />
            </h1>
            <p className="mt-10 text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base"></p>
          </div>

          {currentAccount.toUpperCase() ===
          manufacturerAddress.toUpperCase() ? (
            <div className=" border-2 border-amber-900 p-5 w-3/3 flex flex-col items-center blue-glassmorphism">
              <div className="mt-2 flex flex-col items-center w-full ">
                <div className="display-flex justify-start w-full mb-2">
                  <div className="flex ">
                    <div className="w-2/12 flex-initial mt-2 mr-1">
                      <div className="bg-[#2e3150] text-[#92b4b5] text-sm font-semibold mr-2 px-2.5 py-1 rounded">
                        Manufacturer Name
                      </div>
                    </div>
                    <div className="text-white text-sm w-10/12">
                      <Input
                        placeholder=""
                        name="manufacturerName"
                        type="text"
                        handleChange={(e) => {
                          handleChangeManufacturerForm("manufacturerName", e);
                          console.log({ manuForm });
                        }}
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
                        Other Details
                      </div>
                    </div>
                    <div className="text-white text-sm w-10/12">
                      <Input
                        placeholder=""
                        name="manufacturerDetails"
                        type="text"
                        handleChange={(e) => {
                          handleChangeManufacturerForm(
                            "manufacturerDetails",
                            e
                          );
                          console.log({ manuForm });
                        }}
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
                        Product Name
                      </div>
                    </div>
                    <div className="text-white text-sm w-10/12">
                      <Input
                        placeholder=""
                        name="productName"
                        type="text"
                        handleChange={(e) => {
                          handleChangeManufacturerForm("productName", e);
                          console.log({ manuForm });
                        }}
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
                        Product Code
                      </div>
                    </div>
                    <div className="text-white text-sm w-10/12">
                      <Input
                        placeholder=""
                        name="productCode"
                        type="number"
                        handleChange={(e) => {
                          handleChangeManufacturerForm("productCode", e);
                          console.log({ manuForm });
                        }}
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
                        Product Price
                      </div>
                    </div>
                    <div className="text-white text-sm w-10/12">
                      <Input
                        placeholder=""
                        name="productPrice"
                        type="number"
                        handleChange={(e) => {
                          handleChangeManufacturerForm("productPrice", e);
                          console.log({ manuForm });
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[1px] w-full bg-gray-400 my-2" />
              {isLoading ? (
                <Loader />
              ) : (
                <button
                  type="button"
                  onClick={handleSubmitManufacturerForm}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#a40ea4] rounded-full cursor-pointer"
                >
                  Submit
                </button>
              )}
            </div>
          ) : (
            <div className=" border-2 border-amber-900 p-5 w-3/3 flex flex-col items-center blue-glassmorphism">
              <div className="mt-2 flex flex-col items-center w-full ">
                <div className="display-flex  w-full mb-2">
                  <div className="flex ">
                    <div className="w-12/12 flex mt-2 mr-1">
                      <div className="bg-[#2e3150] text-[#92b4b5] text-sm font-semibold mr-2 px-2.5 py-1 rounded">
                        Sorry, you can not proceed as you are not a
                        manufacturer!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
