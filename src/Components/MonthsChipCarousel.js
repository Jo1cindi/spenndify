import React, {useState} from 'react'

const MonthsChipCarousel = () => {

    //Months in an array
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let monthIndex = (new Date().getMonth());
  let monthName = months[monthIndex];

  //Setting active list Item(month) when clicked
  const [active, setActive] = useState(monthName);
  const toggleMonth = (e) => {
    setActive(e.target.innerText);
  };

  
  return (
   <>

     {/* Displaying months carousel */}
     <div className="months">
      <ul>
            {months.map((month, index) => (
              <li
                key={index}
                className={active === month ? "activeMonth" : "inactiveMonth"}
                onClick={toggleMonth}
              >
                <p>{month}</p>
              </li>
            ))}
          </ul>
    </div>


    {/* Displaying months carousel in mobile and tablet screens */}
    <div className='months-mobile'>
    <ul>
                {months.map((month, index) => (
                  <li key={index}>
                    <div
                      key={index}
                      className={
                        active === month
                          ? "activeMonth-mobile"
                          : "inactiveMonth-mobile"
                      }
                      onClick={toggleMonth}
                    >
                      <p>{month}</p>
                    </div>
                  </li>
                ))}
              
            </ul>  
    </div>

   </>
    
  )
}

export default MonthsChipCarousel