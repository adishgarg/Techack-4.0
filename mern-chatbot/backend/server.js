const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Add any other options you might need here
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// Handle MongoDB connection errors
connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Graceful shutdown on process termination
process.on('SIGINT', () => {
  connection.close(() => {
    console.log('MongoDB connection disconnected through app termination');
    process.exit(0);
  });
});

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});
