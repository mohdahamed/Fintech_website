import { Code2, Terminal, Webhook, Key } from 'lucide-react';

export default function Developers() {
  const codeSnippet = `const letspay = require('letspay-node');

const client = new letspay.Client({
  apiKey: 'sk_test_51NxO...',
  environment: 'sandbox'
});

// Create a payment intent
const intent = await client.payments.create({
  amount: 5000, // $50.00
  currency: 'USD',
  payment_method: 'card',
  description: 'Order #1234'
});

console.log('Payment created:', intent.id);`;

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Developer First</h1>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            Powerful, easy-to-use APIs designed by developers, for developers. Integrate payments into your app in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <div className="glass rounded-xl overflow-hidden border border-[var(--color-border-color)]">
              <div className="flex items-center gap-2 px-4 py-3 bg-[var(--color-bg-sidebar)] border-b border-[var(--color-border-color)]">
                <div className="w-3 h-3 rounded-full bg-[var(--color-error)]"></div>
                <div className="w-3 h-3 rounded-full bg-[var(--color-warning)]"></div>
                <div className="w-3 h-3 rounded-full bg-[var(--color-success)]"></div>
                <span className="ml-4 text-xs font-mono text-[var(--color-text-muted)]">create-payment.js</span>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="text-sm font-mono text-[var(--color-text-primary)]">
                  <code dangerouslySetInnerHTML={{ __html: codeSnippet.replace(/const|require|new|await|console\.log/g, '<span class="text-[#c084fc]">$&</span>').replace(/'[^']*'/g, '<span class="text-[#22E67A]">$&</span>').replace(/amount|currency|payment_method|description/g, '<span class="text-[#4A90FF]">$&</span>') }}></code>
                </pre>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            {[
              { title: 'RESTful API', desc: 'Standard HTTP methods and predictable URLs for easy integration.', icon: Terminal },
              { title: 'SDKs for everything', desc: 'Official libraries for Node.js, Python, PHP, Ruby, Java, and Go.', icon: Code2 },
              { title: 'Webhooks', desc: 'Real-time event notifications for payments, payouts, and disputes.', icon: Webhook },
              { title: 'Secure Authentication', desc: 'API keys with granular permissions and IP whitelisting.', icon: Key }
            ].map((feature, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--color-bg-elevated)] flex items-center justify-center shrink-0 border border-[var(--color-border-color)]">
                  <feature.icon className="text-[var(--color-primary)]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-[var(--color-text-muted)]">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
