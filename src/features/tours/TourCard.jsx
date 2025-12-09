import React from 'react';
import { MapPin, Clock, Users, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const TourCard = ({ tour, index = 0 }) => {
  
  // Helper for difficulty colors
  const getDifficultyColor = (difficulty) => {
    switch(difficulty?.toLowerCase()) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'moderate': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Link 
      to={`/tour/${tour.id}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 block"
      style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Featured Badge */}
        {tour.featured && (
          <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
            <Award className="w-3 h-3" />
            FEATURED
          </div>
        )}
        
        {/* Price Tag */}
        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
          <div className="text-2xl font-bold text-gray-900">${tour.price}</div>
          <div className="text-xs text-gray-600">per person</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(tour.difficulty)}`}>
            {tour.difficulty}
          </span>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-bold text-gray-900">{tour.rating}</span>
            <span className="text-gray-500 text-sm">({tour.reviews})</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-1">
          {tour.title}
        </h3>

        <div className="space-y-2 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-green-600" />
            <span>{tour.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-green-600" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-green-600" />
            <span>Group: {tour.groupSize} people</span>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
          View Details
        </button>
      </div>
    </Link>
  );
};

export default TourCard;