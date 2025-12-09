import React from 'react';
import { ShieldCheck, Users, Heart, Star, CheckCircle, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      
      {/* =========================================
          1. HERO SECTION: COMPANY BRANDING
      ========================================= */}
      <div className="relative h-[70vh] flex items-center justify-center text-center text-white">
        
        {/* Background: The Team or High-end Villa Office Vibe */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2500&auto=format&fit=crop')" 
          }}
        >
          {/* Heavy Dark Overlay for professionalism */}
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>

        <div className="relative z-20 px-4 max-w-4xl mx-auto animate-fade-in-up">
          <span className="text-amber-400 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
            Since 2012
          </span>
          <h1 className="font-header text-6xl md:text-8xl font-bold uppercase mb-6 leading-tight drop-shadow-2xl">
            Who We <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Are</span>
          </h1>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl font-light tracking-wide text-gray-200 leading-relaxed font-sans">
            Sri Lanka's premier luxury villa specialists, dedicated to crafting extraordinary island escapes.
          </p>
        </div>
      </div>

      {/* =========================================
          2. OUR STORY (Text Left / Image Right)
      ========================================= */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block font-header">Our Story</span>
            <h2 className="font-header text-4xl md:text-5xl font-bold text-dark mb-8 leading-tight">
              MORE THAN JUST <br/> A BOOKING PLATFORM.
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-sans">
              <p>
                Ceylon Luxury Stays began with a simple idea: that finding a villa in Sri Lanka should be as relaxing as the holiday itself. 
              </p>
              <p>
                Founded by a team of local hospitality experts and travel enthusiasts, we saw a gap in the market. Travelers wanted the privacy of a villa but the reliability of a 5-star hotel. We set out to bridge that gap.
              </p>
              <p>
                Today, we manage an exclusive portfolio of over 500 properties, personally vetted to ensure they meet our rigorous standards of comfort, style, and service.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                    <CheckCircle className="text-primary" size={24} />
                    <span className="font-bold text-dark">Local HQ in Colombo</span>
                </div>
                <div className="flex items-center gap-3">
                    <CheckCircle className="text-primary" size={24} />
                    <span className="font-bold text-dark">Direct Owner Contracts</span>
                </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-[600px] w-full rounded-tr-[4rem] rounded-bl-[4rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2000&auto=format&fit=crop" // Team meeting or Hotel Lobby
                alt="Our Team" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 border-[1rem] border-white/10 pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================
          3. WHY TRUST US (Dark Section)
      ========================================= */}
      <div className="bg-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
             <h2 className="font-header text-4xl md:text-5xl font-bold mb-4">THE CEYLON PROMISE</h2>
             <p className="text-gray-400 max-w-xl mx-auto">We don't just hand you a key. We curate your entire experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            
            <div className="bg-white/5 p-10 rounded-2xl border border-white/10 hover:border-green-500 transition-colors group">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} className="text-white" />
              </div>
              <h3 className="font-header text-2xl font-bold mb-3">100% Vetted</h3>
              <p className="text-gray-300 leading-relaxed font-sans">
                Every villa is physically inspected by our team. If the pool isn't pristine or the wifi isn't fast, it doesn't make the list.
              </p>
            </div>

            <div className="bg-white/5 p-10 rounded-2xl border border-white/10 hover:border-amber-500 transition-colors group">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="font-header text-2xl font-bold mb-3">Concierge Support</h3>
              <p className="text-gray-300 leading-relaxed font-sans">
                From the moment you book until you fly home, our local concierge team is just a WhatsApp message away.
              </p>
            </div>

            <div className="bg-white/5 p-10 rounded-2xl border border-white/10 hover:border-blue-500 transition-colors group">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Star size={32} className="text-white" />
              </div>
              <h3 className="font-header text-2xl font-bold mb-3">Best Price Match</h3>
              <p className="text-gray-300 leading-relaxed font-sans">
                We work directly with owners, cutting out the middleman fees to offer you the guaranteed lowest rates.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================
          4. CTA SECTION
      ========================================= */}
      <div className="container mx-auto px-6 py-24 text-center">
        <h2 className="font-header text-5xl font-bold text-dark mb-6">READY TO FIND YOUR PARADISE?</h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Let our experts guide you to the perfect villa for your next holiday.
        </p>
        <button className="bg-primary text-white font-bold uppercase tracking-widest px-10 py-5 rounded-lg hover:bg-dark transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Browse Our Collection
        </button>
      </div>

    </div>
  );
};

export default About;