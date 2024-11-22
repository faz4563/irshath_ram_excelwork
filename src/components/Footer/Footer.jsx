import React from 'react'
import './Footer.css'
import fblogo from '../../assets/icons/Facebook.png'
import twitterlogo from '../../assets/icons/Twitter.png'
import linkedInlogo from '../../assets/icons/LinkedIn.png'
const Footer = () => {
  return (
    <div className='footerBaseContainer'>
      <div>
        <a href="https://www.facebook.com/wix" target="_blank" rel="noopener noreferrer">
          <img src={fblogo} alt="fblogo.png" />
        </a>
        <a href="https://x.com/Wix" target='_blank' rel="noopener noreferrer">
          <img src={twitterlogo} alt="Twitter.png" />
        </a>
        <a href="https://x.com/Wix" target='_blank' rel="noopener noreferrer">
          <img src={linkedInlogo} alt="LinkedIn.png" />
        </a>
      </div>
      <div>
        <div></div>
      </div>
      <div>©2021 by Interpack Industries- An SMT Paper Group</div>
    </div>
  )
}

export default Footer