import React from "react";

const CategoryBtn = ({ category, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isActive
          ? "bg-primary-color text-white outline-none hover:border-primary-color"
          : "border-neutral-600 text-neutral-600 hover:border-neutral-600 hover:bg-neutral-600"
      }  border font-satoshi  uppercase  font-normal  px-5  py-3 text-heading5  hover:text-white transition-all duration-300 ease-in-out`}
    >
      {category.name}
    </button>
  );
};

export default CategoryBtn;
