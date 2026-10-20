import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Clock, FileText, Headphones, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const differentiators = [
  {
    icon: <Layers className="w-5 h-5 text-[#3267D6]" />,
    title: "Clear Business Processes",
    description: "Simplified merchant onboarding with transparent transaction ledgers and clear reconciliation workflows."
  },
  {
    icon: <Clock className="w-5 h-5 text-[#3267D6]" />,
    title: "Convenient Service Experience",
    description: "Access collection QR codes, dispatch vendor payouts, and manage utility bills from a single, responsive interface."
  },
  {
    icon: <FileText className="w-5 h-5 text-[#3267D6]" />,
    title: "Practical Payment Workflows",
    description: "Direct alignment with Indian payment standards including UPI, IMPS, BBPS, and RuPay card networks."
  },
  {
    icon: <Headphones className="w-5 h-5 text-[#3267D6]" />,
    title: "Customer-Focused Communication",
    description: "Direct assistance from dedicated support personnel who understand payment operations and query resolution."
  }
];

const GlobalReach = () => {
  return (
    <section className="section-padding bg-[#F7F8FA] border-b border-[#E5E9F0]">
      <div className="container-padding mx-auto">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: About Hype-Pay story (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="badge-fintech mb-3">About Hype-Pay</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1730] tracking-tight leading-tight mb-5">
              Built to Provide Reliable Financial Utilities
            </h2>
            <p className="text-base text-[#667085] leading-relaxed mb-4">
              Hype-Pay is designed to give modern businesses, merchants, and service points an uncluttered platform for handling Indian payment flows.
            </p>
            <p className="text-sm text-[#667085] leading-relaxed mb-8">
              Whether you are collecting payments from customers over UPI, distributing earnings to vendors, or assisting walk-ins with utility bill settlements, Hype-Pay keeps operations straightforward and transparent.
            </p>

            <div className="p-5 rounded-2xl bg-white border border-[#E5E9F0] shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#EEF4FF] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5 text-[#3267D6]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B1730] mb-1">Standardized & Secure Operations</h4>
                  <p className="text-xs text-[#667085] leading-relaxed">
                    Designed with role-based access, transaction receipts, and audit logs to keep your daily business transactions organized.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link 
                to="/about"
                className="fintech-btn-secondary inline-flex items-center gap-2 text-sm group"
              >
                <span>Learn More About Our Approach</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Why Choose Us (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {differentiators.map((diff, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl border border-[#E5E9F0] p-6 shadow-sm hover:shadow-md hover:border-[#3267D6]/30 transition-all cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EEF4FF] flex items-center justify-center mb-4">
                    {diff.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#0B1730] mb-2">
                    {diff.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                    {diff.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Channels Strip */}
            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-white border border-[#E5E9F0] text-center hover:border-[#3267D6]/30 transition-colors">
                <div className="text-xs font-bold text-[#0B1730]">Web Portal</div>
                <div className="text-[11px] text-[#667085] mt-0.5">Desktop & Tablet</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E5E9F0] text-center hover:border-[#3267D6]/30 transition-colors">
                <div className="text-xs font-bold text-[#0B1730]">Mobile Ready</div>
                <div className="text-[11px] text-[#667085] mt-0.5">Fast on Smartphone</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E5E9F0] text-center hover:border-[#3267D6]/30 transition-colors">
                <div className="text-xs font-bold text-[#0B1730]">Clear Receipts</div>
                <div className="text-[11px] text-[#667085] mt-0.5">Instant Proofs</div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default GlobalReach;
