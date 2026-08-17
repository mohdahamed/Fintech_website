import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, Zap, ShieldCheck, ArrowRight, Check, 
  Search, RefreshCw, AlertCircle, HelpCircle, FileText
} from 'lucide-react';

export default function Bbps() {
  // BBPS Simulator State
  const [utility, setUtility] = useState('electricity');
  const [subscriberId, setSubscriberId] = useState('100827364');
  const [simState, setSimState] = useState('idle'); // idle, fetching, fetched, paying, success
  const [billDetails, setBillDetails] = useState(null);

  const handleFetchBill = (e) => {
    e.preventDefault();
    if (!subscriberId) {
      alert("Please enter a valid subscriber ID");
      return;
    }
    setSimState('fetching');

    setTimeout(() => {
      const names = {
        electricity: 'Tata Power DDL (Consumer #',
        water: 'Delhi Jal Board (K-No. #',
        broadband: 'Airtel Fiber (Account #',
      };
      
      const amounts = {
        electricity: 3420.00,
        water: 680.00,
        broadband: 999.00
      };

      setBillDetails({
        billerName: names[utility] + subscriberId + ")",
        amount: amounts[utility],
        dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        consumerName: "Rajesh Kumar",
        billId: `BILL_${Math.random().toString(36).substr(2, 8).toUpperCase()}`
      });
      setSimState('fetched');
    }, 1200);
  };

  const handlePayBill = () => {
    setSimState('paying');
    setTimeout(() => {
      setSimState('success');
    }, 1800);
  };

  const resetSimulator = () => {
    setSimState('idle');
    setSubscriberId('100827364');
    setBillDetails(null);
  };

  const bbpsCategories = [
    { name: "Electricity Bills", desc: "Connect directly to local grids like BSES, Tata Power, and state electrical boards." },
    { name: "Mobile & DTH Recharge", desc: "Top up cellular networks and direct-to-home television credits instantly." },
    { name: "Broadband & Water", desc: "Facilitate quick verification and payments of local municipality water and internet accounts." }
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
                BBPS ecosystem
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Bharat Bill Payment System (BBPS) Integrations
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Launch bill payment and recharge features within your application in 48 hours. Integrate NPCI authorized bill discovery, verification, and payment services with clean API schemas.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Categories */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bbpsCategories.map((cat, idx) => {
            const staggerDelay = `delay-${(idx + 1) * 100}`;
            return (
              <div key={idx} className={`bg-white border border-slate-200 rounded-xl p-8 text-left space-y-4 premium-shadow premium-shadow-hover animate-fade-in-up ${staggerDelay}`}>
                <div className="w-12 h-12 bg-blue-50 border border-blue-100 flex items-center justify-center rounded-lg">
                  <Smartphone className="h-6 w-6 text-royal-600" />
                </div>
                <h3 className="text-lg font-bold text-navy-900">{cat.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{cat.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive BBPS Simulator */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Simulator Form */}
            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-xl p-6 md:p-8 premium-shadow text-left animate-fade-in-up">
              <h3 className="text-xl font-bold text-navy-900 mb-2">BBPS API Sandbox Console</h3>
              <p className="text-xs text-slate-500 mb-6">
                Interact with the NPCI bill discovery protocol by fetching and clearing utility invoice payloads.
              </p>

              {simState === 'idle' && (
                <form onSubmit={handleFetchBill} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Select Utility Type
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'electricity', name: 'Electricity' },
                        { id: 'water', name: 'Water Bill' },
                        { id: 'broadband', name: 'Broadband' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setUtility(item.id)}
                          className={`py-3 px-2 rounded-lg border text-xs font-semibold text-center transition-all hover:scale-[1.02] active:scale-95 ${
                            utility === item.id 
                              ? 'bg-royal-600 border-royal-600 text-white' 
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Subscriber / Account ID
                    </label>
                    <input
                      type="text"
                      value={subscriberId}
                      onChange={(e) => setSubscriberId(e.target.value)}
                      className="block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold focus:outline-none focus:border-royal-600 focus:bg-white transition-all"
                      placeholder="100827364"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-royal-600 hover:bg-navy-900 rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-sm active:scale-95"
                  >
                    Fetch Bill Details
                    <Search className="ml-2 h-4 w-4" />
                  </button>
                </form>
              )}

              {simState === 'fetching' && (
                <div className="py-12 flex flex-col items-center justify-center space-y-4 animate-fade-in-up">
                  <RefreshCw className="h-10 w-10 text-royal-600 animate-spin" />
                  <div className="text-center">
                    <p className="text-sm font-bold text-navy-900">Querying BBPS Biller Database</p>
                    <p className="text-xs text-slate-500 mt-1">Verifying subscriber record with central registry...</p>
                  </div>
                </div>
              )}

              {simState === 'fetched' && billDetails && (
                <div className="space-y-5 animate-fade-in-up">
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between text-xs hover:translate-x-0.5 transition-transform">
                      <span className="text-slate-500 font-medium">Biller:</span>
                      <span className="font-bold text-navy-900">{billDetails.billerName}</span>
                    </div>
                    <div className="flex justify-between text-xs hover:translate-x-0.5 transition-transform">
                      <span className="text-slate-500 font-medium">Consumer Name:</span>
                      <span className="font-bold text-navy-900">{billDetails.consumerName}</span>
                    </div>
                    <div className="flex justify-between text-xs hover:translate-x-0.5 transition-transform">
                      <span className="text-slate-500 font-medium">Due Date:</span>
                      <span className="font-bold text-navy-900">{billDetails.dueDate}</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-200 pt-3 text-sm">
                      <span className="font-bold text-navy-900">Outstanding Bill:</span>
                      <span className="font-extrabold text-royal-600 animate-pulse">₹{billDetails.amount.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={resetSimulator}
                      className="w-1/3 py-3 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-all duration-200 hover:scale-102"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handlePayBill}
                      className="w-2/3 py-3 text-xs font-bold text-white bg-royal-600 hover:bg-navy-900 rounded-lg transition-all duration-200 hover:scale-102 shadow-sm"
                    >
                      Clear Bill Outstanding
                    </button>
                  </div>
                </div>
              )}

              {simState === 'paying' && (
                <div className="py-12 flex flex-col items-center justify-center space-y-4 animate-fade-in-up">
                  <RefreshCw className="h-10 w-10 text-royal-600 animate-spin" />
                  <div className="text-center">
                    <p className="text-sm font-bold text-navy-900">Processing Payment Clearence</p>
                    <p className="text-xs text-slate-500 mt-1">Acquiring settlement verification token...</p>
                  </div>
                </div>
              )}

              {simState === 'success' && billDetails && (
                <div className="py-10 flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
                  <div className="w-12 h-12 bg-emerald-100 flex items-center justify-center rounded-full animate-pulse-glow">
                    <Check className="h-6 w-6 text-accent-emerald" />
                  </div>
                  <div>
                    <p className="text-base font-extrabold text-navy-900">BBPS Bill Cleared</p>
                    <p className="text-xs text-slate-500 mt-1">Receipt ID: {billDetails.billId}</p>
                    <p className="text-xs text-slate-500">Invoice of ₹{billDetails.amount.toFixed(2)} paid successfully</p>
                  </div>
                  <button
                    onClick={resetSimulator}
                    className="px-4 py-2 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded transition-all duration-200 hover:scale-105"
                  >
                    Query Another Bill
                  </button>
                </div>
              )}
            </div>

            {/* BBPS Ecosystem Specs */}
            <div className="lg:col-span-6 text-left space-y-6 animate-slide-in-right delay-200">
              <h3 className="text-2xl font-extrabold text-navy-900">The BBPS Centralized Network</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                By integrating Magic Pay's BBPS framework, you connect directly to the national bill clearing infrastructure authorized by NPCI (National Payments Corporation of India). This ensures standardization across hundreds of private utility grids and telecom operations.
              </p>
              
              <ul className="space-y-4 text-sm text-slate-700 font-semibold">
                <li className="flex items-center space-x-3 hover:translate-x-1 transition-transform">
                  <span className="w-6 h-6 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-xs font-bold text-royal-600">1</span>
                  <span>Auto-Discovery queries find outstanding invoices using basic customer phones/numbers.</span>
                </li>
                <li className="flex items-center space-x-3 hover:translate-x-1 transition-transform">
                  <span className="w-6 h-6 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-xs font-bold text-royal-600">2</span>
                  <span>Transactions are instantly backed by official BBPS digital verification receipts.</span>
                </li>
                <li className="flex items-center space-x-3 hover:translate-x-1 transition-transform">
                  <span className="w-6 h-6 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-xs font-bold text-royal-600">3</span>
                  <span>NPCI-mandated safety algorithms protect user billing history from third-party tracking.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* BBPS Agent panel Section (Replaced API section) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 animate-fade-in-up">
            <h3 className="text-2xl font-extrabold text-navy-900">Universal Agent Biller Console</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Launch bill collection desks directly at your retail counters or corporate branches. Our unified BBPS control panel provides a user-friendly desk where operators can search outstanding consumer invoices, accept payments, and issue official receipts instantly. Zero coding or technical setup required.
            </p>
            <div className="flex space-x-4 bg-slate-50 border border-slate-200 p-4 rounded-lg hover:border-royal-500 transition-colors">
              <FileText className="h-10 w-10 text-royal-600 flex-shrink-0 animate-pulse-slow" />
              <div>
                <p className="text-xs font-bold text-navy-900 uppercase">Automated Receipt Generation</p>
                <p className="text-xs text-slate-500 mt-1">Generate official NPCI-compliant payment receipts for print or digital dispatch on WhatsApp and SMS.</p>
              </div>
            </div>
          </div>

          <div className="bg-navy-950 border border-slate-900 rounded-xl p-6 text-slate-300 font-sans text-xs animate-slide-in-right">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">NPCI BBPS Clearance Receipt</span>
              <span className="bg-emerald-950 text-emerald-400 border border-emerald-900/60 text-[10px] font-bold px-2 py-0.5 rounded">Settled</span>
            </div>
            
            <div className="space-y-4 text-left">
              {/* Receipt Details */}
              <div className="bg-slate-900/80 border border-slate-800/80 rounded p-4 space-y-2.5">
                <div className="flex justify-between items-center text-[10px] text-slate-500 uppercase font-bold tracking-wider pb-1.5 border-b border-slate-800/60">
                  <span>Receipt Metadata</span>
                  <span>NPCI-Ref: TXN_78291B</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Utility Category:</span>
                  <span className="text-white font-semibold">Electricity Distribution</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Biller Company:</span>
                  <span className="text-white font-semibold">Tata Power DDL</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Consumer Name:</span>
                  <span className="text-white font-semibold">Rajesh Kumar</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Subscriber Account ID:</span>
                  <span className="text-white font-mono">100827364</span>
                </div>
                <div className="flex justify-between items-center border-t border-slate-800/60 pt-2 text-sm">
                  <span className="font-bold text-white">Total Cleared:</span>
                  <span className="font-extrabold text-emerald-400">₹3,420.00</span>
                </div>
              </div>

              {/* Stamp and Operator info */}
              <div className="flex justify-between items-center px-1 text-[10px] text-slate-500 font-semibold">
                <span>Agent ID: OP_MUM_9281</span>
                <span>Date: {new Date().toLocaleDateString()}</span>
                <span className="text-royal-400 font-bold uppercase tracking-widest text-[9px] border border-royal-900 px-1 py-0.5 rounded">BBPS Certified</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Security Infrastructure section */}
      <section className="bg-slate-50 border-t border-slate-200 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-4 animate-fade-in-up">
          <ShieldCheck className="h-10 w-10 text-royal-600 mx-auto animate-pulse-slow" />
          <h3 className="text-xl font-bold text-navy-900">NPCI Authorized Infrastructure Partner</h3>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            All BBPS connection points are strictly certified using central Indian banking infrastructure protocols. Security is audited quarterly to comply with digital payment collection bylaws.
          </p>
        </div>
      </section>
    </div>
  );
}
