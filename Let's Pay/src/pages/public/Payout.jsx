import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Server, 
  RefreshCcw, 
  Sparkles,
  Send,
  Building,
  Check,
  Download
} from 'lucide-react';

export default function Payout() {
  const [payoutStatus, setPayoutStatus] = useState('idle'); // idle, sending, success
  const [beneficiaryName, setBeneficiaryName] = useState('Tech Solutions Ltd');
  const [payoutAmount, setPayoutAmount] = useState('2850.00');
  const [payoutRoute, setPayoutRoute] = useState('bank'); // bank, upi
  const [beneficiaryDetail, setBeneficiaryDetail] = useState('9876543210 @ Corporate Bank');

  const [registryLogs, setRegistryLogs] = useState([
    { name: 'Vendor Payment - TechCorp', amount: '₹4,500.00', status: 'Processed', time: 'Just now', id: 1 },
    { name: 'Salary Disbursement Batch', amount: '₹28,450.00', status: 'Processed', time: '2 mins ago', id: 2 },
    { name: 'Customer Refund Ref-8092', amount: '₹120.50', status: 'Processed', time: '5 mins ago', id: 3 }
  ]);

  const handleSendPayout = (e) => {
    e.preventDefault();
    if (payoutStatus !== 'idle') return;
    setPayoutStatus('sending');

    setTimeout(() => {
      setPayoutStatus('success');
      // Add to registry logs
      setRegistryLogs(prev => [
        {
          name: `Payout - ${beneficiaryName}`,
          amount: `₹${parseFloat(payoutAmount).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          status: 'Processed',
          time: 'Just now',
          id: Date.now()
        },
        ...prev.slice(0, 2)
      ]);
    }, 1500);
  };

  const resetForm = () => {
    setPayoutStatus('idle');
    setBeneficiaryName('Tech Solutions Ltd');
    setPayoutAmount('2850.00');
    setBeneficiaryDetail('9876543210 @ Corporate Bank');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#020817] pt-32 pb-24 grid-bg">
      {/* Background Radial Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] right-[15%] w-[600px] h-[600px] bg-gradient-to-br from-[#22E67A]/10 to-transparent rounded-full blur-[130px] animate-pulse-soft"></div>
        <div className="absolute top-[50%] left-[5%] w-[500px] h-[500px] bg-gradient-to-br from-[#1E4E8C]/10 to-transparent rounded-full blur-[140px] animate-pulse-soft" style={{ animationDelay: '1.5s' }}></div>
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
            <span className="text-[#22E67A] font-bold tracking-wider uppercase text-[11px] px-4 py-1.5 rounded-full bg-[#22E67A]/10 border border-[#22E67A]/25 mb-2 inline-block">
              <Sparkles size={12} className="inline mr-1 animate-pulse" /> Direct Funds Disbursement
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-luxury">
              Automate Your <span className="text-gradient-success">Disbursements.</span>
            </h1>
            <p className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
              Disburse instant payouts to vendors, process payroll batches, or settle customer refunds 24/7. Manage payouts directly through our secure spreadsheet uploader or instant payout console.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <a href="https://agent.letspay.co.in/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#2D6FD3] hover:bg-[#4A90FF] text-white px-8 py-4 rounded-xl font-bold transition-all blue-glow hover:scale-[1.02] text-center">
                Access Payout Portal
              </a>
              <Link to="/contact" className="w-full sm:w-auto bg-[#111B2F]/80 hover:bg-[#16243D] text-white border border-[#233452] px-8 py-4 rounded-xl font-bold transition-all hover:scale-[1.02] text-center">
                Contact Cashflow Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Features & Interactive Dispatcher */}
      <section className="relative z-10 py-16 bg-[#071227]/40 border-y border-[var(--color-border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Value Prop */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
                  High-Velocity <br />Disbursement Engines.
                </h2>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mt-4">
                  We bridge the gap between bank clearing corridors, providing small businesses with direct, instant payroll and settlement capabilities with complete security.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  { 
                    title: 'Mass CSV Batch Uploads', 
                    desc: 'Upload a simple XLS or CSV file to execute hundreds of payments to suppliers, contractors, and partners at once.',
                    icon: Server 
                  },
                  { 
                    title: 'Smart Fallover Routing', 
                    desc: 'Failed routing paths automatically retry through secondary partner banks so your funds always arrive.',
                    icon: RefreshCcw 
                  },
                  { 
                    title: 'Downloadable Ledger Reports', 
                    desc: 'Instantly download daily logs, transaction history, and custom statement reports to streamline auditing.',
                    icon: Download 
                  }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 w-10 h-10 rounded-xl bg-[#22E67A]/10 border border-[#22E67A]/25 flex items-center justify-center shrink-0 text-[#22E67A]">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1 tracking-tight text-sm">{item.title}</h4>
                        <p className="text-[var(--color-text-muted)] text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Interactive Mockup Dispatcher */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              
              {/* Dispatch Form (md:col-span-6) */}
              <div className="md:col-span-6 card-glass-main card-glow-hover p-6 border border-white/5 flex flex-col justify-between relative">
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#22E67A] to-transparent"></div>
                
                <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-1.5">
                  <Send size={14} className="text-[#22E67A]" /> Instant Dispatcher
                </h3>

                <AnimatePresence mode="wait">
                  {payoutStatus === 'idle' && (
                    <motion.form 
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSendPayout} 
                      className="space-y-4"
                    >
                      <div>
                        <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Beneficiary Name</label>
                        <input 
                          type="text"
                          required
                          value={beneficiaryName}
                          onChange={(e) => setBeneficiaryName(e.target.value)}
                          className="w-full bg-[#071227] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#22E67A]"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => { setPayoutRoute('bank'); setBeneficiaryDetail('9876543210 @ Corporate Bank'); }}
                          className={`p-2.5 rounded-lg border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                            payoutRoute === 'bank' ? 'border-[#22E67A] bg-[#22E67A]/5 text-white' : 'border-white/5 bg-[#071227]/40 text-slate-400'
                          }`}
                        >
                          <Building size={14} />
                          <span className="text-[9px] font-bold">Bank Transfer</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => { setPayoutRoute('upi'); setBeneficiaryDetail('vendor@okaxis'); }}
                          className={`p-2.5 rounded-lg border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                            payoutRoute === 'upi' ? 'border-[#22E67A] bg-[#22E67A]/5 text-white' : 'border-white/5 bg-[#071227]/40 text-slate-400'
                          }`}
                        >
                          <Send size={14} />
                          <span className="text-[9px] font-bold">UPI ID</span>
                        </button>
                      </div>

                      <div>
                        <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Destination Detail</label>
                        <input 
                          type="text"
                          required
                          value={beneficiaryDetail}
                          onChange={(e) => setBeneficiaryDetail(e.target.value)}
                          className="w-full bg-[#071227] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#22E67A]"
                        />
                      </div>

                      <div>
                        <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Amount (₹)</label>
                        <input 
                          type="number"
                          required
                          value={payoutAmount}
                          onChange={(e) => setPayoutAmount(e.target.value)}
                          className="w-full bg-[#071227] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#22E67A]"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#22E67A] text-[#020817] hover:bg-[#38FF8C] py-2.5 rounded-xl text-xs font-bold transition-all green-glow"
                      >
                        Disburse Payout
                      </button>
                    </motion.form>
                  )}

                  {payoutStatus === 'sending' && (
                    <motion.div
                      key="sending"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-12 text-center h-full"
                    >
                      <div className="relative w-12 h-12 mb-4">
                        <div className="absolute inset-0 rounded-full border-4 border-[#22E67A]/20 border-t-[#22E67A] animate-spin"></div>
                      </div>
                      <h4 className="text-white font-bold text-xs">Clearing Payout</h4>
                      <p className="text-[var(--color-text-muted)] text-[10px] mt-1">Direct bank clearance routing in progress...</p>
                    </motion.div>
                  )}

                  {payoutStatus === 'success' && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center text-center py-6 h-full"
                    >
                      <div className="w-12 h-12 rounded-full bg-[#22E67A]/15 flex items-center justify-center text-[#22E67A] mb-4 green-glow animate-bounce">
                        <Check size={20} />
                      </div>
                      <h4 className="text-white font-bold text-sm">Disbursement Completed!</h4>
                      <p className="text-slate-400 text-[10px] mt-1 max-w-xs leading-relaxed">
                        Funds of <strong>₹{parseFloat(payoutAmount).toFixed(2)}</strong> sent to <strong>{beneficiaryName}</strong>.
                      </p>
                      
                      <button
                        onClick={resetForm}
                        className="mt-6 text-[10px] font-bold text-[#22E67A] hover:text-[#38FF8C] transition-colors"
                      >
                        Create Another Payout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Live Registry Logs (md:col-span-6) */}
              <div className="md:col-span-6 card-glass-main card-glow-hover p-6 border border-white/5 flex flex-col justify-between">
                <div className="flex justify-between items-center mb-4 pb-2 border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#22E67A] animate-pulse"></span>
                    <span className="font-bold text-white text-xs">Registry Logs</span>
                  </div>
                  <span className="text-[9px] text-[var(--color-text-muted)] font-bold uppercase tracking-wider">Live View</span>
                </div>

                <div className="space-y-3 flex-1 overflow-y-auto max-h-[220px] pr-1">
                  <AnimatePresence initial={false}>
                    {registryLogs.map((tx) => (
                      <motion.div 
                        key={tx.id} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-[#071227]/40 p-3 rounded-lg border border-white/5 flex justify-between items-center"
                      >
                        <div className="overflow-hidden mr-2">
                          <p className="text-[11px] font-bold text-white truncate">{tx.name}</p>
                          <p className="text-[9px] text-[var(--color-text-muted)] mt-0.5">{tx.time}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-[11px] font-bold text-white">{tx.amount}</p>
                          <p className="text-[8px] font-bold text-[#22E67A] mt-0.5 uppercase">{tx.status}</p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex justify-between text-[10px] text-slate-400">
                  <span>Clearing Speed SLA:</span>
                  <span className="text-white font-bold">&lt; 2 Minutes</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Security details section */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-glass-main card-glow-hover p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 border border-white/5">
            <div className="text-center md:text-left">
              <span className="w-8 h-8 rounded-full bg-[#22E67A]/10 text-[#22E67A] flex items-center justify-center mb-4 mx-auto md:mx-0 font-bold text-xs">1</span>
              <h3 className="text-white font-bold mb-2 text-sm">Escrow Wallet Protection</h3>
              <p className="text-[var(--color-text-muted)] text-[11px] leading-relaxed">
                Vault payout accounts are completely locked down via Multi-Factor Authorizations (MFA) and whitelist approvals.
              </p>
            </div>
            <div className="text-center md:text-left">
              <span className="w-8 h-8 rounded-full bg-[#2D6FD3]/10 text-[#2D6FD3] flex items-center justify-center mb-4 mx-auto md:mx-0 font-bold text-xs">2</span>
              <h3 className="text-white font-bold mb-2 text-sm">Approval Controls</h3>
              <p className="text-[var(--color-text-muted)] text-[11px] leading-relaxed">
                Setup multi-signature approval rules to ensure payout lists are reviewed and authorized by designated stakeholders.
              </p>
            </div>
            <div className="text-center md:text-left">
              <span className="w-8 h-8 rounded-full bg-[#fbbf24]/10 text-[#fbbf24] flex items-center justify-center mb-4 mx-auto md:mx-0 font-bold text-xs">3</span>
              <h3 className="text-white font-bold mb-2 text-sm">Instant Audit Rails</h3>
              <p className="text-[var(--color-text-muted)] text-[11px] leading-relaxed">
                Every disbursement is automatically logged with a bank reference code (RRN) to support accounting reconciliations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
