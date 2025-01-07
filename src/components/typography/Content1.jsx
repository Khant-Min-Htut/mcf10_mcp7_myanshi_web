import React from "react";
import JapaneseText from "./JapaneseText";
import PrimaryHeader from "./PrimaryHeader";
import Paragraph from "./Paragraph";
import SolidBtn from "../../buttons/SolidBtn";

const Content1 = ({ title, japanesText, text, buttonText }) => {
  return (
    <div className=" col-span-1 flex flex-col gap-6 ">
      <JapaneseText>{japanesText}</JapaneseText>
      <PrimaryHeader>{title}</PrimaryHeader>
      <Paragraph>
        {text}
      </Paragraph>
      {
        buttonText && (
          <SolidBtn text={buttonText} />
        )
      }
    </div>
  );
};

export default Content1;
