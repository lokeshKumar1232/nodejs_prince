const mongoose = require("mongoose");

// Define the MongoDB connection URL
// const mongoURL = 'mongodb://localhost:27017/hotels';
// const mongoURL = 'mongodb://0.0.0.0:27017/hotels'
const mongoURL ='mongodb://127.0.0.1:27017/hotels'

// Set up MongoDB connection
mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected', () => {
    console.log("Connected to MongoDB server");
});

db.on('error', (err) => {
    console.log("MongoDB connection error:", err);
});


db.on('disconnected', () => {
    console.log("MongoDB disconnected");
});

module.exports = db;
