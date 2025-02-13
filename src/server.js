const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config/env');
const connectDB = require('./config/database');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
const rabbitRoutes = require('./routes/rabbits');
app.use('/api/rabbits', rabbitRoutes);

const PORT = config.PORT;

// Only listen if the file is run directly (not required as a module)
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT} in ${config.NODE_ENV} mode`);
    });
}

module.exports = app;