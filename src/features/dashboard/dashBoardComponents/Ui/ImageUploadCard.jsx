import React, { useState } from "react";

const ImageUploadCard = ({ svg }) => {
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div
      className="border-2 border-dotted border-gray-300 rounded-lg  w-[328px] h-[328px] flex flex-col items-center justify-center cursor-pointer p-4 text-center"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {image ? (
        <img
          src={image}
          alt="Uploaded Preview"
          className="w-full h-full object-cover rounded-lg"
        />
      ) : (
        <label className="flex flex-col items-center justify-center text-[#737373] cursor-pointer text-[14px] font-satoshi">
          {svg}
          <span>
            Drag and drop your picture or{" "}
            <span className=" underline">Browse</span>
          </span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      )}
    </div>
  );
};

export default ImageUploadCard;
