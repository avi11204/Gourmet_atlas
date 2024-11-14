
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const nodemailer = require('nodemailer');

// Configure the email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // Example with Gmail; change if using another service
    auth: {
        user: 'avanthikhabs.22csd@kongu.edu', // replace with your email
        pass: 'Av!11204' // replace with your email password or an app-specific password if using Gmail
    }
});

router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user
        const user = new User({ username, email, password });
        await user.save();

        // Send Welcome Email
        const mailOptions = {
            from: 'avanthikhabs.22csd@kongu.edu', // sender address
            to: email, // recipient's email
            subject: 'Welcome to GourmetAtlas!',
            text: `Hello ${username},\n\nWelcome to GourmetAtlas! We're excited to have you on board.\n\nBest regards,\nThe GourmetAtlas Team`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
