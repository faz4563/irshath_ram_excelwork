import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './About.css'

import img22 from '../../assets/images/img22.jpg'
import img21 from '../../assets/images/img21.jpg'
import img17 from '../../assets/images/img17.jpg'
import img18 from '../../assets/images/img18.jpg'
import img19 from '../../assets/images/img19.jpg'
import img20 from '../../assets/images/img20.jpg'
import Footer from '../../components/Footer/Footer'
import {   useDispatch, useSelector } from "react-redux";
import { handleHome, handleProduct, handleMenuAboutUs, handleMenuFeatures, toggleDropdown } from "../../redux/handleMenu/handleMenuSlice";
import { useNavigate } from "react-router-dom"

import closeIcon from '../../assets/icons/close.png';
const About = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menuValue = useSelector((state) => state.handleMenu.menuValue);
  const dropdownVisible = useSelector((state) => state.handleMenu.dropdownVisible);
  return (


    <div className="aboutBaseContainer">
      
      <div>
        
      <div><NavBar />
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
            }}>Features</p>
          
          <p onClick={() => {
            // dispatch(handleMenuMore('4'));
            navigate("/contact");
            dispatch(toggleDropdown())
          }}>Contact Us</p>

        </div>
      )}
      </div>
       
      
       
        <h1>ABOUT US</h1>
        <div >
          <img src={img22} alt="img22.png" />
          <div > 
            <ul className='ulist'>
              <li>Interpack Industries is a Packaging company capable of producing more than 2 Million Corrugated Boxes/Month. We are an ISO 9001-2015 certified company with Quality Assurance  and customer focused systems.</li>
              <li>Equipped with state of the art technology driven Machinery, The company is capable of producing cartons not only with huge quantities but also with stupendous quality.</li>
              <li>Quality is assured right from qualitative analysis of Raw Materials to the finished Boxes with several checks.</li>
              <li>Located inside a 30 Acre Paper Industrial Belt consisting of 3 Paper Mills right next to the Facility, Interpack industries is strategically located and has the location advantage like no other competitor across Chennai.</li>
              <li>Our vast 50,000 Sq.ft Warehouse helps us to store and safeguard the cartons until shipped and our dispatch and logistics team provide hassle free shipping until the customers destination.</li>
              <li>Interpack Industries is Part of <a style={{ cursor: "pointer", textDecorationLine: "underline" }} onClick={() => {
                window.open('https://smtpaper.com/')
              }}><b>SMT Paper Group</b></a>, who are the pioneers of Paper Distribution all over India. The group has been a part of the Industry for more than 35 Years and distributes Kraft paper from all Paper Mills Pan India to all the Leading Corrugators of the Country.</li>
            
            </ul>
  
            <button className='smtBtn' onClick={() => { window.open('https://smtpaper.com/') }}>SMT PAPER GROUP</button>
          
          </div>
        </div>

        <div>
          <img src={img21} alt="img.jpg" />
          <h1>INDUSTRIES WE SERVE</h1>
        </div>
        <div>
          <div>
            <img src={img17} alt="img.jpg" />
          </div>
          <div>
            <div><h1>
              FOOD AND DAIRY
            </h1>
              <p>
                Our Clientele includes a variety of Companies From the Food and Dairy Sector. We have been supplying cartons with reliability and Sustainability.
              </p></div>
          </div>
        </div>
        <div>
          <div>
            <img src={img18} alt="img.jpg" />
          </div>
          <div>
            <div><h1>
              E-COMMERCE AND LOGISITICS
            </h1>
              <p>
                With our premises located in the Business Hub of Chennai surrounded by MNC Warehouses, We are known providing in Time Deliveries of our Cartons to the Leading Logistics and E-Commerce Giants of the Country.
              </p></div>
          </div>
        </div>


        <div>
          <div>
            <img src={img19} alt="img.jpg" />
          </div>
          <div>
            <div><h1>
              DISTILLERIES AND FMCG
            </h1>
              <p>
                With our State of the Art Machinery, We have been serving to Distilleries and FMCG Companies who require huge quantities on a daily basis.
              </p></div>
          </div>
        </div>
        <div>
          <div>
            <img src={img20} alt="img.jpg" />
          </div>
          <div>
            <div><h1>
              AUTOMOBILE AND OEM
            </h1>
              <p>
                Interapack Industries has also been manufacturing Specialized Boxes to Automobile and OEM Industry who require a specific Grade and Strength in Boxes.
              </p></div>
          </div>
        </div>
        <Footer />
      </div>
      
    </div>


  )
}

export default About