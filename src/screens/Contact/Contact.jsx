import React, { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './Contact.css'
import { useEffect } from 'react' 
import { useDispatch, useSelector } from "react-redux";
import { handleHome, handleProduct, handleMenuAboutUs, handleMenuFeatures, toggleDropdown } from "../../redux/handleMenu/handleMenuSlice";
import closeIcon from '../../assets/icons/close.png';
import { useNavigate } from "react-router-dom"
const Contact = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menuValue = useSelector((state) => state.handleMenu.menuValue);
  const dropdownVisible = useSelector((state) => state.handleMenu.dropdownVisible);

 const [isMapLoading, setMapLoading] = useState(true);
  
 useEffect(() => {
   const timer = setTimeout(() => {
    setMapLoading(false)
   }, 2000);
 
   return () => {
     clearTimeout(timer);
   }
 }, [])
 
  return (
    <div className='contactBaseContainer'>
      <div className='contactNavBar'><NavBar /></div>
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
      <div className='contactBodyContainer'>
        <div  >

          {isMapLoading === true? <h1 style={{display:"flex",justifySelf:"center"}}>GETTING GEO CO - ORDINATES</h1>:<iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.3030775891402!2d80.1616865745511!3d13.268991108289539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527f851127e95d%3A0xca41668eb49a7967!2sInterpack%20Industries!5e0!3m2!1sen!2sin!4v1733217351497!5m2!1sen!2sin"

          />}

        </div>
        <div>
          <h1>CONTACT US</h1>
          <form>
            <div>

              <label htmlFor="name">
                NAME :-
              </label>
              <input type="text" placeholder='Enter Your Name ' />
            </div>
            <div>

              <label htmlFor="email">
                EMAIL :-
              </label>
              <input type="text" placeholder='Enter Your E-MAIL ' />
            </div>
            <div>

              <label htmlFor="phone">
                PHONE :-
              </label>
              <input type="text" placeholder='Enter Your Phone Number here' />
            </div>
            <div>

              <label htmlFor="msg">
                MESSAGE :-
              </label>
              <input type="text"
                style={{ minHeight: "150px", }}
                placeholder='Enter Your Phone Number here' />
            </div>

            <input type="submit" ></input>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact