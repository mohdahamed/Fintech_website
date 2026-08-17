import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What is Let's Pay and how does it work?",
    answer: "Let's Pay is an enterprise-grade B2B fintech middleware platform that allows merchants to collect pay-ins (via UPI, Cards, Net Banking, and Global corridors) and automate outgoing payouts (vendor settlements, payouts, and mass clearing) in real-time."
  },
  {
    question: "What are the standard settlement clearance times?",
    answer: "For standard pay-ins, settlements are cleared on a T+1 basis. For high-volume merchants, we support same-day settlement (T+0) and instant real-time settlement nodes to ensure optimal cash flow."
  },
  {
    question: "Is Let's Pay PCI-DSS compliant?",
    answer: "Yes, Let's Pay is fully PCI-DSS Level 1 compliant. All sensitive payment details are securely tokenized and processed through encrypted channels, ensuring zero plain-text storage of credit cards or bank details."
  },
  {
    question: "What payment channels are supported?",
    answer: "We support UPI (dynamic QR, intent flow), all major credit/debit cards (Visa, Mastercard, RuPay, Amex), direct Net Banking with 50+ commercial banks, and multi-currency international collections in 100+ countries."
  },
  {
    question: "How do I start using Let's Pay?",
    answer: "Onboarding is straightforward using our intuitive merchant portal dashboard. Visit our Contact Sales page to set up your account, configure your bank transfer details, and start collections instantly."
  },
  {
    question: "What are the platform fee structures?",
    answer: "We offer flat-rate pricing based on transaction volumes. UPI transfers generally clear at 0%, while cards and bank routes incur standard processing fees. Contact our sales team for custom enterprise quotes."
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 grid-bg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#2D6FD3] font-semibold tracking-wider uppercase text-xs px-3.5 py-1.5 rounded-full bg-[#1E4E8C]/10 border border-[#2D6FD3]/30 mb-6 inline-block">
            Frequently Asked Questions
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-luxury tracking-tight mb-4">
            Have Questions? We Have Answers.
          </h1>
          <p className="text-[var(--color-text-secondary)] text-sm max-w-xl mx-auto leading-relaxed">
            Find immediate answers regarding integrations, transactions, settlement windows, security, and pricing.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx} 
                className={`card-glass-main card-glow-hover overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-[#2D6FD3]/30 shadow-[0_0_20px_rgba(45,111,211,0.1)]' : ''
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle size={20} className={isOpen ? 'text-[#4A90FF]' : 'text-[var(--color-text-muted)]'} />
                    <span className="text-base font-bold text-white tracking-tight">{item.question}</span>
                  </div>
                  {isOpen ? (
                    <ChevronUp size={18} className="text-white" />
                  ) : (
                    <ChevronDown size={18} className="text-[var(--color-text-muted)]" />
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
                      <div className="px-6 pb-6 pt-1 border-t border-white/5">
                        <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed pl-9">
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
