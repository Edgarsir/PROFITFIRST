import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid - clear and redirect to login
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Authentication API
export const authAPI = {
  register: (data: { name: string; email: string; password: string; referralCode?: string }) =>
    api.post('/auth/register', data),
  
  login: (data: { email: string; password: string }) =>
    api.post('/auth/login', data),
  
  getMe: () =>
    api.get('/auth/me'),
  
  updatePassword: (data: { currentPassword: string; newPassword: string }) =>
    api.put('/auth/update-password', data),
  
  updateProfile: (data: { name: string; email: string }) =>
    api.put('/auth/update-profile', data),
  
  forgotPassword: (email: string) =>
    api.post('/auth/forgot-password', { email }),
  
  resetPassword: (token: string, password: string) =>
    api.put(`/auth/reset-password/${token}`, { password }),
};

// Affiliate API
export const affiliateAPI = {
  createAffiliate: () =>
    api.post('/affiliate/create'),
  
  getDashboard: () =>
    api.get('/affiliate/dashboard'),
  
  getMyAffiliate: () =>
    api.get('/affiliate/my-affiliate'),
  
  updateBankDetails: (data: {
    accountNumber: string;
    ifscCode: string;
    accountHolderName: string;
    bankName: string;
    upiId?: string;
  }) =>
    api.put('/affiliate/update-bank-details', data),
  
  getStats: () =>
    api.get('/affiliate/stats'),
  
  trackClick: (affiliateCode: string) =>
    api.post('/affiliate/track-click', { affiliateCode }),
  
  // Admin only
  getAllAffiliates: () =>
    api.get('/affiliate/all'),
  
  updateStatus: (id: string, status: string) =>
    api.put(`/affiliate/${id}/status`, { status }),
};

// Referral API
export const referralAPI = {
  getMyReferrals: (page = 1, limit = 10) =>
    api.get(`/referrals/my-referrals?page=${page}&limit=${limit}`),
  
  // Admin only
  activateReferral: (id: string) =>
    api.put(`/referrals/${id}/activate`),
  
  deactivateReferral: (id: string) =>
    api.put(`/referrals/${id}/deactivate`),
  
  getAllReferrals: (page = 1, limit = 20) =>
    api.get(`/referrals/all?page=${page}&limit=${limit}`),
};

// Payment API
export const paymentAPI = {
  getMyPayments: () =>
    api.get('/payments/my-payments'),
  
  requestPayout: (paymentMethod = 'bank_transfer') =>
    api.post('/payments/request-payout', { paymentMethod }),
  
  // Admin only
  getAllPayments: () =>
    api.get('/payments/all'),
  
  processPayment: (id: string, transactionId: string) =>
    api.put(`/payments/${id}/process`, { transactionId }),
  
  completePayment: (id: string, notes?: string) =>
    api.put(`/payments/${id}/complete`, { notes }),
};

// Helper functions
export const setAuthToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const removeAuthToken = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

export const getAuthToken = () => {
  return localStorage.getItem('token');
};

export default api;
