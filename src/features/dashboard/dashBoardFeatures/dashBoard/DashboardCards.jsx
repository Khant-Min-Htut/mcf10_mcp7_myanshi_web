import React from "react";
import { FaUtensils, FaTag, FaStar, FaCog, FaPencilAlt } from "react-icons/fa";
import useStore from "../../../../store";
import { ForkKnife, PencilLine, SealPercent, Star, Tag } from "@phosphor-icons/react";

const DashboardCards = () => {

  const { isDesktopSize } = useStore();
  return (
    <div className="w-full overflow-visible font-satoshi">
      {/* desktopSize */}
      {isDesktopSize && (
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1 max-w-[328px] bg-[#CE3319] text-white rounded-[8px] p-[24px] flex items-center gap-6">
            {/* <FaUtensils size={32} /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="46"
              fill="#FFFFFF"
              viewBox="0 0 256 256"
            >
              <path d="M72,88V40a8,8,0,0,1,16,0V88a8,8,0,0,1-16,0ZM216,40V224a8,8,0,0,1-16,0V176H152a8,8,0,0,1-8-8,268.75,268.75,0,0,1,7.22-56.88c9.78-40.49,28.32-67.63,53.63-78.47A8,8,0,0,1,216,40ZM200,53.9c-32.17,24.57-38.47,84.42-39.7,106.1H200ZM119.89,38.69a8,8,0,1,0-15.78,2.63L112,88.63a32,32,0,0,1-64,0l7.88-47.31a8,8,0,1,0-15.78-2.63l-8,48A8.17,8.17,0,0,0,32,88a48.07,48.07,0,0,0,40,47.32V224a8,8,0,0,0,16,0V135.32A48.07,48.07,0,0,0,128,88a8.17,8.17,0,0,0-.11-1.31Z"></path>
            </svg>
            <div className=" flex flex-col gap-2">
              <h3 className=" text-heading1 font-bold">16</h3>
              <p className=" font-satoshi  text-cardTitle">Menu Items</p>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-[24px]">
            {stats.map(({ id, icon, count, label }) => (
              <div
                key={id}
                className="max-w-[328px] h-[120px] bg-[#CE3319] text-white rounded-[8px] p-[24px] flex items-center gap-6 max-[1030px]:gap-[18px] "
              >
                <p className=" min-w-[44px] min-h-[44px] ">{icon}</p>
                <div className=" flex flex-col gap-2">
                  <h3 className="text-heading1 font-bold">{count}</h3>
                  <p className="text-cardTitle">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* mobileSize */}
      <div className="block xs:hidden">
        <div className=" flex flex-col gap-12 max-w-[10000px] w-full overflow-auto max-ms-0 max-items-center hide-scrollbar">
          <div className="flex w-full relative">
            <div className="flex  items-center justify-center flex-col  gap-4 transition-transform duration-700 w-full">
              {stats.map(({ id, icon, count, label }) => (
                <div
                  key={id}
                  className="  justify-between w-[328px] max-w-[328px] h-[120px] bg-[#CE3319] text-white rounded-[8px] p-[24px] flex items-center gap-[10px] shrink-0"
                >
                  <div  className=" flex flex-col gap-2">
                    <h3 className=" text-heading2 font-bold">{count}</h3>
                    <p className=" text-bodySmall">{label}</p>
                  </div>
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* tabletSize */}
      <div className=" block max-xs:hidden">
        {!isDesktopSize && (
          <div className="flex flex-col gap-12 w-full overflow-x-auto ms-[10px] max-[500px]:items-center hide-scrollbar">
            <div className="relative w-full">
              <div className="flex gap-4 transition-transform duration-700 flex-nowrap">
                {stats.map(({ id, icon, count, label }) => (
                  <div
                    key={id}
                    className="w-[328px] shrink-0 h-[120px] bg-[#CE3319] text-white rounded-[8px] p-[24px]  flex items-center gap-6"
                  >
                    <p className=" min-w-[44px] min-h-[44px] ">{icon}</p>
                    <div  className="flex flex-col gap-2">
                      <h3 className="text-heading1 font-bold">{count}</h3>
                      <p className="text-bodyExtraLarge">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardCards;



const stats = [
  {
    id: 1,
    icon: (
      <Tag size={44} color="#ffffff"/>
    ),
    count: 4,
    label: "Categories",
  },
  {
    id: 2,
    icon: (
      <Star size={44} color="#ffffff"/>
    ),
    count: 3,
    label: "Reviews",
  },
  {
    id: 4,
    icon: (
      <SealPercent size={44} color="#ffffff"/>
    ),
    count: 6,
    label: "Blogs",
  },
  {
    id: 7,
    icon: (
      <PencilLine size={44} color="#ffffff"/>
    ),
    count: 8,
    label: "Blogs",
  },
];