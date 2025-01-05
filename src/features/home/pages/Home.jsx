import React from "react";
import BrowseMenuSection from "../components/BrowseMenuSection";
import PromotionsSection from "../components/PromotionsSection";
import AboutUsSection from "../components/AboutUsSection";
import TiktokSection from "../components/TiktokSection";
import FOLLOW_US_Section from "../components/FOLLOW_US_Section";

const Home = () => {
  return <div>
    <BrowseMenuSection/>
    <PromotionsSection/>
    <AboutUsSection/>
    <FOLLOW_US_Section/>
    <TiktokSection/>
  </div>;
};

export default Home;
