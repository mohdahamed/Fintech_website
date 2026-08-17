import React, { useState, useEffect, useRef } from 'react';
import { Shield, Zap, BarChart3, CheckCircle2, ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
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
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
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

const Home = () => {
    const navigate = useNavigate();
    const { user, setShowSignup } = useAuth();
    
    // Hero Section 2
    const HeroSection2 = () => {
        const [ref, isInView] = useInView();
        return (
            <section ref={ref} className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className={`text-5xl md:text-7xl font-black tracking-tighter mb-6 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent ${
                        isInView ? 'opacity-100 animate-fadeInUp' : 'opacity-0'
                    }`}>
                        The Future of Finance is Here
                    </h1>
                    <p className={`text-xl text-slate-300 mb-8 max-w-2xl mx-auto ${
                        isInView ? 'opacity-100 animate-fadeInUp' : 'opacity-0'
                    }`} style={{ animationDelay: isInView ? '100ms' : '0ms' }}>
                        Secure, fast, and intelligent financial solutions powered by cutting-edge technology.
                    </p>
                    <button 
                        onClick={() => navigate('/services')}
                        className={`bg-emerald-500 hover:bg-emerald-600 text-slate-950 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 hover:shadow-lg active:scale-95 inline-flex items-center gap-2 ${
                            isInView ? 'opacity-100 animate-fadeInUp' : 'opacity-0'
                        }`} style={{ animationDelay: isInView ? '200ms' : '0ms' }}>
                        Get Started <ArrowRight size={20} />
                    </button>
                </div>
            </section>
        );
    };

    // Features Section
    const FeaturesSection = () => {
        const [ref, isInView] = useInView();
        return (
            <section ref={ref} className="py-20 px-6 bg-slate-900/50">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard icon={Shield} title="Bank-Level Security" desc="Industry-leading encryption and fraud prevention" delay={100} isVisible={isInView} />
                    <FeatureCard icon={Zap} title="Lightning Fast" desc="Transactions completed in seconds, not hours" delay={150} isVisible={isInView} />
                    <FeatureCard icon={BarChart3} title="Smart Analytics" desc="Real-time insights into your financial health" delay={200} isVisible={isInView} />
                </div>
            </section>
        );
    };

    // Testimonials Section
    const TestimonialsSection = () => {
        const [ref, isInView] = useInView();
        return (
            <section ref={ref} className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className={`text-center mb-8 ${isInView ? 'opacity-100 animate-fadeInDown' : 'opacity-0'}`}>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Loved by customers</h2>
                        <p className="text-slate-300 max-w-2xl mx-auto">Real stories from people and businesses using VORTEXPAY to move faster, safer, and smarter.</p>
                    </div>

                    <div className={`mt-8 ${isInView ? 'opacity-100 animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: isInView ? '200ms' : '0ms' }}>
                        <TestimonialsCarousel
                            items={[
                                { name: 'Michael C.', role: 'Investor', avatar: '👨‍💼', text: 'Analytics and execution are top-notch. My portfolio performance improved noticeably.' },
                                { name: 'Sarah J.', role: 'Founder', avatar: '👩‍💼', text: 'VORTEXPAY made international payouts effortless — fees are low and support is excellent.' },
                                { name: 'Michael C.', role: 'Investor', avatar: '👨‍💼', text: 'Analytics and execution are top-notch. My portfolio performance improved noticeably.' },
                                { name: 'Sarah J.', role: 'Founder', avatar: '👩‍💼', text: 'VORTEXPAY made international payouts effortless — fees are low and support is excellent.' },
                                { name: 'Michael C.', role: 'Investor', avatar: '👨‍💼', text: 'Analytics and execution are top-notch. My portfolio performance improved noticeably.' },
                                { name: 'Emma R.', role: 'Freelancer', avatar: '👩‍🎨', text: 'Fast payouts and intuitive app — bookkeeping has never been easier.' },
                                { name: 'Michael C.', role: 'Investor', avatar: '👨‍💼', text: 'Analytics and execution are top-notch. My portfolio performance improved noticeably.' },
                                { name: 'Emma R.', role: 'Freelancer', avatar: '👩‍🎨', text: 'Fast payouts and intuitive app — bookkeeping has never been easier.' },
                            ]}
                        />
                    </div>

                    <div className={`text-center mt-10 ${isInView ? 'opacity-100 animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: isInView ? '300ms' : '0ms' }}>
                        <Link to="/testimonials" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 px-6 py-3 rounded-full font-bold transition transform hover:scale-105 hover:shadow-lg active:scale-95">Read more testimonials</Link>
                    </div>
                </div>
            </section>
        );
    };

    // About Section
    const AboutSection = () => {
        const [ref, isInView] = useInView();
        return (
            <section ref={ref} id="about" className="py-24 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className={`md:w-1/2 relative ${isInView ? 'opacity-100 animate-slideInLeft' : 'opacity-0'}`}>
                        <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl rounded-full"></div>
                        <img
                            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                            alt="Financial Chart"
                            className="relative rounded-3xl border border-white/10 shadow-2xl transform-gpu hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className={`md:w-1/2 ${isInView ? 'opacity-100 animate-slideInRight' : 'opacity-0'}`}>
                        <h2 className="text-4xl font-bold mb-6 text-white leading-tight">We're building the infrastructure of future finance.</h2>
                        <p className="text-lg text-slate-400 mb-8">
                            Traditional banks are slow. We're fast. VortexPay connects your traditional fiat accounts with the speed of decentralized finance.
                        </p>
                        <div className="space-y-4">
                            {["Regulated by Global Authorities", "Audited Smart Contracts", "Transparent Fee Structure"].map((item, i) => (
                                <div key={item} className={`flex items-center gap-3 ${isInView ? 'opacity-100 animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: isInView ? `${300 + i * 100}ms` : '0ms' }}>
                                    <CheckCircle2 className="text-emerald-500 group-hover:scale-110 transition-transform" size={20} />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    // Services Section
    const ServicesSection = () => {
        const [ref, isInView] = useInView();
        return (
            <section ref={ref} id="services" className="py-24 px-6 bg-gradient-to-r from-emerald-600 to-cyan-600">
                <div className="max-w-7xl mx-auto text-slate-950">
                    <div className={`flex flex-col md:flex-row justify-between items-end mb-12 gap-6 ${isInView ? 'opacity-100 animate-fadeInUp' : 'opacity-0'}`}>
                        <div className="max-w-xl">
                            <h2 className="text-4xl font-black mb-4">Tailored financial services for every stage.</h2>
                        </div>
                        <button className="flex items-center gap-2 font-bold border-b-2 border-slate-950 pb-1 uppercase tracking-wider text-sm hover:gap-3 transition-all">
                            See all services <ArrowRight size={16} />
                        </button>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {['Asset Management', 'Global Remittance', 'Business Credit', 'Tax Automation'].map((service, i) => (
                            <div key={service} className={`bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all transform-gpu hover:scale-105 hover:-translate-y-2 hover:shadow-lg cursor-pointer ${
                                isInView ? 'opacity-100 animate-fadeInUp' : 'opacity-0'
                            }`} style={{ animationDelay: isInView ? `${300 + i * 100}ms` : '0ms' }}>
                                <h4 className="font-bold text-lg">{service}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    // Contact Section
    // const ContactSection = () => {
    //     const [ref, isInView] = useInView();
    //     return (
    //         <section ref={ref} id="contact" className="py-24 px-6">
    //             <div className={`max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-12 border border-white/5 text-center hover:border-emerald-500/20 transition-all duration-500 ${
    //                 isInView ? 'opacity-100 animate-fadeInUp' : 'opacity-0'
    //             }`}>
    //                 <h2 className="text-4xl font-bold mb-4 text-white">Ready to scale your finances?</h2>
    //                 <p className="text-slate-400 mb-10">Join 50,000+ businesses growing with VortexPay.</p>
    //                 <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
    //                     <input type="email" placeholder="Enter your work email" className="flex-1 bg-slate-800 border-none rounded-2xl px-6 py-4 focus:ring-2 ring-emerald-500 outline-none transition-all hover:bg-slate-700" />
    //                     <button 
    //                         onClick={() => setShowSignup(true)}
    //                         className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 px-8 py-4 rounded-2xl font-bold transform hover:scale-105 active:scale-95 transition-all">
    //                         Join Now
    //                     </button>
    //                 </div>
    //             </div>
    //         </section>
    //     );
    // };

    const FeatureCard = ({ icon: Icon, title, desc, delay = 0, isVisible = false }) => (
        <div 
            className={`group p-8 bg-slate-900/50 border border-slate-800 rounded-3xl hover:border-emerald-500/50 transform-gpu will-change-transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ${
                isVisible ? 'opacity-100 animate-fadeInUp' : 'opacity-0'
            }`} 
            style={{ animationDelay: isVisible ? `${delay}ms` : '0ms' }}
        >
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Icon className="text-emerald-400" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">{title}</h3>
            <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{desc}</p>
        </div>
    );

    const TestimonialsCarousel = ({ items = [], visible = 2 }) => {
        const [index, setIndex] = useState(0);
        const len = items.length;
        const slides = Math.max(1, Math.ceil(len / visible));
        const intervalRef = useRef(null);

        useEffect(() => {
            start();
            return () => stop();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        const start = () => {
            stop();
            intervalRef.current = setInterval(() => {
                setIndex(i => (i + 1) % slides);
            }, 4000);
        };

        const stop = () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };

        const go = (i) => setIndex((i + slides) % slides);

        if (!len) return null;

        // group items into slides
        const grouped = Array.from({ length: slides }).map((_, s) => items.slice(s * visible, s * visible + visible));

        return (
            <div className="relative">
                <div className="overflow-hidden">
                    <div
                        className="flex w-full"
                        style={{ transform: `translateX(-${index * 100}%)`, transition: 'transform 500ms ease' }}
                        onMouseEnter={stop}
                        onMouseLeave={start}
                    >
                        {grouped.map((group, gi) => (
                            <div key={gi} className="w-full shrink-0 px-2">
                                <div className="flex flex-col md:flex-row gap-4">
                                    {group.map((t, i) => (
                                        <div key={i} className="w-full md:w-1/2 px-2">
                                            <div className="relative group p-6 rounded-2xl bg-white/5 border border-emerald-500/10 hover:shadow-lg transition transform hover:-translate-y-1">
                                                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-500" />
                                                <div className="relative z-10 flex items-start gap-4">
                                                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center text-2xl">{t.avatar}</div>
                                                    <div>
                                                        <div className="flex items-baseline gap-3">
                                                            <h4 className="font-bold text-white">{t.name}</h4>
                                                            <span className="text-slate-400 text-sm">{t.role}</span>
                                                        </div>
                                                        <div className="flex gap-1 mt-2 text-amber-400">
                                                            {[...Array(5)].map((_, si) => (
                                                                <Star key={si} size={16} className="text-amber-400" />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                                <p className="relative z-10 mt-4 text-slate-300">{t.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={() => go(index - 1)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/5 rounded-full p-2 hover:bg-white/10"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={() => go(index + 1)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/5 rounded-full p-2 hover:bg-white/10"
                    aria-label="Next testimonial"
                >
                    <ChevronRight size={20} />
                </button>

                <div className="flex items-center justify-center gap-2 mt-6">
                    {Array.from({ length: slides }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => go(i)}
                            className={`w-2 h-2 rounded-full ${i === index ? 'bg-emerald-400' : 'bg-white/20'}`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        );
    };
    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
                {/* Hero Section */}
                <section className="pt-32 pb-24 px-6 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-6 opacity-100 animate-slideInUp">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                Trusted by 50,000+ businesses
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-white opacity-100 animate-fadeInUp">
                                Smart money for <span className="text-emerald-400 underline decoration-emerald-500/30 animate-shimmer">smart people.</span>
                            </h1>
                            <p className="text-lg text-slate-400 mb-12 opacity-100 animate-fadeInUp">
                                The all-in-one financial operating system. High-yield savings, global payments, and intelligent investing.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 opacity-100 animate-fadeInUp">
                                <button 
                                    onClick={() => setShowSignup(true)}
                                    className="px-10 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 rounded-2xl font-bold text-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all transform hover:scale-105 active:scale-95">
                                    Start for free
                                </button>
                                <Link to="/contact" className="px-10 py-4 border border-slate-700 rounded-2xl font-bold text-lg hover:bg-white/5 hover:border-emerald-500/50 transition-all transform hover:-translate-y-1 inline-flex items-center justify-center gap-2">
                                    Contact Sales <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* Right Card Image */}
                        <div className="hidden md:flex justify-center items-center relative group">
                            {/* Glow background effect */}
                            <div className="absolute -inset-8 bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-500 rounded-[3rem] opacity-0 group-hover:opacity-30 blur-3xl transition-all duration-700 animate-pulse"></div>
                            
                            {/* Card Container */}
                            <div className="relative w-full max-w-md h-96 perspective group-hover:scale-102 transition-transform duration-500">
                                <div className="w-full h-full bg-gradient-to-br from-emerald-400 via-cyan-400 to-emerald-600 rounded-3xl shadow-2xl transform-gpu hover:shadow-[0_20px_60px_rgba(16,185,129,0.4)] transition-all duration-500 group-hover:rotate-y-12 overflow-hidden relative">
                                    {/* Card Background Pattern */}
                                    <div className="absolute inset-0 opacity-20 ">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.3)_0%,transparent_50%)]"></div>
                                        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="relative h-full p-8 flex flex-col justify-between text-white">
                                        {/* Header */}
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="text-xs font-semibold opacity-80 tracking-widest mb-2">VORTEX PAY</p>
                                                <p className="text-sm font-bold opacity-90">PREMIUM</p>
                                            </div>
                                            <div className="w-12 h-8 bg-gradient-to-br from-white/40 to-white/20 rounded-lg flex items-center justify-center text-2xl font-black">
                                                <span>⚡</span>
                                            </div>
                                        </div>

                                        {/* Card Number */}
                                        <div className="space-y-2">
                                            <p className="text-sm opacity-75 tracking-widest">CARD NUMBER</p>
                                            <div className="flex justify-between text-lg font-mono tracking-wider">
                                                <span>•••• •••• •••• </span>
                                                <span className="font-bold">8765</span>
                                            </div>
                                        </div>

                                        {/* Card Details */}
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <p className="text-xs opacity-75 tracking-widest mb-1">CARD HOLDER</p>
                                                <p className="text-sm font-bold">YOUR NAME</p>
                                            </div>
                                            <div>
                                                <p className="text-xs opacity-75 tracking-widest mb-1">VALID THRU</p>
                                                <p className="text-sm font-mono font-bold">12/28</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Shimmer Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
                                </div>
                            </div>

                            {/* Floating animation dots */}
                            <div className="absolute top-10 left-5 w-2 h-2 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-100 animate-float" style={{ animationDelay: '0s' }}></div>
                            <div className="absolute bottom-20 right-8 w-2 h-2 bg-cyan-300 rounded-full opacity-0 group-hover:opacity-100 animate-float" style={{ animationDelay: '0.3s' }}></div>
                            <div className="absolute top-1/3 right-5 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-float" style={{ animationDelay: '0.6s' }}></div>
                        </div>
                    </div>
                </section>

                {/* Hero Section 2 */}
                <HeroSection2 />

                {/* Features Preview */}
                <FeaturesSection />

                {/* Testimonials Preview */}
                <TestimonialsSection />

                {/* About Section */}
                <AboutSection />

                {/* Services Section */}
                <ServicesSection />

                {/* Contact Section */}
                {/* <ContactSection /> */}
            </div>

            <style>{`
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

                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

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
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes shimmer {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.7;
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) translateX(0px);
                    }
                    25% {
                        transform: translateY(-12px) translateX(4px);
                    }
                    50% {
                        transform: translateY(-20px) translateX(-4px);
                    }
                    75% {
                        transform: translateY(-8px) translateX(6px);
                    }
                }

                @keyframes rotateCard {
                    0%, 100% {
                        transform: rotateX(0deg) rotateY(0deg);
                    }
                    50% {
                        transform: rotateX(5deg) rotateY(8deg);
                    }
                }

                .animate-fadeInUp {
                    animation: fadeInUp 0.7s ease-out forwards;
                }

                .animate-fadeInDown {
                    animation: fadeInDown 0.7s ease-out forwards;
                }

                .animate-slideInLeft {
                    animation: slideInLeft 0.8s ease-out forwards;
                }

                .animate-slideInRight {
                    animation: slideInRight 0.8s ease-out forwards;
                }

                .animate-slideInUp {
                    animation: slideInUp 0.6s ease-out forwards;
                }

                .animate-shimmer {
                    animation: shimmer 2s ease-in-out infinite;
                }

                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }

                .perspective {
                    perspective: 1000px;
                }

                .group:hover .perspective {
                    animation: rotateCard 3s ease-in-out infinite;
                }
            `}</style>
        </>
    );
};

export default Home;
