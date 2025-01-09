import React from "react";
import SolidBtn from "../../../buttons/SolidBtn";
import { motion } from "framer-motion";
import { GoChevronRight } from "react-icons/go";
import Container from "../../../components/Container";
import SushiIcon from "../../../assets/MyanShi/Home/myanshi_logo.png";
import Imgs from "../data/Imgs";
import JapaneseText from "../../../components/typography/JapaneseText";
import PrimaryHeader from "../../../components/typography/PrimaryHeader";
import Paragraph from "../../../components/typography/Paragraph";
import SecondaryHeader from "../../../components/typography/SecondaryHeader";
import RoundedBtn from "../../../buttons/RoundedBtn";

const BrowseMenuSection = () => {
  const { bg_img } = Imgs();
  return (
    <section className=" relative py-[180px] max-[843px]:py-[120px] border-y border-stroke-1-color  flex items-center justify-center">
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
                <SolidBtn text="SEE MORE" />
              </div>
              <div className=" col-span-1">
                {/* <img src="" alt="" /> */}
                {data.map((i) => (
                  <div
                    key={i.key}
                    className="border-b border-stroke-2-color last:border-none py-4"
                  >
                    <motion.div
                      whileHover={{ x: 5 }}
                      className=" flex justify-between h-[110px] hover:ms-2"
                    >
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
                    </motion.div>
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
    </section>
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
