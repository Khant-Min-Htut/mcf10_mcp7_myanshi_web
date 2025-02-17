import React, { useEffect } from "react";
import NavBar from "./dashBoardComponents/NavBar";
import { Outlet } from "react-router-dom";
import useStore from "../../store";

const DashBoardLayout = () => {
  const { isDrawerOpen, setIsDrawerOpen, setIsDesktopSize, isDesktopSize } =
    useStore();

  const isOpen = isDesktopSize || isDrawerOpen;

  useEffect(() => {
    const handleResize = () => setIsDesktopSize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsDesktopSize]);

  return (
    <section className="w-full h-full min-h-screen mx-auto justify-center items-center">
      <div className={` grid ${isDesktopSize && "grid-cols-[280px_1fr]"}  w-full max-w-[1440px] mx-auto relative`}>
        <div className={` ${!isDesktopSize && "absolute top-0 left-0 z-40" } `}>
          {isOpen && <NavBar />}
        </div>
        <div className={`flex flex-col  px-0 min-[990px]:px-6 min-[1200px]:px-16  ${!isDesktopSize ? "w-full " : "w-full "} z-30 overflow-auto`}>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default DashBoardLayout;
