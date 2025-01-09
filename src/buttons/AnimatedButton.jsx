import React from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";

const AnimatedButton = ({className}) => {
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }
  return (
    <button className={`border-white border-[1px] w-[70px] h-[70px] max-[400px]:w-[50px] max-[400px]:h-[50px] rounded-full flex items-center justify-center ${className}`} onClick={handleClick}>
      <motion.div
        initial={{ y: -10, opacity: 1 }}
        animate={{
          y: [-10, 10, 10, 10, 10,10],
          opacity: [1, 1, 1, 1,1, 0],
          ease: "easeOut",
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
