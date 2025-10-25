const express = require('express');
const router = express.Router();
const affiliateController = require('../controllers/affiliateController');
const { protect, authorize } = require('../middleware/auth');

// Protected routes - must be authenticated
router.post('/create', protect, affiliateController.createAffiliate);
router.get('/dashboard', protect, authorize('affiliate', 'admin'), affiliateController.getDashboard);
router.get('/my-affiliate', protect, affiliateController.getMyAffiliate);
router.put('/update-bank-details', protect, authorize('affiliate', 'admin'), affiliateController.updateBankDetails);
router.get('/stats', protect, authorize('affiliate', 'admin'), affiliateController.getStats);
router.post('/track-click', affiliateController.trackClick);



// Admin routes
router.get('/all', protect, authorize('admin'), affiliateController.getAllAffiliates);
router.put('/:id/status', protect, authorize('admin'), affiliateController.updateStatus);

module.exports = router;
