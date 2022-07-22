import React, { useState } from "react";
import Logo from "../Components/Logo";
import { TextField } from "@mui/material";


const ForgotPin = () => {
  //Security Question
  const securityQuestion = "What is your passion";

  //Answer
  const [answer, setAnswer] = useState("");
  //CharacterLimit
  const characterLimit = 20;

  //Loading verification with ID
  if (answer.length === 3) {
    setTimeout(() => {
      window.location.href = "/VerificationwithID";
    }, 4000);
  }

  return (
    <div className="forgotPin">
      {/* Logo */}
      <Logo/>
      
      <div className="forgotPinCard">
        {/* Text */}
        <div className="forgotPinText">
          <h3>Sucks to forget your pin! Don't worry we got you.</h3>
          <p>Please answer the security question below.</p>
        </div>

        {/* Answer Input */}
        <div className="securityQuestion">
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
      </div>
    </div>
  );
};

export default ForgotPin;
