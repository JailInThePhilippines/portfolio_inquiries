require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cors = require('cors');

const app = express();

// .env will have the database URL
const mongoString = process.env.DATABASE_URL;

/* for database */

// uses mongoose to connect to MongoDB
mongoose.connect(mongoString);
const database = mongoose.connection

// Error handling for database connection
database.on('error', (error) => {
    console.log(error);
});

// Success handling for database connection
database.once('connected', () => {
    console.log('Database Connected');
});

// use express middleware to parse JSON request bodies
app.use(express.json());

// Cors middleware
app.use(cors());

// Use the router from routes
app.use('/api', routes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
