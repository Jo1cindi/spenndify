import React, { useState } from "react";
import Logo from "../Components/Logo";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CreateNewPin = () => {
  //Pin Input
  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");

  //error
  let error = "";

  //Character Limit
  const characterLimit = 4;

  //Comfirm Pin
  if (confirmPin !== newPin) {
    error = "Pins do not match";
  }
  if (confirmPin.length < 1) {
    error = "";
  }

  //Getting phone number from local storage
  const phone = JSON.parse(
    localStorage.getItem("phoneNumber")
  ); 

  //Navigation to Log in Page
  const navigation = useNavigate();

  //Sending put request
  function handleClick() {
    const url="https://spenndify-expenses-tracker-app.herokuapp.com/spendy/user/password/reset";
    const resetPassword={
      phone: phone,
      newPassword: newPin
    }
    console.log(resetPassword)
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(resetPassword),
      headers: {
        "Content-Type": "application/json",
      }
    }).then((response)=>{
      console.log(response)
      navigation("/Login");
    }).catch((error)=>{
      console.log(error)
    })
    
  }

  

  return (
    <div className="CreateNewPin">
      {/* Logo */}
      <Logo />
      <div className="CreateNewPinCard">
        <div className="inputtext">
          <p>Create 4-digit Pin</p>
        </div>

        {/* Input Fields   */}
        <div className="CreateNewPinInput">
          <TextField
            label="Create new PIN"
            className="pinfield"
            type="password"
            value={newPin}
            onChange={(e) => {
              setNewPin(e.target.value);
            }}
            inputProps={{ maxLength: characterLimit }}
            helperText={`${newPin.length}/${characterLimit}`}
            margin="normal"
            required
          />
        </div>
        <div className="confirmPinInput">
          <TextField
            label="Confirm PIN"
            className="newPinfield"
            type="password"
            value={confirmPin}
            onChange={(e) => {
              setConfirmPin(e.target.value);
            }}
            inputProps={{ maxLength: characterLimit }}
            helperText={error}
            FormHelperTextProps={{ style: { color: "red" } }}
            margin="normal"
            required
          />
        </div>

        {/* Button */}
        <div className="confirmBtn">
          <input
            type="submit"
            value="CONFIRM"
            disabled={confirmPin !== newPin || !newPin || !confirmPin}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateNewPin;
