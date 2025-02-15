import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../../../store";
// import img from "../../../assets/MyanShi/Menu/MigiriSushi.jpg";
import testAvatar1 from "../../../assets/MyanShi/Avatar/testAvatar1.png";

const Header = ({ pageName }) => {
  const { isDrawerOpen, setIsDrawerOpen, isDesktopSize } = useStore();
  useStore();
  //  console.log(" I am desktop size",isDesktopSize)
  console.log("isDrawerOpen", isDrawerOpen);
  const dropdownRef = useRef(null);
  return (
    <div className=" h-[88px] w-full max-w-screen  flex justify-between items-center max-[990px]:px-[10px] mb-6">
      <button
        ref={dropdownRef}
        className="block min-[990px]:hidden  text-black focus:outline-none z-50"
      >
        {isDrawerOpen ? (
          <svg
            onClick={() => setIsDrawerOpen(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-8 transition-transform duration-300 ease-in-out transform -rotate-90"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setIsDrawerOpen(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-8 transition-all duration-300 ease-in-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        )}
      </button>

      <h1 className="  font-satoshi  text-cardTitle font-bold">{pageName}</h1>

      <Link to="/dashboard/profile" className="flex items-center gap-2">
        <img className="w-10 h-10 rounded-full" src={testAvatar1} />
        <div>
          <h1 className="  text-bodySmall font-satoshi max-sm:text-[18px] text-neutral-800 ">
            User One
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default Header;
