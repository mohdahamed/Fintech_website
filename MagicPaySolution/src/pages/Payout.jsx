import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Landmark, Users, Calculator, ShieldCheck, Zap, 
  ArrowRight, Check, Send, Download, HelpCircle
} from 'lucide-react';

export default function Payout() {
  // Calculator State
  const [monthlyVolume, setMonthlyVolume] = useState(500000); // INR
  const [payoutCount, setPayoutCount] = useState(250);

  const calculateFees = () => {
    let feePerTxn = 8.00;
    if (monthlyVolume > 5000000) {
      feePerTxn = 4.50;
    } else if (monthlyVolume > 2000000) {
      feePerTxn = 6.00;
    }

    const estimatedFees = payoutCount * feePerTxn;
    const traditionalBankFees = payoutCount * 15.00; // Traditional bank charge
    const monthlySavings = traditionalBankFees - estimatedFees;

    return {
      feePerTxn: feePerTxn.toFixed(2),
      estimatedFees: estimatedFees.toFixed(2),
      monthlySavings: monthlySavings.toFixed(2)
    };
  };

  const { feePerTxn, estimatedFees, monthlySavings } = calculateFees();

  const payoutUseCases = [
    {
      title: "Automated Vendor Settlements",
      desc: "Disburse payments to your marketplace sellers or suppliers automatically. Supported with detailed invoice attachment mapping.",
      icon: Landmark
    },
    {
      title: "Salary Disbursements",
      desc: "Upload simple CSV templates or trigger our payouts API to process employee salary payments instantly, even on public holidays.",
      icon: Users
    },
    {
      title: "Instant Refunds & Cashbacks",
      desc: "Delight your clients by dispatching product return refunds instantly directly to their UPI handles or active bank accounts.",
      icon: Zap
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-16 text-left relative tech-dots-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-slate-800 border border-slate-700 px-3 py-1 rounded-full hover:border-royal-500 transition-all duration-300">
              <span className="w-2 h-2 rounded-full bg-royal-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Payout infrastructure
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Automated Bulk Payout Engines
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Disburse payments to vendors, contractors, and employees instantly. Eliminate banking delays with our automated routing network built on top-tier direct bank APIs.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {payoutUseCases.map((useCase, idx) => {
            const Icon = useCase.icon;
            const staggerDelay = `delay-${(idx + 1) * 100}`;
            return (
              <div key={idx} className={`bg-white border border-slate-200 rounded-xl p-8 text-left space-y-4 premium-shadow premium-shadow-hover animate-fade-in-up ${staggerDelay}`}>
                <div className="w-12 h-12 bg-blue-50 border border-blue-100 flex items-center justify-center rounded-lg">
                  <Icon className="h-6 w-6 text-royal-600" />
                </div>
                <h3 className="text-lg font-bold text-navy-900">{useCase.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{useCase.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Info Column */}
            <div className="lg:col-span-5 text-left space-y-6 animate-fade-in-up">
              <div className="w-12 h-12 bg-blue-50 border border-blue-100 flex items-center justify-center rounded-lg">
                <Calculator className="h-6 w-6 text-royal-600" />
              </div>
              <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight">
                Calculate Payout Savings
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Estimate your custom processing fees in real-time. Unlike traditional banking setups that charge high flat premiums, Magic Pay uses volume-based pricing brackets to ensure you pay less as you scale.
              </p>
              <ul className="space-y-3 text-sm text-slate-700 font-semibold">
                <li className="flex items-center space-x-2.5 hover:translate-x-1 transition-transform">
                  <Check className="h-5 w-5 text-royal-600" />
                  <span>No hidden bank communication charges</span>
                </li>
                <li className="flex items-center space-x-2.5 hover:translate-x-1 transition-transform">
                  <Check className="h-5 w-5 text-royal-600" />
                  <span>Free beneficiary verification checks</span>
                </li>
                <li className="flex items-center space-x-2.5 hover:translate-x-1 transition-transform">
                  <Check className="h-5 w-5 text-royal-600" />
                  <span>Integrated batch CSV payout processing</span>
                </li>
              </ul>
            </div>

            {/* Interactive Calculator Panel */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 md:p-8 premium-shadow text-left animate-slide-in-right">
              <div className="space-y-6">
                
                {/* Sliders */}
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Monthly Payout Volume
                      </label>
                      <span className="text-sm font-bold text-navy-900">
                        ₹{monthlyVolume.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="100000"
                      max="10000000"
                      step="100000"
                      value={monthlyVolume}
                      onChange={(e) => setMonthlyVolume(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-royal-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Monthly Transaction Count
                      </label>
                      <span className="text-sm font-bold text-navy-900">
                        {payoutCount} Trans.
                      </span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="5000"
                      step="50"
                      value={payoutCount}
                      onChange={(e) => setPayoutCount(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-royal-600"
                    />
                  </div>
                </div>

                {/* Calculation Outputs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
                  <div className="bg-slate-50 border border-slate-100 p-4 rounded-lg hover:border-royal-500 transition-colors duration-200">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Fee Per Payout</p>
                    <p className="text-lg font-bold text-navy-900 mt-1">₹{feePerTxn}</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 p-4 rounded-lg hover:border-royal-500 transition-colors duration-200">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Estimated Total Fee</p>
                    <p className="text-lg font-bold text-navy-900 mt-1">₹{parseFloat(estimatedFees).toLocaleString('en-IN')}</p>
                  </div>
                  <div className="bg-royal-600 border border-royal-600 p-4 rounded-lg text-white hover:scale-105 transition-transform duration-300 shadow-md">
                    <p className="text-[10px] text-white/80 font-bold uppercase tracking-wider font-semibold">Estimated Savings</p>
                    <p className="text-lg font-bold text-white mt-1">₹{parseFloat(monthlySavings).toLocaleString('en-IN')}</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Payout Bulk Manager Section (Replaced API section) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="bg-navy-950 border border-slate-900 rounded-xl p-6 text-slate-350 font-sans text-xs animate-fade-in-up">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Bulk Transfer Manager</span>
              <span className="bg-royal-950 text-royal-400 border border-royal-900/60 text-[10px] font-bold px-2 py-0.5 rounded">Ready to Send</span>
            </div>
            
            <div className="space-y-4">
              {/* Drag and Drop Zone */}
              <div className="border border-dashed border-slate-800 rounded-lg p-5 text-center bg-slate-900/30 flex flex-col items-center justify-center space-y-2">
                <Download className="h-6 w-6 text-royal-400 animate-bounce" />
                <div>
                  <p className="text-[11px] font-semibold text-white">salaries_and_vendors_may.csv</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">Parsed 250 rows &bull; Verification complete</p>
                </div>
              </div>

              {/* Parsed List */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase tracking-wider px-1">
                  <span>Beneficiary</span>
                  <span>A/C Status</span>
                  <span className="text-right">Transfer Amt</span>
                </div>

                <div className="bg-slate-900/80 border border-slate-800/80 rounded p-2.5 flex justify-between items-center text-xs">
                  <div>
                    <p className="font-semibold text-white">Ramesh Chandra (IMPS)</p>
                    <p className="text-[9px] text-slate-500">A/C: 91827364... &bull; HDFC Bank</p>
                  </div>
                  <span className="text-[9px] bg-emerald-950 text-emerald-400 border border-emerald-900/50 font-bold px-1.5 py-0.5 rounded flex items-center">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 mr-1"></span> Verified
                  </span>
                  <span className="font-bold text-white">₹45,000.00</span>
                </div>

                <div className="bg-slate-900/80 border border-slate-800/80 rounded p-2.5 flex justify-between items-center text-xs">
                  <div>
                    <p className="font-semibold text-white">Vikas Trading Co. (NEFT)</p>
                    <p className="text-[9px] text-slate-500">A/C: 10029384... &bull; ICICI Bank</p>
                  </div>
                  <span className="text-[9px] bg-emerald-950 text-emerald-400 border border-emerald-900/50 font-bold px-1.5 py-0.5 rounded flex items-center">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 mr-1"></span> Verified
                  </span>
                  <span className="font-bold text-white">₹1,85,000.00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-2xl font-extrabold text-navy-900">Drag-and-Drop Bulk Transfer Desk</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Optimize business payments without any complex server coding. Prepare your custom Excel or CSV files containing account details, upload them directly to the merchant desk, and trigger batch transfers to UPI VPAs or bank accounts.
            </p>
            <ul className="space-y-3">
              {[
                'Automated beneficiary validations check recipient bank accounts before transferring funds.',
                'Duplicate transfer filters catch identical payment lines to prevent double billing.',
                'Interactive dashboard controls let you adjust payment priority modes (IMPS or NEFT).'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-sm text-slate-700 font-medium hover:translate-x-1 transition-transform">
                  <ShieldCheck className="h-5 w-5 text-royal-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-navy-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Automate Your Vendor Disbursements Today
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Connect with our corporate team to activate your merchant account portal and see how Magic Pay streamlines bulk payouts.
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-royal-600 hover:bg-royal-500 rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-sm active:scale-95"
            >
              Get Merchant Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
