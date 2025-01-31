import React from "react";

const PrimaryHeader = ({ children }) => {
  return (
    <h1 className="max-[400px]:text-heading2 max-w-[576px] max-lg:w-full   max-[843px]:text-display4 text-display2 font-notoSerifJp text-neutral-800">
      {children}
    </h1>
  );
};

export default PrimaryHeader;
