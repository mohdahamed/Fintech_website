import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Globe, Cpu, CreditCard, Lock } from 'lucide-react';

const featuresData = [
  {
    icon: <Zap className="w-6 h-6 text-brand-cyan" />,
    title: "Instant Transfers",
    description: "Move money across the globe in milliseconds. No more waiting for days to clear funds."
  },
  {
    icon: <Shield className="w-6 h-6 text-brand-blue" />,
    title: "Bank-Grade Security",
    description: "Enterprise-level encryption and continuous fraud monitoring keeping your capital safe."
  },
  {
    icon: <Globe className="w-6 h-6 text-brand-cyan" />,
    title: "Global Reach",
    description: "Accept payments and send payouts to over 150 countries with a single integration."
  },
  {
    icon: <Cpu className="w-6 h-6 text-brand-blue" />,
    title: "Smart API",
    description: "Developer-first infrastructure designed for reliability, scalability, and ease of use."
  },
  {
    icon: <CreditCard className="w-6 h-6 text-brand-cyan" />,
    title: "Virtual Cards",
    description: "Instantly issue virtual cards to your team or customers for streamlined spending."
  },
  {
    icon: <Lock className="w-6 h-6 text-brand-blue" />,
    title: "Compliance Built-in",
    description: "We handle KYC, AML, and regulatory requirements so you can focus on building."
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding relative z-10 bg-brand-dark/50">
      <div className="container-padding mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-white">Built for <span className="text-brand-cyan">Performance</span></h2>
          <p className="text-lg text-slate-400">
            Everything you need to manage your financial operations on a global scale, packed into one powerful platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-card/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:border-brand-cyan/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
