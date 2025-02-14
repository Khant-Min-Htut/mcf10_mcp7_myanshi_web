import React, { useEffect } from "react";
import NavBar from "./dashBoardComponents/NavBar";
import { Outlet } from "react-router-dom";
import useStore from "../../store";

const DashBoardLayout = () => {
  const { isDrawerOpen, setIsDrawerOpen, setIsDesktopSize, isDesktopSize } =
    useStore();

    console.log(" isafal;k;kaldf",isDesktopSize)
  const isOpen = isDesktopSize || isDrawerOpen;

  useEffect(() => {
    const handleResize = () => setIsDesktopSize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsDesktopSize]);

  return (
    <section className="w-full h-full min-h-screen mx-auto justify-center items-center">
      <div className={` grid ${isDesktopSize && "grid-cols-[280px_1fr]"}  w-full max-w-[1440px] mx-auto shadow-xl relative`}>
        <div className={` ${!isDesktopSize && "absolute top-0 left-0 z-40" } `}>
          {isOpen && <NavBar />}
        </div>
        <div className={`flex flex-col   ${!isDesktopSize ? "w-full px-0 " : "px-16"} w-full z-30 overflow-auto`}>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default DashBoardLayout;
