import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import SidebarMobile from "../Components/SidebarMobile";
import { FiSettings } from "react-icons/fi";

const Expenses = () => {

//Functions to toggle Month/Weeky buttons
  const [active, setActive] = useState(true);
  const Filter = () => {
    setActive(!active)
    setActiveMonthly(!activeMonthly)
  };

  const [activeMonthly, setActiveMonthly] = useState(false);
  const filterMonthly = () => {
    setActiveMonthly(!activeMonthly)
    setActive(!active)
    
  };

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
        <div className="filterExpenses">
          <div className="toggleBtn">
            <div
              className={active ? "filterbyWeekly" : "inactiveFilterbyWeekly"}
              onClick={Filter}
            >
              <p>Weekly</p>
            </div>

            <div
              className={
                activeMonthly ? "filterbyMonthly" : "inactiveFilterbyMonthly"
              }
              onClick={filterMonthly}
            >
              <p>Monthly</p>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default Expenses;
