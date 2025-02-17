import React from "react";
import Header from "../../dashBoardComponents/Header";
import ImageUploadCard from "../../dashBoardComponents/Ui/ImageUploadCard";
import { ImageSquare, Plus } from "@phosphor-icons/react";
import InputField from "../../dashBoardComponents/Ui/InputField";
import OutlineButton from "../../dashBoardComponents/Ui/OutlineButton";
import SolidButton from "../../dashBoardComponents/Ui/SolidButton";
import { useNavigate } from "react-router-dom";

const AddNewMenuPage = () => {
  const nav = useNavigate();
  return (
    <div className="w-full">
      <Header pageName="Add New Menu" />
      <form className=" clear-start flex flex-col gap-12 justify-end w-fit">
        <div className="flex gap-12">
          <ImageUploadCard svg={<ImageSquare size={40} />} />
          <div className="flex flex-col gap-1">
            <InputField type="text" label="Name" name="name" />
            <InputField
              type="select"
              label="Category"
              name="category"
              options={["Appetizer", "Main Course", "Dessert", "Beverage"]}
            />
            <InputField type="number" label="Price (MMK)" name="price" />
          </div>
        </div>
        <div className="flex gap-4 ms-auto">
          <OutlineButton onClick={() => nav("/dashboard/menu")} type="button">
            Cancel
          </OutlineButton>
          <SolidButton
            className=" flex gap-2 items-center justify-center"
            type="submit"
          >
            <Plus size={20} /> Add New Menu
          </SolidButton>
        </div>
      </form>
    </div>
  );
};

export default AddNewMenuPage;
