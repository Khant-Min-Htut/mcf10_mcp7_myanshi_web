import { useState } from "react";

const TableActions = ({ onDelete, onEdit }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <td className="h-16 px-4 max-[1023px]:px-1 border-collapse border-t relative">
      {/* Visible on large screens */}
      <button
        onClick={onDelete}
        className="bg-[#FEE2E2] text-[#DC2626] px-3 py-1 rounded mr-2 max-[850px]:hidden"
      >
        Delete
      </button>
      <button
        onClick={onEdit}
        className="bg-[#DCFCE7] text-[#22C55E] px-3 py-1 rounded max-[850px]:hidden"
      >
        Edit
      </button>

      {/* Dropdown for small screens */}
      <div className="relative min-[850px]:hidden">
        <button
          className="border size-10 flex justify-center items-center rounded-lg"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM128,72a12,12,0,1,0-12-12A12,12,0,0,0,128,72Zm0,112a12,12,0,1,0,12,12A12,12,0,0,0,128,184Z"></path>
          </svg>
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 top-12 bg-white border shadow-lg rounded-lg w-32 z-10">
            <button
              onClick={() => {
                onDelete();
                setDropdownOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-[#DC2626] hover:bg-[#FEE2E2] rounded-t-lg"
            >
              Delete
            </button>
            <button
              onClick={() => {
                onEdit();
                setDropdownOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-[#22C55E] hover:bg-[#DCFCE7] rounded-b-lg"
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </td>
  );
};

export default TableActions;
