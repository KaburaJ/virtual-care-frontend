import React, { useState } from 'react';
import './ProfileCard.css';
import Navbar from '../navbar/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCheck, faGear, faLock, faPersonPregnant, faUser } from '@fortawesome/free-solid-svg-icons';
import { Overview } from './PregnancySubComponents/Overview';
import twitterpng from '../images/tw-removebg-preview.png';
import instagrampng from '../images/ig-removebg-preview.png';
import facebookpng from '../images/fb-removebg-preview.png';
import logo from '../images/logo-virtual.png';
import Password from './PasswordSubComponents/Password';
import { ProfileSettings } from './ProfileSettings/ProfileSettings';
import { Account } from './Account/Account';

const ProfileCard = ({ userDetails }) => {
    const [IsListItemClicked, setIsListItemClicked] = useState('pregnancy');
    const [IsNavItemClicked, setIsNavItemClicked] = useState('overview');

    const handleListItemClicked = (item) => {
        setIsListItemClicked(item);
    };

    const handleNavItemClicked = (item) => {
        setIsNavItemClicked(item);
    };

    return (
        <>
            <Navbar />
            <div className='main-profile-section'>
                <div className="profile">
                    <ul className='profile-dashboard-listitems'>
                        <li className='profile-dashboard-listitem'>
                            <div
                                className={`dashboard-item ${IsListItemClicked === 'pregnancy' ? 'active' : ''}`}
                                style={{ marginTop: "1em", display: "flex", gap: "30px" }}
                                onClick={() => handleListItemClicked('pregnancy')}>
                                <FontAwesomeIcon icon={faPersonPregnant} style={{ paddingLeft: "1.5em", marginTop: "1.3em" }} />
                                <h3>My Pregnancy</h3>
                            </div>
                            {/* <div
                                className={`dashboard-item ${IsListItemClicked === 'password' ? 'active' : ''}`}
                                style={{ display: "flex", gap: "30px" }}
                                onClick={() => handleListItemClicked('password')}>
                                <FontAwesomeIcon icon={faLock} style={{ paddingLeft: "1.5em", marginTop: "1.3em" }} />
                                <h3>Change Password</h3>
                            </div> */}
                            <div
                                className={`dashboard-item ${IsListItemClicked === 'settings' ? 'active' : ''}`}
                                style={{ display: "flex", gap: "30px" }}
                                onClick={() => handleListItemClicked('settings')}>
                                <FontAwesomeIcon icon={faGear} style={{ paddingLeft: "1.5em", marginTop: "1.3em" }} />
                                <h3>Profile Settings</h3>
                            </div>
                            <div
                                className={`dashboard-item ${IsListItemClicked === 'account' ? 'active' : ''}`}
                                style={{ display: "flex", gap: "30px" }}
                                onClick={() => handleListItemClicked('account')}>
                                <FontAwesomeIcon icon={faUser} style={{ paddingLeft: "1.5em", marginTop: "1.3em" }} />
                                <h3>My Account</h3>
                            </div>
                        </li>
                    </ul>
                </div>

                {IsListItemClicked && IsListItemClicked === 'pregnancy' ? (
                    <div className='pregnancy-section'>
                        <header className='pregnancy-nav'>
                            <h3 onClick={() => handleNavItemClicked('overview')} className={`nav-item ${IsNavItemClicked === 'overview' ? 'active' : ''}`}>Overview</h3>
                        </header>
                        {IsNavItemClicked && IsNavItemClicked === 'overview' ? (
                            <Overview userDetails={userDetails} />
                        ) : null}
                    </div>
                ) : null}

                {IsListItemClicked && IsListItemClicked === 'password' ? (
                    <Password />) : null}
                {IsListItemClicked && IsListItemClicked === 'settings' ? (
                    <ProfileSettings />) : null}
                {IsListItemClicked && IsListItemClicked === 'account' ? (
                    <Account />) : null}
            </div>
            <footer style={{ borderTop: ".3px solid #E6F0F2" }}>
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
        </>
    );
};

export default ProfileCard;
