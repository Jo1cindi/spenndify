import React from "react";
import * as VscIcons from "react-icons/vsc";
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as Budget } from "../images/budget.svg";
import { NavLink } from "react-router-dom";
import "../Dashboard/DashboardStyles.css";

const SidebarMobile = () => {
  return (
    <div className="sidebarMobile">
      <div className="sidebarMobileElements">
        <ul>
            <li>
            <NavLink to="/Dashboard" className= {({isActive})=>(isActive ? "active": "inactive")}>
              <Home className="svgIcon"/>
            </NavLink>
            </li>
            <li>
            <NavLink to="/Expenses" className= {({isActive})=>(isActive ? "active": "inactive")}>
              <VscIcons.VscPieChart className="icon" />
            </NavLink>
            </li>
            <li>
            <NavLink to="/Budget" className= {({isActive})=>(isActive ? "active": "inactive")}>
              <Budget className="svgIcon"/>
            </NavLink>
            </li>
            <li>
            <NavLink to="/History" className= {({isActive})=>(isActive ? "active": "inactive")}>
              <VscIcons.VscHistory className="icon" />
            </NavLink>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarMobile;
