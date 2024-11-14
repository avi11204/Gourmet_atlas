import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './Loginmodel.css';

function LoginModel({ show, handleClose, loginStatus }) {
    const navigate = useNavigate();  // Get navigate function

    const handleContinue = () => {
        if (loginStatus === 'success') {
            navigate('/home');  // Redirect to home on success
        } else {
            navigate('/signup');  // Redirect to signup on failure
        }
        handleClose();  // Close modal
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Login Status</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {loginStatus === 'success' ? (
                    <p>Login successful! Welcome back.</p>
                ) : (
                    <p>Login failed. Please try again or sign up.</p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleContinue}>
                    {loginStatus === 'success' ? 'Continue' : 'Sign Up'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default LoginModel;
