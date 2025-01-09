import React, { useEffect, useState } from "react";
import { Carts, Categories } from "../data/menu";
import Cart from "./Cart";

const CartSection = ({ selectedCategory }) => {
  const [showData, setShowData] = useState(Carts);

  useEffect(() => {
    if (selectedCategory === "All" || !selectedCategory) {
      setShowData(Carts);
    } else if (selectedCategory === "Promotions") {
      const filterData = Carts.filter((item) => item.promotions !== null);
      setShowData(filterData);
    } else {
      const filterData = Carts.filter(
        (item) => item.category === selectedCategory
      );
      setShowData(filterData);
    }
  }, [selectedCategory]);

  return (
    <div className="flex items-center justify-center ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-10  ">
        {showData.map((item) => (
          <Cart
            key={item.id}
            image={item.image}
            title={item.title}
            promotionPrice={item.promotionPrice}
            originalPrice={item.originalPrice}
            promotion={item.promotions}
          />
        ))}
      </div>
    </div>
  );
};

export default CartSection;
