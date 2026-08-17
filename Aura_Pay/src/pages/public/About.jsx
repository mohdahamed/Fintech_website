import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Eye, 
  Target, 
  Cpu, 
  ArrowRight,
  Database,
  Lock,
  Zap,
  Globe,
  Award,
  Layers
} from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020817] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111B2F] border border-[#233452] text-xs text-[#3B82F6] font-bold tracking-widest uppercase">
              <ShieldCheck size={14} /> Platform Philosophy & Standards
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Behind the <br />
              <span className="text-[#3B82F6]">Infrastructure</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
              AuraPay was engineered with a clear directive: to build the most reliable, secure, and performant financial payment gateway for growing businesses and enterprises.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a
                href="https://agent.aurapay.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-[#4A90FF] text-white px-8 py-4 rounded-lg text-sm font-bold transition-colors"
              >
                Join AuraPay <ArrowRight size={16} />
              </a>
              <Link
                to="/contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#111B2F] hover:bg-[#16243D] text-white border border-[#233452] px-8 py-4 rounded-lg text-sm font-bold transition-colors"
              >
                Contact Team
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Unique System Metrics Banner */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pl-6"
          >
            <div className="bg-[#050816] border border-[#233452] rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-[#233452] pb-4">
                <div className="flex items-center gap-2">
                  <Cpu size={18} className="text-[#8B5CF6]" />
                  <span className="text-xs text-white font-bold tracking-wider">AuraPay Node Status</span>
                </div>
                <span className="text-xs bg-[#22E67A]/10 text-[#22E67A] px-2.5 py-1 rounded font-bold border border-[#22E67A]/20">
                  Operational
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#111B2F] p-4 rounded-xl border border-[#233452]">
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">System Uptime</p>
                  <p className="text-2xl font-bold text-white">99.99%</p>
                  <p className="text-[9px] text-[#22E67A] font-bold mt-1">High Availability</p>
                </div>
                <div className="bg-[#111B2F] p-4 rounded-xl border border-[#233452]">
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Avg Latency</p>
                  <p className="text-2xl font-bold text-white">&lt; 45ms</p>
                  <p className="text-[9px] text-[#3B82F6] font-bold mt-1">Sub-second Routing</p>
                </div>
                <div className="bg-[#111B2F] p-4 rounded-xl border border-[#233452]">
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Security Vault</p>
                  <p className="text-xl font-bold text-white">PCI-DSS L1</p>
                  <p className="text-[9px] text-[#8B5CF6] font-bold mt-1">ISO Certified</p>
                </div>
                <div className="bg-[#111B2F] p-4 rounded-xl border border-[#233452]">
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Encryption</p>
                  <p className="text-xl font-bold text-white">256-Bit</p>
                  <p className="text-[9px] text-[#22E67A] font-bold mt-1">Zero Trust Protocol</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-[#233452]">
                <span className="flex items-center gap-1.5"><Lock size={14} className="text-[#3B82F6]" /> Real-time Reconciliation</span>
                <span>Active Vault</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Vision & Values Bento Grid */}
      <section className="py-20 bg-[#071227] border-t border-b border-[#233452]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Our Vision & Core Pillars</h2>
            <p className="text-slate-400 max-w-xl mx-auto">The foundational principles behind AuraPay's financial engine.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#111B2F] border border-[#233452] rounded-2xl p-8 hover:border-[#3B82F6] transition-colors">
              <div className="w-10 h-10 bg-[#020817] border border-[#233452] rounded-xl flex items-center justify-center text-[#3B82F6] mb-4">
                <Eye size={20} />
              </div>
              <h3 className="font-bold text-lg mb-2">Our Vision</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                To remove payment borders entirely, giving businesses of all sizes the capacity to collect, disburse, and reconcile funds seamlessly anywhere in India.
              </p>
            </div>

            <div className="bg-[#111B2F] border border-[#233452] rounded-2xl p-8 hover:border-[#22E67A] transition-colors">
              <div className="w-10 h-10 bg-[#020817] border border-[#233452] rounded-xl flex items-center justify-center text-[#22E67A] mb-4">
                <Target size={20} />
              </div>
              <h3 className="font-bold text-lg mb-2">Core Values</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Security and transparency are at the heart of everything we construct. We emphasize compliance parity, portal security, and uncompromised platform reliability.
              </p>
            </div>

            <div className="bg-[#111B2F] border border-[#233452] rounded-2xl p-8 hover:border-[#8B5CF6] transition-colors">
              <div className="w-10 h-10 bg-[#020817] border border-[#233452] rounded-xl flex items-center justify-center text-[#8B5CF6] mb-4">
                <Database size={20} />
              </div>
              <h3 className="font-bold text-lg mb-2">System Blueprint</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Constructed on distributed microservice networks with redundant banking clearing channels, zero-trust access controls, and real-time database validation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Standards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-[#111B2F] border border-[#233452] rounded-3xl p-8 md:p-12 space-y-8">
          <div className="max-w-2xl">
            <span className="text-[#3B82F6] font-bold text-xs uppercase tracking-wider block mb-2">Enterprise Grade</span>
            <h2 className="text-3xl font-bold mb-3">Built for Teams Who Cannot Afford Downtime</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              We manage the complex under-the-hood integrations of central banking corridors, payment networks, and gateway protocols—presenting you with a clean, unified dashboard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#233452]">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#22E67A] font-bold text-sm">
                <Zap size={16} /> Direct Banking Corridors
              </div>
              <p className="text-xs text-slate-400">Direct integration pipelines eliminate third-party hops for maximum settlement speed.</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#3B82F6] font-bold text-sm">
                <Lock size={16} /> ISO Certified Vaults
              </div>
              <p className="text-xs text-slate-400">Card and bank account details are protected by multi-layer hardware security modules.</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#8B5CF6] font-bold text-sm">
                <Layers size={16} /> Smart Auto-Routing
              </div>
              <p className="text-xs text-slate-400">Real-time gateway health monitoring automatically reroutes traffic to peak-performing channels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW UNIQUE SECTION: Active Geo-Redundancy & Uptime Guarantee */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-[#050816] border border-[#233452] rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[#8B5CF6] font-bold text-xs uppercase tracking-wider block">Infrastructure Resilience</span>
              <h2 className="text-3xl font-bold text-white">Active Geo-Redundant High Availability Clusters</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                AuraPay middleware is deployed across active-active redundant data centers. Even in the event of major regional telecom or cloud disruptions, payment sessions automatically failover in milliseconds.
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#111B2F] border border-[#233452] p-5 rounded-2xl">
                <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Zero Downtime Deploy</span>
                <span className="text-xl font-bold text-[#8B5CF6]">Hot-Swapping</span>
                <p className="text-xs text-slate-400 mt-1">System updates occur without service interruption.</p>
              </div>
              <div className="bg-[#111B2F] border border-[#233452] p-5 rounded-2xl">
                <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Data Mirroring</span>
                <span className="text-xl font-bold text-[#3B82F6]">Sync Ledger</span>
                <p className="text-xs text-slate-400 mt-1">Real-time database mirroring across active zones.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="bg-[#050816] border border-[#233452] rounded-3xl p-10 text-center space-y-6">
          <h2 className="text-3xl font-bold">Experience Next-Gen Payment Infrastructure</h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Get started today with our simple merchant portal setup or consult with our payment integration specialists.
          </p>
          <a
            href="https://agent.aurapay.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#4A90FF] text-white px-8 py-3.5 rounded-lg text-sm font-bold transition-colors"
          >
            Create Your Account <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
