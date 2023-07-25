import React from "react";
import TopHeader from "./TopHeader/TopHeader";
import BottomHeader from "./BottomHeader/BottomHeader";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <header>
      <div className="hidden md:block">
        <TopHeader />
        <BottomHeader />
      </div>
      <div className="block md:hidden py-4 px-3">
        <div className="flex justify-between items-center">
          <h3 className="text-xl">
            My<span className="text-orange-500 font-bold ">SHOP</span>
          </h3>
          <div>
            <AiOutlineMenu className="text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
