import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import "../Dashboard/DashboardStyles.css";
import { ReactComponent as Avatar } from "../images/Avatar.svg";
import { ReactComponent as Notification } from "../images/notification.svg";
import { ReactComponent as Path } from "../images/Path.svg";
import * as AiIcons from "react-icons/ai";
import Lottie from "react-lottie-player";
import Animation from "../images/fileuploadanimation.json";
import { IoAddCircleSharp, IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const Dashboard = () => {
  //Getting user data from local storage
  const signupData = JSON.parse(localStorage.getItem("userData"));

  //Getting user's name from the user data
  const name = signupData.firstName + " " + signupData.lastName;

  //Getting time to display greeting at the appropriate time
  let date = new Date();
  let time = date.getHours();
  let greeting = "";

  console.log(time);

  if (time < 12) {
    greeting = "Good morning";
  } else if (time >= 12 && time < 16) {
    greeting = "Good afternoon";
  } else if (time >= 16 && time < 24) {
    greeting = "Good evening";
  }

  //Months in an array
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

  //Setting active list Item(month) when clicked
  const [active, setActive] = useState("");
  const toggleMonth = (e) => {
    setActive(e.target.innerText);
  };

  //transaction options
  const [transactionOption, setTransactionOption] = useState({
    option1: "All transactions",
  });

  //transaction amount
  const transactionsAmount = "00.00";

  //Opening and closing the consent pop up window
  const [openConsent, setOpenConsent] = useState("");
  const toggleConsent = () => {
    setOpenConsent(!openConsent);
  };

  //Function to close consent pop up window
  const closeConsent = () => {
    setOpenConsent(false);
  };

  //Assigning value to consent checkbox
  const [checkConsent, setCheckConsent] = useState("");

  return (
    <div className="Dashboard">
      {openConsent && (
        <div className="consent">
          <div className="close">
            <IoCloseSharp className="closeIcon" onClick={closeConsent} />
          </div>
          <div className="consentPopupWindow">
            <div className="popuptitle">
              <h3>Read SMS permission</h3>
              <h4>Financial transaction message logs(SMS)</h4>
            </div>
            <div className="consentContent">
              <p>
                We need you to allow Spenndify to read and upload select
                transaction message logs from your mobile device, you will
                access well formatted and organised important financial
                transaction informations and related analysis.
              </p>
              <p>
                With your permission, we will only read transactions
                notification messages originating from Mpesa and any bank within
                Kenya.
              </p>
              <p>
                Upon your consent copies of your messages also serve as
                secondary back-up and would still be available if you changed
                your device and re-authenticated your account details on a new
                device with a new installation of the app.
              </p>
              <p>
                You may choose to delete such messages from our servers
                yourself, through the app at any time, or send us a request to
                delete such information using the contact details provided in
                our data privacy policy.
              </p>
              <p>
                We will not share or disclose your financial transactions
                message logs to third parties without your consent or for any
                purposes outlined in this privacy policy and/ our terms and
                conditions. Please read full Data privacy policy
              </p>
              <p>
                Please read full{" "}
                <Link to="" className="privacypolicylink">
                  Data privacy policy
                </Link>
              </p>
            </div>
            {/* Accept terms checkbox */}
            <FormGroup className="checkbox">
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "#03045E",
                      "&.Mui-checked": { color: "#03045E" },
                      marginLeft: "1rem",
                      "&.Mui-label": { fontSize: "14" },
                    }}
                    checked={checkConsent}
                    onChange={(e) => setCheckConsent(e.target.checked)}
                  />
                }
                label="I consent to giving spenndify permission to read my m-pesa and bank messages"
                sx={{ color: "#03045E", marginTop: "1rem" }}
              ></FormControlLabel>
            </FormGroup>
            <input type="submit" value="CONTINUE" />
          </div>
        </div>
      )}
      <Sidebar />
      <div className="dashboardContent">
        {/* Header Containing Name , Avatar, Search Icon and Notification Icon */}
        <div className="dashboardHeader">
          {/* User's name and avatar */}
          <div className="user">
            <div className="avatar">
              <Avatar className="avatar" />
            </div>
            <div className="name">
              <p className="greeting">{greeting}</p>
              <p className="user-name">{name}</p>
            </div>
          </div>

          {/* Search Icon and Notification Icon */}
          <div className="headerIcons">
            <AiIcons.AiOutlineSearch className="searchIcon" />
            <Notification className="notificationIcon" />
          </div>
        </div>

        {/* Displaying Months */}
        <div className="months">
          <ul>
            {months.map((month, index) => (
              <li
                key={index}
                className={active === month ? "activeMonth" : "inactiveMonth"}
                onClick={toggleMonth}
              >
                <p>{month}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Displaying Months for the mobile and Tablet screens */}
        <div className="months-mobile">
          <ul>
            <Carousel className="monthsCarousel">
              {months.map((month, index) => (
                <li>
                  <div
                    key={index}
                    className={
                      active === month
                        ? "activeMonth-mobile"
                        : "inactiveMonth-mobile"
                    }
                    onClick={toggleMonth}
                  >
                    <p>{month}</p>
                  </div>
                </li>
              ))}
            </Carousel>
          </ul>
        </div>

        {/* Displaying Transactions */}
        <div className="transactions">
          <div className="selectTransactions">
            <select
              name="transactions"
              onChange={(e) => setTransactionOption(e.target.value)}
            >
              <option value={transactionOption}>All transactions</option>
            </select>
          </div>
          <div className="transactionsAmount">
            <div className="path">
              <Path className="pathSvg" />
              <div className="amount">
                <p>KSH {transactionsAmount}</p>
              </div>
            </div>
          </div>
        </div>

        {/* File upload animation */}

        <Lottie loop animationData={Animation} play className="animation" />
        <div className="importFile">
          <p>
            Kindly import your Mpesa messages and Bank statements to view your
            transactions analysis
          </p>
          <input type="submit" value="IMPORT" onClick={toggleConsent} />
        </div>

        {/* Add Files Icon */}
        <div className="addfile">
          <IoAddCircleSharp className="addBtn" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
