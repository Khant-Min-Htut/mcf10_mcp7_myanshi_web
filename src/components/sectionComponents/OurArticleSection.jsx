import React from "react";
import Container from "../Container";
import ArticlesCard from "../cards/ArticlesCard";
import img from "../../assets/MyanShi/Home/sushiImg.png";
import SectionContainer from "../SectionContainer";
import { useNavigate } from "react-router-dom";
import Content1 from "../typography/Content1";
const OurArticleSection = () => {
  const nav = useNavigate();
  return (
    <SectionContainer>
      <Container>
        <div className=" flex flex-col gap-12">
          <Content1
            title="Our Articles"
            japanesText="ブログ"
            onClick={() => nav("/blog")}
            outlinebuttonText="ALL ARTICLES"
          />
          <ArticlesCard
            date={"Sep 30, 2024"}
            title={"How to prepare a delicious gluten-free sushi"}
            description={
              "Discover the essentials of making gluten-free sushi at home! From seasoned rice to fresh fillings and the right tools, learn how to create flavorful, restaurant-quality sushi in your kitchen."
            }
            img={img}
          />
        </div>
      </Container>
    </SectionContainer>
  );
};

export default OurArticleSection;
