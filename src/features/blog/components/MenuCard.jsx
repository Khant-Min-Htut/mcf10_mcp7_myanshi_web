import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const MenuCard = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <div
          className="flex flex-col md:flex-row-reverse gap-7 mb-12 last:mb-0"
          key={item.title}
        >
          <div className="imgLeft flex-1">
            <img
              src={item.image}
              alt="menuImg"
              className="h-64 md:h-[300px] lg:h-[350px] w-full object-cover"
            />
          </div>
          <div className="menuDetailRight flex-1 md:flex md:justify-center md:items-center">
            <div className="flex flex-col gap-2">
              <div className="flex gap-4 font-satoshi text-bodySmall lg:text-bodyLarge text-neutral-600">
                <span>{item.chefName}</span>
                <span>___</span>
                <span>{item.Date}</span>
              </div>
              <h1 className="font-notoSerifJp text-heading2 lg:text-heading1">
                {item.title}
              </h1>
              <p className="text-bodySmall text-neutral-600 mb-5 lg:text-bodyLarge">
                {item.desc}
              </p>
              <Link to={`/blog/${item.id}`}>
                <button className="flex justify-between items-center font-satoshi lg:text-bodyLarge">
                  READ MORE
                  <MdKeyboardArrowRight size={24} className="block lg:hidden" />
                  <MdKeyboardArrowRight size={28} className="hidden lg:block" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
      <div className="w-full">
        <Pagination />
      </div>
    </>
  );
};

export default MenuCard;