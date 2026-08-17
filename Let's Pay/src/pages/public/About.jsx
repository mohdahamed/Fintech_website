import { motion } from 'framer-motion';
import { 
  Database, 
  Eye, 
  Target, 
  Sparkles,
  HeartHandshake,
  TrendingUp,
  Fingerprint
} from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#020817] pt-32 pb-24 grid-bg">
      {/* Background Radial Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-gradient-to-br from-[#1E4E8C]/15 to-transparent rounded-full blur-[120px] animate-pulse-soft"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-gradient-to-br from-[#22E67A]/5 to-transparent rounded-full blur-[140px] animate-pulse-soft"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Mission Hero */}
        <section className="text-center max-w-4xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="text-[#2D6FD3] font-bold tracking-wider uppercase text-[11px] px-4 py-1.5 rounded-full bg-[#1E4E8C]/10 border border-[#2D6FD3]/30 mb-2 inline-block">
              <Sparkles size={12} className="inline mr-1 animate-pulse" /> Platform Philosophy
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-luxury">
              Behind the <span className="text-gradient">Infrastructure.</span>
            </h1>
            <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mx-auto">
              Let's Pay was founded with a singular, clear directive: to construct the most reliable, secure, and performant payment middleware for modern corporate enterprises globally.
            </p>
          </motion.div>
        </section>

        {/* Vision & Values Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { 
              title: 'Our Vision', 
              desc: 'To remove payment borders entirely, giving businesses of all sizes the capacity to collect, disburse, and reconcile funds instantly anywhere in the world.', 
              icon: Eye, 
              color: '#4A90FF' 
            },
            { 
              title: 'Core Values', 
              desc: 'Security is at the heart of everything we construct. We emphasize complete portal transparency, compliance parity, and uncompromised platform reliability.', 
              icon: Target, 
              color: '#22E67A' 
            },
            { 
              title: 'System Blueprint', 
              desc: 'Constructed on distributed networks with redundancy layers, zero-trust portal access controls, and real-time database validation channels.', 
              icon: Database, 
              color: '#fbbf24' 
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="card-glass-main card-glow-hover p-8 border border-[var(--color-border-color)]">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: `${item.color}10`, color: item.color }}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white tracking-tight">{item.title}</h3>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </section>

        {/* Corporate Pillars */}
        <section className="py-20 bg-[#071227]/40 border-y border-[var(--color-border-color)] rounded-3xl p-8 md:p-12 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-[#4A90FF] font-bold text-xs uppercase tracking-wider block">Enterprise Standards</span>
              <h2 className="text-3xl md:text-4xl font-black text-luxury leading-tight">
                Constructed for teams who cannot afford downtime.
              </h2>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                We manage the complex under-the-hood integrations of central banking corridors, payment networks, and gateway protocols, presenting you with a single unified dashboard interface.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: 'Global Connectivity', desc: 'Plug into direct clearing corridors instantly.' },
                  { title: 'ISO Certified Vaults', desc: 'Your operational card details are protected by double-layer encryption.' },
                  { title: 'Predictive Error Routing', desc: 'We auto-route traffic to optimal gateway pipelines.' }
                ].map((pillar, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22E67A] mt-2 shrink-0"></span>
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-tight">{pillar.title}</h4>
                      <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="card-glass-main card-glow-hover p-6 border border-[var(--color-border-color)] text-center">
                <p className="text-4xl font-extrabold text-[#4A90FF]">99.99%</p>
                <p className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider mt-2">Core Portal Uptime</p>
              </div>
              <div className="card-glass-main card-glow-hover p-6 border border-[var(--color-border-color)] text-center">
                <p className="text-4xl font-extrabold text-[#22E67A]">10M+</p>
                <p className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider mt-2">Transactions Handled</p>
              </div>
              <div className="card-glass-main card-glow-hover p-6 border border-[var(--color-border-color)] text-center">
                <p className="text-4xl font-extrabold text-[#fbbf24]">&lt; 2s</p>
                <p className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider mt-2">Settlement Times</p>
              </div>
              <div className="card-glass-main card-glow-hover p-6 border border-[var(--color-border-color)] text-center">
                <p className="text-4xl font-extrabold text-[#f43f5e]">100+</p>
                <p className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider mt-2">Currencies Supported</p>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Core Pillars (NEW Extra Content) */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-luxury">Built on Trust & Reliability</h2>
            <p className="text-[var(--color-text-secondary)] text-sm mt-3">
              We operate under stringent regulatory standards and maintain secure risk-management pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Regulatory Alignment',
                desc: 'Adhering to security guidelines, verifying identities, and screening transactions in real time.',
                icon: Fingerprint,
                color: '#22E67A'
              },
              {
                title: 'Operational Support',
                desc: 'Dedicated checkout relations managers ready to assist with auditing operations and settlements.',
                icon: HeartHandshake,
                color: '#2D6FD3'
              },
              {
                title: 'Commercial Scale',
                desc: 'Enabling businesses to scale cashflows from early sales up to high volumes without performance lag.',
                icon: TrendingUp,
                color: '#fbbf24'
              }
            ].map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={i} className="card-glass-main card-glow-hover p-8 border border-white/5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: `${pillar.color}15`, color: pillar.color }}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Corporate Growth Timeline */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center text-luxury tracking-tight mb-16">Our Journey</h2>
          <div className="space-y-12 relative before:absolute before:left-4 md:before:left-1/2 before:top-2 before:bottom-2 before:w-[2px] before:bg-[var(--color-border-color)]">
            {[
              { year: '2024', title: 'Groundbreaking Infrastructure', desc: 'Let\'s Pay is founded, launching local UPI and credit card processing services with early beta merchants.' },
              { year: '2025', title: 'Scale & Payout Automation', desc: 'Rolled out bulk corporate payout engines, processing vendor settlements and salaries 24/7/365 with automated bank reconciliation.' },
              { year: '2026', title: 'Global Corridors & Real-Time Sync', desc: 'Linked direct multi-currency pay-in channels, achieving record platform traffic, serving enterprise clients across international tech sectors.' }
            ].map((milestone, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0">
                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-[7px] w-3.5 h-3.5 rounded-full bg-[#2D6FD3] border border-[#020817] z-20 shadow-[0_0_10px_rgba(45,111,211,0.8)]"></div>
                
                <div className="w-full md:w-1/2 md:pr-12 md:text-right pl-12 md:pl-0">
                  <span className="text-[#22E67A] font-extrabold text-lg">{milestone.year}</span>
                  <h4 className="text-lg font-bold text-white mt-1 tracking-tight">{milestone.title}</h4>
                </div>
                <div className="w-full md:w-1/2 md:pl-12 pl-12">
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-sm">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
