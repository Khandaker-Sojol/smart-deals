import React from "react";
import bgLeftImg from "/images/bg-hero-left.png";
import bgRightImg from "/images/bg-hero-right.png";
import { CiSearch } from "react-icons/ci";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgLeftImg}), url(${bgRightImg}), linear-gradient(128.29deg, #FFE6FD, #E0F8F5)`,
        backgroundPosition: "left, right",
        backgroundRepeat: "no-repeat",
        // backgroundSize: ", 150px auto, 150px auto",
      }}
      className="relative py-12 px-4 md:py-25"
    >
      <div className="container mx-auto text-center">
        <h1 className=" text-4xl md:text-7xl font-bold mb-6">
          Deal Your Products <br />
          <span className="text-gradient">In A Smart</span> Way !
        </h1>
        <p className="md:text-xl mb-6 text-[#627382]">
          SmartDeals helps you sell, resell, and shop from trusted local sellers
          — all in one place!
        </p>
        <div className="mb-6 flex items-center justify-center">
          <input
            type="text"
            placeholder="Search For Products, Categories..."
            className="px-4 py-3 rounded-l-2xl w-1/2 focus:outline-none focus:ring-1 focus:ring-purple-500  bg-[#FFFFFF]"
          />
          <button className="bg-purple-500 cursor-pointer hover:bg-purple-600 text-white py-3 px-4  rounded-r-2xl focus:outline-none focus:ring-1 focus:ring-purple-500">
            <CiSearch size={24} />
          </button>
        </div>
        <div className="space-x-3 space-y-3">
          <button className="py-3 cursor-pointer btn-primary rounded-lg  hover:bg-purple-900 w-[250px] ">
            Watch All Products
          </button>
          <button className=" py-3 btn-outline cursor-pointer rounded-lg border-purple-400 w-[250px] border text-purple-700 hover:bg-purple-500 hover:text-white">
            Post a Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
