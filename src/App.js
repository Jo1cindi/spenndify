import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GettingStarted from "./Onboarding/GettingStarted";
import Login from "./Onboarding/Login";
import SecurityQuestions from "./Onboarding/SecurityQuestions";
import Signup from "./Onboarding/Signup";
import AccountVerification from "./Onboarding/AccountVerification";
import CreatePin from "./Onboarding/CreatePin";
import ForgotPin from "./Onboarding/ForgotPin";
import VerificationwithID from "./Onboarding/VerificationwithID";
import AccountVerification2 from "./Onboarding/AccountVerification2";
import CreateNewPin from "./Onboarding/CreateNewPin";
import EnterVerificationcode from "./Onboarding/EnterVerificationcode";
import EnterVerificationCode2 from "./Onboarding/EnterVerificationCode2";
import Dashboard from "./Dashboard/Dashboard";
import Budget from "./Dashboard/Budget";
import Expenses from "./Dashboard/Expenses";
import History from "./Dashboard/History";
import AboutUs from "./General-Pages/About-us";



const Spendify = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="" exact element={<GettingStarted />} />
          <Route path="GettingStarted" exact element={<GettingStarted />} />
          <Route path="Login" exact element={<Login />}></Route>
          <Route path="Signup" exact element={<Signup />}></Route>
          <Route path="SecurityQuestions" exact element={<SecurityQuestions/>}></Route>
          <Route path="AccountVerification" exact element={<AccountVerification/>}></Route>
          <Route path="CreatePin" exact element={<CreatePin/>}></Route>
          <Route path="ForgotPin" exact element={<ForgotPin/>}></Route>
          <Route path="VerificationwithID" exact element={<VerificationwithID/>}></Route>
          <Route path="AccountVerification2" exact element={<AccountVerification2/>}></Route>
          <Route path="CreateNewPin" exact element={<CreateNewPin/>}></Route>
          <Route path="CreatePin" exact element={<CreatePin/>}></Route>
          <Route path="EnterVerificationcode" exact element={<EnterVerificationcode/>}></Route>
          <Route path="EnterVerificationCode2" exact element={<EnterVerificationCode2/>}></Route>
          <Route path="Dashboard" exact element={<Dashboard/>}></Route>
          <Route path="Expenses" exact element={<Expenses/>}></Route>
          <Route path="Budget" exact element={<Budget/>}></Route>
          <Route path="History" exact element={<History/>}></Route>
          <Route path="About-us" exact element={<AboutUs/>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Spendify;
