import left from "../../../assets/MyanShi/AboutUs/caret-left.svg";
import right from "../../../assets/MyanShi/AboutUs/caret-right.svg";
import mail from "../../../assets/MyanShi/AboutUs/envelope.svg";
import location from "../../../assets/MyanShi/AboutUs/map-pin.svg";
import phone from "../../../assets/MyanShi/AboutUs/phone-call.svg";
import imageOne from "../../../assets/MyanShi/AboutUs/restaurant-image-1.png";
import imageTwo from "../../../assets/MyanShi/AboutUs/restaurant-image-2.png";
import imageThree from "../../../assets/MyanShi/AboutUs/restaurant-image-3.png";

import { useEffect, useState } from "react";

const Visit = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative  border-b-2 border-stroke-1-color pb-28 px-3">
      <h2 className="font-satoshi text-bodyDefault text-primary-color">
        レストラン
      </h2>
      <h2 className="text-heading2 font-notoSerifJp">Visit Our Restaurents</h2>

      {/* Carousel content */}
      <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-black/50 text-white p-4">
              <h2 className="text-heading3 font-notoSerifJp">Bahan, Yangon</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Slider controls */}
      <div className="absolute bottom-5 right-32 z-30 flex space-x-4 p-4">
        <button
          type="button"
          onClick={goToPrev}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md"
        >
          <img src={left} alt="left" className="size-5" />
        </button>
        <button
          type="button"
          onClick={goToNext}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md"
        >
          <img src={right} alt="right" className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default Visit;

const slides = [
  {
    image: imageOne,
    title: "Bahan, Yangon",
    content: [
      {
        icons: location,
        text: "No.144, Dhamazedi road, Bahan Township, Yangon",
      },
      {
        icons: mail,
        text: "myanshi.bahan@gmail.com",
      },
      {
        icons: phone,
        text: "09 785 568 747",
      },
    ],
  },
  {
    image: imageTwo,
    title: "Okklar (S), Yangon",
    content: [
      {
        icons: location,
        text: "No.800, Myittar Street, 13 Ward, South Okkalar, Yangon",
      },
      {
        icons: mail,
        text: "myanshi.okkalar@gmail.com",
      },
      {
        icons: phone,
        text: "09 785 568 748",
      },
    ],
  },
  {
    image: imageThree,
    title: "Mandalay",
    content: [
      {
        icons: location,
        text: "No.144, Dhamazedi road, Bahan Township, Yangon",
      },
      {
        icons: mail,
        text: "myanshi@gmail.com",
      },
      {
        icons: phone,
        text: "09 987 321 654",
      },
    ],
  },
];
