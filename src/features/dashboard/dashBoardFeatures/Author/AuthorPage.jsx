import React from 'react'
import Header from '../../dashBoardComponents/Header'
import Table from '../../dashBoardComponents/Table'

const AuthorPage = () => {
  return (
    <div className=" w-full ">
      <Header pageName="Author Overview" />
      <Table columns={columns} menuItems={menuItems} checkBox={true} currentPage={"Author"}/>
    </div>
  )
}

export default AuthorPage


const columns = ["Author", "Position", "Created at", "Actions"]; // Updated columns

const menuItems = [
  {
    id: 1,
    name: "Mastering Sushi Rolls",
    author: "Chef Yamamoto",
    position: "Head Chef", // Added position
    date: "17 Sep 2024",
  },
  {
    id: 2,
    name: "The Art of Nigiri Sushi",
    author: "Chef Suzuki",
    position: "Sous Chef",
    date: "17 Sep 2024",
  },
  {
    id: 3,
    name: "Perfecting Togarashi Makis",
    author: "Chef Tanaka",
    position: "Senior Sushi Chef",
    date: "17 Sep 2024",
  },
  {
    id: 4,
    name: "Salmon Rolls: A Guide",
    author: "Chef Nakamura",
    position: "Pastry Chef",
    date: "17 Sep 2024",
  },
  {
    id: 5,
    name: "Matcha Tea and Desserts",
    author: "Chef Fujimoto",
    position: "Tea Specialist",
    date: "17 Sep 2024",
  },
  {
    id: 6,
    name: "Macarons: French Delight",
    author: "Chef Pierre",
    position: "Dessert Specialist",
    date: "17 Sep 2024",
  },
  {
    id: 7,
    name: "The Sweetness of Salmon Rolls",
    author: "Chef Aoki",
    position: "Sushi Consultant",
    date: "17 Sep 2024",
  },
  {
    id: 8,
    name: "Vegetarian Ramen Recipes",
    author: "Chef Miyazaki",
    position: "Ramen Expert",
    date: "17 Sep 2024",
  },
];
