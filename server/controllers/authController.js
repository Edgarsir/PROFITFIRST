const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const excelService = require('../services/excelService');

// Generate JWT token
const generateToken = (user) => {
  const jwtSecret = process.env.JWT_SECRET || '75614a88e35dd1e33dfce540e001bcc6b6762d67';
  const jwtExpire = process.env.JWT_EXPIRE || '30d';
  
  return jwt.sign(
    { 
      email: user.email, 
      name: user.name,
      uniqueId: user.uniqueId 
    },
    jwtSecret,
    { expiresIn: jwtExpire }
  );
};

// @desc    Register new user
// @route   POST /api/auth/signup
// @access  Public
exports.signup = async (req, res) => {
  try {
    const { name, email, uniqueId, password } = req.body;

    // Validation
    if (!name || !email || !uniqueId || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, unique ID, and password'
      });
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Validate unique ID
    if (uniqueId.trim().length < 3) {
      return res.status(400).json({
        success: false,
        message: 'Unique ID must be at least 3 characters long'
      });
    }

    if (!/^[a-zA-Z0-9_-]+$/.test(uniqueId.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Unique ID can only contain letters, numbers, hyphens, and underscores'
      });
    }

    // Check if unique ID already exists
    const uniqueIdExists = await excelService.uniqueIdExists(uniqueId.trim());
    if (uniqueIdExists) {
      return res.status(400).json({
        success: false,
        message: 'This Unique ID is already taken'
      });
    }

    // Validate password strength
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters long'
      });
    }

    // Check if user already exists
    const userExists = await excelService.userExists(email);
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: 'User already exists with this email'
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Get client IP
    const clientIP = req.ip || req.connection.remoteAddress || 'Unknown';

    // Add user to Excel
    await excelService.addUser({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      uniqueId: uniqueId.trim(),
      passwordHash,
      ip: clientIP
    });

    // Generate token
    const token = generateToken({
      email: email.toLowerCase().trim(),
      name: name.trim(),
      uniqueId: uniqueId.trim()
    });

    res.status(201).json({
      success: true,
      message: 'Account created successfully! Welcome to ProfitFirst Affiliate Program.',
      token,
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

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password'
      });
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Get user from Excel
    const user = await excelService.getUserByEmail(email.toLowerCase().trim());
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Update last login
    await excelService.updateLastLogin(email.toLowerCase().trim());

    // Generate token
    const token = generateToken({
      email: user.email,
      name: user.name,
      phone: user.phone
    });

    res.json({
      success: true,
      message: 'Login successful! Welcome back to ProfitFirst.',
      token,
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        lastLogin: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during login. Please try again.'
    });
  }
};

// @desc    Get current user profile
// @route   GET /api/auth/profile
// @access  Private
exports.getProfile = async (req, res) => {
  try {
    const user = await excelService.getUserByEmail(req.user.email);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        registrationDate: user.timestamp,
        lastLogin: user.lastLogin,
        status: user.status
      }
    });

  } catch (error) {
    console.error('Profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching profile'
    });
  }
};

// @desc    Download Excel file (Admin only)
// @route   GET /api/auth/download-excel
// @access  Private (Admin)
exports.downloadExcel = async (req, res) => {
  try {
    const filePath = excelService.getExcelFilePath();
    
    // Check if file exists
    const fs = require('fs');
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        success: false,
        message: 'No signup data available yet'
      });
    }

    // Set headers for file download
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename="profitfirst-signups-${new Date().toISOString().split('T')[0]}.xlsx"`);
    
    // Send file
    res.download(filePath, `profitfirst-signups-${new Date().toISOString().split('T')[0]}.xlsx`);

  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({
      success: false,
      message: 'Error downloading Excel file'
    });
  }
};

// @desc    Get user statistics (Admin only)
// @route   GET /api/auth/stats
// @access  Private (Admin)
exports.getStats = async (req, res) => {
  try {
    const stats = await excelService.getUserStats();
    
    res.json({
      success: true,
      stats: {
        totalSignups: stats.totalUsers,
        activeUsers: stats.activeUsers,
        lastUpdated: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching statistics'
    });
  }
};

// @desc    Get users basic info (name, number, email, password) (Admin only)
// @route   GET /api/auth/users-basic
// @access  Private (Admin)
exports.getUsersBasicInfo = async (req, res) => {
  try {
    const users = await excelService.getAllUsersBasicInfo();
    
    res.json({
      success: true,
      count: users.length,
      users: users
    });

  } catch (error) {
    console.error('Users basic info error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching users basic information'
    });
  }
};