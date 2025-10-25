const express = require('express');
const router = express.Router();
const simpleSignupController = require('../controllers/simpleSignupController');

// Simple signup route - no authentication needed
router.post('/', simpleSignupController.signup);

module.exports = router;