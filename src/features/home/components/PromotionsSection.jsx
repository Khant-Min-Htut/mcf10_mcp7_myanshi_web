import React from "react";
import SolidBtn from "../../../buttons/SolidBtn";
import Container from "../../../components/Container";
import cardImg from "../../../assets/MyanShi/Menu/ChimmiMakis.jpg";
import cardImg2 from "../../../assets/MyanShi/Menu/MigiriSushi.jpg";
import cardImg3 from "../../../assets/MyanShi/Menu/TogarashiMakis.jpg";
import cardImg4 from "../../../assets/MyanShi/Menu/SalmonRoll.jpg";
import cardImg5 from "../../../assets/MyanShi/Menu/macrons.jpeg";
import Carousel from "./Carousel";
import JapaneseText from "../../../components/typography/JapaneseText";
import PrimaryHeader from "../../../components/typography/PrimaryHeader";
import Paragraph from "../../../components/typography/Paragraph";
import SectionContainer from "../../../components/SectionContainer";
import { useNavigate } from "react-router-dom";

const PromotionsSection = () => {
  const nav = useNavigate();
  return (
    <SectionContainer>
      <Container>
        <div className=" flex flex-col gap-12 my-16 max-[1200px]:px-2">
          <div className=" w-full col-span-1 flex flex-col gap-6 ">
            <JapaneseText>プロモーション</JapaneseText>
            <PrimaryHeader>Christmas Promotion</PrimaryHeader>
            <Paragraph>
              Celebrate the holiday season with our Christmas promotion from
              25th to 31th. Enjoy festive deals and limited-time offers!
            </Paragraph>
            <SolidBtn onClick={() => nav("/menu")} text="SEE ALL" />
          </div>
          <Carousel menuItems={cardData} showData={10} />
        </div>
      </Container>
    </SectionContainer>
  );
};

export default PromotionsSection;

const cardData = [
  {
    image: cardImg,
    title: "Chimmi Makis",
    promotionPrice: "17,500",
    originalPrice: "25,000",
    promotionPercent: "50%",
  },
  {
    image: cardImg2,
    title: "Migiri Sushi",
    promotionPrice: "17,500",
    originalPrice: "25,000",
    promotionPercent: "50%",
  },
  {
    image: cardImg3,
    title: "Togarashi Makis",
    promotionPrice: "17,500",
    originalPrice: "25,000",
    promotionPercent: "50%",
  },
  {
    image: cardImg4,
    title: "Salmon Roll",
    promotionPrice: "17,500",
    originalPrice: "25,000",
    promotionPercent: "50%",
  },
  {
    image: cardImg5,
    title: "Macrons",
    promotionPrice: "17,500",
    originalPrice: "25,000",
    promotionPercent: "50%",
  },
  {
    image: cardImg,
    title: "Chimmi Makis",
    promotionPrice: "17,500",
    originalPrice: "25,000",
    promotionPercent: "50%",
  },
  {
    image: cardImg2,
    title: "Migiri Sushi",
    promotionPrice: "17,500",
    originalPrice: "25,000",
    promotionPercent: "50%",
  },
  {
    image: cardImg3,
    title: "Togarashi Makis",
    promotionPrice: "17,500",
    originalPrice: "25,000",
    promotionPercent: "50%",
  },
  {
    image: cardImg4,
    title: "Salmon Roll",
    promotionPrice: "17,500",
    originalPrice: "25,000",
    promotionPercent: "50%",
  },  
  {
    image: cardImg5,
    title: "Macrons",
    promotionPrice: "17,500",
    originalPrice: "25,000",
    promotionPercent: "50%",
  },
  {
    image: cardImg3,
    title: "Togarashi Makis",
    promotionPrice: "17,500",
    originalPrice: "25,000",
    promotionPercent: "50%",
  },
];
