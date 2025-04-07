import React from "react";
import Header from "../../dashBoardComponents/Header";
import InputField from "../../dashBoardComponents/Ui/InputField";
import OutlineButton from "../../dashBoardComponents/Ui/OutlineButton";
import SolidButton from "../../dashBoardComponents/Ui/SolidButton";
/* import { Plus } from "@phosphor-icons/react"; */
import { useNavigate } from "react-router-dom";

const AddNewPromotionPage = () => {
  const nav = useNavigate();
  return (
    <div className="w-full">
      <Header pageName="Add New Promotion" />
      <form className=" clear-start flex flex-col gap-12 justify-end w-fit">
        <div className="flex gap-12">
          {/* <ImageUploadCard svg={<ImageSquare size={40} />} /> */}
          <div className="flex flex-col gap-1">
            <InputField
              type="select"
              label="Menu"
              name="menu"
              options={["Appetizer", "Main Course", "Dessert", "Beverage"]}
            />
            <InputField
              type="text"
              label="Discount Percent (%)"
              name="discountPercent"
            />
            <InputField
              type="number"
              label="Discount Price (MMK)"
              name="discountPrice"
            />{" "}
            <InputField
              type="number"
              label="Original Price (MMK)"
              name="originalPrice"
            />
            <InputField type="date" label="Start Date" name="startDate" />
            <InputField type="date" label="End Date" name="endDate" />
          </div>
        </div>
        <div className="flex gap-4 ms-auto">
          <OutlineButton
            onClick={() => nav("/dashboard/promotions")}
            type="button"
          >
            Cancel
          </OutlineButton>
          <SolidButton
            className=" flex gap-2 items-center justify-center"
            type="submit"
          >
            <Plus size={20} /> Add Promotion
          </SolidButton>
        </div>
      </form>
    </div>
  );
};

export default AddNewPromotionPage;
