import React from "react";
import SellsTerget from "../partials/widget/SellsTerget";
import TotalSells from "../partials/widget/TotalSells";
import Earning from "../partials/widget/Earning";
import Expense from "../partials/widget/Expense";
import Featured from "../partials/Charts/Featured";
import YearlyChart from "../partials/Charts/YearlyChart";

const Dashboard = () => {
  return (
    <>
      <div className="widgets">
        <SellsTerget />
        <TotalSells />
        <Earning />
        <Expense />
      </div>
      <div className="charts">
        <Featured/>
        <YearlyChart/>
      </div>
    </>
  );
};

export default Dashboard;
