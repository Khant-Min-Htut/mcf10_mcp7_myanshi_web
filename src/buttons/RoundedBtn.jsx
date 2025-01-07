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
        className={` text-white px-3 py-3 rounded-full ${
          outline ? "border border-" + color : "bg-" + color
        }`}
        onClick={onClick}
      >
        {rightArrow && (
          <GoChevronRight className={` ${outline ? "text-" + color : ""} `} />
        )}
        {leftArrow && (
          <GoChevronLeft className={` ${outline ? "text-" + color : ""}`} />
        )}
      </button>
    </div>
  );
};

export default RoundedBtn;
