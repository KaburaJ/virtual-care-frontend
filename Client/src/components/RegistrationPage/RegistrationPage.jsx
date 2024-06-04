import React, { useState } from 'react';
import './RegistrationPage.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo-virtual.png'
import axios from 'axios'

const RegistrationPage = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [formInputs, setFormInputs] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        cpassword: '',
        countryCode: '',
        phone: '',
        category: '',
        institution: '',
        capacity: '',
    });
    const navigate = useNavigate()


    const registrationParams = {
        FirstName: formInputs.firstname,
        LastName: formInputs.lastname,
        UserName: formInputs.username,
        UserEmail: formInputs.email,
        UserPassword: formInputs.password,
        UserCPassword: formInputs.cpassword,
        UserPhoneNumber: formInputs.phone
    }


    console.log(typeof(registrationParams.UserPhoneNumber));
    const handleRegistration = () => {
        axios.post('http://localhost:5002/user/signin', registrationParams)
        .then((res) => {
            console.log("from registration:", res.data);
        }).catch(e => console.log(e))

        navigate('/log-in')
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormInputs((prevInputs) => ({
            ...prevInputs,
            [name]: value,
        }));
    };

    const handleNextPage = () => {
        if (
            (currentPage === 0 && formInputs.firstname && formInputs.lastname) ||
            (currentPage === 1 && formInputs.username) ||
            (currentPage === 2 && formInputs.email) ||
            (currentPage === 3 && formInputs.password) ||
            (currentPage === 4 && formInputs.cpassword) ||
            (currentPage === 5 && formInputs.phone) ||
            (currentPage === 6 && formInputs.category)
        ) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleLoginPage = () => {
        navigate('/log-in')
    };

    const handleLandingClick = () => {
        navigate('/')
    }

    const renderPage = () => {
        switch (currentPage) {
            case -1:
                return (
                    <div className="step-container">
                        <h2>Login</h2>
                        <input type="text" name="username" placeholder="Username" />
                        <input type="email" name="email" placeholder="Email" />
                        <button className="next-button" onClick={handleLoginPage}>Login instead</button>
                    </div>
                );
            case 0:
                return (
                    <div className="step-container">
                        <h2>What is your name?</h2>
                        <div className='name-input'>
                            <input className="name" type="text" name="firstname" placeholder="First Name" value={formInputs.firstname} onChange={handleInputChange} />
                            <input className='name' type="text" name="lastname" placeholder="Last Name" value={formInputs.lastname} onChange={handleInputChange} />
                        </div>
                        <button className="next-button" onClick={handleNextPage}>Next</button>
                        <p className="register-instead" onClick={handleLoginPage}>
                            Login Instead
                        </p>
                    </div>
                );
            case 1:
                return (
                    <div className="step-container">
                        <h2>What do you want us to call you?</h2>
                        <input type="text" name="username" placeholder="Username" value={formInputs.username} onChange={handleInputChange} />
                        <button className="next-button" onClick={handleNextPage}>Next</button>
                        <p className="register-instead" onClick={handleLoginPage}>
                            Login Instead
                        </p>
                    </div>
                );
            case 2:
                return (
                    <div className="step-container">
                        <h2>Enter your email address</h2>
                        <input type="email" name="email" placeholder="example@gmail.com" value={formInputs.email} onChange={handleInputChange} />
                        <button className="next-button" onClick={handleNextPage}>Next</button>
                    </div>
                );
            case 3:
                return (
                    <div className="step-container">
                        <h2>Enter your password</h2>
                        <input type="password" name="password" value={formInputs.password} onChange={handleInputChange} />
                        <button className="next-button" onClick={handleNextPage}>Next</button>
                    </div>
                );
            case 4:
                return (
                    <div className="step-container">
                        <h2>Confirm your password</h2>
                        <input type="password" name="cpassword" value={formInputs.cpassword} onChange={handleInputChange} />
                        <button className="next-button" onClick={handleNextPage}>Next</button>
                    </div>
                );
            case 5:
                return (
                    <div className="step-container">
                        <h2>Enter your phone number</h2>
                        <input type="text" name="phone" placeholder="254-7123-456-78" value={formInputs.phone} onChange={handleInputChange} />
                        <button className="next-button" onClick={handleRegistration}>Register</button>
                    </div>
                );
            default:
                return (
                    navigate('/home')
                )
        }
    };

    return (
        <div className="container">
            <img src={logo} alt='VirtualCare' onClick={handleLandingClick}></img>
            {renderPage()}
            {currentPage > 0 && (
                <>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} onClick={handlePreviousPage} className='back-arrow' />
                </>
            )}

        </div>
    );
};

export default RegistrationPage;

