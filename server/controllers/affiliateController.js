const db = require('../services/databaseService');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @desc    Create affiliate account
// @route   POST /api/affiliate/create
// @access  Private
exports.createAffiliate = async (req, res) => {
  try {
    // Check if user already has an affiliate account
    const existingAffiliate = await db.findAffiliateByUserId(req.user.id);
    if (existingAffiliate) {
      return res.status(400).json({
        success: false,
        message: 'You already have an affiliate account'
      });
    }

    // Generate unique affiliate code
    let affiliateCode;
    let isUnique = false;

    while (!isUnique) {
      affiliateCode = db.generateAffiliateCode();
      const existing = await db.findAffiliateByCode(affiliateCode);
      if (!existing) isUnique = true;
    }

    // Get user information
    const user = await db.findUserById(req.user.id);

    // Create affiliate locally
    const affiliate = await db.createAffiliate({
      user: req.user.id,
      affiliateCode,
      referralLink: `${process.env.FRONTEND_URL}?ref=${affiliateCode}`
    });

    // Update user role
    await db.updateUser(req.user.id, {
      role: 'affiliate',
      affiliateId: affiliate.id
    });

    res.status(201).json({
      success: true,
      data: {
        affiliate
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get affiliate dashboard
// @route   GET /api/affiliate/dashboard
// @access  Private (Affiliate)
exports.getDashboard = async (req, res) => {
  try {
    const affiliate = await db.findAffiliateByUserId(req.user.id);

    if (!affiliate) {
      return res.status(404).json({
        success: false,
        message: 'Affiliate account not found'
      });
    }

    // Get recent referrals
    const referrals = await db.getReferralsByAffiliate(affiliate.id, 10);

    // Calculate earnings by month (simplified for now)
    const monthlyEarnings = [];

    res.status(200).json({
      success: true,
      data: {
        affiliate,
        referrals,
        monthlyEarnings
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get my affiliate info
// @route   GET /api/affiliate/my-affiliate
// @access  Private
exports.getMyAffiliate = async (req, res) => {
  try {
    const affiliate = await db.findAffiliateByUserId(req.user.id);

    if (!affiliate) {
      return res.status(404).json({
        success: false,
        message: 'You do not have an affiliate account'
      });
    }

    res.status(200).json({
      success: true,
      data: affiliate
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Update bank details
// @route   PUT /api/affiliate/update-bank-details
// @access  Private (Affiliate)
exports.updateBankDetails = async (req, res) => {
  try {
    const { accountNumber, ifscCode, accountHolderName, bankName, upiId } = req.body;

    const affiliate = await db.findAffiliateByUserId(req.user.id);

    if (!affiliate) {
      return res.status(404).json({
        success: false,
        message: 'Affiliate account not found'
      });
    }

    affiliate.bank_details = {
      accountNumber,
      ifscCode,
      accountHolderName,
      bankName,
      upiId
    };

    await db.updateAffiliate(affiliate.id, { bank_details: affiliate.bank_details });

    res.status(200).json({
      success: true,
      data: affiliate
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get affiliate stats
// @route   GET /api/affiliate/stats
// @access  Private (Affiliate)
exports.getStats = async (req, res) => {
  try {
    const affiliate = await db.findAffiliateByUserId(req.user.id);

    if (!affiliate) {
      return res.status(404).json({
        success: false,
        message: 'Affiliate account not found'
      });
    }

    // Get referral status breakdown
    const statusBreakdown = await db.getStatusBreakdown(affiliate.id);

    // Calculate conversion rate
    affiliate.statistics.conversionRate = affiliate.statistics.clicks === 0 ?
      0 : ((affiliate.statistics.signups / affiliate.statistics.clicks) * 100).toFixed(2);

    res.status(200).json({
      success: true,
      data: {
        ...affiliate,
        statusBreakdown
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Track affiliate link click
// @route   POST /api/affiliate/track-click
// @access  Public
exports.trackClick = async (req, res) => {
  try {
    const { affiliateCode } = req.body;

    const affiliate = await db.findAffiliateByCode(affiliateCode);

    if (!affiliate) {
      return res.status(404).json({
        success: false,
        message: 'Invalid affiliate code'
      });
    }

    // Increment click count
    affiliate.statistics.clicks += 1;
    await db.updateAffiliate(affiliate.id, {
      statistics: affiliate.statistics
    });

    res.status(200).json({
      success: true,
      message: 'Click tracked successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get all affiliates (Admin)
// @route   GET /api/affiliate/all
// @access  Private (Admin)
exports.getAllAffiliates = async (req, res) => {
  try {
    const affiliates = await db.getAllAffiliates();

    res.status(200).json({
      success: true,
      count: affiliates.length,
      data: affiliates
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Update affiliate status (Admin)
// @route   PUT /api/affiliate/:id/status
// @access  Private (Admin)
exports.updateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const affiliate = await db.findAffiliateByUserId(req.params.id);
    if (!affiliate) {
      return res.status(404).json({
        success: false,
        message: 'Affiliate not found'
      });
    }

    await db.updateAffiliate(affiliate.id, { status });

    res.status(200).json({
      success: true,
      data: { ...affiliate, status }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};