import React from 'react';
import PropertyCard from '../features/properties/PropertyCard';
import { mockProperties } from '../data/mockProperties';

const Villas = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-24 font-sans">
      
      {/* Page Header */}
      <div className="container mx-auto px-6 mb-12 text-center">
        <h1 className="font-header text-5xl md:text-6xl font-bold text-dark mb-4">
          Luxury <span className="text-primary">Stays</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
           Handpicked villas, boutique hotels, and cozy bungalows for your perfect getaway.
        </p>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProperties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Villas;