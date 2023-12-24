import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import Navbar from '../navbar/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faArrowRight, faBlog, faDashboard, faVideo } from '@fortawesome/free-solid-svg-icons';
import twitterpng from '../images/tw-removebg-preview.png'
import instagrampng from '../images/ig-removebg-preview.png'
import facebookpng from '../images/fb-removebg-preview.png'
import logo from '../images/logo-virtual.png'
import { Link } from 'react-router-dom';
import axios from 'axios';



function Home(text) {
  const [blog, setBlog] = useState("")
  const targetElementRef = useRef(null);

  const readText = (text) => {
    if (targetElementRef.current) {
      text = targetElementRef.current.textContent;
    }
  };

  const fetchBlogPosts =async () =>{
    const data = await axios.get('https://api.nhs.uk/pregnancy?api-version=1.0/subscription-key=d2e032b50d014a7d903349a3ff57df5c')

    console.log(data);
  }

  // useEffect(() => {
  //   fetchBlogPosts()
  // }, [])
  

  return (
    <div className="logged-in-homepage" ref={targetElementRef}>
      <header>
        <Navbar />
      </header>
      <div className='home'></div>
      <main className='main'>
        <section className="dashboard">
          <div className="key-metrics">
            <div className="metric">
              <Link to="/profile" style={{ textDecoration: "none" }}><h2> <FontAwesomeIcon icon={faDashboard} style={{ paddingRight: ".4em", marginLeft: "-.6em" }} /> Your Dashboard</h2></Link>
              <FontAwesomeIcon className='angle-icon' icon={faAngleDoubleRight} />
            </div>
            <div className="metric">
              <Link to='/live' style={{ textDecoration: "none" }}><h2><FontAwesomeIcon icon={faVideo} style={{ paddingRight: ".4em", marginLeft: "-.6em" }} />  Find Live Sessions</h2></Link>
              <FontAwesomeIcon icon={faAngleDoubleRight} className='angle-icon' />
            </div>
            <div className="metric" style={{ backgroundColor: "#006983" }}>
              <Link to='/translate'><h2> <FontAwesomeIcon icon={faBlog} style={{ paddingRight: ".4em", marginLeft: "-.6em" }} />  Chat with ViRty</h2></Link>
              <FontAwesomeIcon icon={faAngleDoubleRight} className='angle-icon' />
            </div>
          </div>
        </section>
      </main>
      <section className="info">
      </section>
      <div className="blog-cards-1" style={{ marginTop: ".5em", backgroundColor: "white", paddingTop: ".5em", paddingBottom: "5em" }}>
        <h1 className="blog-1-header" style={{ paddingTop: ".1em", marginLeft: "1.5em" }}>Latest Blog Posts</h1>
        <section className="cards-wrapper-1">
          <div className="card-grid-space" >
            <a className="card one" href="#" style={{ paddingLeft: ".5em", marginLeft: ".5em" }}>
              <div>
                <h1>Ectopic Pregnancy</h1>
                <p>This article sums up what you need to know about ectopic pregnancies</p>
                <div className="tags">
                  <div className="tag">Ectopic</div>
                </div>
              </div>
            </a>
          </div>
          <div className="card-grid-space">
            <a className="card one" href="#">
              <div>
                <h1>Diabetic and Pregnant?</h1>
                <p>Diabetes in pregnancy need not be a death sentence. Join me ...</p>
                <div className="tags">
                  <div className="tag">Diabetes</div>
                </div>
              </div>
            </a>
          </div>
          <div className="card-grid-space">
            <a className="card two" href="https://codetheweb.blog/2017/10/09/basic-types-of-html-tags/">
              <div>
                <h1>Baby Blues</h1>
                <p>Learn about baby blues, a topic often talked about in whispers.</p>
                <div className="tags">
                  <div className="tag">Baby Blues</div>
                </div>
              </div>
            </a>
          </div>
          <div className="card-grid-space" >
            <a className="card three" href="https://codetheweb.blog/2017/10/14/links-images-about-file-paths/" >
              <div>
                <h1>Surrogacy- The Good, Bad and Ugly</h1>
                <p>Do you know what surrogacy is? What is your opinion on it? Join us...</p>
                <div className="tags">
                  <div className="tag">Surrogacy</div>
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>
      <div className="blog-cards" style={{ marginTop: ".5em", backgroundColor: "#E6F0F2", paddingTop: ".5em", paddingBottom: "5em" }}>
        <h1 style={{ paddingTop: ".1em", marginLeft: "1.5em" }}>Latest Blog Posts</h1>
        <section className="cards-wrapper">
          <div className="card-grid-space" >
            <a className="card one" href="#" style={{ paddingLeft: ".5em", marginLeft: ".5em" }}>
              <div>
                <h1>Ectopic Pregnancy</h1>
                <p>This article sums up what you need to know about ectopic pregnancies</p>
                <div className="tags">
                  <div className="tag">Ectopic</div>
                </div>
              </div>
            </a>
          </div>
          <div className="card-grid-space">
            <a className="card one" href="#">
              <div>
                <h1>Diabetic and Pregnant?</h1>
                <p>Diabetes in pregnancy need not be a death sentence. Join me ...</p>
                <div className="tags">
                  <div className="tag">Diabetes</div>
                </div>
              </div>
            </a>
          </div>
          <div className="card-grid-space">
            <a className="card two" href="https://codetheweb.blog/2017/10/09/basic-types-of-html-tags/">
              <div>
                <h1>Baby Blues</h1>
                <p>Learn about baby blues, a topic often talked about in whispers.</p>
                <div className="tags">
                  <div className="tag">Baby Blues</div>
                </div>
              </div>
            </a>
          </div>
          <div className="card-grid-space" >
            <a className="card three" href="https://codetheweb.blog/2017/10/14/links-images-about-file-paths/" >
              <div>
                <h1>Surrogacy- The Good, Bad and Ugly</h1>
                <p>Do you know what surrogacy is? What is your opinion on it? Join us...</p>
                <div className="tags">
                  <div className="tag">Surrogacy</div>
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>
      <footer >
        <div className="footer-content">
          <div className='footer-definition'>
            <img src={logo} alt='VirtualCare'></img>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
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
            <p><span className="location-icon">&#x1F4CD;</span> 123 Rongai, Kajiado, Kenya</p>
            <p><span className="location-icon">&#x260E;</span> (254) 456-7890-199</p>
            <p><span className="location-icon">&#x2709;</span> info@vitualcare.com</p>
            <p className="copy-tag" style={{ marginLeft: "-2em" }}>&copy; 2023 Virtual Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
