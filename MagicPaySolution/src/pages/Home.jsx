import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Play, Server, 
  ShieldCheck, Zap, HelpCircle, ArrowUpRight, Code, 
  Lock, Globe, Check, Landmark, CreditCard, Smartphone
} from 'lucide-react';

export default function Home() {
  const [activeDashboardTab, setActiveDashboardTab] = useState('payins');
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "What services does Magic Pay Solution offer?",
      a: "We offer end-to-end payment infrastructure including Payin (payment gateway to accept cards, UPI, net banking), Payout (bulk automated settlements, vendor payouts, salary disburser), and BBPS (Bharat Bill Payment System integration for multi-utility bill processing)."
    },
    {
      q: "How fast are payout settlements processed?",
      a: "Our payout routing network connects directly to multiple partner banks to deliver instant 24/7 settlements via IMPS, UPI, and NEFT, bypassing typical bank delays."
    },
    {
      q: "Is Magic Pay Solution PCI-DSS compliant?",
      a: "Yes, Magic Pay Solution meets strict bank-grade standards. We are fully PCI-DSS Level 1 compliant, utilizing end-to-end payload encryption and secure tokenization protocols."
    },
    {
      q: "Can we integrate BBPS into our existing platform?",
      a: "Absolutely. Our BBPS integration is designed with standard developer SDKs and REST APIs, allowing platforms to launch recharge and utility bills (electricity, water, gas) in under 48 hours."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 border-b border-slate-100 tech-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Copy */}
            <div className="lg:col-span-7 space-y-8 text-left animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-slate-100 border border-slate-200 px-3.5 py-1.5 rounded-full hover:border-royal-500 hover:bg-slate-50 transition-all duration-300">
                <span className="w-2 h-2 rounded-full bg-royal-600 animate-pulse"></span>
                <span className="text-xs font-semibold text-navy-900 tracking-wider uppercase">
                  Enterprise Payment Rails
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight">
                Next-Gen Payment Infrastructure For Modern Enterprise
              </h1>
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                Supercharge your business operations with highly-optimized UPI payins, instant automated bulk payouts, and comprehensive BBPS utility bill integrations. Designed for speed, scale, and trust.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="https://agent.magicpaysolution.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-royal-600 hover:bg-navy-900 rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-sm active:scale-95 cursor-pointer"
                >
                  Start Integrating
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-navy-900 bg-slate-50 border border-slate-200 hover:bg-slate-100 rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-95"
                >
                  Contact Sales
                </Link>
              </div>

              {/* Simple Trust Banner */}
              <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-4">
                <div className="hover:translate-x-1 transition-transform duration-300">
                  <p className="text-xl font-bold text-navy-900">99.98%</p>
                  <p className="text-xs text-slate-500 font-medium">Core API Uptime</p>
                </div>
                <div className="hover:translate-x-1 transition-transform duration-300 delay-75">
                  <p className="text-xl font-bold text-navy-900">250ms</p>
                  <p className="text-xs text-slate-500 font-medium">Avg. Settlement Speed</p>
                </div>
                <div className="hover:translate-x-1 transition-transform duration-300 delay-150">
                  <p className="text-xl font-bold text-navy-900">PCI-DSS</p>
                  <p className="text-xs text-slate-500 font-medium">Certified Secure</p>
                </div>
              </div>
            </div>

            {/* Hero Dashboard Preview */}
            <div className="lg:col-span-5 relative animate-slide-in-right delay-200">
              <div className="bg-white border border-slate-200 rounded-xl premium-shadow p-6 space-y-6 relative z-10 animate-float">
                {/* Header */}
                <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-royal-600 animate-pulse"></div>
                    <span className="font-semibold text-navy-900 text-sm">Live System Performance</span>
                  </div>
                  <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2.5 py-1 rounded animate-pulse">
                    Active
                  </span>
                </div>

                {/* Performance Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 border border-slate-100 rounded-lg p-4 text-left hover:border-royal-500 transition-colors duration-350">
                    <p className="text-xs text-slate-500 font-medium">Payin Success</p>
                    <p className="text-lg font-bold text-navy-900 mt-1">99.92%</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-lg p-4 text-left hover:border-royal-500 transition-colors duration-350">
                    <p className="text-xs text-slate-500 font-medium">Payout Velocity</p>
                    <p className="text-lg font-bold text-navy-900 mt-1">Instant</p>
                  </div>
                </div>

                {/* Live Transactions Widget */}
                <div className="space-y-3 text-left">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Recent Payout Volume
                  </span>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2.5 bg-slate-50 border border-slate-100 rounded-lg text-xs hover:-translate-y-0.5 transition-transform duration-200">
                      <div className="flex items-center space-x-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
                        <span className="font-semibold text-navy-900">Telangana Corp Settlement</span>
                      </div>
                      <span className="font-bold text-navy-900">₹8,49,200</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-slate-50 border border-slate-100 rounded-lg text-xs hover:-translate-y-0.5 transition-transform duration-200">
                      <div className="flex items-center space-x-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                        <span className="font-semibold text-navy-900">UPI Payin Collection</span>
                      </div>
                      <span className="font-bold text-navy-900">₹1,20,000</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-slate-50 border border-slate-100 rounded-lg text-xs hover:-translate-y-0.5 transition-transform duration-200">
                      <div className="flex items-center space-x-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                        <span className="font-semibold text-navy-900">BBPS Bill Gas Utility</span>
                      </div>
                      <span className="font-bold text-navy-900">₹14,500</span>
                    </div>
                  </div>
                </div>

                {/* CTA Mini link */}
                <div className="pt-2">
                  <Link
                    to="/payout"
                    className="w-full flex items-center justify-center py-2.5 text-xs font-semibold text-white bg-navy-900 hover:bg-royal-600 rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-sm"
                  >
                    Manage Funds
                    <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
              
              {/* Outer decorative borders to give the enterprise feel */}
              <div className="absolute -inset-2 border border-slate-100 rounded-2xl pointer-events-none -z-0"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Powerful Core Services Built For Enterprise Scale
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We specialize in the high-volume pillars of financial technology. Accept payments seamlessly, distribute settlements instantly, and support utility payments natively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Service 1: Payin */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 text-left premium-shadow-hover flex flex-col justify-between animate-fade-in-up delay-100">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-blue-50 border border-blue-100 flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <CreditCard className="h-6 w-6 text-royal-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900">Payin Solutions</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Accept instant customer payments using UPI, Cards, Net Banking, and Wallet integrations. High throughput pipelines and smart dynamic routing engine.
                </p>
                <ul className="space-y-2.5">
                  {['UPI Deep Link & Intents', 'Credit/Debit Card Processing', 'Smart Dynamic Redirection', 'Automated Dispute Redressal'].map((item) => (
                    <li key={item} className="flex items-center space-x-2 text-xs text-slate-600 hover:translate-x-1 transition-transform duration-200">
                      <Check className="h-4 w-4 text-royal-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8">
                <Link
                  to="/payin"
                  className="inline-flex items-center text-sm font-semibold text-royal-600 hover:text-navy-900 transition-colors group"
                >
                  Explore Payin
                  <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Service 2: Payout */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 text-left premium-shadow-hover flex flex-col justify-between animate-fade-in-up delay-200">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-blue-50 border border-blue-100 flex items-center justify-center rounded-lg">
                  <Landmark className="h-6 w-6 text-royal-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900">Payout Services</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Automate disbursement of vendor settlements, salaries, cashbacks, and instant refunds. Connect to bank rails directly to execute instant transactions 24/7/365.
                </p>
                <ul className="space-y-2.5">
                  {['Bulk IMPS/NEFT Transfers', 'Automated Vendor Onboarding', 'Smart Ledger Management', 'Automated Beneficiary Verification'].map((item) => (
                    <li key={item} className="flex items-center space-x-2 text-xs text-slate-600 hover:translate-x-1 transition-transform duration-200">
                      <Check className="h-4 w-4 text-royal-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8">
                <Link
                  to="/payout"
                  className="inline-flex items-center text-sm font-semibold text-royal-600 hover:text-navy-900 transition-colors group"
                >
                  Explore Payout
                  <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Service 3: BBPS */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 text-left premium-shadow-hover flex flex-col justify-between animate-fade-in-up delay-300">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-blue-50 border border-blue-100 flex items-center justify-center rounded-lg">
                  <Smartphone className="h-6 w-6 text-royal-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900">BBPS biller Network</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Integrate NPCI authorized Bharat Bill Payment System framework into your apps. Access 20,000+ local billers across electricity, broadband, water, and insurance.
                </p>
                <ul className="space-y-2.5">
                  {['Instant Bill Discovery API', 'Recharge & DTH Infrastructure', 'Reliable Auto-payment Reminders', 'Standard Compliance Logging'].map((item) => (
                    <li key={item} className="flex items-center space-x-2 text-xs text-slate-600 hover:translate-x-1 transition-transform duration-200">
                      <Check className="h-4 w-4 text-royal-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8">
                <Link
                  to="/bbps"
                  className="inline-flex items-center text-sm font-semibold text-royal-600 hover:text-navy-900 transition-colors group"
                >
                  Explore BBPS
                  <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Merchant Control Center Section (Replaced Developer API Section) */}
      <section className="py-20 bg-white border-b border-slate-100 fintech-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Info Column */}
            <div className="lg:col-span-5 text-left space-y-6 animate-fade-in-up">
              <div className="w-12 h-12 bg-blue-50 border border-blue-100 flex items-center justify-center rounded-lg">
                <Server className="h-6 w-6 text-royal-600 animate-pulse" />
              </div>
              <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight">
                Unified Merchant Control Center
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Manage all your financial operations in one premium, easy-to-use interface. We replace technical complexity with a unified control desk to oversee payment collections, vendor transfers, and utility clearing on-the-fly.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-sm text-slate-700 font-medium hover:translate-x-1 transition-transform">
                  <CheckCircle2 className="h-5 w-5 text-royal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-navy-900 block">No Code Required</span>
                    <span className="text-xs text-slate-500">Run your payouts, collections, and BBPS recharges directly from our user-friendly merchant panel.</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3 text-sm text-slate-700 font-medium hover:translate-x-1 transition-transform">
                  <CheckCircle2 className="h-5 w-5 text-royal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-navy-900 block">Visual Analytics & Reports</span>
                    <span className="text-xs text-slate-500">Filter transactions by state, download spreadsheet sheets, and audit settlements with instant visual charts.</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3 text-sm text-slate-705 font-medium hover:translate-x-1 transition-transform">
                  <CheckCircle2 className="h-5 w-5 text-royal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-navy-900 block">Sub-Merchant & Operator Desks</span>
                    <span className="text-xs text-slate-500">Delegate tasks to team members with specialized access keys for billing, recharges, or cash management.</span>
                  </div>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-5 py-3.5 text-sm font-semibold text-white bg-navy-900 hover:bg-royal-600 rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-sm"
                >
                  Request Merchant Demo
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Dashboard Mockup Column */}
            <div className="lg:col-span-7 bg-navy-950 border border-slate-900 rounded-xl overflow-hidden premium-shadow animate-slide-in-right">
              {/* Tab Selector */}
              <div className="flex border-b border-slate-800/80 bg-slate-950/80 px-4 py-3">
                <div className="flex space-x-2 mr-auto items-center">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  <span className="text-[10px] font-mono text-slate-500 ml-3 uppercase tracking-widest font-semibold">MagicPay-Portal v1.2</span>
                </div>
                <div className="flex space-x-2">
                  {[
                    { id: 'payins', label: 'Collections' },
                    { id: 'payouts', label: 'Disbursements' },
                    { id: 'bbps', label: 'Utility Desk' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveDashboardTab(tab.id)}
                      className={`text-xs font-semibold px-3 py-1.5 rounded transition-all cursor-pointer ${
                        activeDashboardTab === tab.id 
                          ? 'bg-royal-600 text-white shadow-md' 
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Interactive Dashboard Content */}
              <div className="p-6 space-y-5 text-left font-sans">
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-3">
                    <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Settled (Today)</span>
                    <p className="text-sm font-bold text-white mt-0.5">
                      {activeDashboardTab === 'payins' ? '₹4,82,900' : activeDashboardTab === 'payouts' ? '₹12,40,000' : '₹45,200'}
                    </p>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-3">
                    <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Active Rails</span>
                    <p className="text-sm font-bold text-royal-400 mt-0.5">
                      {activeDashboardTab === 'payins' ? 'UPI / Cards' : activeDashboardTab === 'payouts' ? 'IMPS / NEFT' : 'NPCI Grid'}
                    </p>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-3">
                    <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">System State</span>
                    <span className="inline-flex items-center text-[10px] font-bold text-emerald-400 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-ping"></span>
                      99.98%
                    </span>
                  </div>
                </div>

                {/* Table Mock */}
                <div className="bg-slate-900/50 border border-slate-800/80 rounded-lg overflow-hidden">
                  <div className="bg-slate-950/50 px-4 py-2 flex justify-between border-b border-slate-800/80 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <span>Transaction / Item</span>
                    <span>Status</span>
                    <span className="text-right">Amount</span>
                  </div>
                  
                  <div className="divide-y divide-slate-800/60 text-xs text-slate-300">
                    {activeDashboardTab === 'payins' && (
                      <>
                        <div className="px-4 py-3 flex justify-between items-center hover:bg-slate-900/30 transition-colors duration-200">
                          <div>
                            <p className="font-semibold text-white">UPI Payin (txn_92k821)</p>
                            <p className="text-[10px] text-slate-500">Retail customer payment &bull; VPA: suresh@okhdfc</p>
                          </div>
                          <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-900/60 font-semibold px-2 py-0.5 rounded">Completed</span>
                          <span className="font-bold text-white">₹1,500.00</span>
                        </div>
                        <div className="px-4 py-3 flex justify-between items-center hover:bg-slate-900/30 transition-colors duration-200">
                          <div>
                            <p className="font-semibold text-white">Credit Card (txn_77v101)</p>
                            <p className="text-[10px] text-slate-500">Visa ending in 4022 &bull; Auth Token secure</p>
                          </div>
                          <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-900/60 font-semibold px-2 py-0.5 rounded">Completed</span>
                          <span className="font-bold text-white">₹14,990.00</span>
                        </div>
                        <div className="px-4 py-3 flex justify-between items-center hover:bg-slate-900/30 transition-colors duration-200">
                          <div>
                            <p className="font-semibold text-white">Netbanking Redirection</p>
                            <p className="text-[10px] text-slate-500">HDFC Direct Gateway &bull; Pending bank settlement</p>
                          </div>
                          <span className="text-[10px] bg-yellow-950 text-yellow-400 border border-yellow-900/60 font-semibold px-2 py-0.5 rounded animate-pulse">Routing</span>
                          <span className="font-bold text-white">₹8,500.00</span>
                        </div>
                      </>
                    )}

                    {activeDashboardTab === 'payouts' && (
                      <>
                        <div className="px-4 py-3 flex justify-between items-center hover:bg-slate-900/30 transition-colors duration-200">
                          <div>
                            <p className="font-semibold text-white">Vendor Transfer (IMPS)</p>
                            <p className="text-[10px] text-slate-500">Acme Supplier Hub &bull; A/C: 91827364501</p>
                          </div>
                          <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-900/60 font-semibold px-2 py-0.5 rounded">Disbursed</span>
                          <span className="font-bold text-white">₹4,25,000.00</span>
                        </div>
                        <div className="px-4 py-3 flex justify-between items-center hover:bg-slate-900/30 transition-colors duration-200">
                          <div>
                            <p className="font-semibold text-white">Contractor Salary (UPI)</p>
                            <p className="text-[10px] text-slate-500">Batch salary run #12 &bull; VPA: dev@upi</p>
                          </div>
                          <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-900/60 font-semibold px-2 py-0.5 rounded">Disbursed</span>
                          <span className="font-bold text-white">₹45,000.00</span>
                        </div>
                        <div className="px-4 py-3 flex justify-between items-center hover:bg-slate-900/30 transition-colors duration-200">
                          <div>
                            <p className="font-semibold text-white">Refund Dispatch (NEFT)</p>
                            <p className="text-[10px] text-slate-500">Customer return compensation &bull; ID: ref_882</p>
                          </div>
                          <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-900/60 font-semibold px-2 py-0.5 rounded">Disbursed</span>
                          <span className="font-bold text-white">₹3,400.00</span>
                        </div>
                      </>
                    )}

                    {activeDashboardTab === 'bbps' && (
                      <>
                        <div className="px-4 py-3 flex justify-between items-center hover:bg-slate-900/30 transition-colors duration-200">
                          <div>
                            <p className="font-semibold text-white">BSES Yamuna Electricity</p>
                            <p className="text-[10px] text-slate-500">Consumer: Rajesh Kumar &bull; ID: 100827364</p>
                          </div>
                          <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-900/60 font-semibold px-2 py-0.5 rounded">Settled</span>
                          <span className="font-bold text-white">₹3,420.00</span>
                        </div>
                        <div className="px-4 py-3 flex justify-between items-center hover:bg-slate-900/30 transition-colors duration-200">
                          <div>
                            <p className="font-semibold text-white">Delhi Jal Board (Water)</p>
                            <p className="text-[10px] text-slate-500">Consumer: Rajesh Kumar &bull; ID: 100827364</p>
                          </div>
                          <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-900/60 font-semibold px-2 py-0.5 rounded">Settled</span>
                          <span className="font-bold text-white">₹680.00</span>
                        </div>
                        <div className="px-4 py-3 flex justify-between items-center hover:bg-slate-900/30 transition-colors duration-200">
                          <div>
                            <p className="font-semibold text-white">Airtel Fiber (Broadband)</p>
                            <p className="text-[10px] text-slate-500">Consumer: Rajesh Kumar &bull; ID: 100827364</p>
                          </div>
                          <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-900/60 font-semibold px-2 py-0.5 rounded">Settled</span>
                          <span className="font-bold text-white">₹999.00</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us & Trust Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Enterprise Infrastructure Built On Security & Resilience
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Leading finance operations demand security and transparency. Magic Pay guarantees secure pipelines verified by international protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-xl p-8 text-left space-y-4 premium-shadow-hover animate-fade-in-up delay-100">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 flex items-center justify-center rounded-lg">
                <ShieldCheck className="h-6 w-6 text-accent-emerald" />
              </div>
              <h3 className="text-lg font-bold text-navy-900">Military-Grade Security</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Utilizing SHA-256 data payload encryption, secure token hashing systems, and full TLS protection across every request packet.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-8 text-left space-y-4 premium-shadow-hover animate-fade-in-up delay-200">
              <div className="w-12 h-12 bg-blue-50 border border-blue-100 flex items-center justify-center rounded-lg">
                <Server className="h-6 w-6 text-royal-600" />
              </div>
              <h3 className="text-lg font-bold text-navy-900">Multi-Bank Redundancy</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Transactions automatically switch routes when a direct bank node experiences high latency, ensuring continuous operations.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-8 text-left space-y-4 premium-shadow-hover animate-fade-in-up delay-300">
              <div className="w-12 h-12 bg-cyan-50 border border-cyan-100 flex items-center justify-center rounded-lg">
                <Globe className="h-6 w-6 text-accent-cyan" />
              </div>
              <h3 className="text-lg font-bold text-navy-900">Scalable Architecture</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Built to sustain sudden request spikes during month-ends and promotional seasons without database deadlock delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600">
              Clear answers to the most common queries about our payments architecture.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className="bg-white border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 animate-fade-in-up delay-100"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left font-semibold text-navy-900 hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <HelpCircle className={`h-5 w-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-royal-600' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-sm text-slate-600 border-t border-slate-100 bg-slate-50/50 leading-relaxed animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Action Banner */}
      <section className="bg-navy-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Revolutionize Your Payment Infrastructure?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Get in touch with our enterprise integrations team. Create a sandbox developer account and experience transaction settlement latency under 200ms today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-navy-950 bg-white hover:bg-slate-100 rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-sm"
            >
              Contact Sales Team
              <ArrowRight className="ml-2 h-4 w-4 text-navy-950" />
            </Link>
            <a
              href="https://agent.magicpaysolution.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white bg-royal-600 hover:bg-royal-500 rounded-lg transition-all duration-300 hover:scale-[1.02] border border-transparent shadow-sm cursor-pointer"
            >
              Get Merchant Portal
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
