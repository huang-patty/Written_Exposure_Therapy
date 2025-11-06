/*
 * File: server.js
 * Purpose: Small Express backend to forward contact form submissions via email.
 *
 * Influenced by:
 *  - express: web framework used to expose an API endpoint
 *  - nodemailer: to send email messages
 *  - cors: to accept cross-origin requests from the frontend
 *  - dotenv: loads environment variables for credentials
 *
 * Influences:
 *  - Exposes POST /api/contact which the frontend can call to send email messages.
 *
 * Notes:
 *  - This file is intended for development/testing and is not part of automated frontend deployments.
 *  - Non-functional header added for documentation only.
 */

import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 3001; // We'll run the backend on a different port

// Middleware
app.use(cors()); // Allows requests from your frontend
app.use(express.json()); // Allows the server to understand JSON data
app.use(express.urlencoded({ extended: true })); // Allows the server to understand form data

// The API route that will receive the form data
app.post('/api/contact', (req, res) => {
    // Get the data from the request body
    const { name, email, message } = req.body;

    // --- 1. Set up Nodemailer ---
    // This is the transport configuration.
    // I'm using Gmail as an example. You'll need to use your own email provider's SMTP settings.
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use 'hotmail', 'yahoo', etc. for other services
        auth: {
            user: process.env.EMAIL_USER, // Your email address from the .env file
            pass: process.env.EMAIL_PASS, // Your email password (or app password) from the .env file
        },
    });

    // --- 2. Define the email options ---
    const mailOptions = {
        from: `"${name}" <${email}>`, // Sender's name and email
        to: process.env.RECIPIENT_EMAIL,   // The client email address you want to send to
        subject: `WET Contact Form Submission from ${name}`,
        text: `You have received a new message from your website contact form.\n\n` +
              `Name: ${name}\n` +
              `Email: ${email}\n` +
              `Message:\n${message}`
    };

    // --- 3. Send the email ---
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error: Could not send email.');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Message sent successfully!');
        }
    });
});

app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
});