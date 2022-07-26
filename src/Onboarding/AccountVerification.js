import React from "react";
import Logo from "../Components/Logo";
import Lottie from "react-lottie-player";
import Animation from "../images/Animation.json";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AccountVerification = () => {
  //Navigation to enter code
  const navigate = useNavigate();

  //Getting phone number from local storage
  const phoneNumber = JSON.parse(localStorage.getItem("email"));

  //Hiding the middle digits of phone number
  const hiddenPhoneNumber = phoneNumber.replace(
    /(\d{6})\d{3}(\d{3})/,
    "$1****$2"
  );

  //Function to send verification code
  const handleClick = () => {
    const userPhoneNumber = {
      phone: phoneNumber,
    };

    //sending post request
    const url = "https://spenndify-expenses-app.herokuapp.com/spendy/user/send/otp";

    axios({
      method: "post",
      url: url,
      data: userPhoneNumber,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error.response.data) {
          console.log(error.response.data);
        }
      });
    navigate("/EnterVerificationCode2");
  };

  return (
    <div className="Accountverification">
      {/* Logo */}
      <Logo />

      <div className="verificationcard">
        <div className="verification-info">
          {/* Text */}
          <div className="Verificationcode">
            <h3>Account Verification</h3>
            <p>We will send a verification code to {hiddenPhoneNumber}</p>

            {/* Animation mobile */}
            <div className="lottie-animation-mobile">
              <div className="animation-mobile">
                <Lottie
                  loop
                  animationData={Animation}
                  play
                  className="animationsize-mobile"
                />
              </div>
            </div>

            <input
              type="submit"
              value="SEND CODE"
              className="sendCode"
              onClick={handleClick}
            />
          </div>

          {/* Animation */}
          <div className="lottie-animation">
            <div className="animation">
              <Lottie
                loop
                animationData={Animation}
                play
                className="animationsize"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountVerification;
