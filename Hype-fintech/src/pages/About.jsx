import React from 'react';
import AnimatedGradientBox from '../components/AnimatedGradientBox';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Users, CheckCircle, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="relative min-h-screen section-padding mt-10">
      <AnimatedGradientBox />
      <div className="container-padding mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-sm font-semibold mb-6 tracking-wide">
            OUR MISSION
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            Building the <span className="text-gradient-hype">financial infrastructure</span> of tomorrow.
          </h1>
          <p className="text-xl text-slate-300 font-light leading-relaxed">
            HYPE was founded on a simple principle: moving money should be as seamless, instant, and borderless as sending an email. We are on a mission to democratize enterprise-grade financial technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Built by developers, for the world.</h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Before HYPE, our founders struggled with legacy payment processors that were slow, opaque, and hard to integrate. We decided to build the platform we wished existed.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Today, we process billions of dollars perfectly engineered to handle the complexities of global commerce—so you can focus on building your core product.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-brand-card/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl text-center">
              <div className="text-4xl font-black text-white mb-2">2018</div>
              <div className="text-sm text-slate-400">Founded</div>
            </div>
            <div className="bg-brand-card/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl text-center">
              <div className="text-4xl font-black text-white mb-2">400+</div>
              <div className="text-sm text-slate-400">Team Members</div>
            </div>
            <div className="bg-brand-card/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl text-center">
              <div className="text-4xl font-black text-white mb-2">12</div>
              <div className="text-sm text-slate-400">Global Offices</div>
            </div>
            <div className="bg-brand-card/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl text-center">
              <div className="text-4xl font-black text-white mb-2">₹50B</div>
              <div className="text-sm text-slate-400">Processed Volume</div>
            </div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">The principles that guide every feature we ship and every decision we make as a company.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Shield className="w-6 h-6 text-brand-blue" />, title: "Security First", desc: "We protect billions in transaction volume. Security isn't a feature; it's our foundation." },
              { icon: <Zap className="w-6 h-6 text-brand-cyan" />, title: "Velocity", desc: "Money should move at the speed of the internet. We eliminate friction at every step." },
              { icon: <Globe className="w-6 h-6 text-emerald-400" />, title: "Borderless By Default", desc: "We build for a global economy, ensuring our tools work seamlessly across 150+ countries." },
              { icon: <Users className="w-6 h-6 text-purple-400" />, title: "Developer Obsession", desc: "Our APIs are designed to be loved. We prioritize clear documentation and intuitive design." },
              { icon: <Target className="w-6 h-6 text-orange-400" />, title: "Reliability", desc: "Five nines isn't just a goal, it's a promise. We architect for maximum redundancy." },
              { icon: <CheckCircle className="w-6 h-6 text-pink-400" />, title: "Transparency", desc: "No hidden fees, no opaque algorithms. We believe in clear, honest partnerships." }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-brand-card/30 border border-white/5 p-8 rounded-3xl hover:bg-brand-card/60 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center mb-6 border border-white/5">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mt-32 border-t border-white/10 pt-24 mb-20 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase mb-6 tracking-wider">
            Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-black mb-16">Built by industry veterans.</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Aditi Rao", role: "Chief Executive Officer", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop" },
              { name: "Sameer Khan", role: "Chief Technology Officer", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop" },
              { name: "Rohan Kumar", role: "Head of Global Ops", img: "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?w=150&h=150&fit=crop" },
              { name: "Rahul Iyer", role: "Chief Security Officer", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop" }
            ].map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-brand-card relative">
                  <div className="absolute inset-0 bg-brand-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-lg font-bold text-white">{leader.name}</h4>
                <p className="text-brand-cyan text-sm">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
