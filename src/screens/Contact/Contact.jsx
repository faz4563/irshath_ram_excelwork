import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './Contact.css'
const Contact = () => {
  return (
    <div className='contactBaseContainer'>
      <div className='contactNavBar'><NavBar /></div>

      <div className='contactBodyContainer'>
        <div  >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.3030775891402!2d80.1616865745511!3d13.268991108289539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527f851127e95d%3A0xca41668eb49a7967!2sInterpack%20Industries!5e0!3m2!1sen!2sin!4v1733217351497!5m2!1sen!2sin"

          />

        </div>
        <div>
          QWERTYUIOP
        </div>
      </div>
    </div>
  )
}

export default Contact