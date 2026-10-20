import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Wallet, ArrowRightLeft, FileSpreadsheet } from 'lucide-react';

const steps = [
  {
    step: "01",
    icon: <UserCheck className="w-5 h-5 text-[#3267D6]" />,
    title: "1. Register Your Business",
    description: "Sign up with basic business details and complete simple onboarding to access your unified merchant panel."
  },
  {
    step: "02",
    icon: <Wallet className="w-5 h-5 text-[#3267D6]" />,
    title: "2. Set Up Payment Rails",
    description: "Activate your dynamic UPI QR code, connect bank settlement accounts, or fund your payout wallet."
  },
  {
    step: "03",
    icon: <ArrowRightLeft className="w-5 h-5 text-[#3267D6]" />,
    title: "3. Transact & Serve",
    description: "Accept customer payments, dispatch instant vendor disbursements, or pay utility bills via BBPS."
  },
  {
    step: "04",
    icon: <FileSpreadsheet className="w-5 h-5 text-[#3267D6]" />,
    title: "4. Track & Reconcile",
    description: "Monitor real-time ledger updates, download instant receipts, and simplify daily closing with transparent reports."
  }
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-[#F7F8FA] border-b border-[#E5E9F0]">
      <div className="container-padding mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="badge-fintech mb-3">Simple Process</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1730] mb-4">
            Up and Running in Four Simple Steps
          </h2>
          <p className="text-base text-[#667085] leading-relaxed">
            Hype-Pay streamlines onboarding so you can focus on running your business rather than navigating complex banking bureaucracy.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl border border-[#E5E9F0] p-6 shadow-sm hover:shadow-md hover:border-[#3267D6]/40 transition-all flex flex-col justify-between group cursor-default"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF4FF] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-black text-[#E5E9F0] group-hover:text-[#3267D6]/30 transition-colors tracking-wider">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#0B1730] mb-2 group-hover:text-[#3267D6] transition-colors">{item.title}</h3>
                <p className="text-sm text-[#667085] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
