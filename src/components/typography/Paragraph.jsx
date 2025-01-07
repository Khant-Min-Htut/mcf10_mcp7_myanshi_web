import React from "react";

const Paragraph = ({ children }) => {
  return (
    <p className="max-[400px]:text-bodySmall max-[843px]:text-bodyDefault font-satoshi text-neutral-600">
      {children}
    </p>
  );
};

export default Paragraph;
