import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Payin from './pages/Payin'
import Payout from './pages/Payout'
import BBPS from './pages/BBPS'
import About from './pages/About'
import Contact from './pages/Contact'
import logo from './assets/logo.png'
import './App.css'

// Loading Component
const Loader = () => (
  <div className="loader-wrapper">
    <img src={logo} alt="YUGA CONNECT" className="loader-logo" />
    <div className="loader-bar">
      <div className="loader-progress"></div>
    </div>
    <p style={{ marginTop: '1rem', color: 'var(--text-muted)', fontWeight: '500', letterSpacing: '1px' }}>
      SECURE PAYMENTS. EMPOWERING FUTURES.
    </p>
  </div>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// Layout wrapper to handle conditional header/footer
const Layout = ({ children, hideHeaderFooter }) => {
  return (
    <div className="app-wrapper">
      {!hideHeaderFooter && <Navbar />}
      <main>{children}</main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/payin" element={<Layout><Payin /></Layout>} />
        <Route path="/payout" element={<Layout><Payout /></Layout>} />
        <Route path="/bbps" element={<Layout><BBPS /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </Router>
  )
}

export default App