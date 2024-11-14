import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginModel from './Loginmodel';
import './Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [loginStatus, setLoginStatus] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                username,
                password,
            });
            setLoginStatus('success');
            setShowModal(true);

            // Add navigation to homepage on successful login
            navigate('/home'); // Redirect to home page

        } catch (error) {
            setLoginStatus('failure');
            setShowModal(true);
        }
    };

    const handleClose = () => setShowModal(false);

    return (
        <div className="holder">
            <div className="box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="inputBox">
                        <input
                            type="text"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <span>Username</span>
                    </div>
                    <div className="inputBox">
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span>Password</span>
                    </div>
                    <div className="links">
                        <a href="#">Forgot Password?</a>
                        <a href="/signup">Sign Up</a>
                    </div>
                    <input type="submit" value="Login" className="login-button" />
                </form>
            </div>
            <LoginModel
                show={showModal}
                handleClose={handleClose}
                loginStatus={loginStatus}
            />
        </div>
    );
}

export default Login;
