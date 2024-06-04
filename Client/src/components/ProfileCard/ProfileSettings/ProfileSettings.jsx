import React from 'react';
import './ProfileSettings.css';
import img from '../../images/pexels-christina-morillo-1181519.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

export const ProfileSettings = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

        const username = event.target.username.value;
        const email = event.target.email.value;
        const birthday = event.target.birthday.value;
        const dueDate = event.target.due.value;
        const trimester = event.target.trimester.value;
        const aboutMe = event.target.aboutMe.value;

        // Update local storage
        localStorage.setItem('Username', username);
        localStorage.setItem('Email', email);
        localStorage.setItem('Birthday', birthday);
        localStorage.setItem('DueDate', dueDate);
        localStorage.setItem('Trimester', trimester);
        localStorage.setItem('AboutMe', aboutMe);

        // Optional: Provide user feedback or redirect
        alert('Profile settings saved successfully!');
    };

    return (
        <div className="overall-settings-container" style={{ marginTop: "1em" }}>
            <h1 className="settings-header" style={{ fontWeight: "normal", marginLeft: "1.6em" }}>Profile Settings</h1>
                
            <form className='settings-form' onSubmit={handleSubmit}>
                <div>
                    <img src={img} alt='your-profile-image'></img>
                    <label htmlFor='file-upload' className='file-upload-label' style={{ backgroundColor: "transparent" }}>
                        <FontAwesomeIcon className='edit-icon' icon={faPen} />
                    </label>
                    <input
                        type='file'
                        id='file-upload'
                        accept='image/*'
                        style={{ display: 'none' }} />
                </div>
                {/* <label style={{ backgroundColor: "transparent", color: "#006983" }} htmlFor='username' >Username</label>
                <input contentEditable="false" type='text' id='username' className='input-field' name='username'></input>
                <label style={{ backgroundColor: "transparent", color: "#006983" }} htmlFor='email' >Email</label>
                <input type='email' id='email' name='email'></input> */}
                <label style={{ backgroundColor: "transparent", color: "#006983" }} htmlFor='birthday' >Birthday</label>
                <input type='date' id='birthday' name='birthday'></input>
                <label style={{ backgroundColor: "transparent", color: "#006983" }} htmlFor='due' >Due Date</label>
                <input type='date' id='due' name='due'></input>
                <label style={{ backgroundColor: "transparent", color: "#006983" }} htmlFor='trimester' >Trimester</label>
                <input type='number' id='trimester' name='trimester'></input>
                <label style={{ backgroundColor: "transparent", margin: "0 auto", color: "#006983" }} htmlFor='aboutMe' >About me</label>
                <div className='bio-info'>
                    <textarea id='aboutMe' name='aboutMe' style={{ backgroundColor: "white", border: "2px solid #ccc", width: "41.5em" }} className='text-input-field' placeholder='I am a first-time mother from...'></textarea>
                </div>
                <div className='profile-buttons'>
                    <button type='submit'>Save Changes</button>
                    <button type='button' className='cancel-button' onClick={() => window.location.reload()}>Cancel</button>
                </div>
            </form>
        </div>
    );
};
