import React from "react";
import SolidBtn from "../../../buttons/SolidBtn";
import { motion } from "framer-motion";
import Container from "../../../components/Container";
import SushiIcon from "../../../assets/MyanShi/Home/myanshi_logo.png";
import Imgs from "../data/Imgs";
import JapaneseText from "../../../components/typography/JapaneseText";
import PrimaryHeader from "../../../components/typography/PrimaryHeader";
import Paragraph from "../../../components/typography/Paragraph";
import SecondaryHeader from "../../../components/typography/SecondaryHeader";
import RoundedBtn from "../../../buttons/RoundedBtn";
import SectionContainer from "../../../components/SectionContainer";
import { div } from "framer-motion/client";
import { Link } from "react-router-dom";

const BrowseMenuSection = () => {
  const { bg_img } = Imgs();
  return (
    <div id="BrowseMenuSection">
      <SectionContainer>
        <div className=" z-10 ">
          <Container>
            <div className=" flex items-center">
              <div className=" grid grid-flow-col grid-cols-2 max-[843px]:grid-cols-1 max-[843px]:grid-flow-row max-[1200px]:px-4 gap-4  items-start ">
                <div className=" col-span-1 flex flex-col gap-6 ">
                  <JapaneseText>メニュー</JapaneseText>
                  <PrimaryHeader>Browse Menu</PrimaryHeader>
                  <Paragraph>
                    Discover our selection of authentic Japanese flavors, from
                    fresh sushi to savory dishes, refreshing drinks, and
                    delightful desserts.
                  </Paragraph>
                  <Link to="/menu">
                    <SolidBtn text="SEE MORE" />
                  </Link>
                </div>
                <div className=" col-span-1">
                  {/* <img src="" alt="" /> */}
                  {data.map((i) => (
                    <div
                      key={i.key}
                      className="border-b border-stroke-2-color last:border-none py-4 group"
                    >
                      <div className=" flex justify-between h-[110px] hover:ms-2transform group-hover:translate-x-1.5 duration-300 ">
                        <div className=" flex gap-4">
                          <div className=" h-full flex items-start pt-1 min-w-[43px]">
                            <img src={SushiIcon} alt="" className=" w-[43px]" />
                          </div>
                          <div>
                            <SecondaryHeader>{i.title}</SecondaryHeader>
                            <Paragraph>{i.description}</Paragraph>
                          </div>
                        </div>
                        <div className=" flex items-center">
                          <RoundedBtn
                            rightArrow={true}
                            outline={true}
                            color="neutral-600"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className=" absolute bottom-4 left-0 w-[200px] z-0 max-[873px]:hidden max-[990px]:w-[150px]  max-[400px]:w-[200px] max-[400px]:bottom-0">
          <img src={bg_img} alt="" className=" w-full h-full object-cover" />
        </div>
      </SectionContainer>
    </div>
  );
};

export default BrowseMenuSection;

const data = [
  {
    key: 1,
    title: "Sushi",
    description: "Fresh and handcrafted sushi, inspired by tradition.",
  },
  {
    key: 2,
    title: "Dishes",
    description:
      "Delicious, hearty dishes that bring the true taste of Japan to your table.",
  },
  {
    key: 3,
    title: "Drinks",
    description:
      "Refreshing drinks to enhance your meal, from classic teas to vibrant cocktails.",
  },
  {
    key: 4,
    title: "Desserts",
    description: "Sweet traditional Japanese desserts to finish your meal.",
  },
];
