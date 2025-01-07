import React from "react";
import JapaneseText from "../typography/JapaneseText";
import PrimaryHeader from "../typography/PrimaryHeader";
import OutLineBtn from "../../buttons/OutLineBtn";
import Container from "../Container";
import ArticlesCard from "../cards/ArticlesCard";

const OurArticleSection = () => {
  return (
    <div className=" py-[180px] max-[843px]:py-[120px] max-[1200px]:px-2 border-y border-stroke-1-color">
      <Container>
        <div className=" flex flex-col gap-12">
          <div className=" flex justify-between items-center">
            <div>
              <JapaneseText>ブログ</JapaneseText>
              <PrimaryHeader>Our Articles</PrimaryHeader>
            </div>
            <OutLineBtn
              text={"READ MORE"}
              className={
                "text-neutral-700 border-neutral-700 hover:bg-neutral-700 hover:text-white"
              }
            />
          </div>
          <ArticlesCard/>
        </div>
      </Container>
    </div>
  );
};

export default OurArticleSection;
