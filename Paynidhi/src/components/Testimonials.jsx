import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Delhi, India',
      text: '"Niditi has made my banking transactions very easy. I can manage everything, anytime."',
    },
    {
      id: 2,
      name: 'Anjali Singh',
      location: 'Mumbai, India',
      text: '"Very user-friendly, and every transaction settles quickly. Exactly what our shop needed."',
    },
    {
      id: 3,
      name: 'Vikram Mehta',
      location: 'Bangalore, India',
      text: '"Financial dealings have become effortless. Their customer service is excellent and always available."',
    }
  ];

  return (
    <section className="bg-paper border-t border-ink-100">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="text-[11px] font-semibold tracking-widest uppercase text-brass-600 mb-4">
              Testimonials
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink-900 leading-tight">
              What our retailers say
            </h2>
          </div>
          <div className="flex gap-2">
            <div className="w-10 h-10 rounded-full border border-ink-200 flex items-center justify-center text-ink-400 cursor-not-allowed bg-white">
              <i className="fas fa-chevron-left text-xs"></i>
            </div>
            <div className="w-10 h-10 rounded-full border border-ink-200 flex items-center justify-center text-ink-900 cursor-pointer bg-white hover:bg-ink-50 transition-colors shadow-sm">
              <i className="fas fa-chevron-right text-xs"></i>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl border border-ink-200 shadow-sm p-8 flex flex-col h-full">
              <div className="flex gap-1 text-brass-500 mb-6 text-[10px]">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-ink-700 text-[15px] leading-relaxed mb-8 flex-grow font-medium">
                {testimonial.text}
              </p>
              <div className="pt-6 border-t border-ink-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-ink-100 flex items-center justify-center text-ink-500 font-semibold text-xs">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-ink-900">{testimonial.name}</div>
                  <div className="text-[11px] text-ink-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
