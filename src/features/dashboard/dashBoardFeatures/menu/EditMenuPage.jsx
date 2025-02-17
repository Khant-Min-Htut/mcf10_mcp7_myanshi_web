import React from "react";
import EditImg from "../../dashBoardComponents/Ui/EditImg";
import img from "../../../../assets/MyanShi/Home/sushiImg.png";
import Header from "../../dashBoardComponents/Header";
import InputField from "../../dashBoardComponents/Ui/InputField";
import OutlineButton from "../../dashBoardComponents/Ui/OutlineButton";
import SolidButton from "../../dashBoardComponents/Ui/SolidButton";
import { Plus } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

const EditMenuPage = () => {
  const nav = useNavigate();
  return (
    <div className="w-full">
      <Header pageName="Edit Menu" />
      <form className=" clear-start flex flex-col gap-12 justify-end w-fit">
        <div className="flex gap-12">
          <EditImg img={img} />
          <div className="flex flex-col gap-1">
            <InputField type="text" label="Name" name="name" />
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
          <OutlineButton type="button" onClick={() => nav("/dashboard/menu")}>
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

export default EditMenuPage;
