import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ServiceFintech from './pages/ServiceFintech';
import ServiceIT from './pages/ServiceIT';
import ServiceTravel from './pages/ServiceTravel';
import ServicePaymentGateway from './pages/ServicePaymentGateway';
import ServiceUPICollection from './pages/ServiceUPICollection';
import ServiceBBPS from './pages/ServiceBBPS';
import ServiceAEPS from './pages/ServiceAEPS';
import ServiceMoneyTransfer from './pages/ServiceMoneyTransfer';
import ServicePayoutAPI from './pages/ServicePayoutAPI';
import ServiceWebDev from './pages/ServiceWebDev';
import ServiceMobile from './pages/ServiceMobile';
import ServiceCloud from './pages/ServiceCloud';
import './index.css';

function App() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    // We need to observe all elements with .reveal, but since React Router 
    // changes pages dynamically, we should use a MutationObserver or a 
    // simple interval/hook to re-scan for .reveal elements.
    // For simplicity in a static-ish SPA, a MutationObserver on body is robust:
    
    const observeReveals = () => {
      document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
        observer.observe(el);
      });
    };
    
    observeReveals();
    
    const mutObserver = new MutationObserver(observeReveals);
    mutObserver.observe(document.body, { childList: true, subtree: true });
    
    return () => {
      observer.disconnect();
      mutObserver.disconnect();
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/Terms&Conditions" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        
        <Route path="/services/fintech" element={<ServiceFintech />} />
        <Route path="/services/it" element={<ServiceIT />} />
        <Route path="/services/travel" element={<ServiceTravel />} />
        
        <Route path="/services/web-development" element={<ServiceWebDev />} />
        <Route path="/services/mobile-apps" element={<ServiceMobile />} />
        <Route path="/services/cloud-devops" element={<ServiceCloud />} />
        
        <Route path="/service/payment-gateway" element={<ServicePaymentGateway />} />
        <Route path="/service/upi-collection" element={<ServiceUPICollection />} />
        <Route path="/service/bbps" element={<ServiceBBPS />} />
        <Route path="/service/aeps" element={<ServiceAEPS />} />
        <Route path="/service/money-transfer" element={<ServiceMoneyTransfer />} />
        <Route path="/service/payout-api" element={<ServicePayoutAPI />} />
      </Routes>
    </Router>
  );
}

export default App;


