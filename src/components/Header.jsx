import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import SushiIcon from "../Icon/SushiIcon";
import CallNowBtn from "../buttons/CallNowBtn";
import Dropdown from "./nav/DropDown";

const Header = () => {
  return (
    <header className="w-full bg-header-color">
      <Dropdown />
    </header>
  );
};

export default Header;
