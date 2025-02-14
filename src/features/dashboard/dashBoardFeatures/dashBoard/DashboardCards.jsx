import React from "react";
import { FaUtensils, FaTag, FaStar, FaCog, FaPencilAlt } from "react-icons/fa";
import useStore from "../../../../store";

const DashboardCards = () => {
  const stats = [
    { id: 1, icon: <FaTag size={24} />, count: 4, label: "Categories" },
    { id: 2, icon: <FaStar size={24} />, count: 3, label: "Reviews" },
    { id: 4, icon: <FaPencilAlt size={24} />, count: 6, label: "Blogs" },
  ];
  const { isDesktopSize } = useStore();
  return (
    <div className="w-full overflow-visible">
      {/* desktopSize */}
      {isDesktopSize && (
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1 max-w-[328px] bg-[#CE3319] text-white rounded-[8px] p-[24px] flex items-center gap-[10px]">
            <FaUtensils size={32} />
            <div>
              <h3 className="text-3xl font-bold">16</h3>
              <p className="text-lg">Menu Items</p>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-[24px]">
            {stats.map(({ id, icon, count, label }) => (
              <div
                key={id}
                className="max-w-[328px] h-[120px] bg-[#CE3319] text-white rounded-[8px] p-[24px] flex items-center gap-[10px]"
              >
                {icon}
                <div>
                  <h3 className="text-3xl font-bold">{count}</h3>
                  <p className="text-lg">{label}</p>
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
                  className="w-[328px] max-w-[328px] h-[120px] bg-[#CE3319] text-white rounded-[8px] p-[24px] flex items-center gap-[10px] shrink-0"
                >
                  {icon}
                  <div>
                    <h3 className="text-3xl font-bold">{count}</h3>
                    <p className="text-lg">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* tabletSize */}
      <div className=" block max-xs:hidden">
        {!isDesktopSize && (
          <div className="flex flex-col gap-12 w-full overflow-x-auto ms-2 max-[500px]:ms-0 max-[500px]:items-center hide-scrollbar">
            <div className="relative w-full">
              <div className="flex gap-4 transition-transform duration-700 flex-nowrap">
                {stats.map(({ id, icon, count, label }) => (
                  <div
                    key={id}
                    className="w-[328px] shrink-0 h-[120px] bg-[#CE3319] text-white rounded-[8px] p-[24px] flex items-center gap-[10px]"
                  >
                    {icon}
                    <div>
                      <h3 className="text-3xl font-bold">{count}</h3>
                      <p className="text-lg">{label}</p>
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
