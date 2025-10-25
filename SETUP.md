# ProfitFirst - Complete Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

---

## 📦 Installation Steps

### 1. **Clone and Setup**

```bash
cd Profitlast
```

### 2. **Install Frontend Dependencies**

```bash
npm install
```

### 3. **Install Backend Dependencies**

```bash
cd server
npm install
cd ..
```

### 4. **Setup Environment Variables**

**Frontend (.env in root):**
```bash
cp .env.example .env
```

Edit `.env`:
```env
VITE_API_URL=http://localhost:5000/api
```

**Backend (server/.env):**
```bash
cd server
cp .env.example .env
```

Edit `server/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/profitfirst
JWT_SECRET=your_super_secret_jwt_key_change_in_production
JWT_EXPIRE=30d
NODE_ENV=development

# Email Configuration (Optional - for notifications)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password

# Frontend URL
FRONTEND_URL=http://localhost:5173

# Affiliate Commission Settings
COMMISSION_PER_REFERRAL=1000
COMMISSION_CURRENCY=INR
```

### 5. **Start MongoDB**

**Windows:**
```bash
# Start MongoDB service
net start MongoDB
```

**Mac/Linux:**
```bash
mongod
```

### 6. **Run the Application**

**Option A: Run Frontend and Backend Separately**

Terminal 1 (Frontend):
```bash
npm run dev
```

Terminal 2 (Backend):
```bash
cd server
npm run dev
```

**Option B: Run Both Together (Recommended)**

Install concurrently globally:
```bash
npm install -g concurrently
```

Add this script to root `package.json`:
```json
"scripts": {
  "dev": "npm run dev",
  "server": "cd server && npm run dev",
  "dev:all": "concurrently \"npm run dev\" \"npm run server\""
}
```

Then run:
```bash
npm run dev:all
```

---

## 🌐 Access Points

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000/api
- **Health Check**: http://localhost:5000/api/health

---

## 📚 API Documentation

### Authentication Endpoints

**Register:**
```bash
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "referralCode": "ABC123XY"  // Optional
}
```

**Login:**
```bash
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Affiliate Endpoints

**Create Affiliate Account:**
```bash
POST http://localhost:5000/api/affiliate/create
Authorization: Bearer YOUR_JWT_TOKEN
```

**Get Dashboard:**
```bash
GET http://localhost:5000/api/affiliate/dashboard
Authorization: Bearer YOUR_JWT_TOKEN
```

**Track Click:**
```bash
POST http://localhost:5000/api/affiliate/track-click
Content-Type: application/json

{
  "affiliateCode": "ABC123XY"
}
```

---

## 🗄️ Database Structure

### Collections

1. **users** - User accounts
2. **affiliates** - Affiliate accounts with referral codes
3. **referrals** - Referral tracking
4. **payments** - Payment requests and history

---

## 🔒 Security Features

- ✅ JWT Authentication
- ✅ Password hashing with bcrypt
- ✅ Role-based access control (User, Affiliate, Admin)
- ✅ CORS protection
- ✅ Input validation
- ✅ MongoDB injection prevention

---

## 🧪 Testing the Backend

### Using cURL

**Health Check:**
```bash
curl http://localhost:5000/api/health
```

**Register User:**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123"
  }'
```

### Using Postman

1. Import the API endpoints
2. Set Base URL: `http://localhost:5000/api`
3. For protected routes, add header:
   - Key: `Authorization`
   - Value: `Bearer YOUR_JWT_TOKEN`

---

## 🎯 Frontend Integration

The frontend API service is already configured in `src/services/api.ts`.

**Example Usage:**

```typescript
import { authAPI, affiliateAPI } from './services/api';

// Register user
const response = await authAPI.register({
  name: 'John Doe',
  email: 'john@example.com',
  password: 'password123'
});

// Create affiliate
const affiliate = await affiliateAPI.createAffiliate();

// Get dashboard
const dashboard = await affiliateAPI.getDashboard();
```

---

## 📊 Admin Features

Create admin user manually in MongoDB:

```javascript
// In MongoDB shell
use profitfirst

db.users.updateOne(
  { email: "admin@profitfirst.com" },
  { $set: { role: "admin" } }
)
```

Admin can:
- View all affiliates
- Activate/deactivate referrals
- Process payments
- View all transactions

---

## 🐛 Troubleshooting

### MongoDB Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution:** Make sure MongoDB is running
```bash
# Windows
net start MongoDB

# Mac/Linux
sudo systemctl start mongod
```

### Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::5000
```
**Solution:** Change PORT in `server/.env` or kill the process using port 5000

### JWT Token Invalid
**Solution:** Make sure JWT_SECRET is set in `server/.env`

### CORS Error
**Solution:** Check FRONTEND_URL in `server/.env` matches your frontend URL

---

## 📝 Development Tips

1. **Hot Reload**: Both frontend and backend support hot reload in dev mode
2. **Database GUI**: Use MongoDB Compass to view database visually
3. **API Testing**: Use Postman or Thunder Client VS Code extension
4. **Logs**: Check console for detailed error messages

---

## 🚢 Production Deployment

### Backend Deployment (Heroku/Railway/Render)

1. Set environment variables in hosting platform
2. Set `NODE_ENV=production`
3. Use production MongoDB URI (MongoDB Atlas)
4. Use strong JWT_SECRET

### Frontend Deployment (Vercel/Netlify)

1. Build frontend: `npm run build`
2. Set `VITE_API_URL` to production backend URL
3. Deploy `dist` folder

---

## 📞 Support

For issues or questions:
- Check the logs in terminal
- Review the API documentation in `server/README.md`
- Check MongoDB is running properly

---

## 🎉 Success!

If everything is set up correctly, you should see:
- ✅ Frontend running on http://localhost:5173
- ✅ Backend running on http://localhost:5000
- ✅ MongoDB connected
- ✅ Animations working smoothly
- ✅ API responding to requests

Enjoy building with ProfitFirst! 🚀
