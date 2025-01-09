import React, { useState } from "react";
import Paragraph from "../../../components/typography/Paragraph";
import { HiOutlinePlus } from "react-icons/hi";
import { motion } from "framer-motion";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="space-y-4 px-4">
      {faqContents.map((item, index) => (
        <motion.div
          whileHover={{ x: 5 }}
          key={index}
          className="w-full py-6 border-b-2 border-stroke-1-color  last:border-none"
        >
          <div className="">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between text-left text-neutral-600 text-lg font-semibold items-start"
              aria-expanded={activeIndex === index}
              aria-controls={`faq-${index}`}
            >
              <div className="flex items-start gap-8 w-full">
                <h1 className=" font-notoSerifJp text-bodyLarge text-neutral-800">
                  0{index + 1}
                </h1>
                <div className=" w-full">
                  <div className=" w-2/3 max-[843px]:w-[90%] max-[600px]:w-full font-notoSerifJp text-bodyLarge text-neutral-800">
                    {item.question}
                  </div>
                  <div
                    id={`faq-${index}`}
                    className={`overflow-hidden transition-all duration-300 w-full ease-in-out ${
                      activeIndex === index ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    <div className=" w-2/3 max-[843px]:w-[90%] max-[600px]:w-full font-light">
                      <Paragraph>{item.answer}</Paragraph>
                    </div>
                  </div>
                </div>
              </div>
              <HiOutlinePlus
                className={`${
                  activeIndex === index ? "-rotate-45" : ""
                } min-h-[25px] min-w-[25px]  transition-transform duration-300 ease-in-out text-neutral-500 text-bodyExtraLarge`}
              />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Accordion;

const faqContents = [
  {
    question: "Who is this course for?",
    answer:
      "This course is designed for complete beginners who want to start learning Korean from scratch. It’s also suitable for anyone looking to strengthen their basics.",
  },
  {
    question: "Do I need any prior experience to take the course?",
    answer:
      "No prior experience is necessary. The course starts with the Korean alphabet (Hangul) and gradually introduces essential vocabulary and basic sentence structures.",
  },
  {
    question: "How long will it take to complete the course?",
    answer:
      "The duration depends on how much time you dedicate. On average, it can take 4-6 weeks to complete, but you can go at your own pace.",
  },
  {
    question: "Will I receive a certificate after completing the course?",
    answer:
      "Yes, upon successful completion of the course, you will receive a certificate of completion to showcase your achievement.",
  },
  {
    question: "What topics are covered in this course?",
    answer:
      "The course includes lessons on the Korean alphabet (Hangul), essential vocabulary, basic grammar, simple sentence structures, and everyday phrases.",
  },
];
