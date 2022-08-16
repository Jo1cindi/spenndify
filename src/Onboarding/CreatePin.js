import React, { useState } from "react";
import Logo from "../Components/Logo";
import { TextField } from "@mui/material";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

const CreatePin = () => {
  const [userData, setUserData] = useState("");
  const [userAnswers, setUserAnswers] = useState("");
  const [userPin, setUserPin] = useState({
    pin: "",
  });
  const [confirmPin, setConfirmPin] = useState("");

  const handleChange = (e) => {
    setUserPin({
      ...userPin,
      [e.target.name]: e.target.value,
    });
  };

  let error = "";

  //Character Limit
  const characterLimit = 4;

  //Comfirm Pin
  if (confirmPin !== userPin.pin) {
    error = "Pins do not match";
  }
  if (confirmPin.length < 1) {
    error = "";
  }

  //Navigation to Log in Page
  // const navigation = useNavigate();
  //Getting data from sign-up form and security form
  const signupFormData = JSON.parse(localStorage.getItem("userData"));
  if (userData) {
    setUserData(userData);
  }

  // Getting data from local storage
  const securityQuestionsFormData = JSON.parse(
    localStorage.getItem("userAnswers")
  );
  if (userAnswers) {
    setUserAnswers(userAnswers);
  }

  //Data from create pin form
  const createPin = {
    password: userPin.pin,
  };
  console.log(createPin);

  //Function to send post request
  function handleClick(e) {
    //Object containing user details
    const userDetails = {
      ...signupFormData,
      ...securityQuestionsFormData,
      ...createPin,
    };

    console.log(userDetails);

    //Post request
    const url =
      "https://spenndify-expenses-tracker-app.herokuapp.com/spendy/user/registration";

    e.preventDefault();
    fetch({
      method: "POST",
      url: url,
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error.response.data) {
          console.log(error.response.data);
        }
      });

    // navigation("/Login");
  }

  return (
    <div className="CreatePin">
      {/* Logo */}
      <Logo />
      <div className="CreatePinCard">
        <div className="inputtext">
          <p>Create new pin</p>
        </div>

        {/* Text Fields */}
        <div className="CreatePinInput">
          <TextField
            label="Create  PIN"
            className="pinfield"
            type="password"
            value={userPin.pin}
            name="pin"
            onChange={handleChange}
            inputProps={{ maxLength: characterLimit }}
            helperText={`${userPin.pin.length}/${characterLimit}`}
            margin="normal"
            required
          />
        </div>
        <div className="confirmpinInput">
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
            disabled={confirmPin !== userPin.pin || !userPin.pin || !confirmPin}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePin;
