const express = require('express');
const cors = require('cors');

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON request bodies

// Default route
app.get('/', (req, res) => {
  res.send('Backend Server is running');
});

// Set the port
const PORT = process.env.PORT || 5000; // Default to port 5000 if not provided
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

