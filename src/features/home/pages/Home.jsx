import React from "react";
import BrowseMenuSection from "../components/BrowseMenuSection";
import PromotionsSection from "../components/PromotionsSection";
import FOLLOW_US_Section from "../components/FOLLOW_US_Section";
import HeroSection from "../../../components/sectionComponents/HeroSection";
import HomePageTikTokSection from "../components/HomePageTikTokSection";
import HomeAboutUsSection from "../components/HomeAboutUsSection";

const Home = () => {
  return <>
    <HeroSection isHomePage={true} title={"Fresh, Flavorful Sushi, Only in Myanmar"}/>
    <BrowseMenuSection/>
    <PromotionsSection/>
    <HomeAboutUsSection/>
    <HomePageTikTokSection/>
    <FOLLOW_US_Section/>
  </>;
};

export default Home;
