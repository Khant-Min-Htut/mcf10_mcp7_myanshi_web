import React from "react";

const Paragraph = ({ children, className }) => {
  return (
    <p className={`max-[400px]:text-bodySmall max-[843px]:text-bodyDefault font-satoshi text-neutral-600 ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;
