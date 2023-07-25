import Image from "next/image";
import React from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineEye,
  AiFillStar,
} from "react-icons/ai";
const HorizontalCard = ({ title, price, image }) => {
  return (
    <div className="block sm:flex border border-white rounded-md py-1 px-2 relative group mb-5">
      <div className="bg-white rounded-md flex justify-center items-center">
        <Image alt="image" src={image} width={100} height={100} className="mx-auto h-[100px] w-[100px] object-contain" />
      </div>
      <div className="ml-0 sm:ml-5">
        <p className="font-medium">
          <small>{title}</small>
        </p>
        <p className="text-xl font-medium ">
          <small className="text-orange-500">$</small>
          {price}
        </p>
        <div className="flex mt-3">
          <AiFillStar className="text-orange-500 text-sm" />
          <AiFillStar className="text-orange-500 text-sm" />
          <AiFillStar className="text-orange-500 text-sm" />
          <AiFillStar className="text-orange-500 text-sm" />
          <AiFillStar className="text-orange-500 text-sm" />
        </div>
      </div>
      <div className="absolute left-0 invisible group-hover:visible  top-0 bg-white bg-opacity-70 w-0 h-full group-hover:w-full rounded-md flex justify-center items-center space-x-4 transition-all">
        <AiOutlineShoppingCart className="text-2xl cursor-pointer" />
        <AiOutlineEye className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default HorizontalCard;
