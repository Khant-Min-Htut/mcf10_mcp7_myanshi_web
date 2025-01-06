import React from "react";
import HeroSection from "../../../components/sectionComponents/HeroSection";

const Contact = () => {
  return (
    <div>
      <HeroSection
        isBreadCrumb={true}
        currentPage={"Contact Us"}
        title="Contact Us"
      />
    </div>
  );
};

export default Contact;
