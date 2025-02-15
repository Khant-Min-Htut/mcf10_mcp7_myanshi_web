import React from "react";
import emptyImg from "../../../assets/MyanShi/Dashboard/EmptyState.svg";
import SolidButton from "./Ui/SolidButton";
import { Plus } from "@phosphor-icons/react";

const EmptyState = ({ name }) => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center h-[80vh]">
      <img src={emptyImg} alt="Empty" className="w-[50%] max-w-[413px] mb-6" />
      <p className=" font-satoshi text-bodySmall text-[#525252]">
        No {name} yet
      </p>
      <SolidButton
        className=" h-10 min-w-36 shadow-none"
        color="#CE3319"
        hoverColor="#a82912"
      >
        <p className=" flex gap-2 items-center justify-center">
          <Plus weight="bold" size={20} className=" text-sm  " />
          <span className="capitalize font-satoshi">Add {name}</span>
        </p>
      </SolidButton>
    </div>
  );
};

export default EmptyState;
