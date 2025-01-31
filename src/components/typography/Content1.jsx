import React from "react";
import JapaneseText from "./JapaneseText";
import PrimaryHeader from "./PrimaryHeader";
import Paragraph from "./Paragraph";
import SolidBtn from "../../buttons/SolidBtn";

const Content1 = ({ title, japanesText, text, buttonText }) => {
  return (
    <div className=" col-span-1 flex flex-col gap-12 ">
      <div className=" flex flex-col gap-6">
        <div className=" flex flex-col gap-4">
          <JapaneseText>{japanesText}</JapaneseText>
          <PrimaryHeader>{title}</PrimaryHeader>
        </div>
        <div className=" max-w-[560px]">
        <Paragraph>{text}</Paragraph>
        </div>
      </div>
      {buttonText && <SolidBtn text={buttonText} />}
    </div>
  );
};

export default Content1;
