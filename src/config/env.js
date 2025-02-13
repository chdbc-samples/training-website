const dotenv = require('dotenv');

// Load env vars
dotenv.config();

module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 5000,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/zoo',
    // Add any other environment variables here
};