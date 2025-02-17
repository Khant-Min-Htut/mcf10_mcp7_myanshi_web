import { Plus, Trash, TrashSimple } from "@phosphor-icons/react";
import OutlineButton from "./Ui/OutlineButton";
import SolidButton from "./Ui/SolidButton";

const DeleteConfirmationCard = ({ onCancel, onDelete ,currentPage,addedContacts}) => {
  return (
    <div className="w-[462px] h-[276px] bg-white rounded-2xl p-6 flex flex-col items-center shadow-lg font-satoshi">
      <div className=" border-2 border-[#CE3319] rounded-full p-3">
      <TrashSimple className="text-[#CE3319]" size={48} strokeWidth={1.5} />
      </div>
      <h2 className="text-2xl font-semibold text-center mt-6 w-[380px]">
        Are you sure you want to delete this {currentPage}?
      </h2>
      <div className="flex justify-center gap-6 mt-6">
        <OutlineButton color="[#E4E4E7]" onClick={onCancel}>
          Cancel
        </OutlineButton>
        <SolidButton
          className="h-10 min-w-36 shadow-none"
          color="#CE3319"
          hoverColor="#a82912"
          onClick={() => onDelete()}
        >
          <p className="flex gap-2 items-center justify-center">
             <span>Yes, delete it!</span>
          </p>
        </SolidButton>
      </div>
    </div>
  );
};

export default DeleteConfirmationCard;
