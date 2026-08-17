import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  CreditCard, 
  Wallet, 
  Activity, 
  Plus,
  Send,
  MoreHorizontal,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // Protect route
  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  if (loading || !user) return null; // Show nothing or a generic spinner while redirecting

  return (
    <div className="min-h-screen section-padding mt-10 bg-brand-dark">
      <div className="container-padding mx-auto">
        
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-3xl font-bold text-white mb-2">Welcome back, {user.name.split(' ')[0]}</h1>
            <p className="text-slate-400">Here's what's happening with your accounts today.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-3"
          >
             <Link to="/pay-in" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors flex items-center gap-2">
               <Plus className="w-4 h-4" /> Add Funds
             </Link>
             <Link to="/pay-out" className="px-4 py-2 rounded-xl bg-gradient-hype text-white text-sm font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:opacity-90 transition-all flex items-center gap-2">
               <Send className="w-4 h-4" /> Send Money
             </Link>
          </motion.div>
        </div>

        {/* Top Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Main Balance Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="col-span-1 md:col-span-2 bg-gradient-to-br from-brand-card to-[#1e293b] border border-white/10 rounded-3xl p-8 relative overflow-hidden"
          >
            {/* BG Flare */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[80px] -z-0" />
            
            <div className="relative z-10 flex flex-col h-full justify-between">
               <div className="flex justify-between items-start mb-12">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-brand-cyan/20 flex items-center justify-center">
                     <Wallet className="w-5 h-5 text-brand-cyan" />
                   </div>
                   <h3 className="text-slate-300 font-medium">HYPE Balance</h3>
                 </div>
                 <div className="px-3 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-1">
                   <ArrowUpRight className="w-3 h-3" /> +14.2%
                 </div>
               </div>
               
               <div>
                 <div className="text-5xl font-black text-white mb-2 tracking-tight">₹124,592.50</div>
                 <p className="text-slate-400 text-sm">Available funds across 3 currency wallets</p>
               </div>
            </div>
          </motion.div>

          {/* Connected Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-brand-card border border-white/10 rounded-3xl p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center">
                   <CreditCard className="w-5 h-5 text-brand-blue" />
                 </div>
                 <h3 className="text-slate-300 font-medium">Active Cards</h3>
              </div>
              <button className="text-brand-cyan hover:text-cyan-300 transition-colors p-1">
                <Plus className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
               {/* Virtual Card UI */}
               <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-4 border border-white/5 relative overflow-hidden">
                 <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-brand-blue/20 blur-2xl rounded-full" />
                 <div className="flex justify-between items-start mb-6">
                   <div className="flex gap-1">
                     <div className="w-6 h-4 bg-white/20 rounded-sm" />
                     <div className="w-6 h-4 bg-white/40 rounded-sm -ml-2 mix-blend-overlay" />
                   </div>
                   <div className="text-xs font-mono text-slate-400">Virtual</div>
                 </div>
                 <div className="text-lg font-mono tracking-widest text-white mb-1">•••• •••• •••• 4242</div>
                 <div className="text-xs text-slate-400 flex justify-between">
                   <span>{user.name.toUpperCase()}</span>
                   <span>12/28</span>
                 </div>
               </div>
               
               <div className="bg-slate-800/50 rounded-2xl p-4 border border-white/5 flex items-center justify-between hover:bg-slate-800 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold italic text-xs">V</div>
                     <div>
                       <div className="text-sm font-bold text-white">Physical Card</div>
                       <div className="text-xs text-slate-400">•••• 8810</div>
                     </div>
                  </div>
                  <MoreHorizontal className="w-5 h-5 text-slate-500" />
               </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Transactions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 bg-brand-card border border-white/10 rounded-3xl p-6"
          >
             <div className="flex justify-between items-center mb-6">
               <h3 className="text-xl font-bold text-white flex items-center gap-2">
                 <Activity className="w-5 h-5 text-brand-cyan" />
                 Recent Transactions
               </h3>
               <button className="text-sm text-slate-400 hover:text-white transition-colors">View All</button>
             </div>
             
             <div className="space-y-4">
               {[
                 { 
                   name: 'Stripe Payout', 
                   type: 'Incoming transfer', 
                   amount: '+₹4,500.00', 
                   date: 'Today, 10:42 AM',
                   icon: <ArrowDownRight className="w-5 h-5 text-emerald-500" />,
                   bg: 'bg-emerald-500/10'
                 },
                 { 
                   name: 'AWS Web Services', 
                   type: 'Card •••• 4242', 
                   amount: '-₹124.50', 
                   date: 'Yesterday, 4:15 PM',
                   icon: <ArrowUpRight className="w-5 h-5 text-red-500" />,
                   bg: 'bg-red-500/10'
                 },
                 { 
                   name: 'Figma Subscription', 
                   type: 'Card •••• 4242', 
                   amount: '-₹15.00', 
                   date: 'Yesterday, 9:20 AM',
                   icon: <ArrowUpRight className="w-5 h-5 text-red-500" />,
                   bg: 'bg-red-500/10'
                 },
                 { 
                   name: 'Client Payment #INV-0042', 
                   type: 'ACH Direct via Hype API', 
                   amount: '+₹12,000.00', 
                   date: 'Aug 14, 2:30 PM',
                   icon: <ArrowDownRight className="w-5 h-5 text-emerald-500" />,
                   bg: 'bg-emerald-500/10'
                 },
               ].map((tx, i) => (
                  <div key={i} className="flex justify-between items-center p-4 rounded-2xl hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-700/50">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tx.bg}`}>
                        {tx.icon}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white mb-0.5">{tx.name}</div>
                        <div className="text-xs text-slate-400">{tx.type}</div>
                      </div>
                    </div>
                    <div className="text-right">
                       <div className={`text-sm font-bold ${tx.amount.startsWith('+') ? 'text-white' : 'text-white'}`}>
                          {tx.amount}
                       </div>
                       <div className="text-xs text-slate-500">{tx.date}</div>
                    </div>
                  </div>
               ))}
             </div>
          </motion.div>

          {/* Quick Actions / Limits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
             {/* Security limits card */}
             <div className="bg-brand-card border border-white/10 rounded-3xl p-6">
               <h3 className="text-slate-300 font-medium mb-4">Daily Transfer Limit</h3>
               <div className="flex justify-between text-sm mb-2">
                 <span className="text-white font-bold">₹12,450 sent</span>
                 <span className="text-slate-500">₹50,000</span>
               </div>
               <div className="w-full bg-slate-800 rounded-full h-2.5 mb-2 overflow-hidden">
                 <div className="bg-brand-blue h-2.5 rounded-full" style={{ width: '25%' }}></div>
               </div>
               <p className="text-xs text-slate-500">Limits reset at midnight UTC.</p>
             </div>

             {/* BBPS Quick Link */}
             <div className="bg-brand-card border border-white/10 rounded-3xl p-6 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <Zap className="w-12 h-12 text-yellow-400" />
               </div>
               <h3 className="text-slate-300 font-medium mb-4">Bills & Utilities</h3>
               <p className="text-sm text-slate-400 mb-6">Pay your electricity, water, or DTH bills instantly via BBPS.</p>
               <Link to="/bbps" className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 border border-white/10 text-white font-bold hover:bg-slate-800 transition-colors">
                 Pay Bills <Zap className="w-4 h-4 text-yellow-400" />
               </Link>
             </div>

             {/* Ad promo card */}
             <div className="bg-gradient-to-tr from-brand-cyan/20 to-brand-blue/20 rounded-3xl p-[1px]">
               <div className="bg-brand-card rounded-[23px] h-full p-6 text-center">
                 <div className="w-12 h-12 bg-white/10 rounded-2xl mx-auto flex items-center justify-center mb-4">
                    <span className="text-xl">🚀</span>
                 </div>
                 <h4 className="text-white font-bold mb-2">Upgrade to Pro</h4>
                 <p className="text-sm text-slate-400 mb-6">Get higher limits, 1% cashback on all card spend, and priority API support.</p>
                 <button className="w-full py-2.5 rounded-xl bg-white text-black font-bold hover:bg-slate-200 transition-colors text-sm">
                   View Plans
                 </button>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
