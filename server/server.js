const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/users');
const locationRoutes = require('./routes/locations');

const app = express();
const PORT = process.env.PORT || 5000; // Use environment variable or default to 5000

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected...'))
.catch((err) => console.log(`MongoDB connection error: ${err}`));

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // for parsing application/json

// Use Routes
app.use('/api/users', userRoutes);
app.use('/api/locations', locationRoutes);

// Listen on the port
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
