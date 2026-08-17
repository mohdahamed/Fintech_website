import React from 'react';
import AnimatedGradientBox from '../components/AnimatedGradientBox';
import Hero from '../components/Hero';
import CompanyTicker from '../components/CompanyTicker';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import GlobalReach from '../components/GlobalReach';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <AnimatedGradientBox />
      <Hero />
      <CompanyTicker />
      <HowItWorks />
      <Features />
      <GlobalReach />
    </div>
  );
};

export default Home;
