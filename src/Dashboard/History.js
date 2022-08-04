import React from "react";
import Sidebar from "../Components/Sidebar";
import SidebarMobile from "../Components/SidebarMobile";
import MonthsChipCarousel from "../Components/MonthsChipCarousel";
import AddTransactionButton from "../Components/AddTransactionButton";
import { FiSettings } from "react-icons/fi";


const History = () => {

 //Getting Current Month
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


//Total transactions
const totalMonthlyTransactions = "0.00"

  return (
    <div className="History">
      <Sidebar />
      <div className="historyContent">
        <SidebarMobile />
        <div className="historyHeader">
          <div className="historyTitle">
            <p>Here is</p>
            <h3>Your Transaction History</h3>
          </div>
          <div className="settings">
            <FiSettings className="settingsIcon" />
          </div>
        </div>
        <MonthsChipCarousel/>
        {/* Transactions graph */}
        <div className="transactionsHistoryGraph">
        
        </div>
        <div className="detailedTransactionHistory">
         <div className="totalMonthlyTransactions">
         <p className="monthName">Total transaction cost for {monthName}</p>
         <p className="total"> KSH {totalMonthlyTransactions}</p>
         </div>
         <div className="historyBreakdown" >

         </div>
        </div>
        <AddTransactionButton/>
      </div>
    </div>
  );
};

export default History;
