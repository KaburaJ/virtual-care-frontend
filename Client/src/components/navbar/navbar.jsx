import React from 'react'
import './navbar.css'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faGear, faMoon, faUser, faUserFriends, faVideo } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo-virtual.png'


const Navbar = () => {
    const location = useLocation()
    return (
        <div className='navbar' style={{backgroundColor:"#E6F0F2"}}>
        <header className="header" style={{ backgroundColor: "#E6F0F2", color: "var(--primary-text-color)" }}>
            <Link to="/home" className='link'> <h1 style={{ marginLeft:"-.5em", marginTop:"1.5em", color: "var(--primary-text-color)" }}><img src={logo} alt='Virtual Care'></img></h1></Link>
            <nav className="navbar" style={{backgroundColor:"transparent"}}>
                {/* <ul className="list" style={{fontSize:"x-large", display:"flex", gap:"4em"}}> */}
                <ul className="list" style={{fontSize:"x-large", display:"flex", gap:"4em"}}>
                    <FontAwesomeIcon className='icon' icon={faBell}/>  
                    <Link to="/live" className='link'><FontAwesomeIcon className='icon' icon={faVideo}/> </Link>
                     <FontAwesomeIcon className='icon' icon={faMoon}/>
                     <FontAwesomeIcon className='icon' icon={faUser}/>
                </ul>
            </nav>
            <input type='search' placeholder='What are you looking for?'></input>
        </header>
        
        </div>
    )
}

export default Navbar
