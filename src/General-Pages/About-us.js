import React from 'react'
import Navigation from '../Components/Navigation'
import "../General-Pages/GeneralPagesStyles.css"
import AboutusBanner from "../images/Aboutusbanner.png"

const AboutUs = () => {
  return (
    <>  
        <Navigation/>
        <div className='AboutPage'>
          <div className='AboutBanner'>
            <div className='BannerTxt'>
             <h3>
              Personal Finance Management made EASY
             </h3>
            </div>
            <div className='BannerImg'>
             <img src={AboutusBanner} alt ="banner"/>
            </div>
          </div>
          <div className="AboutTxt">
            
          </div>
        </div>
    </>
  )
}

export default AboutUs