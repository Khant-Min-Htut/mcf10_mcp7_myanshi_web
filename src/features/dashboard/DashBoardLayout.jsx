import React from "react";
import NavBar from "./dashBoardComponents/NavBar";
import { Outlet } from "react-router-dom";

const DashBoardLayout = () => {
  return (
    <section className=" w-full h-full min-h-screen mx-auto justify-center items-center">
      <div className=" flex w-full max-w-[1440px]  mx-auto shadow-xl">
        <NavBar />
        <div className=" flex flex-col px-16 w-full ">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default DashBoardLayout;
