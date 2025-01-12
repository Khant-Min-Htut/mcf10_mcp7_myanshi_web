import React from "react";
import Dropdown from "./nav/Dropdown";

const Header = () => {
  return (
    <header className="w-full bg-header-color">
      <Dropdown />
    </header>
  );
};

export default Header;
