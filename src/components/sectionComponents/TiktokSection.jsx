import React from "react";
import SolidBtn from "../../buttons/SolidBtn";
import Container from "../Container";
import Img1 from "../../assets/MyanShi/OurTitok/titokImg1.png";
import Img2 from "../../assets/MyanShi/OurTitok/titokImg2.png";
import Img3 from "../../assets/MyanShi/OurTitok/titokImg3.png";
import Img4 from "../../assets/MyanShi/OurTitok/titokImg4.png";
import Img5 from "../../assets/MyanShi/OurTitok/titokImg5.png";
import JapaneseText from "../typography/JapaneseText";
import PrimaryHeader from "../typography/PrimaryHeader";
import tiktokLogoFill from "../../assets/MyanShi/OurTitok/tiktok-logo-fill.svg";

const TiktokSection = () => {
  return (
    <section className=" py-[180px] max-[843px]:py-[120px] border-y border-stroke-1-color max-[1200px]:px-2 ">
      <Container>
        <div className=" h-full w-full  flex flex-col justify-center items-center gap-10">
          <div className=" text-center flex flex-col gap-6 ">
            <JapaneseText>カスタマーレビュー</JapaneseText>
            <PrimaryHeader>Our Tiktok</PrimaryHeader>
          </div>

          <div className="grid grid-cols-2  gap-2 max-[650px]:grid-cols-1 ">
            <div className="col-span-1 max-[500px]:col-span-2 relative group ">
              <img
                src={Img1}
                alt="Main Image"
                className="w-full object-cover hover:cursor-pointer"
              />
              <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
              <img src={tiktokLogoFill} alt="" className="z-50 text-6xl text-white transform -rotate-12 group-hover:rotate-0 transition-all duration-500 opacity-0 group-hover:opacity-100  size-14"/>
              </div>
              <div
                // href="#"
                className=" absolute w-full h-full top-0 left-0 opacity-0 z-10 bg-neutral-800 transition-opacity duration-300 group-hover:opacity-50 "
              ></div>
            </div>
            <div className=" grid grid-cols-2 gap-2 col-span-1 max-[500px]:col-span-2">
              {[Img2, Img3, Img4, Img5].map((img, index) => (
                <div
                  key={index}
                  className="relative w-full aspect-[1/1] overflow-hidden group"
                >
                  <img
                    className="w-full h-full object-cover"
                    src={img}
                    alt={`Image ${index + 1}`}
                  />
                  <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                 
                    <img src={tiktokLogoFill} alt="" className="z-50 text-6xl text-white transform -rotate-12 group-hover:rotate-0 transition-all duration-500 opacity-0 group-hover:opacity-100  size-14"/>
                  </div>
                  <div
                    // href="#"
                    className=" absolute w-full h-full top-0 left-0 opacity-0 z-10 bg-neutral-800 transition-opacity duration-300 group-hover:opacity-50 "
                  ></div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center bg-fuchsia-300">
            <SolidBtn text="SEE MORE" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TiktokSection;
