import { useState, useEffect } from "react";

const useCarousel = (items, cardsPerView = 3, autoSlideInterval = 3000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardLength = items.length;
  const isEnd = currentIndex === Math.ceil(cardLength / cardsPerView) - 1;

  useEffect(() => {
    if (isEnd) {
      setCurrentIndex(0);
    }
  }, [isEnd]);

  const nextSlide = () => {
    if (currentIndex < items.length - cardsPerView) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the start
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    if (autoSlideInterval) {
      const timer = setInterval(nextSlide, autoSlideInterval);
      return () => clearInterval(timer); // Cleanup on unmount
    }
  }, [currentIndex, autoSlideInterval]);

  return { currentIndex, nextSlide, prevSlide, cardLength, isEnd };
};

export default useCarousel;
