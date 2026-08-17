import React from 'react';
import { ShieldCheck, Compass, Target, Heart, Award, Shield } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: "Absolute Trust",
      desc: "We process millions in volume daily. We maintain zero downtime tolerances and complete financial reporting transparency.",
      icon: Shield
    },
    {
      title: "Transaction Velocity",
      desc: "Every millisecond is a transaction fee. We optimize API routing engines to execute bank transfers in under 200ms.",
      icon: Target
    },
    {
      title: "Developer First",
      desc: "We build APIs that we would love to integrate ourselves. Detailed documentation, clear error messages, and easy SDKs.",
      icon: Compass
    },
    {
      title: "Security Native",
      desc: "Security is not a feature; it is our foundation. PCI-DSS compliance is built directly into our baseline code infrastructure.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-navy-900 text-white py-20 text-left relative tech-dots-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5 animate-fade-in-up">
            <span className="text-xs font-bold text-royal-400 uppercase tracking-widest bg-slate-800 border border-slate-700 px-3.5 py-1.5 rounded-full hover:border-royal-500 transition-colors">
              our identity
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Pioneering Enterprise Payment Infrastructure
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Magic Pay Solution was founded to build reliable fintech infrastructure for Indian and international digital businesses. We replace outdated banking nodes with clean, RESTful APIs.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Side-by-Side */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 md:p-10 text-left space-y-6 premium-shadow premium-shadow-hover animate-fade-in-up delay-100">
            <div className="w-12 h-12 bg-blue-50 border border-blue-100 flex items-center justify-center rounded-lg">
              <Target className="h-6 w-6 text-royal-600 animate-pulse" />
            </div>
            <h3 className="text-2xl font-extrabold text-navy-900">Our Mission</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To democratize transaction access by providing solid, secure, and developer-friendly payment routing pipelines. We aim to support businesses of any scale—from start-ups initiating their first collect requests to multinational conglomerates managing complex payroll settlements.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 md:p-10 text-left space-y-6 premium-shadow premium-shadow-hover animate-fade-in-up delay-200">
            <div className="w-12 h-12 bg-blue-50 border border-blue-100 flex items-center justify-center rounded-lg">
              <Compass className="h-6 w-6 text-royal-600" />
            </div>
            <h3 className="text-2xl font-extrabold text-navy-900">Our Vision</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To become the global gold standard for enterprise payment rails. By engineering direct multi-bank integrations, dynamic smart routers, and automated fraud-checks, we strive to build a completely friction-free digital financial ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight">
              Values That Drive Our Technology
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Our engineering culture is guided by fundamental operational principles that prioritize stability, performance, and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => {
              const ValIcon = val.icon;
              const staggerDelay = `delay-${(idx + 1) * 100}`;
              return (
                <div key={idx} className={`bg-white border border-slate-200 rounded-xl p-6 text-left space-y-4 premium-shadow premium-shadow-hover animate-fade-in-up ${staggerDelay}`}>
                  <div className="w-10 h-10 bg-blue-50 border border-blue-100 flex items-center justify-center rounded-lg">
                    <ValIcon className="h-5 w-5 text-royal-600" />
                  </div>
                  <h3 className="text-base font-bold text-navy-900">{val.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Certification Milestones */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6 animate-fade-in-up">
            <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 flex items-center justify-center rounded-lg">
              <Award className="h-6 w-6 text-accent-emerald animate-pulse-slow" />
            </div>
            <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight">
              Regulated Safety Standard Audits
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We understand that transaction processing requires deep compliance integrity. Magic Pay undergoes rigorous third-party audits to maintain top-tier industry clearances.
            </p>
            <div className="bg-slate-100 border border-slate-200 rounded-lg p-4 hover:border-royal-500 transition-colors duration-300">
              <p className="text-xs text-slate-500 font-bold uppercase">Compliance Cleared</p>
              <p className="text-xs text-slate-700 font-medium mt-1">PCI-DSS Level 1 &bull; SOC 2 Type II &bull; ISO 27001 Certified Infrastructure</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 animate-slide-in-right delay-200">
            {/* Timeline */}
            {[
              { year: "2024", title: "PCI-DSS Level 1 Clearance", desc: "Acquired the highest tier certificate for processing credit/debit credentials securely." },
              { year: "2025", title: "NPCI BBPS Node Authorization", desc: "Approved to connect directly as an official payment operating node under BBPS." },
              { year: "2026", title: "ISO 27001 Security Management", desc: "Recognized for maintaining enterprise-grade databases and security operations standards." }
            ].map((step, idx) => (
              <div key={idx} className="flex space-x-4 border-b border-slate-100 pb-6 last:border-0 last:pb-0 hover:translate-x-1 transition-transform">
                <div className="text-xl font-extrabold text-royal-600 w-16">{step.year}</div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-navy-900">{step.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
