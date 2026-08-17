import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, User, Send, Building, CheckCircle, Smartphone, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const PayOut = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [type, setType] = useState('upi'); // upi, bank
  const [details, setDetails] = useState({ id: '', name: '', amount: '' });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleNext = () => {
    if (step === 1) setStep(2);
    else if (step === 2 && details.amount) {
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
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h1 className="text-3xl font-bold text-white mb-2">Send Payout</h1>
                <p className="text-slate-400 mb-8">Choose how you'd like to transfer funds from your account.</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <button 
                    onClick={() => setType('upi')}
                    className={`p-6 rounded-2xl border flex flex-col items-center gap-3 transition-all ${type === 'upi' ? 'bg-brand-cyan/10 border-brand-cyan text-brand-cyan' : 'bg-slate-900 border-white/5 text-slate-500'}`}
                  >
                    <Smartphone className="w-8 h-8" />
                    <span className="font-bold">UPI ID</span>
                  </button>
                  <button 
                    onClick={() => setType('bank')}
                    className={`p-6 rounded-2xl border flex flex-col items-center gap-3 transition-all ${type === 'bank' ? 'bg-brand-blue/10 border-brand-blue text-brand-blue' : 'bg-slate-900 border-white/5 text-slate-500'}`}
                  >
                    <Building className="w-8 h-8" />
                    <span className="font-bold">Bank Account</span>
                  </button>
                </div>

                <div className="space-y-4 mb-10">
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">
                      {type === 'upi' ? 'Beneficiary UPI ID' : 'Bank Account Number'}
                    </label>
                    <div className="relative">
                       <input 
                         type="text" 
                         placeholder={type === 'upi' ? "username@bank" : "Enter account number"}
                         className="w-full bg-black/30 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-brand-cyan transition-colors"
                         value={details.id}
                         onChange={(e) => setDetails({...details, id: e.target.value})}
                       />
                       <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Beneficiary Name</label>
                    <input 
                      type="text" 
                      placeholder="Receiver full name"
                      className="w-full bg-black/30 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-brand-cyan transition-colors"
                      value={details.name}
                      onChange={(e) => setDetails({...details, name: e.target.value})}
                    />
                  </div>
                </div>

                <button 
                  disabled={!details.id || !details.name}
                  onClick={handleNext}
                  className="w-full py-4 rounded-xl bg-gradient-hype text-white font-bold text-lg shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  Continue to Amount <Send className="w-5 h-5" />
                </button>
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
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold uppercase">
                    {details.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white">{details.name}</div>
                    <div className="text-sm text-slate-500">{details.id}</div>
                  </div>
                  <button onClick={() => setStep(1)} className="ml-auto text-xs text-brand-cyan underline">Change</button>
                </div>

                <h2 className="text-3xl font-bold text-white mb-6">Enter Amount</h2>
                
                <div className="relative mb-12">
                   <div className="absolute left-6 top-1/2 -translate-y-1/2 text-4xl font-bold text-slate-500">₹</div>
                   <input 
                     autoFocus
                     type="number" 
                     placeholder="0.00"
                     className="w-full bg-black/40 border border-white/10 rounded-2xl py-8 pl-14 pr-6 text-5xl font-black text-white outline-none focus:border-brand-blue transition-colors"
                     value={details.amount}
                     onChange={(e) => setDetails({...details, amount: e.target.value})}
                   />
                </div>

                <button 
                  disabled={!details.amount || isProcessing}
                  onClick={handleNext}
                  className="w-full py-4 rounded-xl bg-brand-blue text-white font-bold text-lg shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Dispatching Payout...
                    </>
                  ) : (
                    <>Confirm Disbursement <CheckCircle className="w-5 h-5" /></>
                  )}
                </button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-24 h-24 bg-brand-blue/20 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h1 className="text-4xl font-black text-white mb-4">Payout Dispatched</h1>
                <p className="text-slate-400 mb-10 text-lg">
                  Successfully sent <span className="text-white font-bold">₹{details.amount}</span> to <span className="text-white">{details.name}</span>.
                </p>
                
                <div className="bg-black/40 border border-white/5 rounded-2xl p-6 mb-10 text-left">
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-500">Reference ID</span>
                    <span className="text-white font-mono">PAY-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-500">Destination</span>
                    <span className="text-white truncate max-w-[150px]">{details.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Fee</span>
                    <span className="text-slate-300">₹0.00 (Free)</span>
                  </div>
                </div>

                <button 
                  onClick={() => navigate('/dashboard')}
                  className="w-full py-4 rounded-xl border border-white/10 text-white font-bold text-lg hover:bg-white/5 transition-colors"
                >
                  Return to Home
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default PayOut;
