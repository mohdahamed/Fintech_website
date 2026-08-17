import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  QrCode, 
  CreditCard, 
  Building2, 
  Zap, 
  CheckCircle2, 
  Award, 
  Users, 
  Sparkles,
  Check,
  FileText,
  Copy
} from 'lucide-react';

export default function PayIn() {
  const [selectedMethod, setSelectedMethod] = useState('upi');
  const [payStatus, setPayStatus] = useState('idle'); // idle, processing, success
  const [amount, setAmount] = useState('450.00');
  const [payerName, setPayerName] = useState('Alex Rivera');
  
  const [createdLink, setCreatedLink] = useState('');
  const [linkCopied, setLinkCopied] = useState(false);

  const handleDemoPayment = (e) => {
    e.preventDefault();
    if (payStatus !== 'idle') return;
    setPayStatus('processing');
    setTimeout(() => {
      setPayStatus('success');
    }, 1500);
  };

  const resetDemo = () => {
    setPayStatus('idle');
  };

  const handleCreateLink = (e) => {
    e.preventDefault();
    const mockId = Math.random().toString(36).substring(2, 8);
    setCreatedLink(`https://letspay.me/collect/invoice_${mockId}`);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(createdLink);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#020817] pt-32 pb-24 grid-bg">
      {/* Background Radial Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-gradient-to-br from-[#2D6FD3]/12 to-transparent rounded-full blur-[140px] animate-pulse-soft"></div>
        <div className="absolute top-[50%] right-[10%] w-[500px] h-[500px] bg-gradient-to-br from-[#22E67A]/6 to-transparent rounded-full blur-[150px] animate-pulse-soft" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 px-4 mb-24">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="text-[#2D6FD3] font-bold tracking-wider uppercase text-[11px] px-4 py-1.5 rounded-full bg-[#2D6FD3]/10 border border-[#2D6FD3]/25 mb-2 inline-block">
              <Sparkles size={12} className="inline mr-1 animate-pulse" /> Instant Collection Infrastructure
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-luxury">
              Accept Payments <span className="text-gradient">Seamlessly.</span>
            </h1>
            <p className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
              Maximize your customer payment conversions with our premium no-code checkout portals. Receive funds instantly via UPI, Credit Cards, Net Banking, and local bank checking codes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <a href="https://agent.letspay.co.in/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#2D6FD3] hover:bg-[#4A90FF] text-white px-8 py-4 rounded-xl font-bold transition-all blue-glow hover:scale-[1.02] text-center">
                Get Started Now
              </a>
              <Link to="/contact" className="w-full sm:w-auto bg-[#111B2F]/80 hover:bg-[#16243D] text-white border border-[#233452] px-8 py-4 rounded-xl font-bold transition-all hover:scale-[1.02] text-center">
                Contact Sales Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Dynamic Layout Section */}
      <section className="relative z-10 py-16 bg-[#071227]/40 border-y border-[var(--color-border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Collection Methods Details */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-luxury tracking-tight mb-4">Integrated Payment Channels</h2>
                <p className="text-[var(--color-text-secondary)] text-base leading-relaxed">
                  Support all local and national payment instruments. Provide customers with a polished, luxury checkout interface that completes clearances in under 2 seconds.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'UPI Quick Pay', desc: 'Accept direct payments from PhonePe, GPay, Paytm, and any UPI client app.', icon: QrCode, color: '#22E67A' },
                  { title: 'Card Processing', desc: 'Accept credit & debit cards with institutional-grade tokenization security.', icon: CreditCard, color: '#2D6FD3' },
                  { title: 'Digital Invoices', desc: 'Generate and send PDF invoices with built-in instant payment links.', icon: FileText, color: '#4A90FF' },
                  { title: 'Direct NetBanking', desc: 'High-ticket settlement routes directly linking to 40+ national banks.', icon: Building2, color: '#fbbf24' }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="card-glass-main card-glow-hover p-5 border border-white/5 flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                        <p className="text-[var(--color-text-muted)] text-[11px] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Interactive Demo Checkout */}
            <div className="lg:col-span-6">
              <div className="card-glass-main card-glow-hover overflow-hidden border border-[#233452] shadow-2xl rounded-2xl relative">
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#2D6FD3]/40 to-transparent"></div>

                <div className="bg-[#111B2F]/90 h-12 flex items-center justify-between px-4 border-b border-[#233452]">
                  <div className="flex gap-1.5 items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#f43f5e]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#22E67A]"></div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono select-none">letspay.me/secure-gateway</span>
                </div>

                <div className="p-6 md:p-8 bg-[#111B2F]/30 min-h-[360px] flex flex-col justify-between">
                  <AnimatePresence mode="wait">
                    {payStatus === 'idle' && (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-5"
                      >
                        <div className="text-center">
                          <p className="text-[10px] text-[var(--color-text-muted)] font-bold uppercase tracking-wider">Demo Checkout Simulator</p>
                          <h3 className="text-xl font-bold text-white mt-1">Select Payment Method</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <button
                            onClick={() => setSelectedMethod('upi')}
                            className={`p-4 rounded-xl border text-left flex flex-col justify-between h-24 transition-all ${
                              selectedMethod === 'upi'
                                ? 'border-[#22E67A] bg-[#22E67A]/5'
                                : 'border-white/5 bg-[#071227]/40 hover:border-white/10'
                            }`}
                          >
                            <QrCode size={18} className={selectedMethod === 'upi' ? 'text-[#22E67A]' : 'text-slate-400'} />
                            <div>
                              <p className="text-xs font-bold text-white">UPI Collections</p>
                              <p className="text-[9px] text-slate-400 mt-0.5">PhonePe, GPay, Paytm</p>
                            </div>
                          </button>

                          <button
                            onClick={() => setSelectedMethod('card')}
                            className={`p-4 rounded-xl border text-left flex flex-col justify-between h-24 transition-all ${
                              selectedMethod === 'card'
                                ? 'border-[#2D6FD3] bg-[#2D6FD3]/5'
                                : 'border-white/5 bg-[#071227]/40 hover:border-white/10'
                            }`}
                          >
                            <CreditCard size={18} className={selectedMethod === 'card' ? 'text-[#2D6FD3]' : 'text-slate-400'} />
                            <div>
                              <p className="text-xs font-bold text-white">Credit Card</p>
                              <p className="text-[9px] text-slate-400 mt-0.5">Visa, Mastercard, RuPay</p>
                            </div>
                          </button>
                        </div>

                        <form onSubmit={handleDemoPayment} className="space-y-3">
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[9px] font-bold text-slate-400 uppercase mb-1">Customer Name</label>
                              <input
                                type="text"
                                value={payerName}
                                onChange={(e) => setPayerName(e.target.value)}
                                className="w-full bg-[#071227] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#2D6FD3]"
                              />
                            </div>
                            <div>
                              <label className="block text-[9px] font-bold text-slate-400 uppercase mb-1">Amount (₹)</label>
                              <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="w-full bg-[#071227] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#2D6FD3]"
                              />
                            </div>
                          </div>

                          <button
                            type="submit"
                            className={`w-full py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
                              selectedMethod === 'upi'
                                ? 'bg-[#22E67A] text-[#020817] hover:bg-[#38FF8C] green-glow'
                                : 'bg-[#2D6FD3] text-white hover:bg-[#4A90FF] blue-glow'
                            }`}
                          >
                            Authorize Payment of ₹{parseFloat(amount || 0).toFixed(2)}
                          </button>
                        </form>
                      </motion.div>
                    )}

                    {payStatus === 'processing' && (
                      <motion.div
                        key="processing"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center py-12 text-center"
                      >
                        <div className="relative w-16 h-16 mb-6">
                          <div className="absolute inset-0 rounded-full border-4 border-[#2D6FD3]/20 border-t-[#2D6FD3] animate-spin"></div>
                        </div>
                        <h4 className="text-white font-bold text-base">Reconciling Transaction</h4>
                        <p className="text-[var(--color-text-muted)] text-xs mt-1">Communicating securely with settlement networks...</p>
                      </motion.div>
                    )}

                    {payStatus === 'success' && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center text-center py-6"
                      >
                        <div className="w-16 h-16 rounded-full bg-[#22E67A]/15 flex items-center justify-center text-[#22E67A] mb-6 green-glow animate-bounce">
                          <CheckCircle2 size={36} className="fill-[#22E67A]/10" />
                        </div>
                        <h4 className="text-white font-black text-xl">Payment Completed!</h4>
                        <p className="text-[var(--color-text-secondary)] text-xs mt-2 max-w-xs leading-relaxed">
                          Your collection request of <strong>₹{parseFloat(amount || 0).toFixed(2)}</strong> from <strong>{payerName}</strong> has been cleared and settled instantly.
                        </p>
                        
                        <div className="mt-6 w-full bg-[#071227]/60 border border-white/5 p-3.5 rounded-xl text-left space-y-1.5 max-w-sm">
                          <div className="flex justify-between text-[10px] text-slate-400">
                            <span>Reference Code</span>
                            <span className="font-mono text-white font-bold">LP_TXN_98F3A2</span>
                          </div>
                          <div className="flex justify-between text-[10px] text-slate-400">
                            <span>Settlement Route</span>
                            <span className="text-[#22E67A] font-bold uppercase">{selectedMethod === 'upi' ? 'UPI_FASTPATH' : 'CARD_DIRECT'}</span>
                          </div>
                        </div>

                        <button
                          onClick={resetDemo}
                          className="mt-6 text-xs font-bold text-[#2D6FD3] hover:text-[#4A90FF] transition-colors"
                        >
                          Simulate Another Payment
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* No-Code Link Generator Tool */}
      <section className="relative z-10 py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-luxury">No-Code Payment Link Generator</h2>
            <p className="text-[var(--color-text-secondary)] text-sm mt-3">
              Need to collect a custom amount? Fill in the details below to generate a live payment link instantly.
            </p>
          </div>

          <div className="card-glass-main card-glow-hover p-6 md:p-8 border border-white/5 relative">
            <form onSubmit={handleCreateLink} className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
              <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Collection Purpose</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Graphic Design Services"
                    className="w-full bg-[#071227] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#2D6FD3]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Default Amount (₹)</label>
                  <input
                    type="number"
                    required
                    placeholder="120.00"
                    className="w-full bg-[#071227] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#2D6FD3]"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#2D6FD3] hover:bg-[#4A90FF] text-white py-3 rounded-lg text-xs font-bold transition-all"
              >
                Generate Collect Link
              </button>
            </form>

            {createdLink && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 bg-[#22E67A]/5 border border-[#22E67A]/25 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                <div className="text-center sm:text-left overflow-hidden w-full">
                  <p className="text-[10px] font-bold text-[#22E67A] uppercase tracking-wider mb-1">Live link generated successfully</p>
                  <p className="text-xs font-mono text-white truncate">{createdLink}</p>
                </div>
                <button
                  onClick={copyLink}
                  className="w-full sm:w-auto bg-[#22E67A] hover:bg-[#38FF8C] text-[#020817] px-5 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 shrink-0"
                >
                  {linkCopied ? <Check size={14} /> : <Copy size={14} />}
                  {linkCopied ? 'Copied!' : 'Copy Payment Link'}
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Operational Flow Diagram */}
      <section className="relative z-10 py-16 border-t border-[var(--color-border-color)]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="glass p-8 md:p-12 rounded-2xl text-center border border-[var(--color-border-color)] shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D6FD3]/5 to-transparent pointer-events-none"></div>
            <h2 className="text-2xl font-extrabold mb-12 text-white">How it works</h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
              <div className="w-24 h-24 rounded-full bg-[#0A1225] flex flex-col items-center justify-center border border-[var(--color-border-color)] z-10 shadow-lg">
                <Users size={20} className="text-[#4A90FF] mb-1" />
                <span className="font-semibold text-[10px] text-white">Customer</span>
              </div>
              <div className="h-[2px] w-full md:w-auto flex-1 bg-gradient-to-r from-[var(--color-border-color)] to-[#2D6FD3] hidden md:block"></div>
              <div className="w-24 h-24 rounded-full bg-[#111B2F] flex flex-col items-center justify-center border border-[#2D6FD3] z-10 blue-glow shadow-lg">
                <Zap size={20} className="text-[#22E67A] mb-1 animate-pulse" />
                <span className="font-semibold text-[10px] text-white">Let's Pay</span>
              </div>
              <div className="h-[2px] w-full md:w-auto flex-1 bg-gradient-to-r from-[#2D6FD3] to-[#22E67A] hidden md:block"></div>
              <div className="w-24 h-24 rounded-full bg-[#0A1225] flex flex-col items-center justify-center border border-[var(--color-border-color)] z-10 shadow-lg">
                <Building2 size={20} className="text-[#fbbf24] mb-1" />
                <span className="font-semibold text-[10px] text-white">Bank Node</span>
              </div>
              <div className="h-[2px] w-full md:w-auto flex-1 bg-gradient-to-r from-[#22E67A] to-[var(--color-border-color)] hidden md:block"></div>
              <div className="w-24 h-24 rounded-full bg-[#111B2F] flex flex-col items-center justify-center border border-[var(--color-border-color)] z-10 shadow-lg">
                <Award size={20} className="text-[#22E67A] mb-1" />
                <span className="font-semibold text-[10px] text-[var(--color-success)] font-bold">Merchant</span>
              </div>
            </div>
            <p className="mt-12 text-[var(--color-text-secondary)] text-sm max-w-2xl mx-auto leading-relaxed">
              Our automated routing matrix automatically checks bank clearing statuses in real-time, executing settlement to your bank account within minutes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
