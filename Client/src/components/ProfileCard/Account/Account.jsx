import React, { useEffect, useState } from 'react';
import './Account.css';
import img from '../../images/pexels-christina-morillo-1181519.jpg';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        const cookieValue = parts.pop().split(';').shift();
        console.log(`Cookie value for ${name}: ${cookieValue}`);
        return cookieValue;
    }
    return null;
};

export const Account = () => {
    const [userDetails, setUserDetails] = useState({
        UserName: '',
        Email: '',
        FirstName: '',
        LastName: '',
        Address: '',
        City: '',
        Country: '',
        PostalCode: '',
        AboutMe: ''
    });

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const token = getCookie('token'); // Assuming the token is stored in cookies
                if (!token) {
                    throw new Error('No token found');
                }
                const decodedToken = jwtDecode(token);
                console.log(`Decoded token:`, decodedToken);
                const userID = decodedToken.userId; // Adjust this according to your token structure
                
                const response = await axios.post('http://localhost:5003/user/details', {
                    UserID: userID
                }, {
                    withCredentials: true
                });

                const userDetails = response.data[0];
                setUserDetails({
                    UserName: userDetails.UserName,
                    Email: userDetails.UserEmail,
                    FirstName: userDetails.FirstName,
                    LastName: userDetails.LastName,
                    Address: userDetails.Address,
                    City: userDetails.City,
                    Country: userDetails.Country,
                    PostalCode: userDetails.PostalCode,
                    AboutMe: userDetails.AboutMe
                });
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchUserDetails();
    }, []);

    useEffect(() => {
        // Load data from local storage if available
        const savedUserDetails = JSON.parse(localStorage.getItem('userDetails'));
        if (savedUserDetails) {
            setUserDetails(savedUserDetails);
        }
    }, []);

    useEffect(() => {
        // Save data to local storage
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
    }, [userDetails]);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setUserDetails(prevDetails => ({
            ...prevDetails,
            [id]: value
        }));
    };

    return (
        <div className='account'>
            <h1>My Account Details</h1>
            <div className='account-body'>
                <form className='account-form'>
                    <div className='profile-pic'>
                        <img src={img} alt='profile-pic'></img>
                    </div>
                    <div style={{ borderBottom: "1px solid #ccc", marginBottom: "10px" }}>
                        <h4 style={{ marginLeft: "1em", fontWeight: "normal" }}>USER INFORMATION</h4>
                        <div className='username'>
                            <div className='username-field'>
                                <label style={{ backgroundColor: "transparent", color: "#006983" }} htmlFor='username'>Username</label>
                                <input type='text' id='username' className='input-field' value={userDetails.UserName} disabled />
                            </div>
                            <div className='username-field'>
                                <label style={{ backgroundColor: "transparent", color: "#006983" }} htmlFor='email'>Email Address</label>
                                <input type='text' id='email' className='input-field' value={userDetails.Email} disabled />
                            </div>
                            <div className='username-field'>
                                <label style={{ backgroundColor: "transparent", color: "#006983" }} htmlFor='firstname'>First Name</label>
                                <input type='text' id='firstname' className='input-field' value={userDetails.FirstName} disabled />
                            </div>
                            <div className='username-field'>
                                <label style={{ backgroundColor: "transparent", color: "#006983" }} htmlFor='lastname'>Last Name</label>
                                <input type='text' id='lastname' className='input-field' value={userDetails.LastName} disabled />
                            </div>
                        </div>
                    </div>
                    <div className='address-info' style={{ borderBottom: "1px solid #ccc", marginBottom: "10px" }}>
                        <h4 style={{ marginLeft: "1em", fontWeight: "normal" }}>CONTACT INFORMATION</h4>
                        <div className='address-field'>
                            <label style={{ backgroundColor: "transparent", color: "#006983", marginLeft: "1em" }} htmlFor='address'>Address</label>
                            <input type='text' id='address' className='input-field' value={userDetails.Address} onChange={handleInputChange} placeholder="Enter your address" />
                        </div>
                        <div className='user-contact-info'>
                            <div className='contact-info-field'>
                                <label style={{ backgroundColor: "transparent", color: "#006983", marginLeft: ".8em" }} htmlFor='city'>City</label>
                                <input type='text' id='city' className='input-field' value={userDetails.City} onChange={handleInputChange} placeholder="Enter your city" />
                            </div>
                            <div className='contact-info-field'>
                                <label style={{ backgroundColor: "transparent", color: "#006983", marginLeft: ".8em" }} htmlFor='country'>Country</label>
                                <input type='text' id='country' className='input-field' value={userDetails.Country} onChange={handleInputChange} placeholder="Enter your country" />
                            </div>
                            <div className='contact-info-field'>
                                <label style={{ backgroundColor: "transparent", color: "#006983", marginLeft: ".8em" }} htmlFor='postalcode'>Postal Code</label>
                                <input type='text' id='postalcode' className='input-field' value={userDetails.PostalCode} onChange={handleInputChange} placeholder="Enter your postal code" />
                            </div>
                        </div>
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                        <h4 style={{ marginLeft: "1em", fontWeight: "normal" }}>ABOUT ME</h4>
                        <div className='bio-info'>
                            <label style={{ backgroundColor: "transparent", color: "#006983", marginLeft: ".8em" }} htmlFor='aboutme'>About me</label>
                            <textarea id='aboutme' className='text-input-field' value={userDetails.AboutMe} onChange={handleInputChange} placeholder="Tell us about yourself" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
