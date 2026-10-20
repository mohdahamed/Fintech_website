import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const paymentRails = [
  { name: "UPI 2.0 & QR", badge: "Instant" },
  { name: "Bharat BillPay (BBPS)", badge: "Official" },
  { name: "IMPS Payouts", badge: "24x7" },
  { name: "RuPay Cards", badge: "Direct" },
  { name: "NEFT & RTGS", badge: "Bank Rails" },
  { name: "Visa & Mastercard", badge: "Global" },
  { name: "50+ Net Banking", badge: "Supported" },
];

const CompanyTicker = () => {
  return (
    <div className="w-full bg-white border-y border-[#E5E9F0] py-5 sm:py-6 overflow-hidden">
      <div className="container-padding mx-auto mb-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#667085]">
          <ShieldCheck className="w-4 h-4 text-[#3267D6]" />
          <span>Supported Indian Payment Rails & Networks</span>
        </div>
      </div>

      {/* Infinite Smooth Rail Ticker */}
      <div className="flex w-full overflow-hidden mask-gradient">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-4 shrink-0 whitespace-nowrap pl-4"
        >
          {[...paymentRails, ...paymentRails, ...paymentRails].map((rail, index) => (
            <div 
              key={index} 
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F7F8FA] border border-[#E5E9F0] text-xs font-semibold text-[#182338] shadow-xs hover:border-[#3267D6]/40 hover:bg-[#EEF4FF] transition-all cursor-default group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#3267D6] group-hover:scale-125 transition-transform" />
              <span>{rail.name}</span>
              <span className="text-[10px] font-bold text-[#3267D6] bg-white border border-[#D7E3FC] px-1.5 py-0.5 rounded-md">
                {rail.badge}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyTicker;
