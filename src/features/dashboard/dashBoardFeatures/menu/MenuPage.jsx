import React from "react";
import Header from "../../dashBoardComponents/Header";
import Table from "../../dashBoardComponents/Table";

const MenuPage = () => {
  return (
    <div className=" w-full ">
      <Header pageName="Menu Overview" />
      <Table
        columns={columns}
        menuItems={menuItems}
        checkBox={true}
        currentPage={"Menu"}
      />
    </div>
  );
};

export default MenuPage;

const columns = ["Menu", "Category", "Price (MMK)", "Created at", "Actions"]; // Updated columns

const menuItems = [
  {
    id: 1,
    name: "Chimmi Makis",
    category: "Sushi",
    price: "17,500",
    date: "17 Sep 2024",
  },
  {
    id: 2,
    name: "Migiri Sushi",
    category: "Sushi",
    price: "17,500",
    date: "17 Sep 2024",
  },
  {
    id: 3,
    name: "Togarashi Makis",
    category: "Sushi",
    price: "15,000",
    date: "17 Sep 2024",
  },
  {
    id: 4,
    name: "Salmon Roll",
    category: "Sushi",
    price: "25,000",
    date: "17 Sep 2024",
  },
  {
    id: 5,
    name: "Matcha Tea",
    category: "Sushi",
    price: "25,000",
    date: "17 Sep 2024",
  },
  {
    id: 6,
    name: "Macrons",
    category: "Drinks",
    price: "25,000",
    date: "17 Sep 2024",
  },
  {
    id: 7,
    name: "Salmon Roll",
    category: "Desserts",
    price: "25,000",
    date: "17 Sep 2024",
  },
  {
    id: 8,
    name: "Vegetarian Ramen",
    category: "Dishes",
    price: "25,000",
    date: "17 Sep 2024",
  },
];
