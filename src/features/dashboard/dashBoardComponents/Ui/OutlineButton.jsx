import React from "react";

const OutlineButton = ({
  children,
  color = "primary-color",
  size = "md",
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`
        border rounded-lg font-medium transition-all duration-200 font-satoshi text-[14px]
        ${
          {
            sm: "px-3 py-1 text-sm",
            md: "px-4 py-2 text-base",
            lg: "px-5 py-3 text-lg",
          }[size]
        } 
        ${
          {
            "primary-color":
              "border-[#E4E4E7] text-[#18181B] hover:bg-[#E5E5E5] hover:text-[#18181B]",
            "secondary-color":
              "border-secondary-color text-secondary-color hover:bg-secondary-color hover:text-white",
            "tertiary-color":
              "border-tertiary-color text-tertiary-color hover:bg-tertiary-color hover:text-white",
            "quaternary-color":
              "border-quaternary-color text-quaternary-color hover:bg-quaternary-color hover:text-white",
          }[color]
        } 
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
