import Link from "next/link";
import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const BottomHeader = () => {
  return (
    <div className="mx-auto max-w-7xl py-5 flex justify-between items-center">
      <div className="bg-orange-500 px-3 py-2 cursor-pointer text-white">
        <b>SHOP BY CATEGORY</b>
      </div>
      <nav>
        <ul className="flex gap-5">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Shop</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-5">
        <button>
          <AiOutlineHeart className="text-2xl cursor-pointer" />
        </button>
        <button>
          <AiOutlineShoppingCart className="text-2xl cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default BottomHeader;
