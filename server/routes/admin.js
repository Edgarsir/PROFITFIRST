const express = require('express');
const router = express.Router();
const axios = require('axios');

const GOOGLE_SHEET_URL = process.env.GOOGLE_SHEET_URL || 'https://script.google.com/macros/s/AKfycbweSB2D93Ml09iYNKmYNsTNN4IGDd_ZRZ3At51H0Q9uLoupjoSdmIUoJMzekA02jz--/exec';

// Get all signups from Google Sheets
router.get('/signups', async (req, res) => {
  try {
    const response = await axios.get(GOOGLE_SHEET_URL);
    const users = response.data.data || [];
    
    res.json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    console.error('Error fetching signups:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching signups from Google Sheets'
    });
  }
});

// Get Google Sheets URL
router.get('/sheet-url', async (req, res) => {
  try {
    res.json({
      success: true,
      message: 'Open this URL to view your Google Sheet',
      url: 'https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error getting sheet URL'
    });
  }
});

// Get signup statistics
router.get('/stats', async (req, res) => {
  try {
    const response = await axios.get(GOOGLE_SHEET_URL);
    const users = response.data.data || [];
    
    const totalUsers = users.length;
    const activeUsers = users.filter(u => u.status === 'Active').length;
    
    res.json({
      success: true,
      data: {
        totalUsers,
        activeUsers
      }
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching statistics'
    });
  }
});

module.exports = router;
