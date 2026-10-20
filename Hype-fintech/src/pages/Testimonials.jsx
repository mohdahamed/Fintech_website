import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Store, Building2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const merchantFeedback = [
  {
    id: 1,
    quote: "Using the unified UPI QR and ledger simplified our daily closing. Every transaction is logged with timestamps, which makes our weekly accounting much easier.",
    author: "Rahul Verma",
    business: "Retail Business Owner, Lucknow",
    category: "collections",
    categoryLabel: "Payment Collections",
    icon: <Store className="w-5 h-5 text-[#3267D6]" />
  },
  {
    id: 2,
    quote: "Adding BBPS electricity and water bill payments helped us offer valuable everyday services to walk-in customers at our service point. Receipts print out immediately.",
    author: "Sunita Devi",
    business: "Commercial Service Point, Patna",
    category: "bbps",
    categoryLabel: "Utility Bill Payments",
    icon: <Building2 className="w-5 h-5 text-[#3267D6]" />
  },
  {
    id: 3,
    quote: "Vendor payouts via direct IMPS work reliably. We can disburse payments to suppliers directly from the balance without having to wait for complex batch windows.",
    author: "Imran Khan",
    business: "Wholesale Trader, Jaipur",
    category: "payouts",
    categoryLabel: "Business Disbursements",
    icon: <ShoppingBag className="w-5 h-5 text-[#3267D6]" />
  },
  {
    id: 4,
    quote: "Our retail distributors across Maharashtra scan and pay via Google Pay or PhonePe. Zero MDR means we do not lose 2% on wholesale transaction margins.",
    author: "Anand Deshmukh",
    business: "FMCG Wholesale Distributor, Pune",
    category: "collections",
    categoryLabel: "Payment Collections",
    icon: <Store className="w-5 h-5 text-[#3267D6]" />
  },
  {
    id: 5,
    quote: "Automated penny drop validation gives us confidence when adding new vendor bank accounts before sending bulk disbursements.",
    author: "Pooja Singhania",
    business: "Supply Chain Manager, Ahmedabad",
    category: "payouts",
    categoryLabel: "Business Disbursements",
    icon: <ShoppingBag className="w-5 h-5 text-[#3267D6]" />
  },
  {
    id: 6,
    quote: "Electricity bills for state boards fetch in under two seconds. Walk-in customers get an authentic BBPS receipt on the spot.",
    author: "Manish Agarwal",
    business: "CSC Operator, Varanasi",
    category: "bbps",
    categoryLabel: "Utility Bill Payments",
    icon: <Building2 className="w-5 h-5 text-[#3267D6]" />
  }
];

const categories = [
  { id: 'all', label: 'All Reviews' },
  { id: 'collections', label: 'UPI Collections' },
  { id: 'payouts', label: 'IMPS Payouts' },
  { id: 'bbps', label: 'BBPS Utilities' },
];

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = activeTab === 'all'
    ? merchantFeedback
    : merchantFeedback.filter(m => m.category === activeTab);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#F7F8FA]">
      <div className="container-padding mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="badge-fintech mb-3">Merchant Experiences</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1730] mb-4 tracking-tight">
              Practical Value for Everyday Operations
            </h1>
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
              How business owners, distributors, and retail operators use Hype-Pay to manage collections, vendor payouts, and utility bills.
            </p>
          </motion.div>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`py-2 px-4 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-[#3267D6] text-white shadow-xs'
                  : 'bg-white text-[#667085] border border-[#E5E9F0] hover:text-[#0B1730] hover:border-[#3267D6]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Feedback Cards Grid with Animated Transition */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16"
        >
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white border border-[#E5E9F0] rounded-2xl p-7 shadow-sm hover:shadow-md hover:border-[#3267D6]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#EEF4FF] flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-[11px] font-semibold text-[#667085] bg-[#F7F8FA] px-2.5 py-1 rounded-full border border-[#E5E9F0]">
                      {item.categoryLabel}
                    </span>
                  </div>
                  
                  <p className="text-sm text-[#182338] leading-relaxed mb-6 italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E9F0]">
                  <div className="text-sm font-bold text-[#0B1730]">{item.author}</div>
                  <div className="text-xs text-[#667085] mt-0.5">{item.business}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Action Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white border border-[#E5E9F0] rounded-2xl p-8 sm:p-10 text-center shadow-sm"
        >
          <h2 className="text-xl font-bold text-[#0B1730] mb-2">Ready to explore Hype-Pay for your business?</h2>
          <p className="text-sm text-[#667085] mb-6 max-w-md mx-auto">
            Get in touch with our team to find the right configuration for your business requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="fintech-btn-primary text-sm flex items-center gap-1.5 group">
              <span>Contact Business Desk</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/services" className="fintech-btn-secondary text-sm">
              View Services
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Testimonials;
