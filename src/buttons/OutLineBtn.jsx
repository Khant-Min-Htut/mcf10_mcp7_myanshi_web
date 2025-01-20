import React from "react";

const OutLineBtn = ({ text, className, dark,onClick }) => {
  return (
    <button
    onClick={onClick}
      className={` w-[174px] h-[72px] max-[400px]:h-[54px] border border-neutral-100  ${
        dark
          ? "hover:bg-neutral-700 hover:text-neutral-100"
          : "hover:bg-neutral-100 hover:text-black text-neutral-100"
      }  transition duration-300 flex items-center justify-center ${className}`}
    >
      <span className="text-[18px] text-center leading-[21.6px] font-[400]  font-satoshi">
        {text}
      </span>
    </button>
  );
};

export default OutLineBtn;
