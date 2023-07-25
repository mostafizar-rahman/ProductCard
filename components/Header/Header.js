import React, { useState } from "react";
import TopHeader from "./TopHeader/TopHeader";
import BottomHeader from "./BottomHeader/BottomHeader";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header>
      <div className="hidden md:block">
        <TopHeader />
        <BottomHeader />
      </div>
      <div className="block md:hidden py-4 px-3 relative">
        <div className="flex justify-between items-center">
          <h3 className="text-xl">
            My<span className="text-orange-500 font-bold ">SHOP</span>
          </h3>
          <div>
            <AiOutlineMenu
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl cursor-pointer"
            />
          </div>
        </div>
        <div
          className={`bg-[#ddd] min-h-screen h-full min-w-[200px] fixed  top-0 z-50 p-5 duration-700 ${
            isMenuOpen ? "left-0" : "-left-full"
          }`}
        >
          <div className="flex">
            <input
              type="text"
              placeholder="Search Product"
              className="border border-orange-500  w-full px-2 outline-none py-2"
            />
            <button className="border bg-orange-500 border-orange-500 text-white lg:w-40 px-6 outline-none py-2">
              Search
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
