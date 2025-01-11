import React from "react";
import HeroSection from "../../../components/sectionComponents/HeroSection";
import DetailBlogSection from "../components/DetailBlogSection";

const DetailBlog = () => {
  const links = [{ path: "/blog", title: "Blog" }];
  return (
    <div>
      <HeroSection
        isBreadCrumb={true}
        currentPage={"Gluten-Free Sushi"}
        title="How to prepare a delicious gluten-free sushi"
        links={links}
      />
      <DetailBlogSection />
    </div>
  );
};

export default DetailBlog;
