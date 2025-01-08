import React from "react";
import JapaneseText from "../../../components/typography/JapaneseText";
import PrimaryHeader from "../../../components/typography/PrimaryHeader";
import Paragraph from "../../../components/typography/Paragraph";
import Accordion from "./Accordion";
import Container from "../../../components/Container";

const FAQ = () => {
  return (
    <div className=" py-[180px] max-[843px]:py-[120px] border-y border-stroke-1-color">
      <Container>
        <div className=" flex flex-col gap-20">
          <div className=" flex flex-col gap-6  w-full mx-auto items-center ">
            <JapaneseText>よくある質問</JapaneseText>
            <PrimaryHeader>Frequently asked questions</PrimaryHeader>
            <Paragraph className="text-center">
              Discover the essence of Japanese cuisine with our fresh sushi,
              flavorful dishes, refreshing drinks, and indulgent desserts, all
              crafted to bring authentic flavors to your table
            </Paragraph>
          </div>
          <div>
            <Accordion />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
