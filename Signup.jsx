// Signup.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/signup', {
                username,
                email,
                password,
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <div className="holder">
            <div className="box">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <h2>Sign Up</h2>
                    <div className="inputBox">
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <span>Username</span>
                    </div>
                    <div className="inputBox">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <span>Email</span>
                    </div>
                    <div className="inputBox">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span>Password</span>
                    </div>
                    <div className="links">
                        <Link to="/login">Already have an account? Login</Link>
                    </div>
                    <input type="submit" value="Sign Up" />
                    <p>{message}</p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
