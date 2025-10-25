const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { protect, authorize } = require('../middleware/auth');

// Public routes
router.post('/signup', authController.signup);
router.post('/login', authController.login);

// Protected routes
router.get('/profile', protect, authController.getProfile);

// Admin routes
router.get('/download-excel', protect, authorize('admin'), authController.downloadExcel);
router.get('/stats', protect, authorize('admin'), authController.getStats);
router.get('/users-basic', protect, authorize('admin'), authController.getUsersBasicInfo);

module.exports = router;