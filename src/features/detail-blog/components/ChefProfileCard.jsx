import React from "react";
import profile from "../../../assets/MyanShi/AboutUs/sophieMoore.png";
import FacebookBtn from "../../../buttons/FacebookBtn";
import TiktokBtn from "../../../buttons/TiktokBtn";
import YoutubeBtn from "../../../buttons/YoutubeBtn";

const ChefProfileCard = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row md:p-6 md:gap-7 bg-neutral-100 border border-stroke-2-color">
      <div className="w-full h-[300px] md:w-64 md:h-[250px] overflow-hidden">
        <img
          src={profile}
          alt="profile"
          className="object-cover w-full h-full object-top"
        />
      </div>
      <div className="mt-5 flex-1">
        <h3 className="text-cardTitle text-primary-color">Author</h3>
        <p className="text-heading2 font-notoSerifJp">Sophie Moore</p>
        <span className="text-bodySmall font-notoSerifJp text-neutral-500">
          Co Founder & Chef
        </span>
        <p className="mt-4">
          Sophie Moore, Co-Founder and Chef, is the heart of our culinary
          vision. With passion and creativity, he blends tradition and
          innovation to deliver unforgettable flavors.
        </p>
        <div className="flex gap-3 items-center justify-center mt-5 md:justify-start">
          <FacebookBtn />
          <TiktokBtn />
          <YoutubeBtn />
        </div>
      </div>
    </div>
  );
};

export default ChefProfileCard;
