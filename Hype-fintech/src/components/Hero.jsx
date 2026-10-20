import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ShieldCheck, CheckCircle2, ArrowUpRight, ArrowDownRight, 
  Zap, QrCode, Building, Clock, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('payin'); // payin, payout, bbps

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F7F8FA] to-[#F7F8FA]">
      <div className="container-padding mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Trust Pill with Live Pulse Animation */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF4FF] border border-[#D7E3FC] text-[#3267D6] text-xs font-semibold mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3267D6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3267D6]"></span>
              </span>
              <span>Reliable Indian Fintech Infrastructure</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#0B1730] tracking-tight leading-[1.16] mb-6">
              Payment Solutions That <span className="text-[#3267D6]">Move Business Forward</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#667085] max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed font-normal">
              Explore business-focused payment solutions designed to simplify financial workflows and make everyday operations easier to manage.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-3.5 mb-10">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto fintech-btn-primary flex items-center justify-center gap-2 group text-base shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link 
                to="/services" 
                className="w-full sm:w-auto fintech-btn-secondary flex items-center justify-center gap-2 text-base hover:bg-slate-50 transition-colors"
              >
                <span>Explore Services</span>
              </Link>
            </div>

            {/* Key Differentiators Strip with Micro-hover */}
            <div className="pt-6 border-t border-[#E5E9F0] grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="group cursor-default">
                <div className="text-lg md:text-xl font-bold text-[#0B1730] group-hover:text-[#3267D6] transition-colors">UPI & QR</div>
                <div className="text-xs text-[#667085] mt-0.5">Instant Collections</div>
              </div>
              <div className="group cursor-default">
                <div className="text-lg md:text-xl font-bold text-[#0B1730] group-hover:text-[#3267D6] transition-colors">IMPS Rails</div>
                <div className="text-xs text-[#667085] mt-0.5">Automated Payouts</div>
              </div>
              <div className="group cursor-default">
                <div className="text-lg md:text-xl font-bold text-[#0B1730] group-hover:text-[#3267D6] transition-colors">BBPS Certified</div>
                <div className="text-xs text-[#667085] mt-0.5">All Utility Billers</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Relatable Fintech Widget (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 max-w-md mx-auto lg:max-w-none w-full"
          >
            <div className="bg-white rounded-2xl border border-[#E5E9F0] shadow-[0_12px_40px_rgba(11,23,48,0.08)] p-6 sm:p-7 relative transition-all duration-300 hover:shadow-[0_16px_50px_rgba(11,23,48,0.12)]">
              
              {/* Header: Business Wallet Summary & Status */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E9F0]">
                <div>
                  <div className="text-[11px] font-bold text-[#667085] uppercase tracking-wider">Business Ledger</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1730] mt-0.5 tracking-tight">
                    ₹ 1,48,250.00
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  <span>Settlement Active</span>
                </div>
              </div>

              {/* Interactive Service Switcher Tabs */}
              <div className="py-4">
                <div className="text-[11px] font-semibold text-[#667085] uppercase tracking-wider mb-2">
                  Interactive Service Preview
                </div>
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#F7F8FA] rounded-xl border border-[#E5E9F0]">
                  <button
                    type="button"
                    onClick={() => setActiveTab('payin')}
                    className={`py-2 px-1 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 ${
                      activeTab === 'payin'
                        ? 'bg-white text-[#3267D6] shadow-sm'
                        : 'text-[#667085] hover:text-[#0B1730]'
                    }`}
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    <span>Pay In</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('payout')}
                    className={`py-2 px-1 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 ${
                      activeTab === 'payout'
                        ? 'bg-white text-[#3267D6] shadow-sm'
                        : 'text-[#667085] hover:text-[#0B1730]'
                    }`}
                  >
                    <Building className="w-3.5 h-3.5" />
                    <span>Pay Out</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('bbps')}
                    className={`py-2 px-1 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 ${
                      activeTab === 'bbps'
                        ? 'bg-white text-amber-700 shadow-sm'
                        : 'text-[#667085] hover:text-[#0B1730]'
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5" />
                    <span>BBPS</span>
                  </button>
                </div>
              </div>

              {/* Dynamic Preview Content with Smooth Transition */}
              <div className="min-h-[140px]">
                <AnimatePresence mode="wait">
                  {activeTab === 'payin' && (
                    <motion.div
                      key="tab-payin"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="p-4 rounded-xl bg-[#F7F8FA] border border-[#E5E9F0] space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                            <ArrowDownRight className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-[#0B1730]">UPI Dynamic QR Collection</div>
                            <div className="text-[11px] text-[#667085]">Instant credit via GPay / PhonePe / Paytm</div>
                          </div>
                        </div>
                        <span className="text-xs font-extrabold text-emerald-700">+₹ 4,500.00</span>
                      </div>

                      <div className="flex items-center justify-between text-[11px] pt-2 border-t border-[#E5E9F0] text-[#667085]">
                        <span>NPCI Ref: 4092819201</span>
                        <span className="text-emerald-600 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Auto Settled T+0
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'payout' && (
                    <motion.div
                      key="tab-payout"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="p-4 rounded-xl bg-[#F7F8FA] border border-[#E5E9F0] space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-blue-100 text-[#3267D6] flex items-center justify-center shrink-0">
                            <ArrowUpRight className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-[#0B1730]">Vendor IMPS Disbursement</div>
                            <div className="text-[11px] text-[#667085]">Sharma Logistics Ltd • Direct Bank Rail</div>
                          </div>
                        </div>
                        <span className="text-xs font-extrabold text-[#0B1730]">-₹ 12,300.00</span>
                      </div>

                      <div className="flex items-center justify-between text-[11px] pt-2 border-t border-[#E5E9F0] text-[#667085]">
                        <span>Bank UTR: 409281928374</span>
                        <span className="text-blue-600 font-semibold flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> Direct Credited
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'bbps' && (
                    <motion.div
                      key="tab-bbps"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="p-4 rounded-xl bg-[#F7F8FA] border border-[#E5E9F0] space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                            <Zap className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-[#0B1730]">Electricity Utility Bill</div>
                            <div className="text-[11px] text-[#667085]">Tata Power Delhi (TPDDL)</div>
                          </div>
                        </div>
                        <span className="text-xs font-extrabold text-[#0B1730]">-₹ 1,840.00</span>
                      </div>

                      <div className="flex items-center justify-between text-[11px] pt-2 border-t border-[#E5E9F0] text-[#667085]">
                        <span>BBPS Ref: BBPS-0094857</span>
                        <span className="text-amber-700 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Receipt Ready
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Quick Link */}
              <div className="mt-4 pt-3 border-t border-[#E5E9F0] flex items-center justify-between">
                <span className="text-[11px] text-[#667085]">Want these payment rails for your business?</span>
                <Link to="/contact" className="text-xs font-bold text-[#3267D6] hover:underline flex items-center gap-0.5">
                  Contact Us <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
