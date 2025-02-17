import { Plus, X } from "@phosphor-icons/react";
import InputField from "./Ui/InputField";
import OutlineButton from "./Ui/OutlineButton";
import SolidButton from "./Ui/SolidButton";

const Card = ({
  onClose,
  onAddCategory,
  categoryName,
  setCategoryName,
  addedContacts,
  header,
  placeholder,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-[462px] font-satoshi">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[18px] font-semibold">{header}</h2>
        <button onClick={onClose} className="text-gray-600 hover:text-black">
          <X size={20} />
        </button>
      </div>
      <InputField
        type="text"
        placeholder={placeholder}
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <div className="flex justify-end gap-6">
        <OutlineButton color="[#E4E4E7]">Cancel</OutlineButton>
        <SolidButton
          className="h-10 min-w-36 shadow-none"
          color="#CE3319"
          hoverColor="#a82912"
          onClick={() => onAddCategory(categoryName)}
        >
          <p className="flex gap-2 items-center justify-center">
            <Plus weight="bold" size={20} /> <span>{addedContacts}</span>
          </p>
        </SolidButton>
      </div>
    </div>
  );
};

export default Card;
