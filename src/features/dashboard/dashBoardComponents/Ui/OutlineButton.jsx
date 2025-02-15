import React from "react";

const OutlineButton = ({
  children,
  color = "blue",
  size = "md",
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
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
            blue: "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
            red: "border-red-500 text-red-500 hover:bg-red-500 hover:text-white",
            green:
              "border-green-500 text-green-500 hover:bg-green-500 hover:text-white",
            gray: "border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white",
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
