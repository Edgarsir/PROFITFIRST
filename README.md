# PROFITFIRST

A modern affiliate program platform built with React, Vite, and Express.

## Features

- 🎨 Modern, responsive UI with Tailwind CSS
- 🔐 User signup with unique ID and password
- 📊 Admin dashboard to view all signups
- 📁 File-based storage using Excel (no database required)
- ⚡ Fast development with Vite
- 🎭 Smooth animations with Framer Motion

## Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM

### Backend
- Node.js
- Express
- ExcelJS (for data storage)
- CORS
- Validator

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Edgarsir/PROFITFIRST.git
cd PROFITFIRST
```

2. Install frontend dependencies:
```bash
npm install
```

3. Install backend dependencies:
```bash
cd server
npm install
cd ..
```

4. Create environment files:

**Root `.env` file:**
```env
VITE_API_URL=http://localhost:5000/api
```

**Server `.env` file (server/.env):**
```env
PORT=5000
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=30d
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Running the Application

1. Start the backend server:
```bash
cd server
npm start
```

2. In a new terminal, start the frontend:
```bash
npm run dev
```

3. Open your browser and navigate to:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## Project Structure

```
PROFITFIRST/
├── src/                    # Frontend source code
│   ├── screens/           # Page components
│   ├── components/        # Reusable components
│   └── utils/            # Utility functions
├── server/                # Backend source code
│   ├── controllers/      # Request handlers
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   └── data/           # Excel data storage
├── public/              # Static assets
└── package.json        # Frontend dependencies
```

## API Endpoints

### Signup
- **POST** `/api/signup`
  - Body: `{ name, email, uniqueId, password }`
  - Creates a new user signup

### Admin
- **GET** `/api/admin/signups` - Get all signups
- **GET** `/api/admin/download-excel` - Download Excel file
- **GET** `/api/admin/stats` - Get signup statistics

## Data Storage

User signups are stored in an Excel file at `server/data/signups.xlsx` with the following columns:
- Timestamp
- Full Name
- Email
- Unique ID
- Password
- Registration IP
- Status

## Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variable: `VITE_API_URL`
4. Deploy

### Backend (Render/Railway)
1. Deploy backend to a platform with persistent storage
2. Set environment variables
3. Update frontend `VITE_API_URL` to point to deployed backend

**Note:** The Excel file storage approach works locally but requires a database (like Supabase) for serverless deployments like Vercel.

## Contributing

Pull requests are welcome! For major changes, please open an issue first.

## License

MIT

## Author

Created with ❤️ for ProfitFirst Affiliate Program
