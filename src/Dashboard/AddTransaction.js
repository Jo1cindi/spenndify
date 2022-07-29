import React, {useState} from 'react'
import Logo from "../Components/Logo";
import {ReactComponent as BackArrow } from "../images/BackArrow.svg";
import AmountIcon from "../images/AmountIcon.svg";
import CategoriesIcon from "../images/CategoriesIcon.svg";
import NotesIcon from "../images/NotesIcon.svg";
import TimeIcon from "../images/TimeIcon.svg"
import { FormGroup, FormControlLabel, Checkbox,  } from "@mui/material";
import "../Dashboard/DashboardStyles.css";
import { useNavigate } from 'react-router-dom';


const AddTransaction = () => {
   
  const navigate = useNavigate()
  

  //Transactions to be added
  const buttonsArray=[
    "Income",
    "Expense",
    "Budget"
  ]
  
  //Setting active list Item(Button) when clicked
  const [active, setActive] = useState("Income");
  const toggleButton = (e) => {
    setActive(e.target.innerText);
    
  };
 
 
  const [recurringTransaction, setRecurringTransaction] = useState("")
  
  return (
    
    <>
      <Logo/>
      <div className='AddTransactions'>
      <div className='transactionsHeader'>
        <BackArrow className='backArrow' onClick={() => navigate(-1)}/>
        <p>Add Transactions</p>
      </div>
      <div className="transactionBtns">
        <ul>
        {buttonsArray.map((button, index) => (
                  <li key={index}>
                    <div
                      key={index}
                      className={
                        active === button
                          ? "activeBtn"
                          : "inactiveBtn"
                      }
                      onClick={toggleButton}
                    >
                      <p>{button}</p>
                    </div>
                  </li>
                ))}
        </ul>
        
      </div>
      <div className='transactionDetails'>
        <p> {active === "Income" ? " Add your Income transaction" : active === "Expense" ? "Add your Expense transaction" : "Create your Budget"}</p>
        <ul>
          
            <li>
              <div className="detail" >
                <img src={AmountIcon} alt="icon"/>
                <p>Amount</p>
              </div>
              <div className="detail" >
                <img src={CategoriesIcon} alt="icon"/>
                <p>Categories</p>
              </div>
              {
                active === "Budget" && 
                <div className="detail" >
                <img src={CategoriesIcon} alt="icon"/>
                <p>Set cycle</p>
              </div>
              }
              <div className="detail" >
                <img src={NotesIcon} alt="icon"/>
                <p>Notes</p>
              </div>
            </li>
          
        </ul>
        <FormGroup className="Categorycheckbox">
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "#03045E",
                      "&.Mui-checked": { color: "#03045E" },
                      marginLeft: "1rem",
                      "&.Mui-label": { fontSize: "14" },
                    }}
                    checked={recurringTransaction}
                    onChange={(e) => setRecurringTransaction(e.target.checked)}
                  />
                }
                label="This is a recurring income transaction"
                sx={{ color: "#03045E", marginTop: "1rem" }}
              ></FormControlLabel>
            </FormGroup>
            <div className='time'>
              <img src={TimeIcon} alt= "Time and Date"/>
              <p>Set Date & Time</p>
            </div>
            <div className='saveBtn'>
              <input type="submit" value="SAVE & COMPLETE"/>
            </div>
      </div>
    </div>
    </>
  )
}

export default AddTransaction