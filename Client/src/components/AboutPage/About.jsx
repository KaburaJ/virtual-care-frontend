import React from "react";
import './About.css'
import founder1 from '../images/pexels-daniel-xavier-1239291.jpg'
import logo from '../images/logo-virtual.png'
import { useNavigate } from "react-router-dom";
import twitterpng from '../images/tw-removebg-preview.png'
import instagrampng from '../images/ig-removebg-preview.png'
import facebookpng from '../images/fb-removebg-preview.png'

export const AboutPage = () => {
    const navigate = useNavigate()
    const handleLandingPageNavigation = () => {
        navigate('/')
    }
    return(
        <div className="about-container">
            <div className="header-section">
            <img src={logo} onClick={handleLandingPageNavigation} alt='VirtualCare'></img>
            <h1 className="about-header">About Page</h1>
            </div>
            <div className="App-info">
            <p>We cover a broad range of specialisms. From diabetes, ostomy, continence and respiratory care, to medical nutrition, wound care, infusion therapy and medical and facility devices.
              Improving experiences of patients, providers and caregivers is key.
              We take care of their daily needs. From medical devices and supplementary care to education and 24-hour support.
              We deliver products directly to the home as well as to hospitals, nursing homes and other healthcare institutions.</p>
            </div>
            <h1 className="founders-header">Our founders</h1>
            <div className="founders-pics">
        <img src={founder1}></img>
        <img src={founder1}></img>
        <img src={founder1}></img>
        <img src={founder1}></img>
        <img src={founder1}></img>
        <img src={founder1}></img>
        <img src={founder1}></img>
        <img src={founder1}></img>
            </div>
            <footer>
        <div class="footer-content">
          <div className='footer-definition'>
            <img src={logo} alt='VirtualCare'></img>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>
          </div>

          <div class="social-links">
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
          <div class="contact-info">
            <p><span class="location-icon">&#x1F4CD;</span> 123 Rongai, Kajiado, Kenya</p>
            <p><span class="location-icon">&#x260E;</span> (254) 456-7890-199</p>
            <p><span class="location-icon">&#x2709;</span> info@vitualcare.com</p>
            <p className="copy-tag">&copy; 2023 Virtual Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
        </div>
    )
}