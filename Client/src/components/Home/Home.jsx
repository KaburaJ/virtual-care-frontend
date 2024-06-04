import React, { useEffect, useState } from 'react';
import './Home.css';
import Navbar from '../navbar/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faDashboard, faVideo, faBlog } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import both from '../images/both.png';
import expect from '../images/expect.png';
import doc from '../images/doc.png';
import logo from '../images/logo-virtual.png';
import twitterpng from '../images/tw-removebg-preview.png';
import instagrampng from '../images/ig-removebg-preview.png';
import facebookpng from '../images/fb-removebg-preview.png';
import recover from "../images/recover.PNG"
import addNotification from 'react-push-notification'

function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [isExpectant, setIsExpectant] = useState(null);
  const [dueDate, setDueDate] = useState('');
  const [weight, setWeight] = useState(0);
  const [trimester, setTrimester] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [membershipNumber, setMembershipNumber] = useState('');

  useEffect(() => {
    const popupShown = localStorage.getItem('popupShown');
    if (!popupShown) {
      setShowPopup(true);
    }
    buttonClick()
  }, []);

  const handlePopupClose = () => {
    setShowPopup(false);
    localStorage.setItem('popupShown', 'true');
  };

  const handleExpectantSelection = (expectant) => {
    setIsExpectant(expectant);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handlePopupClose();

    if (isExpectant) {
      const pregnancyDetails = {
        DueDate: dueDate,
        StartWeight: weight,
        CurrentWeight: weight,
        Trimester: trimester
      };

      // Save to local storage
      localStorage.setItem('DueDate', dueDate);
      localStorage.setItem('StartWeight', weight);
      localStorage.setItem('CurrentWeight', weight);
      localStorage.setItem('Trimester', trimester);

      // Send data to the backend
      handlePregnancyDetails(pregnancyDetails);
    } else {
      const doctorDetails = {
        HospitalName: hospitalName,
        YearsOfExperience: yearsOfExperience,
        MembershipNumber: membershipNumber
      };

      // Save to local storage
      localStorage.setItem('HospitalName', hospitalName);
      localStorage.setItem('YearsOfExperience', yearsOfExperience);
      localStorage.setItem('MembershipNumber', membershipNumber);

      // Handle any additional logic for doctor details
    }
  };

  const handlePregnancyDetails = async (details) => {
    try {
      await axios.post('http://localhost:5003/user/pregnancy/settings', {
        UserProfileID: details.DueDate,
        UserID: details.DueDate,
        DueDate: details.DueDate,
        StartWeight: details.StartWeight,
        CurrentWeight: details.CurrentWeight,
        Bookings: details.StartWeight
      }, { withCredentials: true });
    } catch (error) {
      console.error('Submit failed:', error);
    }
  };

  const buttonClick = () => {
    addNotification({
        title: 'Warning',
        subtitle: 'Weight Update',
        message: 'Hello, mind updating your weight details? Head on over to your dashboard!',
        theme: 'darkblue',
        native: true
    });
};



  return (
    <div className="logged-in-homepage">
      <header>
        <Navbar />
      </header>
      {showPopup && (
        <div className="popup-container">
          <div className="popup">
            {isExpectant === null && (
              <div style={{ width: "400px", alignContent: "center", justifyContent: "center", alignItems: "center", paddingLeft: "25%" }}>
                <img style={{ alignItems: "center", marginLeft: "-8%", width: "300px", height: "200px", objectFit: "contain" }} src={both} alt='expectant' />
                <h2>Are you expectant?</h2>
                <div className="popup-buttons" style={{ paddingBottom: "20px", paddingLeft: "20px" }}>
                  <button onClick={() => handleExpectantSelection(true)}>Yes</button>
                  <button onClick={() => handleExpectantSelection(false)}>No</button>
                </div>
              </div>
            )}
            {isExpectant === true && (
              <form className="expectant-form" onSubmit={handleFormSubmit}>
                <img style={{ alignItems: "center", marginLeft: "3%", width: "300px", height: "200px", objectFit: "contain" }} src={expect} alt='expectant' />
                <h1 style={{ marginLeft: "15%", marginTop: "-2%" }}>Welcome Mama!</h1>
                <label>
                  Due Date:
                  <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    required
                    style={{ border: "1px solid #ccc", height: "30px" }}
                  />
                </label>
                <label>
                  Weight:
                  <input
                    type="text"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                    style={{ border: "1px solid #ccc", height: "30px" }}
                  />
                </label>
                <label>
                  Trimester:
                  <input
                    type="text"
                    value={trimester}
                    onChange={(e) => setTrimester(e.target.value)}
                    required
                    style={{ border: "1px solid #ccc", height: "30px" }}
                  />
                </label>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                  <button type="submit" style={{ backgroundColor: "#006983" }}>Submit</button>
                  <p onClick={() => handleExpectantSelection(false)}><a style={{ cursor: "pointer", paddingRight: "20px", textDecoration: "underline" }}>Not a Mama</a></p>
                </div>
              </form>
            )}
            {isExpectant === false && (
              <form className="doctor-form" onSubmit={handleFormSubmit}>
                <img style={{ alignItems: "center", marginLeft: "25%", width: "200px", height: "200px", objectFit: "contain" }} src={doc} alt='doctor' />
                <h1 style={{ marginLeft: "25%", marginTop: "-2%" }}>Welcome Doctor!</h1>
                <label>
                  Hospital Name:
                  <input
                    type="text"
                    value={hospitalName}
                    onChange={(e) => setHospitalName(e.target.value)}
                    required
                    style={{ border: "1px solid #ccc", height: "30px" }}
                  />
                </label>
                <label>
                  Experience:
                  <input
                    type="text"
                    value={yearsOfExperience}
                    onChange={(e) => setYearsOfExperience(e.target.value)}
                    required
                    style={{ border: "1px solid #ccc", height: "30px" }}
                  />
                </label>
                <label>
                  Membership Number:
                  <input
                    type="text"
                    value={membershipNumber}
                    onChange={(e) => setMembershipNumber(e.target.value)}
                    required
                    style={{ border: "1px solid #ccc", height: "30px" }}
                  />
                </label>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                  <button type="submit" style={{ backgroundColor: "#006983" }}>Submit</button>
                  <p onClick={() => handleExpectantSelection(true)}><a style={{ cursor: "pointer", paddingRight: "20px", textDecoration: "underline" }}>Not a Doctor</a></p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

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
              <Link to='/diet' style={{ textDecoration: "none" }}><h2> <FontAwesomeIcon icon={faBlog} style={{ paddingRight: ".4em", marginLeft: "-.6em" }} />Lifestyle Check</h2></Link>
              <FontAwesomeIcon icon={faAngleDoubleRight} className='angle-icon' />
            </div>
          </div>
        </section>
      </main>
      <section className="info"></section>
      <div className="blog-cards-1" style={{ marginTop: ".5em", backgroundColor: "white", paddingTop: ".5em", paddingBottom: "5em" }}>
        <h1 className="blog-1-header" style={{ paddingTop: ".1em", marginLeft: "1.5em" }}>Latest Blog Posts</h1>
        <section className="cards-wrapper-1" >
          <div className="card-grid-space">
            <a className="card one" href="https://www.healthline.com/health/parenting/dear-mastitis-we-need-to-talk#1" target="_blank" rel='noopener noreferrer' style={{ paddingLeft: ".5em", marginLeft: ".5em",backgroundImage: `url(${require('../images/mastitis.PNG')})` }}>
              <div>
                <h1>Dear Mastitis: We Need To Talk</h1>
                <p>I’m not sure why you chose today — the one day I was starting to feel like a human again after giving birth...</p>
                <div className="tags">
                  <div className="tag">Read More</div>
                </div>
              </div>
            </a>
          </div>
          <div className="card-grid-space">
            <a className="card one" style={{backgroundImage: `url(${require('../images/recover.PNG')})`}} href="https://www.healthline.com/health/postpartum-recovery-timeline" target='_blank' rel='noopener noreferrer'>
              <div>
                <h1>Your Guide to Postpartum Recovery</h1>
                <p>The first six weeks after giving birth are known as the postpartum period. This period is an intense time that requires all sorts of care for you and your baby.</p>
                <div className="tags">
                  <div className="tag">Read More</div>
                </div>
              </div>
            </a>
          </div>
          <div className="card-grid-space">
            <a className="card two" style={{backgroundImage: `url(${require('../images/clogged.PNG')})`}} href="https://www.healthline.com/health/breastfeeding/clogged-milk-duct" target='_blank' rel='noopener noreferrer'>
              <div>
                <h1>How to Identify and Clear a Clogged Milk Duct</h1>
                <p>You probably thought you’d heard it all when it comes to the joys of breastfeeding your baby. And then you feel a hard, painful lump. </p>
                <div className="tags">
                  <div className="tag">Read More</div>
                </div>
              </div>
            </a>
          </div>
          <div className="card-grid-space">
            <a className="card three" style={{backgroundImage: `url(${require('../images/poop.PNG')})`}} href="https://www.healthline.com/health/parenting/first-bowel-movement-after-labor" target='_blank' rel='noopener noreferrer'>
              <div>
                <h1>Here’s the Scoop on Your First Post-Labor Poop</h1>
                <p>When you’re expecting, here’s what no one tells you: You’re going to have three births.</p>
                <div className="tags">
                  <div className="tag">Read More</div>
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>
     
      <div className="blog-cards" style={{ marginTop: ".5em", backgroundColor: "#E6F0F2", paddingTop: ".5em", paddingBottom: "5em" }}>
        {/* <h1 style={{ paddingTop: ".1em", marginLeft: "1.5em" }}>Latest Blog Posts</h1> */}
        <section className="cards-wrapper" style={{marginTop:"50px"}}>
          <div className="card-grid-space">
          <a className="card one" href="https://www.healthline.com/health/pregnancy/ectopic-pregnancy#prevention" target="_blank" rel="noopener noreferrer" style={{ paddingLeft: ".5em", marginLeft: ".5em", backgroundImage: `url(${require('../images/ectopic.PNG')})`}}>
              <div>
                <h1>Ectopic Pregnancy</h1>
                <p>This article sums up what you need to know about ectopic pregnancies</p>
                <div className="tags">
                  <div className="tag">Read More</div>
                </div>
              </div>
            </a>
          </div>
          <div className="card-grid-space">
            <a className="card one" style={{backgroundImage: `url(${require('../images/diabetes.PNG')})`}} href="https://www.healthline.com/health/gestational-diabetes" target="_blank" rel="noopener noreferrer">
              <div>
                <h1>Diabetic and Pregnant?</h1>
                <p>Diabetes in pregnancy need not be a death sentence. Join me ...</p>
                <div className="tags">
                  <div className="tag">Read More</div>
                </div>
              </div>
            </a>
          </div>
          <div className="card-grid-space">
            <a className="card two" style={{backgroundImage: `url(${require('../images/blues.PNG')})`}} href="https://www.healthline.com/health/baby-blues" target='_blank' rel='noopener noreferrer'>
              <div>
                <h1>Baby Blues</h1>
                <p>Learn about baby blues, a topic often talked about in whispers.</p>
                <div className="tags">
                  <div className="tag">Read More</div>
                </div>
              </div>
            </a>
          </div>
          <div className="card-grid-space">
            <a className="card three" style={{backgroundImage: `url(${require('../images/surrogate.PNG')})`}} href="https://www.healthline.com/health/parenting/gestational-surrogacy" target='_blank' rel='noopener noreferrer'>
              <div>
                <h1>Surrogacy- The Good, Bad and Ugly</h1>
                <p>Do you know what surrogacy is? What is your opinion on it? Join us...</p>
                <div className="tags">
                  <div className="tag">Read More</div>
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>
      <div className="blog-cards-1" style={{ marginTop: ".5em", backgroundColor: "white", paddingTop: ".5em", paddingBottom: "5em" }}>
        <section className="cards-wrapper-1" style={{marginTop:"50px"}}>
          <div className="card-grid-space" >
            <a className="card one" href="https://www.healthline.com/health/pregnancy/heartburn-during-pregnancy" target="_blank" rel='noopener noreferrer' style={{ paddingLeft: ".5em", marginLeft: ".5em", backgroundImage: `url(${require('../images/burn.PNG')})`}}>
              <div>
                <h1>Heartburn in Pregnancy: 11 Treatments to Put Out the Fire</h1>
                <p>But this burning indigestion? Where’d that come from?</p>
                <div className="tags">
                  <div className="tag">Read More</div>
                </div>
              </div>
            </a>
          </div>
          <div className="card-grid-space">
            <a className="card one" href="https://www.healthline.com/nutrition/13-foods-to-eat-when-pregnant" target='_blank' rel='noopener noreferrer' >
              <div>
                <h1>A Guide on What to Eat During Pregnancy</h1>
                <p>While you’re pregnant, you’ll want to eat extra protein, calcium, iron, and essential vitamins. You can get these by eating...</p>
                <div className="tags">
                  <div className="tag">Read More</div>
                </div>
              </div>
            </a>
          </div>
          <div className="card-grid-space">
            <a className="card two" href="https://www.healthline.com/health/pregnancy/safe-exercise-third-trimester#TOC_TITLE_HDR_1" target='_blank' rel='noopener noreferrer'>
              <div>
                <h1>How to Safely Exercise in the Third Trimester of Pregnancy</h1>
                <p>You can even maintain vigorous activity, like jogging, throughout pregnancy with permission from your doctor.</p>
                <div className="tags">
                  <div className="tag">Read More</div>
                </div>
              </div>
            </a>
          </div>
          <div className="card-grid-space">
            <a className="card three" href="https://www.healthline.com/health/pregnancy/intrapartum-care-vaginal-delivery" target='_blank' rel='noopener noreferrer'>
              <div>
                <h1>What to Expect During a Vaginal Delivery</h1>
                <p>While there are things you can do to prepare yourself for labor and delivery, like taking...</p>
                <div className="tags">
                  <div className="tag">Read More</div>
                </div>
              </div>
            </a>
          </div>
        </section>
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
  );
}

export default Home;
