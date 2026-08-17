import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, CreditCard, Code, ShieldCheck, Banknote, 
  LineChart, Hash, ArrowDownCircle, ArrowUpCircle,
  Zap, ChevronRight, CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const servicesData = [
  {
    icon: <ArrowDownCircle className="w-8 h-8 text-brand-cyan" />,
    title: "Pay In",
    description: "Accept payments from your customers seamlessly with multiple payment options. Integrated with multi-acquirer waterfall logic for maximum success rates.",
    subFeatures: [
      "UPI & QR Payments (v3.0)",
      "Card Networks (Visa, MC, RuPay)",
      "99.99% Node Availability",
      "Instant Settlement (T+0)"
    ],
    link: "/pay-in",
    color: "brand-cyan"
  },
  {
    icon: <ArrowUpCircle className="w-8 h-8 text-brand-blue" />,
    title: "Pay Out",
    description: "Automate your disbursements and send money to any bank account or wallet. Built on direct bank IMPS/NEFT integrations for sub-second latency.",
    subFeatures: [
      "Bulk Payouts via REST API",
      "Signature-verified Webhooks",
      "Idempotent API Design",
      "Smart Refund Re-routing"
    ],
    link: "/pay-out",
    color: "brand-blue"
  },
  {
    icon: <Hash className="w-8 h-8 text-emerald-400" />,
    title: "BBPS",
    description: "Official BBPS Operating Unit integration. Connect to the Bharat Bill Payment System for all utility billing needs with automated bill fetch.",
    subFeatures: [
      "20,000+ Billers Live",
      "Auto-Fetch Bill Scraper",
      "Digital Receipt Generation",
      "PCI-DSS v3.2.1 Certified"
    ],
    link: "/bbps",
    color: "emerald-400"
  },
  {
    icon: <CreditCard className="w-8 h-8 text-brand-cyan" />,
    title: "Card Issuing",
    description: "Launch your own virtual or physical card program with granular, real-time spending controls and dynamic auth hooks.",
    subFeatures: [
      "Virtual Card API Forge",
      "Just-in-Time (JIT) Funding",
      "Custom BIN Ranges Available",
      "Auth-stream Enrichment"
    ],
    link: "#",
    color: "brand-cyan"
  },
  {
    icon: <Code className="w-8 h-8 text-brand-blue" />,
    title: "Payment APIs",
    description: "State-of-the-art developer platform. Highly reliable, scalable APIs designed to be integrated in minutes with comprehensive documentation.",
    subFeatures: [
      "gRPC & REST Support",
      "SDKs in 6 Core Languages",
      "Deterministic Sandboxing",
      "Real-time Error Telemetry"
    ],
    link: "#",
    color: "brand-blue"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
    title: "Compliance",
    description: "Bank-grade security and full regulatory compliance out of the box. Automated KYC/AML pipelines and AI-driven risk mitigation.",
    subFeatures: [
      "SOC2 Type II Compliant",
      "ML-based Transaction Guard",
      "Frictionless KYC Flow",
      "Data Residency Guarantee"
    ],
    link: "#",
    color: "emerald-400"
  }
];

const Services = () => {
  const [showNotification, setShowNotification] = React.useState(false);
  const [activeService, setActiveService] = React.useState('');

  const handleServiceClick = (e, title, link) => {
    if (link === "#") {
      e.preventDefault();
      setActiveService(title);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  return (
    <div className="min-h-screen section-padding mt-10 relative overflow-hidden bg-brand-dark">
      {/* Toast Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-10 left-1/2 z-50 px-6 py-3 bg-brand-blue border border-white/20 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-xl"
          >
            <Zap className="w-5 h-5 text-brand-cyan animate-pulse" />
            <span className="text-white font-bold">{activeService} is launching soon!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background visual accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-cyan/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-blue/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-padding mx-auto relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
              <Zap className="w-4 h-4 text-brand-cyan" />
              <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">Operational Excellence</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
              Enterprise <br />
              <span className="text-gradient-hype">Fintech Solutions</span>
            </h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
              Powering the next generation of financial services with real-time settlement 
              networks and bank-grade security infrastructure.
            </p>
          </motion.div>
        </div>

        {/* Real-time Metrics Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
        >
          {[
            { label: "Platform Uptime", value: "99.99%", detail: "All Regions" },
            { label: "API Latency", value: "85ms", detail: "P99 Response" },
            { label: "Peak Throughput", value: "50k+", detail: "TPM (Transactions)" },
            { label: "Settlement Time", value: "T+0", detail: "Standard Window" }
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-xs text-slate-500 font-bold uppercase mb-2 tracking-widest">{stat.label}</div>
              <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-sm text-brand-cyan font-medium">{stat.detail}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card Decoration */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-cyan/20 to-brand-blue/20 rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative h-full bg-slate-900/80 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] hover:bg-slate-900/40 transition-all flex flex-col">
                <div className="w-20 h-20 rounded-3xl bg-black/40 flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 group-hover:border-brand-cyan/30 transition-all duration-500">
                  {service.icon}
                </div>
                
                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-brand-cyan transition-colors">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed font-light mb-8 flex-grow">
                  {service.description}
                </p>

                <div className="space-y-4 mb-10">
                  {service.subFeatures.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className={`w-5 h-5 text-brand-cyan/60`} />
                      <span className="text-sm text-slate-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to={service.link}
                  onClick={(e) => handleServiceClick(e, service.title, service.link)}
                  className="inline-flex items-center gap-2 text-white font-bold group/link hover:text-brand-cyan transition-colors"
                >
                  Explore {service.title} 
                  <ChevronRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services;
