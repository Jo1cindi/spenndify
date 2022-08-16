import React, { useState } from "react";
import Logo from "../images/spenndifywhitelogo.png";
import Banner from "../images/signupbanner.png";
import { TextField } from "@mui/material";
import LogoBlue from "../images/spenndifylogo.png";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  //Setting default value
  
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    idNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    
    
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // //User exists error
  // let error = "";

  //Email Validation
  let emailError = "";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(user.email) === false) {
    emailError = "Please enter a valid email address";
  } else {
    emailError = "Email is valid";
  }

  if (!user.email) {
    emailError = "";
  }

  // // navigation;
  const navigation = useNavigate();

  //Phone number where otp is sent
  const userPhoneNumber = user.phone;

  //Function to send post request
  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      idNumber: user.idNumber,
      email: user.email,
    };
    //Storing user data in local storage
    localStorage.setItem("userData", JSON.stringify(userData));
    console.log(userData);
    navigation("/SecurityQuestions");

    //Storing phone number in local storage
    localStorage.setItem("userPhoneNumber", JSON.stringify(userPhoneNumber));
  };


  return (
    <div className="signup">
      {/* Side Banner */}
      <div className="banner">
        <img src={Banner} alt="banner" />
        <div className="logowhite">
          <img src={Logo} alt="logo" />
        </div>
        <div className="signuptext">
          <p> Hey there! we love new Customers. Lets get to know you.</p>
        </div>
      </div>
      <div className="header-mobile">
        <div className="mobilelogo">
          <img src={LogoBlue} alt="logo" />
        </div>
        <p> Hey there! we love new Customers. Lets get to know you.</p>
      </div>

      {/* Sign up Form */}
      <div className="signup-form">
        <div className="signup-formtxt">
          <p>Please fill out the following details.</p>
        </div>
        <div className="signupform">
          <form onSubmit={handleSubmit}>
            <TextField
              label="First name"
              name="firstName"
              autoFocus
              className="signupinput"
              value={user.firstName}
              onChange={handleChange}
              inputProps={{ minLength: 2 }}
              autoComplete="off"
              required
            />
            <TextField
              label="Last name"
              name="lastName"
              margin="normal"
              className="signupinput"
              value={user.lastName}
              onChange={handleChange}
              required
            />
            <TextField
              label="ID Number"
              name="idNumber"
              margin="normal"
              type="tel"
              className="signupinput"
              value={user.idNumber}
              onChange={handleChange}
              inputProps={{ maxLength: 8 }}
              required
            />
            <TextField
              label="Phone Number"
              name="phone"
              margin="normal"
              type="tel"
              className="signupinput"
              value={user.phone}
              onChange={handleChange}
              inputProps={{ maxLength: 13 }}
              required
            />

            <TextField
              label="Email address"
              name="email"
              margin="normal"
              className="signupinput"
              value={user.email}
              onChange={handleChange}
              helperText={emailError}
              FormHelperTextProps={
                regex.test(user.email) === false
                  ? { style: { color: "red" } }
                  : { style: { color: "green" } }
              }
              type="email"
              required
            />
            <div className="continuebtn">
              <input
                type="submit"
                value="CONTINUE"
                onClick={handleSubmit}
                disabled={
                  !user.firstName ||
                  !user.lastName ||
                  !user.phone ||
                  !user.email ||
                  !user.idNumber ||
                  // error ||
                  regex.test(user.email) === false
                }
              />
              <div className="haveanaccount">
                Already have an account?
                <Link to="/Login" className="login-link">
                  Log in
                </Link>
              </div>
            </div>
          </form>
          <div className="signupError">
            {/* <p>{error}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
