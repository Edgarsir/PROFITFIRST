const excelService = require('../services/excelService');
const validator = require('validator');

// @desc    Simple signup - just store data
// @route   POST /api/signup
// @access  Public
exports.signup = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // Basic validation
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name and email'
      });
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Validate phone number (Indian format) if provided
    if (phone && !validator.isMobilePhone(phone, 'en-IN')) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid Indian phone number'
      });
    }

    // Check if user already exists
    const userExists = await excelService.userExists(email);
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: 'Someone with this email has already signed up'
      });
    }

    // Get client IP
    const clientIP = req.ip || req.connection.remoteAddress || 'Unknown';

    // Add user to Excel (without password)
    await excelService.addUser({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone ? phone.trim() : null,
      passwordHash: 'N/A - Simple Signup', // No password needed
      ip: clientIP
    });

    res.status(201).json({
      success: true,
      message: 'Thank you for joining! We\'ll be in touch soon with your affiliate details.',
      user: {
        name: name.trim(),
        email: email.toLowerCase().trim(),
        phone: phone ? phone.trim() : null
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