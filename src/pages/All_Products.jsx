import React from "react";
import { useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard";

const All_Products = () => {
  const products = useLoaderData();

  return (
    <div className="my-6 px-4">
      <h1 className="text-center text-4xl md:text-5xl font-bold">
        Recent <span className="text-gradient">Products</span>
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default All_Products;
