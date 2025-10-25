const mongoose = require('mongoose');

const referralSchema = new mongoose.Schema({
  affiliate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Affiliate',
    required: true
  },
  referredUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  },
  transactionId: {
    type: String,
    required: false
  },
  amount: {
    type: Number,
    required: false
  },
  currency: {
    type: String,
    default: 'INR'
  },
  source: {
    type: String,
    enum: ['local'],
    default: 'local'
  },
  commission: {
    type: Number,
    default: 0
  },
  isPaid: {
    type: Boolean,
    default: false
  },
  activatedAt: {
    type: Date
  },
  metadata: {
    ipAddress: String,
    userAgent: String,
    referralSource: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Indexes for faster queries
referralSchema.index({ affiliate: 1, createdAt: -1 });
referralSchema.index({ status: 1 });

module.exports = mongoose.model('Referral', referralSchema);
