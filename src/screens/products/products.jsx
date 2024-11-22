import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './Products.css'

import img10 from '../../assets/images/img10.jpg'
import img11 from '../../assets/images/img11.jpg'
import img12 from '../../assets/images/img12.jpg'
import img13 from '../../assets/images/img13.png'
import img16 from '../../assets/images/img16.jpg'
import boxLogo from '../../assets/images/box.svg'
import Footer from '../../components/Footer/Footer'
const Products = () => {
  
  return (
    <div className='productBaseContainer'>
      <div style={{ display: "flex", position: "relative" }}>
        <NavBar />
      </div>
      <div>
        <img src={img13} alt="img13.png" style={{ width: "100%" }} />
        <h1 style={{
        }}>
          BOX - SIZING
        </h1>
      </div>
      <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center", boxSizing: "border-box",flexWrap:"wrap" }}>
        <div className='gridBox'>
          <div>
            <img src={boxLogo} alt="boxLogo.svg" width="100" height="100" color='#fc9f13' />
            <h1>SHIPPER CARTONS</h1>
          </div>

          <div >
            <img src={boxLogo} alt="boxLogo.svg" width="100" height="100" color='#fc9f13' />
            <h1>FOOD BOXES
            </h1>
          </div>
          <div>
            <img src={boxLogo} alt="boxLogo.svg" width="100" height="100" color='#fc9f13' />
            <h1>E-COMMERCE/RETAIL BOXES</h1>
          </div>
          <div>
            <img src={boxLogo} alt="boxLogo.svg" width="100" height="100" color='#fc9f13' />
            <h1>DISTILLERY BOXES</h1>
          </div>
          <div>
            <img src={boxLogo} alt="boxLogo.svg" width="100" height="100" color='#fc9f13' />
            <h1>PRINTED CARTONS</h1>
          </div>
          <div>
            <img src={boxLogo} alt="boxLogo.svg" width="100" height="100" color='#fc9f13' />
            <h1>DIE CUT/SELF LOCKING CARTONS</h1>
          </div> 
        </div>
      </div>
      <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center", boxSizing: "border-box", backgroundColor: "#f4f4f4", flexDirection: 'column',flexWrap:"wrap" }}>
        <div style={{ alignSelf: "center", padding: "60px 0px", fontSize: "32px", fontWeight: "bold", textDecorationLine: "underline", color: "#fc9f13",flexWrap:"wrap" }}>
          <h1>
            BOX MAKING MACHINERY</h1>
        </div>
        <div className='gridBox2'>
          <div>
            <img src={img12} alt="img12.jpg" />
            <h1>FLEXO PRINTING</h1>
          </div> 
          <div >
            <img src={img11} alt="img12.jpg" />
            <h1>AUTO GLUING</h1>
          </div>  
        </div>
        <div className='gridBox2'>
          <div>
            <img src={img10} alt="img10.jpg" />
            <h1>AUTO STITCHING</h1>
          </div> 
          <div > 
            <img src={img16} alt="img16.jpg" />
            <h1>AUTO BUNDLING
            </h1>
          </div> 
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Products