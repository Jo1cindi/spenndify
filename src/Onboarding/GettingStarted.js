import React from "react";
import { useNavigate } from "react-router-dom";
import Patners from "../Components/Patners";
import Navigation from "../Components/Navigation";
import gettingStartedImg from "../images/Gettingstarted1.png";

const GettingStarted = () => {
  //Navigation to Sign up page
  const redirect = useNavigate();
  function handleClick() {
    redirect("/Signup");
  }
  return (
    <>
      <Navigation />
      <div className="gettingStarted">
        <div className="background-image">
          <img src={gettingStartedImg} alt="getting started" />
        </div>
        <div className="gettingStartedText">
          <div className="welcome">
            <p>Welcome to Spenndify</p>
          </div>
          <div className="line"></div>
          <div className="Spenndifydesc">
            <p>Manage all your finances with ease from one place.</p>
            <p>Manage overall expenses from one account</p>
            <p>Import financial statements to analyse expenditure.</p>
          </div>
          <div>
            <input
              type="submit"
              value="GET STARTED"
              className="getstartedbtn"
              onClick={handleClick}
            />
          </div>
        </div>

        {/* Patners Ad */}
        <Patners />
      </div>
    </>
  );
};

export default GettingStarted;
