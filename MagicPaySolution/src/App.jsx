import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Payin from './pages/Payin';
import Payout from './pages/Payout';
import Bbps from './pages/Bbps';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Refund from './pages/Refund';
import { Wifi, Loader2 } from 'lucide-react';

function AppContent() {
  const location = useLocation();
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate network page fetch latency
  useEffect(() => {
    setIsPageLoading(true);
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 750); // 750ms artificial network latency for loading state
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-white relative">
      {/* Scroll Progress Bar at the absolute top of the screen */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-royal-500 z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Network Page Loading Bar */}
      {isPageLoading && (
        <div className="fixed top-0 left-0 right-0 h-[3px] bg-accent-blue z-50 animate-loading-bar" />
      )}

      {/* Floating Micro Network Sync Indicator */}
      {isPageLoading && (
        <div className="fixed bottom-6 right-6 z-50 bg-navy-900 border border-slate-800 text-white rounded-lg px-3 py-2 flex items-center space-x-2 text-xs font-semibold shadow-xl animate-fade-in-up">
          <Loader2 className="h-3.5 w-3.5 text-royal-400 animate-spin" />
          <Wifi className="h-3.5 w-3.5 text-accent-emerald animate-pulse" />
          <span>Syncing rails...</span>
        </div>
      )}

      <Navbar />

      {/* Main content body with transition opacity/blur on loading */}
      <main className={`flex-grow transition-all duration-300 ease-out ${isPageLoading ? 'opacity-40 blur-[1px] scale-[0.995]' : 'opacity-100 blur-0 scale-100'
        }`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payin" element={<Payin />} />
          <Route path="/payout" element={<Payout />} />
          <Route path="/bbps" element={<Bbps />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
