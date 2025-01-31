import React from "react";
import JapaneseText from "./JapaneseText";
import PrimaryHeader from "./PrimaryHeader";
import Paragraph from "./Paragraph";
import SolidBtn from "../../buttons/SolidBtn";
import OutLineBtn from "../../buttons/OutLineBtn";

const Content1 = ({
  title,
  japanesText,
  text,
  buttonText,
  isBrowse,
  onClick,
  outlinebuttonText,
}) => {
  return (
    <div
      className={`col-span-1 flex ${
        isBrowse ? "flex-col" : "max-md:flex-col md:items-center"
      }  justify-between  gap-12 w-full`}
    >
      <div className=" flex flex-col gap-6">
        <div className=" flex flex-col gap-4">
          <JapaneseText>{japanesText}</JapaneseText>
          <PrimaryHeader>{title}</PrimaryHeader>
        </div>
        {text && <Paragraph>{text}</Paragraph>}
      </div>
      {buttonText && (
        <SolidBtn
          onClick={onClick}
          text={buttonText}
          className=" max-[400px]:w-full max-[400px]:h-[40px]"
        />
      )}
      {outlinebuttonText && (
        <OutLineBtn
          onClick={onClick}
          dark={true}
          text={outlinebuttonText}
          className={"text-neutral-700 border-neutral-700   "}
        />
      )}
    </div>
  );
};

export default Content1;
