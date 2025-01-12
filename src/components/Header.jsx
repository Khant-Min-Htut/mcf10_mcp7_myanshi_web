import React from "react";
import Dropdown from "./nav/Dropdown";
import Container from "./Container";

const Header = () => {
  return (
    <header className="w-full bg-header-color">
      <Container>
        <Dropdown />
      </Container>
    </header>
  );
};

export default Header;
