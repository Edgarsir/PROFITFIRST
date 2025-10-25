import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeSlideUp, hoverGlow } from '../../utils/animations';

interface FormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
  general?: string;
}

export const SignupPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (Indian format) - optional
    if (formData.phone && !/^[6-9]\d{9}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});

    try {
      const apiUrl = `${(import.meta as any).env.VITE_API_URL}/auth/signup`;
      console.log('Attempting to call API:', apiUrl);
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone.trim() || undefined,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        // Store token
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        // Redirect to dashboard after 2 seconds
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      } else {
        setErrors({ general: data.message || 'Registration failed. Please try again.' });
      }
    } catch (error) {
      console.error('Signup error:', error);
      setErrors({ general: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <motion.div
          className="max-w-md w-full text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-[#1e1e1e] rounded-2xl p-8 border border-[#13ef96]/20">
            <div className="w-16 h-16 bg-[#13ef96] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Welcome to ProfitFirst!</h2>
            <p className="text-gray-300 mb-6">
              Your account has been created successfully. You're being redirected to your dashboard...
            </p>
            <div className="w-full bg-[#2a2a2a] rounded-full h-2">
              <motion.div
                className="bg-[#13ef96] h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-8">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-[300px] h-[300px] rounded-full bg-[#2d4022] blur-[100px] opacity-50" />
        <div className="absolute bottom-20 right-20 w-[250px] h-[250px] rounded-full bg-[#2d4022] blur-[100px] opacity-50" />
      </div>

      <motion.div
        className="max-w-md w-full relative z-10"
        variants={fadeSlideUp}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img
              className="w-12 h-12"
              alt="Profit First Logo"
              src="https://c.animaapp.com/L87tdvSe/img/icon-2@2x.png"
            />
            <h1 className="text-3xl font-bold text-white">ProfitFirst</h1>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Join Our Affiliate Program</h2>
          <p className="text-gray-300">Start earning ₹1,00,000+ every month</p>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-[#1e1e1e] rounded-2xl p-8 border border-[#ffffff1a]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* General Error */}
          {errors.general && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-red-400 text-sm">{errors.general}</p>
            </div>
          )}

          {/* Full Name */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-[#4c454533] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#13ef96] transition-all ${
                errors.name ? 'border-red-500' : 'border-[#ffffff8a]'
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-[#4c454533] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#13ef96] transition-all ${
                errors.email ? 'border-red-500' : 'border-[#ffffff8a]'
              }`}
              placeholder="Enter your email address"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Phone Number */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-[#4c454533] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#13ef96] transition-all ${
                errors.phone ? 'border-red-500' : 'border-[#ffffff8a]'
              }`}
              placeholder="Enter your 10-digit mobile number"
            />
            {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Password */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-white text-sm font-medium mb-2">
              Password *
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-[#4c454533] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#13ef96] transition-all ${
                errors.password ? 'border-red-500' : 'border-[#ffffff8a]'
              }`}
              placeholder="Create a strong password"
            />
            {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div className="mb-8">
            <label htmlFor="confirmPassword" className="block text-white text-sm font-medium mb-2">
              Confirm Password *
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-[#4c454533] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#13ef96] transition-all ${
                errors.confirmPassword ? 'border-red-500' : 'border-[#ffffff8a]'
              }`}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#13ef96] text-black font-bold py-4 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={!isLoading ? hoverGlow : {}}
            whileTap={!isLoading ? { scale: 0.98 } : {}}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                Creating Account...
              </div>
            ) : (
              'Create My Affiliate Account'
            )}
          </motion.button>

          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-gray-400">
              Already have an account?{' '}
              <a href="/login" className="text-[#13ef96] hover:underline font-medium">
                Sign In
              </a>
            </p>
          </div>
        </motion.form>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <a href="/" className="text-gray-400 hover:text-white transition-colors">
            ← Back to Home
          </a>
        </div>
      </motion.div>
    </div>
  );
};