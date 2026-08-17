import React, { useState, useEffect, useRef } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        name: "James Wilson",
        role: "Crypto Trader",
        content: "The bridge between fiat and crypto is seamless. I've saved thousands in gas fees using their internal rails.",
        image: "https://i.pravatar.cc/150?u=james",
        size: "small"
    },
    {
        name: "Marcus Holloway",
        role: "CEO at DevScale",
        content: "VortexPay didn't just change our banking; they redefined our entire cash flow strategy. The AI insights are scary accurate.",
        image: "https://i.pravatar.cc/150?u=marcus",
        size: "large" // Takes up more space for visual interest
    },
    {
        name: "Sarah Jenkins",
        role: "CFO at Bloomly",
        content: "Managing payroll across 14 countries used to take a week. With VortexPay, it takes 14 minutes. The automation is world-class.",
        image: "https://i.pravatar.cc/150?u=sarah",
        size: "medium"
    },
    {
        name: "Elena Rodriguez",
        role: "Freelance Designer",
        content: "Finally, a fintech app that understands the gig economy. No hidden fees, just pure speed.",
        image: "https://i.pravatar.cc/150?u=elena",
        size: "small"
    },
    {
        name: "James Wilson",
        role: "Crypto Trader",
        content: "The bridge between fiat and crypto is seamless. I've saved thousands in gas fees using their internal rails.",
        image: "https://i.pravatar.cc/150?u=james",
        size: "small"
    },
    {
        name: "Sarah Jenkins",
        role: "CFO at Bloomly",
        content: "Managing payroll across 14 countries used to take a week. With VortexPay, it takes 14 minutes. The automation is world-class.",
        image: "https://i.pravatar.cc/150?u=sarah",
        size: "medium"
    }
];

const TestimonialCard = ({ item, isVisible }) => {
    const isLarge = item.size === "large";

    return (
        <>
        <div className={`relative group p-8 rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-500 transform-gpu hover:scale-105 hover:-translate-y-2 hover:shadow-xl ${isLarge ? 'md:col-span-2 md:row-span-2' : ''} ${isVisible ? 'opacity-100' : 'opacity-40'} transition-opacity duration-700`}>
            {/* Decorative Gradient Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-10 transition duration-500"></div>

            <div className="relative flex flex-col h-full cursor-pointer">
                <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-emerald-400 text-emerald-400" />
                    ))}
                </div>

                <Quote className="text-emerald-500/20 absolute top-6 right-8 animate-pulse" size={48} />

                <p className={`${isLarge ? 'text-2xl' : 'text-lg'} text-white font-medium leading-relaxed mb-8 italic`}>
                    "{item.content}"
                </p>

                <div className="mt-auto flex items-center gap-4">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-full border-2 border-emerald-500/20 group-hover:border-emerald-400 group-hover:scale-110 transition-all duration-300"
                    />
                    <div>
                        <h4 className="font-bold text-white">{item.name}</h4>
                        <p className="text-slate-500 text-sm uppercase tracking-wider font-semibold">{item.role}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const intervalRef = useRef(null);
    const cardsPerView = 3;
    const totalSlides = Math.ceil(testimonials.length / cardsPerView);

    const startAutoPlay = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % totalSlides);
        }, 9000);
    };

    const stopAutoPlay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        if (!isHovering) {
            startAutoPlay();
        }
        return () => stopAutoPlay();
    }, [isHovering, totalSlides]);

    const handlePrev = () => {
        setCurrentIndex(prev => (prev - 1 + totalSlides) % totalSlides);
        stopAutoPlay();
        startAutoPlay();
    };

    const handleNext = () => {
        setCurrentIndex(prev => (prev + 1) % totalSlides);
        stopAutoPlay();
        startAutoPlay();
    };

    const visibleIndices = testimonials
        .map((_, idx) => idx)
        .slice(currentIndex * cardsPerView, currentIndex * cardsPerView + cardsPerView);

    return (
        <section className="py-24 bg-slate-950 overflow-hidden relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-3">Wall of Trust</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        Loved by builders, <br /> trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">billions.</span>
                    </h3>
                </div>

                {/* Bento Grid with Auto-Carousel */}
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
                        {testimonials.map((t, idx) => (
                            <TestimonialCard 
                                key={idx} 
                                item={t}
                                isVisible={visibleIndices.includes(idx)}
                            />
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={handlePrev}
                        className="absolute -left-6 top-1/2 -translate-y-1/2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-3 transition-all transform hover:scale-110 z-20"
                        aria-label="Previous testimonials"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute -right-6 top-1/2 -translate-y-1/2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-3 transition-all transform hover:scale-110 z-20"
                        aria-label="Next testimonials"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Dot Indicators */}
                    <div className="flex items-center justify-center gap-2 mt-8">
                        {Array.from({ length: totalSlides }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setCurrentIndex(i);
                                    stopAutoPlay();
                                    startAutoPlay();
                                }}
                                className={`w-3 h-3 rounded-full transition-all ${i === currentIndex ? 'bg-emerald-400 w-8' : 'bg-white/20 hover:bg-white/40'}`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Brand Logos (Social Proof) */}
                <div className="mt-20 pt-10 border-t border-white/5">
                    <p className="text-center text-slate-500 text-sm mb-8 font-medium">TRUSTED BY INDUSTRY GIANTS</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Simple Placeholders for Logos */}
                        <span className="text-2xl font-bold text-white transform hover:scale-110 hover:-translate-y-1 transition-transform duration-300">STRIPE</span>
                        <span className="text-2xl font-bold text-white transform hover:scale-110 hover:-translate-y-1 transition-transform duration-300">REVOLUT</span>
                        <span className="text-2xl font-bold text-white transform hover:scale-110 hover:-translate-y-1 transition-transform duration-300">VISA</span>
                        <span className="text-2xl font-bold text-white transform hover:scale-110 hover:-translate-y-1 transition-transform duration-300">BINANCE</span>
                        <span className="text-2xl font-bold text-white transform hover:scale-110 hover:-translate-y-1 transition-transform duration-300">COINBASE</span>
                    </div>
                </div>
            </div>
        </section>
    );
}