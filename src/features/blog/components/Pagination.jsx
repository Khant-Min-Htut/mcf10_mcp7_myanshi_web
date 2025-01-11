import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Pagination = () => {
  return (
    <section className="w-full">
      <nav aria-label="Page navigation example" className="w-full">
        <ul className="flex w-full md:justify-center">
          <li className="flex-none">
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-2 h-10 leading-tight text-neutral-500 bg-stroke-1-color hover:bg-stroke-2-color hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <MdKeyboardArrowLeft size={24} /> Prev
            </a>
          </li>

          <div className="flex-grow flex justify-center">
            <li className="flex-grow md:flex-none">
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white hover:bg-stroke-2-color hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li className="flex-grow md:flex-none">
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-primary-color hover:bg-stroke-2-color hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li className="flex-grow md:flex-none">
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white hover:bg-stroke-2-color hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                ...
              </a>
            </li>
            <li className="flex-grow md:flex-none">
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white hover:bg-stroke-2-color hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                22
              </a>
            </li>
          </div>

          <li className="flex-none">
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-2 h-10 leading-tight text-neutral-500 bg-stroke-1-color hover:bg-stroke-2-color hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next <MdKeyboardArrowRight size={24} />
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Pagination;
