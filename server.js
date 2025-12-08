/*
 * File: server.js
 * Purpose: Backend for Written Exposure Therapy website.
 *          1. Forwards contact form submissions via email.
 *          2. Manages a simple JSON-based mailing list.
 *
 * Influenced by:
 *  - express: web framework
 *  - nodemailer: email sending
 *  - cors: cross-origin resource sharing
 *  - dotenv: environment variables
 *  - fs & path: for saving the mailing list to a local file
 */

import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 3001;

// --- File System Setup for Mailing List ---
// Because we are using ES Modules (import/export), we need to derive __dirname manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SUBSCRIBERS_FILE = path.join(__dirname, 'subscribers.json');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---------------------------------------------------------
// ROUTE 1: Contact Form (Sends Email)
// ---------------------------------------------------------
app.post('/api/contact', (req, res) => {
    // Get the data from the request body (Added 'subject' to match your frontend)
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.RECIPIENT_EMAIL,
        // Updated subject to include the role/subject selected in the form
        subject: `WET Contact Form: ${subject || 'New Message'}`, 
        // Using HTML for a cleaner layout
        html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Role/Subject:</strong> ${subject}</p>
            <br/>
            <p><strong>Message:</strong></p>
            <p style="padding: 10px; background: #f3f4f6; border-radius: 5px;">${message}</p>
        `
    };

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

// ---------------------------------------------------------
// ROUTE 2: Newsletter (Saves to JSON File)
// ---------------------------------------------------------
app.post('/api/newsletter', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send({ message: 'Email is required' });
    }

    let subscribers = [];

    // 1. Read existing file if it exists
    if (fs.existsSync(SUBSCRIBERS_FILE)) {
        try {
            const fileData = fs.readFileSync(SUBSCRIBERS_FILE, 'utf8');
            subscribers = JSON.parse(fileData);
        } catch (error) {
            console.error('Error parsing subscribers file:', error);
            // If file is corrupt, start fresh
            subscribers = [];
        }
    }

    // 2. Check for duplicates
    if (subscribers.includes(email)) {
        return res.status(409).send({ message: 'Email already subscribed' });
    }

    // 3. Add to list and save
    subscribers.push(email);

    try {
        fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2));
        console.log(`New subscriber added: ${email}`);
        res.status(200).send({ message: 'Subscribed successfully!' });
    } catch (error) {
        console.error('Error writing subscribers file:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
});