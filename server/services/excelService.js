const ExcelJS = require('exceljs');
const path = require('path');
const fs = require('fs');

const EXCEL_PATH = path.join(__dirname, '../data/signups.xlsx');
const DATA_DIR = path.join(__dirname, '../data');

class ExcelService {
  constructor() {
    this.ensureDataDirectory();
  }

  // Ensure data directory exists
  ensureDataDirectory() {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
  }

  // Create workbook if missing and ensure table-like header
  async ensureWorkbook() {
    const wb = new ExcelJS.Workbook();
    
    if (!fs.existsSync(EXCEL_PATH)) {
      const ws = wb.addWorksheet('User Signups');
      
      // Add headers with styling
      const headerRow = ws.addRow([
        'Timestamp', 
        'Full Name', 
        'Email', 
        'Unique ID',
        'Password',
        'Registration IP',
        'Status'
      ]);
      
      // Style the header row
      headerRow.eachCell((cell) => {
        cell.font = { bold: true, color: { argb: 'FFFFFF' } };
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '13EF96' } // Your brand green
        };
        cell.border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' }
        };
      });

      // Set column widths
      ws.columns = [
        { width: 20 }, // Timestamp
        { width: 25 }, // Full Name
        { width: 30 }, // Email
        { width: 20 }, // Unique ID
        { width: 20 }, // Password
        { width: 15 }, // Registration IP
        { width: 12 }  // Status
      ];

      await wb.xlsx.writeFile(EXCEL_PATH);
      console.log('✅ Excel workbook created successfully');
    }
  }

  // Append a new user signup to the workbook
  async addUser({ name, email, uniqueId, password, ip = 'Unknown' }) {
    try {
      await this.ensureWorkbook();
      
      const wb = new ExcelJS.Workbook();
      await wb.xlsx.readFile(EXCEL_PATH);
      
      let ws = wb.getWorksheet('User Signups');
      if (!ws) {
        ws = wb.addWorksheet('User Signups');
      }

      // Add new user row
      const newRow = ws.addRow([
        new Date().toISOString(),
        name,
        email,
        uniqueId,
        password,
        ip,
        'Active'
      ]);

      // Style the new row
      newRow.eachCell((cell, colNumber) => {
        cell.border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' }
        };
        
        // Alternate row colors
        if (newRow.number % 2 === 0) {
          cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'F8F9FA' }
          };
        }
      });

      await wb.xlsx.writeFile(EXCEL_PATH);
      console.log(`✅ User ${email} added to Excel file`);
      
      return { success: true, message: 'User added successfully' };
    } catch (error) {
      console.error('❌ Error adding user to Excel:', error);
      throw error;
    }
  }



  // Check if user exists by email
  async userExists(email) {
    try {
      if (!fs.existsSync(EXCEL_PATH)) {
        return false;
      }

      const wb = new ExcelJS.Workbook();
      await wb.xlsx.readFile(EXCEL_PATH);
      
      const ws = wb.getWorksheet('User Signups');
      if (!ws) return false;

      let exists = false;
      ws.eachRow((row, rowNumber) => {
        if (rowNumber > 1) { // Skip header row
          const rowEmail = row.getCell(3).value; // Email is in column 3
          if (rowEmail === email) {
            exists = true;
          }
        }
      });

      return exists;
    } catch (error) {
      console.error('❌ Error checking user existence:', error);
      return false;
    }
  }



  // Check if unique ID exists
  async uniqueIdExists(uniqueId) {
    try {
      if (!fs.existsSync(EXCEL_PATH)) {
        return false;
      }

      const wb = new ExcelJS.Workbook();
      await wb.xlsx.readFile(EXCEL_PATH);
      
      const ws = wb.getWorksheet('User Signups');
      if (!ws) return false;

      let exists = false;
      ws.eachRow((row, rowNumber) => {
        if (rowNumber > 1) { // Skip header row
          const rowUniqueId = row.getCell(4).value; // Unique ID is in column 4
          if (rowUniqueId === uniqueId) {
            exists = true;
          }
        }
      });

      return exists;
    } catch (error) {
      console.error('❌ Error checking unique ID existence:', error);
      return false;
    }
  }

  // Get user data by email
  async getUserByEmail(email) {
    try {
      if (!fs.existsSync(EXCEL_PATH)) {
        return null;
      }

      const wb = new ExcelJS.Workbook();
      await wb.xlsx.readFile(EXCEL_PATH);
      
      const ws = wb.getWorksheet('User Signups');
      if (!ws) return null;

      let userData = null;
      ws.eachRow((row, rowNumber) => {
        if (rowNumber > 1) { // Skip header row
          const rowEmail = row.getCell(3).value; // Email is in column 3
          if (rowEmail === email) {
            userData = {
              timestamp: row.getCell(1).value,
              name: row.getCell(2).value,
              email: row.getCell(3).value,
              uniqueId: row.getCell(4).value,
              password: row.getCell(5).value,
              registrationIP: row.getCell(6).value,
              status: row.getCell(7).value
            };
          }
        }
      });

      return userData;
    } catch (error) {
      console.error('❌ Error getting user data:', error);
      return null;
    }
  }

  // Get Excel file path for download
  getExcelFilePath() {
    return EXCEL_PATH;
  }

  // Get all users with name, email, uniqueId, password
  async getAllUsersBasicInfo() {
    try {
      if (!fs.existsSync(EXCEL_PATH)) {
        return [];
      }

      const wb = new ExcelJS.Workbook();
      await wb.xlsx.readFile(EXCEL_PATH);
      
      const ws = wb.getWorksheet('User Signups');
      if (!ws) return [];

      const users = [];
      ws.eachRow((row, rowNumber) => {
        if (rowNumber > 1) { // Skip header row
          const user = {
            timestamp: row.getCell(1).value,
            name: row.getCell(2).value,
            email: row.getCell(3).value,
            uniqueId: row.getCell(4).value,
            password: row.getCell(5).value,
            ip: row.getCell(6).value,
            status: row.getCell(7).value
          };
          users.push(user);
        }
      });

      return users;
    } catch (error) {
      console.error('❌ Error fetching users basic info:', error);
      return [];
    }
  }

  // Get user statistics
  async getUserStats() {
    try {
      if (!fs.existsSync(EXCEL_PATH)) {
        return { totalUsers: 0, activeUsers: 0 };
      }

      const wb = new ExcelJS.Workbook();
      await wb.xlsx.readFile(EXCEL_PATH);
      
      const ws = wb.getWorksheet('User Signups');
      if (!ws) return { totalUsers: 0, activeUsers: 0 };

      let totalUsers = 0;
      let activeUsers = 0;

      ws.eachRow((row, rowNumber) => {
        if (rowNumber > 1) { // Skip header row
          totalUsers++;
          const status = row.getCell(7).value; // Status is now in column 7
          if (status === 'Active') {
            activeUsers++;
          }
        }
      });

      return { totalUsers, activeUsers };
    } catch (error) {
      console.error('❌ Error getting user stats:', error);
      return { totalUsers: 0, activeUsers: 0 };
    }
  }
}

module.exports = new ExcelService();