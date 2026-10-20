import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "How fast do customer payments settle into my bank account?",
    answer: "UPI QR collections settle directly via T+0 same-day settlement into your linked Indian commercial bank account. Vendor IMPS payouts are dispatched 24x7 within sub-second turnaround times."
  },
  {
    question: "Which UPI apps and payment methods can my customers use?",
    answer: "All major Indian UPI apps are supported, including Google Pay, PhonePe, Paytm, BHIM, Cred, and Navi, as well as RuPay cards, Visa, Mastercard, and 50+ net banking portals."
  },
  {
    question: "How does the Bharat Bill Payment System (BBPS) integration work?",
    answer: "Hype-Pay connects to the national BBPS network. Retail counters and business points can fetch consumer bills in real-time across electricity, water, gas, broadband, and DTH providers with instant digital receipt generation."
  },
  {
    question: "Can I disburse vendor payouts in bulk without manual bank logins?",
    answer: "Yes. Our disbursement utility allows single and batch vendor payments with pre-validation of beneficiary account numbers and IFSC codes to eliminate failed transfers and misdirected funds."
  },
  {
    question: "What documents are required to activate a merchant setup?",
    answer: "Standard KYC requirements include your business PAN card, GST registration certificate (if applicable), and a cancelled cheque or bank statement of your business settlement account."
  }
];

const FintechFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section-padding bg-[#F7F8FA] border-b border-[#E5E9F0]">
      <div className="container-padding max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="badge-fintech mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Merchant Inquiries</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1730] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-[#667085] max-w-xl mx-auto">
              Clear answers to common questions about payment settlement, UPI collections, and merchant onboarding.
            </p>
          </motion.div>
        </div>

        {/* Animated Accordions */}
        <div className="space-y-3.5 mb-10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-white border border-[#E5E9F0] rounded-2xl overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0B1730]">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-7 h-7 rounded-full bg-[#F7F8FA] flex items-center justify-center shrink-0 border border-[#E5E9F0]"
                  >
                    <ChevronDown className="w-4 h-4 text-[#667085]" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#667085] leading-relaxed border-t border-[#F7F8FA]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="text-center">
          <p className="text-xs sm:text-sm text-[#667085] mb-3">
            Have a question specific to your business or current POS/bank setup?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#3267D6] hover:underline"
          >
            <span>Speak with our payment specialists</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FintechFAQ;
