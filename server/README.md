# ProfitFirst Backend API

Backend server for the ProfitFirst Affiliate Program platform.

## Features

- 🔐 **Authentication & Authorization**: JWT-based authentication with role-based access control
- 👥 **User Management**: User registration, login, profile management
- 💼 **Affiliate System**: Complete affiliate tracking and management
- 🔗 **Referral Tracking**: Track clicks, signups, and conversions
- 💰 **Payment Management**: Handle payouts and commission tracking
- 📊 **Dashboard & Analytics**: Comprehensive statistics and reporting

## Tech Stack

- **Node.js** & **Express.js**
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcryptjs** for password hashing
- **Nodemailer** for email notifications

## Installation

1. **Install Dependencies**
```bash
cd server
npm install
```

2. **Environment Setup**
```bash
cp .env.example .env
```

Edit `.env` file with your configuration:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/profitfirst
JWT_SECRET=your_secret_key_here
FRONTEND_URL=http://localhost:5173
```

3. **Start MongoDB**
```bash
# Make sure MongoDB is running
mongod
```

4. **Run the Server**
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

## API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/register` | Register new user | Public |
| POST | `/login` | Login user | Public |
| GET | `/me` | Get current user | Private |
| PUT | `/update-password` | Update password | Private |
| PUT | `/update-profile` | Update profile | Private |
| POST | `/forgot-password` | Request password reset | Public |
| PUT | `/reset-password/:token` | Reset password | Public |

### Affiliate Routes (`/api/affiliate`)

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/create` | Create affiliate account | Private |
| GET | `/dashboard` | Get affiliate dashboard | Affiliate |
| GET | `/my-affiliate` | Get my affiliate info | Private |
| PUT | `/update-bank-details` | Update bank details | Affiliate |
| GET | `/stats` | Get affiliate statistics | Affiliate |
| POST | `/track-click` | Track affiliate link click | Public |
| GET | `/all` | Get all affiliates | Admin |
| PUT | `/:id/status` | Update affiliate status | Admin |

### Referral Routes (`/api/referrals`)

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/my-referrals` | Get my referrals | Affiliate |
| PUT | `/:id/activate` | Activate referral | Admin |
| PUT | `/:id/deactivate` | Deactivate referral | Admin |
| GET | `/all` | Get all referrals | Admin |

### Payment Routes (`/api/payments`)

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/my-payments` | Get my payments | Affiliate |
| POST | `/request-payout` | Request payout | Affiliate |
| GET | `/all` | Get all payments | Admin |
| PUT | `/:id/process` | Process payment | Admin |
| PUT | `/:id/complete` | Complete payment | Admin |

## API Usage Examples

### Register User
```javascript
POST /api/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "referralCode": "ABC123XY" // Optional
}
```

### Login
```javascript
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "password123"
}

Response:
{
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

### Create Affiliate Account
```javascript
POST /api/affiliate/create
Headers: { "Authorization": "Bearer jwt_token_here" }

Response:
{
  "success": true,
  "data": {
    "affiliateCode": "ABC123XY",
    "referralLink": "http://localhost:5173?ref=ABC123XY",
    "totalReferrals": 0,
    "totalEarnings": 0
  }
}
```

### Get Affiliate Dashboard
```javascript
GET /api/affiliate/dashboard
Headers: { "Authorization": "Bearer jwt_token_here" }

Response:
{
  "success": true,
  "data": {
    "affiliate": { /* affiliate data */ },
    "referrals": [ /* recent referrals */ ],
    "monthlyEarnings": [ /* earnings by month */ ]
  }
}
```

### Request Payout
```javascript
POST /api/payments/request-payout
Headers: { "Authorization": "Bearer jwt_token_here" }
{
  "paymentMethod": "bank_transfer"
}
```

## Database Models

### User Model
- Basic user information
- Authentication credentials
- Role-based access

### Affiliate Model
- Unique affiliate code
- Referral link
- Earnings tracking
- Bank details
- Statistics

### Referral Model
- Affiliate reference
- Referred user
- Status tracking
- Commission details

### Payment Model
- Payment requests
- Transaction tracking
- Status management

## Error Handling

All API responses follow this format:

**Success Response:**
```json
{
  "success": true,
  "data": { /* response data */ }
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error message here"
}
```

## Security Features

- ✅ Password hashing with bcrypt
- ✅ JWT authentication
- ✅ Role-based authorization
- ✅ Input validation
- ✅ CORS protection
- ✅ MongoDB injection prevention

## Development

### Project Structure
```
server/
├── controllers/      # Request handlers
├── models/          # Database models
├── routes/          # API routes
├── middleware/      # Custom middleware
├── .env.example     # Environment variables template
├── server.js        # Main server file
└── package.json     # Dependencies
```

### Adding New Features

1. Create model in `models/`
2. Create controller in `controllers/`
3. Create routes in `routes/`
4. Import routes in `server.js`

## Deployment

1. Set `NODE_ENV=production` in `.env`
2. Use a production MongoDB instance
3. Set strong `JWT_SECRET`
4. Configure proper CORS settings
5. Use process manager (PM2 recommended)

```bash
# Install PM2
npm install -g pm2

# Start with PM2
pm2 start server.js --name profitfirst-api

# Monitor
pm2 monit
```

## Support

For issues and questions, please contact the development team.

## License

Proprietary - All rights reserved
