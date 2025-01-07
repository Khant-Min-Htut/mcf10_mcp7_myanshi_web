import React from "react";
import JapaneseText from "../typography/JapaneseText";
import PrimaryHeader from "../typography/PrimaryHeader";
import OutLineBtn from "../../buttons/OutLineBtn";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import SecondaryHeader from "../typography/SecondaryHeader";
import Paragraph from "../typography/Paragraph";
import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import img from "../../assets/MyanShi/OurTitok/titokImg2.png";
import Container from "../Container";

const OurArticleSection = () => {
  return (
    <div className=" py-[180px] max-[1200px]:px-2">
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

          <div className="grid grid-cols-2 max-[843px]:grid-cols-1 gap-10 items-center justify-center">
            <div className="flex flex-col gap-4 order-2 max-[843px]:order-2">
              <h1 className="flex gap-2 items-center text-neutral-800">
                <span>Sophie Moore</span>
                <span className="flex">
                  <TfiLayoutLineSolid />
                  <TfiLayoutLineSolid />
                </span>
                <span>Sep 30, 2024</span>
              </h1>
              <SecondaryHeader>
                How to prepare a delicious gluten-free sushi
              </SecondaryHeader>
              <Paragraph>
                Discover the essentials of making gluten-free sushi at home!
                From seasoned rice to fresh fillings and the right tools, learn
                how to create flavorful, restaurant-quality sushi in your
                kitchen.
              </Paragraph>
              <Link className="flex items-center gap-2 max-[400px]:text-bodyDefault text-bodyLarge text-neutral-800 mt-3">
                <span>READ MORE</span> <GoChevronRight className="size-6" />
              </Link>
            </div>
            <div className="max-h-[485px] h-full mx-auto order-2 max-[843px]:order-1">
              <img
                src={img}
                alt="Sushi preparation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurArticleSection;
