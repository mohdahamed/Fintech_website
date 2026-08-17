import React from 'react';
import { RefreshCcw, ShieldCheck, Clock, AlertCircle, HelpCircle, CheckCircle2, FileText, ArrowRightLeft } from 'lucide-react';

export default function Refund() {
  const lastUpdated = "June 1, 2026";

  const timelineData = [
    { method: "UPI & QR Payments", timeline: "24 – 48 Hours (T+1 to T+2 Days)", note: "Instant reversal or auto-credit back to original VPA/UPI account" },
    { method: "Netbanking & IMPS", timeline: "2 – 4 Bank Working Days", note: "Direct bank credit via NPCI / Reserve Bank settlement cycles" },
    { method: "Credit & Debit Cards", timeline: "5 – 7 Bank Working Days", note: "Processed directly to card issuer bank ledger statement" },
    { method: "BBPS Utility Refunds", timeline: "3 – 5 Bank Working Days", note: "Reversal triggered upon biller clearance failure status" },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-700">
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-16 text-left relative tech-dots-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-slate-800 border border-slate-700 px-3 py-1 rounded-full">
              <RefreshCcw className="h-4 w-4 text-royal-400" />
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Transparent & Fair Terms
              </span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight">
              Refund & Cancellation Policy
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              We strive to maintain complete transparency. This policy outlines the terms governing refunds, transaction reversals, auto-credits, and dispute resolutions for Magic Pay Solution.
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

          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-blue-50 text-royal-600 text-sm font-extrabold">1</span>
              Overview & Scope
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Magic Pay Solution (operated by <strong>Marbow Eduro Private Limited</strong>) provides enterprise business-to-business (B2B) payment infrastructure, including Payin Payment Gateways, Instant Payout Transfers, and Bharat Bill Payment System (BBPS) utility processing.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              Because our services facilitate financial transactions between merchants, acquiring banks, card networks, and utility billers, refunds and reversals are handled according to strict regulatory frameworks established by the Reserve Bank of India (RBI) and National Payments Corporation of India (NPCI).
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-blue-50 text-royal-600 text-sm font-extrabold">2</span>
              Eligible Circumstances for Refunds
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              A refund or transaction reversal may be issued under the following specific conditions:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-slate-600">
              <li>
                <strong>Double Debit / Technical Failure:</strong> Money was debited from your bank account or card, but due to a network interruption or bank node delay, the transaction was marked as 'Failed' or did not reach the destination merchant.
              </li>
              <li>
                <strong>Failed BBPS Utility Payment:</strong> Payment was deducted for utility bill settlement, but the destination biller portal failed to clear the invoice or returned an unresolvable error code.
              </li>
              <li>
                <strong>Rejected Payout Transfer:</strong> An automated payout transfer (IMPS/NEFT/RTGS) failed due to beneficiary bank rejection, invalid account details, or NPCI switch timeout.
              </li>
              <li>
                <strong>Duplicate Payment:</strong> A single invoice or transaction payload was erroneously charged multiple times within a short interval due to API re-attempts.
              </li>
            </ul>
          </div>

          {/* Section 3 - Timelines Table */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-blue-50 text-royal-600 text-sm font-extrabold">3</span>
              Refund Processing Timelines
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Once an auto-reversal is triggered or a manual refund request is approved, funds are transferred back to the original source account according to banking turnaround schedules:
            </p>

            <div className="overflow-x-auto my-4 border border-slate-200 rounded-xl shadow-sm">
              <table className="w-full text-left text-sm border-collapse">
                <thead className="bg-slate-50 border-b border-slate-200 text-navy-900 font-semibold">
                  <tr>
                    <th className="py-3 px-4">Payment Method</th>
                    <th className="py-3 px-4">Refund Turnaround Time</th>
                    <th className="py-3 px-4">Processing Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  {timelineData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-navy-900">{row.method}</td>
                      <td className="py-3 px-4 text-royal-700 font-medium">{row.timeline}</td>
                      <td className="py-3 px-4 text-xs text-slate-500">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-slate-500 italic">
              * Note: Turnaround times depend on beneficiary bank processing cycles. Official public holidays or weekend bank outages may extend turnaround times by 1–2 business days.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-blue-50 text-royal-600 text-sm font-extrabold">4</span>
              Cancellation Policy
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Due to the real-time nature of digital financial transactions, cancellation parameters are defined as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-slate-600">
              <li>
                <strong>Instant Payout Transfers:</strong> Once an automated IMPS/NEFT payout instruction is sent to the banking switch node, it cannot be cancelled or recalled.
              </li>
              <li>
                <strong>Pending Manual Transfers:</strong> If a scheduled payout transaction is queued in 'Pending Review' status, merchants may request cancellation through the Merchant Support Portal before processing.
              </li>
              <li>
                <strong>Merchant Onboarding Fees:</strong> Account setup or API integration setup charges are non-refundable once the merchant account credentials and integration keys have been generated.
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-blue-50 text-royal-600 text-sm font-extrabold">5</span>
              Dispute Resolution & Chargebacks
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              For B2B merchants processing customer payments via Magic Pay Solution:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-slate-600">
              <li>
                <strong>Chargeback Inquiries:</strong> When an end-consumer files a dispute or chargeback with their issuing bank, Magic Pay Solution will notify the merchant immediately.
              </li>
              <li>
                <strong>Evidence Submission:</strong> Merchants must submit valid proof of delivery, service completion logs, or invoice receipts within 5 business days of notification.
              </li>
              <li>
                <strong>Dispute Clearance:</strong> If valid evidence is provided, the funds are retained in favor of the merchant. If the merchant fails to provide evidence, the chargeback amount will be deducted from future settlement reserves.
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-blue-50 text-royal-600 text-sm font-extrabold">6</span>
              Non-Refundable Items & Service Fees
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              The following categories are strictly non-refundable:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-slate-600">
              <li>Payment gateway convenience fees, GST/statutory taxes, or bank MDR fees for successful, settled transactions.</li>
              <li>Utility bill payments confirmed and cleared by the BBPS network and utility biller.</li>
              <li>Payout transfers successfully delivered to valid recipient bank accounts.</li>
            </ul>
          </div>

          {/* Contact Support & Grievance Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 mt-8">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-navy-900 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-royal-600" />
                Need help with a Refund or Dispute?
              </h3>
              <p className="text-xs text-slate-500 max-w-md">
                If your payment was debited but failed to reflect, please contact our support desk with your Transaction ID, UTR, and registered phone number.
              </p>
            </div>
            <div className="flex flex-col text-left md:text-right">
              <span className="text-xs font-bold text-navy-900">Marbow Eduro Private Limited</span>
              <span className="text-xs text-slate-600 mt-1">Plot:136, Venkateshwar nagar, Quthbullahpur</span>
              <span className="text-xs text-slate-600">Medchal, Telangana-500055</span>
              <a href="mailto:support@magicpaysolution.com" className="text-sm font-bold text-royal-600 mt-2 hover:underline">
                support@magicpaysolution.com
              </a>
              <a href="tel:+918498901997" className="text-xs font-semibold text-slate-700 hover:text-royal-600 mt-1">
                Helpdesk: +91 8498901997
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
