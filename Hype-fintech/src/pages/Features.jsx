import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowDownRight, ArrowUpRight, ShieldCheck, Zap, Globe, Lock, 
  ArrowRight, CreditCard, Hash, Activity, Terminal, Code
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
  const [showNotification, setShowNotification] = React.useState(false);
  const [activeService, setActiveService] = React.useState('');

  const handleServiceClick = (e, title, link) => {
    if (link === "#") {
      e.preventDefault();
      setActiveService(title);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  return (
    <div className="min-h-screen section-padding mt-10 relative overflow-hidden bg-brand-dark">
      {/* Toast Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-10 left-1/2 z-50 px-6 py-3 bg-brand-cyan border border-white/20 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-xl"
          >
            <Zap className="w-5 h-5 text-brand-dark animate-pulse" />
            <span className="text-brand-dark font-bold">{activeService} integration available soon!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* backgrounds */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-brand-cyan/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container-padding mx-auto relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-sm font-semibold mb-6 tracking-wide uppercase">
              Operational Core
            </span>
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              Precision <span className="text-gradient-hype">Movement of Money</span>
            </h1>
            <p className="text-lg text-slate-400 font-light leading-relaxed">
              HYPE is built on a mission-critical stack designed for high-availability. 
              Our architecture ensures sub-second latency and absolute transaction finality for enterprise-scale fintech operations.
            </p>
          </motion.div>
        </div>

        {/* Feature 1: Pay In */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-8 border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
              <ArrowDownRight className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Real-time Acquiring (Pay In)</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Accept payments globally with industry-leading authorization rates. Our <span className="text-white font-medium">Smart Routing Engine</span> automatically waterfalls through the most optimal acquiring banks to mitigate regional outages.
            </p>

            <ul className="space-y-6 mb-10">
              <li className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <ShieldCheck className="w-6 h-6 text-brand-cyan" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Advanced Risk Scoring</h4>
                  <p className="text-sm text-slate-400">Evaluate 500+ signals per transaction in under 20ms using ML models.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <Globe className="w-6 h-6 text-brand-cyan" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Cross-Border Rails</h4>
                  <p className="text-sm text-slate-400">Direct integration with 130+ local settlement networks to minimize FX spread.</p>
                </div>
              </li>
            </ul>

            <Link to="/pay-in" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all">
              Go to Pay In <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>

          {/* Dashboard Snapshot: Pay In */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0f172a] border border-slate-800 rounded-3xl p-6 shadow-2xl relative"
          >
            <div className="flex gap-2 mb-6 uppercase text-[10px] font-bold text-slate-600 tracking-widest">
              Live Acquiring Node: MUM-WEST-1
            </div>

            <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-800">
              <div>
                <div className="text-xs text-slate-500 font-mono uppercase mb-1">Total Volume (24h)</div>
                <div className="text-3xl font-bold text-white">₹1.24 Cr</div>
              </div>
              <div className="px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs font-bold font-mono">
                SUCCESS RATE: 99.4%
              </div>
            </div>

            <div className="space-y-4">
              {[
                { name: 'Zomato Solutions', amount: '+₹1,12,500.00', status: 'SETTLED', id: 'HYP-ACQ-9012' },
                { name: 'Reliance Retail', amount: '+₹45,200.00', status: 'AUTH_APPROVED', id: 'HYP-ACQ-8821' },
                { name: 'Tata Digital Ltd', amount: '+₹8,192.50', status: 'PROCESSING', id: 'HYP-ACQ-8822' }
              ].map((tx, i) => (
                <div key={i} className="flex justify-between items-center p-3 rounded-xl hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-800">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-300 text-sm">
                      {tx.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-200">{tx.name}</div>
                      <div className="text-xs text-slate-500 font-mono uppercase">{tx.id}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-emerald-400 font-mono">{tx.amount}</div>
                    <div className="text-[10px] font-bold text-slate-500">{tx.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Feature 2: Pay Out */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-40">
          {/* Dashboard Snapshot: Pay Out */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0f172a] border border-slate-800 rounded-3xl p-6 shadow-2xl relative order-2 lg:order-1"
          >
            <div className="bg-slate-900 rounded-2xl p-6 mb-6 border border-slate-800">
              <div className="flex justify-between items-center mb-6">
                <div className="text-xs text-slate-500 uppercase font-mono tracking-widest">Payout Dispatcher V2.1</div>
                <div className="text-[10px] text-brand-cyan font-bold border border-brand-cyan/30 px-2 py-0.5 rounded">IDEMPOTENT</div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-black/30 border border-slate-800 rounded-xl p-4 flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Recipient</span>
                  <span className="text-white text-sm font-medium flex items-center gap-2">
                    <div className="w-5 h-5 bg-brand-cyan text-brand-dark rounded-full flex items-center justify-center text-[10px] font-bold">AS</div>
                    Arjun Sharma
                  </span>
                </div>

                <div className="bg-black/30 border border-slate-800 rounded-xl p-4 flex justify-between items-center text-2xl">
                  <span className="text-slate-500">₹</span>
                  <span className="text-white font-mono font-bold tracking-tight">25,850.00</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white/5 border border-white/5 rounded-lg text-center font-mono text-xs text-slate-400">NODE: MUM-01</div>
                  <div className="p-3 bg-white/5 border border-white/5 rounded-lg text-center font-mono text-xs text-slate-400">LATENCY: 42ms</div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center px-2">
              <span className="text-xs text-slate-500 font-mono uppercase tracking-tighter">Available Balance</span>
              <span className="text-sm font-bold text-brand-cyan font-mono">₹8,92,10,422.00</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-8 border border-brand-blue/20 shadow-[0_0_30px_rgba(37,99,235,0.15)]">
              <ArrowUpRight className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Programmable Disbursements (Pay Out)</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Move funds at scale across the global financial system. Our <span className="text-white font-medium">Unified Payout API</span> handles the complexity of ISO 20022 messaging and regional compliance automatically.
            </p>

            <ul className="space-y-6 mb-10">
              <li className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <Zap className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Sub-second Latency</h4>
                  <p className="text-sm text-slate-400">Direct IMPS/UPI routing for instant fund availability for your partners.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <Terminal className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Automated Reconciliation</h4>
                  <p className="text-sm text-slate-400">Real-time ledger entries and status feedback hooks for zero manual audit.</p>
                </div>
              </li>
            </ul>

            <Link to="/pay-out" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all">
              Go to Pay Out <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>
        </div>

        {/* Feature 3: BBPS */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-8 border border-orange-500/20 shadow-[0_0_30px_rgba(249,115,22,0.15)]">
              <Hash className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Bharat Bill Payment System</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Official BBPS Operating Unit integration. Connect to the entire utility ecosystem with a single API. Automated bill fetch and instant digital receipt generation.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-xl font-bold text-white mb-1">20,000+</div>
                <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">Live Billers</div>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-xl font-bold text-white mb-1">99.9%</div>
                <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">Success Rate</div>
              </div>
            </div>

            <Link to="/bbps" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all">
              Go to BBPS <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>

          {/* UI Snapshot: BBPS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative"
          >
            <div className="absolute top-6 right-8">
               <div className="px-3 py-1 bg-white rounded flex flex-col items-center">
                  <span className="text-[8px] font-black text-slate-400 leading-none">BHARAT</span>
                  <span className="text-[10px] font-black text-slate-900 leading-none">BILLPAY</span>
               </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-6">Bill Fetch Preview</h3>
            
            <div className="space-y-4 mb-8">
               <div className="p-4 bg-black/40 rounded-2xl border border-white/5">
                  <div className="flex justify-between items-center mb-1">
                     <span className="text-xs text-slate-500 font-bold uppercase">Customer ID</span>
                     <span className="text-xs font-mono text-white">100234905</span>
                  </div>
                  <div className="text-sm font-bold text-white">Tata Power Delhi</div>
               </div>
               
               <div className="p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/20">
                  <div className="flex justify-between items-center mb-1">
                     <span className="text-xs text-emerald-500/70 font-bold uppercase">Amount Due</span>
                     <span className="text-xs text-emerald-400 font-bold">DUE IN 4 DAYS</span>
                  </div>
                  <div className="text-2xl font-black text-white">₹4,250.00</div>
               </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 border-t border-white/5 pt-6">
               <ShieldCheck className="w-4 h-4 text-emerald-500" />
               NPCI Certified Settlement Rails
            </div>
          </motion.div>
        </div>

        {/* Feature 4: Card Issuing */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-40">
           {/* UI Snapshot: Cards */}
           <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1 flex items-center justify-center p-10"
          >
             <div className="relative w-full max-w-sm aspect-[1.586/1] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer perspective-1000">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-black z-0" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 z-10" />
                <div className="relative z-20 p-8 h-full flex flex-col justify-between">
                   <div className="flex justify-between items-start">
                      <div className="w-12 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-md opacity-80" />
                      <div className="text-2xl font-black text-white italic">HYPE</div>
                   </div>
                   
                   <div>
                      <div className="flex gap-4 mb-4">
                         <div className="text-xl font-mono text-white tracking-widest">••••</div>
                         <div className="text-xl font-mono text-white tracking-widest">••••</div>
                         <div className="text-xl font-mono text-white tracking-widest">••••</div>
                         <div className="text-xl font-mono text-white tracking-widest">8842</div>
                      </div>
                      <div className="flex justify-between items-end">
                         <div>
                            <div className="text-[8px] text-slate-500 uppercase font-bold tracking-widest mb-1">Card Holder</div>
                            <div className="text-sm font-bold text-white uppercase tracking-wider">Arjun Sharma</div>
                         </div>
                         <div className="w-12 h-8 bg-brand-cyan/20 rounded-sm overflow-hidden flex items-center justify-center">
                            <div className="w-6 h-6 bg-red-500 rounded-full opacity-80 -mr-2" />
                            <div className="w-6 h-6 bg-yellow-500 rounded-full opacity-80" />
                         </div>
                      </div>
                   </div>
                </div>
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-30">
                   <div className="px-2 py-1 rounded bg-emerald-500 text-[10px] font-black text-white">ACTIVE</div>
                </div>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center mb-8 border border-brand-cyan/20 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              <CreditCard className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Enterprise Card Issuing</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Launch virtual and physical cards with granular, real-time spending controls. Built-in Just-In-Time (JIT) funding and custom auth stream enrichment for complex business flows.
            </p>

            <ul className="space-y-6 mb-10">
              <li className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <Activity className="w-6 h-6 text-brand-cyan" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Dynamic Spending Limits</h4>
                  <p className="text-sm text-slate-400">Update transaction limits, MCC restrictions, and geofencing in real-time via API.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <Code className="w-6 h-6 text-brand-cyan" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Web-Auth Hooks</h4>
                  <p className="text-sm text-slate-400">Approve or decline card transactions in real-time on your own server.</p>
                </div>
              </li>
            </ul>

            <Link 
              to="#" 
              onClick={(e) => handleServiceClick(e, "Card Issuing", "#")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all group"
            >
              Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Feature 5: Compliance */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-8 border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
              <Lock className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Unified Compliance Stack</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Automate KYC/AML pipelines and regulatory reporting. Our compliance engine handles multi-jurisdictional requirements so you can scale globally without legal friction.
            </p>

            <ul className="space-y-4 mb-10">
               {[
                 "V-KYC with AI Liveness Detection",
                 "Real-time Sanctions Screening (OFAC, UN)",
                 "STR/SAR Automated Filing",
                 "PCI-DSS v4.0 Level 1 Infrastructure"
               ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                     <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
                     {item}
                  </li>
               ))}
            </ul>

            <Link 
              to="#" 
              onClick={(e) => handleServiceClick(e, "Compliance Engine", "#")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all group"
            >
              View Docs <Terminal className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>

          {/* Clean Dashboard Snapshot: Compliance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0f172a] border border-slate-800 rounded-3xl p-6 shadow-2xl relative"
          >
             <div className="flex items-center justify-between mb-8">
                <div className="text-sm font-bold text-white">Risk Profile: Arjun S.</div>
                <div className="flex gap-1">
                   <div className="w-2 h-2 rounded-full bg-emerald-500" />
                   <div className="w-2 h-2 rounded-full bg-emerald-500" />
                   <div className="w-2 h-2 rounded-full bg-slate-700" />
                </div>
             </div>
             
             <div className="space-y-4">
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex justify-between items-center">
                   <div className="text-xs text-slate-400 font-bold uppercase">Identity Verification</div>
                   <div className="text-xs text-emerald-400 font-bold">VERIFIED</div>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex justify-between items-center">
                   <div className="text-xs text-slate-400 font-bold uppercase">Liveness Check</div>
                   <div className="text-xs text-emerald-400 font-bold">100% MATCH</div>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex justify-between items-center">
                   <div className="text-xs text-slate-400 font-bold uppercase">Sanctions Match</div>
                   <div className="text-xs text-slate-400 font-bold uppercase italic">NO MATCH FOUND</div>
                </div>
             </div>
             
             <div className="mt-8 p-4 bg-brand-blue/10 border border-brand-blue/20 rounded-xl">
                <div className="text-[10px] text-brand-blue font-bold uppercase mb-2">Internal Assessment</div>
                <div className="text-xl font-bold text-white mb-1">SCORE: 98/100</div>
                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                   <div className="w-[98%] h-full bg-brand-blue" />
                </div>
             </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Features;
