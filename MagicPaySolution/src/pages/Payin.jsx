import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CreditCard, Smartphone, Landmark, ShieldCheck, Zap, 
  ArrowRight, Check, AlertCircle, Play, RefreshCw, Terminal
} from 'lucide-react';

export default function Payin() {
  // Simulator State
  const [amount, setAmount] = useState('500.00');
  const [channel, setChannel] = useState('upi');
  const [simState, setSimState] = useState('idle'); // idle, processing, success, error
  const [logMessages, setLogMessages] = useState([]);

  const addLog = (msg) => {
    setLogMessages(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  const handleSimulate = (e) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }
    
    setSimState('processing');
    setLogMessages([]);
    addLog(`POST /v1/payments/initialize - Amount: ₹${amount}`);
    
    setTimeout(() => {
      addLog(`Dynamic transaction ID generated: txn_${Math.random().toString(36).substr(2, 9)}`);
      addLog(`Redirecting user payload to selected bank rail: [${channel.toUpperCase()}]`);
    }, 800);

    setTimeout(() => {
      addLog(`Verifying transaction verification tokens...`);
      addLog(`Decrypting payload headers...`);
    }, 1800);

    setTimeout(() => {
      if (parseFloat(amount) === 999) {
        // Mock error condition for specific input
        setSimState('error');
        addLog(`ERROR: Bank node timeout. 3D-Secure routing failed.`);
      } else {
        setSimState('success');
        addLog(`SUCCESS: Transaction signature validated by gateway. Funds secured.`);
      }
    }, 3000);
  };

  const resetSimulator = () => {
    setSimState('idle');
    setAmount('500.00');
    setLogMessages([]);
  };

  const payinFeatures = [
    {
      title: "UPI Collect & Intent",
      desc: "Native UPI redirects and custom QR codes for frictionless mobile checkout.",
      icon: Smartphone
    },
    {
      title: "PCI-DSS Card Processing",
      desc: "Process Visa, Mastercard, RuPay, and Amex with tokenized credentials.",
      icon: CreditCard
    },
    {
      title: "Multi-Bank Netbanking",
      desc: "Direct integration channels with 50+ major public & private banks.",
      icon: Landmark
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-16 text-left relative tech-dots-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-slate-800 border border-slate-700 px-3 py-1 rounded-full hover:border-royal-500 transition-all duration-300">
              <span className="w-2 h-2 rounded-full bg-royal-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Payin infrastructure
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Dynamic Payin Gateway Infrastructure
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Accept customer payments instantly with maximum conversion rate optimizations. Integrate our robust SDK to enable UPI, international credit cards, and direct net banking checkouts.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {payinFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            const staggerDelay = `delay-${(idx + 1) * 100}`;
            return (
              <div key={idx} className={`bg-white border border-slate-200 rounded-xl p-8 text-left space-y-4 premium-shadow premium-shadow-hover animate-fade-in-up ${staggerDelay}`}>
                <div className="w-12 h-12 bg-blue-50 border border-blue-100 flex items-center justify-center rounded-lg">
                  <Icon className="h-6 w-6 text-royal-600" />
                </div>
                <h3 className="text-lg font-bold text-navy-900">{feat.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Simulator Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Simulator Interactive Panel */}
            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-xl p-6 md:p-8 premium-shadow text-left animate-fade-in-up">
              <h3 className="text-xl font-bold text-navy-900 mb-2">Gateway Sandbox Simulator</h3>
              <p className="text-xs text-slate-500 mb-6">
                Test the checkout API resolution speed and state machine mapping in real time. (Enter ₹999 to simulate a bank decline).
              </p>

              {simState === 'idle' && (
                <form onSubmit={handleSimulate} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Transaction Amount (INR)
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500 font-semibold text-sm">
                        ₹
                      </span>
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="block w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold focus:outline-none focus:border-royal-600 focus:bg-white transition-all"
                        placeholder="500.00"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Select Payment Channel
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'upi', name: 'UPI Pay', icon: Smartphone },
                        { id: 'card', name: 'Credit Card', icon: CreditCard },
                        { id: 'netbank', name: 'Netbanking', icon: Landmark }
                      ].map((item) => {
                        const ItemIcon = item.icon;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setChannel(item.id)}
                            className={`flex flex-col items-center justify-center p-3.5 rounded-lg border text-xs font-semibold transition-all hover:scale-[1.02] active:scale-95 ${
                              channel === item.id 
                                ? 'bg-royal-600 border-royal-600 text-white' 
                                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                            }`}
                          >
                            <ItemIcon className="h-5 w-5 mb-1.5" />
                            {item.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-royal-600 hover:bg-navy-900 rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-sm active:scale-95"
                  >
                    Simulate Payment Flow
                    <Play className="ml-2 h-4 w-4" />
                  </button>
                </form>
              )}

              {simState === 'processing' && (
                <div className="py-12 flex flex-col items-center justify-center space-y-4 animate-fade-in-up">
                  <RefreshCw className="h-10 w-10 text-royal-600 animate-spin" />
                  <div className="text-center">
                    <p className="text-sm font-bold text-navy-900">Processing Transaction</p>
                    <p className="text-xs text-slate-500 mt-1">Resolving secure bank routing network...</p>
                  </div>
                </div>
              )}

              {simState === 'success' && (
                <div className="py-10 flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
                  <div className="w-12 h-12 bg-emerald-100 flex items-center justify-center rounded-full animate-pulse-glow">
                    <Check className="h-6 w-6 text-accent-emerald" />
                  </div>
                  <div>
                    <p className="text-base font-extrabold text-navy-900 animate-pulse">Transaction Approved</p>
                    <p className="text-xs text-slate-500 mt-1">₹{amount} successfully collected</p>
                  </div>
                  <button
                    onClick={resetSimulator}
                    className="px-4 py-2 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded transition-all duration-200 hover:scale-105"
                  >
                    Run Another Test
                  </button>
                </div>
              )}

              {simState === 'error' && (
                <div className="py-10 flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
                  <div className="w-12 h-12 bg-red-100 flex items-center justify-center rounded-full">
                    <AlertCircle className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-base font-extrabold text-red-700">Transaction Declined</p>
                    <p className="text-xs text-slate-500 mt-1">Simulation code triggered error</p>
                  </div>
                  <button
                    onClick={resetSimulator}
                    className="px-4 py-2 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded transition-all duration-200 hover:scale-105"
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>

            {/* Console Log Panel */}
            <div className="lg:col-span-6 bg-navy-950 border border-slate-900 rounded-xl p-5 md:p-6 premium-shadow flex flex-col h-[380px] text-left animate-slide-in-right delay-200">
              <div className="flex items-center space-x-2 border-b border-slate-800 pb-3 mb-4">
                <Terminal className="h-4.5 w-4.5 text-royal-400" />
                <span className="text-xs font-mono font-bold text-slate-400">Gateway Console API Output</span>
              </div>
              
              <div className="flex-grow overflow-y-auto space-y-2.5 font-mono text-[11px] text-slate-300">
                {logMessages.length === 0 ? (
                  <p className="text-slate-500 italic">Console logs will display here as transaction events fire...</p>
                ) : (
                  logMessages.map((log, idx) => (
                    <div key={idx} className="leading-relaxed break-all animate-fade-in-up">
                      {log}
                    </div>
                  ))
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Payin Reconciliation & Ledger Section (Replaced API webhook section) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 animate-fade-in-up">
            <h3 className="text-2xl font-extrabold text-navy-900">Real-Time Settlements & Reconciliation</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Never lose track of a payment. Magic Pay Solution automatically matches customer collections and settles balances in your central ledger the moment bank confirmations occur. Download detailed transaction spreadsheets, filter by date, and manage refunds instantly.
            </p>
            <ul className="space-y-3">
              {[
                'Instant push notifications via SMS, WhatsApp, and email alerts for every transaction.',
                'Automated bank-direct ledger reconciliation checks every 10 seconds to eliminate stuck payments.',
                'Comprehensive transaction histories with clear system settlement logs and PDF receipts.'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-sm text-slate-700 font-medium hover:translate-x-1 transition-transform">
                  <ShieldCheck className="h-5 w-5 text-royal-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-navy-950 border border-slate-900 rounded-xl p-6 text-slate-300 font-sans text-xs animate-slide-in-right">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Audit Log & Reconciliation</span>
              <span className="bg-emerald-950 text-emerald-400 border border-emerald-900/60 text-[10px] font-bold px-2 py-0.5 rounded">Synced</span>
            </div>
            
            <div className="space-y-4 text-left">
              <div className="bg-slate-900/80 border border-slate-800/80 rounded p-3">
                <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wider">L1 Bank Settlement Confirmation</span>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-white font-semibold">UTR Code: HDFCR520260520...</span>
                  <span className="text-slate-400">15:58:10</span>
                </div>
                <div className="flex justify-between items-center mt-1 text-[10px] text-slate-500">
                  <span>Routing: HDFC Core UPI Switch</span>
                  <span>Amount: ₹5,000.00</span>
                </div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800/80 rounded p-3">
                <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wider">Merchant Ledger Updates</span>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-white font-semibold">Ledger Bal: ₹4,82,900.00 (+₹4,990.00)</span>
                  <span className="text-emerald-400 font-bold">+₹4,990.00</span>
                </div>
                <div className="flex justify-between items-center mt-1 text-[10px] text-slate-500">
                  <span>Txn Ref: pay_9a2fK1n9x (Completed)</span>
                  <span>System Commission Fee: ₹10.00</span>
                </div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800/80 rounded p-3">
                <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wider">Alerts & System Dispatches</span>
                <div className="flex items-center space-x-2 mt-2 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-[11px]">Email confirmation receipt sent to suresh@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Trust & Compliance Banner */}
      <section className="bg-slate-50 border-t border-slate-200 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-4 animate-fade-in-up">
          <ShieldCheck className="h-10 w-10 text-royal-600 mx-auto animate-pulse-slow" />
          <h3 className="text-xl font-bold text-navy-900">Regulated Payment Architecture</h3>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            All credit card transactions are encrypted using AES-256 GCM algorithms. Bank-direct redirection is executed under OAuth standard frames, ensuring absolute safety for customer financial credentials.
          </p>
          <div className="pt-4 flex justify-center space-x-6">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">PCI-DSS LEVEL 1</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">ISO 27001</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">SOC 2 TYPE II</span>
          </div>
        </div>
      </section>
    </div>
  );
}
