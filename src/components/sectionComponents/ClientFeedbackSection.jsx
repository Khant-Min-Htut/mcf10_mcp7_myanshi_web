import React, { useState, useEffect, useRef } from "react";
import JapaneseText from "../typography/JapaneseText";
import PrimaryHeader from "../typography/PrimaryHeader";
import Paragraph from "../typography/Paragraph";
import RoundedBtn from "../../buttons/RoundedBtn";
import SecondaryHeader from "../typography/SecondaryHeader";
import img from "../../assets/MyanShi/Menu/MigiriSushi.jpg";
import img2 from "../../assets/MyanShi/Menu/ChimmiMakis.jpg";
import img3 from "../../assets/MyanShi/Menu/Matcha_Tea.jpg";
import Container from "../Container";
import testAvatar1 from "../../assets/MyanShi/Avatar/testAvatar1.png";
import useCarousel from "../../hooks/useCarouse";
import { motion } from "framer-motion";
import SectionContainer from "../SectionContainer";
import Content1 from "../typography/Content1";

const ClientFeedbackSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const cardsPerView = 1;
  const { currentIndex, nextSlide, prevSlide } = useCarousel(
    data,
    cardsPerView,
    isHovered
  );
  const currentData = data[currentIndex];

  return (
    <SectionContainer>
      <Container>
        <div
          className={`grid grid-flow-col grid-cols-3 max-[1000px]:grid-cols-1 max-[1000px]:grid-flow-row  h-full gap-6  max-[1200px]:px-2`}
        >
          <div className="flex flex-col gap-12 max-sm:gap-10 col-span-1  max-[1000px]:flex-row  justify-between max-[1000px]:items-center max-[1000px]:mb-12">
            <div className="flex flex-col gap-6 col-span-1 ">
              <div className=" flex flex-col gap-4">
                <JapaneseText>クライアントは言う</JapaneseText>
                <h1 className="max-sm:text-heading2 max-w-[576px] max-lg:w-full   max-[843px]:text-display4 max-[1100px]:text-display4 text-display2 font-notoSerifJp text-neutral-800">
                  What Our Clients Say
                </h1>
              </div>
              <div className=" max-[1000px]:hidden">
                <Paragraph>
                  Discover what our customers love about MYANSHI through their
                  heartfelt reviews. From delicious sushi to an inviting
                  atmosphere, their words reflect our dedication to excellence.
                </Paragraph>
              </div>
            </div>
            <div className="flex gap-4 items-start max-sm:hidden ">
              <RoundedBtn leftArrow={true} outline={true} onClick={prevSlide} />
              <RoundedBtn
                rightArrow={true}
                outline={false}
                onClick={nextSlide}
              />
            </div>
          </div>

          <motion.div
            ref={ref}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            key={currentData?.img}
            initial={{ opacity: 0.8, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className=" col-span-2 flex max-[700px]:flex-col gap-12 items-center"
          >
            <img
              src={currentData?.img || "/fallback-image.jpg"}
              alt={currentData?.title || "Fallback Sushi"}
              loading="lazy"
              className="object-cover w-[50%] max-w-[397px] h-[450px] max-[700px]:w-full max-[500px]:h-auto max-[1000px]:col-span-2"
            />
            <div className="flex flex-col gap-12">
              <div className=" flex flex-col gap-6">
                <SecondaryHeader>“{currentData.title}”</SecondaryHeader>
                <Paragraph>{currentData.description}</Paragraph>
              </div>
              <div className="flex items-center gap-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src={currentData?.user.img}
                  alt
                />
                <div>
                  <h1 className=" font-satoshi text-bodyExtraLarge max-sm:text-[18px] text-neutral-800">
                    {currentData?.user.name}
                  </h1>
                  <Paragraph>{currentData?.user.email}</Paragraph>
                </div>
              </div>
            </div>
          </motion.div>

          <div className=" flex w-full sm:hidden  mt-10  items-center justify-center">
            <div className=" gap-4 items-center justify-center flex">
              {/* Previous Slide Button */}
              <RoundedBtn leftArrow={true} outline={true} onClick={prevSlide} />

              {/* Next Slide Button */}
              <RoundedBtn
                rightArrow={true}
                outline={false}
                onClick={nextSlide}
              />
            </div>
          </div>
        </div>
      </Container>
    </SectionContainer>
  );
};

export default ClientFeedbackSection;

const data = [
  {
    title: "Exquisite Salmon Sushi Rolls",
    img: img,
    description:
      "The salmon sushi rolls from MYANSHI are an absolute delight! The freshness of the salmon paired with perfectly seasoned rice made this an unforgettable experience. A must-try for any sushi enthusiast!",
    user: {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      img: testAvatar1,
    },
  },
  {
    title: "A Symphony of Flavors: Dragon Roll",
    img: img2,
    description:
      "The Dragon Roll from MYANSHI was a masterpiece. The perfect blend of eel, avocado, and creamy sauce made each bite heavenly. I've never tasted anything quite like it!",
    user: {
      name: "Michael Brown",
      email: "michael.brown@example.com",
      img: testAvatar1,
    },
  },
  {
    title: "Unparalleled Tuna Delight",
    img: img3,
    description:
      "The tuna rolls at MYANSHI are second to none! The freshness and melt-in-your-mouth texture of the tuna combined with subtle seasoning created a truly divine experience.",
    user: {
      name: "Emily Davis",
      email: "emily.davis@example.com",
      img: testAvatar1,
    },
  },
];
