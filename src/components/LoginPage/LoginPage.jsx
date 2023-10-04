import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo-virtual.png'


const LoginPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [formInputs, setFormInputs] = useState({
    username: '',
    email: '',
  });
  const navigate = useNavigate()

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleNextPage = () => {
    if (formInputs.username && formInputs.email) {
      setCurrentPage(currentPage + 1);
    }
  };

  
  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
};

  const handleRegisterInstead = () => {
    navigate('/sign-up')
  };

  const handleLandingClick = () => {
    navigate('/')
  }

  const renderPage = () => {
    switch (currentPage) {
      case 0:
        return (
          <div className="step-container">
            <h2>UserName</h2>
            <input
              type="text"
              name="username"
              value={formInputs.username}
              onChange={handleInputChange}
              placeholder="Username"
            />
            <button className="next-button" onClick={handleNextPage}>
              Next
            </button>
            <p className="register-instead" onClick={handleRegisterInstead}>
              Register Instead
            </p>
          </div>
        );
      case 1:
        return (
          <div className='step-container'>
            <h2>Email</h2>
            <input
              type="email"
              name="email"
              value={formInputs.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
            <button className="next-button" onClick={handleNextPage}>
              Next
            </button>
          </div>
        );
      default:
        return (
          <div className="step-container">
            <h2 className="thank-you">Thank You!</h2>
          </div>
        );
    }
  };

  return (
    <div className="container">
      <img src={logo} alt='VirtualCare' onClick={handleLandingClick}></img>
      {renderPage()}
      {currentPage > 0 && (
                <FontAwesomeIcon icon={faArrowAltCircleLeft} onClick={handlePreviousPage}  className='back-arrow'/>
            )}
    </div>
  );
};

export default LoginPage;
