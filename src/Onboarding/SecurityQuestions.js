import bannerImage from "../images/Loginbanner.png";
import Logo from "../images/spenndifywhitelogo.png";
import {
  Select,
  TextField,
  InputLabel,
  FormControl,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import LogoBlue from "../images/spenndifylogo.png";
import { useNavigate } from "react-router-dom";
// import axios from "axios";


const SecurityQuestions = () => {
  //Questions Input
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [answers, setAnswers] = useState({
    answer1: "",
    answer2: "",
    answer3: ""
  })

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });
  };

  //Questions Array
  const questionsArray = [
    "What is your passion",
    "What is your pet's name",
    "What is your favorite color",
  ];

  //navigation
  const navigation = useNavigate();
    
  function handleClick(e) {
    e.preventDefault()
    const userAnswers = {
      passion : answers.answer1,
      petsName : answers.answer2,
      favouriteColor : answers.answer3
    }

    //Storing answers in local storage
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers))
    console.log(userAnswers)
    navigation("/AccountVerification");
  }

  return (
    <div className="SecurityQuestions">
      {/* Side Banner */}
      <div className="banner">
        <img src={bannerImage} alt="img" />
        <div className="logowhite">
          <img src={Logo} alt="logo" />
        </div>
        <div className="securitytxt">
          <p>We would like to ensure that Your account is safe & secure </p>
        </div>
      </div>
      <div className="header-mobile">
        <div className="mobilelogo">
          <img src={LogoBlue} alt="logo" />
        </div>
        <p> Hey there! we love new Customers. Lets get to know you.</p>
      </div>
      <div className="Questions-form">
        <p>Select and answer some of the security questions</p>

        {/* Security Questions Form */}
        <div className="questionsform">
          <form>
            <FormControl sx={{ m: 1, minWidth: 328 }}>
              <InputLabel>Question 1</InputLabel>
              <Select
                label="Question 1"
                value={question1}
                onChange={(event) => {
                  setQuestion1(event.target.value);
                }}
                margin="normal"
                className="securityquestion"
              >
                <MenuItem value={questionsArray[0]}>
                  What is your passion
                </MenuItem>
              </Select>
              <TextField
                label="Place your answer here"
                value={answers.answer1}
                name = "answer1"
                onChange={handleChange}
                margin="normal"
                className="answer1"
              />
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 328 }}>
              <InputLabel>Question 2</InputLabel>
              <Select
                label="Question 2"
                value={question2}
                onChange={(event) => {
                  setQuestion2(event.target.value);
                }}
                margin="normal"
                className="securityquestion"
              >
                <MenuItem value={questionsArray[1]}>
                  What is your pet's name
                </MenuItem>
              </Select>
              <TextField
                label="Place your answer here"
                value={answers.answer2}
                name = "answer2"
                onChange={handleChange}
                margin="normal"
                className="answer1"
              />
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 328 }}>
              <InputLabel>Question 3</InputLabel>
              <Select
                label="Question 3"
                value={question3}
                onChange={(event) => {
                  setQuestion3(event.target.value);
                }}
                margin="normal"
                className="securityquestion"
              >
                <MenuItem value={questionsArray[2]}>
                  What is your favorite color
                </MenuItem>
              </Select>
              <TextField
                label="Place your answer here"
                value={answers.answer3}
                name = "answer3"
                onChange={handleChange}
                margin="normal"
                className="answer1"
              />
            </FormControl>
            <div className="continuebtn2">
              <input
                type="submit"
                value="CONTINUE"
                disabled={
                  !question1 ||
                  !answers.answer1 ||
                  !question2 ||
                  !answers.answer2 ||
                  !question3 ||
                  !answers.answer3
                }
                onClick={handleClick}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SecurityQuestions;
