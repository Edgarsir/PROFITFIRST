const Payment = require('../models/Payment');
const Affiliate = require('../models/Affiliate');
const Referral = require('../models/Referral');

// @desc    Get my payments
// @route   GET /api/payments/my-payments
// @access  Private (Affiliate)
exports.getMyPayments = async (req, res) => {
  try {
    const affiliate = await Affiliate.findOne({ user: req.user.id });

    if (!affiliate) {
      return res.status(404).json({
        success: false,
        message: 'Affiliate account not found'
      });
    }

    const payments = await Payment.find({ affiliate: affiliate._id })
      .populate('referrals')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: payments.length,
      data: payments
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Request payout
// @route   POST /api/payments/request-payout
// @access  Private (Affiliate)
exports.requestPayout = async (req, res) => {
  try {
    const affiliate = await Affiliate.findOne({ user: req.user.id });

    if (!affiliate) {
      return res.status(404).json({
        success: false,
        message: 'Affiliate account not found'
      });
    }

    // Check if there are pending earnings
    if (affiliate.pendingEarnings <= 0) {
      return res.status(400).json({
        success: false,
        message: 'No pending earnings to withdraw'
      });
    }

    // Check if bank details are provided
    if (!affiliate.bankDetails || !affiliate.bankDetails.accountNumber) {
      return res.status(400).json({
        success: false,
        message: 'Please update your bank details before requesting payout'
      });
    }

    // Get unpaid active referrals
    const unpaidReferrals = await Referral.find({
      affiliate: affiliate._id,
      status: 'active',
      isPaid: false
    });

    // Create payment request
    const payment = await Payment.create({
      affiliate: affiliate._id,
      amount: affiliate.pendingEarnings,
      currency: process.env.COMMISSION_CURRENCY || 'INR',
      status: 'pending',
      paymentMethod: req.body.paymentMethod || 'bank_transfer',
      referrals: unpaidReferrals.map(r => r._id),
      period: {
        startDate: unpaidReferrals[unpaidReferrals.length - 1]?.activatedAt,
        endDate: new Date()
      }
    });

    res.status(201).json({
      success: true,
      message: 'Payout request submitted successfully',
      data: payment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get all payments (Admin)
// @route   GET /api/payments/all
// @access  Private (Admin)
exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find()
      .populate('affiliate')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: payments.length,
      data: payments
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Process payment (Admin)
// @route   PUT /api/payments/:id/process
// @access  Private (Admin)
exports.processPayment = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: 'Payment not found'
      });
    }

    payment.status = 'processing';
    payment.transactionId = req.body.transactionId;
    await payment.save();

    res.status(200).json({
      success: true,
      data: payment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Complete payment (Admin)
// @route   PUT /api/payments/:id/complete
// @access  Private (Admin)
exports.completePayment = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: 'Payment not found'
      });
    }

    payment.status = 'completed';
    payment.processedAt = Date.now();
    payment.notes = req.body.notes;
    await payment.save();

    // Update affiliate earnings
    const affiliate = await Affiliate.findById(payment.affiliate);
    affiliate.pendingEarnings = Math.max(0, affiliate.pendingEarnings - payment.amount);
    affiliate.paidEarnings += payment.amount;
    await affiliate.save();

    // Mark referrals as paid
    await Referral.updateMany(
      { _id: { $in: payment.referrals } },
      { isPaid: true }
    );

    res.status(200).json({
      success: true,
      data: payment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
