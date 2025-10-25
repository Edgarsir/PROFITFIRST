const Referral = require('../models/Referral');
const Affiliate = require('../models/Affiliate');

// @desc    Get my referrals
// @route   GET /api/referrals/my-referrals
// @access  Private (Affiliate)
exports.getMyReferrals = async (req, res) => {
  try {
    const affiliate = await Affiliate.findOne({ user: req.user.id });

    if (!affiliate) {
      return res.status(404).json({
        success: false,
        message: 'Affiliate account not found'
      });
    }

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const referrals = await Referral.find({ affiliate: affiliate._id })
      .populate('referredUser', 'name email createdAt')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Referral.countDocuments({ affiliate: affiliate._id });

    res.status(200).json({
      success: true,
      count: referrals.length,
      total,
      page,
      pages: Math.ceil(total / limit),
      data: referrals
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Activate referral
// @route   PUT /api/referrals/:id/activate
// @access  Private (Admin)
exports.activateReferral = async (req, res) => {
  try {
    const referral = await Referral.findById(req.params.id);

    if (!referral) {
      return res.status(404).json({
        success: false,
        message: 'Referral not found'
      });
    }

    referral.status = 'active';
    referral.activatedAt = Date.now();
    referral.commission = process.env.COMMISSION_PER_REFERRAL || 1000;
    await referral.save();

    // Update affiliate stats
    const affiliate = await Affiliate.findById(referral.affiliate);
    affiliate.activeReferrals += 1;
    affiliate.pendingEarnings += referral.commission;
    affiliate.totalEarnings += referral.commission;
    await affiliate.save();

    res.status(200).json({
      success: true,
      data: referral
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Deactivate referral
// @route   PUT /api/referrals/:id/deactivate
// @access  Private (Admin)
exports.deactivateReferral = async (req, res) => {
  try {
    const referral = await Referral.findById(req.params.id);

    if (!referral) {
      return res.status(404).json({
        success: false,
        message: 'Referral not found'
      });
    }

    const previousStatus = referral.status;
    referral.status = 'inactive';
    await referral.save();

    // Update affiliate stats if was active
    if (previousStatus === 'active') {
      const affiliate = await Affiliate.findById(referral.affiliate);
      affiliate.activeReferrals = Math.max(0, affiliate.activeReferrals - 1);
      if (!referral.isPaid) {
        affiliate.pendingEarnings = Math.max(0, affiliate.pendingEarnings - referral.commission);
      }
      await affiliate.save();
    }

    res.status(200).json({
      success: true,
      data: referral
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get all referrals (Admin)
// @route   GET /api/referrals/all
// @access  Private (Admin)
exports.getAllReferrals = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const referrals = await Referral.find()
      .populate('affiliate', 'affiliateCode')
      .populate('referredUser', 'name email')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Referral.countDocuments();

    res.status(200).json({
      success: true,
      count: referrals.length,
      total,
      page,
      pages: Math.ceil(total / limit),
      data: referrals
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
