import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  BarChart, 
  CheckCircle2, 
  Copy, 
  Check, 
  Globe, 
  Lock, 
  Cpu, 
  Layers,
  Sparkles,
  Link2,
  Send,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [collectionAmount, setCollectionAmount] = useState(124592.00);
  const [liveTxns, setLiveTxns] = useState([
    { name: 'UPI Collection', amount: '+₹4,200.00', status: 'Success', color: '#22E67A', id: 1 },
    { name: 'Card Settlement', amount: '+₹12,120.00', status: 'Processing', color: '#fbbf24', id: 2 },
    { name: 'Vendor Payout', amount: '-₹850.00', status: 'Success', color: '#22E67A', id: 3 }
  ]);

  // Merchant Portal Interactive States
  const [merchantTab, setMerchantTab] = useState('links'); // links, payouts, analytics
  const [linkAmount, setLinkAmount] = useState('250.00');
  const [customerName, setCustomerName] = useState('John Doe');
  const [generatedLink, setGeneratedLink] = useState('');
  const [linkCopied, setLinkCopied] = useState(false);

  const [payoutAmount, setPayoutAmount] = useState('1200.00');
  const [beneficiary, setBeneficiary] = useState('supplier@okaxis');
  const [payoutStatus, setPayoutStatus] = useState('idle'); // idle, sending, success

  const handleGenerateLink = (e) => {
    e.preventDefault();
    const cleanAmount = parseFloat(linkAmount) || 0;
    if (cleanAmount <= 0) return;
    
    const randomId = Math.random().toString(36).substring(2, 8);
    const mockLink = `https://letspay.me/collect/pay_${randomId}`;
    setGeneratedLink(mockLink);
  };

  const handleCopyLink = () => {
    if (!generatedLink) return;
    navigator.clipboard.writeText(generatedLink);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);

    // Simulate collection transaction shortly after link generation
    setTimeout(() => {
      const parsedAmount = parseFloat(linkAmount) || 250;
      setCollectionAmount(prev => prev + parsedAmount);
      setLiveTxns(prev => [
        { 
          name: `Link Pay: ${customerName || 'Customer'}`, 
          amount: `+₹${parsedAmount.toFixed(2)}`, 
          status: 'Success', 
          color: '#22E67A', 
          id: Date.now() 
        },
        ...prev.slice(0, 2)
      ]);
      setGeneratedLink('');
      setLinkAmount('250.00');
      setCustomerName('John Doe');
    }, 2000);
  };

  const handleSendPayout = (e) => {
    e.preventDefault();
    const cleanAmount = parseFloat(payoutAmount) || 0;
    if (cleanAmount <= 0) return;

    setPayoutStatus('sending');
    setTimeout(() => {
      setPayoutStatus('success');
      // Update balance and transaction stream
      setLiveTxns(prev => [
        { 
          name: `Payout: ${beneficiary}`, 
          amount: `-₹${cleanAmount.toFixed(2)}`, 
          status: 'Success', 
          color: '#22E67A', 
          id: Date.now() 
        },
        ...prev.slice(0, 2)
      ]);
      
      setTimeout(() => {
        setPayoutStatus('idle');
        setPayoutAmount('1200.00');
        setBeneficiary('supplier@okaxis');
      }, 2000);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-[#020817] grid-bg">
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[5%] left-[5%] w-[500px] h-[500px] bg-gradient-to-br from-[#2D6FD3]/12 to-transparent rounded-full blur-[140px] animate-pulse-soft"></div>
        <div className="absolute top-[30%] right-[5%] w-[600px] h-[600px] bg-gradient-to-br from-[#22E67A]/8 to-transparent rounded-full blur-[160px] animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-gradient-to-br from-[#4A90FF]/10 to-transparent rounded-full blur-[150px] animate-pulse-soft" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-left space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2D6FD3]/10 border border-[#2D6FD3]/35 text-xs text-[#4A90FF] font-semibold tracking-wider uppercase select-none w-fit">
                  <Sparkles size={14} className="animate-pulse" /> Unified Merchant Cashflow Platform
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-luxury">
                  Powering Cashflow for <br />
                  <span className="text-gradient">Growing Businesses</span>
                </h1>

                <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-xl">
                  Accept customer payments and disburse instant payouts directly from a single premium portal. No complex API integration or coding required.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <a
                    href="https://agent.letspay.co.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#2D6FD3] hover:bg-[#4A90FF] text-white px-8 py-4 rounded-xl text-sm font-bold transition-all duration-300 blue-glow hover:scale-[1.03]"
                  >
                    Get Started <ArrowRight size={16} />
                  </a>
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#111B2F]/80 hover:bg-[#16243D] text-white border border-[#233452] px-8 py-4 rounded-xl text-sm font-bold transition-all duration-300 hover:scale-[1.03]"
                  >
                    Talk to Payments Expert
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right Card Column */}
            <div className="lg:col-span-5 relative w-full">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="relative mx-auto max-w-md lg:max-w-none"
              >
                <div className="glass-premium rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#2D6FD3]/40 to-transparent"></div>

                  <div className="bg-[#071227]/95 h-12 flex items-center px-4 gap-2 border-b border-white/5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#f43f5e]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#22E67A]"></div>
                    <span className="text-[10px] text-slate-500 font-mono ml-3 select-none">letspay.com/merchant-portal</span>
                  </div>

                  <div className="p-6 bg-[#111B2F]/40 space-y-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-[var(--color-text-muted)] text-[11px] font-semibold tracking-wider uppercase mb-0.5">Today's Collection</p>
                        <h3 className="text-2xl font-black text-white tracking-tight">
                          ₹{collectionAmount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </h3>
                      </div>
                      <div className="text-[#22E67A] flex items-center gap-1 bg-[#22E67A]/10 px-2.5 py-1 rounded-lg text-[10px] font-bold border border-[#22E67A]/20">
                        +12.8% Today
                      </div>
                    </div>

                    <div className="h-32 bg-[#071227]/30 rounded-xl border border-white/5 p-4 flex items-end gap-2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2D6FD3]/5 to-transparent pointer-events-none"></div>
                      {/* Fake Chart bars */}
                      {[40, 70, 45, 90, 65, 85, 100, 60, 80, 50].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 0.6 + (i * 0.08), duration: 0.6, ease: "easeOut" }}
                          className="flex-1 bg-gradient-to-t from-[#2D6FD3] to-[#4A90FF] rounded-t-md opacity-90 relative group hover:opacity-100 transition-opacity"
                        >
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white text-black text-[9px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none select-none">
                            {h}%
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <p className="text-[var(--color-text-muted)] text-[11px] font-semibold tracking-wider uppercase">Live Transactions</p>
                      <AnimatePresence mode="popLayout">
                        {liveTxns.map((tx) => (
                          <motion.div
                            key={tx.id}
                            initial={{ opacity: 0, x: 20, y: -10 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="glass-elevated p-3 rounded-lg flex justify-between items-center border border-white/5 hover:border-white/10 transition-colors"
                          >
                            <div>
                              <p className="text-xs font-semibold text-white">{tx.name}</p>
                              <p className="text-[10px] mt-0.5 font-medium" style={{ color: tx.color }}>{tx.status}</p>
                            </div>
                            <p className="text-xs font-bold text-white">{tx.amount}</p>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Floating Element */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute -right-4 top-12 glass-elevated p-3 rounded-xl hidden md:flex items-center gap-3 border border-[#22E67A]/30 green-glow shadow-xl select-none"
                >
                  <div className="w-8 h-8 rounded-full bg-[#22E67A]/15 flex items-center justify-center text-[#22E67A]">
                    <CheckCircle2 size={16} className="fill-[#22E67A]/10" />
                  </div>
                  <div>
                    <p className="text-[9px] text-[var(--color-text-muted)] font-bold tracking-wider uppercase">Reconciliation</p>
                    <p className="text-xs font-extrabold text-white mt-0.5">Automated</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* No-Code Merchant Console Showcase (Replacing API sandbox) */}
      <section className="py-24 relative z-10 border-t border-[var(--color-border-color)] bg-[#071227]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copywriter Side */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4A90FF] bg-[#2D6FD3]/10 px-3.5 py-1.5 rounded-full border border-[#2D6FD3]/20">
                <Sparkles size={14} className="text-[#4A90FF]" /> All-in-One Cashflow Console
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-luxury leading-tight">
                Zero Coding. <br />
                Complete Control.
              </h2>
              <p className="text-[var(--color-text-secondary)] text-base md:text-lg leading-relaxed">
                Run your entire commercial transactions flow directly from a clean dashboard. Whether collecting daily sales or executing vendor payments, Let's Pay does the heavy lifting instantly.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#22E67A]/15 flex items-center justify-center text-[#22E67A]">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-sm text-[var(--color-text-secondary)] font-medium">Accept UPI, cards, and net banking with payment links</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#22E67A]/15 flex items-center justify-center text-[#22E67A]">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-sm text-[var(--color-text-secondary)] font-medium">Send bulk payouts to vendor bank accounts instantly</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#22E67A]/15 flex items-center justify-center text-[#22E67A]">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-sm text-[var(--color-text-secondary)] font-medium">Real-time daily transaction reporting and reconciliations</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Mockup Side */}
            <div className="lg:col-span-7">
              <div className="card-glass-main card-glow-hover overflow-hidden border border-[#233452] shadow-2xl rounded-2xl">
                {/* Console Header Tabs */}
                <div className="flex items-center justify-between bg-[#111B2F]/90 px-4 py-3 border-b border-[#233452] overflow-x-auto">
                  <div className="flex gap-2 shrink-0">
                    <button 
                      onClick={() => setMerchantTab('links')}
                      className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                        merchantTab === 'links' 
                          ? 'bg-[#2D6FD3] text-white shadow-lg shadow-[#2D6FD3]/20' 
                          : 'text-[var(--color-text-muted)] hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Link2 size={14} /> Payment Links
                    </button>
                    <button 
                      onClick={() => setMerchantTab('payouts')}
                      className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                        merchantTab === 'payouts' 
                          ? 'bg-[#22E67A] text-[#020817] shadow-lg shadow-[#22E67A]/20' 
                          : 'text-[var(--color-text-muted)] hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Send size={14} /> Vendor Payouts
                    </button>
                    <button 
                      onClick={() => setMerchantTab('analytics')}
                      className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                        merchantTab === 'analytics' 
                          ? 'bg-[#2D6FD3] text-white shadow-lg shadow-[#2D6FD3]/20' 
                          : 'text-[var(--color-text-muted)] hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <BarChart size={14} /> Analytics Insights
                    </button>
                  </div>
                </div>

                {/* Console Body */}
                <div className="p-6 md:p-8 bg-[#111B2F]/30 min-h-[300px] flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    
                    {/* Tab 1: Payment Link Generator */}
                    {merchantTab === 'links' && (
                      <motion.div
                        key="links"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-4"
                      >
                        <div className="border border-white/5 bg-white/5 p-4 rounded-xl space-y-4">
                          <h4 className="text-sm font-bold text-white flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#2D6FD3]"></span> Generate Custom Collect Link
                          </h4>
                          
                          <form onSubmit={handleGenerateLink} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">Customer Name</label>
                              <input 
                                type="text"
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                                className="w-full bg-[#071227] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#2D6FD3]"
                                placeholder="e.g. John Doe"
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">Amount (₹)</label>
                              <input 
                                type="number"
                                value={linkAmount}
                                onChange={(e) => setLinkAmount(e.target.value)}
                                className="w-full bg-[#071227] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#2D6FD3]"
                                placeholder="250.00"
                              />
                            </div>
                            <button 
                              type="submit"
                              className="sm:col-span-2 bg-[#2D6FD3] hover:bg-[#4A90FF] text-white py-2.5 rounded-lg text-xs font-bold transition-all"
                            >
                              Create Payment Link
                            </button>
                          </form>
                        </div>

                        {generatedLink && (
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-[#22E67A]/5 border border-[#22E67A]/25 p-3 rounded-lg flex items-center justify-between gap-3"
                          >
                            <div className="overflow-hidden">
                              <p className="text-[10px] font-bold text-[#22E67A] uppercase tracking-wider mb-0.5">Link Ready (Click to Copy)</p>
                              <p className="text-xs font-mono text-white truncate">{generatedLink}</p>
                            </div>
                            <button 
                              onClick={handleCopyLink}
                              className="bg-[#22E67A] hover:bg-[#38FF8C] text-[#020817] p-2 rounded-lg transition-colors shrink-0"
                            >
                              {linkCopied ? <Check size={14} /> : <Copy size={14} />}
                            </button>
                          </motion.div>
                        )}
                      </motion.div>
                    )}

                    {/* Tab 2: Vendor Payouts */}
                    {merchantTab === 'payouts' && (
                      <motion.div
                        key="payouts"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-4"
                      >
                        <div className="border border-white/5 bg-white/5 p-4 rounded-xl space-y-4">
                          <h4 className="text-sm font-bold text-white flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#22E67A]"></span> Instant Payout Dispatcher
                          </h4>
                          
                          <form onSubmit={handleSendPayout} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">Beneficiary ID / UPI</label>
                              <input 
                                type="text"
                                value={beneficiary}
                                onChange={(e) => setBeneficiary(e.target.value)}
                                className="w-full bg-[#071227] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#22E67A]"
                                placeholder="vendor@upi"
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">Amount (₹)</label>
                              <input 
                                type="number"
                                value={payoutAmount}
                                onChange={(e) => setPayoutAmount(e.target.value)}
                                className="w-full bg-[#071227] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#22E67A]"
                                placeholder="1200.00"
                              />
                            </div>
                            
                            <button 
                              type="submit"
                              disabled={payoutStatus !== 'idle'}
                              className="sm:col-span-2 bg-[#22E67A] hover:bg-[#38FF8C] text-[#020817] py-2.5 rounded-lg text-xs font-bold transition-all disabled:opacity-50"
                            >
                              {payoutStatus === 'idle' && 'Disburse Funds Instantly'}
                              {payoutStatus === 'sending' && 'Sending via instant clearance...'}
                              {payoutStatus === 'success' && 'Funds Cleared Successfully!'}
                            </button>
                          </form>
                        </div>
                      </motion.div>
                    )}

                    {/* Tab 3: Revenue Analytics */}
                    {merchantTab === 'analytics' && (
                      <motion.div
                        key="analytics"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-4"
                      >
                        <div className="grid grid-cols-3 gap-4">
                          {[
                            { label: 'UPI Share', value: '62.4%', change: '+4.5%', color: '#22E67A' },
                            { label: 'Cards Share', value: '28.1%', change: '+1.2%', color: '#4A90FF' },
                            { label: 'Net Banking', value: '9.5%', change: '-0.8%', color: '#fbbf24' }
                          ].map((an, i) => (
                            <div key={i} className="bg-[#071227]/60 border border-white/5 p-4 rounded-xl text-center">
                              <p className="text-[10px] text-[var(--color-text-muted)] font-bold uppercase tracking-wider mb-1">{an.label}</p>
                              <p className="text-lg font-black text-white">{an.value}</p>
                              <p className="text-[10px] mt-1 font-bold" style={{ color: an.color }}>{an.change} MoM</p>
                            </div>
                          ))}
                        </div>
                        
                        <div className="border border-white/5 bg-white/5 p-4 rounded-xl">
                          <div className="flex justify-between items-center mb-3">
                            <span className="text-xs font-bold text-white">Daily Reconciliation Health</span>
                            <span className="text-[10px] font-bold text-[#22E67A] flex items-center gap-1"><TrendingUp size={12} /> 100% Reconciled</span>
                          </div>
                          <div className="w-full bg-[#071227] h-2 rounded-full overflow-hidden">
                            <div className="bg-[#22E67A] h-full" style={{ width: '100%' }}></div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Global Infrastructure Section (Trust-based tailored to Small Businesses) */}
      <section className="py-28 relative z-10 border-t border-[var(--color-border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-luxury tracking-tight">
              Institutional Security & Scale
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
              We process high-velocity transactions with automated failover and certified PCI-DSS Level 1 compliance. Rest assured your business funds are completely secured.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: '99.99% Network SLA', desc: 'Direct connections to major banking channels to ensure complete collection failover.', icon: Cpu },
              { title: 'Local Bank Settlement', desc: 'Receive automated settlements directly to your business checking account daily.', icon: Globe },
              { title: 'High-Volume Ready', desc: 'Secure transaction pipelines capable of processing thousands of requests per second.', icon: Layers },
              { title: 'PCI-DSS Certified', desc: 'Fully audited Level 1 tokenization standards keep credit and debit cards safe.', icon: Lock }
            ].map((metric, i) => {
              const Icon = metric.icon;
              return (
                <div key={i} className="card-glass-main card-glow-hover p-8 border border-white/5 transition-all duration-300 hover:scale-[1.02]">
                  <div className="w-12 h-12 rounded-xl bg-[#2D6FD3]/10 flex items-center justify-center text-[#4A90FF] mb-6">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{metric.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{metric.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Grid Section (Tailored to Small Businesses, no APIs) */}
      <section className="py-24 relative z-10 border-t border-white/5 bg-[#071227]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-luxury tracking-tight">Everything your business needs to move money</h2>
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
              A comprehensive suite of payment products designed to help you scale your business faster and with more confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Instant Pay-In', desc: 'Accept payments immediately using 100+ native payment methods with high success rates.', icon: Zap, color: '#2D6FD3' },
              { title: 'Automated Payouts', desc: 'Send mass payouts to suppliers, vendors, and payroll instantly with smart clearing route logic.', icon: ArrowRight, color: '#22E67A' },
              { title: 'No-Code Console', desc: 'Manage invoices, generate checkouts, and execute transfers directly from our beautiful web app.', icon: Layers, color: '#4A90FF' },
              { title: 'Real-time Analytics', desc: 'Gain deep insights into your business financial health with custom transaction analytics reports.', icon: BarChart, color: '#22E67A' },
              { title: 'Enterprise Security', desc: 'Bank-grade encryptions, fraud protection filters, and 3D Secure checkout validation.', icon: ShieldCheck, color: '#2D6FD3' },
              { title: 'Smart Settlements', desc: 'Automated settlement cycles ensure money is credited to your bank account with absolute reliability.', icon: CheckCircle2, color: '#22E67A' }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="card-glass-main card-glow-hover p-8 hover:scale-[1.02] transition-all duration-300 group border border-white/5 transform shadow-lg hover:shadow-2xl">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${feature.color}15`, color: feature.color }}
                  >
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{feature.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-28 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { value: '₹5,000Cr+', label: 'Transactions Processed' },
              { value: '99.99%', label: 'Success Rate' },
              { value: '10,000+', label: 'Active Merchants' },
              { value: '150+', label: 'Countries Supported' }
            ].map((stat, i) => (
              <div key={i} className="p-4 group">
                <h4 className="text-5xl md:text-6xl font-extrabold text-white mb-3 text-gradient group-hover:scale-105 transition-transform duration-300">{stat.value}</h4>
                <p className="text-[var(--color-text-secondary)] font-semibold uppercase tracking-wider text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
