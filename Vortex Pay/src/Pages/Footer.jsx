import React, { useState } from 'react';
import { Mail, Twitter, Linkedin, Github, Facebook, MapPin, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    const footerLinks = {
        Service: [
            { label: 'Features', path: '/features' },
            { label: 'Services', path: '/services' }
        ],
        Company: [
            { label: 'About', path: '/about' },
            { label: 'Contact Us', path: '/contact' },
        ]
    };

    const socials = [
        { icon: Twitter, label: 'Twitter', link: 'https://www.linkedin.com/company/waapcoders-soft-technology-llp/posts/?feedView=all' },
        { icon: Linkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/company/waapcoders-soft-technology-llp/posts/?feedView=all' },
        { icon: Github, label: 'GitHub', link: 'https://www.linkedin.com/company/waapcoders-soft-technology-llp/posts/?feedView=all' },
        { icon: Facebook, label: 'Facebook', link: 'https://www.linkedin.com/company/waapcoders-soft-technology-llp/posts/?feedView=all' }
    ];

    return (
        <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-white border-t border-emerald-500/10 overflow-hidden">
            {/* Background gradient accent */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -translate-x-3/4 -translate-y-3/4"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl translate-x-3/4 translate-y-3/4"></div>

            <div className="relative">
                {/* Newsletter Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 mb-8 sm:mb-12 animate-fadeInUp">
                    <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-emerald-500/20 backdrop-blur-sm hover:border-emerald-500/40 transition-all duration-500">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Stay Updated</h3>
                                <p className="text-slate-300 text-sm sm:text-base">Get the latest fintech insights and VortexPay updates delivered to your inbox.</p>
                            </div>
                            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex-1 bg-slate-800/50 border border-emerald-500/30 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 ring-emerald-500 transition-all hover:bg-slate-800 text-sm sm:text-base"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold transform hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 flex-shrink-0 text-sm sm:text-base"
                                >
                                    <span className="hidden sm:inline">Subscribe</span> <ArrowRight size={16} />
                                </button>
                            </form>
                            {subscribed && (
                                <div className="fixed top-4 right-4 bg-emerald-500 text-slate-950 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold animate-fadeInUp text-xs sm:text-sm">
                                    ✓ Thanks for subscribing!
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
                        {/* Brand Section */}
                        <div className="col-span-2 sm:col-span-1 lg:col-span-1 animate-slideInLeft">
                            <div className="mb-6">
                                <h2 className="text-xl sm:text-2xl font-black text-emerald-400 mb-2 animate-pulse">VortexPay</h2>
                                <p className="text-slate-400 text-sm font-bold sm:text-sm">The future of finance, today.</p>
                                <h4 className='text-slate-400 text-xs '>We’ve stripped away the complexity of finance so you can finally lead your money, instead of following it.</h4>
                            </div>
                            {/* Contact Section */}
                            {/* <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-slate-300 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
                                    <MapPin size={18} className="text-emerald-400 shrink-0" />
                                    <span className="text-sm">123 Finance St, Tech City, TC 12345</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                                    <Phone size={18} className="text-emerald-400 shrink-0" />
                                    <span className="text-sm">+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300 animate-fadeInUp" style={{ animationDelay: '300ms' }}>
                                    <Mail size={18} className="text-emerald-400 shrink-0" />
                                    <span className="text-sm">hello@vortexpay.com</span>
                                </div>
                            </div> */}
                            {/* Social Links */}
                            {/* <div className="flex gap-4">
                                {socials.map((social, i) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={i}
                                            href={social.link}
                                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500/20 hover:text-emerald-400 transition-all transform hover:scale-110 animate-scaleIn"
                                            style={{ animationDelay: `${i * 100}ms` }}
                                            aria-label={social.label}
                                        >
                                            <Icon size={18} />
                                        </a>
                                    );
                                })}
                            </div> */}
                        </div>

                        {/* Links Sections */}
                        {Object.entries(footerLinks).map(([category, idx]) => (
                            <div key={category} className="animate-slideInUp" style={{ animationDelay: `${(Object.entries(footerLinks).findIndex(([k]) => k === category) + 1) * 100}ms` }}>
                                <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">{category}</h4>
                                <ul className="space-y-3">
                                    {footerLinks[category].map((link, i) => (
                                        <li key={i} className="animate-fadeInUp" style={{ animationDelay: `${(Object.entries(footerLinks).findIndex(([k]) => k === category) + 1) * 100 + i * 50}ms` }}>
                                            <Link
                                                to={link.path}
                                                className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 text-sm group inline-flex items-center gap-1"
                                            >
                                                {link.label}
                                                <span className="inline-block transform group-hover:translate-x-1 transition-transform">→</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        {/* Contact Section */}
                        <div className="space-y-4 mb-8">
                            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
                            <div className="flex items-center gap-3 text-slate-300 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
                                <MapPin size={18} className="text-emerald-400 shrink-0" />
                                <span className="text-sm">123 Finance St, Tech City, TC 12345</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                                <Phone size={18} className="text-emerald-400 shrink-0" />
                                <span className="text-sm">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300 animate-fadeInUp" style={{ animationDelay: '300ms' }}>
                                <Mail size={18} className="text-emerald-400 shrink-0" />
                                <span className="text-sm">hello@vortexpay.com</span>
                            </div>
                        </div>
                        <div className="">
                            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Follow Us</h4>
                            <div className="flex gap-4">
                                {socials.map((social, i) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={i}
                                            href={social.link}
                                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500/20 hover:text-emerald-400 transition-all transform hover:scale-110 animate-scaleIn"
                                            style={{ animationDelay: `${i * 100}ms` }}
                                            aria-label={social.label}
                                        >
                                            <Icon size={18} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                        
                    </div>

                    {/* Divider */}
                    <div className="border-t border-slate-800 pt-8"></div>

                    {/* Bottom Section */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 animate-fadeInUp" style={{ animationDelay: '500ms' }}>
                        <div className="text-slate-400 text-sm text-center md:text-left">
                            <p>&copy; 2026 VortexPay Technologies. All rights reserved.</p>
                            <p className="text-xs mt-2 text-slate-500">Built with innovation for the new economy.</p>
                        </div>
                        <div className="flex gap-6 text-xs text-slate-500">
                            <a href="#" className="hover:text-emerald-400 transition-colors hover:underline">Privacy Policy</a>
                            <a href="#" className="hover:text-emerald-400 transition-colors hover:underline">Terms of Service</a>
                            <a href="#" className="hover:text-emerald-400 transition-colors hover:underline">Cookie Settings</a>
                        </div>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-8 w-2 h-2 bg-emerald-400 rounded-full opacity-40 animate-float"></div>
                <div className="absolute bottom-16 left-12 w-3 h-3 bg-cyan-400 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
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

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                .animate-fadeInUp {
                    animation: fadeInUp 0.7s ease-out forwards;
                }

                .animate-slideInLeft {
                    animation: slideInLeft 0.8s ease-out forwards;
                }

                .animate-slideInUp {
                    animation: slideInUp 0.7s ease-out forwards;
                }

                .animate-scaleIn {
                    animation: scaleIn 0.6s ease-out forwards;
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </footer>
    );
};

export default Footer;
