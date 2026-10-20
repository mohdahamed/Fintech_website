import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowDownCircle, ArrowUpCircle, Zap, Wallet, 
  Link2, ShieldCheck, ArrowRight, Check
} from 'lucide-react';
import { Link } from 'react-router-dom';

const allServices = [
  {
    id: "collections",
    category: "collections",
    icon: <ArrowDownCircle className="w-7 h-7 text-[#3267D6]" />,
    title: "Payment Collection (Pay In)",
    description: "Accept customer payments across India with dynamic UPI QR codes, debit/credit cards, and all major Indian net banking portals.",
    subFeatures: [
      "Dynamic & Static UPI QR codes",
      "RuPay, Visa & Mastercard support",
      "Instant payment confirmation",
      "Direct merchant bank settlements"
    ],
    tag: "Collections"
  },
  {
    id: "payouts",
    category: "payouts",
    icon: <ArrowUpCircle className="w-7 h-7 text-[#3267D6]" />,
    title: "Business Disbursements (Pay Out)",
    description: "Send single or recurring payouts directly to vendor bank accounts or beneficiary UPI IDs with automated validation.",
    subFeatures: [
      "Direct 24x7 IMPS bank transfers",
      "Beneficiary UPI ID payouts",
      "Vendor and salary disbursements",
      "Clear status logs and UTR records"
    ],
    tag: "Disbursements"
  },
  {
    id: "bbps",
    category: "bbps",
    icon: <Zap className="w-7 h-7 text-amber-600" />,
    title: "Utility Bill Payments (BBPS)",
    description: "Official BBPS connection offering utility bill collection and recharges for electricity, water, gas, broadband, and DTH providers.",
    subFeatures: [
      "National BBPS biller network",
      "Instant bill fetch by consumer ID",
      "Digital receipt generation",
      "Prepaid mobile & DTH recharge"
    ],
    tag: "BBPS Network"
  },
  {
    id: "wallet",
    category: "enterprise",
    icon: <Wallet className="w-7 h-7 text-[#3267D6]" />,
    title: "Merchant Ledger Wallet",
    description: "A centralized operational wallet to manage collections, fund payouts, and track daily financial closures.",
    subFeatures: [
      "Single consolidated balance",
      "Real-time debit & credit ledger",
      "Downloadable transaction statements",
      "Role-based access controls"
    ],
    tag: "Accounts"
  },
  {
    id: "links",
    category: "collections",
    icon: <Link2 className="w-7 h-7 text-[#3267D6]" />,
    title: "Quick Payment Links",
    description: "Generate shareable payment links to collect payments remotely via SMS, WhatsApp, or email without requiring an e-commerce website.",
    subFeatures: [
      "Custom payment link creation",
      "Pre-filled amount & customer notes",
      "Real-time payment alerts",
      "Automatic expiration settings"
    ],
    tag: "Remote Pay"
  },
  {
    id: "compliance",
    category: "enterprise",
    icon: <ShieldCheck className="w-7 h-7 text-emerald-600" />,
    title: "Security & Settlement Protocols",
    description: "Structured transaction verification, data encryption, and transparent fee policies for business peace of mind.",
    subFeatures: [
      "256-bit encrypted data transit",
      "Multi-step verification safeguards",
      "Detailed audit logs for every rupee",
      "Responsive customer support desk"
    ],
    tag: "Security"
  }
];

const categories = [
  { id: "all", name: "All Solutions" },
  { id: "collections", name: "Collections" },
  { id: "payouts", name: "Disbursements" },
  { id: "bbps", name: "BBPS Utilities" },
  { id: "enterprise", name: "Enterprise Rails" },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = activeCategory === "all" 
    ? allServices 
    : allServices.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#F7F8FA]">
      <div className="container-padding mx-auto">
        
        {/* Header with Animation */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="badge-fintech mb-3">Service Catalog</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1730] mb-4 tracking-tight">
              Business Payment Services
            </h1>
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
              Explore our structured suite of payment solutions built to simplify collection, payout, and utility bill operations.
            </p>
          </motion.div>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#3267D6] text-white shadow-sm'
                  : 'bg-white text-[#667085] border border-[#E5E9F0] hover:border-[#3267D6] hover:text-[#0B1730]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Practical Features Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {[
            { label: "Payment Rails", value: "UPI, IMPS, BBPS", desc: "Native Indian standards" },
            { label: "Availability", value: "24x7 Processing", desc: "Round-the-clock payouts" },
            { label: "Receipts", value: "Instant Proof", desc: "Automated confirmations" },
            { label: "Support", value: "Dedicated Helpdesk", desc: "Operational assistance" }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white border border-[#E5E9F0] rounded-xl p-5 shadow-xs"
            >
              <div className="text-xs font-bold text-[#667085] uppercase tracking-wider mb-1">{item.label}</div>
              <div className="text-lg font-extrabold text-[#0B1730] mb-0.5">{item.value}</div>
              <div className="text-xs text-[#3267D6] font-medium">{item.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Animated Filtered Services Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white border border-[#E5E9F0] rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lg hover:border-[#3267D6]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#F7F8FA] border border-[#E5E9F0] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#EEF4FF] transition-all">
                      {service.icon}
                    </div>
                    <span className="text-xs font-semibold text-[#667085] bg-[#F7F8FA] px-2.5 py-1 rounded-full border border-[#E5E9F0]">
                      {service.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0B1730] mb-2.5 group-hover:text-[#3267D6] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#667085] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2.5 mb-8 pt-4 border-t border-[#E5E9F0]">
                    {service.subFeatures.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-[#182338] font-medium">
                        <Check className="w-4 h-4 text-[#3267D6] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-[#F7F8FA] border border-[#E5E9F0] hover:bg-[#EEF4FF] hover:border-[#3267D6] text-sm font-semibold text-[#182338] hover:text-[#3267D6] transition-all group/link"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-4 h-4 text-[#667085] group-hover/link:text-[#3267D6] group-hover/link:translate-x-1 transition-all" />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Consultation Callout with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-[#E5E9F0] rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div>
            <h3 className="text-xl font-bold text-[#0B1730] mb-1.5">Need a custom payment setup for your business?</h3>
            <p className="text-sm text-[#667085]">Our team can help configure the right combination of collection and disbursement rails.</p>
          </div>
          <Link to="/contact" className="fintech-btn-primary shrink-0 text-sm shadow-sm hover:shadow-md transition-all">
            Contact Our Business Desk
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default Services;
