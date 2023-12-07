const express = require('express');
const connectDB = require('./db');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB(); // This will establish the database connection when your app starts


// Middleware setup, database connection, etc.

app.use('/api/auth', require('./src/routes/authRoutes'));
app.use('/api/form', require('./src/routes/formRoutes'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

