import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { TransactionContext } from "../context/TransactionContext";
import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { companyCommonStyles } from "../utils/constants";


const SelectRole = () => {
  const { currentAccount, connectWallet } = useContext(TransactionContext);

  return (
    <div className="mt-5 p-20 flex w-full justify-center items-center">
      <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
        <h1 className="text-3xl sm:text-5xl text-white  py-1">
          Select Your Role
        </h1>

        {!currentAccount && (
          <button
            type="button"
            onClick={connectWallet}
            className="flex w-full flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            <AiFillPlayCircle className="text-white mr-2" />
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </button>
        )}

        <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
          <Link to="/roleAdmin">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Admin (Assign Roles)
            </div>
          </Link>
          <Link to="/roleAdmin">
            <div className={companyCommonStyles}>Customer</div>
          </Link>
          <Link to="/manufacturer">
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
            Manufacturer
            </div>
          </Link>
          <Link to="/roleAdmin">
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Third Party
            </div>
          </Link>
          <Link to="/roleAdmin">
            <div className={companyCommonStyles}>Delivery Hub</div>
          </Link>
          <Link to="/roleAdmin">
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              ..
            </div>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectRole;
