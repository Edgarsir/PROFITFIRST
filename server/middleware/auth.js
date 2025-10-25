const jwt = require('jsonwebtoken');
const excelService = require('../services/excelService');

// Protect routes - verify JWT token
exports.protect = async (req, res, next) => {
  let token;

  // Check for token in headers
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized to access this route'
    });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Get user from Excel file using email from token
    const user = await excelService.getUserByEmail(decoded.email);
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'User not found'
      });
    }

    // Add user info to request
    req.user = {
      email: user.email,
      name: user.name,
      phone: user.phone,
      role: 'user' // Default role, can be enhanced later
    };

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized to access this route'
    });
  }
};

// Grant access to specific roles
exports.authorize = (...roles) => {
  return (req, res, next) => {
    // For now, treat all users as 'user' role, and allow 'admin' for specific emails
    const adminEmails = ['admin@profitfirst.com', 'harsh@profitfirst.com']; // Add your admin emails here
    const userRole = adminEmails.includes(req.user.email) ? 'admin' : 'user';
    
    if (!roles.includes(userRole)) {
      return res.status(403).json({
        success: false,
        message: `User role ${userRole} is not authorized to access this route`
      });
    }
    next();
  };
};
