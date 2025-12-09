import React from 'react';
import { Star, ShieldCheck, Heart, Award, CheckCircle, Coffee, Car, Utensils } from 'lucide-react';

const Experiences = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      
      {/* =======================
          1. HERO SECTION: AUTHORITY & TRUST
      ======================== */}
      <div className="relative h-[60vh] flex items-center justify-center text-center text-white">
        {/* Background: High-end Villa Interior/Hospitality */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2500&auto=format&fit=crop')" }} 
        >
          {/* Dark Overlay for readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <span className="text-amber-400 font-bold tracking-[0.3em] uppercase text-sm mb-4 block mt-16 animate-fade-in-up">
            Curators of Luxury
          </span>
          <h1 className="font-header text-5xl md:text-7xl font-bold uppercase mb-6 leading-tight drop-shadow-2xl">
            The Art of <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Hospitality</span>
          </h1>
          <p className="text-xl text-gray-200 font-light leading-relaxed">
             With over a decade of experience selling and renting Sri Lanka's finest properties, 
             we bridge the gap between discerning travelers and exclusive island homes.
          </p>
        </div>
      </div>

      {/* =======================
          2. EXPERTISE STATS ROW
      ======================== */}
      <div className="bg-dark text-white py-16">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/10">
            <div className="group">
                <Award className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" size={40} />
                <h3 className="font-header text-4xl font-bold mb-1">12+</h3>
                <p className="text-gray-400 text-xs uppercase tracking-wider">Years Experience</p>
            </div>
            <div className="group">
                <ShieldCheck className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" size={40} />
                <h3 className="font-header text-4xl font-bold mb-1">500+</h3>
                <p className="text-gray-400 text-xs uppercase tracking-wider">Verified Villas</p>
            </div>
            <div className="group">
                <Heart className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" size={40} />
                <h3 className="font-header text-4xl font-bold mb-1">15k</h3>
                <p className="text-gray-400 text-xs uppercase tracking-wider">Happy Guests</p>
            </div>
            <div className="group">
                <Star className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" size={40} />
                <h3 className="font-header text-4xl font-bold mb-1">4.9</h3>
                <p className="text-gray-400 text-xs uppercase tracking-wider">Average Rating</p>
            </div>
        </div>
      </div>

      {/* =======================
          3. OUR PHILOSOPHY (Text Left / Image Right)
      ======================== */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Why Choose Us</span>
            <h2 className="font-header text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
              WE KNOW <br/> EVERY VILLA OWNER.
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-sans">
              <p>
                Selling a holiday is easy. Selling a guarantee of quality is hard. That's why we don't rely on algorithms. We personally inspect every single property in our portfolio.
              </p>
              <p>
                Our team has built direct relationships with villa owners across Sri Lanka, from the tea planters in Nuwara Eliya to the architects of the south coast. This means better rates, faster support, and zero surprises when you arrive.
              </p>
              <ul className="space-y-3 mt-4">
                  <li className="flex items-center gap-3 font-bold text-dark">
                      <CheckCircle className="text-primary" size={20} /> Best Rate Guarantee
                  </li>
                  <li className="flex items-center gap-3 font-bold text-dark">
                      <CheckCircle className="text-primary" size={20} /> 24/7 On-Ground Support
                  </li>
                  <li className="flex items-center gap-3 font-bold text-dark">
                      <CheckCircle className="text-primary" size={20} /> Secure Payments
                  </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[600px] w-full rounded-tr-[4rem] rounded-bl-[4rem] overflow-hidden shadow-2xl">
               {/* Image: Handshake or High-end Service */}
               <img 
                 src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2000&auto=format&fit=crop" 
                 alt="Premium Service" 
                 className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
               />
               <div className="absolute inset-0 border-[1rem] border-white/20 pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>

      {/* =======================
          4. THE CONCIERGE EXPERIENCE (Grid)
      ======================== */}
      <div className="bg-gray-50 py-24">
          <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                  <span className="text-primary font-bold uppercase tracking-widest text-sm">Beyond Booking</span>
                  <h2 className="font-header text-4xl md:text-5xl font-bold text-dark mt-2">TAILORED SERVICES</h2>
                  <div className="w-24 h-1 bg-green-500 mx-auto rounded-full mt-4"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Service 1 */}
                  <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all group">
                      <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                          <Utensils className="text-primary group-hover:text-white" size={32} />
                      </div>
                      <h3 className="font-header text-2xl font-bold mb-3">Private Chefs</h3>
                      <p className="text-gray-500 leading-relaxed">
                          Don't want to cook? We arrange top-tier local chefs to prepare seafood feasts and curries right in your villa kitchen.
                      </p>
                  </div>

                  {/* Service 2 */}
                  <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all group">
                      <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                          <Car className="text-primary group-hover:text-white" size={32} />
                      </div>
                      <h3 className="font-header text-2xl font-bold mb-3">Luxury Transport</h3>
                      <p className="text-gray-500 leading-relaxed">
                          From airport pickups in luxury SUVs to helicopter transfers to the south coast. We handle all logistics.
                      </p>
                  </div>

                  {/* Service 3 */}
                  <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all group">
                      <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                          <Coffee className="text-primary group-hover:text-white" size={32} />
                      </div>
                      <h3 className="font-header text-2xl font-bold mb-3">Curated Experiences</h3>
                      <p className="text-gray-500 leading-relaxed">
                          Whether it's a private tea tasting or a yacht charter, our concierge team can book exclusive local activities.
                      </p>
                  </div>
              </div>
          </div>
      </div>

    </div>
  );
};

export default Experiences;