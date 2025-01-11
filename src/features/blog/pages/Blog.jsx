import React from "react";
import HeroSection from "../../../components/sectionComponents/HeroSection";
import PrepareMenuSection from "../components/PrepareMenuSection";

//TEST
const Blog = () => {
  return (
    <div>
      <HeroSection isBreadCrumb={true} currentPage={"Blog"} title="Our Blog" />
      <PrepareMenuSection />
    </div>
  );
};

export default Blog;
