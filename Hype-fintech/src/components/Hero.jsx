import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, ArrowUpRight, DollarSign, Wallet, IndianRupee } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative section-padding overflow-hidden mt-20">
      <div className="container-padding mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left relative"
          >
            {/* Floating Tags (Desktop) */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="hidden lg:flex absolute -top-12 left-20 items-center gap-2 bg-brand-card border border-white/10 px-4 py-2 rounded-full shadow-lg"
            >
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-slate-300">Zero Fraud Guarantee</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="hidden lg:flex absolute top-32 -right-8 items-center gap-2 bg-brand-card border border-white/10 px-4 py-2 rounded-full shadow-lg z-20"
            >
              <Activity className="w-3 h-3 text-brand-cyan" />
              <span className="text-xs font-bold text-slate-300">Instant Settlement</span>
            </motion.div>

            <span className="inline-block py-1 px-3 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-sm font-semibold mb-6 tracking-wide">
              MONEY MADE SIMPLE
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-tight relative">
              The easiest way to <span className="text-brand-cyan">pay and get paid</span> worldwide.
            </h1>
            <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
              Send money, manage cards, and grow your business with the platform used by millions. Simple, fast, and secure.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mb-12">
              <Link to="/dashboard" className="px-8 py-4 rounded-full bg-gradient-hype text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all flex items-center gap-2 group">
                Start Building Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-colors flex items-center gap-2">
                View Services
              </Link>
            </div>

            {/* Trusted By / User Avatars */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-brand-dark bg-slate-800 flex items-center justify-center relative overflow-hidden`}>
                    <img 
                      src={`https://i.pravatar.cc/100?img=${i * 10}`} 
                      alt={`User ${i}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-slate-400">
                Trusted by <span className="text-white font-bold">10,000+</span> innovative teams
              </div>
            </div>
          </motion.div>

          {/* Right Column: Floating UI Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] hidden lg:block"
          >
            {/* Main Balance Card */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 w-80 bg-brand-card/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl z-20"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center">
                    <Wallet className="w-4 h-4 text-brand-blue" />
                  </div>
                  <span className="text-sm font-medium text-slate-300">Total Balance</span>
                </div>
                <Activity className="w-5 h-5 text-brand-cyan" />
              </div>
              <div className="text-4xl font-black text-white mb-2">₹124,592.00</div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-emerald-400 flex items-center bg-emerald-400/10 px-2 py-0.5 rounded-full">
                  <ArrowUpRight className="w-3 h-3 mr-1" /> +14.5%
                </span>
                <span className="text-slate-500">vs last month</span>
              </div>
            </motion.div>

            {/* Quick Transfer Card */}
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-10 w-64 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-2xl z-30"
            >
              <div className="text-sm font-medium text-slate-300 mb-4">Quick Transfer</div>
              <div className="flex items-center justify-between bg-black/40 rounded-2xl p-3 mb-4 border border-white/5">
                <div className="flex items-center gap-3">
                  <img src="https://i.pravatar.cc/100?img=44" alt="Alex" className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="text-sm font-bold text-white">Alex M.</div>
                    <div className="text-xs text-slate-500">Designer</div>
                  </div>
                </div>
                <div className="text-brand-cyan font-bold">Send</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-black/40 rounded-full py-2 px-4 border border-white/5 flex items-center">
                  <IndianRupee className="w-4 h-4 text-slate-400 mr-1" />
                  <input type="text" placeholder="0.00" className="bg-transparent w-full text-white text-lg font-bold outline-none" defaultValue="450" />
                </div>
                <button className="w-12 h-12 rounded-full bg-gradient-hype flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-cyan/5 rounded-full blur-[100px] -z-10" />
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute top-0 right-0 w-64 h-64 border border-white/5 rounded-full border-dashed"
            />
          </motion.div>

        </div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 lg:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto border-t border-white/10 pt-10"
        >
          <div className="flex flex-col items-center lg:items-start">
            <span className="text-4xl font-black text-white mb-2">12M+</span>
            <span className="text-slate-400 text-sm">Transactions/sec</span>
          </div>
          <div className="flex flex-col items-center lg:items-start">
             <span className="text-4xl font-black text-white mb-2">99.9%</span>
             <span className="text-slate-400 text-sm">Uptime SLA</span>
          </div>
          <div className="flex flex-col items-center lg:items-start">
             <span className="text-4xl font-black text-white mb-2">150+</span>
             <span className="text-slate-400 text-sm">Countries Supported</span>
          </div>
          <div className="flex flex-col items-center lg:items-start">
             <span className="text-4xl font-black text-white mb-2">₹0</span>
             <span className="text-slate-400 text-sm">Setup Fees</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
