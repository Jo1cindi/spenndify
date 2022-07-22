import React from "react";
import * as VscIcons from "react-icons/vsc";
import {ReactComponent as Home} from "../images/home.svg";
import {ReactComponent as Budget} from "../images/budget.svg";
import { NavLink } from "react-router-dom";
import "../Dashboard/DashboardStyles.css";

const Sidebar = () => {
 
  
  return (
    <div className="sidebar">
      <div className="sidebarElements">
        <ul>
           {/* Sidebar Menu Items */}
          <li>
            <NavLink to="/Dashboard" className= {({isActive})=>(isActive ? "active": "inactive")}>
              <Home className="svgIcon"/>
              <p>Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Expenses" className= {({isActive})=>(isActive ? "active": "inactive")}>
              <VscIcons.VscPieChart className="icon" />
              <p>Expenses</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Budget" className= {({isActive})=>(isActive ? "active": "inactive")}>
              <Budget className="svgIcon"/>
              <p>Budget</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/History" className= {({isActive})=>(isActive ? "active": "inactive")}>
              <VscIcons.VscHistory className="icon" />
              <p>History</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
