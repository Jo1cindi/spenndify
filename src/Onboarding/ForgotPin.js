import React, { useState } from "react";
import Logo from "../Components/Logo";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ForgotPin = () => {
  //Security Question
  const securityQuestion = "What is your passion";

  //Answer
  const [answer, setAnswer] = useState("");

  //Phone number
  const [phoneNumber, setPhoneNumber] = useState("");
  //CharacterLimit
  const characterLimit = 20;

  //navigation
  const navigate = useNavigate("")

  //Error if details are incorrect
  const [error, setError] = useState("")

  //Post Request
  const sendDetails = () => {
   const url = "https://spenndify-expenses-tracker-app.herokuapp.com/spendy/user/passion";
   const userDetails = {
     phone: phoneNumber,
     passion: answer
   }
   console.log(userDetails)
   fetch(url,{
    method: "POST",
    body: JSON.stringify(userDetails),
    headers: {
      "Content-Type": "application/json",
    }
  }).then((response)=>{
    if(response.status === 200 ) {
      navigate("/CreateNewPin"); //Navigation to dashboard if user token exists

    }else{
      setError("Incorrect phone number or answer"); // Log in error if login details are incorrect
    }
    console.log(response)
  }).catch((error)=>{
    console.log(error)
  })
  //setting phoneNumber to local storage
  localStorage.setItem('phoneNumber', JSON.stringify(phoneNumber))

  };

  return (
    <div className="forgotPin">
      {/* Logo */}
      <Logo />

      <div className="forgotPinCard">
        {/* Text */}
        <div className="forgotPinText">
          <h3>Sucks to forget your pin! Don't worry we got you.</h3>
        </div>
        <div className="phoneNumber">
          <p>Phone Number</p>
          <TextField
            label="Enter your Phone Number"
            autoFocus
            className="phoneNumberInput"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            inputProps={{ maxLength: characterLimit }}
            helperText={`${answer.length}/${characterLimit}`}
            autoComplete="off"
            required
          />
        </div>

        {/* Answer Input */}
        <div className="securityQuestion">
          <p>Please answer the security question below.</p>
          <p>{securityQuestion}</p>
          <TextField
            label="Give answer"
            autoFocus
            className="securityQuestionInput"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            inputProps={{ maxLength: characterLimit }}
            helperText={`${answer.length}/${characterLimit}`}
            autoComplete="off"
            required
          />
        </div>
        <div className="sendDetails">
          <input type="submit" value="SEND DETAILS" onClick={sendDetails} disabled={!phoneNumber || !answer}/>
        </div>
        <p className="securityQuestionError">{error}</p>
      </div>
    </div>
  );
};

export default ForgotPin;
