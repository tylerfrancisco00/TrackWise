// server.js
const express = require('express');
const dotenv = require('dotenv');

// Initialize dotenv for environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse incoming requests as JSON
app.use(express.json());

// Example route for testing
app.get('/', (req, res) => {
  res.send('Hello, World! Welcome to the Finance Tracker backend.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
