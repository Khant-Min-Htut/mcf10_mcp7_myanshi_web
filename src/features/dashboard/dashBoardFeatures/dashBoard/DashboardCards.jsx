import React from "react";
import { FaUtensils, FaTag, FaStar, FaCog, FaPencilAlt } from "react-icons/fa"; // Using FontAwesome for icons

const DashboardCards = () => {
  // Data array for stats
  const stats = [
    { id: 1, icon: <FaTag size={24} />, count: 4, label: "Categories" },
    { id: 2, icon: <FaStar size={24} />, count: 3, label: "Reviews" },
    { id: 3, icon: <FaCog size={24} />, count: 4, label: "Promotion Items" },
    { id: 4, icon: <FaPencilAlt size={24} />, count: 6, label: "Blogs" },
  ];

  return (
    <div className="max-w-[1032px] h-[264px] flex gap-[24px]">
      {/* Main Menu Card */}
      <div className="w-[328px] h-[264px] max-md:h-[120px] bg-[#CE3319] text-white rounded-[8px] p-[24px] flex  justify-between">
        <FaUtensils size={32} />
        <div>
          <h2 className="text-4xl font-bold">16</h2>
          <p className="text-lg">Menu Items</p>
        </div>
      </div>

      {/* Small Stats Cards */}
      <div className="grid grid-cols-2 gap-[10px] w-[680px]">
        {stats.map(({ id, icon, count, label }) => (
          <div
            key={id}
            className="w-[328px] h-[120px] bg-[#CE3319] text-white rounded-[8px] p-[24px] flex items-center gap-[10px]"
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
  );
};

export default DashboardCards;
