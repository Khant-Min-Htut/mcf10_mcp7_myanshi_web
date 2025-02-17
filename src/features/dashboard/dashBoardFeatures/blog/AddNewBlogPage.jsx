import React from "react";
import ImageUploadCard from "../../dashBoardComponents/Ui/ImageUploadCard";
import { ImageSquare, Plus } from "@phosphor-icons/react";
import InputField from "../../dashBoardComponents/Ui/InputField";
import Header from "../../dashBoardComponents/Header";
import OutlineButton from "../../dashBoardComponents/Ui/OutlineButton";
import SolidButton from "../../dashBoardComponents/Ui/SolidButton";

const AddNewBlogPage = () => {
  return (
    <div>
      <Header pageName="Add New Blog" />
      <form action="" className=" clear-start flex flex-col gap-12 justify-end w-full">
        <div className=" flex gap-12 w-full bg-red-100">
          <div>
            <ImageUploadCard svg={<ImageSquare size={40} />} />
            <div>
              <InputField
                type="select"
                label="Author"
                name="author"
                options={["Appetizer", "Main Course", "Dessert", "Beverage"]}
              />
              <InputField type="text" label="Title" name="title" />
              <InputField type="text" label="Description" name="description" />
            </div>
          </div>
          <div>
            hi
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

export default AddNewBlogPage;
