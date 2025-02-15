import React from "react";
import { useState } from "react";
import Pagination from "./Pagination";
import { CalendarX, Clock } from "@phosphor-icons/react";
import OutlineButton from "./Ui/OutlineButton";
import SolidButton from "./Ui/SolidButton";
import TableActions from "./TableActions";

const Table = () => {
  const [search, setSearch] = useState("");

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
  return (
    <div className=" bg-[#FFFFFF]  font-satoshi max-[990px]:px-[10px] text-bodySmall mb-6">
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="  Search menu..."
          className="w-1/3 py-2 h-10 px-4 border rounded-lg bg-no-repeat bg-left pl-10"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="112" cy="112" r="80" fill="none" stroke="gray" stroke-width="16"/><line x1="168.57" y1="168.57" x2="224" y2="224" fill="none" stroke="gray" stroke-width="16"/></svg>')`,
            backgroundSize: "20px",
            backgroundPosition: "10px center",
          }}
        />
        <div className=" flex gap-6 max-[550px]:gap-2 max-[550px]:ms-2">
          <OutlineButton className=" h-10 min-w-[165px]" color="[#E4E4E7]">
            Manage Category
          </OutlineButton>
          <SolidButton
            className=" h-10 min-w-36 shadow-none"
            color="#CE3319"
            hoverColor="#a82912"
          >
            + Add Menu
          </SolidButton>
        </div>
      </div>
      <div className="overflow-hidden font-medium border-collapse rounded-lg border border-gray-300 mb-12">
        <table className="w-full border-separate border-spacing-0 font-satoshi ">
          <thead className=" bg-[#FFFFFF]">
            <tr className="bg-[#FFFFFF] text-[#71717A]">
              <td className="py-2 px-4 max-[1023px]:px-2 text-left rounded-tl-lg">
                <input type="checkbox" />
              </td>
              <td className="py-2 px-4max-[1023px]:px-1  text-left">Menu</td>
              <td className="py-2 px-4 max-[1023px]:px-1 text-left">
                Category
              </td>
              <td className="py-2 px-4 max-[1023px]:px-1 text-left">
                Price (MMK)
              </td>
              <td className="py-2 px-4 max-[1023px]:px-1 text-left">
                Created at
              </td>
              <td className="py-2 px-4 max-[1023px]:px-1 text-left rounded-tr-lg">
                Actions
              </td>
            </tr>
          </thead>
          <tbody className=" text-[#09090B] font-normal">
            {menuItems
              .filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((item, index, array) => (
                <tr
                  key={item.id}
                  className={`border-t ${
                    index === array.length - 1 ? "rounded-b-lg" : ""
                  }`}
                >
                  <td className=" h-16 px-4 max-[1023px]:px-2  border-collapse border-t ">
                    <input type="checkbox" />
                  </td>
                  <td className=" h-16 px-4 max-[1023px]:px-1  border-collapse border-t">
                    {item.name}
                  </td>
                  <td className=" h-16 px-4 max-[1023px]:px-1  border-collapse border-t ">
                    {item.category}
                  </td>
                  <td className=" h-16 px-4 max-[1023px]:px-1  border-collapse border-t ">
                    {item.price}
                  </td>
                  <td className=" h-16 px-4  max-[1023px]:px-0    border-collapse border-t flex justify-start text-start flex-col ">
                    <span className="flex items-center gap-1 min-w-[120px]">
                      <CalendarX size={16} color="#09090B" />
                      <span>{item.date}</span>
                    </span>
                    <span className="flex items-center gap-1 bg-[#F5F5F5] w-fit rounded py-1 px-2 ">
                      <Clock size={9} color="#09090B80" />
                      <span className=" text-[10px]">4 : 43 PM</span>
                    </span>
                  </td>
                  <TableActions
                    onDelete={() => console.log(`Deleting item: ${item.name}`)}
                    onEdit={() => console.log(`Editing item: ${item.name}`)}
                  />
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Pagination />
    </div>
  );
};

export default Table;
