import React from "react";
import JapaneseText from "../typography/JapaneseText";
import PrimaryHeader from "../typography/PrimaryHeader";
import OutLineBtn from "../../buttons/OutLineBtn";
import Container from "../Container";
import ArticlesCard from "../cards/ArticlesCard";
import img from "../../assets/MyanShi/OurTitok/titokImg2.png";
import SectionContainer from "../SectionContainer";
const OurArticleSection = () => {
  return (
    <SectionContainer>
      <Container>
        <div className=" flex flex-col gap-12">
          <div className=" flex justify-between items-center">
            <div>
              <JapaneseText>ブログ</JapaneseText>
              <PrimaryHeader>Our Articles</PrimaryHeader>
            </div>
            <OutLineBtn
              dark={true}
              text={"READ MORE"}
              className={"text-neutral-700 border-neutral-700   "}
            />
          </div>
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
