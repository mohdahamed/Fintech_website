import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownCircle, ArrowUpCircle, Zap, Wallet, Link2, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    icon: <ArrowDownCircle className="w-6 h-6 text-[#3267D6]" />,
    title: "Payment Collection (Pay In)",
    description: "Accept customer payments across India with dynamic UPI QR codes, debit/credit cards, and 50+ net banking channels.",
    tag: "Collections",
    link: "/services"
  },
  {
    icon: <ArrowUpCircle className="w-6 h-6 text-[#3267D6]" />,
    title: "Business Disbursements (Pay Out)",
    description: "Automate payouts to vendor bank accounts or beneficiary UPI IDs using direct 24x7 IMPS and NEFT rails.",
    tag: "Disbursements",
    link: "/services"
  },
  {
    icon: <Zap className="w-6 h-6 text-amber-600" />,
    title: "Bill Payments & Recharge (BBPS)",
    description: "Integrated with the Bharat Bill Payment System for electricity, water, DTH, broadband, and mobile recharges with instant receipts.",
    tag: "BBPS Network",
    link: "/services"
  },
  {
    icon: <Wallet className="w-6 h-6 text-[#3267D6]" />,
    title: "Merchant Ledger Wallet",
    description: "A centralized business wallet to manage inflows, disburse funds, and monitor real-time transaction statements.",
    tag: "Accounts",
    link: "/services"
  },
  {
    icon: <Link2 className="w-6 h-6 text-[#3267D6]" />,
    title: "Instant Payment Links",
    description: "Create and share branded payment links via WhatsApp, SMS, or email for quick and friction-free remote collections.",
    tag: "Invoicing",
    link: "/services"
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    title: "Security & Settlement Tracking",
    description: "Encrypted data transmission, multi-factor merchant controls, and clear transparent settlement timelines.",
    tag: "Protection",
    link: "/services"
  }
];

const Features = () => {
  return (
    <section id="services-section" className="section-padding bg-white border-b border-[#E5E9F0]">
      <div className="container-padding mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="badge-fintech mb-3">Service Portfolio</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1730] mb-3">
              Comprehensive Financial Utilities for Everyday Business
            </h2>
            <p className="text-base text-[#667085] leading-relaxed">
              Organized into clear categories to address real merchant and enterprise transaction needs without unnecessary complexity.
            </p>
          </motion.div>

          <Link 
            to="/services" 
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#3267D6] hover:text-[#2558C7] transition-all group shrink-0"
          >
            <span>View all solutions</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Staggered Animated Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white border border-[#E5E9F0] rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lg hover:border-[#3267D6]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#F7F8FA] border border-[#E5E9F0] flex items-center justify-center group-hover:bg-[#EEF4FF] group-hover:scale-105 transition-all">
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-[#667085] bg-[#F7F8FA] px-2.5 py-1 rounded-full border border-[#E5E9F0]">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0B1730] mb-2.5 group-hover:text-[#3267D6] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[#667085] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <Link
                to={service.link}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3267D6] group-hover:gap-2.5 transition-all pt-4 border-t border-[#E5E9F0]"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
