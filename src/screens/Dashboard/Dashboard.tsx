import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeSlideUp, hoverGlow } from '../../utils/animations';

interface User {
  name: string;
  email: string;
  phone?: string;
  registrationDate: string;
  lastLogin: string;
  status: string;
}

export const Dashboard = (): JSX.Element => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token || !userData) {
      navigate('/login');
      return;
    }

    try {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    } catch (err) {
      console.error('Error parsing user data:', err);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/login');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#13ef96] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 mb-4">Error loading user data</p>
          <button
            onClick={() => navigate('/login')}
            className="bg-[#13ef96] text-black px-6 py-2 rounded-md font-medium"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-[300px] h-[300px] rounded-full bg-[#2d4022] blur-[100px] opacity-30" />
        <div className="absolute bottom-20 right-20 w-[250px] h-[250px] rounded-full bg-[#2d4022] blur-[100px] opacity-30" />
      </div>

      {/* Header */}
      <motion.header
        className="relative z-10 bg-[#1e1e1e] border-b border-[#ffffff1a]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                className="w-8 h-8"
                alt="Profit First Logo"
                src="https://c.animaapp.com/L87tdvSe/img/icon-2@2x.png"
              />
              <h1 className="text-xl font-bold text-white">ProfitFirst Dashboard</h1>
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <span className="text-gray-300">Welcome, {user.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          className="mb-8"
          variants={fadeSlideUp}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold text-white mb-2">
            Welcome to Your Affiliate Dashboard! 🎉
          </h2>
          <p className="text-gray-300 text-lg">
            You're now part of the ProfitFirst Affiliate Program. Start earning ₹1,00,000+ every month!
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Earnings Card */}
          <div className="bg-[#1e1e1e] rounded-lg p-6 border border-[#ffffff1a]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#13ef96] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">₹</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Total Earnings</h3>
                <p className="text-gray-400 text-sm">This month</p>
              </div>
            </div>
            <p className="text-3xl font-bold text-[#13ef96]">₹0</p>
            <p className="text-gray-400 text-sm mt-2">Start referring to earn!</p>
          </div>

          {/* Referrals Card */}
          <div className="bg-[#1e1e1e] rounded-lg p-6 border border-[#ffffff1a]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold">Active Referrals</h3>
                <p className="text-gray-400 text-sm">Paying customers</p>
              </div>
            </div>
            <p className="text-3xl font-bold text-blue-400">0</p>
            <p className="text-gray-400 text-sm mt-2">₹1,000 per active referral</p>
          </div>

          {/* Clicks Card */}
          <div className="bg-[#1e1e1e] rounded-lg p-6 border border-[#ffffff1a]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold">Link Clicks</h3>
                <p className="text-gray-400 text-sm">Total clicks</p>
              </div>
            </div>
            <p className="text-3xl font-bold text-purple-400">0</p>
            <p className="text-gray-400 text-sm mt-2">Share your link to get clicks</p>
          </div>
        </motion.div>

        {/* Account Information */}
        <motion.div
          className="bg-[#1e1e1e] rounded-2xl p-6 border border-[#ffffff1a] mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-white mb-6">Account Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-400 text-sm mb-1">Full Name</label>
              <p className="text-white font-medium">{user.name}</p>
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-1">Email Address</label>
              <p className="text-white font-medium">{user.email}</p>
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-1">Phone Number</label>
              <p className="text-white font-medium">{user.phone || 'Not provided'}</p>
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-1">Account Status</label>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#13ef96]/10 text-[#13ef96]">
                Active
              </span>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          className="bg-[#1e1e1e] rounded-2xl p-6 border border-[#ffffff1a]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <motion.button
              className="bg-[#13ef96] text-black font-semibold py-4 px-6 rounded-xl text-left"
              whileHover={hoverGlow}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
                <div>
                  <p className="font-bold">Get Referral Link</p>
                  <p className="text-sm opacity-80">Share and start earning</p>
                </div>
              </div>
            </motion.button>

            <motion.button
              className="bg-[#2a2a2a] text-white font-semibold py-4 px-6 rounded-xl text-left border border-[#ffffff1a]"
              whileHover={{ backgroundColor: "#333333" }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-bold">View Earnings</p>
                  <p className="text-sm opacity-80">Track your income</p>
                </div>
              </div>
            </motion.button>

            <motion.button
              className="bg-[#2a2a2a] text-white font-semibold py-4 px-6 rounded-xl text-left border border-[#ffffff1a]"
              whileHover={{ backgroundColor: "#333333" }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-bold">Help & Support</p>
                  <p className="text-sm opacity-80">Get assistance</p>
                </div>
              </div>
            </motion.button>
          </div>
        </motion.div>

        {/* Coming Soon Notice */}
        <motion.div
          className="mt-8 bg-gradient-to-r from-[#13ef96]/10 to-[#13ef96]/5 border border-[#13ef96]/20 rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-[#13ef96] rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="text-[#13ef96] font-bold">Full Dashboard Coming Soon!</h4>
          </div>
          <p className="text-gray-300">
            We're building advanced features like referral tracking, detailed analytics, payment history, and marketing materials. 
            Your account is active and ready - we'll notify you when new features are available!
          </p>
        </motion.div>
      </main>
    </div>
  );
};