import Link from "next/link";
import React from "react";
import img1 from "../../../assets/images/1.png";
import {
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import Image from "next/image";

const Card2 = ({ title, image, price }) => {
  return (
    <div className=" group  bg-white rounded-md relative p-5 ">
      <div className="">
        <div className="bg-[#ddd] rounded-md">
          <Image
            alt="image"
            src={image}
            width={200}
            height={200}
            className="h-52 object-contain p-5 mx-auto"
          />
        </div>
        <div className="  pt-2">
          <div className="mt-2 flex-grow">
            <p className=" text-base  font-bold">{title}</p>
            <div className="flex items-center justify-between">
              <h3 className="text-orange-500 font-semibold text-2xl ">
                <small className="">$</small>
                {price}
              </h3>
              <div className="flex">
                <AiFillStar className="text-orange-500 text-xl" />
                <AiFillStar className="text-orange-500 text-xl" />
                <AiFillStar className="text-orange-500 text-xl" />
                <AiFillStar className="text-orange-500 text-xl" />
                <AiFillStar className="text-orange-500 text-xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-1/4 bg-[#ddd] w-12 invisible group-hover:visible duration-900 transition-all pl-2 inline-block py-1 rounded-l-full border border-slate-400 border-r-0 ">
          <AiOutlineEye className="text-2xl cursor-pointer hover:text-orange-500" />
        </div>
        <div className="absolute top-0 left-0 invisible w-full group-hover:top-[99%] group-hover:visible duration-700  bg-white rounded-b-md z-50">
          <div className="flex justify-between   px-5 py-2">
            <div>
              <button>
                <AiOutlineShoppingCart className="text-2xl hover:text-orange-500 transition-all" />
              </button>
            </div>
            <div>
              <Link href="">
                <AiOutlineHeart className="text-2xl hover:text-orange-500 transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
