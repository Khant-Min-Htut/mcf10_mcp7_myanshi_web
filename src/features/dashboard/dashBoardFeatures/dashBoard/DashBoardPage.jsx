import React from "react";
import Header from "../../dashBoardComponents/Header";
import Table from "../../dashBoardComponents/Table";
import DashboardCards from "./DashboardCards";

const DashBoardPage = () => {
  return (
    <div >
      <Header pageName="Dashboard"/>
      <DashboardCards/>
      <Table />
    </div>
  );
};

export default DashBoardPage;
