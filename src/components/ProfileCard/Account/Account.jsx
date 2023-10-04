import React from 'react'
import './Account.css'
import img from '../../images/pexels-christina-morillo-1181519.jpg'


export const Account = () => {
    return (
        <div className='account'>
            <h1>My Account Details</h1>
            <div className='account-body'>
                <form className='account-form'>
                <div className='profile-pic'>
                    <img src={img} alt='profile-pic'></img>
                </div>
                    <div style={{borderBottom:"1px solid #ccc", marginBottom:"10px"}}>
                    <h4 style={{marginLeft:"1em", fontWeight:"normal"}}>USER INFORMATION</h4>
                    <div className='username'>
                        <div className='username-field'>
                        <label style={{ backgroundColor: "transparent", color: "#006983" }} for='username' >Username</label>
                        <input type='text' id='username' className='input-field' ></input>
                        </div>
                        <div className='username-field'>
                        <label style={{ backgroundColor: "transparent", color: "#006983" }} for='email' >Email Address</label>
                        <input type='text' id='email' className='input-field' ></input>
                        </div>
                        <div className='username-field'>
                        <label style={{ backgroundColor: "transparent", color: "#006983" }} for='firstname' >First Name</label>
                        <input type='text' id='firstname' className='input-field' ></input>
                        </div>
                        <div className='username-field'>
                        <label style={{ backgroundColor: "transparent", color: "#006983" }} for='lastname' >Last Name</label>
                        <input type='text' id='lastname' className='input-field' ></input>
                        </div>
                        
                    </div>
                    </div>
                    <div  className='address-info' style={{borderBottom:"1px solid #ccc", marginBottom:"10px"}}>
                    <h4 style={{marginLeft:"1em", fontWeight:"normal"}}>CONTACT INFORMATION</h4>
                    <div className='address-field'>
                        <label style={{ backgroundColor: "transparent", color: "#006983", marginLeft:"1em" }} for='firstname' >Address</label>
                        <input type='text' id='firstname' className='input-field' ></input>
                        </div>
                    <div className='user-contact-info'>
                        <div className='contact-info-field'>
                        <label style={{ backgroundColor: "transparent", color: "#006983", marginLeft:".8em"}} for='username' >City</label>
                        <input type='text' id='username' className='input-field' ></input>
                        </div>
                        <div className='contact-info-field'>
                        <label style={{ backgroundColor: "transparent", color: "#006983", marginLeft:".8em" }} for='firstname' >Country</label>
                        <input type='text' id='firstname' className='input-field' ></input>
                        </div>
                        <div className='contact-info-field'>
                        <label style={{ backgroundColor: "transparent", color: "#006983", marginLeft:".8em" }} for='firstname' >Postal Code</label>
                        <input type='text' id='firstname' className='input-field' ></input>
                        </div>
                    </div>
                    </div>
                    <div style={{marginBottom:"10px"}}>
                    <h4 style={{marginLeft:"1em", fontWeight:"normal"}}>ABOUT ME</h4>
                    <div className='bio-info'>
                    <label style={{ backgroundColor: "transparent", color: "#006983", marginLeft:".8em" }} for='username' >About me</label>
                    <textarea type='text' id='username' className='text-input-field' placeholder='I am a first-time mother from...'></textarea>
                    </div>
                    </div>
                </form>
            </div>

        </div>
    )
}
