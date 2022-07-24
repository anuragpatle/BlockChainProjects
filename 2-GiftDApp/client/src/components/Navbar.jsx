import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Routes, Route, Link } from "react-router-dom";

import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`px-10 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex  flex-row border-x-0 items-center  border-t-0  border-b-2   rounded-lg  rounded-sm p-2 outline-none bg-transparent text-white  text-sm white-glassmorphism">
      <div className=" w-1/4">
        <Link to="/">
          <img src={logo} alt="logo" className="w-64 cursor-pointer ml-10" />
        </Link>
      </div>

      <div className=" w-3/4 flex-row-reverse">
        <div className=" mt-1  flex  flex-row-reverse">
          <ul className="text-white md:flex hidden list-none flex-row  items-center flex-initial">
            {["Contact Us", "About", "Help"].map((item, index) => (
              <NavBarItem key={item + index} title={item} />
            ))}
          </ul>
        </div>
      </div>

      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {true && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Exchange", "Tutorials", "Wallets"].map((item, index) => (
              <NavBarItem
                key={item + index}
                title={item}
                classprops="my-2 text-lg"
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
