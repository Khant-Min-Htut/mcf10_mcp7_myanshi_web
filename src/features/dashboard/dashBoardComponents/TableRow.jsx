import TableActions from "./TableActions";

import { CalendarX, Clock } from "@phosphor-icons/react";

const TableRow = ({ item, columns, onDelete, onEdit, checkBox }) => {
  return (
    <tr className="border-t">
      {checkBox && (
        <td className="h-16 px-4 max-[1023px]:px-1 border-collapse border-t">
          <input type="checkbox" />
        </td>
      )}
      {columns.map((col, index) => (
        <td
          key={index}
          className={`h-16 px-4 max-[1023px]:px-1 border-collapse border-t ${
            index === 0 ? "" : ""
          } ${index === columns.length - 1 ? "" : ""} `}
        >
          {col === "Actions" ? (
            <TableActions
              onDelete={() => onDelete(item.id)}
              onEdit={() => onEdit(item.id)}
            />
          ) : col === "Menu" ? (
            item.name
          ) : col === "Discount (%)" ? (
            <span>{item.discountPercentage}%</span>
          ) : col === "Discount Price" ? (
            <span>{item.discountPrice}</span>
          ) : col === "Original Price" ? (
            <span>{item.originalPrice}</span>
          ) : col === "Category" ? (
            item.category
          ) : col === "Price (MMK)" ? (
            item.price
          ) : col === "Created at" ? (
            <div className="flex justify-start text-start flex-col">
              <span className="flex items-center gap-1 min-w-[120px]">
                <CalendarX size={16} color="#09090B" />
                <span>{item.date}</span>
              </span>
              <span className="flex items-center gap-1 bg-[#F5F5F5] w-fit rounded py-1 px-2">
                <Clock size={9} color="#09090B80" />
                <span className="text-[10px]">4 : 43 PM</span>
              </span>
            </div>
          ) : (
            item[col.toLowerCase()] || "N/A" // Dynamically render item values based on column name
          )}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
