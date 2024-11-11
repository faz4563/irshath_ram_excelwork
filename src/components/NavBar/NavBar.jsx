import React from 'react'
import './NavBar.css'
import logo from '../../assets/images/logo.png'

const NavBar = () => {
    return (
        <div className='navBarBaseContainer laptop: text-sm font-mono'>
            <img src={logo} className=' ' />
            <div className="actions text-nano ">
                <p onClick={() => { }}>Home</p>
                <p onClick={() => { }}>Products</p>
                <p onClick={() => { }}>About Us</p>
                <p onClick={() => { }}>More</p>
                <p onClick={() => { }}>+91 9003139000</p>
                <p onClick={() => { }}>Contact Us</p>
                <button onClick={() => { }}> Get In Touch</button>
            </div>
        </div>
    )
}

export default NavBar