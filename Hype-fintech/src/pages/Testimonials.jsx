import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle, Briefcase, Building2, TrendingUp } from 'lucide-react';

const testimonialsData = [
  {
    quote: "Switching to HYPE reduced our failed transaction rate by 40% overnight. The API is an absolute joy to work with, and the support team is incredible.",
    name: "Arjun Sharma",
    role: "CTO, Fintech Solutions India",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5,
    company: "Fintech Solutions",
    featured: true
  },
  {
    quote: "As a global marketplace, we needed a way to split payments and handle payouts in 50+ currencies. HYPE handles this natively. It's been a game changer for our scaling efforts.",
    name: "Priya Rao",
    role: "Founder, ShopGlobal Bharat",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
    company: "ShopGlobal",
    featured: false
  },
  {
    quote: "The virtual card issuing API allowed us to launch our expense management product 6 months ahead of schedule. Truly top-tier developer experience.",
    name: "Vikram Singh",
    role: "VP Product, SpendSmart India",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    rating: 5,
    company: "SpendSmart",
    featured: false
  },
  {
    quote: "We've saved countless engineering hours because we don't have to build custom fraud logic anymore. HYPE's ML network blocks bad actors before they even hit our servers.",
    name: "Neha Gupta",
    role: "Lead Engineer, Streamify India",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    rating: 5,
    company: "Streamify",
    featured: false
  },
  {
    quote: "The dashboard analytics are incredibly detailed. Our finance team reconciles books twice as fast now simply because the data granularity is unmatched.",
    name: "Rahul Verma",
    role: "CFO, Horizon SaaS",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    rating: 5,
    company: "Horizon",
    featured: false
  },
  {
    quote: "We evaluated 5 different payment providers. HYPE was the only one that could handle our complex multi-party routing requirements without hacky workarounds.",
    name: "Siddharth Malhotra",
    role: "COO, MarketConnect South Asia",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
    rating: 4,
    company: "MarketConnect",
    featured: false
  }
];

const Testimonials = () => {
  const featuredTestimonial = testimonialsData.find(t => t.featured);
  const regularTestimonials = testimonialsData.filter(t => !t.featured);

  return (
    <div className="min-h-screen section-padding mt-10 relative overflow-hidden bg-brand-dark">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-brand-cyan/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="container-padding mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold mb-6 tracking-wider uppercase">
               <CheckCircle className="w-3 h-3" />
               Verified Merchant Network
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              Trusted by the world's <br />
              <span className="text-gradient-hype">best engineering teams</span>
            </h1>
            <p className="text-lg text-slate-400 font-light">
              Don't just take our word for it. Here is what leading CTOs and founders say about building on HYPE's mission-critical rails.
            </p>
          </motion.div>
        </div>

        {/* Featured Testimonial */}
        {featuredTestimonial && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 relative group"
          >
             <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan/30 to-brand-blue/30 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
             <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 p-10 md:p-16 rounded-[2.5rem] overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-5">
                   <Quote className="w-40 h-40" />
                </div>
                
                <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                   <div className="w-48 h-48 rounded-3xl overflow-hidden border-4 border-brand-card shadow-2xl shrink-0">
                      <img src={featuredTestimonial.image} alt={featuredTestimonial.name} className="w-full h-full object-cover" />
                   </div>
                   
                   <div className="flex-1">
                      <div className="flex gap-1 mb-6">
                         {[...Array(featuredTestimonial.rating)].map((_, i) => (
                           <Star key={i} className="w-6 h-6 fill-yellow-500 text-yellow-500" />
                         ))}
                      </div>
                      <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8 italic">
                         "{featuredTestimonial.quote}"
                      </p>
                      <div>
                         <h4 className="text-xl font-bold text-white">{featuredTestimonial.name}</h4>
                         <p className="text-brand-cyan font-medium">{featuredTestimonial.role}</p>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>
        )}

        {/* Regular Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {regularTestimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-card/40 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] hover:bg-brand-card/60 transition-all flex flex-col group"
            >
              <div className="flex justify-between items-start mb-6">
                 <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < item.rating ? 'fill-yellow-500 text-yellow-500' : 'text-slate-600'}`} />
                    ))}
                 </div>
                 <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:border-brand-cyan/30 transition-colors">
                    <Building2 className="w-4 h-4 text-slate-500" />
                 </div>
              </div>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-10 flex-grow italic">
                "{item.quote}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="relative">
                   <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full border border-white/10" />
                   <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-brand-card flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white" />
                   </div>
                </div>
                <div>
                  <h4 className="text-white font-bold">{item.name}</h4>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">{item.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Impact Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-blue/10 border border-brand-blue/20 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
           <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-brand-blue font-bold tracking-widest uppercase text-xs">
                 <TrendingUp className="w-4 h-4" />
                 Network Growth
              </div>
              <h3 className="text-2xl font-black text-white">Join 500+ High-Growth Enterprises</h3>
           </div>
           <div className="flex gap-10">
              <div>
                 <div className="text-2xl font-black text-white">99.9%</div>
                 <div className="text-xs text-slate-500 font-bold uppercase">Customer CSAT</div>
              </div>
              <div>
                 <div className="text-2xl font-black text-white">1hr</div>
                 <div className="text-xs text-slate-500 font-bold uppercase">Avg. Support Response</div>
              </div>
           </div>
           <button className="px-8 py-4 bg-brand-blue text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shrink-0">
              Scale With Us
           </button>
        </motion.div>

      </div>
    </div>
  );
};

export default Testimonials;
