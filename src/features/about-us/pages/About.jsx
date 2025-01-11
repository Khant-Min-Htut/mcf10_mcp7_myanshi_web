import React from "react";
import HeroSection from "../../../components/sectionComponents/HeroSection";
// import HeroSection from "../../../components/HeroSection";
import Container from "../../../components/Container";
// import HeroSection from "../../../components/HeroSection";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import MyJourney from "../components/MyJourney";
import OurTeam from "../components/OurTeam";
import OurTiktok from "../components/OurTiktok";
import Visit from "../components/Visit";
import VisitDesktop from "../components/VisitDesktop";

const About = () => {
  const isDesktop = useMediaQuery("(min-width : 768px)");

  return (
    <section>
      <HeroSection
        isBreadCrumb={true}
        currentPage="About Us"
        title="We are MYANSHI"
      />
      <div className="space-y-28 pt-28">
        <Container>
          <Hero />
        </Container>
        {/* <hr className="border-b-2 border-stroke-1-color" /> */}
        {/* <Container> */}
        <AboutUs />
        {/* </Container> */}
        {/* <hr className="border-b-2 border-stroke-1-color" /> */}
        <Container>
          <MyJourney />
        </Container>
        <hr className="border-b-2 border-stroke-1-color" />
        <Container>
          <OurTeam />
        </Container>
        <hr className="border-b-2 border-stroke-1-color" />
        <Container>{isDesktop ? <VisitDesktop /> : <Visit />}</Container>
        {/* <hr className="border-b-2 border-stroke-1-color" /> */}
        {/* <Container> */}
        <OurTiktok />
        {/* </Container> */}
      </div>
    </section>
  );
};

export default About;
