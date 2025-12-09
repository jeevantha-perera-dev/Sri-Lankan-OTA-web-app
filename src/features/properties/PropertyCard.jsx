import React from 'react';
import { MapPin, Star, BedDouble, Bath, Wifi, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property, index = 0 }) => {
  return (
    <Link 
      to={`/property/${property.id}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 block border border-gray-100"
      style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Type Badge (Villa/Hotel) */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-gray-800 shadow-sm">
          {property.type}
        </div>

        {/* Favorite Icon (Heart) - Visual only for now */}
        <button className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-white rounded-full text-white hover:text-red-500 transition-all">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
           </svg>
        </button>
      </div>

      {/* Details Section */}
      <div className="p-5">
        
        {/* Header: Title & Rating */}
        <div className="flex justify-between items-start mb-2">
            <div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-1">
                {property.title}
                </h3>
                <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                    <MapPin className="w-3 h-3" />
                    {property.location}
                </div>
            </div>
            <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-md">
                <Star className="w-3 h-3 fill-green-600 text-green-600" />
                <span className="font-bold text-green-700 text-sm">{property.rating}</span>
            </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 my-4"></div>

        {/* Amenities Grid */}
        <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
            <div className="flex items-center gap-1">
                <BedDouble className="w-4 h-4" />
                <span>{property.beds} Beds</span>
            </div>
            <div className="flex items-center gap-1">
                <Bath className="w-4 h-4" />
                <span>{property.baths} Baths</span>
            </div>
            {property.amenities.includes("WiFi") && (
                <div className="flex items-center gap-1">
                    <Wifi className="w-4 h-4" />
                    <span>WiFi</span>
                </div>
            )}
        </div>

        {/* Price & CTA */}
        <div className="flex justify-between items-center mt-4">
            <div>
                <span className="text-2xl font-bold text-gray-900">${property.price}</span>
                <span className="text-gray-400 text-sm"> / night</span>
            </div>
            <button className="bg-gray-900 text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-green-600 transition-colors">
                View
            </button>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;