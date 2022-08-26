import React, { useState } from "react";
import Logo from "../Components/Logo";
import { ReactComponent as BackArrow } from "../images/BackArrow.svg";
import AmountIcon from "../images/AmountIcon.svg";
import CategoriesIcon from "../images/CategoriesIcon.svg";
import NotesIcon from "../images/NotesIcon.svg";
import TimeIcon from "../images/TimeIcon.svg";
import EntertainmentIcon from "../images/Entertainment.svg";
import GroceriesIcon from "../images/Groceries.svg";
import ShoppingIcon from "../images/Shopping.svg";
import FoodIcon from "../images/Food.svg";
import TravelIcon from "../images/Travel.svg";
import RentIcon from "../images/Rent.svg";
import AirtimeIcon from "../images/Airtime.svg";
import WaterIcon from "../images/Water.svg";
import ElectricityIcon from "../images/Electricity.svg";
import WifiIcon from "../images/Wifi.svg";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import "../Dashboard/DashboardStyles.css";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { IoCloseSharp } from "react-icons/io5";
import DateTimePicker from 'react-datetime-picker';


const AddTransaction = () => {
  const navigate = useNavigate();

  //Transactions to be added
  const buttonsArray = ["Income", "Expense", "Budget"];

  //Setting active list Item(Button) when clicked
  const [active, setActive] = useState("Income");
  const toggleButton = (e) => {
    setActive(e.target.innerText);
  };

  //Closing and opening add amount pop up window
  const [openAddAmount, setOpenAddAmount] = useState("");
  const toggleAddAmount = () => {
    setOpenAddAmount(!openAddAmount);
  };
  const closeAmountWindow = (e) => {
    e.preventDefault();
    setOpenAddAmount(false);
  };

  //Value of the amount being entered
  const [amount, setAmount] = useState("");

  //Closing and opening castegories pop up window
  const [openCategories, setOpenCategories] = useState("");
  const toggleCategories = () => {
    setOpenCategories(!openCategories);
  };

  const closeCategoriesPopup = () => {
    setOpenCategories(false);
  };

  //General Categories array
  const generalCategories = [
    {
      id: 1,
      icon: GroceriesIcon,
      category: "Groceries",
    },
    {
      id: 2,
      icon: EntertainmentIcon,
      category: "Entertainment",
    },
    {
      id: 3,
      icon: ShoppingIcon,
      category: "Shopping",
    },
    {
      id: 4,
      icon: FoodIcon,
      category: "Food",
    },
    {
      id: 5,
      icon: TravelIcon,
      category: "Travel",
    },
    {
      id: 6,
      icon: RentIcon,
      category: "Rent",
    },
  ];

  const billCategories = [
    {
      id: 7,
      icon: AirtimeIcon,
      category: "Airtime",
    },
    {
      id: 8,
      icon: WaterIcon,
      category: "Water",
    },
    {
      id: 9,
      icon: ElectricityIcon,
      category: "Electricity",
    },
    {
      id: 10,
      icon: WifiIcon,
      category: "Wifi",
    },
  ];

  //Highlighting the categories when clicked
  const [activeCategory, setActiveCategory] = useState();

  //Notes value
  const [notes, setNotes] = useState("");


  //Close and opening setDate and Time pop window
  const [openSetTime, setOpenSetTime] = useState("")
  const toggleSetTime =  () =>{
    setOpenSetTime(!openSetTime);
  }
  const closeSetTime = () =>{
    setOpenSetTime(false)
  } 

  //Setting time value
  const [time , onChange] = useState(new Date())
  

  return (
    <>
      {/* Add amount Pop up window */}
      {openAddAmount && (
        <div className="AddAmount">
          <div className="closeAmount">
            <IoCloseSharp
              className="closeAmountIcon"
              onClick={closeAmountWindow}
            />
          </div>
          <div className="addAmountCard">
            <h3>Enter Amount</h3>
            <form>
              <TextField
                label="Enter Amount"
                className="amountfield"
                sx={{ marginBottom: 5 }}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="tel"
                required
              />
              <input
                type="submit"
                value="CONTINUE"
                className="amountBtn"
                disabled={amount === ""}
                onClick={toggleCategories}
              />
            </form>
          </div>
        </div>
      )}

      {/* Create Category Pop up window */}
      {openCategories && (
        <div className="categories">
          <div className="closeCategories">
            <IoCloseSharp
              className="categoriesIcon"
              onClick={closeCategoriesPopup}
            />
          </div>
          <div className="categoriesCard">
            <h3>Select Categories</h3>
            <div className="general">
              <h4>General</h4>
              <div className="generalCategories">
                <ul>
                  {generalCategories.map((selectedCategory) => (
                    <li>
                      <div
                        className={
                          activeCategory === selectedCategory.id
                            ? "activeCategory"
                            : "inactiveCategory"
                        }
                        onClick={() => setActiveCategory(selectedCategory.id)}
                      >
                        <img src={selectedCategory.icon} alt="categoryIcon" />
                        <p>{selectedCategory.category}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bills">
              <h4>Bills</h4>
              <div className="billCategories">
                <ul>
                  {billCategories.map((selectedBillCategory) => (
                    <li>
                      <div
                        className={
                          activeCategory === selectedBillCategory.id
                            ? "activeCategory"
                            : "inactiveCategory"
                        }
                        onClick={() =>
                          setActiveCategory(selectedBillCategory.id)
                        }
                      >
                        <img
                          src={selectedBillCategory.icon}
                          alt="categoryIcon"
                        />
                        <p>{selectedBillCategory.category}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="createBtn">
              <input type="submit" value="CREATE CUSTOM CATEGORY" />
            </div>
          </div>
        </div>
      )}

      {/* Set Date and Time Pop up window */}
      {
        openSetTime && (
          <div className="setDate">
           <div className="closeSetDate">
           <IoCloseSharp className="closeSetDateIcon" onClick={closeSetTime}/>
           </div>
           <div className="setDateCard">
            <h3>Set Date & Time</h3>
            <div className="dateInput">
             <DateTimePicker onChange={onChange} value={time} className="datePicker"/>
            </div>
           </div>
         </div>
        )
      }

      <div className="addTransactionsPage">
        <Logo />
        <div className="AddTransactions">
          <div className="transactionsHeader">
            <BackArrow className="backArrow" onClick={() => navigate(-1)} />
            <p>Add Transactions</p>
          </div>
          <div className="transactionBtns">
            <ul>
              {buttonsArray.map((button, index) => (
                <li key={index}>
                  <div
                    key={index}
                    className={active === button ? "activeBtn" : "inactiveBtn"}
                    onClick={toggleButton}
                  >
                    <p>{button}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="transactionDetails">
            <p>
              {" "}
              {active === "Income"
                ? " Add your Income transaction"
                : active === "Expense"
                ? "Add your Expense transaction"
                : "Create your Budget"}
            </p>
            <ul>
              <li>
                <div className="detail" onClick={toggleAddAmount}>
                  <img src={AmountIcon} alt="icon" />
                  <p>Amount</p>
                </div>
                <div className="detail" onClick={toggleCategories}>
                  <img src={CategoriesIcon} alt="icon" />
                  <p>Categories</p>
                </div>
                {active === "Budget" && (
                  <div className="detail">
                    <img src={CategoriesIcon} alt="icon" />
                    <p>Set cycle</p>
                  </div>
                )}
                <div className="detail">
                  <div className="addNote">
                    <img src={NotesIcon} alt="icon" />
                    <p>Notes</p>
                  </div>
                  <input type="text" value={notes} onChange={(e)=> {setNotes(e.target.value)}} defaultValue="Optional"/>
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
                    checked={true}
                  />
                }
                label="This is a recurring income transaction"
                sx={{ color: "#03045E", marginTop: "1rem" }}
              ></FormControlLabel>
            </FormGroup>
            <div className="time" onClick={toggleSetTime}>
              <img src={TimeIcon} alt="Time and Date" />
              <p>Set Date & Time</p>
            </div>
            <div className="saveBtn">
              <input type="submit" value="SAVE & COMPLETE" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTransaction;
