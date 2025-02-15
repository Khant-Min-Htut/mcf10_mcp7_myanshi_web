import { useState } from "react";
import Pagination from "./Pagination";
import { Plus } from "@phosphor-icons/react";
import OutlineButton from "./Ui/OutlineButton";
import SolidButton from "./Ui/SolidButton";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

const Table = ({columns, menuItems,checkBox}) => {
  const [search, setSearch] = useState("");



  return (
    <div className={`bg-[#FFFFFF] font-satoshi max-[990px]:px-[10px] text-bodySmall mb-6 ${columns.length === 3 && "max-w-[600px]"}`}>
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
        <div className="flex gap-6 max-[550px]:gap-2 max-[550px]:ms-2">
          <OutlineButton className="h-10 min-w-[165px]" color="[#E4E4E7]">
            Manage Category
          </OutlineButton>
          <SolidButton
            className="h-10 min-w-36 shadow-none"
            color="#CE3319"
            hoverColor="#a82912"
          >
            <p className="flex gap-2 items-center justify-center">
              <Plus weight="bold" size={20} /> <span>Add Menu</span>
            </p>
          </SolidButton>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden font-medium border-collapse rounded-lg border border-gray-300 mb-12">
        <table className="w-full border-separate border-spacing-0 font-satoshi">
          <TableHeader columns={columns} checkBox={checkBox} /> {/* Pass dynamic columns */}
          <tbody className="text-[#09090B] font-normal">
            {menuItems
              .filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((item) => (
                <TableRow
                  key={item.id}
                  item={item}
                  columns={columns} // Pass dynamic columns to each row
                  onDelete={() => console.log(`Deleting item: ${item.name}`)}
                  onEdit={() => console.log(`Editing item: ${item.name}`)}
                  checkBox={checkBox}
                />
              ))}
          </tbody>
        </table>
      </div>

      <Pagination />
    </div>
  );
};

export default Table;
