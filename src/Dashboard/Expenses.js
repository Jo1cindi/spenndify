import React from "react";
import Sidebar from "../Components/Sidebar";
import SidebarMobile from "../Components/SidebarMobile";
import { FiSettings } from "react-icons/fi";
import AddTransactionButton from "../Components/AddTransactionButton";
import ToggleMonthButton from "../Components/ToggleMonthButton";

const Expenses = () => {


  //Getting the months
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let monthIndex = (new Date().getMonth());
  let monthName = months[monthIndex];
  return (
    <div className="Expenses">
      <Sidebar />

      <div className="expensesContent">
        <SidebarMobile />
        <div className="expenseHeader">
          <div className="expenseTitle">
            <p>Here is your</p>
            <h3>Expense Report</h3>
          </div>
          <div className="settings">
            <FiSettings className="settingsIcon" />
          </div>
        </div>
        <ToggleMonthButton/>
        <div className="expenditurePieChart">
          <p>Overview for {monthName}</p>
          <div className="piechartCard">

          </div>
        </div>
        <div className="expenditureBargraph">
          <p>Expenditure overview</p>
          <div className="bargraphCard">

          </div>
        </div>
        <div className="categoriesPieChart">
          <p>Spending Categories</p>
          <div className="categoriesPiechartCard"></div>
        </div>
        <AddTransactionButton/>
      </div>
    </div>
  );
};

export default Expenses;
