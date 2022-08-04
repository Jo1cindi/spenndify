import React, {useState} from 'react'

const ToggleMonthButton = () => {
  //Functions to toggle Month/Weeky buttons
  const [active, setActive] = useState(true);
  const Filter = () => {
    setActive(!active)
    setActiveMonthly(!activeMonthly)
  };

  const [activeMonthly, setActiveMonthly] = useState(false);
  const filterMonthly = () => {
    setActiveMonthly(!activeMonthly)
    setActive(!active)
    
  };  
  return (
    <div className="filterExpenses">
    <div className="toggleBtn">
      <div
        className={active ? "filterbyWeekly" : "inactiveFilterbyWeekly"}
        onClick={Filter}
      >
        <p>Weekly</p>
      </div>

      <div
        className={
          activeMonthly ? "filterbyMonthly" : "inactiveFilterbyMonthly"
        }
        onClick={filterMonthly}
      >
        <p>Monthly</p>
      </div>
    </div>
  </div>
  )
}

export default ToggleMonthButton