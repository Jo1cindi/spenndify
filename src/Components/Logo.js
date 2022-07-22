import React from 'react'
import LogoBlue from "../images/spenndifylogo2.png";

const Logo = () => {
  return (
    <div className='logoBox'>
     <div className='logoBlue'>
        <img src={LogoBlue} alt= 'logo'/>
        <p>spenndify</p>
     </div>
    </div>
  )
}

export default Logo