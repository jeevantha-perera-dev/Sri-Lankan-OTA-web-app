import React from 'react';
import PropertyCard from '../features/properties/PropertyCard';
import { mockProperties } from '../data/mockProperties';
import { Star, ShieldCheck, ConciergeBell, Wifi } from 'lucide-react';

const Villas = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      
      {/* =======================
          1. HERO SECTION
      ======================== */}
      <div className="relative h-[60vh] flex items-center justify-center text-center text-white">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2500&auto=format&fit=crop')" }} // Luxury Villa Pool
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 px-6">
          <span className="text-amber-400 font-bold tracking-[0.3em] uppercase text-sm mb-4 block animate-fade-in">
            Escape to Paradise
          </span>
          <h1 className="font-header text-6xl md:text-8xl font-bold uppercase mb-6 leading-tight drop-shadow-2xl">
            Luxury <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Stays</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">
            Handpicked villas, boutique hotels, and cozy bungalows for your perfect getaway.
          </p>
        </div>
      </div>

      {/* =======================
          2. BENEFITS BAR
      ======================== */}
      <div className="bg-white border-b border-gray-100 relative z-20 -mt-10 mx-6 rounded-xl shadow-xl max-w-5xl md:mx-auto p-6 md:p-10 flex flex-wrap justify-between gap-8">
        <div className="flex items-center gap-4">
            <div className="bg-green-50 p-3 rounded-full text-green-600"><ShieldCheck size={24} /></div>
            <div><h4 className="font-bold text-dark">Verified Properties</h4><p className="text-xs text-gray-500">Inspected for quality</p></div>
        </div>
        <div className="flex items-center gap-4">
            <div className="bg-amber-50 p-3 rounded-full text-amber-500"><Star size={24} /></div>
            <div><h4 className="font-bold text-dark">5-Star Service</h4><p className="text-xs text-gray-500">Top rated hosts</p></div>
        </div>
        <div className="flex items-center gap-4">
            <div className="bg-blue-50 p-3 rounded-full text-blue-500"><ConciergeBell size={24} /></div>
            <div><h4 className="font-bold text-dark">Concierge</h4><p className="text-xs text-gray-500">24/7 Support</p></div>
        </div>
        <div className="flex items-center gap-4">
            <div className="bg-purple-50 p-3 rounded-full text-purple-500"><Wifi size={24} /></div>
            <div><h4 className="font-bold text-dark">High-Speed Wifi</h4><p className="text-xs text-gray-500">Work from paradise</p></div>
        </div>
      </div>

      {/* =======================
          3. LISTINGS GRID
      ======================== */}
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
            <h2 className="font-header text-4xl md:text-5xl font-bold text-dark mb-4">OUR COLLECTION</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {mockProperties.map((property, index) => (
            <div key={property.id} className="transform hover:-translate-y-2 transition-transform duration-300">
                <PropertyCard property={property} index={index} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Villas;