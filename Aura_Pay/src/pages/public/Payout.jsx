import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Send, 
  Building, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  RefreshCcw,
  Zap,
  FileSpreadsheet,
  Clock,
  Check
} from 'lucide-react';

export default function Payout() {
  const [payoutRoute, setPayoutRoute] = useState('bank');
  const [beneficiaryName, setBeneficiaryName] = useState('Tech Solutions Pvt Ltd');
  const [beneficiaryAccount, setBeneficiaryAccount] = useState('918237461524');
  const [payoutAmount, setPayoutAmount] = useState('12500.00');
  const [status, setStatus] = useState('idle'); // idle, processing, success
  
  const [history, setHistory] = useState([
    { name: 'Vendor Clearance #9012', amount: '₹45,000.00', status: 'Disbursed', time: 'Just now' },
    { name: 'Payroll Batch #FEB2026', amount: '₹1,82,400.00', status: 'Disbursed', time: '10 mins ago' }
  ]);

  const handleDisburse = (e) => {
    e.preventDefault();
    if (!payoutAmount) return;
    setStatus('processing');

    setTimeout(() => {
      setStatus('success');
      setHistory(prev => [
        {
          name: `Payout: ${beneficiaryName}`,
          amount: `₹${parseFloat(payoutAmount).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          status: 'Disbursed',
          time: 'Just now'
        },
        ...prev
      ]);
    }, 1500);
  };

  const resetForm = () => {
    setStatus('idle');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#020817] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111B2F] border border-[#233452] text-xs text-[#22E67A] font-bold tracking-widest uppercase">
              <ShieldCheck size={14} /> Instant Payout Clearance
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Automate Disbursements <br />
              <span className="text-[#22E67A]">24/7 365 Days</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
              Send instant payouts to vendors, contractors, and employee bank accounts via IMPS, NEFT, RTGS, or UPI. Execute bulk payments seamlessly without manual clearance delays.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a
                href="https://agent.aurapay.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#22E67A] hover:bg-[#38FF8C] text-[#020817] px-8 py-4 rounded-lg text-sm font-bold transition-colors"
              >
                Access Payout Portal <ArrowRight size={16} />
              </a>
              <Link
                to="/contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#111B2F] hover:bg-[#16243D] text-white border border-[#233452] px-8 py-4 rounded-lg text-sm font-bold transition-colors"
              >
                Talk to Cashflow Team
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Unique Payout Console Banner */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pl-6"
          >
            <div className="bg-[#050816] border border-[#233452] rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-[#233452] pb-4">
                <div className="flex items-center gap-2">
                  <Send size={18} className="text-[#22E67A]" />
                  <span className="text-xs text-white font-bold tracking-wider">Instant Payout Console</span>
                </div>
                <span className="text-xs bg-[#3B82F6]/10 text-[#3B82F6] px-2.5 py-1 rounded font-bold border border-[#3B82F6]/20">
                  Ready
                </span>
              </div>

              {/* Form Input Container */}
              <form onSubmit={handleDisburse} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => { setPayoutRoute('bank'); resetForm(); }}
                    className={`py-2 text-xs font-bold rounded-lg border transition-colors flex items-center justify-center gap-1.5 ${
                      payoutRoute === 'bank'
                        ? 'bg-[#22E67A] text-[#020817] border-[#22E67A]'
                        : 'bg-[#111B2F] text-slate-400 border-[#233452]'
                    }`}
                  >
                    <Building size={14} /> Bank Account
                  </button>
                  <button
                    type="button"
                    onClick={() => { setPayoutRoute('upi'); resetForm(); }}
                    className={`py-2 text-xs font-bold rounded-lg border transition-colors flex items-center justify-center gap-1.5 ${
                      payoutRoute === 'upi'
                        ? 'bg-[#22E67A] text-[#020817] border-[#22E67A]'
                        : 'bg-[#111B2F] text-slate-400 border-[#233452]'
                    }`}
                  >
                    <Zap size={14} /> UPI ID
                  </button>
                </div>

                <div>
                  <label className="text-[10px] text-slate-400 font-bold uppercase block mb-1">Beneficiary Name</label>
                  <input 
                    type="text" 
                    value={beneficiaryName}
                    onChange={(e) => setBeneficiaryName(e.target.value)}
                    className="w-full bg-[#111B2F] border border-[#233452] text-xs p-2.5 rounded-lg text-white focus:outline-none focus:border-[#22E67A]" 
                  />
                </div>

                <div>
                  <label className="text-[10px] text-slate-400 font-bold uppercase block mb-1">
                    {payoutRoute === 'bank' ? 'Account Number / IFSC' : 'UPI VPA Address'}
                  </label>
                  <input 
                    type="text" 
                    value={beneficiaryAccount}
                    onChange={(e) => setBeneficiaryAccount(e.target.value)}
                    className="w-full bg-[#111B2F] border border-[#233452] text-xs p-2.5 rounded-lg text-white focus:outline-none focus:border-[#22E67A]" 
                  />
                </div>

                <div>
                  <label className="text-[10px] text-slate-400 font-bold uppercase block mb-1">Disbursement Amount (₹)</label>
                  <input 
                    type="number" 
                    value={payoutAmount}
                    onChange={(e) => setPayoutAmount(e.target.value)}
                    className="w-full bg-[#111B2F] border border-[#233452] text-xs p-2.5 rounded-lg text-white focus:outline-none focus:border-[#22E67A]" 
                  />
                </div>

                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className="w-full bg-[#22E67A] hover:bg-[#38FF8C] text-[#020817] py-3 rounded-lg text-xs font-bold transition-colors"
                >
                  {status === 'idle' && 'Disburse Funds Instantly'}
                  {status === 'processing' && 'Clearing via IMPS Relay...'}
                  {status === 'success' && '✓ Funds Sent Successfully!'}
                </button>
              </form>

              {/* Recent Activity Log */}
              <div className="pt-3 border-t border-[#233452] space-y-2">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Live Payout Logs</p>
                <div className="space-y-1.5">
                  {history.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="bg-[#111B2F] p-2.5 rounded-lg flex justify-between items-center text-xs border border-[#233452]">
                      <div>
                        <p className="font-bold text-white text-[11px]">{item.name}</p>
                        <p className="text-[9px] text-slate-400">{item.time}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-[#22E67A] text-[11px]">{item.amount}</p>
                        <span className="text-[9px] text-[#22E67A] font-medium">{item.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Payout Channels & Capabilities */}
      <section className="py-20 bg-[#071227] border-t border-b border-[#233452]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Enterprise Payout Engines</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Built for high-volume vendor settlements and seamless operational cash flow.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#111B2F] border border-[#233452] rounded-2xl p-8 hover:border-[#22E67A] transition-colors">
              <div className="w-10 h-10 bg-[#020817] border border-[#233452] rounded-xl flex items-center justify-center text-[#22E67A] mb-4">
                <Zap size={20} />
              </div>
              <h3 className="font-bold text-lg mb-2">Instant Clearance</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Direct connections to IMPS and UPI payment networks mean funds land in beneficiary accounts in under 3 seconds.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-slate-300">
                <li className="flex items-center gap-2"><Check size={14} className="text-[#22E67A]" /> 24/7 Availability</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-[#22E67A]" /> Automated Retry Logic</li>
              </ul>
            </div>

            <div className="bg-[#111B2F] border border-[#233452] rounded-2xl p-8 hover:border-[#22E67A] transition-colors">
              <div className="w-10 h-10 bg-[#020817] border border-[#233452] rounded-xl flex items-center justify-center text-[#22E67A] mb-4">
                <FileSpreadsheet size={20} />
              </div>
              <h3 className="font-bold text-lg mb-2">Bulk CSV & Excel Upload</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Upload spreadsheets containing thousands of payout entries. Auto-validate bank details before initiating transfers.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-slate-300">
                <li className="flex items-center gap-2"><Check size={14} className="text-[#22E67A]" /> Account Name Verification</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-[#22E67A]" /> Instant Batch Reports</li>
              </ul>
            </div>

            <div className="bg-[#111B2F] border border-[#233452] rounded-2xl p-8 hover:border-[#3B82F6] transition-colors">
              <div className="w-10 h-10 bg-[#020817] border border-[#233452] rounded-xl flex items-center justify-center text-[#3B82F6] mb-4">
                <Clock size={20} />
              </div>
              <h3 className="font-bold text-lg mb-2">Scheduled Payouts</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Set up recurring salary batches, routine vendor payments, or automated end-of-month reconciliation transfers.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-slate-300">
                <li className="flex items-center gap-2"><Check size={14} className="text-[#3B82F6]" /> Automated Scheduling</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-[#3B82F6]" /> Real-time Approval Workflows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NEW UNIQUE SECTION: Payout Security & Fraud Prevention */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-[#050816] border border-[#233452] rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[#3B82F6] font-bold text-xs uppercase tracking-wider block">Security Safeguards</span>
              <h2 className="text-3xl font-bold text-white">Bank Account Validation Before Money Leaves</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Prevent wrong payouts or wrong account entries. AuraPay automatically queries the central banking database to verify the beneficiary’s registered bank name before initiating transfers.
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#111B2F] border border-[#233452] p-5 rounded-2xl">
                <h4 className="font-bold text-white text-sm mb-1">Pre-Clearance Name Check</h4>
                <p className="text-xs text-slate-400">Compares payee name with bank account records before dispatch.</p>
              </div>
              <div className="bg-[#111B2F] border border-[#233452] p-5 rounded-2xl">
                <h4 className="font-bold text-white text-sm mb-1">Dual-Signer Approvals</h4>
                <p className="text-xs text-slate-400">Set custom threshold limits requiring Maker & Checker authorization.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="bg-[#111B2F] border border-[#233452] rounded-3xl p-10 text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Simplify Vendor Disbursals?</h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Experience 99.99% payout reliability with zero manual file processing. Get started with AuraPay Payouts today.
          </p>
          <a
            href="https://agent.aurapay.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#22E67A] hover:bg-[#38FF8C] text-[#020817] px-8 py-3.5 rounded-lg text-sm font-bold transition-colors"
          >
            Open Payout Account <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
