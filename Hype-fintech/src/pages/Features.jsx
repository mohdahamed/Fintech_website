import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  ArrowRight, QrCode, Building2, Check, ShieldCheck, 
  Clock, CheckCircle2, Flame, Droplets, Smartphone, Wifi, Car
} from 'lucide-react';
import { Link } from 'react-router-dom';

const bbpsCategories = [
  { id: 'electricity', label: 'Electricity', icon: <Zap className="w-4 h-4" />, biller: 'Tata Power Delhi (TPDDL)', idLabel: 'Consumer ID: 1029384756', amount: '₹ 1,840.00' },
  { id: 'mobile', label: 'Mobile Postpaid', icon: <Smartphone className="w-4 h-4" />, biller: 'Jio Postpaid Plus', idLabel: 'Mobile: +91 98201 23456', amount: '₹ 499.00' },
  { id: 'gas', label: 'LPG Gas', icon: <Flame className="w-4 h-4" />, biller: 'Indane Gas Booking', idLabel: 'LPG ID: 30092817462', amount: '₹ 903.00' },
  { id: 'water', label: 'Water', icon: <Droplets className="w-4 h-4" />, biller: 'Delhi Jal Board', idLabel: 'K-Number: 8492019284', amount: '₹ 320.00' },
  { id: 'fastag', label: 'FASTag', icon: <Car className="w-4 h-4" />, biller: 'NHAI FASTag Recharge', idLabel: 'VRN: DL 01 AB 1234', amount: '₹ 1,000.00' },
  { id: 'broadband', label: 'Broadband', icon: <Wifi className="w-4 h-4" />, biller: 'Airtel Xstream Fiber', idLabel: 'DSL ID: 0114092819', amount: '₹ 1,178.00' },
];

