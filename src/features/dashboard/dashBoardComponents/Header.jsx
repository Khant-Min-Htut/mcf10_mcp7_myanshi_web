import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
const Header = ({ pageName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  return (
    <div className=" h-[88px] w-full  flex justify-between items-center bg-red-300">
      <button
        ref={dropdownRef}
        className="block md:hidden text-black focus:outline-none z-50"
      >
        {isOpen ? (
          <svg
            onClick={() => setIsOpen(false)}
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
            onClick={() => setIsOpen(true)}
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

      <h1>{pageName}</h1>
      <Link to="/dashboard/profile" className="flex gap-2 items-center">
        <img src="//" alt="??" />
        <h1>Kyaw Kyaw</h1>
      </Link>
    </div>
  );
};

export default Header;
