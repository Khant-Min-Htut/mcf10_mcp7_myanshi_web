import React from "react";
import HeroSection from "../../../components/sectionComponents/HeroSection";
import VisitDesktop from "../components/VisitDesktop";
import OurTiktok from "../components/OurTiktok";
import FAQ from "../components/FAQ";

const Contact = () => {
  return (
    <div>
      <HeroSection
        isBreadCrumb={true}
        currentPage={"Contact Us"}
        title="Contact Us"
        isContactPage={true}
      />
      <VisitDesktop/>
      <FAQ/>
      <OurTiktok/>
    </div>
  );
};

export default Contact;
