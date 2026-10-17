import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Create an Account",
      description:
        "Sign up and complete your digital KYC in minutes to get your secure merchant dashboard.",
      icon: "fa-user-check",
    },
    {
      id: 2,
      title: "Fund your Ledger",
      description:
        "Add funds to your centralized wallet instantly via UPI, NEFT, or IMPS with zero delays.",
      icon: "fa-wallet",
    },
    {
      id: 3,
      title: "Start Transacting",
      description:
        "Process recharges, BBPS bills, and money transfers from a single, unified interface.",
      icon: "fa-exchange-alt",
    },
  ];

  return (
    <section className="bg-white py-16 border-b border-ink-100">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-ink-200 bg-paper mb-6">
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-ink-700">
              Workflow
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 leading-tight tracking-tight">
            How PayNidi Pro works
          </h2>
          <p className="mt-6 text-ink-500 text-lg font-light">
            Get started in three simple steps and transform your retail business
            forever.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-ink-100">
            <div className="absolute top-0 left-0 h-full bg-brass-500/50 w-full origin-left"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-full bg-white border border-ink-200 flex items-center justify-center relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] z-10">
                    <div className="w-16 h-16 rounded-full bg-paper flex items-center justify-center text-ink-900 text-xl">
                      <i className={`fas ${step.icon}`}></i>
                    </div>
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-ink-900 text-white flex items-center justify-center text-xs font-bold border-[3px] border-white shadow-sm z-20">
                    {step.id}
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-ink-900 mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed max-w-[260px] font-medium">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
