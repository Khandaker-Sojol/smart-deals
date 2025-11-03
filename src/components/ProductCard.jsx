import React from "react";
import thambnailCard from "/images/thumbnail-card.png";

const ProductCard = ({ product }) => {
  console.log(product);

  const { image, title, condition, price_max, price_min } = product;

  return (
    <div className="shadow bg-[#FFFFFF] border border-gray-300 rounded">
      <div className="p-6 space-y-3">
        <img className="rounded w-full" src={thambnailCard} alt="" />
        <h1 className="text-2xl font-medium">
          {title} [{condition}]
        </h1>
        <p className="text-gradient font-semibold text-xl">
          $ {price_min} - {price_max}
        </p>

        <button className="w-full border py-3 rounded font-semibold border-purple-400 text-purple-500 cursor-pointer hover:bg-purple-500 hover:text-white transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
