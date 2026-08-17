import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiArrowRight, 
  FiMenu, 
  FiX, 
  FiCheck, 
  FiSmartphone, 
  FiLayers, 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiStar, 
  FiShield, 
  FiClock, 
  FiUsers, 
  FiZap, 
  FiChevronDown, 
  FiChevronLeft, 
  FiChevronRight,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiCreditCard,
  FiTrendingUp,
  FiGlobe,
  FiActivity,
  FiMonitor
} from 'react-icons/fi';
import { FaRupeeSign } from 'react-icons/fa';
import logoImg from './assets/Logo.png';

// --- ANIMATION CONFIGS ---
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

// --- ANIMATED COUNTER COMPONENT ---
const AnimatedCounter = ({ value, duration = 2.0 }) => {
  const [display, setDisplay] = useState('0');
  const [inView, setInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  useEffect(() => {
    if (!inView) return;
    // Parse the numeric part (supports decimals like 99.9)
    const numericStr = value.replace(/[^0-9.]/g, '');
    const end = parseFloat(numericStr);
    const isDecimal = numericStr.includes('.');
    const decimalPlaces = isDecimal ? numericStr.split('.')[1].length : 0;
    
    // Check if original value starts with Rupee symbol
    const hasRupeePrefix = value.startsWith('₹');
    
    // Extract suffix without the Rupee symbol prefix
    const cleanValueForSuffix = hasRupeePrefix ? value.slice(1) : value;
    const suffix = cleanValueForSuffix.replace(/[0-9.]/g, '');
    
    if (isNaN(end) || end === 0) return;

    const totalMs = duration * 1000;
    const steps = 80;
    const intervalMs = Math.max(Math.floor(totalMs / steps), 16);
    let current = 0;
    const increment = end / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      const formatted = isDecimal ? current.toFixed(decimalPlaces) : Math.floor(current).toString();
      setDisplay((hasRupeePrefix ? '₹' : '') + formatted + suffix);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return (
    <span ref={elementRef} className="font-heading font-black tracking-tight">
      {display}
    </span>
  );
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const partnerTypes = [
    { value: 'Retailer', label: 'Retailer Outlet', desc: 'Shop owners offering recharges and utility bill payment services.' },
    { value: 'CSP', label: 'CSP Agent', desc: 'Customer Service Point terminals with higher commission thresholds.' },
    { value: 'Corporate', label: 'Business Merchant', desc: 'Enterprise integrations and dedicated corporate wallets.' },
    { value: 'Individual', label: 'Individual User', desc: 'Personal digital transaction wallet.' }
  ];

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: 'Retailer',
    message: ''
  });

  // Live Transaction Simulation
  const [liveTxs, setLiveTxs] = useState([
    { id: 1, service: 'Electricity Bill', amount: '₹2,450', status: 'Success', time: 'Just now', icon: <FiCreditCard className="text-primary" /> },
    { id: 2, service: 'Fastag Recharge', amount: '₹1,500', status: 'Success', time: '2 mins ago', icon: <FiCreditCard className="text-primary" /> },
    { id: 3, service: 'Jio Prepaid Recharge', amount: '₹299', status: 'Success', time: '5 mins ago', icon: <FiSmartphone className="text-primary" /> }
  ]);

  useEffect(() => {
    const servicesList = [
      { name: 'Electricity Bill', amt: '₹1,890', icon: <FiCreditCard className="text-primary" /> },
      { name: 'Airtel Prepaid', amt: '₹199', icon: <FiSmartphone className="text-primary" /> },
      { name: 'Tata Sky DTH', amt: '₹399', icon: <FiSmartphone className="text-primary" /> },
      { name: 'Piped Gas Bill', amt: '₹1,120', icon: <FiCreditCard className="text-primary" /> },
      { name: 'Fastag Recharge', amt: '₹1,500', icon: <FiCreditCard className="text-primary" /> },
      { name: 'Vi Mobile Recharge', amt: '₹149', icon: <FiSmartphone className="text-primary" /> },
      { name: 'Water Board Bill', amt: '₹450', icon: <FiCreditCard className="text-primary" /> },
      { name: 'BSNL Broadband', amt: '₹599', icon: <FiCreditCard className="text-primary" /> },
      { name: 'LPG Gas Booking', amt: '₹1,050', icon: <FiZap className="text-primary" /> },
      { name: 'Dish TV Recharge', amt: '₹249', icon: <FiSmartphone className="text-primary" /> }
    ];

    const timer = setInterval(() => {
      const randomService = servicesList[Math.floor(Math.random() * servicesList.length)];
      const newTx = {
        id: Date.now(),
        service: randomService.name,
        amount: randomService.amt,
        status: 'Success',
        time: 'Just now',
        icon: randomService.icon
      };
      setLiveTxs(prev => {
        const updated = [newTx, ...prev.slice(0, 2)];
        return updated.map((tx, idx) => {
          if (idx === 0) return tx;
          return { ...tx, time: `${idx * 2}m ago` };
        });
      });
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // Track Scrolling for Header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', phone: '', businessType: 'Retailer', message: '' });
      }, 5000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Nav scroll helper
  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Services Data — focused on core platform offerings
  const services = [
    {
      id: 'mobile-recharges',
      title: 'Mobile Recharges',
      description: 'Instant prepaid top-ups and postpaid bill payments for all major operators — Jio, Airtel, Vi, and BSNL — processed within seconds.',
      icon: <FiSmartphone className="text-2xl text-primary" />
    },
    {
      id: 'dth-recharges',
      title: 'DTH Recharges',
      description: 'Seamless television DTH pack recharges for Tata Sky, Dish TV, Sun Direct, Videocon D2H, and all major providers.',
      icon: <FiMonitor className="text-2xl text-primary" />
    },
    {
      id: 'utility-bills',
      title: 'Utility Bill Payments',
      description: 'Pay electricity, piped gas, water board, broadband, and landline bills instantly via BBPS-certified payment gateways.',
      icon: <FiCreditCard className="text-2xl text-primary" />
    },
    {
      id: 'wallet-system',
      title: 'Agent Wallet System',
      description: 'Top up your dedicated transaction wallet via UPI, net banking, or debit card and process unlimited transactions for your customers.',
      icon: <FiActivity className="text-2xl text-primary" />
    },
    {
      id: 'csp-services',
      title: 'Retailer & CSP Earnings',
      description: 'Earn real-time commissions on every mobile recharge, DTH top-up, and utility bill payment processed through your outlet. Settle to bank 24×7.',
      icon: <FiUsers className="text-2xl text-primary" />
    }
  ];

  // Access Channels — wallet-based platform touchpoints
  const accessChannels = [
    {
      title: 'Web Merchant Portal',
      description: 'Access your full payment dashboard from any browser. View wallet balance, live transaction logs, commission earnings, and settlement history.',
      icon: <FiMonitor className="text-3xl text-primary" />
    },
    {
      title: 'Android Mobile App',
      description: 'Carry the full payment terminal in your pocket. Recharge mobiles and pay utility bills anytime, anywhere.',
      icon: <FiSmartphone className="text-3xl text-primary" />
    },
    {
      title: 'Instant Wallet Top-Up',
      description: 'Fund your agent wallet instantly via UPI, IMPS, or net banking. Zero waiting time — start processing transactions immediately after top-up.',
      icon: <FiActivity className="text-3xl text-primary" />
    },
    {
      title: 'Real-Time Commission',
      description: 'Every mobile recharge, DTH top-up, and bill payment credits commission directly to your wallet. Withdraw to your bank account 24×7 with zero delays.',
      icon: <FiTrendingUp className="text-3xl text-primary" />
    }
  ];

  // Process Steps (How Onboarding Works)
  const processSteps = [
    {
      step: '01',
      title: 'Submit Application',
      subtitle: 'Partnership Request',
      description: 'Provide your business details and register as a merchant partner through our online portal.'
    },
    {
      step: '02',
      title: 'Digital e-KYC',
      subtitle: 'Paperless Verification',
      description: 'Verify your ID instantly using Aadhaar/PAN integrations for safe account activation.'
    },
    {
      step: '03',
      title: 'Wallet Top Up',
      subtitle: 'Fund Operations',
      description: 'Fund your transaction wallet instantly using UPI, debit card, or net banking paths.'
    },
    {
      step: '04',
      title: 'Serve Customers',
      subtitle: 'Process Transactions',
      description: 'Collect bills, recharge phones, and provide digital utility services immediately.'
    },
    {
      step: '05',
      title: 'Instant Commissions',
      subtitle: 'Earn Profits',
      description: 'Earn a commission on every single transaction, credited in real-time to your wallet.'
    },
    {
      step: '06',
      title: '24/7 Bank Settlement',
      subtitle: 'Withdraw Earnings',
      description: 'Move wallet balances directly to your personal bank account instantly at any hour of the day.'
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Ramesh Gupta',
      role: 'Owner, Gupta Multi-Store, Lucknow',
      company: 'Retailer Agent',
      quote: 'Joining Yugantika as a recharge and bill payment agent changed my shop completely. I now process 60–70 mobile recharges, DTH topups, and utility bills every single day. Commissions hit my wallet instantly after every transaction — it\'s a real income source.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'
    },
    {
      name: 'Priyanka Sharma',
      role: 'Manager, Digipoint Services, Pune',
      company: 'CSP Partner',
      quote: 'Our CSP outlet handles mobile recharges, electricity bills, and fast utility payments for hundreds of customers weekly. Yugantika\'s wallet top-up is instant and the BBPS bill payment gateway never fails. Customers trust us because it works every time.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80'
    },
    {
      name: 'Suresh Patel',
      role: 'Operator, Patel Digital Point, Surat',
      company: 'Retail Agent',
      quote: 'The bill payment speed is what sets Yugantika apart. My customers pay electricity and gas bills with complete peace of mind. Combined with mobile recharges, my outlet has become the go-to utility hub in our area.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80'
    }
  ];

  const handleNextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // FAQ Accordion Data
  const faqs = [
    {
      question: 'What services does Yugantika offer?',
      answer: 'Yugantika is a wallet-based digital fintech platform offering: Mobile Recharges (Jio, Airtel, Vi, BSNL), DTH Recharges (Tata Sky, Dish TV, Sun Direct), and Utility Bill Payments (Electricity, Gas, Water, Broadband via BBPS). Agents also earn real-time commissions on every transaction.'
    },
    {
      question: 'How does the agent wallet system work?',
      answer: 'After onboarding, you receive a dedicated transaction wallet. Top it up via UPI, net banking, or debit card — the funds are credited instantly. You then use this wallet balance to process recharges and bill payments for your customers. Every transaction earns you a commission credited immediately to your wallet, which you can withdraw to your bank 24×7.'
    },
    {
      question: 'How can I become a Yugantika Retailer or CSP Agent?',
      answer: 'Fill out the partner onboarding form on this page or contact us at info@yugantika.com. Our team will verify your details via a quick paperless e-KYC (Aadhaar/PAN), activate your merchant account, and help you top up your wallet so you can start earning commissions from day one.'
    },
    {
      question: 'How fast are recharges and bill payments processed?',
      answer: 'Utility bill payments via BBPS are confirmed in real-time with official digital receipts. Mobile and DTH recharges activate within moments of payment, keeping transaction delay to a minimum.'
    },
    {
      question: 'Is my transaction data and wallet balance secure?',
      answer: 'Absolutely. Yugantika uses AES-256 bit SSL encryption for all transactions, Two-Factor Authentication (2FA) for all merchant logins, and follows PCI-DSS compliance standards. Your wallet balance and customer data are protected by bank-grade security infrastructure at all times.'
    }
  ];
  const currentPartner = partnerTypes.find(p => p.value === formData.businessType) || partnerTypes[0];

  return (
    <div className="relative min-h-screen bg-bg-light text-slate-900 selection:bg-primary selection:text-white font-sans overflow-hidden">
      
      {/* BACKGROUND DECORATIONS (Floating Organic Glows & Luxury Light Grids) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-40"></div>
        
        {/* Soft Organic Brand Green Orbs */}
        <div className="absolute top-[8%] left-[-15%] w-[550px] h-[550px] rounded-full bg-primary/8 blur-[100px] animate-float"></div>
        <div className="absolute top-[38%] right-[-15%] w-[600px] h-[600px] rounded-full bg-primary-hover/6 blur-[120px] animate-float-delayed"></div>
        <div className="absolute bottom-[8%] left-[15%] w-[500px] h-[500px] rounded-full bg-primary/7 blur-[100px] animate-float"></div>
      </div>

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-[var(--bg-color)]/95 backdrop-blur-md border-b border-[var(--border-color)] shadow-sm' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3.5 cursor-pointer hover:opacity-95 transition-opacity" onClick={() => scrollToSection('home')}>
            <img src={logoImg} alt="Yugantika Solutions" className="h-12 w-auto min-w-[48px] object-contain shrink-0" />
            <div className="flex flex-col text-left">
              <span className="font-heading font-extrabold text-xl tracking-tight text-slate-900 dark:text-slate-100 leading-none">YUGANTIKA</span>
              <span className="text-[9.5px] text-primary-hover tracking-widest font-extrabold uppercase mt-0.5">FINTECH UTILITIES</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-bold text-slate-700 dark:text-slate-300">
            {['home', 'about', 'services', 'channels', 'process', 'why-us', 'faq'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="hover:text-primary-hover transition-colors uppercase tracking-wider relative group cursor-pointer"
              >
                {section.replace('-', ' ')}
                <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-gradient-to-r from-primary to-primary-hover hover:shadow-[0_4px_15px_rgba(88,187,12,0.3)] text-white font-bold text-xs tracking-wider uppercase rounded-full transition-all duration-300 hover:scale-[1.03] cursor-pointer"
            >
              Become Partner
            </button>
          </div>

          {/* Mobile Actions Container */}
          <div className="flex md:hidden items-center gap-3">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-slate-800 dark:text-slate-100 hover:text-primary transition-colors p-2"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE NAV MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-55 bg-[var(--bg-color)]/98 backdrop-blur-xl flex flex-col px-6 py-6"
          >
            {/* Custom Overlay Header */}
            <div className="flex items-center justify-between mb-10 pb-4 border-b border-[var(--border-color)]">
              <div className="flex items-center gap-3.5 cursor-pointer" onClick={() => { setMobileMenuOpen(false); scrollToSection('home'); }}>
                <img src={logoImg} alt="Yugantika Solutions" className="h-10 w-auto min-w-[40px] object-contain shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="font-heading font-extrabold text-lg tracking-tight text-slate-900 dark:text-slate-100 leading-none">YUGANTIKA</span>
                  <span className="text-[8.5px] text-primary-hover tracking-widest font-extrabold uppercase mt-0.5">FINTECH UTILITIES</span>
                </div>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-800 dark:text-slate-200 hover:text-primary transition-colors p-2 cursor-pointer"
                aria-label="Close Menu"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Links container */}
            <div className="flex-1 flex flex-col justify-center my-auto">
              <div className="flex flex-col gap-5 text-lg font-heading font-bold text-slate-800 dark:text-slate-200 text-center">
                {['home', 'about', 'services', 'channels', 'process', 'why-us', 'faq', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setTimeout(() => scrollToSection(section), 100);
                    }}
                    className="hover:text-primary transition-colors uppercase tracking-wide py-2.5 border-b border-slate-200/60 dark:border-slate-900/40 hover:border-primary/20 cursor-pointer"
                  >
                    {section.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Button */}
            <div className="mt-8 pb-6 flex flex-col items-center gap-4">
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  setTimeout(() => scrollToSection('contact'), 100);
                }}
                className="px-8 py-3 bg-gradient-to-r from-primary to-primary-hover text-white font-bold text-xs tracking-wider uppercase rounded-full shadow-md w-full max-w-[240px]"
              >
                Become Agent
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SECTION 1: HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary-hover text-xs font-bold uppercase tracking-wider shadow-sm">
                <FiZap className="animate-pulse" /> BBPS Certified Payments Portal
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.08] text-gradient-dark">
                The Future of <br />
                <span className="text-gradient-green">Digital Payments</span>, <br />
                Simplified.
              </motion.h1>

              <motion.p variants={fadeIn} className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
                Yugantika is a wallet-based digital fintech platform empowering retailers and agents to offer mobile recharges, DTH recharges, and utility bill payments — earning real-time commissions on every transaction.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-4 pt-2">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-7 py-3.5 bg-gradient-to-r from-primary to-primary-hover text-white font-bold text-xs tracking-wider uppercase rounded-full shadow-[0_4px_15px_rgba(88,187,12,0.3)] hover:shadow-[0_6px_25px_rgba(88,187,12,0.4)] transition-all duration-300 hover:scale-[1.03] flex items-center gap-2 group"
                >
                  Join CSP Network <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="px-7 py-3.5 glass-panel glass-panel-hover text-slate-800 font-bold text-xs tracking-wider uppercase rounded-full transition-all duration-300"
                >
                  Explore Services
                </button>
              </motion.div>

              {/* Quick statistics */}
              <motion.div variants={fadeIn} className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-slate-100 max-w-2xl">
                <div>
                  <div className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-gradient-dark"><AnimatedCounter value="₹85Cr+" /></div>
                  <div className="text-[9px] text-slate-500 font-extrabold uppercase mt-2 tracking-widest leading-none">Business Volume</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-gradient-dark"><AnimatedCounter value="5000+" /></div>
                  <div className="text-[9px] text-slate-500 font-extrabold uppercase mt-2 tracking-widest leading-none">Active CSP Outlets</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-gradient-dark"><AnimatedCounter value="99.9%" /></div>
                  <div className="text-[9px] text-slate-500 font-extrabold uppercase mt-2 tracking-widest leading-none">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-gradient-dark">Instant</div>
                  <div className="text-[9px] text-slate-500 font-extrabold uppercase mt-2 tracking-widest leading-none">Wallet Payouts</div>
                </div>
              </motion.div>

              {/* Live Transaction Ticker */}
              <motion.div 
                variants={fadeIn} 
                className="mt-8 p-4 glass-panel rounded-2xl border border-[var(--border-color)] max-w-xl text-left shadow-sm"
              >
                <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                  <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span> Live Transactions Feed
                  </span>
                  <span className="text-[8.5px] bg-primary/8 text-primary px-2.5 py-0.5 rounded-full font-extrabold uppercase tracking-wider">Real-Time</span>
                </div>
                <div className="space-y-2 overflow-hidden h-[96px] relative">
                  <AnimatePresence mode="popLayout">
                    {liveTxs.map((tx) => (
                      <motion.div
                        key={tx.id}
                        layout
                        initial={{ opacity: 0, y: -20, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.98 }}
                        transition={{ duration: 0.25 }}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-primary/4 border border-primary/8 hover:scale-[1.01] transition-transform duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-lg bg-primary/8 flex items-center justify-center text-primary shrink-0">
                            {tx.icon}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-800">{tx.service}</div>
                            <div className="text-[9px] text-slate-450">{tx.time}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-heading font-black text-primary">{tx.amount}</span>
                          <span className="text-[8px] px-1.5 py-0.5 bg-green-500/8 text-green-600 border border-green-500/15 rounded font-extrabold uppercase tracking-wider">Success</span>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Clean Minimalist Ecosystem Constellation Orbit */}
          <div className="lg:col-span-5 relative flex justify-center items-center h-[500px]">
            {/* Ambient Rotators */}
            <div className="absolute w-[450px] h-[450px] bg-primary/5 rounded-full blur-[90px] -z-10 animate-pulse-slow"></div>

            {/* Orbit Container */}
            <div className="relative w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] flex items-center justify-center">
              
              {/* Outer Orbit Line */}
              <div className="absolute inset-0 rounded-full border border-dashed border-primary/20 animate-spin-slow"></div>
              
              {/* Inner Orbit Line */}
              <div className="absolute inset-8 rounded-full border border-primary/10 animate-spin-reverse-slow"></div>

              {/* Central Logo Sphere */}
              <motion.div 
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-b from-[#1a2213] to-[#12160F] border border-primary/20 shadow-xl shadow-primary/10 flex flex-col items-center justify-center p-2 sm:p-3 z-20"
              >
                <img src={logoImg} alt="Yugantika Logo" className="h-8 sm:h-10 w-auto min-w-[32px] sm:min-w-[40px] object-contain" />
                <span className="text-[8px] font-heading font-black text-slate-200 tracking-wider mt-1 uppercase">YUGANTIKA</span>
              </motion.div>

              {/* Orbiting Node 1: Fastag (Top Center) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 glass-panel p-3 rounded-2xl border border-primary/20 shadow-lg shadow-primary/5 flex items-center gap-2 z-10"
              >
                <div className="h-7 w-7 rounded-lg bg-primary/15 flex items-center justify-center text-primary-hover shrink-0">
                  <FiCreditCard size={14} />
                </div>
                <div className="text-left leading-none">
                  <div className="text-[9px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Service</div>
                  <div className="text-[10px] text-slate-800 dark:text-slate-100 font-black mt-0.5">Fastag Pay</div>
                </div>
              </motion.div>

              {/* Orbiting Node 2: Mobile Recharge (Middle Right) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute top-1/4 -right-4 sm:-right-10 glass-panel p-3 rounded-2xl border border-primary/20 shadow-lg shadow-primary/5 flex items-center gap-2 z-10"
              >
                <div className="h-7 w-7 rounded-lg bg-primary/15 flex items-center justify-center text-primary-hover shrink-0">
                  <FiSmartphone size={14} />
                </div>
                <div className="text-left leading-none">
                  <div className="text-[9px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Service</div>
                  <div className="text-[10px] text-slate-800 dark:text-slate-100 font-black mt-0.5">Mobile Recharge</div>
                </div>
              </motion.div>

              {/* Orbiting Node 3: DTH Recharge (Bottom Right) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-4 -right-2 sm:-right-4 glass-panel p-3 rounded-2xl border border-primary/20 shadow-lg shadow-primary/5 flex items-center gap-2 z-10"
              >
                <div className="h-7 w-7 rounded-lg bg-primary/15 flex items-center justify-center text-primary-hover shrink-0">
                  <FiSmartphone size={14} />
                </div>
                <div className="text-left leading-none">
                  <div className="text-[9px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">DTH</div>
                  <div className="text-[10px] text-slate-800 dark:text-slate-100 font-black mt-0.5">DTH Recharge</div>
                </div>
              </motion.div>

              {/* Orbiting Node 4: Wallet (Bottom Left) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-4 -left-2 sm:-left-4 glass-panel p-3 rounded-2xl border border-primary/20 shadow-lg shadow-primary/5 flex items-center gap-2 z-10"
              >
                <div className="h-7 w-7 rounded-lg bg-primary/15 flex items-center justify-center text-primary-hover shrink-0">
                  <FiActivity size={14} />
                </div>
                <div className="text-left leading-none">
                  <div className="text-[9px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Agent</div>
                  <div className="text-[10px] text-slate-800 dark:text-slate-100 font-black mt-0.5">Wallet System</div>
                </div>
              </motion.div>

              {/* Orbiting Node 5: CSP Agent (Middle Left) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-1/4 -left-4 sm:-left-10 glass-panel p-3 rounded-2xl border border-primary/20 shadow-lg shadow-primary/5 flex items-center gap-2 z-10"
              >
                <div className="h-7 w-7 rounded-lg bg-primary/15 flex items-center justify-center text-primary-hover shrink-0">
                  <FiUsers size={14} />
                </div>
                <div className="text-left leading-none">
                  <div className="text-[9px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Network</div>
                  <div className="text-[10px] text-slate-800 dark:text-slate-100 font-black mt-0.5">Retailer CSP</div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>      {/* SECTION 2: ABOUT US (CORE PILLARS) */}
      <section id="about" className="py-24 relative z-10 border-t border-slate-100 dark:border-slate-800/80 bg-[var(--about-bg)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs text-primary-hover font-bold tracking-widest uppercase bg-primary/5 border border-primary/15 px-4 py-1.5 rounded-full inline-block">Our Mission</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black mt-4 text-gradient-dark tracking-tight">
              Everyday Financial Services,<br />Built for Every Indian
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual Panel Left */}
            <motion.div 
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden glass-panel p-6 sm:p-8 md:p-10 border border-slate-200/70 shadow-xl flex flex-col justify-between min-h-[450px] md:h-[450px]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
              
              <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-red-400/80"></span>
                  <span className="w-3.5 h-3.5 rounded-full bg-yellow-400/80"></span>
                  <span className="w-3.5 h-3.5 rounded-full bg-green-400/80"></span>
                </div>
                <div className="text-[11px] text-slate-400 font-bold font-mono">transaction_clearing_flow.svg</div>
              </div>

              {/* Graphic Flow Nodes */}
              <div className="my-auto flex flex-col gap-6 relative">
                {/* Node line connectors */}
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary-hover to-transparent"></div>
                
                <div className="flex items-start gap-4 z-10">
                  <div className="h-12 w-12 bg-primary/10 rounded-xl border border-primary/20 flex items-center justify-center text-primary-hover font-bold shadow-sm">
                    <FiSmartphone />
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-slate-900">Utility Request Initiated</h4>
                    <p className="text-xs text-slate-500 mt-1">Merchant captures bill parameters or mobile recharge values via our easy interface.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 z-10">
                  <div className="h-12 w-12 bg-slate-100 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-700/50 flex items-center justify-center text-slate-600 dark:text-slate-350 font-bold">
                    <FiLayers />
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-slate-900">BBPS Certified Validation</h4>
                    <p className="text-xs text-slate-500 mt-1">Official national gateway fetches balance, confirms payee identity, and clears invoice.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 z-10">
                  <div className="h-12 w-12 bg-slate-100 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-700/50 flex items-center justify-center text-slate-600 dark:text-slate-350 font-bold">
                    <FiZap />
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-slate-900">Instant Wallet Settlement</h4>
                    <p className="text-xs text-slate-500 mt-1">Funds clear instantly, credit agent wallets, and trigger commissions.</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                <span>Clearing Router Status: Optimal</span>
                <span className="text-primary-hover flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span> Live synced
                </span>
              </div>
            </motion.div>

            {/* Content Right */}
            <motion.div 
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col text-left justify-center space-y-6"
            >
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-slate-900 leading-tight">
                One Wallet. Three Services. Unlimited Earning Potential.
              </h3>
              
              <p className="text-slate-600 text-base leading-relaxed">
                Yugantika is a wallet-based fintech platform built for retailers and CSP agents who want to offer fast, trusted digital financial services to their local customers — mobile recharges, DTH recharges, and utility bill payments — all from a single dashboard, while earning commission on every transaction.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
                <div className="p-5 glass-panel glass-panel-hover rounded-2xl text-left">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary-hover font-bold mb-3">
                    01
                  </div>
                  <h4 className="font-heading font-bold text-slate-900 text-sm">Wallet-Based System</h4>
                  <p className="text-xs text-slate-500 mt-1">Top up once. Process unlimited recharges and bill payments instantly.</p>
                </div>

                <div className="p-5 glass-panel glass-panel-hover rounded-2xl text-left">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary-hover font-bold mb-3">
                    02
                  </div>
                  <h4 className="font-heading font-bold text-slate-900 text-sm">Commission Every Transaction</h4>
                  <p className="text-xs text-slate-500 mt-1">Earn on every mobile recharge, DTH top-up, and bill payment — in real time.</p>
                </div>

                <div className="p-5 glass-panel glass-panel-hover rounded-2xl text-left">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary-hover font-bold mb-3">
                    03
                  </div>
                  <h4 className="font-heading font-bold text-slate-900 text-sm">BBPS Certified & Secure</h4>
                  <p className="text-xs text-slate-500 mt-1">All bill payments route through the official BBPS gateway with PCI-DSS grade encryption.</p>
                </div>

                <div className="p-5 glass-panel glass-panel-hover rounded-2xl text-left">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary-hover font-bold mb-3">
                    04
                  </div>
                  <h4 className="font-heading font-bold text-slate-900 text-sm">24×7 Bank Settlement</h4>
                  <p className="text-xs text-slate-500 mt-1">Withdraw your wallet commissions directly to your bank account any time of the day.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES */}
      <section id="services" className="py-24 relative z-10 border-t border-slate-100 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs text-primary-hover font-bold tracking-widest uppercase bg-primary/5 border border-primary/15 px-4 py-1.5 rounded-full inline-block">Services</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black mt-4 text-gradient-dark tracking-tight">
              Everything You Need to Earn
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
              Four core services. One wallet. Instant commissions. Everything your retail outlet needs to become a digital payment hub for your community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                onClick={() => scrollToSection('contact')}
                className="group relative rounded-3xl p-6 glass-panel glass-panel-hover overflow-hidden flex flex-col justify-between text-left min-h-[250px] cursor-pointer"
            >
                {/* Subtle soft gradient glow */}
                <div className="absolute -top-[50%] -right-[50%] w-48 h-48 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-300"></div>
                
                <div>
                  <div className="h-11 w-11 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-150 group-hover:border-primary/30 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(88,187,12,0.15)]">
                    {service.icon}
                  </div>
                  <h3 className="font-heading font-bold text-base text-slate-900 mt-4 group-hover:text-primary-hover transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-primary-hover opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Partner Onboarding <FiArrowRight className="translate-y-[0.5px]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SUPPORTED CHANNELS & DEVICES (Ecosystem, NO TECH STACK) */}
      <section id="channels" className="py-24 relative z-10 border-t border-slate-100 dark:border-slate-800/80 bg-[var(--about-bg)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs text-primary-hover font-bold tracking-widest uppercase bg-primary/5 border border-primary/15 px-4 py-1.5 rounded-full inline-block">How It Works</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black mt-4 text-gradient-dark tracking-tight">
              Your Platform, Your Way
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
              Access Yugantika's wallet-based platform through a web portal or mobile app. Process recharges and utility bill payments with ease.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {accessChannels.map((chan, index) => (
              <motion.div
                key={chan.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 sm:p-8 rounded-3xl glass-panel glass-panel-hover text-left flex flex-col justify-between min-h-[320px]"
              >
                <div className="space-y-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/25 text-primary-hover">
                    {chan.icon}
                  </div>
                  <h3 className="font-heading font-black text-lg text-slate-900">{chan.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{chan.description}</p>
                </div>
                
                <div className="pt-4 flex items-center justify-between border-t border-slate-100/80 dark:border-slate-800/80 text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                  <span>Channel Status</span>
                  <span className="text-primary-hover flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span> Live Integration
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: ONBOARDING PROCESS */}
      <section id="process" className="py-24 relative z-10 border-t border-slate-100 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs text-primary-hover font-bold tracking-widest uppercase bg-primary/5 border border-primary/15 px-4 py-1.5 rounded-full inline-block">Partner Journey</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black mt-4 text-gradient-dark tracking-tight">
              Onboarding Process
            </h2>
          </div>

          {/* Timeline Layout */}
          <div className="relative max-w-5xl mx-auto">
            {/* Connector line (Responsive: left-6 on mobile, center on desktop) */}
            <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-primary-hover to-transparent transform -translate-x-1/2 z-10"></div>

            <div className="space-y-12 md:space-y-16">
              {processSteps.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div 
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex flex-col md:flex-row items-center relative w-full"
                  >
                    {/* Content Card */}
                    <div className={`w-full md:w-1/2 pl-14 md:pl-0 flex ${isEven ? 'md:justify-start md:pl-10 order-2' : 'md:justify-end md:pr-10 order-1'}`}>
                      <div className={`glass-panel p-6 sm:p-8 rounded-3xl w-full text-left relative transition-all duration-300 hover:border-primary/25 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                        {/* Leaf corner details */}
                        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/25 rounded-tr-3xl pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/25 rounded-bl-3xl pointer-events-none"></div>

                        <span className="text-primary-hover text-[10px] uppercase tracking-wider font-bold">{step.subtitle}</span>
                        <h3 className="font-heading font-black text-lg text-slate-900 mt-1.5 mb-2.5">{step.title}</h3>
                        <p className="text-xs text-slate-500 leading-relaxed">{step.description}</p>
                      </div>
                    </div>

                    {/* Timeline Center Bullet Node */}
                    <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--bg-color)] border-2 border-primary shadow-[0_0_15px_rgba(88,187,12,0.18)] text-primary-hover font-heading font-black text-xs">
                      {step.step}
                    </div>

                    {/* Empty placeholder block to balance the layout on desktop */}
                    <div className={`w-1/2 hidden md:block ${isEven ? 'order-1' : 'order-2'}`}></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY PARTNER WITH US */}
      <section id="why-us" className="py-24 relative z-10 border-t border-slate-100 dark:border-slate-800/80 bg-[var(--about-bg)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs text-primary-hover font-bold tracking-widest uppercase bg-primary/5 border border-primary/15 px-4 py-1.5 rounded-full inline-block">Why Us</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black mt-4 text-gradient-dark tracking-tight">
              Why Retailers Partner with Yugantika
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: High Commissions */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-panel p-8 rounded-3xl border border-slate-200/60 dark:border-slate-850/50 hover:border-primary/25 transition-all duration-300 text-left"
            >
              <div className="h-11 w-11 bg-primary/10 rounded-2xl flex items-center justify-center text-primary-hover mb-6">
                <FaRupeeSign size={18} />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900">High Commission Split</h3>
              <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
                Enjoy some of the most profitable and high-yielding commission margins across recharges and utility settlements.
              </p>
            </motion.div>

            {/* Card 2: 24/7 Agent Desk */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="glass-panel p-8 rounded-3xl border border-slate-200/60 dark:border-slate-850/50 hover:border-primary/25 transition-all duration-300 text-left"
            >
              <div className="h-11 w-11 bg-primary/10 rounded-2xl flex items-center justify-center text-primary-hover mb-6">
                <FiClock size={20} />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900">24/7 Agent Desk</h3>
              <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
                Our operations team supports your business 24/7, tracking payment status and troubleshooting transaction queries.
              </p>
            </motion.div>

            {/* Card 3: Direct Bank Settlement */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.16 }}
              className="glass-panel p-8 rounded-3xl border border-slate-200/60 dark:border-slate-850/50 hover:border-primary/25 transition-all duration-300 text-left"
            >
              <div className="h-11 w-11 bg-primary/10 rounded-2xl flex items-center justify-center text-primary-hover mb-6">
                <FiZap size={20} />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900">Direct Bank Settlements</h3>
              <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
                Settle transaction wallet funds back to your personal linked bank account instantly at any hour.
              </p>
            </motion.div>

            {/* Card 4: High Security */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.24 }}
              className="glass-panel p-8 rounded-3xl border border-slate-200/60 dark:border-slate-850/50 hover:border-primary/25 transition-all duration-300 text-left"
            >
              <div className="h-11 w-11 bg-primary/10 rounded-2xl flex items-center justify-center text-primary-hover mb-6">
                <FiShield size={20} />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900">Secure Core</h3>
              <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
                Aadhaar biometrics verification, encrypted sessions, and device pairing shield your account wallet.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7: ACHIEVEMENTS (Counters) */}
      <section id="achievements" className="py-24 relative z-10 border-t border-slate-100 dark:border-slate-800/80 bg-[var(--footer-bg)]">
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="glass-panel rounded-[2.5rem] border border-slate-200/60 dark:border-slate-800/80 p-8 sm:p-12 md:p-16 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
              
              <div className="flex flex-col items-center">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary-hover mb-4 shadow-sm">
                  <FiCreditCard size={24} />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight">
                  <AnimatedCounter value="₹85Cr+" />
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-2">Transaction Volume</div>
              </div>

              <div className="flex flex-col items-center">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary-hover mb-4 shadow-sm">
                  <FiUsers size={24} />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight">
                  <AnimatedCounter value="5000+" />
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-2">Merchant Partners</div>
              </div>

              <div className="flex flex-col items-center">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary-hover mb-4 shadow-sm">
                  <FiGlobe size={24} />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight">
                  <AnimatedCounter value="20+" />
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-2">States Covered</div>
              </div>

              <div className="flex flex-col items-center">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary-hover mb-4 shadow-sm">
                  <FiZap size={24} />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight">
                  <AnimatedCounter value="99.9%" />
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-2">Payment Uptime</div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: TESTIMONIALS */}
      <section id="testimonials" className="py-24 relative z-10 border-t border-slate-100 dark:border-slate-800/80 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs text-primary-hover font-bold tracking-widest uppercase bg-primary/5 border border-primary/15 px-4 py-1.5 rounded-full inline-block">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black mt-4 text-gradient-dark tracking-tight">
              Partner Feedback
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Carousel Container */}
            <div className="overflow-hidden relative px-2 py-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                  className="glass-panel p-8 sm:p-10 md:p-12 rounded-[2rem] border border-slate-200/60 dark:border-slate-800/80 shadow-xl relative"
                >
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center text-center md:text-left">
                    <img 
                      src={testimonials[testimonialIndex].avatar} 
                      alt={testimonials[testimonialIndex].name}
                      className="w-20 h-20 rounded-2xl object-cover border-2 border-primary/30 shadow-sm shrink-0"
                    />
                    
                    <div className="space-y-4 flex-1 w-full">
                      {/* Star ratings */}
                      <div className="flex gap-1 justify-center md:justify-start">
                        {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                          <FiStar key={i} className="text-yellow-500 fill-yellow-500 text-xs" />
                        ))}
                      </div>

                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-350 leading-relaxed italic text-center md:text-left">
                        "{testimonials[testimonialIndex].quote}"
                      </p>

                      <div className="border-t border-slate-100 dark:border-slate-800/60 pb-3 pt-3 flex flex-col sm:flex-row items-center sm:justify-between gap-3 text-center sm:text-left">
                        <div>
                          <h4 className="font-heading font-bold text-slate-900 dark:text-slate-200 text-sm">{testimonials[testimonialIndex].name}</h4>
                          <p className="text-xs text-slate-500">{testimonials[testimonialIndex].role}</p>
                        </div>
                        <span className="text-xs font-semibold px-3 py-1 bg-primary/10 border border-primary/25 rounded-md text-primary-hover">{testimonials[testimonialIndex].company}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="flex justify-between items-center mt-6 px-4">
              {/* Pagination Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${testimonialIndex === i ? 'w-8 bg-primary' : 'w-2 bg-slate-200 dark:bg-slate-700'}`}
                  ></button>
                ))}
              </div>

              {/* Arrow Buttons */}
              <div className="flex gap-3">
                <button 
                  onClick={handlePrevTestimonial}
                  className="h-10 w-10 glass-panel border border-slate-200 dark:border-slate-800/80 hover:border-primary/30 rounded-full flex items-center justify-center text-slate-700 hover:text-primary transition-all duration-300 shadow-sm cursor-pointer"
                  aria-label="Previous Testimonial"
                >
                  <FiChevronLeft size={20} />
                </button>
                <button 
                  onClick={handleNextTestimonial}
                  className="h-10 w-10 glass-panel border border-slate-200 dark:border-slate-800/80 hover:border-primary/30 rounded-full flex items-center justify-center text-slate-700 hover:text-primary transition-all duration-300 shadow-sm cursor-pointer"
                  aria-label="Next Testimonial"
                >
                  <FiChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQ */}
      <section id="faq" className="py-24 relative z-10 border-t border-slate-100 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs text-primary-hover font-bold tracking-widest uppercase bg-primary/5 border border-primary/15 px-4 py-1.5 rounded-full inline-block">Support FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black mt-4 text-gradient-dark tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeAccordion === index;
              return (
                <div 
                  key={index}
                  className="glass-panel rounded-2xl border border-slate-200/60 dark:border-slate-800/80 overflow-hidden transition-colors text-left"
                >
                  <button
                    onClick={() => setActiveAccordion(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                  >
                    <span className="font-heading font-bold text-slate-900 text-sm sm:text-base group-hover:text-primary transition-colors flex items-center gap-3">
                      <FiLayers className="text-primary-hover shrink-0" /> {faq.question}
                    </span>
                    <FiChevronDown 
                      className={`text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-primary-hover' : ''}`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 leading-relaxed text-left">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 10: CONTACT */}
      <section id="contact" className="py-24 relative z-10 border-t border-slate-100 dark:border-slate-800/80 bg-[var(--about-bg)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
            
            {/* Form Left */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="text-left space-y-4 mb-8">
                <span className="text-xs text-primary-hover font-bold tracking-widest uppercase bg-primary/5 border border-primary/15 px-4 py-1.5 rounded-full inline-block">Onboarding</span>
                <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-slate-900 leading-tight">
                  Let's Form A Partnership
                </h2>
              </div>

              {/* Glassmorphic Contact Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800/80 bg-transparent shadow-xl relative overflow-visible flex-1 flex flex-col justify-center">
                
                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.form 
                      key="contact-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit} 
                      className="space-y-4 text-left"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[9px] uppercase font-extrabold text-slate-550 tracking-widest" htmlFor="name">Full Name *</label>
                          <input 
                            required
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe" 
                            className="w-full px-4 py-3.5 text-xs bg-[var(--card-bg)] border border-slate-200/60 rounded-xl focus:border-primary/85 focus:ring-1 focus:ring-primary/85 focus:outline-none transition-all duration-200 text-slate-800 placeholder-slate-450 hover:border-slate-350"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[9px] uppercase font-extrabold text-slate-550 tracking-widest" htmlFor="email">Email Address *</label>
                          <input 
                            required
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@company.com" 
                            className="w-full px-4 py-3.5 text-xs bg-[var(--card-bg)] border border-slate-200/60 rounded-xl focus:border-primary/85 focus:ring-1 focus:ring-primary/85 focus:outline-none transition-all duration-200 text-slate-800 placeholder-slate-450 hover:border-slate-350"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[9px] uppercase font-extrabold text-slate-550 tracking-widest" htmlFor="phone">Phone Number</label>
                          <input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 98765 43210" 
                            className="w-full px-4 py-3.5 text-xs bg-[var(--card-bg)] border border-slate-200/60 rounded-xl focus:border-primary/85 focus:ring-1 focus:ring-primary/85 focus:outline-none transition-all duration-200 text-slate-800 placeholder-slate-450 hover:border-slate-350"
                          />
                        </div>
                        <div className="space-y-1.5 relative z-30" ref={dropdownRef}>
                          <label className="text-[9px] uppercase font-extrabold text-slate-550 tracking-widest">Partner Type</label>
                          
                          {/* Selected display button */}
                          <button
                            type="button"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="w-full px-4 py-3.5 text-xs bg-[var(--card-bg)] border border-slate-200/60 rounded-xl focus:border-primary/85 focus:ring-1 focus:ring-primary/85 focus:outline-none transition-all duration-300 text-slate-800 flex items-center justify-between cursor-pointer hover:border-primary/45 h-[44px]"
                          >
                            <div className="flex flex-col text-left">
                              <span className="font-bold text-slate-850">{currentPartner.label}</span>
                            </div>
                            <FiChevronDown size={16} className={`text-slate-400 transition-transform duration-300 ${dropdownOpen ? 'rotate-180 text-primary' : ''}`} />
                          </button>

                          {/* Floating Options Dropdown */}
                          <AnimatePresence>
                            {dropdownOpen && (
                              <motion.div
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.15 }}
                                className="absolute left-0 right-0 mt-2 bg-[var(--bg-color)]/98 backdrop-blur-xl border border-[var(--border-color)] rounded-xl shadow-2xl z-40 overflow-hidden divide-y divide-slate-100"
                              >
                                {partnerTypes.map((type) => {
                                  const isSelected = formData.businessType === type.value;
                                  return (
                                    <button
                                      key={type.value}
                                      type="button"
                                      onClick={() => {
                                        setFormData(prev => ({ ...prev, businessType: type.value }));
                                        setDropdownOpen(false);
                                      }}
                                      className={`w-full px-4 py-2.5 text-left transition-all duration-200 flex flex-col hover:bg-primary/10 cursor-pointer ${isSelected ? 'bg-primary/5 border-l-2 border-primary pl-[14px]' : ''}`}
                                    >
                                      <div className="flex items-center justify-between">
                                        <span className={`text-[11px] font-bold ${isSelected ? 'text-primary' : 'text-slate-800'}`}>
                                          {type.label}
                                        </span>
                                        {isSelected && <FiCheck className="text-primary text-[10px]" />}
                                      </div>
                                      <span className="text-[9px] text-slate-500 mt-0.5 leading-snug">
                                        {type.desc}
                                      </span>
                                    </button>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[9px] uppercase font-extrabold text-slate-550 tracking-widest" htmlFor="message">Message / Details *</label>
                        <textarea 
                          required
                          id="message" 
                          name="message" 
                          rows="4" 
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your business requirement or agent query..." 
                          className="w-full px-4 py-3.5 text-xs bg-[var(--card-bg)] border border-slate-200/60 rounded-xl focus:border-primary/85 focus:ring-1 focus:ring-primary/85 focus:outline-none transition-all duration-200 text-slate-800 placeholder-slate-450 hover:border-slate-350 resize-none"
                        ></textarea>
                      </div>

                      <button 
                        type="submit" 
                        className="w-full py-3.5 bg-gradient-to-r from-primary to-primary-hover hover:shadow-[0_4px_15px_rgba(88,187,12,0.3)] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer"
                      >
                        Submit Onboarding Request
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div 
                      key="success-message"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                    >
                      <div className="h-16 w-16 bg-primary/10 rounded-full border border-primary/20 flex items-center justify-center text-primary-hover shadow-sm mb-2">
                        <FiCheck size={30} />
                      </div>
                      <h3 className="font-heading font-black text-2xl text-slate-900">Request Received!</h3>
                      <p className="text-xs text-slate-500 max-w-md">
                        Thank you for reaching out, <span className="text-slate-900 font-bold">{formData.name}</span>. Our merchant team will contact you via email at <span className="text-slate-900 font-bold">{formData.email}</span> within 24 hours.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

            {/* Info Right */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              
              <div className="glass-panel p-8 rounded-3xl border border-slate-200/70 dark:border-slate-800/80 shadow-xl flex-1 flex flex-col justify-center space-y-6 text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
                
                <h3 className="font-heading font-black text-xl text-slate-900 mb-2">Office Information</h3>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-hover shrink-0">
                    <FiMail size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Email Address</div>
                    <a href="mailto:info@yugantika.com" className="text-sm text-slate-800 hover:text-primary transition-colors mt-0.5 block font-bold">info@yugantika.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-hover shrink-0">
                    <FiPhone size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Contact Number</div>
                    <a href="tel:+917208660476" className="text-sm text-slate-800 hover:text-primary transition-colors mt-0.5 block font-bold">+91 72086 60476</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-hover shrink-0">
                    <FiMapPin size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Registered Office</div>
                    <div className="text-sm text-slate-800 mt-0.5 font-bold leading-relaxed">
                      108, The Avenue, Nr Leela Hotel, Andheri - East Mumbai 400059.
                    </div>
                  </div>
                </div>
              </div>

              {/* Real Map Locator Card */}
              <div className="glass-panel rounded-3xl border border-slate-200/70 h-[220px] overflow-hidden relative shadow-lg">
                <iframe 
                  title="Yugantika Solutions Headquarters Map"
                  src="https://maps.google.com/maps?q=108,%20The%20Avenue,%20Nr%20Leela%20Hotel,%20Andheri%20-%20East%20Mumbai%20400059&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[20%] contrast-[105%] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                ></iframe>
              </div>

            </div>
          </div>
        </div>
      </section>
        
        <footer className="bg-[var(--footer-bg)] border-t border-slate-200/50 relative z-10 pt-16 pb-12 text-slate-650">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-slate-200/40">
            
            {/* Logo Column */}
            <div className="md:col-span-5 text-left space-y-4">
              <div className="flex items-center gap-3.5 cursor-pointer hover:opacity-95 transition-opacity" onClick={() => scrollToSection('home')}>
                <img src={logoImg} alt="Yugantika Solutions" className="h-12 w-auto min-w-[48px] object-contain shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="font-heading font-extrabold text-xl tracking-tight text-slate-900 leading-none">YUGANTIKA</span>
                  <span className="text-[9.5px] text-primary-hover tracking-widest font-extrabold uppercase mt-0.5">FINTECH UTILITIES</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
                Yugantika Solutions Private Limited is a fintech partner of choice for forward-thinking merchants, retailers, and agents. We design and deliver fast, secure payment utilities.
              </p>
              <div className="flex gap-3 pt-2">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="h-9 w-9 glass-panel hover:bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center text-slate-650 hover:text-primary-hover transition-all duration-300" aria-label="LinkedIn">
                  <FiLinkedin size={15} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="h-9 w-9 glass-panel hover:bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center text-slate-650 hover:text-primary-hover transition-all duration-300" aria-label="Facebook">
                  <FiFacebook size={15} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="h-9 w-9 glass-panel hover:bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center text-slate-650 hover:text-primary-hover transition-all duration-300" aria-label="Instagram">
                  <FiInstagram size={15} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="h-9 w-9 glass-panel hover:bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center text-slate-650 hover:text-primary-hover transition-all duration-300" aria-label="Twitter">
                  <FiTwitter size={15} />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="md:col-span-3 text-left space-y-4">
              <h4 className="font-heading font-bold text-xs uppercase text-slate-900 tracking-widest">Navigation</h4>
              <ul className="space-y-2.5 text-xs text-slate-500">
                {['home', 'about', 'services', 'channels', 'process'].map((sec) => (
                  <li key={sec}>
                    <button
                      onClick={() => scrollToSection(sec)}
                      className="hover:text-primary transition-colors text-left cursor-pointer"
                    >
                      {sec.charAt(0).toUpperCase() + sec.slice(1).replace('-', ' ')}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Column */}
            <div className="md:col-span-4 text-left space-y-4">
              <h4 className="font-heading font-bold text-xs uppercase text-slate-900 tracking-widest">Partner Support</h4>
              <ul className="space-y-2.5 text-xs text-slate-500">
                <li>
                  <button onClick={() => scrollToSection('why-us')} className="hover:text-primary transition-colors cursor-pointer text-left">Why Yugantika</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('faq')} className="hover:text-primary transition-colors cursor-pointer text-left">Frequently Asked Questions</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors cursor-pointer text-left">Onboarding Form</button>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Area */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left border-t border-slate-200/40">
            <span className="text-[10px] text-slate-500 tracking-wide">
              &copy; 2026 Yugantika Solutions Private Limited. All Rights Reserved.
            </span>
            <div className="flex gap-6 text-[10px] text-slate-500 font-semibold">
              <button onClick={() => setShowPrivacyModal(true)} className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</button>
              <button onClick={() => setShowTermsModal(true)} className="hover:text-primary transition-colors cursor-pointer">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {showPrivacyModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-955/45 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setShowPrivacyModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-[var(--bg-color)] rounded-3xl max-w-2xl w-full max-h-[80vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800/80 overflow-hidden relative text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800/80 bg-slate-100 dark:bg-slate-900/30">
                <div>
                  <h3 className="font-heading font-black text-lg text-slate-900 dark:text-slate-100">Privacy Policy</h3>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase mt-0.5">Last Updated: June 2026</p>
                </div>
                <button 
                  onClick={() => setShowPrivacyModal(false)}
                  className="h-8 w-8 rounded-full border border-slate-200 dark:border-slate-800/80 hover:border-primary/30 flex items-center justify-center text-slate-400 dark:text-slate-400 hover:text-primary-hover transition-colors bg-transparent shadow-sm cursor-pointer"
                >
                  <FiX size={16} />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-5 text-xs sm:text-sm text-slate-700 dark:text-slate-400 leading-relaxed max-h-[60vh] scrollbar-thin">
                <p>
                  Welcome to Yugantika Solutions Private Limited ("Company", "we", "our", or "us"). We are committed to protecting your privacy and ensuring that your personal information is handled securely and responsibly.
                </p>

                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-slate-900 dark:text-slate-200 text-base">1. Information We Collect</h4>
                  <p>We may collect the following information when you use our website:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Full Name</li>
                    <li>Email Address</li>
                    <li>Phone Number</li>
                    <li>Company Name</li>
                    <li>Project Requirements</li>
                    <li>Messages submitted through contact forms</li>
                    <li>Technical information such as IP address, browser type, device information, and website usage data</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-slate-900 dark:text-slate-200 text-base">2. How We Use Your Information</h4>
                  <p>We use the collected information to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Respond to inquiries and requests</li>
                    <li>Provide our services and solutions</li>
                    <li>Communicate regarding projects and consultations</li>
                    <li>Improve website functionality and user experience</li>
                    <li>Send important updates related to our services</li>
                    <li>Ensure website security and prevent unauthorized activities</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-slate-900 dark:text-slate-200 text-base">3. Information Sharing</h4>
                  <p>We do not sell, rent, or trade your personal information to third parties.</p>
                  <p>Your information may be shared only with:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Authorized employees and contractors</li>
                    <li>Service providers assisting in website operations</li>
                    <li>Government authorities when required by law</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-slate-900 dark:text-slate-200 text-base">4. Data Security</h4>
                  <p>
                    We implement appropriate technical and organizational measures to protect your information against unauthorized access, loss, misuse, or disclosure.
                  </p>
                  <p>
                    However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-slate-900 dark:text-slate-200 text-base">5. Cookies</h4>
                  <p>
                    Our website may use cookies and similar technologies to improve user experience, analyze website traffic, and enhance website performance.
                  </p>
                  <p>Users may choose to disable cookies through their browser settings.</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-slate-900 dark:text-slate-200 text-base">6. Third-Party Services</h4>
                  <p>
                    Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of such websites.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-slate-900 dark:text-slate-200 text-base">7. Data Retention</h4>
                  <p>
                    We retain personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by applicable laws.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-slate-900 dark:text-slate-200 text-base">8. Your Rights</h4>
                  <p>You may request to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Delete your information</li>
                    <li>Withdraw consent for future communications</li>
                  </ul>
                  <p>Requests may be sent to our official contact email.</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-slate-900 dark:text-slate-200 text-base">9. Children's Privacy</h4>
                  <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-slate-900 dark:text-slate-200 text-base">10. Changes to This Policy</h4>
                  <p>
                    We reserve the right to update this Privacy Policy at any time. Updated versions will be posted on this page with a revised effective date.
                  </p>
                </div>

                <div className="space-y-2 border-t border-slate-200 dark:border-slate-800 pt-4">
                  <h4 className="font-heading font-bold text-slate-900 dark:text-slate-200 text-base">11. Contact Us</h4>
                  <p>If you have any questions regarding this Privacy Policy, please contact:</p>
                  <div className="mt-2 p-3 bg-slate-100 dark:bg-slate-900/40 rounded-xl space-y-1 text-slate-700 dark:text-slate-300 font-bold border border-slate-200 dark:border-slate-800/60">
                    <div>Yugantika Solutions Private Limited</div>
                    <div>Email: <a href="mailto:info@yugantika.com" className="text-primary-hover hover:underline">info@yugantika.com</a></div>
                    <div>Phone: +91 72086 60476</div>
                    <div>Website: <a href="http://www.yugantika.com" target="_blank" rel="noreferrer" className="text-primary-hover hover:underline">www.yugantika.com</a></div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-850 bg-slate-100 dark:bg-slate-900/30 flex justify-end">
                <button 
                  onClick={() => setShowPrivacyModal(false)}
                  className="px-5 py-2 bg-gradient-to-r from-primary to-primary-hover text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm hover:scale-[1.02] transition-all cursor-pointer"
                >
                  Close Policy
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Terms & Conditions Modal */}
      <AnimatePresence>
        {showTermsModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-955/40 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setShowTermsModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-[var(--bg-color)] rounded-3xl max-w-2xl w-full max-h-[80vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800/80 overflow-hidden relative text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800/80 bg-slate-100 dark:bg-slate-900/30">
                <div>
                  <h3 className="font-heading font-black text-lg text-slate-900 dark:text-slate-100">Terms & Conditions</h3>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase mt-0.5">Last Updated: June 2026</p>
                </div>
                <button 
                  onClick={() => setShowTermsModal(false)}
                  className="h-8 w-8 rounded-full border border-slate-200 dark:border-slate-800/80 hover:border-primary/30 flex items-center justify-center text-slate-400 dark:text-slate-400 hover:text-primary-hover transition-colors bg-transparent shadow-sm cursor-pointer"
                >
                  <FiX size={16} />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-5 text-xs sm:text-sm text-slate-700 dark:text-slate-400 leading-relaxed max-h-[60vh] scrollbar-thin">
                <p>
                  Welcome to Yugantika Solutions Private Limited. By accessing or using our website, you agree to comply with and be bound by these Terms & Conditions.
                </p>

                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-slate-900 dark:text-slate-200 text-base">1. Acceptance of Terms</h4>
                  <p>By using this website, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.</p>
                  <p>If you do not agree with any part of these terms, please discontinue use of the website.</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-slate-900 dark:text-slate-200 text-base">2. Services</h4>
                  <p>
                    Yugantika Solutions Private Limited provides digital financial utility services, BBPS-certified bill payments, mobile and DTH recharges, Aadhaar Enabled Payment System (AePS) cash-outs, retailer/CSP agency onboarding, and related payment solutions.
                  </p>
                  <p>All services are subject to separate agreements, proposals, or contracts where applicable.</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-slate-900 dark:text-slate-200 text-base">3. Intellectual Property</h4>
                  <p>All website content including logos, designs, graphics, text, software, images, and branding materials are the property of Yugantika Solutions Private Limited and protected under applicable intellectual property laws.</p>
                  <p>Unauthorized reproduction, distribution, or modification is prohibited.</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-slate-900 dark:text-slate-200 text-base">4. User Responsibilities</h4>
                  <p>You agree not to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Use the website for unlawful purposes</li>
                    <li>Attempt unauthorized access to systems</li>
                    <li>Distribute malicious software</li>
                    <li>Interfere with website operations</li>
                    <li>Submit false or misleading information</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-slate-900 dark:text-slate-200 text-base">5. Project Engagement</h4>
                  <p>Any project discussions, quotations, proposals, or consultations provided through the website do not create a binding agreement unless confirmed through a signed contract or written approval.</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-slate-900 dark:text-slate-200 text-base">6. Limitation of Liability</h4>
                  <p>Yugantika Solutions Private Limited shall not be liable for:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Direct or indirect damages</li>
                    <li>Data loss</li>
                    <li>Business interruption</li>
                    <li>Website downtime</li>
                    <li>Third-party service failures</li>
                  </ul>
                  <p>arising from the use of this website.</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-slate-900 dark:text-slate-200 text-base">7. Third-Party Links</h4>
                  <p>The website may contain links to third-party websites. We do not endorse or assume responsibility for their content, products, or services.</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-slate-900 dark:text-slate-200 text-base">8. Disclaimer</h4>
                  <p>The information on this website is provided for general informational purposes only.</p>
                  <p>While we strive for accuracy, we make no warranties regarding completeness, reliability, or suitability of the information provided.</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-slate-900 dark:text-slate-200 text-base">9. Privacy</h4>
                  <p>Your use of this website is also governed by our Privacy Policy.</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-slate-900 dark:text-slate-200 text-base">10. Modification of Terms</h4>
                  <p>We reserve the right to update these Terms & Conditions at any time without prior notice. Continued use of the website after updates constitutes acceptance of the revised terms.</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-slate-900 dark:text-slate-200 text-base">11. Governing Law</h4>
                  <p>These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes arising under these terms shall be subject to the jurisdiction of the competent courts in India.</p>
                </div>

                <div className="space-y-2 border-t border-slate-200 dark:border-slate-800 pt-4">
                  <h4 className="font-heading font-bold text-slate-900 dark:text-slate-200 text-base">12. Contact Information</h4>
                  <div className="mt-2 p-3 bg-slate-100 dark:bg-slate-900/40 rounded-xl space-y-1 text-slate-700 dark:text-slate-300 font-bold border border-slate-200 dark:border-slate-800/60">
                    <div>Yugantika Solutions Private Limited</div>
                    <div>Email: <a href="mailto:info@yugantika.com" className="text-primary-hover hover:underline">info@yugantika.com</a></div>
                    <div>Phone: +91 72086 60476</div>
                    <div>Website: <a href="http://www.yugantika.com" target="_blank" rel="noreferrer" className="text-primary-hover hover:underline">www.yugantika.com</a></div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-850 bg-slate-100 dark:bg-slate-900/30 flex justify-end">
                <button 
                  onClick={() => setShowTermsModal(false)}
                  className="px-5 py-2 bg-gradient-to-r from-primary to-primary-hover text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm hover:scale-[1.02] transition-all cursor-pointer"
                >
                  Close Terms
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
