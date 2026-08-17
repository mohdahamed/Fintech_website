import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="min-h-screen section-padding mt-10 relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[800px] h-[400px] bg-brand-blue/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container-padding mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              Get in <span className="text-gradient-hype">Touch</span>
            </h1>
            <p className="text-lg text-slate-400 font-light">
              Whether you have a question about pricing, need a custom integration, or just want to say hi—we'd love to hear from you.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-brand-card/50 backdrop-blur-md border border-white/5 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-cyan/10 text-brand-cyan flex justify-center items-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-300">Sales & Support</h4>
                    <p className="text-lg text-white font-medium">hello@hype-pay.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 text-brand-blue flex justify-center items-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-300">Phone</h4>
                    <p className="text-lg text-white font-medium">+1 (555) 123-4567</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 text-slate-300 flex justify-center items-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-300">Headquarters</h4>
                    <p className="text-lg text-white font-medium">100 Fintech Way<br/>San Francisco, CA 94105</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-hype p-px rounded-3xl">
              <div className="bg-brand-card p-8 rounded-3xl h-full flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Developer Support</h4>
                  <p className="text-slate-400 text-sm">Need technical help?</p>
                </div>
                <a href="#" className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors">
                  View Docs
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-brand-card/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
               {sent && (
                 <div className="absolute inset-0 bg-brand-card/90 backdrop-blur-xl flex flex-col items-center justify-center z-20">
                   <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mb-4">
                     <Send className="w-8 h-8" />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                   <p className="text-slate-400 text-center px-6">We'll get back to you within 24 hours.</p>
                 </div>
               )}

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10 text-left">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="firstName">First Name</label>
                    <input
                      id="firstName"
                      type="text"
                      className="bg-black/30 border border-white/10 text-white text-sm rounded-xl focus:ring-2 focus:ring-brand-cyan focus:border-transparent block w-full p-3 outline-none transition-all placeholder:text-slate-600"
                      placeholder="Jane"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="lastName">Last Name</label>
                    <input
                      id="lastName"
                      type="text"
                      className="bg-black/30 border border-white/10 text-white text-sm rounded-xl focus:ring-2 focus:ring-brand-cyan focus:border-transparent block w-full p-3 outline-none transition-all placeholder:text-slate-600"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="bg-black/30 border border-white/10 text-white text-sm rounded-xl focus:ring-2 focus:ring-brand-cyan focus:border-transparent block w-full p-3 outline-none transition-all placeholder:text-slate-600"
                    placeholder="jane@company.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="bg-black/30 border border-white/10 text-white text-sm rounded-xl focus:ring-2 focus:ring-brand-cyan focus:border-transparent block w-full p-3 outline-none transition-all resize-none placeholder:text-slate-600"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.3)] text-sm font-bold text-white bg-gradient-hype hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-cyan focus:ring-offset-brand-dark transition-all group"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
