import React from 'react'
import './ProfileSettings.css'
import img from '../../images/pexels-christina-morillo-1181519.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

export const ProfileSettings = () => {

    return (
        <div className="overall-settings-container" style={{marginTop:"1em"}}>
            <h1 className="settings-header" style={{fontWeight:"normal", marginLeft:"1.6em"}}>Profile Settings</h1>
                
                <form className='settings-form'>
                <div>
                    <img src={img} alt='your-profile-image'></img>
                    <label for='file-upload' className='file-upload-label' style={{ backgroundColor: "transparent" }}><FontAwesomeIcon className='edit-icon' icon={faPen} /></label>
                    <input
                        type='file'
                        id='file-upload'
                        accept='image/*'
                        style={{ display: 'none' }} />
                </div>
                    <label style={{ backgroundColor: "transparent", color: "#006983" }} for='username' >Username</label>
                    <input type='text' id='username' className='input-field' ></input>
                    <label style={{ backgroundColor: "transparent", color: "#006983" }} for='email' >Email</label>
                    <input type='email' id='email'></input>
                    <label style={{ backgroundColor: "transparent", color: "#006983" }} for='birthday' >Birthday</label>
                    <input type='date' id='birthday'></input>
                    <label style={{ backgroundColor: "transparent", color: "#006983" }} for='due' >Due Date</label>
                    <input type='date' id='due'></input>
                    <label style={{ backgroundColor: "transparent", margin: "0 auto", color: "#006983" }} for='username' >About me</label>
                    <div className='bio-info'>
                    <textarea type='text' id='username' style={{backgroundColor:"white", border:"2px solid #ccc", width:"41.5em"}} className='text-input-field' placeholder='I am a first-time mother from...'></textarea>
                    </div>
                    <div className='profile-buttons'>
                        <button type='submit'>Save Changes</button>
                        <button type='submit' className='cancel-button'>Cancel</button>
                    </div>
                </form>

        </div>
    )
}
