import React, { useState } from "react";
import SushiIcon from "../../Icon/SushiIcon";
import { Link } from "react-router-dom";
import CallNowBtn from "../../buttons/CallNowBtn";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-[1200px] mx-auto bg-header-color text-white px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <SushiIcon />
          </Link>
          <span className=" font-notoSerifJp text-white text-heading3 font-black">
            MYANSHI
          </span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        <div className="hidden md:flex items-center gap-4 space-x-8">
          <a
            href="/"
            className="font-satoshi text-heading4  relative text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:after:w-full"
          >
            Home
          </a>
          <a
            href="/menu"
            className="font-satoshi text-heading4  relative text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:after:w-full"
          >
            Menu
          </a>
          <a
            href="/about"
            className="font-satoshi text-heading4  relative text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:after:w-full"
          >
            About Us
          </a>
          <a
            href="/contact"
            className="font-satoshi text-heading4  relative text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:after:w-full"
          >
            Contact
          </a>
          <a href="">
            <CallNowBtn text="CALL NOW" />
          </a>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-6 mb-6 space-y-6">
          <a
            href="/"
            className="block font-satoshi text-heading4  relative text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:after:w-14"
          >
            Home
          </a>
          <a
            href="/menu"
            className="block font-satoshi text-heading4  relative text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:after:w-14"
          >
            Menu
          </a>
          <a
            href="/about"
            className="block font-satoshi text-heading4  relative text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:after:w-20"
          >
            About Us
          </a>
          <a
            href="/contact"
            className="block  font-satoshi text-heading4  relative text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:after:w-16"
          >
            Contact
          </a>
          <CallNowBtn text="CALL NOW" />
        </div>
      )}
    </nav>
  );
};

export default Dropdown;
