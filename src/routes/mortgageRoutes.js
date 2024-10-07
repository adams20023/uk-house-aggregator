// File: src/routes/mortgageRoutes.js

const express = require('express');
const router = express.Router();
const { getMortgages } = require('../controllers/mortgageController');

router.get('/', getMortgages);

module.exports = router;

