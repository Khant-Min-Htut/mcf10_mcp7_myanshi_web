import React, { useEffect, useState } from "react";
import MenuCard from "../../../components/cards/MenuCard";
import RoundedBtn from "../../../buttons/RoundedBtn";
import Container from "../../../components/Container";

const Carousel = ({ menuItems, cardsPerView = 3 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardLength = menuItems.length;
  const isEnd = currentIndex === Math.ceil(cardLength / cardsPerView) - 1;

  useEffect(() => {
    if (isEnd) {
      setCurrentIndex(0);
    }
  }, [isEnd]);

  const nextSlide = () => {
    if (currentIndex < menuItems.length - cardsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="flex flex-col gap-12 w-full">
      <div className="flex relative">
        <div
          className="absolute right-full top-0 h-full w-[200px] bg-background-color z-10"
        ></div>
        <div
          className="flex gap-4 transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
          }}
        >
          {menuItems.map((item, index) => (
            <MenuCard
              key={index}
              image={item.image}
              title={item.title}
              promotionPrice={item.promotionPrice}
              originalPrice={item.originalPrice}
            />
          ))}
        </div>
      </div>
      <div className="flex gap-4 w-auto justify-end">
        <RoundedBtn leftArrow={true} outline={true} onClick={prevSlide} />
        <RoundedBtn rightArrow={true} onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Carousel;
