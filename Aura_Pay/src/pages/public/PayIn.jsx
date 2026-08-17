import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  QrCode, 
  CreditCard, 
  Building2, 
  Zap, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Check,
  Copy,
  Link2,
  Lock,
  Share2,
  Clock,
  ExternalLink,
  Shield
} from 'lucide-react';

export default function PayIn() {
  const [activeTab, setActiveTab] = useState('upi');
  const [customerName, setCustomerName] = useState('Acme Technologies');
  const [payAmount, setPayAmount] = useState('1499.00');
  const [createdLink, setCreatedLink] = useState('');
  const [copied, setCopied] = useState(false);
  const [demoStatus, setDemoStatus] = useState('idle'); // idle, processing, success

  const handleGenerateLink = (e) => {
    e.preventDefault();
    if (!payAmount) return;
    const randomId = Math.random().toString(36).substring(2, 8);
    setCreatedLink(`https://aurapay.me/checkout/inv_${randomId}`);
  };

  const handleCopy = () => {
    if (!createdLink) return;
    navigator.clipboard.writeText(createdLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const triggerSimulatedPay = () => {
    setDemoStatus('processing');
    setTimeout(() => {
      setDemoStatus('success');
    }, 1400);
  };

  const resetDemo = () => {
    setDemoStatus('idle');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#020817] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Copy (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111B2F] border border-[#233452] text-xs text-[#3B82F6] font-bold tracking-widest uppercase">
              <ShieldCheck size={14} /> Enterprise Collections
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Accept Payments <br />
              <span className="text-[#3B82F6]">At Enterprise Scale</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              High-converting checkout architecture for modern businesses. Instant UPI QR generation, multi-card processing, and smart payment links with sub-second callbacks.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a
                href="https://agent.aurapay.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-[#4A90FF] text-white px-8 py-4 rounded-lg text-sm font-bold transition-colors"
              >
                Start Collecting <ArrowRight size={16} />
              </a>
              <Link
                to="/contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#111B2F] hover:bg-[#16243D] text-white border border-[#233452] px-8 py-4 rounded-lg text-sm font-bold transition-colors"
              >
                Talk to Sales
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Ultra-Realistic Enterprise Checkout Simulator (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 lg:pl-4"
          >
            <div className="bg-[#050816] border border-[#233452] rounded-2xl overflow-hidden shadow-2xl">
              
              {/* Checkout Modal Header Bar */}
              <div className="bg-[#111B2F] px-6 py-4 border-b border-[#233452] flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#3B82F6] flex items-center justify-center font-bold text-white text-xs">
                    AP
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold text-white">AuraPay Enterprise</h4>
                      <Shield size={12} className="text-[#3B82F6]" />
                    </div>
                    <p className="text-[10px] text-slate-400 font-mono">Order #AP-884920</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Total Amount</span>
                  <span className="text-base font-bold text-[#22E67A]">₹1,499.00</span>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Method Navigation Pills */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2 bg-[#111B2F] p-1.5 rounded-xl border border-[#233452]">
                  <button
                    onClick={() => { setActiveTab('upi'); resetDemo(); }}
                    className={`py-2 px-1 text-[11px] sm:text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1 sm:gap-2 ${
                      activeTab === 'upi' ? 'bg-[#3B82F6] text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <QrCode size={13} className="shrink-0" /> <span className="truncate">UPI QR</span>
                  </button>
                  <button
                    onClick={() => { setActiveTab('card'); resetDemo(); }}
                    className={`py-2 px-1 text-[11px] sm:text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1 sm:gap-2 ${
                      activeTab === 'card' ? 'bg-[#3B82F6] text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <CreditCard size={13} className="shrink-0" /> <span className="truncate">Cards & NetBanking</span>
                  </button>
                  <button
                    onClick={() => { setActiveTab('link'); resetDemo(); }}
                    className={`py-2 px-1 text-[11px] sm:text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1 sm:gap-2 ${
                      activeTab === 'link' ? 'bg-[#3B82F6] text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Link2 size={13} className="shrink-0" /> <span className="truncate">Collect Link</span>
                  </button>
                </div>

                {/* Tab Content Display */}
                <div className="bg-[#111B2F] border border-[#233452] rounded-xl p-6 min-h-[300px] flex flex-col justify-between">
                  
                  {/* TAB 1: UPI QR */}
                  {activeTab === 'upi' && (
                    <AnimatePresence mode="wait">
                      {demoStatus === 'success' ? (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="my-auto text-center space-y-4 py-4"
                        >
                          <div className="w-16 h-16 bg-[#22E67A]/10 border border-[#22E67A]/30 rounded-full flex items-center justify-center mx-auto text-[#22E67A]">
                            <CheckCircle2 size={36} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">Payment Received!</h3>
                            <p className="text-xs text-slate-400 mt-1">Ref ID: <span className="font-mono text-slate-300">TXN_UPI_98240182</span></p>
                          </div>
                          <div className="bg-[#050816] p-3 rounded-lg border border-[#233452] max-w-xs mx-auto text-xs space-y-1">
                            <div className="flex justify-between text-slate-400"><span>Paid via:</span><span className="text-white font-semibold">Google Pay</span></div>
                            <div className="flex justify-between text-slate-400"><span>Amount:</span><span className="text-[#22E67A] font-bold">₹1,499.00</span></div>
                          </div>
                          <button
                            onClick={resetDemo}
                            className="text-xs text-[#3B82F6] font-bold hover:underline"
                          >
                            ← Reset Simulator
                          </button>
                        </motion.div>
                      ) : (
                        <motion.div key="qr" className="space-y-5 text-center my-auto">
                          {/* Realistic Detailed SVG QR Code */}
                          <div className="relative w-36 h-36 mx-auto bg-white p-3 rounded-2xl shadow-xl border-4 border-[#050816]">
                            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                              {/* Top-Left Finder */}
                              <rect x="5" y="5" width="28" height="28" fill="black" />
                              <rect x="9" y="9" width="20" height="20" fill="white" />
                              <rect x="13" y="13" width="12" height="12" fill="black" />
                              
                              {/* Top-Right Finder */}
                              <rect x="67" y="5" width="28" height="28" fill="black" />
                              <rect x="71" y="9" width="20" height="20" fill="white" />
                              <rect x="75" y="13" width="12" height="12" fill="black" />
                              
                              {/* Bottom-Left Finder */}
                              <rect x="5" y="67" width="28" height="28" fill="black" />
                              <rect x="9" y="71" width="20" height="20" fill="white" />
                              <rect x="13" y="75" width="12" height="12" fill="black" />

                              {/* Data Pattern Elements */}
                              <rect x="38" y="8" width="6" height="6" fill="#3B82F6" />
                              <rect x="48" y="8" width="6" height="6" fill="black" />
                              <rect x="38" y="18" width="6" height="6" fill="black" />
                              <rect x="54" y="18" width="6" height="6" fill="#3B82F6" />
                              <rect x="44" y="28" width="6" height="6" fill="black" />
                              <rect x="54" y="28" width="6" height="6" fill="black" />

                              <rect x="8" y="38" width="6" height="6" fill="black" />
                              <rect x="18" y="48" width="6" height="6" fill="#3B82F6" />
                              <rect x="28" y="38" width="6" height="6" fill="black" />
                              
                              <rect x="38" y="44" width="24" height="24" rx="4" fill="#3B82F6" />
                              <path d="M46 56L50 60L56 50" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>

                              <rect x="68" y="38" width="6" height="6" fill="black" />
                              <rect x="78" y="48" width="6" height="6" fill="black" />
                              <rect x="88" y="38" width="6" height="6" fill="#3B82F6" />
                              <rect x="68" y="78" width="6" height="6" fill="black" />
                              <rect x="78" y="68" width="6" height="6" fill="black" />
                              <rect x="88" y="78" width="6" height="6" fill="black" />
                            </svg>
                          </div>

                          <div>
                            <p className="text-xs text-slate-300 font-medium">Scan & Pay using any UPI app</p>
                            {/* UPI Partner Logos / Badges */}
                            <div className="flex justify-center items-center gap-2 pt-2 text-[10px] font-bold text-slate-400">
                              <span className="bg-[#050816] px-2 py-1 rounded border border-[#233452]">GPay</span>
                              <span className="bg-[#050816] px-2 py-1 rounded border border-[#233452]">PhonePe</span>
                              <span className="bg-[#050816] px-2 py-1 rounded border border-[#233452]">Paytm</span>
                              <span className="bg-[#050816] px-2 py-1 rounded border border-[#233452]">BHIM</span>
                            </div>
                          </div>

                          <div className="pt-2">
                            <button
                              onClick={triggerSimulatedPay}
                              disabled={demoStatus !== 'idle'}
                              className="bg-[#22E67A] hover:bg-[#38FF8C] text-[#020817] px-6 py-3 rounded-lg text-xs font-bold transition-all w-full shadow-lg"
                            >
                              {demoStatus === 'idle' && 'Simulate Successful UPI Scan'}
                              {demoStatus === 'processing' && 'Processing Banking Callback...'}
                            </button>
                            <span className="text-[10px] text-slate-500 flex items-center justify-center gap-1 mt-2">
                              <Clock size={12} /> Dynamic QR expires in <span className="font-mono text-slate-400 font-bold">04:59</span>
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}

                  {/* TAB 2: CARDS */}
                  {activeTab === 'card' && (
                    <div className="space-y-4 my-auto">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-slate-300">Enter Card Details</span>
                        <div className="flex gap-1.5 text-[9px] font-bold text-slate-400">
                          <span className="bg-[#050816] px-2 py-0.5 rounded border border-[#233452]">VISA</span>
                          <span className="bg-[#050816] px-2 py-0.5 rounded border border-[#233452]">Mastercard</span>
                          <span className="bg-[#050816] px-2 py-0.5 rounded border border-[#233452]">RuPay</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <label className="text-[10px] text-slate-400 font-bold uppercase block mb-1">Card Number</label>
                          <div className="relative">
                            <input 
                              type="text" 
                              readOnly 
                              value="4532  ••••  ••••  8892" 
                              className="w-full bg-[#050816] border border-[#233452] text-xs font-mono p-3 rounded-lg text-white" 
                            />
                            <CreditCard size={16} className="absolute right-3 top-3 text-[#3B82F6]" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="text-[10px] text-slate-400 font-bold uppercase block mb-1">Expiry Date</label>
                            <input 
                              type="text" 
                              readOnly 
                              value="08 / 29" 
                              className="w-full bg-[#050816] border border-[#233452] text-xs font-mono p-3 rounded-lg text-white" 
                            />
                          </div>
                          <div>
                            <label className="text-[10px] text-slate-400 font-bold uppercase block mb-1">CVV / CVC</label>
                            <input 
                              type="password" 
                              readOnly 
                              value="•••" 
                              className="w-full bg-[#050816] border border-[#233452] text-xs font-mono p-3 rounded-lg text-white" 
                            />
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={triggerSimulatedPay}
                        disabled={demoStatus !== 'idle'}
                        className="bg-[#3B82F6] hover:bg-[#4A90FF] text-white px-6 py-3 rounded-lg text-xs font-bold transition-all w-full mt-2"
                      >
                        {demoStatus === 'idle' && 'Pay ₹1,499.00 via 3D Secure'}
                        {demoStatus === 'processing' && 'Authorizing with Issuer Bank...'}
                        {demoStatus === 'success' && '✓ Payment Authorized'}
                      </button>
                    </div>
                  )}

                  {/* TAB 3: COLLECT LINK */}
                  {activeTab === 'link' && (
                    <div className="space-y-4 my-auto">
                      <form onSubmit={handleGenerateLink} className="space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="text-[10px] text-slate-400 font-bold uppercase block mb-1">Customer / Entity</label>
                            <input
                              type="text"
                              value={customerName}
                              onChange={(e) => setCustomerName(e.target.value)}
                              className="w-full bg-[#050816] border border-[#233452] text-xs p-2.5 rounded-lg text-white focus:outline-none focus:border-[#3B82F6]"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] text-slate-400 font-bold uppercase block mb-1">Amount (₹)</label>
                            <input
                              type="number"
                              value={payAmount}
                              onChange={(e) => setPayAmount(e.target.value)}
                              className="w-full bg-[#050816] border border-[#233452] text-xs p-2.5 rounded-lg text-white focus:outline-none focus:border-[#3B82F6]"
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-[#3B82F6] hover:bg-[#4A90FF] text-white py-2.5 rounded-lg text-xs font-bold transition-colors"
                        >
                          Generate Custom Payment Link
                        </button>
                      </form>

                      {createdLink && (
                        <div className="bg-[#050816] border border-[#22E67A]/30 p-3 rounded-lg space-y-2 mt-2">
                          <p className="text-[10px] font-bold text-[#22E67A] uppercase tracking-wider">Payment Link Created</p>
                          <div className="flex items-center justify-between gap-2 text-xs">
                            <span className="font-mono text-slate-300 truncate">{createdLink}</span>
                            <button
                              onClick={handleCopy}
                              className="bg-[#22E67A] text-[#020817] p-2 rounded-md font-bold shrink-0 flex items-center gap-1 text-[11px]"
                            >
                              {copied ? <Check size={14} /> : <Copy size={14} />} {copied ? 'Copied' : 'Copy'}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                </div>

                {/* Footer Security Badges */}
                <div className="flex justify-between items-center text-[11px] text-slate-400 pt-2 border-t border-[#233452]">
                  <span className="flex items-center gap-1.5"><Lock size={13} className="text-[#3B82F6]" /> PCI-DSS Level 1 Encrypted</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#22E67A]" /> Instant Settlement</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Payment Channels Grid */}
      <section className="py-20 bg-[#071227] border-t border-b border-[#233452]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Supported Collection Channels</h2>
            <p className="text-slate-400 max-w-xl mx-auto">One single integration unlocks all popular customer payment channels.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#111B2F] border border-[#233452] rounded-2xl p-6 hover:border-[#3B82F6] transition-colors">
              <div className="w-10 h-10 bg-[#020817] border border-[#233452] rounded-xl flex items-center justify-center text-[#3B82F6] mb-4">
                <QrCode size={20} />
              </div>
              <h3 className="font-bold text-lg mb-2">UPI Collections</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Accept payments via GPay, PhonePe, Paytm, and BHIM with dynamic QR generation and instant callback webhooks.
              </p>
            </div>

            <div className="bg-[#111B2F] border border-[#233452] rounded-2xl p-6 hover:border-[#3B82F6] transition-colors">
              <div className="w-10 h-10 bg-[#020817] border border-[#233452] rounded-xl flex items-center justify-center text-[#3B82F6] mb-4">
                <CreditCard size={20} />
              </div>
              <h3 className="font-bold text-lg mb-2">Cards & Debit</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Full support for Visa, Mastercard, RuPay, Diners, and Amex with 3D Secure 2.0 fraud protection built-in.
              </p>
            </div>

            <div className="bg-[#111B2F] border border-[#233452] rounded-2xl p-6 hover:border-[#3B82F6] transition-colors">
              <div className="w-10 h-10 bg-[#020817] border border-[#233452] rounded-xl flex items-center justify-center text-[#3B82F6] mb-4">
                <Building2 size={20} />
              </div>
              <h3 className="font-bold text-lg mb-2">NetBanking & VPA</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Direct integration with 50+ major retail and corporate banks across India for large ticket collections.
              </p>
            </div>

            <div className="bg-[#111B2F] border border-[#233452] rounded-2xl p-6 hover:border-[#8B5CF6] transition-colors">
              <div className="w-10 h-10 bg-[#020817] border border-[#233452] rounded-xl flex items-center justify-center text-[#8B5CF6] mb-4">
                <Link2 size={20} />
              </div>
              <h3 className="font-bold text-lg mb-2">Smart Payment Links</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Send customizable payment links over SMS, Email, or WhatsApp to collect unpaid invoices in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW UNIQUE SECTION: Dynamic Failover & Success Rate Guarantee */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-[#050816] border border-[#233452] rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[#22E67A] font-bold text-xs uppercase tracking-wider block">Conversion Engine</span>
              <h2 className="text-3xl font-bold text-white">Smart Routing Guaranteeing 99.8% Success Rate</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Network downtime will never cost you a customer. AuraPay monitors national banking switches in real-time. If a bank server slows down, transactions are dynamically rerouted to the highest-performing channel instantly.
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="bg-[#111B2F] border border-[#233452] p-5 rounded-2xl">
                <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Zero-Bounce UPI</span>
                <span className="text-xl font-bold text-[#22E67A]">Direct Intent</span>
                <p className="text-xs text-slate-400 mt-1">App-to-app clearance without webview drops.</p>
              </div>
              <div className="bg-[#111B2F] border border-[#233452] p-5 rounded-2xl">
                <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Failover Switch</span>
                <span className="text-xl font-bold text-[#3B82F6]">&lt; 10ms</span>
                <p className="text-xs text-slate-400 mt-1">Automated backup node switching.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="bg-[#111B2F] border border-[#233452] rounded-3xl p-10 text-center space-y-6">
          <h2 className="text-3xl font-bold">Start Accepting Pay-Ins Today</h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Zero setup fees, instant verification, and transparent settlement schedules tailored for your business growth.
          </p>
          <a
            href="https://agent.aurapay.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#4A90FF] text-white px-8 py-3.5 rounded-lg text-sm font-bold transition-colors"
          >
            Create PayIn Account <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
