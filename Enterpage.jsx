import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './EnterPage.css';
import logo from '../logo_ga.jpg'; // Update this with the actual path to your logo

function EnterPage() {
    const navigate = useNavigate();

    // Function to handle login button click
    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div className="enter-container">
            <div className="welcome-box">
                <img src={logo} alt="Gourmet Atlas Logo" className="logo" />
                <h1>Welcome to Gourmet Atlas</h1>
                <p className="tagline">Where every recipe tells a story</p>
                <div className="button-group">
                    <Button variant="outline-danger" onClick={handleLoginClick}>
                        Login
                    </Button>
                    <Link to="/signup">
                        <Button variant="outline-danger" className="me-2">Signup</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default EnterPage;
