import React from 'react'
import './Feature.css'
import NavBar from '../../components/NavBar/NavBar'
import lockSvg from '../../assets/images/lock.svg'
import okSvg from '../../assets/images/done.svg'
import certiSvg from '../../assets/images/certificate.svg'
import {   useDispatch, useSelector } from "react-redux";
import { handleHome, handleProduct, handleMenuAboutUs, handleMenuFeatures, toggleDropdown } from "../../redux/handleMenu/handleMenuSlice";
import { useNavigate } from "react-router-dom"
import closeIcon from '../../assets/icons/close.png';
const Feature = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menuValue = useSelector((state) => state.handleMenu.menuValue);
  const dropdownVisible = useSelector((state) => state.handleMenu.dropdownVisible);
  return (
    <div className='featuresBaseContainer'>
      <div >
        <NavBar />
      </div>
      {dropdownVisible && (
        <div className="dropdownMenu">
          <img
            src={closeIcon}
            style={{
              width: "20px", height: "20px", top: "-200px", display: 'flex', position: "relative",
              right: "-150px"
            }}
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
          
          <p onClick={() => {
            // dispatch(handleMenuMore('4'));
            navigate("/contact");
            dispatch(toggleDropdown())
          }}>Contact Us</p>

        </div>
      )}
      <div  className='featuresGridBox'>
          <div>
            <img src={lockSvg} alt="lockSvg.svg" width="100" height="100" color='#fc9f13' />
            <h1>
              WORLD CLASS
              IMPORTED MACHINERY</h1>
            <p>Only the Bests</p>
          </div>
          <div>
            <img src={okSvg} alt="ok.svg" width="100" height="100" color='#fc9f13' />
            <h1>
              FIRST-RATE MATERIALS
            </h1>
            <p> How We Operate</p>
          </div>
        
          <div>
            <img src={certiSvg} alt="certiSvg.svg" width="100" height="100" color='#fc9f13' />
            <h1>
            QUALITY TESTING LAB

            </h1>
            <p> Guaranteed Excellence</p>
          </div> 
          <div>
            <img src={okSvg} alt="ok.svg" width="100" height="100" color='#fc9f13' />
            <h1>
              FIRST-RATE MATERIALS
            </h1>
            <p> How We Operate</p>
          </div>
          <div>
            <img src={certiSvg} alt="certiSvg.svg" width="100" height="100" color='#fc9f13' />
            <h1>
            DEDICATED DESIGN TEAM
           

            </h1>
            <p>  Creating Products</p>
          </div> 
      </div>
      
    </div>
  )
}

export default Feature