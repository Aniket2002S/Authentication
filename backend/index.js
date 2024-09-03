const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');  // Ensure the path is correct

require('dotenv').config();
require('./Models/db');  // Ensure this file correctly connects to MongoDB

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json()); // Middleware to parse JSON bodies
app.use(cors()); // Middleware to enable CORS

// Test route to ensure server is running
app.get('/ping', (req, res) => {
    res.send('Pong');
});

// Use AuthRouter for routes under '/auth'
app.use('/auth', AuthRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
