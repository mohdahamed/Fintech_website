import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Send, CheckCircle2, Clock, HelpCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceInterest: 'Collections (Pay In)',
    message: ''
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        serviceInterest: 'Collections (Pay In)',
        message: ''
      });
      setTimeout(() => setSent(false), 5000);
    }, 800);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#F7F8FA]">
      <div className="container-padding mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="badge-fintech mb-3">Get in Touch</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1730] mb-4 tracking-tight">
              Contact Hype-Pay
            </h1>
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
              Have questions about our payment solutions or need assistance setting up your merchant account? We are here to help.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          
          {/* Contact Details (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white border border-[#E5E9F0] rounded-2xl p-7 shadow-sm">
              <h2 className="text-lg font-bold text-[#0B1730] mb-5">Business Inquiries & Support</h2>
              
              <ul className="space-y-5">
                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#EEF4FF] text-[#3267D6] flex justify-center items-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#667085] uppercase tracking-wider">Business & Sales</h3>
                    <a href="mailto:hello@hype-pay.com" className="text-sm font-semibold text-[#0B1730] hover:text-[#3267D6] transition-colors">
                      hello@hype-pay.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#EEF4FF] text-[#3267D6] flex justify-center items-center shrink-0 mt-0.5">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#667085] uppercase tracking-wider">Merchant Support</h3>
                    <a href="mailto:support@hype-pay.com" className="text-sm font-semibold text-[#0B1730] hover:text-[#3267D6] transition-colors">
                      support@hype-pay.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#EEF4FF] text-[#3267D6] flex justify-center items-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#667085] uppercase tracking-wider">Support Hours</h3>
                    <p className="text-sm font-semibold text-[#0B1730]">
                      Mon – Sat: 9:30 AM – 6:30 PM IST
                    </p>
                    <p className="text-xs text-[#667085]">Payout services run 24x7 automated</p>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#EEF4FF] text-[#3267D6] flex justify-center items-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#667085] uppercase tracking-wider">Headquarters</h3>
                    <p className="text-sm font-semibold text-[#0B1730]">
                      India
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#EEF4FF] border border-[#D7E3FC] rounded-2xl p-6">
              <h3 className="text-sm font-bold text-[#0B1730] mb-1">Explore Our Solutions</h3>
              <p className="text-xs text-[#667085] leading-relaxed mb-4">
                Learn how Hype-Pay helps merchants consolidate UPI collections, vendor disbursements, and BBPS utility bills.
              </p>
              <div className="flex gap-4">
                <Link 
                  to="/services" 
                  className="text-xs font-bold text-[#3267D6] hover:underline flex items-center gap-1"
                >
                  <span>View Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link 
                  to="/features" 
                  className="text-xs font-bold text-[#3267D6] hover:underline flex items-center gap-1"
                >
                  <span>Explore Features</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="bg-white border border-[#E5E9F0] rounded-2xl p-7 sm:p-8 shadow-sm relative">
              
              {/* Success Notification */}
              {sent && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-emerald-900">Message Received!</h4>
                    <p className="text-xs text-emerald-700">Thank you for contacting Hype-Pay. A team member will respond within one business day.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0B1730] uppercase tracking-wider mb-1.5" htmlFor="firstName">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="bg-white border border-[#E5E9F0] text-[#0B1730] text-sm rounded-lg focus:ring-2 focus:ring-[#3267D6]/20 focus:border-[#3267D6] block w-full p-3 outline-none transition-all placeholder:text-slate-400"
                      placeholder="e.g. Ramesh"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0B1730] uppercase tracking-wider mb-1.5" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="bg-white border border-[#E5E9F0] text-[#0B1730] text-sm rounded-lg focus:ring-2 focus:ring-[#3267D6]/20 focus:border-[#3267D6] block w-full p-3 outline-none transition-all placeholder:text-slate-400"
                      placeholder="e.g. Sharma"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0B1730] uppercase tracking-wider mb-1.5" htmlFor="email">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white border border-[#E5E9F0] text-[#0B1730] text-sm rounded-lg focus:ring-2 focus:ring-[#3267D6]/20 focus:border-[#3267D6] block w-full p-3 outline-none transition-all placeholder:text-slate-400"
                      placeholder="name@business.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0B1730] uppercase tracking-wider mb-1.5" htmlFor="phone">
                      Mobile Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-white border border-[#E5E9F0] text-[#0B1730] text-sm rounded-lg focus:ring-2 focus:ring-[#3267D6]/20 focus:border-[#3267D6] block w-full p-3 outline-none transition-all placeholder:text-slate-400"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B1730] uppercase tracking-wider mb-1.5" htmlFor="serviceInterest">
                    Primary Service of Interest
                  </label>
                  <select
                    id="serviceInterest"
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    className="bg-white border border-[#E5E9F0] text-[#0B1730] text-sm rounded-lg focus:ring-2 focus:ring-[#3267D6]/20 focus:border-[#3267D6] block w-full p-3 outline-none transition-all"
                  >
                    <option value="Collections (Pay In)">Payment Collection (Pay In & UPI QR)</option>
                    <option value="Disbursements (Pay Out)">Business Disbursements (Pay Out via IMPS)</option>
                    <option value="BBPS Utility Bills">Bharat BillPay (BBPS Utilities & Recharges)</option>
                    <option value="Merchant Wallet">Merchant Ledger Wallet</option>
                    <option value="General Inquiry">General Partnership Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B1730] uppercase tracking-wider mb-1.5" htmlFor="message">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white border border-[#E5E9F0] text-[#0B1730] text-sm rounded-lg focus:ring-2 focus:ring-[#3267D6]/20 focus:border-[#3267D6] block w-full p-3 outline-none transition-all resize-none placeholder:text-slate-400"
                    placeholder="Tell us about your payment requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full fintech-btn-primary flex justify-center items-center gap-2 py-3.5 text-sm font-semibold disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
