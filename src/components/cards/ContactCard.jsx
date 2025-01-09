import React, { useState } from "react";
import FloatingInput from "../inputs/FloatingInput";
import SolidBtn from "../../buttons/SolidBtn";

const ContactCard = () => {
  const [email, setEmail] = useState("");
  return (
    <form className="w-full max-w-[626px] mx-auto grid grid-cols-2 gap-6 px-8 py-16 bg-neutral-100 border-2 border-stroke-1-color ">
      <div className=" max-[843px]:col-span-2">
        <FloatingInput
          type="email"
          name="email"
          id="email"
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className=" max-[843px]:col-span-2">
        <FloatingInput
          type="tel"
          name="phone"
          id="phone"
          label="PHONE NUMBER"
          required
        />
      </div>
      <div className=" max-[843px]:col-span-2">
        <FloatingInput
          type="text"
          name="location"
          id="location"
          label="LOCATION"
          required
        />
      </div>
      <div className=" max-[843px]:col-span-2">
        <FloatingInput
          type="date"
          name="date"
          id="date"
          label="DATE"
          required
        />
      </div>
      <div className=" max-[843px]:col-span-2">
        <FloatingInput
          type="time"
          name="time"
          id="time"
          label="TIME"
          required
        />
      </div>
      <div className=" col-span-2">
        <FloatingInput
          type="text"
          name="notes"
          id="notes"
          label="ADDITIONAL NOTES"
          isTextarea={true}
          required
        />
      </div>
      <div className=" col-span-2">
        <SolidBtn text={"BOOK A TABLE"}  className={"w-full"}/>
      </div>
    </form>
  );
};

export default ContactCard;
