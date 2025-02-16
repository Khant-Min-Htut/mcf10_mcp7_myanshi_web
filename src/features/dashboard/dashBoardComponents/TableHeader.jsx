// TableHeader.jsx
const TableHeader = ({ columns, checkBox }) => {
  return (
    <thead className="bg-[#FFFFFF]">
      <tr className="bg-[#FFFFFF] text-[#71717A]">
        {checkBox && (
          <td className="py-2 px-4 max-[1023px]:px-2 text-left rounded-tl-lg">
            <input type="checkbox" />
          </td>
        )}
        {columns.map((col, index) => (
          <td
            key={index}
            className={`py-2 px-4 max-[1023px]:px-1 border-collapse border-t ${
              index === 0 ? "rounded-tl-lg" : ""
            } ${index === columns.length - 1 ? "rounded-tr-lg" : ""} ${
              col === "Actions" && "max-[850px]:hidden text-end"
            }`}
          >
            {col}
          </td>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
