import React from 'react';
import { motion } from 'framer-motion';
import { Search, CreditCard, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-brand-cyan" />,
      title: "1. Connect your account",
      description: "Sign up in minutes and link your existing bank or wallet. No paperwork, no hassle."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-brand-blue" />,
      title: "2. Set up your payments",
      description: "Choose how you want to pay or get paid. Create virtual cards or unique payment links instantly."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-emerald-400" />,
      title: "3. Start growing",
      description: "Track every dollar in real-time. Everything is organized so you can focus on what matters."
    }
  ];

  return (
    <section className="section-padding bg-brand-dark relative overflow-hidden">
      <div className="container-padding mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">How it works</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            HYPE makes managing money simple for everyone. No complex jargon, just three easy steps to get started.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 z-0" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center mb-8 group-hover:border-brand-cyan/50 transition-colors bg-brand-dark shadow-xl">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light px-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
