import React from "react";
import Image from "next/image";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
const Card3 = ({title, price, image, description}) => {
  return (
    <div className="relative   bg-white p-4 mt-7 group">
      <div className="bg-orange-500 w-full h-[200px]">
        <Image alt="image" src={image}  width={200} height={100} className="absolute -top-10 group-hover:top-4 transition-all left-1/2 -translate-x-1/2 h-[200px] object-contain"/>
      </div>
      <div className="mt-3">
        <h4 className="text-lg font-medium">{title}</h4>
        <p className="mt-1 font-medium">${price}</p>
        <p className="text-sm">{description}</p>
        <button className="w-full h-10 bg-orange-500 text-white font-medium mt-4">Add To Cart</button>
      </div>
      <div className=" absolute top-1/2 -translate-y-1/2 right-5">
        <AiOutlineHeart className="text-2xl text-white cursor-pointer"/>
        <AiOutlineEye className="text-2xl mt-2 text-white cursor-pointer"/>
      </div>
    </div>
  );
};

export default Card3;
