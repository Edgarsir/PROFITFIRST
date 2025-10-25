const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const { protect, authorize } = require('../middleware/auth');

// Affiliate routes
router.get('/my-payments', protect, authorize('affiliate', 'admin'), paymentController.getMyPayments);
router.post('/request-payout', protect, authorize('affiliate'), paymentController.requestPayout);

// Admin routes
router.get('/all', protect, authorize('admin'), paymentController.getAllPayments);
router.put('/:id/process', protect, authorize('admin'), paymentController.processPayment);
router.put('/:id/complete', protect, authorize('admin'), paymentController.completePayment);

module.exports = router;
