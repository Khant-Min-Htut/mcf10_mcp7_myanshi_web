import React from "react";
import Header from "../../dashBoardComponents/Header";
import Table from "../../dashBoardComponents/Table";

const PromotionPage = () => {
  return (
    <div className=" w-full ">
      <Header pageName="Promotion Overview" />
      <Table columns={columns} menuItems={menuItems} checkBox={true} currentPage={"Promotion"} />
    </div>
  );
};

export default PromotionPage;

const columns = [
  "Category",
  "Discount (%)",
  "Discount Price",
  "Original Price",
  "Actions",
]; // Dynamically define column names

const menuItems = [
  {
    id: 1,
    name: "Chimmi Makis",
    category: "Sushi",
    price: "17,500",
    discountPercentage: 10, // Example discount
    discountPrice: "15,750", // Example discounted price
    originalPrice: "17,500", // Original price
    date: "17 Sep 2024",
  },
  {
    id: 2,
    name: "Migiri Sushi",
    category: "Sushi",
    price: "17,500",
    discountPercentage: 12,
    discountPrice: "15,400",
    originalPrice: "17,500",
    date: "17 Sep 2024",
  },
  {
    id: 3,
    name: "Togarashi Makis",
    category: "Sushi",
    price: "15,000",
    discountPercentage: 15,
    discountPrice: "12,750",
    originalPrice: "15,000",
    date: "17 Sep 2024",
  },
  {
    id: 4,
    name: "Salmon Roll",
    category: "Sushi",
    price: "25,000",
    discountPercentage: 8,
    discountPrice: "23,000",
    originalPrice: "25,000",
    date: "17 Sep 2024",
  },
  {
    id: 5,
    name: "Matcha Tea",
    category: "Sushi",
    price: "25,000",
    discountPercentage: 5,
    discountPrice: "23,750",
    originalPrice: "25,000",
    date: "17 Sep 2024",
  },
  {
    id: 6,
    name: "Macrons",
    category: "Drinks",
    price: "25,000",
    discountPercentage: 20,
    discountPrice: "20,000",
    originalPrice: "25,000",
    date: "17 Sep 2024",
  },
  {
    id: 7,
    name: "Salmon Roll",
    category: "Desserts",
    price: "25,000",
    discountPercentage: 10,
    discountPrice: "22,500",
    originalPrice: "25,000",
    date: "17 Sep 2024",
  },
  {
    id: 8,
    name: "Vegetarian Ramen",
    category: "Dishes",
    price: "25,000",
    discountPercentage: 15,
    discountPrice: "21,250",
    originalPrice: "25,000",
    date: "17 Sep 2024",
  },
];
