import React from "react";
import Sidebar from "../Components/Sidebar";
import SidebarMobile from "../Components/SidebarMobile";
import ToggleMonthButton from "../Components/ToggleMonthButton";
import AddTransactionButton from "../Components/AddTransactionButton";
import { FiSettings } from "react-icons/fi";
import Shopping from "../images/Shopping2.svg";
import Rent from "../images/Rent2.svg";
import Transportation from "../images/Transportation.svg";

const Budget = () => {

  //Monthly budget value
  const monthlyBudget = "0.00";

  //Detailed breakdown of budget
  const budget = [
    {
      icon: Shopping,
      name: "Shopping"
    },
    {
      icon: Rent,
      name: "Rent"
    },
    {
      icon: Transportation,
      name: "Transport"
    }
  ]
  
  //Budget Amount
  const budgetAmount = "0.00";

  return (
    <div className="Budget">
      <Sidebar />
      <div className="budgetContent">
      <SidebarMobile />
        <div className="budgetHeader">
          <div className="budgetTitle">
            <p>Your Monthly Budget is</p>
            <h3>{monthlyBudget}</h3>
          </div>
          <div className="settings">
            <FiSettings className="settingsIcon" />
          </div>
        </div>
        <ToggleMonthButton/>
        <div className="budgetOverview">
          <p>You are likely to exceed your budget at this rate</p>
        </div>

        <div className="detailedBreakdown">
          <p className="detailedBreakdownTitle">Detailed breakdown</p>
          <ul>
            {
              budget.map((budgetDetail, index)=>(
                <li key={index}>
                  <div className= "detailDescription">
                   <img src={budgetDetail.icon} alt="budgetIcon"/>
                   <p>{budgetDetail.name}</p>
                  </div>
                  <p className="budgetAmount">{budgetAmount}</p>
                </li>
              ))
            }
          </ul>
        </div>
        <AddTransactionButton/>
      </div>
    </div>
  );
};

export default Budget;
