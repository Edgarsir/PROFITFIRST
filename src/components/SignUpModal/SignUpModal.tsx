import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    website: "",
    referralSource: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add API call here to submit the data
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <div className="bg-[#1e1e1e] rounded-3xl w-full max-w-[600px] max-h-[90vh] overflow-y-auto border border-[#ffffff1a] relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white hover:text-[#13ef96] transition-colors"
                aria-label="Close modal"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Header */}
              <div className="p-8 pb-6">
                <h2 className="[font-family:'Inter',Helvetica] font-bold text-white text-4xl tracking-[0] leading-[48px]">
                  Become Our Affiliate
                </h2>
                <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[0] leading-[20.8px] mt-2 opacity-80">
                  Join our affiliate program and start earning today
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="px-8 pb-8">
                <div className="flex flex-col gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="fullName"
                      className="[font-family:'Inter',Helvetica] font-medium text-white text-lg tracking-[0] leading-[23.4px]"
                    >
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="h-[52px] bg-[#4c454533] rounded-xl px-5 [font-family:'Inter',Helvetica] font-medium text-white text-base border-[0.5px] border-solid border-[#ffffff8a] focus:border-[#13ef96] focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="[font-family:'Inter',Helvetica] font-medium text-white text-lg tracking-[0] leading-[23.4px]"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="h-[52px] bg-[#4c454533] rounded-xl px-5 [font-family:'Inter',Helvetica] font-medium text-white text-base border-[0.5px] border-solid border-[#ffffff8a] focus:border-[#13ef96] focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone"
                      className="[font-family:'Inter',Helvetica] font-medium text-white text-lg tracking-[0] leading-[23.4px]"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-[52px] bg-[#4c454533] rounded-xl px-5 [font-family:'Inter',Helvetica] font-medium text-white text-base border-[0.5px] border-solid border-[#ffffff8a] focus:border-[#13ef96] focus:outline-none transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  {/* Website/Social Media */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="website"
                      className="[font-family:'Inter',Helvetica] font-medium text-white text-lg tracking-[0] leading-[23.4px]"
                    >
                      Website or Social Media
                    </label>
                    <input
                      id="website"
                      name="website"
                      type="url"
                      value={formData.website}
                      onChange={handleChange}
                      className="h-[52px] bg-[#4c454533] rounded-xl px-5 [font-family:'Inter',Helvetica] font-medium text-white text-base border-[0.5px] border-solid border-[#ffffff8a] focus:border-[#13ef96] focus:outline-none transition-colors"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>

                  {/* How did you hear about us */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="referralSource"
                      className="[font-family:'Inter',Helvetica] font-medium text-white text-lg tracking-[0] leading-[23.4px]"
                    >
                      How did you hear about us?
                    </label>
                    <select
                      id="referralSource"
                      name="referralSource"
                      value={formData.referralSource}
                      onChange={handleChange}
                      className="h-[52px] bg-[#4c454533] rounded-xl px-5 [font-family:'Inter',Helvetica] font-medium text-white text-base border-[0.5px] border-solid border-[#ffffff8a] focus:border-[#13ef96] focus:outline-none transition-colors"
                    >
                      <option value="" className="bg-[#1e1e1e]">Select an option</option>
                      <option value="google" className="bg-[#1e1e1e]">Google Search</option>
                      <option value="social" className="bg-[#1e1e1e]">Social Media</option>
                      <option value="friend" className="bg-[#1e1e1e]">Friend/Colleague</option>
                      <option value="blog" className="bg-[#1e1e1e]">Blog/Article</option>
                      <option value="other" className="bg-[#1e1e1e]">Other</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className="h-[52px] bg-[#13ef96] rounded-xl [font-family:'Poppins',Helvetica] font-bold text-black text-lg mt-2"
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(19, 239, 150, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Join Affiliate Program
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
