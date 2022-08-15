import React, { useState } from "react";
import Logo from "../Components/Logo";
import { TextField, InputLabel } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  //Pin Input
  const [pin, setPin] = useState("");
  const characterLimit = 4;

  //Email
  const [email, setEmail] = useState("");

  //Email Validation
  let emailError = "";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(email) === false) {
    emailError = "Please enter a valid email address";
  } else {
    emailError = "Email is valid";
  }

  if (!email) {
    emailError = "";
  }

  //navigation to Dashboard
  const navigation = useNavigate();

  //Error if logging details are Invalid
  const [error, setError] = useState("");

  function handleClick(e) {
    e && e.preventDefault();

    //Post Request
    const url = "https://spenndify-expenses-tracker-app.herokuapp.com/spendy/user/authenticate";
    const loginDetails = {
      userName: email,
      password: pin,
    };
    console.log(loginDetails);

    axios({
      mode: 'cors',
      method: "post",
      url: url,
      data: loginDetails,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    }).then(
      (response) => {
        //Storing token in local storage
        const token = response.data.token;
        localStorage.setItem("token", token);

        //Setting token to axios common header
        axios.defaults.headers.common["Authorization"] =
          "JWT" + localStorage.getItem("token"); //Getting token from locals storage
        navigation("/Dashboard"); //Navigation to dashboard if user token exists

        console.log(response);
      },
      (reason) => {
        console.error(reason);  
        setError("Invalid Username/Password"); // Log in error if login details are incorrect
      }
    );
  }

  // //Function to add user phone number/email to local storage
  // const storeUserInfo = () =>{
  //   localStorage.getItem("phoneNumber",JSON.stringify(email));
  // }

  return (
    <div className="login">
      {/* Logo */}
      <Logo />

      <div className="logincard">
        <h3>Log in to your account</h3>
        <div className="loginForm">
          <form>
            <InputLabel
              className="emailLabel"
              sx={{ marginTop: 2.5, marginBottom: 2 }}
            >
              Enter Email Address
            </InputLabel>
            <TextField
              label="Email address"
              name="email"
              className="emailfield"
              sx={{ marginBottom: 2 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              helperText={emailError}
              FormHelperTextProps={
                regex.test(email) === false
                  ? { style: { color: "red" } }
                  : { style: { color: "green" } }
              }
              type="email"
              required
            />
            <InputLabel
              className="pinLabel"
              sx={{ marginTop: 2.5, marginBottom: 2 }}
            >
              Enter Pin
            </InputLabel>
            <TextField
              label="4 digit PIN"
              className="pinfield"
              type="password"
              value={pin}
              onChange={(e) => {
                setPin(e.target.value);
              }}
              inputProps={{ maxLength: characterLimit }}
              helperText={`${pin.length}/${characterLimit}`}
              sx={{ marginBottom: 2 }}
              required
            />
            <div className="forgetpin">
              <Link to="/ForgotPin" className="forgetpinLink">
                Forgot pin?
              </Link>
            </div>
            <div className="loginError">
            <p>{error}</p>
            </div>
            <div className="loginBtn">
              <input
                type="submit"
                value="LOG IN"
                disabled={pin.length < 4 || !email}
                onClick={handleClick}
              />
            </div>
            <div className="bottomLinks">
              <p>
                Not registered yet?
                <Link to="/Signup" className="createaccountlink">
                  Create Account
                </Link>
              </p>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
