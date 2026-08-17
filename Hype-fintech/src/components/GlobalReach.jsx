import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Zap, Server } from 'lucide-react';

const GlobalReach = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-brand-card">
      {/* Subtle decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-padding mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase mb-6 tracking-wider">
              Global Scale
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-white">
              The infrastructure standard for the <span className="text-brand-cyan">internet economy.</span>
            </h2>
            <p className="text-lg text-slate-400 font-light mb-8 leading-relaxed">
              From fledgling startups to public companies, millions of businesses use HYPE's software and APIs to accept payments, send payouts, and manage their businesses online across the globe.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center shrink-0 border border-white/5">
                  <Globe className="w-6 h-6 text-brand-cyan" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Global Routing Network</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Direct integrations with card networks and local payment methods in over 150 countries to maximize conversion.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center shrink-0 border border-white/5">
                  <Shield className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Bank-Grade Security</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">PCI DSS Level 1 certified. Advanced machine learning models train on billions of data points to block fraud.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center shrink-0 border border-white/5">
                  <Server className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Five Nines Reliability</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Highly redundant infrastructure ensuring 99.999% uptime so your business never misses a transaction.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Visual Abstract representation of a global map/network */}
            <div className="aspect-[4/3] bg-brand-dark rounded-3xl border border-white/10 p-8 shadow-2xl relative overflow-hidden flex items-center justify-center">
              
              {/* Animated Network nodes */}
              <div className="absolute inset-0 opacity-20">
                <motion.div 
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-[20%] left-[20%] w-3 h-3 bg-brand-cyan rounded-full shadow-[0_0_15px_#06b6d4]" 
                />
                <motion.div 
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute top-[40%] right-[30%] w-4 h-4 bg-brand-blue rounded-full shadow-[0_0_15px_#2563eb]" 
                />
                <motion.div 
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute bottom-[30%] left-[40%] w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399]" 
                />
                <motion.div 
                  animate={{ opacity: [0.2, 0.8, 0.2] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 1.5 }}
                  className="absolute bottom-[20%] right-[20%] w-3 h-3 bg-brand-cyan rounded-full shadow-[0_0_10px_#06b6d4]" 
                />
                
                {/* Connecting SVG Lines */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 20% 20% Q 40% 10% 70% 40%" stroke="rgba(6,182,212,0.3)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                  <path d="M 70% 40% Q 50% 60% 40% 70%" stroke="rgba(37,99,235,0.3)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                  <path d="M 40% 70% Q 60% 80% 80% 80%" stroke="rgba(52,211,153,0.3)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                </svg>
              </div>

               <div className="text-center relative z-10">
                 <div className="text-6xl font-black text-white tracking-tighter mb-2">250M+</div>
                 <div className="text-brand-cyan font-bold tracking-widest uppercase text-sm mb-8">API Requests / Day</div>
                 
                 <div className="inline-flex items-center gap-2 bg-black/40 border border-white/10 rounded-full px-4 py-2 text-sm text-slate-300">
                   <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                   All Systems Operational
                 </div>
               </div>

            </div>
            
            {/* Floating stats card */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-xl glass"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono mb-1">Avg Network Latency</div>
                  <div className="text-xl font-bold text-white">12.4 ms</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
