# File-Based Storage System

This application uses a **simple file-based storage system** instead of a database. All user signups are stored in an Excel file.

## How It Works

### Storage Location
- All signups are stored in: `server/data/signups.xlsx`
- The file is automatically created when the first user signs up
- No database setup or configuration required!

### Excel File Structure
The Excel file contains the following columns:
1. **Timestamp** - When the user signed up
2. **Full Name** - User's full name
3. **Email** - User's email address
4. **Unique ID** - User's unique identifier
5. **Password** - User's password (stored as plain text)
6. **Registration IP** - IP address of the user
7. **Status** - Account status (Active/Inactive)

### Benefits of File-Based Storage
- ✅ **No Database Required** - No MongoDB, PostgreSQL, or any database setup
- ✅ **Easy to View** - Open the Excel file directly in Excel/Google Sheets
- ✅ **Easy to Backup** - Just copy the `signups.xlsx` file
- ✅ **Easy to Share** - Send the Excel file to anyone
- ✅ **No Hosting Costs** - No database hosting fees
- ✅ **Simple Deployment** - Works on any server without database configuration

### Accessing the Data

#### View in Excel/Google Sheets
Simply open `server/data/signups.xlsx` in:
- Microsoft Excel
- Google Sheets (upload the file)
- LibreOffice Calc
- Any spreadsheet application

#### Download via API
The admin can download the Excel file through the application interface.

### Backup Strategy
To backup your data:
1. Copy the `server/data/signups.xlsx` file
2. Store it in a safe location (cloud storage, external drive, etc.)
3. You can also set up automatic backups using a simple script

### Limitations
- Not suitable for very high traffic (1000+ signups per minute)
- File locking can occur if multiple processes try to write simultaneously
- For this use case (affiliate signups), it's perfect!

### When to Upgrade to a Database
Consider upgrading to a database if:
- You have more than 10,000 signups
- You need complex queries and relationships
- You have multiple servers accessing the same data
- You need real-time concurrent access from many users

For a simple affiliate signup system, this file-based approach is ideal!
