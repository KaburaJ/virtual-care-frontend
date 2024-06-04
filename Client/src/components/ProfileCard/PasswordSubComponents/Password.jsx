import React, { useState } from 'react';
import '../../LoginPage/LoginPage.css';
import { useNavigate } from 'react-router-dom';


const Password = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [formInputs, setFormInputs] = useState({
        password: '',
        cpassword: '',
    });
    const navigate = useNavigate()

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormInputs((prevInputs) => ({
            ...prevInputs,
            [name]: value,
        }));
    };

    const renderPage = () => {
        switch (currentPage) {
            case 0:
                return (
                    <div className="step-container" style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                    }}>
                        <input
                            type="password"
                            name="password"
                            value={formInputs.username}
                            onChange={handleInputChange}
                            placeholder="Password"
                            required
                        />
                        <input
                            type="password"
                            name="cpassword"
                            value={formInputs.username}
                            onChange={handleInputChange}
                            placeholder="Confirm Password"
                            required
                        />
                        <button className="next-button">
                            Submit
                        </button>

                    </div>
                );

        }
    };

    return (
        <div className="container" style={{display:"flex", flexDirection:"column"}}>
            <h1 style={{marginTop:"-4em"}}>Change Password</h1>
            {renderPage()}
        </div>
    );
};

export default Password;
