// In src/controllers/propertyController.js

const { PythonShell } = require('python-shell');
const path = require('path');
const pool = require('../config/db');

// Get recommendations using PythonShell
exports.getRecommendations = (req, res) => {
  const userId = req.params.userId;
  const options = {
    mode: 'text',
    pythonOptions: ['-u'],
    scriptPath: path.join(__dirname, '../utils/'),  // Path where your Python script is located
    args: [userId],  // Pass the userId to the Python script
  };

  PythonShell.run('recommendation.py', options, (err, results) => {
    if (err) {
      console.error('Error running Python script:', err.message);
      return res.status(500).send('Server Error');
    }

    try {
      // Parse and send recommendations back to the client
      const recommendations = JSON.parse(results[0]);
      res.json(recommendations);
    } catch (parseError) {
      console.error('Error parsing Python output:', parseError.message);
      res.status(500).send('Server Error');
    }
  });
};

// Get all properties from the PostgreSQL database
exports.getProperties = async (req, res) => {
  try {
    const properties = await pool.query('SELECT * FROM properties');
    res.json(properties.rows);
  } catch (err) {
    console.error('Error fetching properties:', err.message);
    res.status(500).send('Server Error');
  }
};

// Add a new property to the PostgreSQL database
exports.addProperty = async (req, res) => {
  const { title, description, price, location, bedrooms, bathrooms } = req.body;

  // Validate the required fields
  if (!title || !description || !price || !location || !bedrooms || !bathrooms) {
    return res.status(400).json({ msg: 'All fields are required' });
  }

  try {
    await pool.query(
      'INSERT INTO properties (title, description, price, location, bedrooms, bathrooms) VALUES ($1, $2, $3, $4, $5, $6)',
      [title, description, price, location, bedrooms, bathrooms]
    );

    res.status(201).json({ msg: 'Property added successfully' });
  } catch (err) {
    console.error('Error adding property:', err.message);
    res.status(500).send('Server Error');
  }
};

