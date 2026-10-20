import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Headphones, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#F7F8FA]">
      <div className="container-padding mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="badge-fintech mb-3">Our Mission & Approach</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1730] mb-4 tracking-tight">
              About Hype-Pay
            </h1>
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
              Simplifying financial workflows and providing dependable Indian payment utilities for modern businesses and merchants.
            </p>
          </motion.div>
        </div>

        {/* Narrative Section */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-[#E5E9F0] rounded-2xl p-8 sm:p-10 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-[#0B1730] mb-4">
              A Practical Approach to Business Payments
            </h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed mb-4">
              Everyday businesses face unnecessary friction when managing separate tools for collecting UPI payments, disbursing vendor payouts, and handling utility bills.
            </p>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed mb-4">
              Hype-Pay was built to bring these core financial utilities into one straightforward, dependable platform. We emphasize practical operations, clear statements, and responsive support.
            </p>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
              Our goal is not to overwhelm you with unnecessary features, but to ensure that every rupee collected or disbursed is accounted for accurately.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="bg-white border border-[#E5E9F0] rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#3267D6]/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#EEF4FF] flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5 text-[#3267D6]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0B1730] mb-1">Unified Financial Workflow</h3>
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                    Consolidate UPI QR collections, IMPS bank payouts, and BBPS utility bills under a single merchant ledger.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#E5E9F0] rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#3267D6]/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#EEF4FF] flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-[#3267D6]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0B1730] mb-1">Clear Auditability</h3>
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                    Transparent transaction records with automated receipts and UTR numbers for easy bookkeeping.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#E5E9F0] rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#3267D6]/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#EEF4FF] flex items-center justify-center shrink-0">
                  <Headphones className="w-5 h-5 text-[#3267D6]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0B1730] mb-1">Real Operational Support</h3>
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                    Accessible customer communication when questions arise regarding transaction status or settlements.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Guiding Principles */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#0B1730] mb-2">Our Operating Values</h2>
            <p className="text-sm text-[#667085]">The core principles that shape our product decisions and service quality.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "Clarity Over Jargon",
                desc: "We believe financial tools should be intuitive to use. Clear labels, straightforward steps, and transparent pricing."
              },
              {
                title: "Reliable Standards",
                desc: "Direct adherence to established payment rails (UPI, IMPS, BBPS) to ensure high transaction success rates."
              },
              {
                title: "Customer First",
                desc: "Listening to merchant feedback and continuously refining features so business operations remain smooth."
              }
            ].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white border border-[#E5E9F0] rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#3267D6]/30 transition-all"
              >
                <h3 className="text-base font-bold text-[#0B1730] mb-2">{val.title}</h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-white border border-[#E5E9F0] rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div>
            <h3 className="text-lg font-bold text-[#0B1730] mb-1">Have questions or want to partner?</h3>
            <p className="text-xs sm:text-sm text-[#667085]">Get in touch with our team to discuss your business requirements.</p>
          </div>
          <Link to="/contact" className="fintech-btn-primary shrink-0 text-sm flex items-center gap-2 group">
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
