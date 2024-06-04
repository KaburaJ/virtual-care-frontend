import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Users.css'; // Your CSS file for styling
import Navbar from '../navbar/navbar';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5003/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="users-container">
            <Navbar/>
            <h1>All Users</h1>
            <div className="users-list">
                {users.map(user => (
                    <div key={user.UserID} className="user-item">
                        <h2>{user.UserName}</h2>
                        <p>Email: {user.Email}</p>
                        <p>First Name: {user.FirstName}</p>
                        <p>Last Name: {user.LastName}</p>
                        {/* Add more details as needed */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;
