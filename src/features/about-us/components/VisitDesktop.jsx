import { useEffect, useState } from "react";
import mail from "../../../assets/MyanShi/AboutUs/envelope-desktop.svg";
import left from "../../../assets/MyanShi/AboutUs/left-arrow-backup-2-svgrepo-com.svg";
import location from "../../../assets/MyanShi/AboutUs/map-pin-desktop.svg";
import phone from "../../../assets/MyanShi/AboutUs/phone-call-desktop.svg";
import imageOne from "../../../assets/MyanShi/AboutUs/restaurant-image-1.png";
import imageTwo from "../../../assets/MyanShi/AboutUs/restaurant-image-2.png";
import imageThree from "../../../assets/MyanShi/AboutUs/restaurant-image-3.png";
import right from "../../../assets/MyanShi/AboutUs/right-arrow-svgrepo-com.svg";
import DesktopCarouselCard from "./DesktopCarouselCard";
import SectionContainer from "../../../components/SectionContainer";
import Container from "../../../components/Container";

const VisitDesktop = () => {
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
    <Container>
      <div className="flex justify-between items-end">
        <div>
          <h2 className="font-satoshi sm:text-bodyLarge text-bodyDefault text-primary-color">
            レストラン
          </h2>
          <h2 className=" font-notoSerifJp text-heading2 sm:text-display4 lg:text-display2">
            Visit Our Restaurants
          </h2>
        </div>
        <div className="flex items-center gap-4 justify-center ">
          <button
            type="button"
            onClick={prevSlide}
            className="size-12 bg-background-color border-header-color border rounded-full flex items-center justify-center hover:bg-neutral-500 duration-300 transition-colors"
          >
            <img src={left} alt="left" className="size-5" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="size-12 bg-primary-color rounded-full flex items-center justify-center"
          >
            <img src={right} alt="right" className="size-4" />
          </button>
        </div>
      </div>
      <DesktopCarouselCard currentIndex={currentIndex} data={data} />
    </Container>
  );
};

export default VisitDesktop;

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
