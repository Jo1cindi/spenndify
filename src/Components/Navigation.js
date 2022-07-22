import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import Logo from '../images/spenndifylogo.png';
import * as AiIcons from "react-icons/ai";


const Navigation = () => {
  // hiding the navigation bar
  const [ navOpen, setNavOpen] = useState(false);
  const toggleNav = () =>{
    setNavOpen(!navOpen)
  }

  // To detect the screen
  const [screenwidth, setScreenWidth] = useState(window.innerWidth);
  
  //function is called when the screen is shrunk or widened.
  useEffect(()=>{
    const changeWidth = ()=>{
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
  }, [])

  return (
    // Navigation bar
    <div className='navbar'>
     <div className='navlogo'>
       <img src={Logo} alt='logo'/> 
     </div>
     {
      (navOpen || screenwidth > 1024) && (
        <div className='navlinks'>
     <div className="infolinks">
      <ul>
        <li><Link to="/About-us" className='infolink'><p>About</p></Link></li>
        <li><Link to="" className='infolink'><p>Contact</p></Link></li>
        <li><Link to="" className='infolink'><p>Faq</p></Link></li>
      </ul>
     </div>
     <div className='nav-links'>
        <ul>
            <li><Link to="/Login" className='loginlink'><p>Log in</p></Link></li>
            <li><Link to="/Signup" className='signuplink'><p>Sign up</p></Link></li>
        </ul>
     </div>
     </div>
      )
     }
     <div >
          <AiIcons.AiOutlineBars fontSize="30px" className="nav-toggler" onClick={toggleNav}/>
    </div>
    </div>
  )
}

export default Navigation