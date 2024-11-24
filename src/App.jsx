import NavBar from "./components/NavBar/NavBar"
import './App.css'
import img1 from './assets/images/img1.jpg'
import img2 from './assets/images/img3.jpg'
import img3 from './assets/images/img2.jpg'
import img4 from './assets/images/img9.png'
import img5 from './assets/images/img6.png';
import img6 from './assets/images/img4.png';
import img7 from './assets/images/img5.jpg';
import img9 from './assets/images/img7.png';
import img10 from './assets/images/img8.png';
import Footer from "./components/Footer/Footer"

function App() {
  sessionStorage.setItem("menuValue", "0")
  return (
    <div className="homeContent">
      <div className="homeNavbar">
        <NavBar />
      </div>
      <div className="homePart1">
        <div className="homeRight" >
          <h1 style={{ textAlign: "center" }}>
            INTERPACK INDUSTRIES</h1>
          <p>
            PIONEERS OF CORRUGATED BOARDS AND BOXES - <span style={{
              textDecoration: "underline",
              fontWeight: "600"
            }}>ISO 9001:2015 Certified Company.</span>
          </p>
          <p>
            At Interpack Industries, Quality is our main goal. Regardless of what kind of Packaging you're searching for, we're focused on bringing you precisely what you need, when you need it. Our clients love working with us since we produce top notch Boxes with a particularly quick turnaround.
          </p>
        </div>
        <div className="homeLeft" >
          <img src={img1} alt="img1" />
        </div>
      </div>
      <div className="homePart2">
        <div>
          <img src={img2} alt="img2.jpg"
            style={{
              height: '400px',
            }} />
          <h5>BOXES</h5>
          <ul style={{ listStyle: "none", justifyItems: "center" }}>
            <li> REGULAR SLOTTED BOXES</li>
            <li>OVERLAP BOXES</li>
            <li>FLAP GLUED BOXES</li>
            <li>STITCHED BOXES</li>
            <li>TRAY TYPE BOXES</li>
            <li>LOCK TYPE BOXES</li>
          </ul>
        </div>

        <div>

          <img src={img3} alt="img3.jpg"
            style={{
              height: '400px',
            }} />
          <h5>CORRUGATED BOARDS</h5>
          <ul style={{ listStyle: "none", justifyItems: "center" }}>
            <li> 5 PLY BOARDS</li>
            <li>3 PLY BOARDS</li>
            <li>HIGH GSM BOARDS</li>
            <li>PLAIN BOARDS</li>
            <li>CENTER SLIT BOARDS</li>
            <li>CREASING BOARDS</li>
          </ul>
        </div>

      </div>
      <div className="homePart3">
        <div>
          <img src={img4} alt="img4.jpg"
            style={{
              height: '400px',
            }} />
          <h5>FITMENTS</h5>
          <ul style={{ listStyle: "none", justifyItems: "center" }}>
            <li> LENGTH PARTITIONS</li>
            <li>WIDTH PARTITIONS</li>
            <li>LAYERED PADS</li>
            <li>INTERIOR INSERTS</li>
          </ul>
        </div>
        <div>
          <img src={img5} alt="img5.jpg"
            style={{
              height: '400px',
            }} />
          <h5>BOARD CONFIGURATIONS</h5>
          <ul style={{ listStyle: "none", justifyItems: "center" }}>
            <li>C FLUTE SINGLE WALL</li>
            <li>B FLUTE SINGLE WALL</li>
            <li>E FLUTE SINGLE WALL</li>
            <li>BC FLUTE DOUBLE WALL</li>
            <li>CE FLUTE DOUBLE WALL</li>
            <li>BE FLUTE DOUBLE WALL</li>
          </ul>

        </div>
      </div>
      <div className="homePart4">
        <img src={img9} style={{ width: "450px", height: "400px" }} alt="img9" />
        <div>
          <h1>
            CUSTOMIZATION
          </h1>
          <p>
            We Customize Boxes based on the Clients requirement. We etch out a solution with our dedicated design Team and bring out a Product that suits the Customer.
          </p>
        </div>
        <img src={img10} style={{ width: "450px", height: "400px" }} alt="img10" />
        <div>
          <h1>
            IN TIME DELIVERY
          </h1>
          <p>
            Situated ideally in the Industrial Hub of The City, We provide In time Delivery not only in the City but also to Neighbouring States.
          </p>
        </div>
      </div>
      <div className="homePart4">
        <div>
          <h1>
            QUALITY ASSESSMENT
          </h1>
          <p>
            Our Quality Assurance Team makes sure that no item goes out of the Factory without Periodical Checks.
          </p>
        </div>
        <img src={img6} style={{ width: "400px", height: "400px" }} alt="img6" />

        <div >
          <h1>
            STORAGE
          </h1>
          <p>
            Our Warehouse with an Expanse of 50,000 Sq.ft aids in providing adequate Storage and clean maintenance of the Product to the consumer when and where ever required.
          </p>
        </div>
        <img src={img7} style={{ width: "400px", height: "400px" }} alt="img7" />
      </div>
      <Footer />
    </div>
  )
}

export default App
