import React from "react";
import HeroSection from "../../../components/sectionComponents/HeroSection";

import CartSection from "../components/CartSection";
import CategorySection from "../components/MenuSection";
import ClientFeedbackSection from "../../../components/sectionComponents/ClientFeedbackSection";

const Menu = () => {
  return (
    <div>
      <HeroSection isBreadCrumb={true} currentPage="Menu" title="Our Menu" />
      <CategorySection />
      <ClientFeedbackSection/>
    </div>
  );
};

export default Menu;
