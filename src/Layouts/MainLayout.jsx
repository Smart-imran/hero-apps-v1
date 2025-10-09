import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div>
    
        <NavBar></NavBar>
        <Outlet></Outlet>
        <ToastContainer position="top-right" autoClose={2000} />
        <Footer></Footer>
      
    </div>
  );
};

export default MainLayout;
