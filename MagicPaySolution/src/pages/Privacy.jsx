import React from 'react';
import { Shield, Eye, Lock, HardDrive } from 'lucide-react';

export default function Privacy() {
  const lastUpdated = "June 1, 2026";

  return (
    <div className="bg-white min-h-screen text-slate-700">
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-16 text-left relative tech-dots-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-slate-800 border border-slate-700 px-3 py-1 rounded-full">
              <Lock className="h-4 w-4 text-royal-400" />
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Privacy & Data Security
              </span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              We value your trust. This document outlines how Magic Pay Solution collects, processes, and protects business and client transaction details.
            </p>
            <p className="text-xs text-slate-400">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="space-y-10 animate-fade-in-up">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-blue-50 text-royal-600 text-sm font-extrabold">1</span>
              Information We Collect
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              To operate our payment gateway, we collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-slate-600">
              <li><strong>Merchant Profile Data:</strong> Name, business email, contact phone, PAN card, and business registration details submitted during account creation.</li>
              <li><strong>Transaction Data:</strong> Amounts, transaction IDs, payment channel preferences, and settlement schedules processed through our network.</li>
              <li><strong>BBPS Query Information:</strong> Consumer numbers, subscriber IDs, and billing amounts queried to fetch official utility invoices.</li>
              <li><strong>Technical Data:</strong> IP addresses, API request payloads, and console logs to track integration health and prevent system attacks.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-blue-50 text-royal-600 text-sm font-extrabold">2</span>
              How We Use Information
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              We use the collected information strictly for operational and compliance purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-slate-600">
              <li>Routing payin collections and clearing bank node transactions.</li>
              <li>Executing vendor payouts and bulk disbursements.</li>
              <li>Validating subscriber due statuses on the BBPS billing network.</li>
              <li>Verifying merchant profiles to maintain regulatory compliance with banking authorities.</li>
              <li>Providing technical assistance for API integration setups.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-blue-50 text-royal-600 text-sm font-extrabold">3</span>
              Security and Encryption
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Security is the baseline of our infrastructure. We protect data using:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-slate-600">
              <li><strong>AES-256 Encryption:</strong> Sensitive databases and merchant profiles are encrypted at rest.</li>
              <li><strong>TLS 1.3 Transport Security:</strong> All API requests and dashboard operations travel through encrypted communication channels.</li>
              <li><strong>PCI-DSS Compliance:</strong> Payment card details are never stored locally and are processed directly through audited banking gateway tokens.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-blue-50 text-royal-600 text-sm font-extrabold">4</span>
              Data Retention and Deletion
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              We store transaction ledger details as required by financial regulations and audits in India. If a merchant closes their profile on the agent portal, we delete active credentials and profile databases, keeping only the regulatory audit logs for the period specified by the Reserve Bank of India and tax authorities.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-blue-50 text-royal-600 text-sm font-extrabold">5</span>
              Third-Party Data Sharing
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              We do not sell, rent, or trade merchant or customer transaction databases to third-party marketing companies. Data is shared only with processing banks, Card Networks (Visa/Mastercard), NPCI (for UPI & BBPS), and judicial or regulatory authorities when required by law.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-blue-50 text-royal-600 text-sm font-extrabold">6</span>
              Cookies Policy
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              We use strictly necessary cookies on our merchant portal (<a href="https://agent.magicpaysolution.com" target="_blank" rel="noopener noreferrer" className="text-royal-600 hover:underline">https://agent.magicpaysolution.com</a>) to maintain logged-in sessions, detect automated script attacks, and secure integration consoles. We do not place targeting or tracking cookies for advertising purposes.
            </p>
          </div>

          {/* Contact Support Block */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-navy-900 flex items-center gap-2">
                <Shield className="h-5 w-5 text-royal-600" />
                Data Protection Officer
              </h3>
              <p className="text-xs text-slate-500">
                Contact our data security officers directly regarding data privacy queries.
              </p>
            </div>
            <div className="flex flex-col text-left md:text-right">
              <span className="text-xs font-bold text-navy-900">Marbow Eduro Private Limited</span>
              <span className="text-xs text-slate-600 mt-1">Plot:136, Venkateshwar nagar, Quthbullahpur</span>
              <span className="text-xs text-slate-600">Medchal, Telangana-500055</span>
              <a href="mailto:support@magicpaysolution.com" className="text-sm font-bold text-royal-600 mt-2 hover:underline animate-pulse-slow">
                support@magicpaysolution.com
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
