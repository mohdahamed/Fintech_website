import React from "react";

const Features = () => {
  const features = [
    {
      title: "Instant Settlements",
      description:
        "Transactions settle in real-time. No waiting days for your funds to clear.",
      icon: "fa-bolt",
      color: "text-brass-600",
      bg: "bg-brass-50",
    },
    {
      title: "Bank-Grade Security",
      description:
        "End-to-end encryption ensures your retailer and customer data is always protected.",
      icon: "fa-shield-check",
      color: "text-sage-600",
      bg: "bg-sage-50",
    },
    {
      title: "99.9% Uptime",
      description:
        "Robust infrastructure built for scale, ensuring you never miss a customer transaction.",
      icon: "fa-server",
      color: "text-ink-600",
      bg: "bg-ink-50",
    },
    {
      title: "Auto Reconciliation",
      description:
        "Say goodbye to manual ledger matching. Everything is reconciled instantly.",
      icon: "fa-file-invoice-dollar",
      color: "text-rust-600",
      bg: "bg-rust-50",
    },
  ];

  return (
    <section className="bg-paper py-16 border-b border-ink-100 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-ink-200 bg-white mb-6">
              <i className="fas fa-layer-group text-brass-500 text-xs"></i>
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-ink-700">
                Platform Features
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 leading-[1.1] tracking-tight mb-6">
              Built for <span className="italic font-light">reliability</span>{" "}
              and absolute speed.
            </h2>
            <p className="text-ink-500 text-lg leading-relaxed mb-10 max-w-md font-light">
              PayNidi Pro gives retailers a competitive edge. Our platform
              handles the technical complexity so you can focus entirely on
              serving your customers.
            </p>
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-ink-200 shadow-sm inline-flex">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-ink-100 flex items-center justify-center text-ink-600 text-xs font-semibold shadow-sm">
                  <i className="fas fa-building"></i>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-ink-200 flex items-center justify-center text-ink-600 text-xs font-semibold shadow-sm">
                  <i className="fas fa-store"></i>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-ink-300 flex items-center justify-center text-ink-700 text-xs font-semibold shadow-sm">
                  <i className="fas fa-shop"></i>
                </div>
              </div>
              <div>
                <div className="text-sm font-bold text-ink-900 tracking-tight">
                  10,000+
                </div>
                <div className="text-[10px] font-bold text-ink-500 uppercase tracking-widest">
                  Active Retailers
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {/* Bento Grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-ink-200 p-8 shadow-sm"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center ${feature.color} mb-6`}
                  >
                    <i className={`fas ${feature.icon} text-lg`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-ink-900 mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-ink-500 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
