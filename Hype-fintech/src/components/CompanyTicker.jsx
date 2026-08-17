import React from 'react';
import { motion } from 'framer-motion';

const companies = [
  "Acme Corp", "GlobalTech", "Nexus", "Quantum", "Stark Ind.", "Wayne Ent.", 
  "Cyberdyne", "Massive Dynamic", "Initech", "Soylent", "Umbrella Corp", "MomCorp"
];

const CompanyTicker = () => {
  return (
    <div className="w-full bg-brand-dark border-y border-white/5 py-8 overflow-hidden relative">
      {/* Gradient masks for smooth fading edges */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

      <p className="text-center text-sm font-semibold text-slate-500 mb-6 tracking-widest uppercase">
        Powering payments for industry leaders
      </p>

      <div className="flex w-fit">
        {/* Double the array to ensure smooth infinite looping */}
        <motion.div
          animate={{ x: "-50%" }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap"
        >
          {[...companies, ...companies].map((company, index) => (
            <div 
              key={index} 
              className="mx-8 lg:mx-16 text-xl md:text-2xl font-black text-slate-700 hover:text-brand-cyan transition-colors"
            >
              {company}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyTicker;
