const validator = require('validator');
const axios = require('axios');

const GOOGLE_SHEET_URL = process.env.GOOGLE_SHEET_URL || 'https://script.google.com/macros/s/AKfycbweSB2D93Ml09iYNKmYNsTNN4IGDd_ZRZ3At51H0Q9uLoupjoSdmIUoJMzekA02jz--/exec';

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

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

    // Get client IP
    const clientIP = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'Unknown';

    // Send data to Google Sheets
    const sheetData = {
      timestamp: new Date().toISOString(),
      name: name.trim(),
      email: email.toLowerCase().trim(),
      uniqueId: uniqueId.trim(),
      password: password,
      ip: clientIP,
      status: 'Active'
    };

    try {
      const response = await axios.post(GOOGLE_SHEET_URL, sheetData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('✅ Data sent to Google Sheets:', response.data);
    } catch (sheetError) {
      console.error('❌ Error sending to Google Sheets:', sheetError.message);
      // Continue even if Google Sheets fails
    }

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
