import React from "react";
import Sidebar from "../Components/Sidebar";
import SidebarMobile from "../Components/SidebarMobile";
import { FiSettings } from "react-icons/fi"

const Expenses = () => {
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
           <FiSettings className="settingsIcon"/>
          </div>
        </div>
        <div className="filterExpenses">
          
        </div>
      </div>
    </div>
  );
};

export default Expenses;
