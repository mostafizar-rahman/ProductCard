import Image from "next/image";
import React, { useState } from "react";
import imag1 from "../../../assets/images/1.png";

const Card1 = () => {
  const [isSelectSize, setIsSelectSize] = useState("m");
  return (
    <div className="bg-white rounded-md relative  min-h-[490px]  p-5 sm:p-0">
      <div className="bg-orange-500 rounded-md sm:w-[180px]   sm:absolute sm:top-1/2 sm:-translate-y-1/2 -left-3 p-2">
        <Image alt="image" src={imag1} width={220} height={250} className="sm:h-[180px] mx-auto" />
        <div className="flex justify-between mt-5">
          <div className="bg-white p-1 rounded-md cursor-pointer">
            <Image alt="image" src={imag1} width={40} height={40} />
          </div>
          <div className="bg-white p-1 rounded-md cursor-pointer">
            <Image alt="image" src={imag1} width={40} height={40} />
          </div>
          <div className="bg-white p-1 rounded-md cursor-pointer">
            <Image alt="image" src={imag1} width={40} height={40} />
          </div>
        </div>
      </div>

      <div className=" sm:absolute min-h-[490px] left-[160px] sm:top-1/2 sm:-translate-y-1/2 p-5">
        <h2 className="font-semibold text-2xl text-slate-700">Shart</h2>
        <p>
          <small>$</small>
          <span className="text-2xl font-medium text-orange-600">300</span>
        </p>
        <div className="mt-5">
          <b className="font-medium">Size</b>
          <div className="flex mt-1">
            <button
              className={`w-10 h-7 border-slate-300 border rounded-sm  flex justify-center items-center text-sm  ${
                isSelectSize === "m"
                  ? "bg-orange-500 text-white"
                  : "bg-transparent"
              }`}
            >
              M
            </button>
            <button
              className={`w-10 h-7 border-slate-300 border rounded-sm  flex justify-center items-center text-sm ml-3 ${
                isSelectSize === "l"
                  ? "bg-orange-500 text-white"
                  : "bg-transparent"
              }`}
            >
              L
            </button>
            <button
              className={`w-10 h-7 border-slate-300 border rounded-sm  flex justify-center items-center text-sm ml-3 ${
                isSelectSize === "xl"
                  ? "bg-orange-500 text-white"
                  : "bg-transparent"
              }`}
            >
              XL
            </button>
            <button
              className={`w-10 h-7 border-slate-300 border rounded-sm  flex justify-center items-center text-sm ml-3 ${
                isSelectSize === "xxl"
                  ? "bg-orange-500 text-white"
                  : "bg-transparent"
              }`}
            >
              XXL
            </button>
          </div>
          <b className="font-medium mt-3 inline-block">Color</b>
          <div className="flex flex-wrap mt-1">
            <button
              className={`min-w-[43px] h-7 border-slate-300 border rounded-sm  flex justify-center items-center text-sm mr-3 mb-2 ${
                isSelectSize === "m"
                  ? "bg-orange-500 text-white"
                  : "bg-transparent"
              }`}
            >
              Black
            </button>
            <button
              className={`min-w-[43px] h-7 border-slate-300 border rounded-sm  flex justify-center items-center text-sm mr-3 mb-2 ${
                isSelectSize === "l"
                  ? "bg-orange-500 text-white"
                  : "bg-transparent"
              }`}
            >
              Gray
            </button>
            <button
              className={`min-w-[43px] h-7 border-slate-300 border rounded-sm  flex justify-center items-center text-sm mr-3 mb-2 ${
                isSelectSize === "xl"
                  ? "bg-orange-500 text-white"
                  : "bg-transparent"
              }`}
            >
              Red
            </button>
            <button
              className={`min-w-[43px] h-7 border-slate-300 border rounded-sm  flex justify-center items-center text-sm mr-3 mb-2 ${
                isSelectSize === "xxl"
                  ? "bg-orange-500 text-white"
                  : "bg-transparent"
              }`}
            >
              White
            </button>
          </div>
        </div>
        <ul className="mt-5 list-disc ml-4 ">
          <li className="text-sm">Lorem ipsum dolor sit amet.</li>
          <li className="text-sm">adipisicing elit. Quasi dolores, officia </li>
          <li className="text-sm"> dolor sit amet. Quasi dolores, officia</li>
        </ul>
        <button className="bg-orange-500 w-full h-10 text-white mt-5 rounded-md">Add To Cart</button>
      </div>
    </div>
  );
};

export default Card1;
