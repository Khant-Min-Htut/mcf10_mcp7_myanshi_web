import React, { useEffect, useRef, useState } from "react";
import MenuCard from "../../../components/cards/MenuCard";
import RoundedBtn from "../../../buttons/RoundedBtn";
import useCarousel from "../../../hooks/useCarouse";
const Carousel = ({ menuItems }) => {
  const [cardsPerView, setCardsPerView] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1193) {
        setCardsPerView(4);
      } else if (window.innerWidth > 890) {
        setCardsPerView(3);
      } else if (window.innerWidth > 600) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { currentIndex, nextSlide, prevSlide } = useCarousel(
    menuItems,
    cardsPerView,
    isHovered,
    3000
  );

  return (
    <div className="flex flex-col gap-12 w-full">
      <div className="flex relative">
        <div className="absolute right-full top-0 h-full w-[2000px] bg-background-color z-10"></div>
        <div
          ref={ref}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex gap-4 transition-transform duration-700"
          style={{
            transform: `translateX(-${
              currentIndex * 282 + 16 * currentIndex
            }px)`,
          }}
        >
          {menuItems.map((item, index) => (
            <MenuCard
              key={index}
              image={item.image}
              title={item.title}
              promotionPrice={item.promotionPrice}
              originalPrice={item.originalPrice}
              promotionPercent={item.promotionPercent}
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
