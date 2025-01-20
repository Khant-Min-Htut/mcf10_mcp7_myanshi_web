import { useState, useEffect } from "react";

const useCarousel = (items, cardsPerView = 1,isHovered, autoSlideInterval = 3000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardLength = items.length;

  const nextSlide = () => {
    if (currentIndex + cardsPerView >= cardLength) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + cardsPerView);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - cardsPerView);
    } else {
      setCurrentIndex(cardLength - cardsPerView);
    }
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, autoSlideInterval);
      return () => clearInterval(interval);
    }
  }, [currentIndex, autoSlideInterval,isHovered]);

  return { currentIndex, nextSlide, prevSlide, cardLength };
};

export default useCarousel;
