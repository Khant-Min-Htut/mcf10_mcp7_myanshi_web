import React from "react";
import { motion } from "framer-motion";
import { GoChevronDown } from "react-icons/go";

const AnimatedButton = ({ className, sectionName }) => {
  const handleClick = () => {
    const section = document.getElementById(sectionName);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`border-white border-[1px] w-[70px] h-[70px] max-[400px]:w-[50px] max-[400px]:h-[50px] rounded-full flex items-center justify-center ${className}`}
    >
      <motion.div
        initial={{ y: -10, opacity: 1 }}
        animate={{
          y: [-10, 10, 10, 10, 10, 10], 
          opacity: [1, 1, 1, 1, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity, 
          ease: "easeOut", 
        }}
      >
        <GoChevronDown className="text-neutral-100 text-[40px] max-[400px]:text-[25px]" />
      </motion.div>
    </button>
  );
};

export default AnimatedButton;
