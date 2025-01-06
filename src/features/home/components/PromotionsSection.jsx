import React from "react";
import SolidBtn from "../../../buttons/SolidBtn";
import Container from "../../../components/Container";
import cardImg from "../../../assets/MyanShi/Menu/ChimmiMakis.jpg";
import cardImg2 from "../../../assets/MyanShi/Menu/Migiri Sushi.jpg";
import cardImg3 from "../../../assets/MyanShi/Menu/TogarashiMakis.jpg";
import cardImg4 from "../../../assets/MyanShi/Menu/SalmonRoll.jpg";
import cardImg5 from "../../../assets/MyanShi/Menu/macrons.jpeg";
import Carousel from "./Carousel";

const PromotionsSection = () => {
  const cardData = [
    {
      image: cardImg,
      title: "Chimmi Makis",
      promotionPrice: "17,500",
      originalPrice: "25,000",
    },
    {
      image: cardImg2,
      title: "Migiri Sushi",
      promotionPrice: "17,500",
      originalPrice: "25,000",
    },
    {
      image: cardImg3,
      title: "Togarashi Makis",
      promotionPrice: "17,500",
      originalPrice: "25,000",
    },
    {
      image: cardImg4,
      title: "Salmon Roll",
      promotionPrice: "17,500",
      originalPrice: "25,000",
    },
    {
      image: cardImg5,
      title: "Macrons",
      promotionPrice: "17,500",
      originalPrice: "25,000",
    },
    {
      image: cardImg,
      title: "Chimmi Makis",
      promotionPrice: "17,500",
      originalPrice: "25,000",
    },
    {
      image: cardImg2,
      title: "Migiri Sushi",
      promotionPrice: "17,500",
      originalPrice: "25,000",
    },
    {
      image: cardImg3,
      title: "Togarashi Makis",
      promotionPrice: "17,500",
      originalPrice: "25,000",
    },
    {
      image: cardImg4,
      title: "Salmon Roll",
      promotionPrice: "17,500",
      originalPrice: "25,000",
    },
    {
      image: cardImg5,
      title: "Macrons",
      promotionPrice: "17,500",
      originalPrice: "25,000",
    },
  ];
  return (
    <Container>
      <div className=" flex flex-col gap-12 my-16 max-[1200px]:px-2">
        <div className=" w-full col-span-1 flex flex-col gap-6 ">
          <h2 className=" text-bodyLarge font-satoshi text-primary-color">
            プロモーション
          </h2>
          <h1 className=" max-[400px]:text-heading2  max-[843px]:text-display4 text-display2 font-notoSerifJp text-neutral-800">
            Christmas Promotions
          </h1>
          <p className=" max-[400px]:text-bodySmall max-[843px]:text-bodyDefault font-satoshi text-neutral-600">
            Celebrate the holiday season with our Christmas promotion from 25th
            to 31th. Enjoy festive deals and limited-time offers!
          </p>
          <SolidBtn text="SEE ALL" />
        </div>
        <Carousel menuItems={cardData} cardsPerView={3} showData={10} />
      </div>
    </Container>
  );
};

export default PromotionsSection;
