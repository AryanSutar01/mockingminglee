// Vercel Serverless Function - Main API handler
// This file is for Option 1: Full Vercel deployment
// If using Option 2 (separate backend), you can ignore this file

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/mockmingle";

// Initialize connection (reuse connection if exists)
let isConnected = false;

async function connectDB() {
  if (isConnected) {
    return;
  }
  try {
    await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

// Import routes
const authRoutes = require('../server/routes/auth');
const testsRoutes = require('../server/routes/tests');
const attemptsRoutes = require('../server/routes/attempts');
const seedRoutes = require('../server/routes/seed');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/tests', testsRoutes);
app.use('/api/attempts', attemptsRoutes);
app.use('/api/seed', seedRoutes);

// Vercel serverless function handler
module.exports = async (req, res) => {
  // Connect to DB on each request (connection is cached)
  await connectDB();
  
  // Handle the request
  return app(req, res);
};

<<<<<<< HEAD

=======
>>>>>>> 69b78e7d2eaf9daf94695f345a8c5e058c0592a5
