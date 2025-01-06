import React from "react";
import BrowseMenuSection from "../components/BrowseMenuSection";
import PromotionsSection from "../components/PromotionsSection";
import AboutUsSection from "../components/AboutUsSection";
import FOLLOW_US_Section from "../components/FOLLOW_US_Section";
import HeroSection from "../../../components/sectionComponents/HeroSection";
import HomePageTikTokSection from "../components/HomePageTikTokSection";

const Home = () => {
  return <>
    <HeroSection isHomePage={true} title={"Fresh, Flavorful Sushi, Only in Myanmar"}/>
    <BrowseMenuSection/>
    <PromotionsSection/>
    <AboutUsSection/>
    <FOLLOW_US_Section/>
    <HomePageTikTokSection/>
  </>;
};

export default Home;
