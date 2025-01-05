// src/components/Header.jsx
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import SushiIcon from "../Icon/SushiIcon";
import CallNow from "../buttons/CallNow";

const Header = () => {
  return (
    <header className="bg-header-color text-white p-5">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <Link href="/">
            <SushiIcon />
          </Link>
          <span className=" font-notoSerifJp text-white text-heading3 font-black">
            MYANSHI
          </span>
        </div>
        <nav>
          <ul className="flex space-x-6 justify-center items-center gap-4">
            <li>
              <NavLink
                to="/"
                className="font-satoshi text-heading4  relative text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:after:w-full"
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="font-satoshi text-heading4  relative text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:after:w-full"
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className="font-satoshi text-heading4  relative text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:after:w-full"
              >
                MENU
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="font-satoshi text-heading4  relative text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:after:w-full"
              >
                BLOG
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="font-satoshi text-heading4  relative text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:after:w-full"
              >
                CONTACT
              </NavLink>
            </li>
            <li>
              <CallNow />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
