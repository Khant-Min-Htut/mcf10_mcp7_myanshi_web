import React from "react";
import SolidBtn from "../../../buttons/SolidBtn";
import { CiCircleChevRight } from "react-icons/ci";
import { motion } from "framer-motion";
import { GoChevronRight } from "react-icons/go";
import Container from "../../../components/Container";
import SushiIcon from "../../../assets/MyanShi/Home/myanshi_logo.png";
import Imgs from "../data/Imgs";

const BrowseMenuSection = () => {
  const { bg_img } = Imgs();
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
  return (
    <section className=" relative max-h-[1306px] min-h-[1076px]  flex items-center justify-center">
      <div className=" z-10 ">
        <Container>
          <div className=" flex items-center">
            <div className=" grid grid-flow-col grid-cols-2 max-[843px]:grid-cols-1 max-[843px]:grid-flow-row max-[1200px]:px-4 gap-4  items-start ">
              <div className=" col-span-1 flex flex-col gap-6 ">
                <h2 className=" text-bodyLarge font-satoshi text-primary-color">
                  メニュー
                </h2>
                <h1 className=" max-[400px]:text-heading2  max-[843px]:text-display4 text-display2 font-notoSerifJp text-neutral-800">
                  Browse Menu
                </h1>
                <p className=" max-[400px]:text-bodySmall max-[843px]:text-bodyDefault font-satoshi text-neutral-600">
                  Discover our selection of authentic Japanese flavors, from
                  fresh sushi to savory dishes, refreshing drinks, and
                  delightful desserts.
                </p>
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
                        <div className=" h-full flex items-start pt-1 ">
                          <img
                            src={SushiIcon}
                            alt=""
                            className=" w-[43px] h-[50px] "
                          />
                        </div>
                        <div>
                          <h1 className=" text-heading1 max-[400px]:text-heading3_500 font-notoSerifJp text-neutral-800">
                            Sushi
                          </h1>
                          <p className=" text-bodyDefault max-[400px]:text-bodySmall font-satoshi text-neutral-600">
                            Fresh and handcrafted sushi, inspired by tradition.
                          </p>
                        </div>
                      </div>
                      <div className=" flex items-center">
                        <button className=" border border-1 border-neutral-600 w-[60px] h-[60px] rounded-full flex items-center justify-center">
                          <GoChevronRight className=" text-neutral-600 font-light size-[30px]" />
                        </button>
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
