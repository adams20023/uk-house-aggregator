const express = require('express');
const router = express.Router();
const { getProperties, addProperty, getRecommendations } = require('../controllers/propertyController');
const auth = require('../middleware/auth');

// Route to get all properties
router.get('/', getProperties);

// Route to add a new property (protected by auth middleware)
router.post('/', auth, addProperty);

// Route to get recommendations based on user ID
router.get('/recommendations/:userId', getRecommendations);

module.exports = router;

