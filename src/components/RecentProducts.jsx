import React, { use } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router";

const RecentProducts = ({ recentProductsPromise }) => {
  const recentProducts = use(recentProductsPromise);
  console.log(recentProducts);

  return (
    <div className="py-10 px-4">
      <h1 className="text-center text-4xl md:text-5xl font-bold">
        Recent <span className="text-gradient">Products</span>
      </h1>
      <div className="grid md:grid-cols-3 gap-6 py-5">
        {recentProducts.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>

      <div className="text-center">
        <Link to="/all-products" className="btn btn-primary px-12 py-4">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default RecentProducts;
