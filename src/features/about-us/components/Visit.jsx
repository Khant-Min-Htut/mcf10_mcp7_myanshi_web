import { useEffect, useState } from "react";
import mail from "../../../assets/MyanShi/AboutUs/envelope.svg";
import left from "../../../assets/MyanShi/AboutUs/left-arrow-backup-2-svgrepo-com.svg";
import location from "../../../assets/MyanShi/AboutUs/map-pin.svg";
import phone from "../../../assets/MyanShi/AboutUs/phone-call.svg";
import imageOne from "../../../assets/MyanShi/AboutUs/restaurant-image-1.png";
import imageTwo from "../../../assets/MyanShi/AboutUs/restaurant-image-2.png";
import imageThree from "../../../assets/MyanShi/AboutUs/restaurant-image-3.png";
import right from "../../../assets/MyanShi/AboutUs/right-arrow-svgrepo-com.svg";
import CarouselCard from "./CarouselCard";

const Visit = ({ isContactPage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${!isContactPage && "pb-28"} px-3`}>
      <h2 className="font-satoshi text-bodyDefault text-primary-color">
        レストラン
      </h2>
      <h2 className="text-heading2 font-notoSerifJp">Visit Our Restaurants</h2>
      <CarouselCard currentIndex={currentIndex} data={data} />
      <div className="flex items-center gap-4 justify-center mt-10">
        <button
          type="button"
          onClick={prevSlide}
          className="size-14 bg-background-color border-header-color border rounded-full flex items-center justify-center hover:bg-neutral-500 duration-300 transition-colors"
        >
          <img src={left} alt="left" className="size-6" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="size-14 bg-primary-color rounded-full flex items-center justify-center"
        >
          <img src={right} alt="right" className="size-4" />
        </button>
      </div>
    </div>
  );
};

export default Visit;

const data = [
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
