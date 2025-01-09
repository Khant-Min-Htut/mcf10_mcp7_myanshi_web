import React from "react";
import HeroSection from "../../../components/sectionComponents/HeroSection";

import CartSection from "../components/CartSection";
import CategorySection from "../components/MenuSection";

const Menu = () => {
  return (
    <div>
      <HeroSection isBreadCrumb={true} currentPage="Menu" title="Our Menu" />
      <CategorySection />
    </div>
  );
};

export default Menu;
