import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { Plus } from "@phosphor-icons/react";
import OutlineButton from "./Ui/OutlineButton";
import SolidButton from "./Ui/SolidButton";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import useStore from "../../../store";
import Card from "./Card";
import {
  redirect,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import DeleteConfirmationCard from "./DeleteConfirmationCard";
import { set } from "react-hook-form";

const Table = ({
  columns,
  menuItems,
  checkBox,
  currentPage,
  addedPath,
  currentUrl,
}) => {
  const [search, setSearch] = useState("");
  const nav=useNavigate()
  const {
    isAddBtnOpen,
    isEditBtnOpen,
    isDeleteBtnOpen,
    setIsAddBtnOpen,
    setIsEditBtnOpen,
    setIsDeleteBtnOpen,
  } = useStore();

  const pageMappings = {
    Dashboard: "Menu",
    Menu: "Menu",
    Category: "Category",
    Promotion: "Promotion",
    Blog: "Blog",
    Author: "Author",
    Review: "Review",
    Location: "Location",
  };
  const addedContacts = pageMappings[currentPage] || "Product";
  const managedContacts = pageMappings[currentPage] || "Product";

  console.log(currentPage)

  return (
    <div
      className={`bg-[#FFFFFF] font-satoshi max-[990px]:px-[10px] text-bodySmall mb-6 ${
        columns.length === 3 && "max-w-[600px]"
      } relative`}
    >
      {/* search */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder={`Search ${addedContacts}...`}
          className="w-1/3 py-2 h-10 px-4 border rounded-lg bg-no-repeat bg-left pl-10"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="112" cy="112" r="80" fill="none" stroke="gray" stroke-width="16"/><line x1="168.57" y1="168.57" x2="224" y2="224" fill="none" stroke="gray" stroke-width="16"/></svg>')`,
            backgroundSize: "20px",
            backgroundPosition: "10px center",
          }}
        />
        <div className="flex gap-6 max-[550px]:gap-2 max-[550px]:ms-2">
          {currentPage !== "Promotion" &&
            currentPage !== "Review" &&
            currentPage !== "Location" && (
              <OutlineButton className="h-10 min-w-[165px]" color="[#E4E4E7]">
                Manage {managedContacts}
              </OutlineButton>
            )}
          <SolidButton
            className="h-10 min-w-36 shadow-none"
            color="#CE3319"
            hoverColor="#a82912"
            onClick={() => {
              if (currentPage === "Menu") {
                nav("/dashboard/menu/add-new");
              } else if (currentPage === "Promotion") {
                nav("/dashboard/promotions/add-new");
              }else if(currentPage === "Blog") {
                nav("/dashboard/blog/add-new");
              }else {
                setIsAddBtnOpen(true);
              }
            }}
          >
            <p className="flex gap-2 items-center justify-center">
              <Plus weight="bold" size={20} /> <span>Add {addedContacts}</span>
            </p>
          </SolidButton>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden font-medium border-collapse rounded-lg border border-gray-300 mb-12">
        <table className="w-full border-separate border-spacing-0 font-satoshi">
          <TableHeader columns={columns} checkBox={checkBox} />
          <tbody className="text-[#09090B] font-normal">
            {menuItems
              .filter(
                (item) =>
                  item.name?.toLowerCase().includes(search.toLowerCase()) ||
                  item.title?.toLowerCase().includes(search.toLowerCase())
              )
              .map((item) => (
                <TableRow
                  key={item.id}
                  item={item}
                  columns={columns}
                  onDelete={() => setIsDeleteBtnOpen(true)}
                  onEdit={() => {
                    if (currentPage === "Menu") {
                      nav(`/dashboard/menu/edit/${item.id}`);
                    } else if (currentPage === "Promotion") {
                      nav(`/dashboard/promotions/edit/${item.id}`);
                    } else {
                      setIsEditBtnOpen(true);
                    }
                  }}
                  
                  checkBox={checkBox}
                />
              ))}
          </tbody>
        </table>
      </div>

      <Pagination />

      {/* addbtn alert */}
      {isAddBtnOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <Card
            onClose={() => setIsAddBtnOpen(false)}
            onAddCategory={() => {}}
            categoryName={""}
            setCategoryName={() => {}}
            addedContacts={`Add ${currentPage}`}
            header={`Add New ${currentPage}`}
            placeholder={`Enter ${currentPage} Name`}
          />
        </div>
      )}

      {/* editBtn alert */}
      {isEditBtnOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <Card
            onClose={() => setIsEditBtnOpen(false)}
            onAddCategory={() => {}}
            categoryName={""}
            setCategoryName={() => {}}
            addedContacts={`Edit ${currentPage}`}
            header={`Edit ${currentPage}`}
            placeholder={`Enter ${currentPage} Name`}
          />
        </div>
      )}

      {/* deleteBtn alert */}
      {isDeleteBtnOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <DeleteConfirmationCard
            currentPage={currentPage.toLowerCase()}
            onCancel={() => {
              setIsDeleteBtnOpen(false);
            }}
            onDelete={() => deleteBtn(item.id)}
          />
        </div>
      )}
    </div>
  );
};

export default Table;
