import React from "react";
import BrowseMenuSection from "../components/BrowseMenuSection";
import PromotionsSection from "../components/PromotionsSection";
import AboutUsSection from "../components/AboutUsSection";
import TiktokSection from "../components/TiktokSection";
import FOLLOW_US_Section from "../components/FOLLOW_US_Section";
import HeroSection from "../../../components/HeroSection";

const Home = () => {
  return <>
    <HeroSection isHomePage={true} title={"Fresh, Flavorful Sushi, Only in Myanmar"}/>
    <BrowseMenuSection/>
    <PromotionsSection/>
    <AboutUsSection/>
    <FOLLOW_US_Section/>
    <TiktokSection/>
  </>;
};

export default Home;
