const express = require('express');
const router = express.Router();
const referralController = require('../controllers/referralController');
const { protect, authorize } = require('../middleware/auth');

// Affiliate routes
router.get('/my-referrals', protect, authorize('affiliate', 'admin'), referralController.getMyReferrals);
router.put('/:id/activate', protect, authorize('admin'), referralController.activateReferral);
router.put('/:id/deactivate', protect, authorize('admin'), referralController.deactivateReferral);

// Admin routes
router.get('/all', protect, authorize('admin'), referralController.getAllReferrals);

module.exports = router;
