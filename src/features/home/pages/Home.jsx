import React from "react";
import BrowseMenuSection from "../components/BrowseMenuSection";
import PromotionsSection from "../components/PromotionsSection";
import FOLLOW_US_Section from "../components/FOLLOW_US_Section";
import HeroSection from "../../../components/sectionComponents/HeroSection";
import HomePageTikTokSection from "../components/HomePageTikTokSection";
import HomeAboutUsSection from "../components/HomeAboutUsSection";
import ClientsSaySection from "../components/ClientsSaySection";
import OurArticlesSection from "../components/OurArticlesSection";

const Home = () => {
  return (
    <>
      <HeroSection
        isHomePage={true}
        title={"Fresh, Flavorful Sushi, Only in Myanmar"}
      />
      <BrowseMenuSection />
      <PromotionsSection />
      <HomeAboutUsSection />
      <HomePageTikTokSection />
      <ClientsSaySection />
      <FOLLOW_US_Section />
      <OurArticlesSection />
    </>
  );
};

export default Home;
