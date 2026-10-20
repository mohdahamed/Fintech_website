import React from 'react';
import { motion } from 'framer-motion';
import AnimatedGradientBox from '../components/AnimatedGradientBox';
import Hero from '../components/Hero';
import CompanyTicker from '../components/CompanyTicker';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import GlobalReach from '../components/GlobalReach';
import FintechFAQ from '../components/FintechFAQ';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-[#F7F8FA]">
      <AnimatedGradientBox />
      <Hero />
      <CompanyTicker />
      <Features />
      <HowItWorks />
      <GlobalReach />
      <FintechFAQ />

      {/* Clean Bottom Business CTA Section with Scroll Reveal */}
      <section className="section-padding bg-white border-t border-[#E5E9F0]">
        <div className="container-padding mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0B1730] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl"
          >
            <div className="max-w-2xl relative z-10">
              <span className="inline-block py-1.5 px-3.5 rounded-full bg-white/10 text-[#3267D6] text-xs font-bold uppercase tracking-wider mb-5 border border-white/10">
                Partner With Hype-Pay
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                Ready to Simplify Your Business Payment Operations?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Connect with our team to activate payment collections, vendor disbursements, or BBPS utility payments tailored for your business counter.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="fintech-btn-primary bg-[#3267D6] hover:bg-[#2558C7] flex items-center gap-2 text-sm shadow-md hover:shadow-lg transition-all group active:scale-[0.98]"
                >
                  <span>Get in Touch With Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="px-5 py-3 rounded-lg border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
                >
                  Explore All Services
                </Link>
              </div>
            </div>

            {/* Subtle background glow */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#3267D6]/10 to-transparent pointer-events-none hidden md:block" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
