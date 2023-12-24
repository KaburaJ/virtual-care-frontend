// ProfileCard.js
import React, { useState } from 'react';
import './ProfileCard.css';
import Navbar from '../navbar/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCheck, faGear, faLock, faLockOpen, faPaintBrush, faPaintRoller, faPalette, faPallet, faPersonPregnant, faStar, faUpload, faUser } from '@fortawesome/free-solid-svg-icons';
import { Overview } from './PregnancySubComponents/Overview';
import { Images } from './PregnancySubComponents/Images';
import twitterpng from '../images/tw-removebg-preview.png'
import instagrampng from '../images/ig-removebg-preview.png'
import facebookpng from '../images/fb-removebg-preview.png'
import logo from '../images/logo-virtual.png'
import { Bookings } from './PregnancySubComponents/Bookings';
import Password from './PasswordSubComponents/Password';
import { ProfileSettings } from './ProfileSettings/ProfileSettings';
import { Account } from './Account/Account';


const ProfileCard = ({userDetails}) => {
    const [IsListItemClicked, setIsListItemClicked] = useState('pregnancy')
    const [IsNavItemClicked, setIsNavItemClicked] = useState('overview')

    const handleListItemClicked = (item) => {
        setIsListItemClicked(item)
    }

    const handleNavItemClicked = (item) => {
        setIsNavItemClicked(item)
    }
    // Sample user profile data (replace with your actual data)
    const userProfile = {
        name: 'Jane Doe',
        age: 28,
        dueDate: 'October 15, 2023',
        doctorName: 'Dr. Smith',
        weight: '150 lbs',
        height: '5\'7"',
        bloodType: 'A+',
    };

    // Sample user activity data (replace with your actual data)
    const userActivity = {
        likedBlogs: 5,
        commentedBlogs: 3,
    };

    // Sample upcoming live sessions data (replace with your actual data)
    const upcomingLiveSessions = [
        {
            title: 'Pregnancy Nutrition',
            date: 'September 20, 2023',
        },
        {
            title: 'Childbirth Preparation',
            date: 'October 5, 2023',
        },
    ];

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
                            <div
                                className={`dashboard-item ${IsListItemClicked === 'password' ? 'active' : ''}`}
                                style={{ display: "flex", gap: "30px" }}
                                onClick={() => handleListItemClicked('password')}>
                                <FontAwesomeIcon icon={faLock} style={{ paddingLeft: "1.5em", marginTop: "1.3em" }} />
                                <h3>Change Password</h3>
                            </div>
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
                            {/* <div
                                className={`dashboard-item ${IsListItemClicked === 'theme' ? 'active' : ''}`}
                                style={{ marginBottom: "1em", display: "flex", gap: "20px" }}
                                onClick={() => handleListItemClicked('theme')}>
                                <FontAwesomeIcon icon={faPalette} style={{ paddingLeft: "1.5em", marginTop: "1.3em" }} />
                                <h3>Change Theme</h3>
                            </div> */}
                        </li>
                    </ul>
                </div>

                {IsListItemClicked && IsListItemClicked === 'pregnancy' ? (
                    <div className='pregnancy-section'>
                        <header className='pregnancy-nav' >
                            <h3 onClick={() => handleNavItemClicked('overview')} className={`nav-item ${IsNavItemClicked === 'overview' ? 'active' : ''}`}>Overview</h3>
                            <h3 onClick={() => handleNavItemClicked('bookings')} className={`nav-item ${IsNavItemClicked === 'bookings' ? 'active' : ''}`}>Bookings</h3>
                            <h3 onClick={() => handleNavItemClicked('images')} className={`nav-item ${IsNavItemClicked === 'images' ? 'active' : ''}`}>Images</h3>
                            {/* <h3 onClick={() => handleNavItemClicked('belly')} className={`nav-item ${IsNavItemClicked === 'belly' ? 'active' : ''}`}>My Belly</h3> */}
                        </header>
                        {IsNavItemClicked && IsNavItemClicked === 'overview' ? (
                            <Overview userDetails={userDetails}/>
                        ) : null}
                        {IsNavItemClicked && IsNavItemClicked === 'images' ? (
                            <Images />
                        ) : null}
                        {IsNavItemClicked && IsNavItemClicked === "bookings" ? (
                            <Bookings />
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
            <footer>
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
                        <p style={{ marginLeft: "-2em" }}>&copy; 2023 Virtual Care. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default ProfileCard;
