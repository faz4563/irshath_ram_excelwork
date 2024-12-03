import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './Products.css'

import img10 from '../../assets/images/img10.jpg'
import img11 from '../../assets/images/img11.jpg'
import img12 from '../../assets/images/img12.jpg'
import img13 from '../../assets/images/img13.png'
import img16 from '../../assets/images/img16.jpg'
import boxLogo from '../../assets/images/box.svg'

import closeIcon from '../../assets/icons/close.png';
import Footer from '../../components/Footer/Footer'
import { useDispatch, useSelector } from "react-redux";
import { handleHome, handleProduct, handleMenuAboutUs, handleMenuFeatures, toggleDropdown } from "../../redux/handleMenu/handleMenuSlice";
import { useNavigate } from "react-router-dom"
const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menuValue = useSelector((state) => state.handleMenu.menuValue);
  const dropdownVisible = useSelector((state) => state.handleMenu.dropdownVisible);

  return (
    <div className='productBaseContainer'>
      <div >
        <NavBar />
      </div>
      {dropdownVisible && (
        <div className="dropdownMenu">
          <img
            src={closeIcon}
            style={{width:"20px",height:"20px", top:"-200px",display:'flex',position:"relative",
              right:"-150px"}}
            onClick={() => {
              dispatch(toggleDropdown())
            }
            }></img>
          <p
            style={{ backgroundColor: menuValue === "0" ? " rgb(199, 255, 171)" : null, borderRadius: '5px' }}
            onClick={() => {
              dispatch(handleHome('0'));
              navigate("/");
              dispatch(toggleDropdown())
              console.log(menuValue);
            }}>Home</p>
          <p
            style={{ backgroundColor: menuValue === "1" ? " rgb(199, 255, 171)" : null, borderRadius: '5px' }}
            onClick={() => {
              dispatch(handleProduct('1'));
              navigate("/products");
              dispatch(toggleDropdown())
            }}>Products</p>
          <p
            style={{ backgroundColor: menuValue === "2" ? " rgb(199, 255, 171)" : null, borderRadius: '5px' }}
            onClick={() => {
              dispatch(handleMenuAboutUs('2'));
              navigate("/about");
              dispatch(toggleDropdown())
            }}>About Us</p>
          <p
            style={{ backgroundColor: menuValue === "3" ? " rgb(199, 255, 171)" : null, borderRadius: '5px' }}
            onClick={() => {
              dispatch(handleMenuFeatures('3'));
              navigate("/feature");
              dispatch(toggleDropdown())
            }}>Features</p>
          <p onClick={() => { }}>+91 9003139000</p>
          <p onClick={() => {
            dispatch(handleMenuMore('4'));
            navigate("/contact");
            dispatch(toggleDropdown())
          }}>Contact Us</p>

        </div>
      )}
      <div>
        <img src={img13} alt="img13.png" style={{ width: "100%" }} />
        {/* <h1 style={{
                                }}>
                                  BOX - SIZING
                                </h1> */}
      </div>
      <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center", boxSizing: "border-box", flexWrap: "wrap" }}>
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
      <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center", boxSizing: "border-box", backgroundColor: "#f4f4f4", flexDirection: 'column', flexWrap: "wrap" }}>
        <div style={{ alignSelf: "center", padding: "60px 0px", fontSize: "32px", fontWeight: "bold", textDecorationLine: "underline", color: "#fc9f13", flexWrap: "wrap" }}>
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
      <Footer />
    </div>
  )
}

export default Products