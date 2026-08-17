import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Zap, Tv, Droplets, Phone, Shield, CheckCircle, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const BBPS = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState(null);
  const [consumerId, setConsumerId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const categories = [
    { id: 'elec', name: 'Electricity', icon: <Zap className="w-6 h-6 text-yellow-400" /> },
    { id: 'water', name: 'Water', icon: <Droplets className="w-6 h-6 text-blue-400" /> },
    { id: 'dth', name: 'DTH/Cable', icon: <Tv className="w-6 h-6 text-purple-400" /> },
    { id: 'mobile', name: 'Broadband', icon: <Phone className="w-6 h-6 text-pink-400" /> },
  ];

  const handlePay = () => {
    if (consumerId) {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setStep(3);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen section-padding mt-10 bg-brand-dark">
      <div className="container-padding max-w-xl mx-auto">
        
        <Link to="/dashboard" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Dashboard
        </Link>

        <div className="bg-brand-card border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          {/* BBPS Logo Header */}
          <div className="flex justify-between items-center mb-8 pb-8 border-b border-white/5">
             <div>
               <h1 className="text-2xl font-bold text-white">Bill Payment</h1>
               <p className="text-slate-500 text-sm">Powered by BBPS Network</p>
             </div>
             <div className="px-3 py-1 bg-white rounded flex flex-col items-center">
                <span className="text-[10px] font-black text-slate-400 leading-none">BHARAT</span>
                <span className="text-xs font-black text-brand-dark leading-none">BILLPAY</span>
             </div>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => { setCategory(cat); setStep(2); }}
                      className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center gap-3 hover:bg-white/10 hover:border-brand-cyan/30 transition-all hover:-translate-y-1"
                    >
                      <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
                        {cat.icon}
                      </div>
                      <span className="font-bold text-white text-sm">{cat.name}</span>
                    </button>
                  ))}
                </div>
                
                <div className="p-4 rounded-xl bg-brand-blue/5 border border-brand-blue/10 flex gap-4">
                  <Shield className="w-5 h-5 text-brand-blue shrink-0" />
                  <p className="text-xs text-slate-400 leading-relaxed">
                    All utility payments are processed securely via the Bharat Bill Payment System. Receipts are generated instantly upon confirmation.
                  </p>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                     {category?.icon}
                   </div>
                   <h2 className="text-xl font-bold text-white">{category?.name} Payment</h2>
                </div>

                <div className="space-y-6 mb-10">
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Select Biller</label>
                    <div className="relative">
                      <select className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-brand-cyan appearance-none cursor-pointer">
                        <option>Choose your utility provider</option>
                        <option>Tata Power Delhi Distribution</option>
                        <option>Reliance Energy</option>
                        <option>Maha-Vitaran (MSEDCL)</option>
                        <option>Airtel Broadband</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">▼</div>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Consumer ID / Account No.</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Enter consumer number"
                        className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-brand-cyan transition-colors"
                        value={consumerId}
                        onChange={(e) => setConsumerId(e.target.value)}
                      />
                      <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600" />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button onClick={() => setStep(1)} className="flex-1 py-4 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-colors">Cancel</button>
                  <button 
                    disabled={!consumerId || isProcessing}
                    onClick={handlePay}
                    className="flex-[2] py-4 rounded-xl bg-gradient-hype text-white font-bold text-lg shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      'Fetch & Pay'
                    )}
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h1 className="text-3xl font-black text-white mb-2">Bill Paid Successfully</h1>
                <p className="text-slate-400 mb-10">
                  Your utility bill for <span className="text-white font-bold">{category?.name}</span> has been paid successfully.
                </p>
                
                <div className="bg-black/40 border border-white/5 rounded-2xl p-6 mb-8 text-left space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-500 text-sm">Receipt No</span>
                    <span className="text-white font-mono text-sm">BBPS-{Math.random().toString(36).substr(2, 8).toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 text-sm">Amount Paid</span>
                    <span className="text-white font-bold">₹112.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 text-sm">Biller Ref No</span>
                    <span className="text-slate-300 text-sm">TXN-009485723</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button className="py-4 rounded-xl border border-white/10 text-white font-bold text-sm hover:bg-white/5 transition-colors">Download Receipt</button>
                  <button 
                    onClick={() => navigate('/dashboard')}
                    className="py-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-slate-200 transition-colors"
                  >
                    Back Home
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default BBPS;
