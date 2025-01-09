import React from "react";

const Cart = ({ image, title, originalPrice, promotionPrice, promotion }) => {
  return (
    <div
      className="max-w-[282px] max-h-[466px] mb-10 relative"
      onClick={(e) => e.preventDefault()}
    >
      {promotion && (
        <div className="absolute z-50 top-0 right-0 bg-primary-color text-white text-heading4 font-satoshi py-2 px-5 ">
          {promotion}%
        </div>
      )}
      <a href="">
        <div className=" overflow-hidden">
          <img
            className="h-4/5 min-w-[282px] min-h-[373px]  object-cover hover:scale-110 transition-transform duration-200 ease-in-out"
            style={{ transformOrigin: "center" }}
            src={image}
            alt={title}
          />
        </div>
      </a>

      <div className="py-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-800 hover:text-primary-color transition-all duration-100 ease-in-out">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 space-x-5">
          <span className="text-primary-color text-bodyLarge font-satoshi font-bold">
            {Number(promotionPrice).toLocaleString()} MMK
          </span>
          {originalPrice !== null && (
            <span className="line-through text-neutral-600">
              {Number(originalPrice).toLocaleString()} MMK
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Cart;
