import React, { useEffect, useState } from "react";
import Logo from "../Components/Logo";
import Lottie from "react-lottie-player";
import Animation from "../images/Animation.json";
import OTPInput from "otp-input-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EnterVerificationcode = () => {
  const [verificationCode, setVerificationCode] = useState("");  //Verification code input values

  
  const [counter, setCounter] = useState(60); //Sets the number of seconds the counter should start with

  let verificationError = "";

  //Function to trigger counter
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  //navigation to create pin page
    const navigate = useNavigate();

  //Function to verify account
  const handleClick = (e) => {
    // e.preventdefault (); //Clearing input fields

    //Post Request
    const url =  "https://cors-anywhere.herokuapp.com/https://spenndify-expenses-app.herokuapp.com/spendy/user/verify/registration/otp";
    const otpCode = {
      receivedOtp: verificationCode,
    };
    console.log(otpCode);
    axios({
      method: "post",
      url: url,
      data: otpCode,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then((response) => {
        console.log(response);
        if(response.status === 200){
          // navigation to create pin page
        navigate("/CreatePin");
        }
      })
      .catch((error) => {
        if (error.response.data) {
          console.log(error.response.data);
        }
      });
  };

  //Getting phone number from local storage
  const phoneNumber = JSON.parse(localStorage.getItem("userPhoneNumber"));

  //Hiding the middle digits of phone number
  const hiddenPhoneNumber = phoneNumber.replace(
    /(\d{6})\d{3}(\d{3})/,
    "$1****$2"
  );

  //Function to resend verification code
  const Resend = () => {
    const userPhoneNumber = {
      phoneNumber: phoneNumber,
    };

    //sending post request
    const url = "https://spenndify-expenses-tracker-app.herokuapp.com/spendy/user/send/otp";

    axios({
      method: "post",
      url: url,
      data: userPhoneNumber,
      headers: { 
        "Content-Type": "application/json" 
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error.response.data) {
          console.log(error.response.data);
        }
      });
  };

  return (
    <>
      <Logo />
      <div className="EnterVerificationcodeCard">
        <div className="EnterVerificationcode">
          <h3>Account Verification</h3>
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
          <p>Enter verification code sent to {hiddenPhoneNumber}</p>
          <div className="verificationcodeInput">
            <OTPInput
              className="verificationcodeInputFields"
              value={verificationCode}
              onChange={setVerificationCode}
              autoFocus
              OTPLength={4}
              otpType="number"
              disabled={false}
              inputStyles={{
                backgroundColor: "#fbfbfb",
                borderRadius: "5px",
                border: "solid 1px rgba(5,5,5,0.3)",
                boxShadow: "0px 3px 6px 0px rgba(0, 0, 0, 0.5)",
                outline: "none",
              }}
            />
          </div>
          <div className = "verificationError">
            <p>{verificationError}</p>
          </div>
          <input
            type="submit"
            value="VERIFY ACCOUNT"
            className="verify"
            onClick={handleClick}
            disabled = {!verificationCode || verificationCode.length < 4}
          />
          <div className="EnterVerificationcodeTxt">
            <p>Relax, we are sending the code in {counter} seconds</p>
          </div>
          <div className="resend">
            <p onClick={Resend}>Resend</p>
          </div>
          
        </div>
        {/* Animation */}
        <div className="lottie-animation">
          <div className="animation2">
            <Lottie
              loop
              animationData={Animation}
              play
              className="animationsize2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EnterVerificationcode;
