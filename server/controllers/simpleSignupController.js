const excelService = require('../services/excelService');
const validator = require('validator');

// @desc    Simple signup - just store data
// @route   POST /api/signup
// @access  Public
exports.signup = async (req, res) => {
  try {
    const { name, email, uniqueId, password } = req.body;

    // Basic validation
    if (!name || !email || !uniqueId || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Validate unique ID format
    if (uniqueId.length < 3 || !/^[a-zA-Z0-9_-]+$/.test(uniqueId)) {
      return res.status(400).json({
        success: false,
        message: 'Unique ID must be at least 3 characters and contain only letters, numbers, hyphens, and underscores'
      });
    }

    // Validate password length
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters'
      });
    }

    // Check if email already exists
    const userExists = await excelService.userExists(email);
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: 'Someone with this email has already signed up'
      });
    }

    // Check if unique ID already exists
    const uniqueIdExists = await excelService.uniqueIdExists(uniqueId);
    if (uniqueIdExists) {
      return res.status(400).json({
        success: false,
        message: 'This unique ID is already taken. Please choose another one.'
      });
    }

    // Get client IP
    const clientIP = req.ip || req.connection.remoteAddress || 'Unknown';

    // Add user to Excel
    await excelService.addUser({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      uniqueId: uniqueId.trim(),
      password: password, // Store password as-is (plain text for simplicity)
      ip: clientIP
    });

    res.status(201).json({
      success: true,
      message: 'Thank you for joining! We\'ll be in touch soon with your affiliate details.',
      user: {
        name: name.trim(),
        email: email.toLowerCase().trim(),
        uniqueId: uniqueId.trim()
      }
    });

  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during registration. Please try again.'
    });
  }
};