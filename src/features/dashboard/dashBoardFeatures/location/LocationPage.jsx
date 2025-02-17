import React from "react";
import Header from "../../dashBoardComponents/Header";
import Table from "../../dashBoardComponents/Table";

const LocationPage = () => {
  return (
    <div className=" w-full ">
      <Header pageName="Location Overview" />
      <Table columns={columns} menuItems={menuItems} checkBox={true} currentPage={"Location"}/>
    </div>
  );
};

export default LocationPage;

const columns = ["Title", "Full Address", "Email", "Phone Number", "Actions"];

const menuItems = [
  {
    id: 1,
    title: "Bahan, Yangon",
    fullAddress: "No.144, Dhamazedi Road,  Bahan Township, Yangon",
    email: "myanshi.bahan@gmail.com",
    phoneNumber: "09 785 568 747",
  },
  {
    id: 2,
    title: "Okkalar (S), Yangon",
    fullAddress: "No.800, Myittar Street, 13 Ward, South Okkalar, Yangon",
    email: "myanshi.okkalar@gmail.com",
    phoneNumber: "09 785 568 748",
  },
  {
    id: 3,
    title: "Mandalay",
    fullAddress:
      "No. (88), Mandalay-Lashio Road, Pyigyidagun Township, Mandalay",
    email: "myanshi@gmail.com",
    phoneNumber: "09 987 321 654",
  },
];
