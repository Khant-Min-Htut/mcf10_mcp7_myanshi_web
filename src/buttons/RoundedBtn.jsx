import React from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const RoundedBtn = ({
  rightArrow,
  leftArrow,
  outline,
  onClick,
  color = "primary-color",
}) => {
  return (
    <div>
      <button
        className={` rounded-full size-[60px] max-[400px]:size-[48px] flex items-center justify-center ${
          outline ? `border border-neutral-600 text-neutral-600 ` : ` bg-primary-color hover:bg-[rgba(184,26,0,1)] text-neutral-100 `
        }`}
        onClick={onClick}
      >
        {rightArrow && (
          <GoChevronRight className={` size-8 `} />
        )}
        {leftArrow && (
          <GoChevronLeft className={` size-8 `} />
        )}
      </button>
    </div>
  );
};

export default RoundedBtn;
