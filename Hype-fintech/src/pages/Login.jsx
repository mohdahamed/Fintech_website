import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Zap, ShieldCheck, Globe } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    if(email && password) {
      login(email);
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex bg-brand-dark overflow-hidden">
      {/* Left Side: Branding & Info (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative p-16 flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-cyan/20 -z-10" />
        <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-brand-cyan/10 rounded-full blur-[120px] animate-pulse" />
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/" className="inline-flex items-center gap-1 mb-12">
            <span className="text-4xl font-black tracking-tight flex text-white">
              <span>H</span>
              <span className="text-gradient-hype">Y</span>
              <span>PE</span>
            </span>
          </Link>

          <h1 className="text-6xl font-black text-white leading-tight mb-8">
            The Engine for <br />
            <span className="text-gradient-hype text-7xl italic">Hyper-Scale</span> <br />
            Payments.
          </h1>

          <p className="text-xl text-slate-400 font-light max-w-lg mb-12 leading-relaxed">
            Join 10,000+ businesses using HYPE to move money at the speed of light.
          </p>

          <div className="space-y-6">
            {[
              { icon: <Zap className="w-6 h-6 text-brand-cyan" />, title: "85ms API Latency", desc: "Industry leading response times." },
              { icon: <ShieldCheck className="w-6 h-6 text-brand-blue" />, title: "Bank-Grade Security", desc: "PCI-DSS Level 1 certified infrastructure." },
              { icon: <Globe className="w-6 h-6 text-emerald-400" />, title: "Global Settlement", desc: "Route payouts to 130+ currencies instantly." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm"
              >
                <div className="p-2 rounded-xl bg-black/40 border border-white/10">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-white text-lg">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-slate-500 text-sm font-mono uppercase tracking-widest"
        >
          &copy; 2026 HYPE FINANCIAL TECHNOLOGY
        </motion.div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative min-h-screen">
        {/* Mobile background flare */}
        <div className="lg:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-cyan/10 rounded-full blur-[80px] -z-10" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md py-12"
        >
          <div className="lg:hidden mb-12 text-center">
            <Link to="/" className="inline-flex items-center gap-1">
              <span className="text-3xl font-black tracking-tighter flex text-white">
                <span>H</span>
                <span className="text-gradient-hype">Y</span>
                <span>PE</span>
              </span>
            </Link>
          </div>

          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-4xl font-black text-white mb-3 tracking-tight">Welcome Back</h2>
            <p className="text-slate-400 text-lg">Access your hyper payments engine</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest" htmlFor="email">Email Address</label>
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within/input:text-brand-cyan transition-colors text-slate-600">
                  <Mail className="h-5 w-5" />
                </div>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-900 border border-white/5 text-white text-base rounded-2xl focus:ring-2 focus:ring-brand-cyan focus:border-transparent block w-full pl-12 p-4 outline-none transition-all placeholder:text-slate-700"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest" htmlFor="password">Password</label>
                <a href="#" className="text-xs font-bold text-brand-cyan hover:text-brand-blue transition-colors">Forgot Password?</a>
              </div>
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within/input:text-brand-cyan transition-colors text-slate-600">
                  <Lock className="h-5 w-5" />
                </div>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-slate-900 border border-white/5 text-white text-base rounded-2xl focus:ring-2 focus:ring-brand-cyan focus:border-transparent block w-full pl-12 p-4 outline-none transition-all placeholder:text-slate-700"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-2xl shadow-xl text-lg font-black text-white bg-gradient-hype hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-cyan focus:ring-offset-brand-dark transition-all group mt-8 active:scale-[0.98]"
            >
              Sign In to Engine
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-12 text-center text-slate-400">
            Don't have an enterprise account? {' '}
            <Link to="/signup" className="font-bold text-white hover:text-brand-cyan transition-colors inline-flex items-center gap-1 group/link">
              Create one now <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
