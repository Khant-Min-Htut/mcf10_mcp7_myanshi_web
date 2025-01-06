import React from "react";

const BookATableBtn = ({ text }) => {
  return (
    <button className="bg-primary-color h-[72px] w-[208px] px-10 py-6 gap-[10px] transition duration-300 hover:bg-[rgba(184,26,0,1)]">
      <span className="text-[16px] leading-[21.6px] font-[700] text-white font-satoshi w-[85px] h-[22px]">
        {text}
      </span>
    </button>
  );
};

export default BookATableBtn;
