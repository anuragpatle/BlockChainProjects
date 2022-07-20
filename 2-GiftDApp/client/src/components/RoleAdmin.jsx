import React, { useContext } from "react";

import { RoleDataContext } from "../context/RoleDataContext";
import { Button } from "@mui/material";
import supplyChainContract from "../utils/getSmartConrtacts";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const RoleAdmin = () => {
  const [manufacturerRole, setManufacturerRole] = React.useState("");

  const handleAddManufacturerRole = async () => {
    const { roles, setRoles } = useContext(RoleDataContext);

    await setRoles({
      ...roles,
      manufacturer: manufacturerRole,
    });

    localStorage.setItem("mRole", manufacturerRole);
    await supplyChainContract.methods
      .addManufacturerRole(manufacturerRole)
      .send({ from: accounts[0], gas: 100000 })
      .then(console.log);

    setManufacturerRole("");
  };

  return (
    <div className="flex w-full justify-center items-center">
      <Button
        onClick={handleAddManufacturerRole}
        className={`rounded ${companyCommonStyles}`}
        style={{ textDecoration: "none", color: "#fff" }}
      >
        Add Manufacturer
      </Button>
    </div>
  );
};

export default RoleAdmin;
