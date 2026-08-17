import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  BarChart, 
  Globe, 
  Lock, 
  Layers,
  CheckCircle2,
  Send,
  Link2
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020817] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111B2F] border border-[#233452] text-xs text-[#3B82F6] font-bold tracking-widest uppercase">
              <ShieldCheck size={14} /> Enterprise Payment Infrastructure
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              Simplify Cashflow with <br />
              <span className="text-[#3B82F6]">AuraPay</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
              The secure, high-performance payment gateway built for modern businesses. Collect payments, manage payouts, and reconcile instantly—all from one powerful dashboard.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a
                href="https://agent.aurapay.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-[#4A90FF] text-white px-8 py-4 rounded-lg text-sm font-bold transition-colors"
              >
                Get Started <ArrowRight size={16} />
              </a>
              <Link
                to="/contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#111B2F] hover:bg-[#16243D] text-white border border-[#233452] px-8 py-4 rounded-lg text-sm font-bold transition-colors"
              >
                Talk to Sales
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Clean Luxury Merchant Console Banner */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:pl-4"
          >
            <div className="relative w-full max-w-md mx-auto">
              
              {/* Floating Reconciliation Badge (Top Right) */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-2 bg-[#050816] border border-[#233452] px-4 py-2.5 rounded-xl shadow-2xl z-30 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-[#22E67A]/15 border border-[#22E67A]/30 flex items-center justify-center text-[#22E67A]">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">RECONCILIATION</p>
                  <p className="text-xs font-bold text-white">Automated</p>
                </div>
              </motion.div>

              {/* Main Window Frame */}
              <div className="bg-[#050816] border border-[#233452] rounded-2xl overflow-hidden shadow-2xl">
                
                {/* Window Header Bar */}
                <div className="bg-[#111B2F] px-4 py-3 border-b border-[#233452] flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#22E67A]"></div>
                  <span className="text-xs font-mono text-slate-400 ml-4">aurapay.co.in/merchant-portal</span>
                </div>

                {/* Dashboard Content Body */}
                <div className="p-6 space-y-6">
                  
                  {/* Today's Collection Stat */}
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">
                      TODAY'S COLLECTION
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                      ₹1,24,592.00
                    </h3>
                  </div>

                  {/* Solid Blue Bar Chart Box */}
                  <div className="bg-[#111B2F] border border-[#233452] p-5 rounded-2xl">
                    <div className="h-24 flex items-end justify-between gap-2 pt-2">
                      {[35, 65, 40, 85, 55, 75, 95, 60, 78, 50].map((h, idx) => (
                        <div 
                          key={idx} 
                          className="flex-1 bg-[#3B82F6] rounded-md transition-all hover:bg-[#4A90FF]"
                          style={{ height: `${h}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Live Transactions Section */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
                      LIVE TRANSACTIONS
                    </span>

                    <div className="space-y-2.5">
                      {/* Txn 1: UPI */}
                      <div className="bg-[#111B2F] border border-[#233452] p-3.5 rounded-xl flex justify-between items-center">
                        <div>
                          <p className="text-xs font-bold text-white">UPI Collection</p>
                          <span className="text-[10px] font-bold text-[#22E67A]">Success</span>
                        </div>
                        <span className="text-xs font-bold text-white">+₹4,200.00</span>
                      </div>

                      {/* Txn 2: Card */}
                      <div className="bg-[#111B2F] border border-[#233452] p-3.5 rounded-xl flex justify-between items-center">
                        <div>
                          <p className="text-xs font-bold text-white">Card Settlement</p>
                          <span className="text-[10px] font-bold text-[#F59E0B]">Processing</span>
                        </div>
                        <span className="text-xs font-bold text-white">+₹12,120.00</span>
                      </div>

                      {/* Txn 3: Vendor Payout */}
                      <div className="bg-[#111B2F] border border-[#233452] p-3.5 rounded-xl flex justify-between items-center">
                        <div>
                          <p className="text-xs font-bold text-white">Vendor Payout</p>
                          <span className="text-[10px] font-bold text-[#22E67A]">Success</span>
                        </div>
                        <span className="text-xs font-bold text-white">-₹850.00</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </motion.div>
          
        </div>
      </section>

      {/* Core Features Bento Grid */}
      <section className="py-24 bg-[#071227] border-t border-b border-[#233452]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Scale</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">A robust suite of financial tools designed for zero-friction operations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#111B2F] border border-[#233452] rounded-2xl p-8 hover:border-[#3B82F6] transition-colors"
            >
              <div className="w-12 h-12 bg-[#020817] border border-[#233452] rounded-xl flex items-center justify-center text-[#3B82F6] mb-6">
                <Link2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Payment Links</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Generate secure payment links instantly and share them via SMS, Email, or WhatsApp. Accept UPI, Cards, and Netbanking.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs font-semibold text-slate-300"><CheckCircle2 size={14} className="text-[#3B82F6]" /> Instant Generation</li>
                <li className="flex items-center gap-2 text-xs font-semibold text-slate-300"><CheckCircle2 size={14} className="text-[#3B82F6]" /> Smart Reminders</li>
              </ul>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#111B2F] border border-[#233452] rounded-2xl p-8 hover:border-[#3B82F6] transition-colors md:col-span-2"
            >
              <div className="flex flex-col md:flex-row gap-8 h-full">
                <div className="flex-1">
                  <div className="w-12 h-12 bg-[#020817] border border-[#233452] rounded-xl flex items-center justify-center text-[#3B82F6] mb-6">
                    <Send size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Bulk Payouts</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Automate vendor payments, employee salaries, and customer refunds. Dispatch thousands of transactions in a single click directly to bank accounts via IMPS, NEFT, or RTGS.
                  </p>
                  <a href="https://agent.aurapay.co.in/" className="text-sm font-bold text-[#3B82F6] hover:underline flex items-center gap-1">
                    Explore Payouts <ArrowRight size={14} />
                  </a>
                </div>
                <div className="flex-1 bg-[#020817] border border-[#233452] rounded-xl p-4 flex flex-col justify-center gap-3">
                  <div className="bg-[#111B2F] p-3 rounded-lg border border-[#233452] flex justify-between items-center">
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">To: Vendor A</p>
                      <p className="text-xs font-bold mt-1">₹45,000.00</p>
                    </div>
                    <span className="text-[10px] bg-[#22E67A]/10 text-[#22E67A] px-2 py-1 rounded font-bold border border-[#22E67A]/20">Processed</span>
                  </div>
                  <div className="bg-[#111B2F] p-3 rounded-lg border border-[#233452] flex justify-between items-center">
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">To: Contractor B</p>
                      <p className="text-xs font-bold mt-1">₹12,500.00</p>
                    </div>
                    <span className="text-[10px] bg-[#22E67A]/10 text-[#22E67A] px-2 py-1 rounded font-bold border border-[#22E67A]/20">Processed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#111B2F] border border-[#233452] rounded-2xl p-8 hover:border-[#8B5CF6] transition-colors md:col-span-2"
            >
              <div className="flex flex-col md:flex-row-reverse gap-8 h-full">
                <div className="flex-1">
                  <div className="w-12 h-12 bg-[#020817] border border-[#233452] rounded-xl flex items-center justify-center text-[#8B5CF6] mb-6">
                    <BarChart size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Real-time Analytics</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Monitor your cash flow, track success rates, and export detailed reconciliation reports instantly. Make data-driven decisions with AuraPay's comprehensive dashboard.
                  </p>
                </div>
                <div className="flex-1 bg-[#020817] border border-[#233452] rounded-xl p-4 flex items-end gap-2 h-40">
                  {/* Static Bar Chart Mockup */}
                  {[30, 70, 45, 90, 60, 100, 85].map((h, i) => (
                    <div key={i} className="flex-1 bg-[#8B5CF6] rounded-t-sm" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Feature 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#111B2F] border border-[#233452] rounded-2xl p-8 hover:border-[#8B5CF6] transition-colors"
            >
              <div className="w-12 h-12 bg-[#020817] border border-[#233452] rounded-xl flex items-center justify-center text-[#8B5CF6] mb-6">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Infrastructure</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Built on enterprise-grade servers ensuring 99.99% uptime. PCI-DSS compliant and fully secure for your business data.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs font-semibold text-slate-300"><CheckCircle2 size={14} className="text-[#8B5CF6]" /> PCI-DSS Level 1</li>
                <li className="flex items-center gap-2 text-xs font-semibold text-slate-300"><CheckCircle2 size={14} className="text-[#8B5CF6]" /> 256-bit Encryption</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Scale Section */}
      <section className="py-20 bg-[#071227] border-t border-b border-[#233452]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="flex justify-center mb-4"><Zap className="text-[#3B82F6]" size={32} /></div>
              <h4 className="text-3xl font-bold mb-2">99.99%</h4>
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide">Uptime SLA</p>
            </div>
            <div className="p-6">
              <div className="flex justify-center mb-4"><Lock className="text-[#3B82F6]" size={32} /></div>
              <h4 className="text-3xl font-bold mb-2">Level 1</h4>
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide">PCI-DSS Compliant</p>
            </div>
            <div className="p-6">
              <div className="flex justify-center mb-4"><Layers className="text-[#3B82F6]" size={32} /></div>
              <h4 className="text-3xl font-bold mb-2">50ms</h4>
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide">Sub-Second Clearance</p>
            </div>
            <div className="p-6">
              <div className="flex justify-center mb-4"><ShieldCheck className="text-[#3B82F6]" size={32} /></div>
              <h4 className="text-3xl font-bold mb-2">24/7</h4>
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide">Dedicated Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW UNIQUE SECTION: Why Modern Enterprises Choose AuraPay */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Engineered for Enterprise Financial Flow</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Built from the ground up to solve complex merchant settlement bottlenecks and manual reconciliation friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#050816] border border-[#233452] rounded-2xl p-8 hover:border-[#3B82F6] transition-colors space-y-4">
            <div className="w-12 h-12 bg-[#111B2F] border border-[#233452] rounded-xl flex items-center justify-center text-[#3B82F6]">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Sub-Second Routing</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Direct connections with central banking clearing corridors mean your funds land in merchant accounts in under 0.4 seconds with 99.85% success guarantee.
            </p>
          </div>

          <div className="bg-[#050816] border border-[#233452] rounded-2xl p-8 hover:border-[#22E67A] transition-colors space-y-4">
            <div className="w-12 h-12 bg-[#111B2F] border border-[#233452] rounded-xl flex items-center justify-center text-[#22E67A]">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Automated Reconciliation</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Zero manual ledger auditing. AuraPay automatically matches incoming UPI payments, card transactions, and payouts with your customer invoice IDs.
            </p>
          </div>

          <div className="bg-[#050816] border border-[#233452] rounded-2xl p-8 hover:border-[#8B5CF6] transition-colors space-y-4">
            <div className="w-12 h-12 bg-[#111B2F] border border-[#233452] rounded-xl flex items-center justify-center text-[#8B5CF6]">
              <Lock size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Bank-Grade Compliance</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Operate with complete peace of mind. Protected by ISO 27001 information security standards, RBI compliant switches, and 256-bit encryption.
            </p>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="pb-24 pt-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-[#111B2F] border border-[#233452] rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to upgrade your payments?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Join thousands of modern businesses relying on AuraPay to streamline their daily financial operations.
          </p>
          <a
            href="https://agent.aurapay.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-[#4A90FF] text-white px-8 py-4 rounded-lg text-sm font-bold transition-colors"
          >
            Create Your Account <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
