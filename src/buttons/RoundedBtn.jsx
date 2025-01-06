import React from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const RoundedBtn = ({ rightArrow, leftArrow, outline,onClick }) => {
  return (
    <div>
      <button
        className={` text-white px-3 py-3 rounded-full ${
          outline ? "border border-primary-color" : "bg-primary-color"
        }`}
        onClick={onClick}
      >
        {rightArrow && (
          <GoChevronRight
            className={` ${outline ? "text-primary-color" : ""} `}
          />
        )}
        {leftArrow && (
          <GoChevronLeft
            className={` ${outline ? "text-primary-color" : ""}`}
          />
        )}
      </button>
    </div>
  );
};

export default RoundedBtn;
