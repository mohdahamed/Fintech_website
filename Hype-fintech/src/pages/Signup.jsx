import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, CheckCircle, Smartphone, Globe } from 'lucide-react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleSignup = (e) => {
    e.preventDefault();
    if(name && email && password) {
      signup(name, email);
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex bg-brand-dark overflow-hidden">
      {/* Left Side: Branding & Value Props (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative p-16 flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-cyan/20 -z-10" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-brand-blue/10 rounded-full blur-[120px] animate-pulse" />
        
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
            Build the Future <br />
            of <span className="text-gradient-hype italic text-7xl">Finance.</span>
          </h1>

          <p className="text-xl text-slate-400 font-light max-w-lg mb-12 leading-relaxed">
            Create an enterprise account in seconds and get access to the most powerful payment infrastructure in the market.
          </p>

          <div className="space-y-6">
            {[
              { icon: <CheckCircle className="w-6 h-6 text-brand-cyan" />, title: "Instant Activation", desc: "Get your API keys in under 2 minutes." },
              { icon: <Smartphone className="w-6 h-6 text-brand-blue" />, title: "Developer First", desc: "SDKs for React, Node, Python, and Go." },
              { icon: <Globe className="w-6 h-6 text-emerald-400" />, title: "Compliant by Design", desc: "KYC and AML automation out of the box." }
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

        <div className="text-slate-500 text-sm font-mono uppercase tracking-widest flex items-center gap-4">
          <div className="flex -space-x-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-dark bg-slate-800" />
            ))}
          </div>
          <span>Trusted by 500+ Unicorns</span>
        </div>
      </div>

      {/* Right Side: Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative min-h-screen">
        {/* Mobile background flare */}
        <div className="lg:hidden absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-blue/10 rounded-full blur-[80px] -z-10" />

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
            <h2 className="text-4xl font-black text-white mb-3 tracking-tight">Create Account</h2>
            <p className="text-slate-400 text-lg">Join the payments elite</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest" htmlFor="name">Full Name</label>
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within/input:text-brand-cyan transition-colors text-slate-600">
                  <User className="h-5 w-5" />
                </div>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-slate-900 border border-white/5 text-white text-base rounded-2xl focus:ring-2 focus:ring-brand-cyan focus:border-transparent block w-full pl-12 p-4 outline-none transition-all placeholder:text-slate-700"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest" htmlFor="email">Work Email</label>
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
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest" htmlFor="password">Password</label>
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
                  placeholder="At least 8 characters"
                />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-[10px] text-slate-500 leading-relaxed uppercase tracking-tighter">
              By creating an account, you agree to our <a href="#" className="underline text-brand-cyan">Terms of Service</a> and <a href="#" className="underline text-brand-cyan">Privacy Policy</a>.
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-2xl shadow-xl text-lg font-black text-white bg-gradient-hype hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-cyan focus:ring-offset-brand-dark transition-all group mt-8 active:scale-[0.98]"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-12 text-center text-slate-400">
            Already have an account? {' '}
            <Link to="/login" className="font-bold text-white hover:text-brand-cyan transition-colors inline-flex items-center gap-1 group/link">
              Sign in <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