const Features = () => {
  const [selectedBbps, setSelectedBbps] = useState(bbpsCategories[0]);

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
            <div className="badge-fintech mb-3">Fintech Features</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1730] mb-4 tracking-tight">
              Built for Modern Indian Commerce
            </h1>
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
              Explore how Hype-Pay streamlines collections, vendor disbursements, and everyday utility settlements with native Indian payment rails.
            </p>
          </motion.div>
        </div>

        {/* Feature 1: Pay In / Collections with Animated QR Scanner */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20 max-w-5xl mx-auto"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-[#EEF4FF] text-[#3267D6] flex items-center justify-center mb-5">
              <QrCode className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1730] mb-3">
              Real-time Acquiring & Pay In
            </h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed mb-6">
              Accept payments seamlessly from customers using dynamic and static UPI QR codes, RuPay, Visa, Mastercard, and 50+ net banking channels.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#3267D6] shrink-0 mt-0.5" />
                <span className="text-sm text-[#182338]">Direct NPCI UPI rail integration for instant settlement confirmations.</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#3267D6] shrink-0 mt-0.5" />
                <span className="text-sm text-[#182338]">Works with Google Pay, PhonePe, Paytm, BHIM, Cred, and Navi apps.</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#3267D6] shrink-0 mt-0.5" />
                <span className="text-sm text-[#182338]">Automatic transaction status reconciliation with T+0 same-day settlement.</span>
              </div>
            </div>

            <Link 
              to="/contact" 
              className="fintech-btn-primary inline-flex items-center gap-2 text-sm shadow-sm hover:shadow-md transition-all group"
            >
              <span>Consult for QR Collections</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Interactive QR Scan Animation Card */}
          <div className="bg-white border border-[#E5E9F0] rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all">
            <div className="flex justify-between items-center pb-4 border-b border-[#E5E9F0] mb-5">
              <div className="text-xs font-bold text-[#667085] uppercase tracking-wider">
                Dynamic UPI QR Simulator
              </div>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping" />
                <span>Ready to Scan</span>
              </span>
            </div>

            {/* Clean QR Collection Preview Card */}
            <div className="flex flex-col items-center justify-center p-6 bg-[#F7F8FA] rounded-2xl border border-[#E5E9F0] mb-5">
              <div className="w-36 h-36 bg-white p-3 rounded-2xl border border-[#E5E9F0] flex items-center justify-center shadow-xs mb-3">
                <QrCode className="w-28 h-28 text-[#0B1730]" />
              </div>

              <div className="text-center">
                <span className="text-xs font-bold text-[#0B1730] block">Scan via any UPI App</span>
                <span className="text-[11px] text-[#667085] font-mono mt-0.5 block">merchant@hypepay</span>
              </div>
            </div>

            <div className="flex justify-between text-xs text-[#667085] pt-3 border-t border-[#E5E9F0]">
              <span>Settlement Window: Instant (T+0)</span>
              <span className="text-emerald-700 font-bold">0% UPI MDR</span>
            </div>
          </div>
        </motion.div>

        {/* Feature 2: Pay Out / Disbursements with Sub-Second Rail */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20 max-w-5xl mx-auto"
        >
          <div className="bg-white border border-[#E5E9F0] rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all order-2 lg:order-1">
            <div className="flex justify-between items-center pb-4 border-b border-[#E5E9F0] mb-5">
              <div className="text-xs font-bold text-[#667085] uppercase tracking-wider">
                Real-Time IMPS Rail Status
              </div>
              <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span>24x7 Active</span>
              </span>
            </div>

            <div className="space-y-3 mb-5">
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="p-4 rounded-xl bg-[#F7F8FA] border border-[#E5E9F0] transition-all"
              >
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-bold text-[#0B1730]">Sharma Logistics Ltd (Supplier)</span>
                  <span className="text-xs font-extrabold text-[#0B1730]">₹ 12,300.00</span>
                </div>
                <div className="flex justify-between items-center text-[11px] text-[#667085]">
                  <span>UTR: 409281928374 • HDFC Bank</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Direct Credited
                  </span>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="p-4 rounded-xl bg-[#F7F8FA] border border-[#E5E9F0] transition-all"
              >
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-bold text-[#0B1730]">Rajasthan Packaging (Vendor Batch)</span>
                  <span className="text-xs font-extrabold text-[#0B1730]">₹ 28,450.00</span>
                </div>
                <div className="flex justify-between items-center text-[11px] text-[#667085]">
                  <span>UTR: 409281928412 • ICICI Bank</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Direct Credited
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Disbursement Features Strip */}
            <div className="p-3 bg-blue-50/70 border border-blue-200/80 rounded-xl text-xs text-[#3267D6] flex justify-between items-center">
              <span className="font-semibold">Sub-second IMPS acknowledgment</span>
              <span className="text-[11px] text-[#0B1730] font-bold">Avg Speed: 0.8s</span>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="w-12 h-12 rounded-xl bg-[#EEF4FF] text-[#3267D6] flex items-center justify-center mb-5">
              <Building2 className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1730] mb-3">
              Automated Business Disbursements
            </h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed mb-6">
              Disburse payments directly to supplier bank accounts or beneficiary UPI IDs around the clock without manual bank net-banking login delays.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#3267D6] shrink-0 mt-0.5" />
                <span className="text-sm text-[#182338]">Direct IMPS bank transfers with sub-second acknowledgment.</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#3267D6] shrink-0 mt-0.5" />
                <span className="text-sm text-[#182338]">Instant beneficiary name verification (penny drop) to prevent errors.</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#3267D6] shrink-0 mt-0.5" />
                <span className="text-sm text-[#182338]">Downloadable disbursement statements for clean GST and tax accounting.</span>
              </div>
            </div>

            <Link 
              to="/contact" 
              className="fintech-btn-primary inline-flex items-center gap-2 text-sm shadow-sm hover:shadow-md transition-all group"
            >
              <span>Inquire for Automated Payouts</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Feature 3: Interactive BBPS Utility Bills with Category Switcher */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5 border border-amber-200">
              <Zap className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1730] mb-3">
              Bharat Bill Payment System (BBPS)
            </h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed mb-6">
              Connect to the official NPCI BBPS operating network to process electricity, water, gas, broadband, and DTH utility bills with immediate digital receipt generation.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#3267D6] shrink-0 mt-0.5" />
                <span className="text-sm text-[#182338]">Access to 20,000+ national and state utility billers across India.</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#3267D6] shrink-0 mt-0.5" />
                <span className="text-sm text-[#182338]">Real-time bill fetch via Consumer ID or Account Number.</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#3267D6] shrink-0 mt-0.5" />
                <span className="text-sm text-[#182338]">Instant proof of payment with BBPS transaction reference.</span>
              </div>
            </div>

            <Link 
              to="/contact" 
              className="fintech-btn-primary inline-flex items-center gap-2 text-sm shadow-sm hover:shadow-md transition-all group"
            >
              <span>Enable BBPS for Your Business</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Interactive Category Selector with Smooth Transitions */}
          <div className="bg-white border border-[#E5E9F0] rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all">
            <div className="flex justify-between items-center pb-4 border-b border-[#E5E9F0] mb-4">
              <div className="text-xs font-bold text-[#667085] uppercase tracking-wider">
                Interactive BBPS Categories
              </div>
              <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>NPCI Certified</span>
              </span>
            </div>

            {/* Interactive Category Buttons */}
            <div className="grid grid-cols-3 gap-2 mb-5">
              {bbpsCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedBbps(cat)}
                  className={`py-2 px-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    selectedBbps.id === cat.id
                      ? 'bg-[#3267D6] text-white shadow-xs'
                      : 'bg-[#F7F8FA] border border-[#E5E9F0] text-[#667085] hover:text-[#0B1730] hover:bg-slate-100'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>

            {/* Smooth Animated Biller Card */}
            <div className="min-h-[170px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedBbps.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-2xl bg-[#F7F8FA] border border-[#E5E9F0] space-y-3.5 text-xs"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[#667085]">Selected Biller</span>
                    <span className="font-bold text-[#0B1730]">{selectedBbps.biller}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#667085]">Identifier</span>
                    <span className="font-mono text-[#0B1730] font-semibold">{selectedBbps.idLabel}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#667085]">Fetched Amount</span>
                    <span className="font-extrabold text-[#0B1730] text-sm sm:text-base text-emerald-700">
                      {selectedBbps.amount}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-[#E5E9F0]">
                    <span className="text-[#667085]">BBPS Reference</span>
                    <span className="text-amber-800 font-semibold flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Live Fetch Verified
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="text-[11px] text-[#667085] text-center mt-4">
              Digital receipts generated with unique NPCI Bharat BillPay reference numbers.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Features;
