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

      <div className="w-full min-w-[282px] max-h-[373px] relative overflow-hidden">
        <img
          className=" min-w-[282px] h-[373px] bg-red-200 object-cover relative transition-all duration-300 hover:scale-110"
          src={image}
        />
      </div>

      <div className="py-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-800 hover:text-primary-color transition-all duration-100 ease-in-out">
          {title}
        </h5>
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
