import React from "react";

const OutLineBtn = ({text,className}) => {
  return (
    <button className={` w-[174px] h-[72px] border border-neutral-100 text-neutral-100  hover:bg-white hover:text-black transition duration-300 flex items-center justify-center ${className}`}>
      <span className="text-[18px] text-center leading-[21.6px] font-[400]  font-satoshi">
        {text}
      </span>
    </button>
  );
};

export default OutLineBtn;
