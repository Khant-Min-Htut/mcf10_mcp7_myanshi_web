import React from "react";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import SecondaryHeader from "../typography/SecondaryHeader";
import Paragraph from "../typography/Paragraph";
import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";


const ArticlesCard = ({date,title,description,img}) => {
  return (
    <div className="grid grid-cols-2 max-[843px]:grid-cols-1 gap-10 items-center justify-center group">
      <div className="flex flex-col gap-4 order-2 max-[843px]:order-2">
        <h1 className="flex gap-2 items-center text-neutral-800">
          <span>Sophie Moore</span>
          <span className="flex">
            <TfiLayoutLineSolid />
            <TfiLayoutLineSolid />
          </span>
          <span>{date}</span>
        </h1>
        <SecondaryHeader className={"group-hover:text-primary-color"}>
          {title}
        </SecondaryHeader>
        <Paragraph>
          {description}
        </Paragraph>
        <Link className="flex items-center gap-2 max-[400px]:text-bodyDefault text-bodyLarge text-neutral-800 mt-3">
          <span className=" group-hover:text-primary-color">READ MORE</span>{" "}
          <GoChevronRight className="size-8 group-hover:text-primary-color transform group-hover:translate-x-1 duration-300" />
        </Link>
      </div>
      <div className="max-h-[485px] h-full mx-auto order-2 max-[843px]:order-1 overflow-hidden">
        <img
          src={img}
          alt="Sushi preparation"
          className="w-full h-full object-cover relative transition-all duration-300 group-hover:scale-110"
        />
      </div>
    </div>
  );
};

export default ArticlesCard;
