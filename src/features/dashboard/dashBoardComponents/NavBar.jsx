import { keyframes } from "framer-motion";
import { path } from "framer-motion/client";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import useStore from "../../../store";

const NavBar = () => {
  const { isDrawerOpen, isDesktopSize, setIsDrawerOpen } = useStore();
  console.log("I am desktop", isDesktopSize);

  return (
    <div
      className={`w-[280px] h-[1024px] bg-[#0A0A0A] flex flex-col justify-between pt-6 transform ${
        isDrawerOpen ||
        (!isDesktopSize && "  duration-500 -translate-x-[150%] absolute")
      }`}
    >
      {/* Top Section */}
      <div className=" relative">
        {/* Brand/Logo */}
        <h1 className="text-white text-center text-2xl font-bold mb-8">
          MYANSHI
        </h1>

        {!isDesktopSize && (
          <div className=" absolute top-2 right-2">
            <svg
              onClick={() => setIsDrawerOpen(false)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-8 text-white transition-transform duration-300 ease-in-out transform -rotate-90"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        )}

        {/* Navigation Links */}
        <nav className="flex flex-col">
          {navData.map(({ id, icon, name, path }) => (
            <NavLink
              key={id}
              to={path}
              className="flex items-center w-[280px] h-[72px] px-4 gap-[10px] text-white hover:bg-[#1A1A1A]"
            >
              {/* Replace '//' with actual icon source or import your icons */}
              <span>{icon}</span>
              <span>{name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col">
        {/* Logout Button */}
        <button className="w-[280px] h-[72px] bg-[#CE3319] text-white text-lg font-semibold flex items-center justify-center">
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavBar;

const navData = [
  {
    id: 1,
    icon: "//",
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    id: 2,
    icon: "//",
    name: "Category",
    path: "/dashboard/category",
  },
  {
    id: 3,
    icon: "//",
    name: "Promotions",
    path: "/promotions",
  },
  {
    id: 4,
    icon: "//",
    name: "Blog",
    path: "/dashboard/blog",
  },
  {
    id: 5,
    icon: "//",
    name: "Author",
    path: "/",
  },
  {
    id: 6,
    icon: "//",
    name: "Gallery",
    path: "/",
  },
  {
    id: 7,
    icon: "//",
    name: "FAQ",
    path: "/",
  },
  {
    id: 8,
    icon: "//",
    name: "Review",
    path: "/",
  },
  {
    id: 9,
    icon: "//",
    name: "Location",
    path: "/",
  },
  {
    id: 10,
    icon: "//",
    name: "Profile",
    path: "/",
  },
];
