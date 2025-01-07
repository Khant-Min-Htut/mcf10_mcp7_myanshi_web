import React from "react";
import SolidBtn from "../../buttons/SolidBtn";
import Container from "../Container";
import Img1 from "../../assets/MyanShi/OurTitok/titokImg1.png";
import Img2 from "../../assets/MyanShi/OurTitok/titokImg2.png";
import Img3 from "../../assets/MyanShi/OurTitok/titokImg3.png";
import Img4 from "../../assets/MyanShi/OurTitok/titokImg4.png";
import Img5 from "../../assets/MyanShi/OurTitok/titokImg5.png";
import { img } from "framer-motion/m";
import JapaneseText from "../typography/JapaneseText";
import PrimaryHeader from "../typography/PrimaryHeader";

const TiktokSection = () => {
  return (
    <section className=" py-[180px] max-[843px]:py-[120px] border-y border-stroke-1-color max-[1200px]:px-2 ">
      <Container>
        <div className=" min-h-[882px] h-full w-full  flex flex-col justify-center items-center gap-10 ">
          <div className=" text-center flex flex-col gap-6 ">
            <JapaneseText>カスタマーレビュー</JapaneseText>
            <PrimaryHeader>Our Tiktok</PrimaryHeader>
          </div>

          <div className="grid grid-cols-2  gap-2 max-[400px]:grid-cols-1 ">
            <div className="col-span-1 max-[400px]:col-span-2 ">
              <img
                src={Img1}
                alt="Main Image"
                className="w-full object-cover"
              />
            </div>
            <div className=" grid grid-cols-2 gap-2 col-span-1 max-[400px]:col-span-2">
              {[Img2, Img3, Img4, Img5].map((img, index) => (
                <div
                  key={index}
                  className="relative w-full aspect-[1/1] overflow-hidden"
                >
                  <img
                    className="w-full h-full object-cover"
                    src={img}
                    alt={`Image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <SolidBtn text="SEE MORE" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TiktokSection;
