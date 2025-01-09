import React, { useState } from "react";
import { Categories } from "../data/menu.js";
import CategoryBtn from "./CategoryBtn.jsx";
import CartSection from "./CartSection.jsx";
import ClientFeedbackSection from "../../../components/sectionComponents/ClientFeedbackSection.jsx";

const CategorySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
  };
  return (
    <section>
      <main className=" py-[180px] max-[843px]:py-[120px] border-y border-stroke-1-color">
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 w-full md:w-fit max-md:px-12 mx-auto mb-16">
          {Categories.map((category) => (
            <CategoryBtn
              key={category.id}
              category={category}
              onClick={() => handleCategorySelect(category.name)}
              isActive={category.name === selectedCategory}
            ></CategoryBtn>
          ))}
        </ul>
        <CartSection selectedCategory={selectedCategory} />
       
      </main>
    </section>
  );
};

export default CategorySection;
