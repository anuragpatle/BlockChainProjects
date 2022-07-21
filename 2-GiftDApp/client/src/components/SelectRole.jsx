import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const SelectRole = () => {
  return (

    <div className="flex w-full justify-center items-center">
      <Link className={`rounded ${companyCommonStyles}`} to="/roleAdmin" style={{ textDecoration: "none", color: "#fff" }}>
        <Button>Assign Roles</Button>
      </Link>
    </div>
  );
};

export default SelectRole;
