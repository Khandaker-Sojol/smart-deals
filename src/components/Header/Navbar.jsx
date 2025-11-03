import React from "react";
import { NavLink } from "react-router";
import avatar from "/images/thumb-profile.png";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink to="/">Home</NavLink>

      <NavLink to="/all-products">All Products</NavLink>

      <NavLink to="/my-products">My Products</NavLink>

      <NavLink to="/my-bids">My Bids</NavLink>

      <NavLink to="/create-product">Create Product</NavLink>
    </>
  );
  return (
    <div className="navbar shadow-sm bg-[#FFFFFF] md:px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[16px] font-medium"
          >
            {navLinks}
          </ul>
        </div>
        <a className="text-3xl font-bold text-[#001931]">
          Smart<span className="text-gradient ">Deals</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4 text-[16px] font-medium text-[#1b1919e5]">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <img src={avatar} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
