import React from "react";

const SolidButton = ({
  children,
  color = "#3498db", // Default blue
  hoverColor = "#2980b9", // Default darker blue
  size = "md",
  onClick,
  className = "",
}) => {
  const isHex = color.startsWith("#");
  const isHoverHex = hoverColor.startsWith("#");

  // Predefined Tailwind color classes
  const tailwindColors = {
    blue: "bg-blue-500 hover:bg-blue-600",
    red: "bg-red-500 hover:bg-red-600",
    green: "bg-green-500 hover:bg-green-600",
    gray: "bg-gray-500 hover:bg-gray-600",
  };

  return (
    <button
      onClick={onClick}
      className={`
        rounded-lg font-medium transition-all duration-200 text-[#FAFAFA] shadow-md
        ${{
          sm: "px-3 py-1 text-sm",
          md: "px-4 py-2 text-base",
          lg: "px-5 py-3 text-lg",
        }[size]}
        ${isHex ? "" : tailwindColors[color]} 
        ${className}
      `}
      style={
        isHex
          ? {
              backgroundColor: color,
              transition: "background-color 0.2s ease-in-out",
            }
          : {}
      }
      onMouseEnter={(e) => {
        if (isHoverHex) e.target.style.backgroundColor = hoverColor;
      }}
      onMouseLeave={(e) => {
        if (isHoverHex) e.target.style.backgroundColor = color;
      }}
    >
      {children}
    </button>
  );
};

export default SolidButton;
