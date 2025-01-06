import React from "react";

const MenuCard = ({ image, title, originalPrice, promotionPrice }) => {
  return (
    <div className="max-w-[282px] max-h-[466px]">
      <a href="#">
        <img className=" h-4/5 min-w-[282px] object-cover" src={image} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-800">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <span className="text-primary-color text-bodyLarge font-satoshi font-bold">{originalPrice} MMKs</span> <span className="line-through text-neutral-600">{promotionPrice} MMKs</span>
        </p>
      </div>
    </div>
  );
};

export default MenuCard;
