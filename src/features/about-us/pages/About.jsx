import HeroSection from "../../../components/HeroSection";
import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import MyJourney from "../components/MyJourney";
import OurTeam from "../components/OurTeam";
import OurTiktok from "../components/OurTiktok";
import Visit from "../components/Visit";

const About = () => {
  return (
    <section>
      <HeroSection
        isBreadCrumb={true}
        currentPage="About Us"
        title="We are MYANSHI"
      />
      <div className="space-y-28 py-28">
        <Hero />
        <AboutUs />
        <MyJourney />
        <OurTeam />
        <Visit />
        <OurTiktok />
      </div>
    </section>
  );
};

export default About;
