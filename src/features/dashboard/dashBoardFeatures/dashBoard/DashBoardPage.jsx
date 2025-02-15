import React from "react";
import Header from "../../dashBoardComponents/Header";
import Table from "../../dashBoardComponents/Table";
import DashboardCards from "./DashboardCards";

const DashBoardPage = () => {
  return (
    <div className=" w-full">
      <Header pageName="Dashboard" />
      <div className=" overflow-hidden mb-12 ">
        <DashboardCards />
      </div>
      <Table />
    </div>
  );
};

export default DashBoardPage;
