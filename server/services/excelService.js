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
        'Phone Number', 
        'Password Hash', 
        'Status',
        'Registration IP',
        'Last Login'
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
        { width: 15 }, // Phone Number
        { width: 20 }, // Password Hash
        { width: 12 }, // Status
        { width: 15 }, // Registration IP
        { width: 20 }  // Last Login
      ];

      await wb.xlsx.writeFile(EXCEL_PATH);
      console.log('✅ Excel workbook created successfully');
    }
  }

  // Append a new user signup to the workbook
  async addUser({ name, email, phone, passwordHash, ip = 'Unknown' }) {
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
        phone || 'Not provided',
        passwordHash,
        'Active',
        ip,
        'Never'
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

  // Update user's last login time
  async updateLastLogin(email) {
    try {
      const wb = new ExcelJS.Workbook();
      await wb.xlsx.readFile(EXCEL_PATH);
      
      const ws = wb.getWorksheet('User Signups');
      if (!ws) return;

      // Find user row by email
      ws.eachRow((row, rowNumber) => {
        if (rowNumber > 1) { // Skip header row
          const rowEmail = row.getCell(3).value; // Email is in column 3
          if (rowEmail === email) {
            row.getCell(8).value = new Date().toISOString(); // Last Login is column 8
          }
        }
      });

      await wb.xlsx.writeFile(EXCEL_PATH);
      console.log(`✅ Updated last login for ${email}`);
    } catch (error) {
      console.error('❌ Error updating last login:', error);
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
              phone: row.getCell(4).value,
              passwordHash: row.getCell(5).value,
              status: row.getCell(6).value,
              registrationIP: row.getCell(7).value,
              lastLogin: row.getCell(8).value
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

  // Get all users with name, number, email, password
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
            name: row.getCell(2).value,
            email: row.getCell(3).value,
            number: row.getCell(4).value,
            password: row.getCell(5).value // This is the password hash
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
          const status = row.getCell(6).value;
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