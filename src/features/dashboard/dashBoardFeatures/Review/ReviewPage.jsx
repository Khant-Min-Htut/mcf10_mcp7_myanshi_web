import React from 'react'
import Header from '../../dashBoardComponents/Header'
import Table from '../../dashBoardComponents/Table'

const ReviewPage = () => {
  return (
    <div className=" w-full ">
      <Header pageName="Review Overview" />
      <Table columns={columns} menuItems={menuItems} checkBox={true} currentPage={"Review"}/>
    </div>
  )
}

export default ReviewPage


const columns = ["Customer Name", "Title", "Created at", "Actions"]; // Updated columns

const menuItems = [
  {
    id: 1,
    title: "Mastering Sushi Rolls",
    customerName: "John Doe", // Real customer name
    date: "17 Sep 2024",
  },
  {
    id: 2,
    title: "The Art of Nigiri Sushi",
    customerName: "Alice Smith",
    date: "17 Sep 2024",
  },
  {
    id: 3,
    title: "Perfecting Togarashi Makis",
    customerName: "Michael Brown",
    date: "17 Sep 2024",
  },
  {
    id: 4,
    title: "Salmon Rolls: A Guide",
    customerName: "Emily Johnson",
    date: "17 Sep 2024",
  },
  {
    id: 5,
    title: "Matcha Tea and Desserts",
    customerName: "David Wilson",
    date: "17 Sep 2024",
  },
  {
    id: 6,
    title: "Macarons: French Delight",
    customerName: "Sophia Martinez",
    date: "17 Sep 2024",
  },
  {
    id: 7,
    title: "The Sweetness of Salmon Rolls",
    customerName: "Daniel Lee",
    date: "17 Sep 2024",
  },
  {
    id: 8,
    title: "Vegetarian Ramen Recipes",
    customerName: "Olivia Taylor",
    date: "17 Sep 2024",
  },
];


