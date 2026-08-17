import React, { useState, useEffect, useRef } from 'react';
import { Users, Target, Lightbulb, Globe, Zap, Shield, Award, TrendingUp, CheckCircle2, MapPin, Building2, Heart } from 'lucide-react';
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

const About = () => {
  const { setShowSignup } = useAuth();
  const [valuesRef, valuesInView] = useInView();
  const [achievementsRef, achievementsInView] = useInView();
  const [missionRef, missionInView] = useInView();
  const [timelineRef, timelineInView] = useInView();
  const [globalRef, globalInView] = useInView();
  const [leadershipRef, leadershipInView] = useInView();

  const coreValues = [
    {
      icon: <Shield size={32} />,
      title: 'Security First',
      description: 'Your trust is our priority. Military-grade encryption and zero compromise on data protection.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Innovation',
      description: 'Constantly pushing boundaries with cutting-edge technology and forward-thinking solutions.'
    },
    {
      icon: <Heart size={32} />,
      title: 'Customer-Centric',
      description: 'Every decision we make is guided by what\'s best for our users and their financial goals.'
    },
    {
      icon: <Globe size={32} />,
      title: 'Global Impact',
      description: 'Empowering millions worldwide to achieve financial freedom regardless of where they are.'
    }
  ];

  const milestones = [
    {
      year: '2024',
      title: 'Company Launch',
      description: 'VortexPay founded with a vision to revolutionize global finance'
    },
    {
      year: '2024',
      title: '50K+ Users',
      description: 'Reached 50,000 active users in record time across 45 countries'
    },
    {
      year: '2025',
      title: '₹500Cr+ Transactions',
      description: 'Processed over ₹500 crore in transactions on our platform'
    },
    {
      year: '2026',
      title: 'Global Leader',
      description: 'Expanded to 120+ countries with 50K+ daily active users'
    }
  ];

  const achievements = [
    { icon: <Award size={24} />, label: 'ISO 27001 Certified', detail: 'Information Security Management' },
    { icon: <Shield size={24} />, label: 'SOC 2 Type II', detail: 'Security & Privacy Compliance' },
    { icon: <Building2 size={24} />, label: 'FCA Regulated', detail: 'UK Financial Conduct Authority' },
    { icon: <TrendingUp size={24} />, label: 'Industry Leader', detail: 'Fastest Growing Fintech 2025' }
  ];

  const globalPresence = [
    { region: 'North America', users: '15K+', transactions: '$450M+' },
    { region: 'Europe', users: '20K+', transactions: '$680M+' },
    { region: 'Asia Pacific', users: '12K+', transactions: '$390M+' },
    { region: 'Rest of World', users: '3K+', transactions: '$180M+' }
  ];

  const leadership = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      background: '15 years at Goldman Sachs',
      image: '👔'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      background: 'Ex-Google, Blockchain Expert',
      image: '👩‍💻'
    },
    {
      name: 'Michael Torres',
      role: 'CFO',
      background: '12 years fintech experience',
      image: '💼'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-32 pb-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-slideInLeft">
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              About VORTEXPAY
            </h1>
            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              We're redefining global finance by combining security, speed, and innovation. Founded by fintech veterans, VortexPay is on a mission to make financial services accessible and transparent for everyone, everywhere.
            </p>
            <p className="text-lg text-slate-400 mb-8">
              Since 2024, we've been building the infrastructure for the new economy—where borders don't limit opportunities and everyone has access to world-class financial tools.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => setShowSignup(true)}
                className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105">
                Join Our Team
              </button>
              <button 
                onClick={() => alert('Watch our story - Coming soon!')}
                className="border border-emerald-500 text-emerald-400 px-8 py-4 rounded-full font-bold hover:bg-emerald-500/10 transition-all">
                Our Story
              </button>
            </div>
          </div>
          <div className="animate-slideInRight relative">
            <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"
              alt="VortexPay Vision"
              className="relative rounded-3xl border border-emerald-500/30 shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div ref={valuesRef} className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Our Core Values
        </h2>
        <p className="text-center text-slate-300 mb-16 max-w-2xl mx-auto">
          These principles guide every decision we make and every product we build.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <div 
              key={index} 
              className={`bg-white/5 border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/50 transition-all transform ${valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: valuesInView ? `${index * 100}ms` : '0ms' }}
            >
              <div className="text-emerald-400 mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-slate-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div ref={achievementsRef} className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-4xl font-black mb-16 text-center">Awards & Certifications</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-2xl p-6 text-center hover:border-emerald-500/50 transition-all transform ${achievementsInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: achievementsInView ? `${index * 100}ms` : '0ms' }}
            >
              <div className="text-emerald-400 mx-auto mb-3">{achievement.icon}</div>
              <h4 className="font-bold mb-2">{achievement.label}</h4>
              <p className="text-sm text-slate-400">{achievement.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision Grid */}
      <div ref={missionRef} className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-4xl font-black mb-4 text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Our Purpose</h2>
        <p className="text-center text-slate-300 mb-16 max-w-2xl mx-auto">Driven by clear mission, guided by vision, powered by talented team</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Card */}
          <div className={`group relative bg-gradient-to-br from-emerald-500/15 via-emerald-500/5 to-transparent border-2 border-emerald-500/30 rounded-3xl p-8 transition-all transform duration-500 cursor-pointer overflow-hidden ${missionInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} hover:border-emerald-400/70 hover:shadow-2xl hover:shadow-emerald-500/30 hover:-translate-y-2`}>
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:to-emerald-500/5 transition-all duration-500 rounded-3xl"></div>
            
            <div className="relative z-10">
              {/* Icon with animation */}
              <div className="inline-block p-3 bg-emerald-500/20 rounded-2xl mb-6 group-hover:bg-emerald-500/30 group-hover:scale-110 transition-all duration-500">
                <Users className="text-emerald-400 group-hover:text-emerald-300 transition-colors duration-500" size={40} />
              </div>
              
              <h3 className="text-2xl font-black mb-4 text-white group-hover:text-emerald-300 transition-colors duration-500">Our Team</h3>
              <p className="text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors duration-500">50+ fintech experts from leading institutions worldwide, united by a shared vision.</p>
              
              <ul className="space-y-3">
                {['Avg. 15+ years experience', 'Multiple nationalities', 'Startup & Fortune 500 veterans'].map((item, i) => (
                  <li key={i} className="text-sm text-slate-400 group-hover:text-slate-300 transition-all duration-500 flex items-center gap-2 group-hover:translate-x-1">
                    <span className="inline-block w-1.5 h-1.5 bg-emerald-400 rounded-full group-hover:bg-emerald-300 transition-all duration-500"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500 -z-0"></div>
          </div>

          {/* Mission Card */}
          <div className={`group relative bg-gradient-to-br from-cyan-500/15 via-cyan-500/5 to-transparent border-2 border-cyan-500/30 rounded-3xl p-8 transition-all transform duration-500 cursor-pointer overflow-hidden ${missionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:border-cyan-400/70 hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-2`} style={{ transitionDelay: missionInView ? '100ms' : '0ms' }}>
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:to-emerald-500/5 transition-all duration-500 rounded-3xl"></div>
            
            <div className="relative z-10">
              {/* Icon with animation */}
              <div className="inline-block p-3 bg-cyan-500/20 rounded-2xl mb-6 group-hover:bg-cyan-500/30 group-hover:scale-110 transition-all duration-500">
                <Target className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-500" size={40} />
              </div>
              
              <h3 className="text-2xl font-black mb-4 text-white group-hover:text-cyan-300 transition-colors duration-500">Our Mission</h3>
              <p className="text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors duration-500">Democratize global finance by making world-class financial tools accessible to everyone.</p>
              
              <ul className="space-y-3">
                {['Remove barriers to entry', 'Ensure transparency', 'Guarantee security'].map((item, i) => (
                  <li key={i} className="text-sm text-slate-400 group-hover:text-slate-300 transition-all duration-500 flex items-center gap-2 group-hover:translate-x-1">
                    <span className="inline-block w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover:bg-cyan-300 transition-all duration-500"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500 -z-0"></div>
          </div>

          {/* Vision Card */}
          <div className={`group relative bg-gradient-to-br from-purple-500/15 via-purple-500/5 to-transparent border-2 border-purple-500/30 rounded-3xl p-8 transition-all transform duration-500 cursor-pointer overflow-hidden ${missionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:border-purple-400/70 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-2`} style={{ transitionDelay: missionInView ? '200ms' : '0ms' }}>
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-purple-500/5 transition-all duration-500 rounded-3xl"></div>
            
            <div className="relative z-10">
              {/* Icon with animation */}
              <div className="inline-block p-3 bg-purple-500/20 rounded-2xl mb-6 group-hover:bg-purple-500/30 group-hover:scale-110 transition-all duration-500">
                <Lightbulb className="text-purple-400 group-hover:text-purple-300 transition-colors duration-500" size={40} />
              </div>
              
              <h3 className="text-2xl font-black mb-4 text-white group-hover:text-purple-300 transition-colors duration-500">Our Vision</h3>
              <p className="text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors duration-500">Be the global leader in fintech innovation, powering financial freedom worldwide.</p>
              
              <ul className="space-y-3">
                {['100,000+ users by 2030', '150+ countries served', '₹1000Cr+ transactions annually'].map((item, i) => (
                  <li key={i} className="text-sm text-slate-400 group-hover:text-slate-300 transition-all duration-500 flex items-center gap-2 group-hover:translate-x-1">
                    <span className="inline-block w-1.5 h-1.5 bg-purple-400 rounded-full group-hover:bg-purple-300 transition-all duration-500"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all duration-500 -z-0"></div>
          </div>
        </div>
      </div>

      {/* Milestones Timeline */}
      <div ref={timelineRef} className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-4xl font-black mb-4 text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Our Journey</h2>
        <p className="text-center text-slate-300 mb-16 max-w-2xl mx-auto">Milestones that define our growth and impact</p>
        <div className="relative">
          {/* Center vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-cyan-500 to-emerald-500 transform translate-x-[-50%]"></div>
          
          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`flex items-center gap-8 md:gap-0 transition-all transform duration-700 ${timelineInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: timelineInView ? `${index * 150}ms` : '0ms' }}
              >
                {/* Left card (even index) */}
                {index % 2 === 0 && (
                  <>
                    <div className="w-full md:w-[calc(50%-20px)] flex justify-end md:pr-8">
                      <div className="relative group w-full">
                        {/* Animated glow background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                        
                        <div className="relative bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border-2 border-emerald-500/30 rounded-2xl p-8 hover:border-emerald-500/70 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all transform duration-500 group-hover:scale-105 group-hover:-translate-y-3 cursor-pointer overflow-hidden">
                          {/* Background animation overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:to-cyan-500/5 rounded-2xl transition-all duration-700"></div>
                          
                          <div className="relative z-10">
                            {/* Year badge with animation */}
                            <div className="inline-block px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-sm mb-4 group-hover:bg-emerald-500/40 group-hover:shadow-lg group-hover:shadow-emerald-500/30 transition-all duration-500 animate-slideInLeft">
                              {milestone.year}
                            </div>
                            
                            {/* Title with text animation */}
                            <h3 className="text-2xl font-black mb-3 text-white group-hover:text-emerald-300 transition-colors duration-500 group-hover:translate-x-2">{milestone.title}</h3>
                            
                            {/* Description with fade animation */}
                            <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-500 group-hover:tracking-wide">{milestone.description}</p>
                            
                            {/* Animated accent line */}
                            <div className="h-1 w-12 mt-4 bg-gradient-to-r from-emerald-500 to-transparent group-hover:w-24 transition-all duration-500"></div>
                          </div>
                          
                          {/* Animated corner glow */}
                          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-0"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Center dot with animation */}
                    <div className="hidden md:flex w-10 h-10 items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-emerald-500 rounded-full opacity-30 animate-ping"></div>
                        <div className="w-5 h-5 bg-emerald-500 rounded-full border-4 border-slate-950 shadow-lg shadow-emerald-500/50 relative z-10"></div>
                      </div>
                    </div>
                    
                    {/* Right spacer */}
                    <div className="hidden md:flex w-[calc(50%-20px)]"></div>
                  </>
                )}

                {/* Right card (odd index) */}
                {index % 2 === 1 && (
                  <>
                    {/* Left spacer */}
                    <div className="hidden md:flex w-[calc(50%-20px)]"></div>
                    
                    {/* Center dot with animation */}
                    <div className="hidden md:flex w-10 h-10 items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-cyan-500 rounded-full opacity-30 animate-ping"></div>
                        <div className="w-5 h-5 bg-cyan-500 rounded-full border-4 border-slate-950 shadow-lg shadow-cyan-500/50 relative z-10"></div>
                      </div>
                    </div>
                    
                    <div className="w-full md:w-[calc(50%-20px)] md:pl-8">
                      <div className="relative group w-full">
                        {/* Animated glow background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                        
                        <div className="relative bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border-2 border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/70 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all transform duration-500 group-hover:scale-105 group-hover:-translate-y-3 cursor-pointer overflow-hidden">
                          {/* Background animation overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:to-emerald-500/5 rounded-2xl transition-all duration-700"></div>
                          
                          <div className="relative z-10">
                            {/* Year badge with animation */}
                            <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mb-4 group-hover:bg-cyan-500/40 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-500 animate-slideInRight">
                              {milestone.year}
                            </div>
                            
                            {/* Title with text animation */}
                            <h3 className="text-2xl font-black mb-3 text-white group-hover:text-cyan-300 transition-colors duration-500 group-hover:-translate-x-2">{milestone.title}</h3>
                            
                            {/* Description with fade animation */}
                            <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-500 group-hover:tracking-wide">{milestone.description}</p>
                            
                            {/* Animated accent line */}
                            <div className="h-1 w-12 mt-4 bg-gradient-to-r from-cyan-500 to-transparent group-hover:w-24 transition-all duration-500 ml-auto"></div>
                          </div>
                          
                          {/* Animated corner glow */}
                          <div className="absolute top-0 left-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-0"></div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Mobile layout - single column */}
                {milestones.length > 0 && (
                  <div className="md:hidden w-full">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      <div className="relative bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border-2 border-emerald-500/30 rounded-2xl p-6 hover:border-emerald-500/70 transition-all transform group-hover:scale-105 duration-500">
                        <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs mb-3 animate-slideInLeft">
                          {milestone.year}
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-white group-hover:text-emerald-300 transition-colors duration-500">{milestone.title}</h3>
                        <p className="text-slate-300 text-sm group-hover:text-slate-200 transition-colors duration-500">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Presence */}
      <div ref={globalRef} className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-4xl font-black mb-16 text-center">Global Presence</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {globalPresence.map((region, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center hover:border-emerald-500/50 transition-all transform ${globalInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: globalInView ? `${index * 100}ms` : '0ms' }}
            >
              <MapPin className="text-emerald-400 mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">{region.region}</h3>
              <div className="space-y-2">
                <p className="text-2xl font-black text-emerald-400">{region.users}</p>
                <p className="text-sm text-slate-400">Active Users</p>
                <p className="text-lg font-bold mt-3">{region.transactions}</p>
                <p className="text-sm text-slate-400">Volume</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership Team */}
      <div ref={leadershipRef} className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-4xl font-black mb-16 text-center">Leadership Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {leadership.map((leader, index) => (
            <div 
              key={index}
              className={`bg-white/5 border border-emerald-500/20 rounded-2xl p-8 text-center hover:border-emerald-500/50 transition-all transform hover:scale-105 ${leadershipInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: leadershipInView ? `${index * 150}ms` : '0ms' }}
            >
              <div className="text-6xl mb-4">{leader.image}</div>
              <h3 className="text-2xl font-bold mb-2">{leader.name}</h3>
              <p className="text-emerald-400 font-bold mb-3">{leader.role}</p>
              <p className="text-slate-300">{leader.background}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-3xl p-12 backdrop-blur animate-slideInRight">
          <h2 className="text-4xl font-bold mb-8">Why Choose VortexPay?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Security', desc: 'Military-grade encryption & zero breaches since inception' },
              { title: 'Speed', desc: 'Transactions completed in seconds, not days' },
              { title: 'Compliance', desc: 'Regulated in 50+ jurisdictions, fully audited' },
              { title: 'Support', desc: '24/7 multilingual customer support team' },
              { title: 'Innovation', desc: 'Cutting-edge AI & blockchain technology' },
              { title: 'Trust', desc: '50K+ users trust us with their finances daily' }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 animate-fadeInUp" style={{ animationDelay: `${index * 50}ms` }}>
                <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-slate-300 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
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

export default About;
