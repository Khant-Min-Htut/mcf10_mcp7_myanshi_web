import React from "react";
import img from "../../../assets/MyanShi/Home/adsImg.png";
import SolidBtn from "../../../buttons/SolidBtn";
import OutLineBtn from "../../../buttons/OutLineBtn";
import bgImg from "../../../assets/MyanShi/Home/adsAbsoluteImg.png";
import { useNavigate } from "react-router-dom";

const FOLLOW_US_Section = () => {
  const nav = useNavigate();
  return (
    <div className="w-full flex justify-center max-[400px]:max-h-[500px] max-[843px]:min-h-[463px] max-h-[800px] max-[834px]:max-h-[463.33px] h-screen relative bg-[#090709]">
      <img
        src={bgImg}
        alt=""
        className=" flex left-0 top-0 absolute h-full z-10 max-[843px]:hidden"
      />
      <div className=" w-full h-full relative ">
        <img
          src={img}
          alt=""
          className=" w-full h-full  absolute  right-0 top-0 max-h-[666px]  max-w-[1014px] "
        />
      </div>
      <div className=" w-full h-full absolute  justify-center items-end flex z-20 max-[843px]:items-center  max-[843px]:justify-center max-[1200px]:px-2">
        <div className="flex items-center justify-between gap-[20px] z-20 max-w-[1200px] mx-auto w-full  mb-28 max-[843px]:mb-0 max-[843px]:flex-col max-[843px]:gap-10 max-[843px]:items-center ">
          <h1 className="text-white font-notoSerifJp text-display2 max-[843px]:text-display4 max-[400px]:text-heading2 max-[843px]:text-center ">
            Taste the most delicious sushi in Myanmar
          </h1>
          <div className=" flex flex-col grow-0 gap-4 max-[843px]:flex-row max-[843px]:gap-4 max-[400px]:flex-col w-full items-center justify-center min-[843px]:w-2/4 ">
            <SolidBtn text={"FOLLOW US"} className={"max-[400px]:w-full"} />
            <OutLineBtn
              onClick={() => nav("/menu")}
              text={"OUR MENU"}
              className={"max-[400px]:w-full"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FOLLOW_US_Section;
