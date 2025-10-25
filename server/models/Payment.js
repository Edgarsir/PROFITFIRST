const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  affiliate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Affiliate',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    default: 'INR'
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'completed', 'failed', 'cancelled'],
    default: 'pending'
  },
  paymentMethod: {
    type: String,
    enum: ['bank_transfer', 'upi', 'paypal', 'other'],
    default: 'bank_transfer'
  },
  transactionId: {
    type: String,
    unique: true,
    sparse: true
  },
  referrals: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Referral'
  }],
  period: {
    startDate: Date,
    endDate: Date
  },
  processedAt: {
    type: Date
  },
  notes: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Index for faster queries
paymentSchema.index({ affiliate: 1, createdAt: -1 });
paymentSchema.index({ status: 1 });

module.exports = mongoose.model('Payment', paymentSchema);
