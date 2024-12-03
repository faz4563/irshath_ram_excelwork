import React from 'react';
import './NavBar.css';
import logo from '../../assets/images/logo.png';
import { useDispatch, useSelector } from "react-redux";
import { handleHome, handleProduct, handleMenuAboutUs, handleMenuFeatures, toggleDropdown } from "../../redux/handleMenu/handleMenuSlice";
import { useNavigate } from 'react-router-dom';

import menuIcon from '../../assets/icons/menu.png';
const NavBar = () => {
    const dispatch = useDispatch();
    const menuValue = useSelector((state) => state.handleMenu.menuValue); const dropdownVisible = useSelector((state) => state.handleMenu.dropdownVisible);

    const navigate = useNavigate();

    return (
        <div className='navBarBaseContainer laptop: text-sm font-mono'>
            <img src={logo} alt="Logo" />
            

            <div className="mobileMenuButton">
            <img 
                src={menuIcon}
                onClick={() => {
                    dispatch(toggleDropdown())
                }
                }>

            </img>
            </div>
            <div className="actions text-nano">
                <p
                    style={{ backgroundColor: menuValue === "0" ? " rgb(199, 255, 171)" : null, borderRadius: '5px' }}
                    onClick={() => {
                        dispatch(handleHome('0'));
                        navigate("/");
                        console.log(menuValue);
                    }}>Home</p>
                <p
                    style={{ backgroundColor: menuValue === "1" ? " rgb(199, 255, 171)" : null, borderRadius: '5px' }}
                    onClick={() => {
                        dispatch(handleProduct('1'));
                        navigate("/products");
                    }}>Products</p>
                <p
                    style={{ backgroundColor: menuValue === "2" ? " rgb(199, 255, 171)" : null, borderRadius: '5px' }}
                    onClick={() => {
                        dispatch(handleMenuAboutUs('2'));
                        navigate("/about");
                    }}>About Us</p>
                <p
                    style={{ backgroundColor: menuValue === "3" ? " rgb(199, 255, 171)" : null, borderRadius: '5px' }}
                    onClick={() => {
                        dispatch(handleMenuFeatures('3'));
                        navigate("/feature");
                    }}>Features</p>
                <p onClick={() => { }}>+91 9003139000</p>
                <p onClick={() => {
                    dispatch(handleMenuMore('4'));
                    navigate("/contact");
                }}>Contact Us</p>

                <button onClick={() => { }}>Get In Touch</button>


            </div>


        </div>
    );
}



export default NavBar;
