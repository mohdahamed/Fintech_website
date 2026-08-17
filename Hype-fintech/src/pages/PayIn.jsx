import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Wallet, Smartphone, CreditCard, CheckCircle, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const PayIn = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleNext = () => {
    if (step === 1 && amount) setStep(2);
    else if (step === 2 && method) {
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
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
            <motion.div 
              className="h-full bg-brand-cyan"
              initial={{ width: "33%" }}
              animate={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
            />
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h1 className="text-3xl font-bold text-white mb-2">Add Funds</h1>
                <p className="text-slate-400 mb-8">Enter the amount you'd like to deposit into your HYPE wallet.</p>
                
                <div className="mb-8 relative">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl font-bold text-slate-500">₹</div>
                  <input 
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl py-6 pl-12 pr-6 text-4xl font-bold text-white outline-none focus:border-brand-cyan transition-colors placeholder:text-slate-800"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3 mb-10">
                  {[100, 500, 1000].map((val) => (
                    <button 
                      key={val}
                      onClick={() => setAmount(val.toString())}
                      className="py-3 rounded-xl bg-white/5 border border-white/5 text-slate-300 font-bold hover:bg-white/10 transition-colors"
                    >
                      +₹{val}
                    </button>
                  ))}
                </div>

                <button 
                  disabled={!amount}
                  onClick={handleNext}
                  className="w-full py-4 rounded-xl bg-gradient-hype text-white font-bold text-lg shadow-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Continue to Payment <ChevronRight className="w-5 h-5" />
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
                <h1 className="text-3xl font-bold text-white mb-2">Select Method</h1>
                <p className="text-slate-400 mb-8">Choose your preferred payment method to complete the deposit of <span className="text-white font-bold">₹{amount}</span>.</p>
                
                <div className="space-y-4 mb-10">
                  {[
                    { id: 'upi', icon: <Smartphone className="w-6 h-6" />, title: "UPI / QR Code", desc: "Pay via GPay, PhonePe, or BHIM" },
                    { id: 'card', icon: <CreditCard className="w-6 h-6" />, title: "Debit / Credit Card", desc: "Visa, Mastercard, RuPay" },
                    { id: 'bank', icon: <Wallet className="w-6 h-6" />, title: "Netbanking", desc: "Pay via your mobile banking app" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setMethod(item.id)}
                      className={`w-full flex items-center gap-4 p-5 rounded-2xl border transition-all text-left ${
                        method === item.id 
                        ? 'bg-brand-cyan/10 border-brand-cyan' 
                        : 'bg-white/5 border-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${method === item.id ? 'bg-brand-cyan text-white' : 'bg-slate-800 text-slate-400'}`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-white">{item.title}</div>
                        <div className="text-xs text-slate-500">{item.desc}</div>
                      </div>
                      {method === item.id && <CheckCircle className="w-5 h-5 text-brand-cyan" />}
                    </button>
                  ))}
                </div>

                <button 
                  disabled={!method || isProcessing}
                  onClick={handleNext}
                  className="w-full py-4 rounded-xl bg-gradient-hype text-white font-bold text-lg shadow-lg hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>Confirm & Pay <CheckCircle className="w-5 h-5" /></>
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
                <div className="w-24 h-24 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h1 className="text-4xl font-black text-white mb-4">Payment Success!</h1>
                <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                  Your deposit of <span className="text-white font-bold">₹{amount}</span> has been successfully added to your wallet.
                </p>
                
                <div className="bg-black/40 border border-white/5 rounded-2xl p-6 mb-10 text-left">
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-500">Transaction ID</span>
                    <span className="text-white font-mono">HYP-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-500">Method</span>
                    <span className="text-white uppercase">{method}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Status</span>
                    <span className="text-emerald-400 font-bold uppercase text-xs tracking-widest mt-1">Confirmed</span>
                  </div>
                </div>

                <button 
                  onClick={() => navigate('/dashboard')}
                  className="w-full py-4 rounded-xl bg-white text-black font-bold text-lg hover:bg-slate-200 transition-colors"
                >
                  Return to Dashboard
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default PayIn;
