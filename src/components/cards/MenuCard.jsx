import React from "react";
import SolidBtn from "../../buttons/SolidBtn";

const MenuCard = ({
  image,
  title,
  originalPrice,
  promotionPrice,
  promotionPercent,
}) => {
  return (
    <div className="max-w-[282px] max-h-[466px] relative flex flex-col justify-between">
      {promotionPercent && (
        <p className="text-[16px] leading-[21.6px] font-[700] text-white font-satoshi  uppercase bg-primary-color absolute top-0 right-0 px-2 text-center z-10 w-full h-full max-h-[50px] max-w-[72px] flex items-center justify-center ">
          {promotionPercent}
        </p>
      )}

      <div className="w-full min-w-[282px] max-h-[373px] relative overflow-hidden">
        <img
          className=" min-w-[282px] h-[373px] bg-red-200 object-cover relative transition-all duration-300 hover:scale-110"
          src={image}
        />
      </div>

      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-800">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <span className="text-primary-color text-bodyLarge font-satoshi font-bold">
            {originalPrice} MMKs
          </span>{" "}
          <span className="line-through text-neutral-600">
            {promotionPrice} MMKs
          </span>
        </p>
      </div>
    </div>
  );
};

export default MenuCard;
