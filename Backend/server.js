// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connectdb } = require('./config/db');

const PORT = process.env.PORT || 5000; 

// Routes


// Load env variables

dotenv.config();


// Connect to database

connectdb();

// Initialize express
const app = express();

// Middleware

app.use(cors());
app.use(express.json());

// start server

app.listen(PORT, () => {  
    console.log(`Server is running on port ${PORT}`);
});