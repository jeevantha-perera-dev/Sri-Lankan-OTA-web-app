import React from 'react';
import TourCard from '../features/tours/TourCard';
import { mockTours } from '../data/mockTours'; // Ensure you still have this file!

const Experiences = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-24 font-sans">
      
      {/* Page Header */}
      <div className="container mx-auto px-6 mb-12 text-center">
        <h1 className="font-header text-5xl md:text-6xl font-bold text-dark mb-4">
          Unforgettable <span className="text-primary">Experiences</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
           From hiking the central highlands to safaris in the south.
        </p>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockTours.map((tour, index) => (
            <TourCard key={tour.id} tour={tour} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;