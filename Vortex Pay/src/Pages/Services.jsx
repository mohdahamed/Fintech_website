import React, { useState, useEffect, useRef } from 'react';
import { CreditCard, Send, TrendingUp, PiggyBank, Briefcase, Settings, Check, ArrowRight, Lock, Zap, Globe, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

// Custom hook for scroll-triggered animations
const useInView = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isInView];
};

const Services = () => {
  const navigate = useNavigate();
  const { setShowSignup } = useAuth();
  const services = [
    {
      icon: <CreditCard size={40} />,
      title: 'Digital Banking',
      description: 'Full-featured digital bank account with virtual and physical cards, no minimum balance required.',
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=600&q=80',
      features: ['Virtual & physical cards', 'Instant card creation', 'No monthly fees', '24/7 account management'],
      details: 'Experience modern banking with our intuitive platform. Get instant access to your digital wallet, set spending limits, and freeze/unfreeze cards with a single tap.'
    },
    {
      icon: <Send size={40} />,
      title: 'Money Transfer',
      description: 'Send and receive money internationally with competitive rates and real-time tracking.',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=600&q=80',
      features: ['120+ countries supported', 'Real-time exchange rates', 'Zero hidden fees', 'Instant notifications'],
      details: 'Transfer funds across the globe in minutes, not days. Our transparent pricing and live tracking keep you informed every step of the way.'
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Investment Management',
      description: 'Start investing with as little as $1 in stocks, ETFs, crypto, and more.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
      features: ['Fractional shares', 'AI-powered recommendations', 'Low-cost index funds', 'Portfolio rebalancing'],
      details: 'Build wealth through smart investing. Access diversified portfolios, expert insights, and automated rebalancing to optimize your returns.'
    },
    {
      icon: <Settings size={40} />,
      title: 'Wealth Management',
      description: 'Personalized advisory services and portfolio management for high-net-worth individuals.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
      features: ['Personal advisors', 'Tax optimization', 'Estate planning', 'Risk assessment'],
      details: 'Grow and protect your wealth with expert guidance. Our advisors create tailored strategies aligned with your financial goals.'
    }
  ];

  const benefits = [
    { icon: <Lock size={24} />, title: 'Bank-Level Security', desc: '256-bit encryption and multi-factor authentication' },
    { icon: <Zap size={24} />, title: 'Lightning Fast', desc: 'Transactions processed in milliseconds' },
    { icon: <Globe size={24} />, title: 'Global Access', desc: 'Manage your finances from anywhere' },
    { icon: <BarChart3 size={24} />, title: 'Real-Time Analytics', desc: 'Track spending and investments instantly' }
  ];

  const [benefitsRef, benefitsInView] = useInView();
  const [servicesRef, servicesInView] = useInView();
  const [whyChooseRef, whyChooseInView] = useInView();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-32 pb-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            Comprehensive financial services designed to meet all your needs, from everyday banking to wealth management. Experience the future of finance with VortexPay.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 inline-flex items-center gap-2">
              Browse All Services <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => setShowSignup(true)}
              className="border border-emerald-500 text-emerald-400 px-8 py-4 rounded-full font-bold hover:bg-emerald-500/10 transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div ref={benefitsRef} className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-2xl p-6 text-center hover:border-emerald-500/50 transition-all transform ${benefitsInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: benefitsInView ? `${index * 100}ms` : '0ms' }}
            >
              <div className="text-emerald-400 mb-3 flex justify-center">{benefit.icon}</div>
              <h4 className="font-bold mb-2">{benefit.title}</h4>
              <p className="text-slate-400 text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Services Grid */}
      <div ref={servicesRef} className="max-w-7xl mx-auto px-6 mb-24">
        <div className={`mb-16 transition-all transform ${servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-center bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            What We Offer
          </h2>
          <p className="text-xl text-slate-300 mb-16 max-w-2xl mx-auto text-center">
            Explore our complete suite of financial services tailored for your success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br from-white/5 to-white/2 border border-emerald-500/20 rounded-2xl overflow-hidden hover:border-emerald-500/40 transition-all transform hover:-translate-y-2 group ${servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: servicesInView ? `${index * 100}ms` : '0ms' }}
            >
              <div className="h-64 overflow-hidden relative bg-gradient-to-br from-emerald-500/20 to-cyan-500/20">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="text-emerald-400 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{service.details}</p>
                
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 mb-6">
                  <h4 className="font-bold mb-4 text-emerald-400">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                        <Check size={16} className="text-emerald-400 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => setShowSignup(true)}
                  className="w-full bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-400 border border-emerald-500/30 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                  Learn More <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-3xl p-12 md:p-16 animate-slideInLeft">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose VortexPay Services?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-emerald-400/20 rounded-full flex items-center justify-center text-emerald-400">✓</span>
                Integrated Ecosystem
              </h4>
              <p className="text-slate-300 leading-relaxed">All services work seamlessly together. Transfer funds to invest, invest earnings into savings, and manage everything from one dashboard.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-emerald-400/20 rounded-full flex items-center justify-center text-emerald-400">✓</span>
                Transparent Pricing
              </h4>
              <p className="text-slate-300 leading-relaxed">No hidden fees or surprise charges. Competitive rates with clear pricing structures across all services.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-emerald-400/20 rounded-full flex items-center justify-center text-emerald-400">✓</span>
                24/7 Support
              </h4>
              <p className="text-slate-300 leading-relaxed">Our dedicated support team is available round-the-clock to help with any questions or issues.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-emerald-400/20 rounded-full flex items-center justify-center text-emerald-400">✓</span>
                Continuous Innovation
              </h4>
              <p className="text-slate-300 leading-relaxed">We regularly update our services with new features and improvements based on user feedback.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-3xl p-12 md:p-16 text-center animate-slideInRight">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-950">Start Your Financial Journey Today</h2>
          <p className="text-slate-900 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust VortexPay for their financial needs. Choose the services that matter to you.
          </p>
            <button 
              onClick={() => setShowSignup(true)}
              className="bg-slate-950 hover:bg-slate-900 text-emerald-400 px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 inline-flex items-center gap-2">
              Get Started Free <ArrowRight size={22} />
            </button>
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-slideInUp {
          animation: slideInUp 0.7s ease-out forwards;
          opacity: 0;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Services;
