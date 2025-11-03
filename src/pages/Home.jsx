import React from "react";
import Banner from "../components/Header/Banner";
import RecentProducts from "../components/RecentProducts";

const recentProductsPromise = fetch(
  "http://localhost:3000/latest-products"
).then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <RecentProducts
        recentProductsPromise={recentProductsPromise}
      ></RecentProducts>
    </div>
  );
};

export default Home;
