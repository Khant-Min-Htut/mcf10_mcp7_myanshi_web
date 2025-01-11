import React from "react";
import HeroSection from "../../../components/sectionComponents/HeroSection";
import VisitDesktop from "../components/VisitDesktop";
import OurTiktok from "../components/OurTiktok";
import FAQ from "../components/FAQ";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import Visit from "../../about-us/components/Visit";

const Contact = () => {
  return (
    <main>
      <HeroSection
        isBreadCrumb={true}
        currentPage={"Contact Us"}
        title="Contact Us"
        isContactPage={true}
      />
      <VisitDesktop isContactPage={true}/>
      <FAQ />
      <OurTiktok />
    </main>
  );
};

export default Contact;
