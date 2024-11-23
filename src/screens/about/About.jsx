import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './About.css'

import img22 from '../../assets/images/img22.jpg'
const About = () => {
  return (
    <div className='aboutBaseContainer'>
      <div  
      
      // style={{ display: "flex", position: "relative",marginTop:"0px" }}  
      ><NavBar /></div  >
     <div> <img src={img22} alt="img.jpg" /></div>

    </div>

  )
}

export default About