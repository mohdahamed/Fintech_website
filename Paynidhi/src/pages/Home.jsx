import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import About from '../components/About';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <About />
      <Services />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
};

export default Home;
