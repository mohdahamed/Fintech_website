import React, { useState, useEffect, useRef } from 'react';
import { Shield, Zap, BarChart3, Smartphone, Lock, TrendingUp, DollarSign, Globe, Users, Award, Briefcase, ChevronRight, ArrowRight, Layers } from 'lucide-react';
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

const Features = () => {
  const navigate = useNavigate();
  const { setShowSignup } = useAuth();
  const featureImages = {
    security: 'https://images.unsplash.com/photo-1526628652108-aa08bccf06ad?auto=format&fit=crop&w=800&q=80',
    speed: 'https://images.unsplash.com/photo-1509109314641-a6915e87e3fe?auto=format&fit=crop&w=800&q=80',
    analytics: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    mobile: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800&q=80'
  };

  const mainFeatures = [
    {
      icon: <Shield size={40} />,
      title: 'Bank-Level Security',
      description: 'Military-grade encryption and multi-factor authentication to keep your assets safe.',
      details: ['256-bit SSL encryption', '2FA & biometric auth', '24/7 fraud monitoring']
    },
    {
      icon: <Zap size={40} />,
      title: 'Lightning-Fast Transactions',
      description: 'Process payments in seconds with our optimized blockchain infrastructure.',
      details: ['Sub-second processing', 'Real-time settlement', 'Zero network delays']
    },
    {
      icon: <BarChart3 size={40} />,
      title: 'Advanced Analytics',
      description: 'Real-time dashboards with detailed insights into your spending and investments.',
      details: ['Custom reports', 'Predictive analytics', 'Spending categories']
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile First',
      description: 'Manage your finances on the go with our intuitive mobile application.',
      details: ['iOS & Android', 'Offline mode', 'Push notifications']
    },
    {
      icon: <Lock size={40} />,
      title: 'Privacy Protection',
      description: 'Your data is encrypted end-to-end and never shared with third parties.',
      details: ['Zero-knowledge proof', 'End-to-end encryption', 'GDPR compliant']
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Smart Investment Tools',
      description: 'AI-powered recommendations to help you grow your wealth intelligently.',
      details: ['Portfolio optimization', 'AI recommendations', 'Risk assessment']
    },
    {
      icon: <DollarSign size={40} />,
      title: 'Competitive Rates',
      description: 'Get the best exchange rates and lowest fees in the industry.',
      details: ['Mid-market rates', '0.5% flat fees', 'No hidden charges']
    },
    {
      icon: <Globe size={40} />,
      title: 'Global Payments',
      description: 'Send and receive money across 120+ countries instantly.',
      details: ['120+ countries', 'Multi-currency', 'Instant delivery']
    }
  ];

  const stats = [
    { number: '50K+', label: 'Active Users', icon: <Users size={24} /> },
    { number: '₹500Cr+', label: 'Transactions Processed', icon: <DollarSign size={24} /> },
    { number: '120+', label: 'Countries Supported', icon: <Globe size={24} /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Award size={24} /> }
  ];

  const advancedFeatures = [
    {
      title: 'Multi-Currency Wallets',
      description: 'Hold and convert currencies instantly without conversion fees',
      icon: <DollarSign size={32} />
    },
    {
      title: 'Smart Savings Accounts',
      description: 'Earn competitive interest rates on your savings in any currency',
      icon: <TrendingUp size={32} />
    },
    {
      title: 'Automated Investing',
      description: 'Set and forget investment plans with AI-powered rebalancing',
      icon: <BarChart3 size={32} />
    },
    {
      title: 'Bill Payments',
      description: 'Pay bills globally from your VortexPay account automatically',
      icon: <Briefcase size={32} />
    },
    {
      title: 'API Integration',
      description: 'Connect your business systems directly with our powerful API',
      icon: <Layers size={32} />
    },
    {
      title: 'Financial Reports',
      description: 'Generate comprehensive reports for tax and accounting purposes',
      icon: <Award size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-32 pb-20">
      {/* Features Hero Section */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-slideInLeft">
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              Powerful Features for Modern Finance
            </h1>
            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              VortexPay provides comprehensive financial tools designed to empower individuals and businesses worldwide. From security to speed, we've got everything you need.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-slate-300">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                Advanced security protocols protecting your assets
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                Real-time analytics and financial insights
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                Multi-currency support across 120+ countries
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setShowSignup(true)}
                className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 inline-flex items-center gap-2 justify-center">
                Explore Features <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => setShowSignup(true)}
                className="border border-emerald-500 text-emerald-400 px-8 py-4 rounded-full font-bold hover:bg-emerald-500/10 transition-all">
                See Pricing
              </button>
            </div>
          </div>
          <div className="animate-slideInRight relative hidden md:block">
            <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
              alt="Financial Dashboard"
              className="relative rounded-3xl border border-emerald-500/30 shadow-2xl hover:shadow-emerald-500/20 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center hover:border-emerald-500/50 transition-all animate-scaleIn" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-emerald-400 mb-4 flex justify-center">{stat.icon}</div>
              <h3 className="text-3xl md:text-4xl font-black text-emerald-400 mb-2">{stat.number}</h3>
              <p className="text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Features Section */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-center bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
          Core Features
        </h2>
        <p className="text-xl text-slate-300 mb-16 max-w-2xl mx-auto text-center">
          Everything you need to manage, grow, and protect your finances in one powerful platform.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mainFeatures.map((feature, index) => (
            <div key={index} className="p-6 bg-gradient-to-br from-white/5 to-white/2 border border-emerald-500/20 rounded-2xl backdrop-blur hover:border-emerald-500/50 transition-all transform hover:scale-105 hover:shadow-xl animate-fadeInUp group" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-slate-300 text-sm mb-4">{feature.description}</p>
              <div className="space-y-1 border-t border-emerald-500/10 pt-4">
                {feature.details.map((detail, i) => (
                  <p key={i} className="text-xs text-slate-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advanced Features Section with Images */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-center bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          Advanced Features
        </h2>
        <p className="text-xl text-slate-300 mb-16 max-w-2xl mx-auto text-center">
          Take your finances to the next level with our premium capabilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advancedFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-2xl overflow-hidden hover:border-emerald-500/40 transition-all transform hover:-translate-y-2 hover:shadow-xl animate-slideInUp group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center overflow-hidden relative">
                <img 
                  src={[
                    'https://images.unsplash.com/photo-1488190211105-8b0e65b6d6e9?auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1560264357-8d9766d6b4a1?auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1549274894-acda5dc9df38?auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1540575467063-ceb50202919a?auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1554224311-beee415c15cb?auto=format&fit=crop&w=500&q=80'
                  ][index]}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="text-emerald-400 mb-4 text-4xl">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Showcase Section */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-16 text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          See VortexPay in Action
        </h2>
        
        {/* Showcase 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="animate-slideInLeft">
            <h3 className="text-3xl font-bold mb-6">Mobile-First Experience</h3>
            <p className="text-lg text-slate-300 mb-6">Manage your finances on the go with our beautifully designed mobile app. Access all features, transfer money, and monitor investments anytime, anywhere.</p>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <span className="text-emerald-400 text-2xl">📱</span>
                <div>
                  <h4 className="font-bold mb-1">Cross-Platform Sync</h4>
                  <p className="text-slate-400 text-sm">Seamless synchronization across iOS, Android, and web</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-emerald-400 text-2xl">🔒</span>
                <div>
                  <h4 className="font-bold mb-1">Biometric Security</h4>
                  <p className="text-slate-400 text-sm">Fingerprint and face recognition for instant access</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-emerald-400 text-2xl">⚡</span>
                <div>
                  <h4 className="font-bold mb-1">Offline Capability</h4>
                  <p className="text-slate-400 text-sm">View transactions and account details without internet</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="animate-slideInRight relative hidden md:block">
            <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=600&q=80"
              alt="Mobile App Interface"
              className="relative rounded-3xl border border-emerald-500/30 shadow-2xl hover:shadow-2xl transition-all"
            />
          </div>
        </div>

        {/* Showcase 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInLeft relative hidden md:block order-2 md:order-1">
            <div className="absolute -inset-4 bg-cyan-500/10 blur-3xl rounded-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
              alt="Analytics Dashboard"
              className="relative rounded-3xl border border-cyan-500/30 shadow-2xl hover:shadow-2xl transition-all"
            />
          </div>
          <div className="animate-slideInRight order-1 md:order-2">
            <h3 className="text-3xl font-bold mb-6">Powerful Analytics</h3>
            <p className="text-lg text-slate-300 mb-6">Gain deep insights into your spending patterns and investment performance with AI-powered analytics and customizable reports.</p>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <span className="text-emerald-400 text-2xl">📊</span>
                <div>
                  <h4 className="font-bold mb-1">Real-Time Dashboards</h4>
                  <p className="text-slate-400 text-sm">Live updating charts and metrics of your portfolio</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-emerald-400 text-2xl">🤖</span>
                <div>
                  <h4 className="font-bold mb-1">AI Insights</h4>
                  <p className="text-slate-400 text-sm">Personalized recommendations based on your behavior</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-emerald-400 text-2xl">📈</span>
                <div>
                  <h4 className="font-bold mb-1">Predictive Analytics</h4>
                  <p className="text-slate-400 text-sm">Forecast trends and make data-driven decisions</p>
                </div>
              </li>
            </ul>
          </div>
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

export default Features;
