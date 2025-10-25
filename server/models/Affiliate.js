const mongoose = require('mongoose');
const crypto = require('crypto');

const affiliateSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  affiliateCode: {
    type: String,
    unique: true,
    required: true
  },
  referralLink: {
    type: String,
    required: true
  },

  totalReferrals: {
    type: Number,
    default: 0
  },
  activeReferrals: {
    type: Number,
    default: 0
  },
  totalEarnings: {
    type: Number,
    default: 0
  },
  pendingEarnings: {
    type: Number,
    default: 0
  },
  paidEarnings: {
    type: Number,
    default: 0
  },
  commissionRate: {
    type: Number,
    default: 0.10
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'suspended'],
    default: 'active'
  },
  bankDetails: {
    accountNumber: String,
    ifscCode: String,
    accountHolderName: String,
    bankName: String,
    upiId: String
  },
  statistics: {
    clicks: { type: Number, default: 0 },
    signups: { type: Number, default: 0 },
    conversionRate: { type: Number, default: 0 }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Generate unique affiliate code
affiliateSchema.statics.generateAffiliateCode = function() {
  return crypto.randomBytes(4).toString('hex').toUpperCase();
};

// Calculate conversion rate
affiliateSchema.methods.calculateConversionRate = function() {
  if (this.statistics.clicks === 0) return 0;
  return ((this.statistics.signups / this.statistics.clicks) * 100).toFixed(2);
};

module.exports = mongoose.model('Affiliate', affiliateSchema);
