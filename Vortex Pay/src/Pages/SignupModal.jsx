import React, { useState } from 'react';
import { X, ArrowRight, Check } from 'lucide-react';
import { useAuth } from './AuthContext';

const SignupModal = ({ isOpen, onClose }) => {
  const { signup, isLoading, user } = useAuth();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    country: 'United States',
    accountType: 'personal'
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleStepOne = (e) => {
    e.preventDefault();
    if (!formData.email || !validateEmail(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (!formData.password || formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    setStep(2);
  };

  const handleStepTwo = (e) => {
    e.preventDefault();
    if (!formData.fullName || formData.fullName.length < 2) {
      setError('Please enter your full name');
      return;
    }
    setStep(3);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.phone) {
      setError('Please enter your phone number');
      return;
    }

    const result = await signup(formData);
    if (result.success) {
      setSuccess(true);
      setTimeout(() => {
        setStep(1);
        setFormData({ fullName: '', email: '', password: '', phone: '', country: 'United States', accountType: 'personal' });
        setSuccess(false);
        onClose();
      }, 2000);
    } else {
      setError(result.error || 'Signup failed');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
      <div className="bg-slate-900 border border-emerald-500/20 rounded-2xl sm:rounded-3xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-start sm:items-center p-4 sm:p-6 md:p-8 border-b border-emerald-500/10 gap-4">
          <div className="min-w-0 flex-1">
            <h2 className="text-xl sm:text-2xl font-black text-white truncate">Create Account</h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">Step {step} of 3</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition flex-shrink-0 p-1">
            <X size={20} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex gap-1 sm:gap-2 px-4 sm:px-6 md:px-8 pt-4 sm:pt-6">
          {[1, 2, 3].map(s => (
            <div
              key={s}
              className={`flex-1 h-1 rounded-full transition-all ${s <= step ? 'bg-emerald-500' : 'bg-white/10'
                }`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8">
          {success ? (
            <div className="text-center py-8 animate-fadeInUp">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={32} className="text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Welcome to VortexPay!</h3>
              <p className="text-slate-300 mb-6">Your account has been created successfully. Redirecting...</p>
            </div>
          ) : (
            <>
              {/* Step 1: Email & Password */}
              {step === 1 && (
                <form onSubmit={handleStepOne} className="space-y-4 animate-fadeInUp">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 ring-emerald-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 ring-emerald-500 transition-all"
                    />
                    <p className="text-xs text-slate-400 mt-2">At least 8 characters</p>
                  </div>
                  {error && <div className="bg-red-500/20 border border-red-500 text-red-300 rounded-lg px-4 py-2 text-sm">{error}</div>}
                  <button
                    type="submit"
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3 rounded-lg transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 mt-6"
                  >
                    Continue <ArrowRight size={18} />
                  </button>
                </form>
              )}

              {/* Step 2: Personal Info */}
              {step === 2 && (
                <form onSubmit={handleStepTwo} className="space-y-4 animate-fadeInUp">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 ring-emerald-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Account Type</label>
                    <select
                      name="accountType"
                      value={formData.accountType}
                      onChange={handleChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 ring-emerald-500 transition-all"
                    >
                      <option value="personal">Personal</option>
                      <option value="business">Business</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Country</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 ring-emerald-500 transition-all"
                    >
                      <option>United States</option>
                      <option>India</option>
                      <option>United Kingdom</option>
                      <option>Canada</option>
                      <option>Australia</option>
                      <option>Germany</option>
                      <option>France</option>
                    </select>
                  </div>
                  {error && <div className="bg-red-500/20 border border-red-500 text-red-300 rounded-lg px-4 py-2 text-sm">{error}</div>}
                  <div className="flex gap-3 mt-6">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 border border-slate-600 text-slate-300 font-bold py-3 rounded-lg hover:bg-slate-800 transition-all"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3 rounded-lg transition-all transform hover:scale-105 active:scale-95"
                    >
                      Continue
                    </button>
                  </div>
                </form>
              )}

              {/* Step 3: Contact & Verification */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-4 animate-fadeInUp">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 ring-emerald-500 transition-all"
                    />
                  </div>

                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-emerald-400 mb-3">Account Ready!</h4>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li className="flex items-center gap-2">
                        <Check size={16} className="text-emerald-400" /> Secure wallet access
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={16} className="text-emerald-400" /> Global payments enabled
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={16} className="text-emerald-400" /> AI-powered analytics
                      </li>
                    </ul>
                  </div>

                  {error && <div className="bg-red-500/20 border border-red-500 text-red-300 rounded-lg px-4 py-2 text-sm">{error}</div>}

                  <div className="flex gap-3 mt-6">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex-1 border border-slate-600 text-slate-300 font-bold py-3 rounded-lg hover:bg-slate-800 transition-all"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-600 text-slate-950 font-bold py-3 rounded-lg transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                    >
                      {isLoading ? 'Creating...' : 'Create Account'}
                    </button>
                  </div>
                </form>
              )}
            </>
          )}

          {/* Footer Text */}
          <p className="text-xs text-slate-500 text-center mt-6">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SignupModal;
