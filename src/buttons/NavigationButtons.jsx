import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NavigationButtons = () => {
  return (
    <div className="flex gap-2">
      <button
        className="w-10 h-10 rounded-full bg-neutral-500 hover:bg-neutral-600 transition-colors flex items-center justify-center"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 transition-colors flex items-center justify-center"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default NavigationButtons;
