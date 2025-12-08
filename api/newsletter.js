import connectToDatabase from './db.js';
import Subscriber from './models/Subscriber.js';

export default async function handler(req, res) {
  // =================================================================
  // 1. CORS CONFIGURATION (Fixes Network Errors)
  // =================================================================
  const allowedOrigins = [
    'https://writtenexposure.com',
    'https://www.writtenexposure.com',
    'http://localhost:5173', // Vite local dev
    'http://localhost:3000', // Alternative local dev
    'http://localhost:3001'  // Alternative local dev
  ];

  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  // Essential headers for modern browsers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle the "Preflight" check immediately
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // =================================================================
  // 2. REQUEST METHOD VALIDATION
  // =================================================================
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // =================================================================
  // 3. MAIN LOGIC
  // =================================================================
  const { email } = req.body;

  // Basic validation
  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Valid email is required' });
  }

  try {
    console.log('Connecting to database...');
    await connectToDatabase();
    console.log('Database connected.');

    // Create the subscriber in MongoDB
    // This will verify 'unique: true' from the model
    await Subscriber.create({ email });

    console.log(`New subscriber added: ${email}`);
    return res.status(201).json({ message: 'Successfully subscribed!' });

  } catch (error) {
    console.error('Newsletter API Error:', error);

    // MongoDB Duplicate Key Error (Code 11000)
    if (error.code === 11000) {
      return res.status(409).json({ message: 'You are already subscribed to the newsletter.' });
    }

    // Generic Error
    return res.status(500).json({ 
      message: 'Internal Server Error', 
      error: error.message 
    });
  }
}