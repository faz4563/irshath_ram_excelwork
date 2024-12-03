import React from 'react'
import './Feature.css'
import NavBar from '../../components/NavBar/NavBar'
import lockSvg from '../../assets/images/lock.svg'
import okSvg from '../../assets/images/done.svg'
import certiSvg from '../../assets/images/certificate.svg'
const Feature = () => {
  return (
    <div className='featuresBaseContainer'>
      <div >
        <NavBar />
      </div>
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