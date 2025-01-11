import React from "react";

const CallNowBtn = ({ text, className }) => {
  return (
    <button
      className={`bg-white h-[54px] w-[149px] px-8 py-4 gap-[10px] transition duration-300 hover:bg-[rgba(184,26,0,1)] ${className}`}
    >
      <span className="text-[14px] leading-[21.6px] font-[700] text-white font-satoshi w-[85px] h-[22px]">
        {text}
      </span>
    </button>
  );
};

export default CallNowBtn;
