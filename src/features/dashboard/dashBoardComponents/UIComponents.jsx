import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Plus } from "lucide-react";
import { InputField } from "./UIComponents"; // Import InputField

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[462px]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[18px] font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-black">
            <X size={20} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

const AddCategoryModal = ({ isOpen, onClose, onAddCategory }) => {
  const [categoryName, setCategoryName] = useState("");

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Category">
      <InputField
        type="text"
        placeholder="Enter Category Name"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <div className="flex justify-end gap-6">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button
          className="bg-red-600 text-white flex items-center gap-2"
          onClick={() => onAddCategory(categoryName)}
        >
          <Plus size={16} /> Add Category
        </Button>
      </div>
    </Modal>
  );
};

export { Modal, AddCategoryModal };
