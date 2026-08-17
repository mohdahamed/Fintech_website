import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';

const faqData = [
  {
    question: "What is AuraPay and how does it work?",
    answer: "AuraPay is an enterprise-grade B2B fintech infrastructure platform that allows merchants to collect pay-ins (via UPI, Cards, Net Banking, and Global corridors) and automate outgoing payouts (vendor settlements, payouts, and mass clearing) in real-time."
  },
  {
    question: "What are the standard settlement clearance times?",
    answer: "For standard pay-ins, settlements are cleared on a T+1 basis. For high-volume merchants, we support same-day settlement (T+0) and instant real-time settlement nodes to ensure optimal cash flow."
  },
  {
    question: "Is AuraPay PCI-DSS compliant?",
    answer: "Yes, AuraPay is fully PCI-DSS Level 1 compliant. All sensitive payment details are securely tokenized and processed through encrypted channels, ensuring zero plain-text storage of credit cards or bank details."
  },
  {
    question: "What payment channels are supported?",
    answer: "We support UPI (dynamic QR, intent flow), all major credit/debit cards (Visa, Mastercard, RuPay, Amex), direct Net Banking with 50+ commercial banks, and multi-currency international collections in 100+ countries."
  },
  {
    question: "How do I start using AuraPay?",
    answer: "Onboarding is straightforward using our intuitive merchant portal dashboard. Visit our Contact Sales page to set up your account, configure your bank transfer details, and start collections instantly."
  },
  {
    question: "What are the platform fee structures?",
    answer: "We offer flat-rate pricing based on transaction volumes. UPI transfers generally clear at 0%, while cards and bank routes incur standard processing fees. Contact our sales team for custom enterprise quotes."
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#020817] text-white">
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111B2F] border border-[#233452] text-xs text-[#3B82F6] font-bold tracking-widest uppercase">
            <ShieldCheck size={14} /> Knowledge Base & FAQs
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Frequently Asked <span className="text-[#3B82F6]">Questions</span>
          </h1>
          <p className="text-slate-400 text-base max-w-lg mx-auto leading-relaxed">
            Everything you need to know about our payment gateway, settlement speeds, and merchant portal.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx} 
                className={`bg-[#050816] border rounded-xl overflow-hidden transition-all ${
                  isOpen ? 'border-[#3B82F6]' : 'border-[#233452] hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle size={20} className={isOpen ? 'text-[#3B82F6]' : 'text-slate-500'} />
                    <span className="text-base font-bold text-white tracking-tight">{item.question}</span>
                  </div>
                  {isOpen ? (
                    <ChevronUp size={18} className="text-[#3B82F6]" />
                  ) : (
                    <ChevronDown size={18} className="text-slate-500" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-[#233452] bg-[#111B2F]/40">
                        <p className="text-slate-300 text-sm leading-relaxed pl-9">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
