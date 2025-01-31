import React, { useEffect, useRef, useState } from "react";
import SushiIcon from "../../Icon/SushiIcon";
import { NavLink } from "react-router-dom";
import CallNowBtn from "../../buttons/CallNowBtn";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const dropdownRef = useRef(null);

  const handleClickOutside = (e) => {
    if (
      ref.current &&
      !ref.current.contains(e.target) &&
      !dropdownRef.current.contains(e.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className=" mx-auto  text-white px-4 py-4 relative z-50 bg-header-color">
        <div className="flex  items-center justify-between z-50  w-full h-full">
          <div className="flex items-center gap-2 z-50">
            <span>
              <NavLink to="/" className=" w-32">
                <SushiIcon />
              </NavLink>
            </span>
            <span className="font-notoSerifJp text-white text-heading3 font-black">
              MYANSHI
            </span>
          </div>

          <button
            ref={dropdownRef}
            className="block md:hidden text-white focus:outline-none z-50"
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

          <div className="max-md:hidden flex items-center lg:space-x-10 md:space-x-5 mr-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-satoshi text-heading4 relative text-white 
    after:content-[''] after:absolute after:left-0 after:-bottom-1.5 
    after:h-[2px] after:bg-red-500 after:transition-all 
    after:w-0 hover:after:w-full ${isActive ? "after:w-full" : ""}`
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-satoshi text-heading4 relative text-white 
    after:content-[''] after:absolute after:left-0 after:-bottom-1.5 
    after:h-[2px] after:bg-red-500 after:transition-all 
    after:w-0 hover:after:w-full ${isActive ? "after:w-full" : ""}`
              }
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                `font-satoshi text-heading4 relative text-white 
    after:content-[''] after:absolute after:left-0 after:-bottom-1.5 
    after:h-[2px] after:bg-red-500 after:transition-all 
    after:w-0 hover:after:w-full ${isActive ? "after:w-full" : ""}`
              }
            >
              MENU
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-satoshi text-heading4 relative text-white 
    after:content-[''] after:absolute after:left-0 after:-bottom-1.5 
    after:h-[2px] after:bg-red-500 after:transition-all 
    after:w-0 hover:after:w-full ${isActive ? "after:w-full" : ""}`
              }
            >
              CONTACT
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `font-satoshi text-heading4 relative text-white 
      after:content-[''] after:absolute after:left-0 after:-bottom-1.5 
      after:h-[2px] after:bg-red-500 after:transition-all 
      after:w-0 hover:after:w-full ${isActive ? "after:w-full" : ""}`
              }
            >
              BLOG
            </NavLink>
            <NavLink to="/contact">
              <CallNowBtn text="CALL NOW" />
            </NavLink>
          </div>
        </div>
      </nav>
      <div
        ref={ref}
        className={` absolute z-40 bg-header-color w-full h-auto transform ${
          isOpen ? "translate-y-[3%]" : "-translate-y-[100%]"
        } duration-300  left-0 top-14 px-2`}
      >
        <div className="lg:hidden mt-6 mb-6 space-y-6 z-20">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block font-satoshi text-heading4 relative text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:after:w-14 ${
                isActive ? "after:w-14" : ""
              }`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block font-satoshi text-heading4 relative text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:after:w-16 ${
                isActive ? "after:w-16" : ""
              }`
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/menu"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block font-satoshi text-heading4 relative text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:after:w-14 ${
                isActive ? "after:w-14" : ""
              }`
            }
          >
            MENU
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block font-satoshi text-heading4 relative text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:after:w-16 ${
                isActive ? "after:w-16" : ""
              }`
            }
          >
            CONTACT
          </NavLink>
          <NavLink
            to="/blog"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block font-satoshi text-heading4 relative text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:after:w-14 ${
                isActive ? "after:w-14" : ""
              }`
            }
          >
            BLOG
          </NavLink>
          <CallNowBtn text="CALL NOW" phoneNumber="09784224472" />
        </div>
      </div>
    </>
  );
};

export default Dropdown;
