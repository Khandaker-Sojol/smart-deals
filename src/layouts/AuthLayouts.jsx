import React from "react";
import Navbar from "../components/Header/Navbar";
import { Outlet } from "react-router";

const AuthLayouts = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default AuthLayouts;
