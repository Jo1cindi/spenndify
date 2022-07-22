import React, { useState } from "react";
import Logo from "../Components/Logo";
import { TextField } from "@mui/material";

const VerificationwithID = () => {
  //ID number input
  const [idNumber, setIDNumber] = useState("");

  //Character Limit
  const characterLimit = 8;

  if (idNumber.length === characterLimit) {
    setTimeout(() => {
      window.location.href = "/AccountVerification2";
    }, 4000);
  }

  return (
    <div className="VerificationwithID">
      {/* Logo */}
      <Logo/>
      <div className="VerificationwithIDcard">
        <div className="VerificationwithIDtxt">
          <h3>Verify your account</h3>
          <p>Kindly provide your ID number</p>
        </div>

        {/* ID Number input field */}
        <div className="VerificationwithIDinput">
          <TextField
            label="ID Number"
            margin="normal"
            className="IdNumberInput"
            value={idNumber}
            onChange={(e) => setIDNumber(e.target.value)}
            inputProps={{ maxLength: characterLimit }}
            helperText={`${idNumber.length}/${characterLimit}`}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default VerificationwithID;
