import { Code2, Terminal, Webhook, Key, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Developers() {
  const codeSnippet = `const aurapay = require('aurapay-node');

const client = new aurapay.Client({
  apiKey: 'sk_live_98240182...',
  environment: 'production'
});

// Create a payment intent
const intent = await client.payments.create({
  amount: 1499.00,
  currency: 'INR',
  payment_method: 'upi_qr',
  description: 'Order #AP-884920'
});

console.log('Payment initialized:', intent.checkout_url);`;

  return (
    <div className="flex flex-col min-h-screen bg-[#020817] text-white">
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111B2F] border border-[#233452] text-xs text-[#3B82F6] font-bold tracking-widest uppercase">
            <ShieldCheck size={14} /> Developer First Infrastructure
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Built for Developers, <span className="text-[#3B82F6]">Engineered for Scale</span>
          </h1>
          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            Simple, intuitive REST APIs and SDKs to integrate pay-ins, payouts, and webhooks in under 10 minutes.
          </p>
        </div>

        {/* Code & Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7">
            <div className="bg-[#050816] rounded-2xl overflow-hidden border border-[#233452] shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 bg-[#111B2F] border-b border-[#233452]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#22E67A]"></div>
                  <span className="ml-3 text-xs font-mono text-slate-400">create-payment.js</span>
                </div>
                <span className="text-[10px] bg-[#3B82F6]/10 text-[#3B82F6] px-2 py-0.5 rounded font-mono font-bold">Node.js SDK</span>
              </div>
              <div className="p-6 overflow-x-auto bg-[#020817]">
                <pre className="text-xs sm:text-sm font-mono text-slate-200 leading-relaxed">
                  <code dangerouslySetInnerHTML={{ 
                    __html: codeSnippet
                      .replace(/const|require|new|await|console\.log/g, '<span class="text-[#8B5CF6] font-bold">$&</span>')
                      .replace(/'[^']*'/g, '<span class="text-[#22E67A]">$&</span>')
                      .replace(/amount|currency|payment_method|description|apiKey|environment/g, '<span class="text-[#3B82F6]">$&</span>') 
                  }}></code>
                </pre>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            {[
              { title: 'RESTful API Endpoints', desc: 'Standard HTTP methods, predictable JSON responses, and zero secret leakage.', icon: Terminal },
              { title: 'Official SDKs', desc: 'Pre-built packages for Node.js, Python, PHP, Java, and Go.', icon: Code2 },
              { title: 'Instant Webhooks', desc: 'Sub-second event callbacks for payment success, refunds, and payout clearance.', icon: Webhook },
              { title: 'API Key Management', desc: 'Granular permissions, sandbox environments, and strict IP whitelisting.', icon: Key }
            ].map((feature, i) => (
              <div key={i} className="flex gap-4 items-start bg-[#111B2F] p-4 rounded-xl border border-[#233452]">
                <div className="w-10 h-10 rounded-lg bg-[#020817] border border-[#233452] flex items-center justify-center shrink-0 text-[#3B82F6]">
                  <feature.icon size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">{feature.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#111B2F] border border-[#233452] rounded-3xl p-10 text-center space-y-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold">Start Building in Sandbox</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Get instant API credentials in test mode and start integrating payment flows immediately.
          </p>
          <a
            href="https://agent.aurapay.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#4A90FF] text-white px-8 py-3.5 rounded-lg text-sm font-bold transition-colors"
          >
            Get API Keys <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
