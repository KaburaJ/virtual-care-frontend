import React, { useRef } from 'react'
import './LandingPage.css'
import testimony1 from '../images/pexels-nandhu-kumar-1586257.jpg'
import testimony2 from '../images/pexels-daniel-xavier-1239291.jpg'
import testimony3 from '../images/pexels-gustavo-fring-3984373.jpg'
import twitterpng from '../images/tw-removebg-preview.png'
import instagrampng from '../images/ig-removebg-preview.png'
import facebookpng from '../images/fb-removebg-preview.png'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/logo-virtual.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faGear, faHospital, faHouse, faQuoteLeft, faQuoteRight, faUserFriends } from '@fortawesome/free-solid-svg-icons'


export const LandingPage = () => {
  const navigate = useNavigate()
  const handleAbout =() =>{
    navigate('/about')
  }

  return (
    <div className='landing-page'>
      <header className='app-header'>
        <img src={logo} alt='VirtualCare'></img>
        <div className='header-components'>
          <h3>News</h3>
          <h3 onClick={handleAbout}>About</h3>
          <h3>Contact</h3>
          <h3 style={{ letterSpacing: "0" }}>Demo</h3>
        </div>
        <div className='nav-button'>
          <Link to='/sign-up' className='link'>
            <button className='demo-button' style={{ width: "10em" }}>Get Started</button>
          </Link>
        </div>
      </header>
      <div className='value-container'>
        <div className='value-proposition'>
          <div className='value-card'>
            <h4>Healthcare and homecare partner</h4>
            <h3>Providing value beyond medical products, devices and services</h3>
            <p>Physical activity and exercise in pregnancy are associated with minimal risks and have been shown to benefit most women, although some modification to exercise routines may be necessary because of normal anatomic and physiologic changes and fetal requirements. VirtualCare seeks to bring physical exercise remotely to pregnant mothers regardless of ethnicity, age or stage of pregnancy. There's something for everyone!
            </p>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div>
        <div className='mission-container'>
          <div className='mission-image'>
          </div>
          <div className='mission-content'>
            <h1>Helping patients to live higher quality lives</h1>
            <p>We cover a broad range of specialisms. From diabetes, ostomy, continence and respiratory care, to medical nutrition, wound care, infusion therapy and medical and facility devices.
              Improving experiences of patients, providers and caregivers is key.
              We take care of their daily needs. From medical devices and supplementary care to education and 24-hour support.
              We deliver products directly to the home as well as to hospitals, nursing homes and other healthcare institutions.
            </p>
            <div className='mission-key-points'>
              <div className='key-points'>
                <h3>Our strategic focus:</h3>
                <ul style={{ display: "flex", flexDirection: "column", gap:"1em", marginLeft:"-2em"}}>
                  <div style={{ display: "flex", flexDirection: "row", gap: "1em" }}>
                    <FontAwesomeIcon icon={faHouse} />
                    <li>
                      Homecare market
                    </li>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", gap: "1em" }}>
                    <FontAwesomeIcon icon={faHospital} />
                    <li>
                      Hospital solutions
                    </li>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", gap: "1em" }}>
                    <FontAwesomeIcon icon={faBook} />
                    <li>
                      Total product assortment
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            <button className='read-more-button'>Read More</button>
          </div>
        </div>
        
        <div className='testimonies'>
          <h1>Stories</h1>
          <div className='testimony-cards'>
            <div className='testimony-card'>
              <img src={testimony1} alt='testimony-1'></img>
              <h3>Sarah Maputo</h3>
              <h4>Rongai, KE</h4>
              <div className='testimony'>
                <p>
                  <FontAwesomeIcon style={{ color:"#EC417A", position: "absolute", marginTop: "-2em" }} icon={faQuoteLeft} />
                  Using the virtual maternity care application was a game-changer for me during my pregnancy journey.
                  From the comfort of my home, I had access to prenatal classes, expert advice, and support groups.
                  The app's timely reminders for appointments and medications kept me on track.
                  It felt like having a personal guide every step of the way.
                  The virtual consultations with healthcare professionals were convenient and reassuring.
                  I can't imagine going through this experience without the app's support.
                </p>
              </div>
            </div>
            <div className='testimony-card-2'>
              <img src={testimony3} alt='testimony-1'></img>
              <h3>Hannah Zawadi</h3>
              <h4>Wetithie, TH</h4>
              <div className='testimony'>
                <p>
                  <FontAwesomeIcon style={{ color:"#EC417A", position: "absolute", marginTop: "-2em" }} icon={faQuoteLeft} />
                  Using the virtual maternity care application was a game-changer for me during my pregnancy journey.
                  From the comfort of my home, I had access to prenatal classes, expert advice, and support groups.
                  The app's timely reminders for appointments and medications kept me on track.
                  It felt like having a personal guide every step of the way.
                  The virtual consultations with healthcare professionals were convenient and reassuring.
                  I can't imagine going through this experience without the app's support.
                </p>
              </div>
            </div>
            <div className='testimony-card'>
              <img src={testimony2} alt='testimony-1'></img>
              <h3>Ritah Smith</h3>
              <h4>Kahawa, LH</h4>
              <div className='testimony'>
                <p>
                  <FontAwesomeIcon style={{ color:"#EC417A", position: "absolute", marginTop: "-2em" }} icon={faQuoteLeft} />
                  As a healthcare professional, I highly recommend the virtual maternity care application to my patients.
                  The app's user-friendly interface and comprehensive content empower expectant mothers with knowledge about their health and well-being.
                  It enables them to track their progress, access personalized care plans, and engage with healthcare experts remotely.
                  I've witnessed firsthand how the app has improved patient engagement and compliance with prenatal care.
                  It's a remarkable tool that bridges the gap between healthcare providers and expectant families.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer style={{borderTop:".3px solid #E6F0F2"}}>
        <div className="footer-content">
          <div className='footer-definition'>
            <img src={logo} alt='VirtualCare' />
            <p>
              Your favourite maternity health fitness application for all your maternal needs. Work out, get resources and thrive using our application.
            </p>
          </div>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={facebookpng} alt="Facebook" />
              <p style={{ marginTop: ".4em" }}>Facebook</p>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={twitterpng} alt="Twitter" />
              <p style={{ marginTop: ".4em" }}>Twitter</p>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={instagrampng} alt="Instagram" />
              <p style={{ marginTop: ".4em" }}>Instagram</p>
            </a>
          </div>
          <div className="contact-info">
            <p><span className="location-icon">&#x1F4CD;</span> 123 Loitoktok, Kajiado, Kenya</p>
            <p><span className="location-icon">&#x260E;</span> (254) 456-7890-199</p>
            <p><span className="location-icon">&#x2709;</span> info@vitualcare.com</p>
            <p className="copy-tag" style={{ marginLeft: "-2em" }}>&copy; 2024 Virtual Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
