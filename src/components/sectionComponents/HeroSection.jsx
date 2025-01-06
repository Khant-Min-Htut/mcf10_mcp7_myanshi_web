import React from "react";
import Imgs from "../../features/home/data/Imgs";
import CoverImg from "../../assets/MyanShi/AboutUs/aboutHeroImg.jpg";
import AnimatedButton from "../../buttons/AnimatedButton";
import BreadCrumb from "../BreadCrumb";
import SolidBtn from "../../buttons/SolidBtn";
import OutLineBtn from "../../buttons/OutLineBtn";

const HeroSection = ({ isBreadCrumb, isHomePage, currentPage, title }) => {
  const { HeroSectionImg } = Imgs();
  return (
    <section className="flex items-center relative bg-blue-500">
    {isHomePage ? (
      <div className=" overflow-hidden">
        <img src={HeroSectionImg} alt="Hero Section" className=" min-h-[900px] max-[834px]:min-h-[600px] max-[450px]:min-h-[800px]  object-cover" />
      </div>
    ) : (
      <div className="max-h-[600px] overflow-hidden flex items-center justify-center">
        <img src={CoverImg} alt="Cover Image" className="w-full max-h-full object-contain" />
      </div>
    )}
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full flex flex-col gap-10 justify-center items-center ${isHomePage && "max-[400px]:justify-start max-[400px]:text-start max-[400px]:items-start"} max-sm:px-2`}>
        {isHomePage && (
          <h1 className=" text-primary-color font-satoshi text-bodyLarge max-[400px]:]:text-bodyLargeDefault max-[400px]:]:text-start max-[400px]:]:w-full ">
            ミャンマーへようこそ
          </h1>
        )}

        {isBreadCrumb && <BreadCrumb currentPage={currentPage} />}

        <h1 className=" font-notoSerifJp text-neutral-100 font-light  text-display1 max-[834px]:text-display3 max-sm:text-heading1 max-sm:w-full">
          {title}
        </h1>
        {isHomePage && (
          <>
            <p className="text-neutral-100 lg:max-w-[700px] max-sm:text-bodySmall font-satoshi text-bodyDefault">
              Discover the artistry of sushi at its finest. From fresh
              ingredients to time-honored techniques, every dish is crafted to
              delight your senses. Indulge in a journey of authentic flavors and
              modern twists, only at MYANSHI.
            </p>
            <div className=" flex mx-auto gap-4 max-[400px]:flex-col max-[400px]:w-full max-[400px]:text-bodyDefault ">
              <SolidBtn text="Book A Table" className={"max-[400px]:w-full max-[400px]:h-[54px]"} />
              {/* <OurMenu /> */}
              <OutLineBtn text="Our Menu" className={"max-[400px]:w-full mx-auto max-[400px]:text-bodySmall max-[400px]:h-[54px]"}/>
            </div>
            <div className="max-sm:w-full flex justify-center">
            <AnimatedButton/>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
