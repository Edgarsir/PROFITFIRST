const express = require('express');
const router = express.Router();
const excelService = require('../services/excelService');
const path = require('path');

// Get all signups
router.get('/signups', async (req, res) => {
  try {
    const users = await excelService.getAllUsersBasicInfo();
    
    res.json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    console.error('Error fetching signups:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching signups'
    });
  }
});

// Download Excel file
router.get('/download-excel', async (req, res) => {
  try {
    const filePath = excelService.getExcelFilePath();
    
    res.download(filePath, 'signups.xlsx', (err) => {
      if (err) {
        console.error('Error downloading file:', err);
        res.status(500).json({
          success: false,
          message: 'Error downloading file'
        });
      }
    });
  } catch (error) {
    console.error('Error downloading Excel:', error);
    res.status(500).json({
      success: false,
      message: 'Error downloading Excel file'
    });
  }
});

// Get signup statistics
router.get('/stats', async (req, res) => {
  try {
    const stats = await excelService.getUserStats();
    
    res.json({
      success: true,
      data: stats
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
