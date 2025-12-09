import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, Star, Wifi, Car, Coffee, Utensils, ArrowLeft, CheckCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { mockProperties } from '../data/mockProperties'; // Using your new data file

const TourDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate fetching data (finding the specific property by ID)
  useEffect(() => {
    const foundProperty = mockProperties.find(p => p.id === parseInt(id));
    
    // Simulate a small network delay for realism
    setTimeout(() => {
        setProperty(foundProperty);
        setLoading(false);
    }, 500);
  }, [id]);

  if (loading) return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse flex flex-col items-center">
            <div className="h-12 w-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-green-800 font-header tracking-widest uppercase">Loading Paradise...</p>
        </div>
    </div>
  );
  
  if (!property) return <div className="text-center py-20">Property not found</div>;

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">
      
      {/* ======================= 
          1. IMMERSIVE HERO 
      ======================== */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <img 
            src={property.image} 
            alt={property.title} 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[10s]" 
        />
        
        {/* Gradient Overlay (Green to Black) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

        {/* Back Button */}
        <Link to="/" className="absolute top-8 left-8 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-green-800 transition-all">
            <ArrowLeft size={24} />
        </Link>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20">
            <div className="container mx-auto">
                <div className="inline-flex items-center gap-2 bg-amber-400 text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-lg shadow-amber-400/20">
                    <Star size={14} className="fill-black" /> Top Rated Stay
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-header font-bold text-white mb-4 leading-tight">
                    {property.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-gray-200 text-sm md:text-base font-medium">
                    <div className="flex items-center gap-2">
                        <MapPin className="text-amber-400" size={20} />
                        {property.location}
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex text-amber-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} className="fill-current" />
                            ))}
                        </div>
                        <span className="text-white font-bold">{property.rating}</span>
                        <span className="text-gray-400">({property.reviews} reviews)</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* ======================= 
          2. MAIN CONTENT GRID
      ======================== */}
      <div className="container mx-auto px-4 -mt-10 relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: Details */}
        <div className="lg:col-span-2 space-y-8">
            
            {/* Description Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-2xl font-header font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-green-500 rounded-full"></span>
                    About this place
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                    Nestled in the heart of {property.location}, this {property.type.toLowerCase()} offers an unforgettable escape. 
                    Experience the perfect blend of luxury and nature. Whether you are looking for a romantic getaway 
                    or a family adventure, our premium amenities and breathtaking views ensure a stay like no other.
                </p>

                {/* Amenities Grid */}
                <h3 className="text-xl font-header font-bold text-gray-900 mt-10 mb-6">What this place offers</h3>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                    {/* Hardcoded amenities for visual demo - in real app, map through property.amenities */}
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-green-50 transition-colors cursor-pointer group">
                        <div className="bg-white p-2 rounded-full shadow-sm group-hover:shadow-md transition-all">
                            <Wifi className="text-gray-400 group-hover:text-green-600" size={20} />
                        </div>
                        <span className="text-gray-700 font-medium">Fast Wifi</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-green-50 transition-colors cursor-pointer group">
                        <div className="bg-white p-2 rounded-full shadow-sm group-hover:shadow-md transition-all">
                            <Car className="text-gray-400 group-hover:text-green-600" size={20} />
                        </div>
                        <span className="text-gray-700 font-medium">Free Parking</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-green-50 transition-colors cursor-pointer group">
                        <div className="bg-white p-2 rounded-full shadow-sm group-hover:shadow-md transition-all">
                            <Utensils className="text-gray-400 group-hover:text-green-600" size={20} />
                        </div>
                        <span className="text-gray-700 font-medium">Breakfast Included</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-green-50 transition-colors cursor-pointer group">
                        <div className="bg-white p-2 rounded-full shadow-sm group-hover:shadow-md transition-all">
                            <Coffee className="text-gray-400 group-hover:text-green-600" size={20} />
                        </div>
                        <span className="text-gray-700 font-medium">Coffee Maker</span>
                    </div>
                </div>
            </div>

        </div>

        {/* RIGHT COLUMN: Sticky Price Card */}
        <div className="lg:col-span-1">
            <div className="sticky top-28">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                    
                    {/* Card Header (Green Gradient) */}
                    <div className="bg-gradient-to-r from-green-700 to-emerald-600 p-6 text-white text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Star size={100} />
                        </div>
                        <p className="text-green-100 text-sm uppercase tracking-widest font-bold mb-1">Special Offer</p>
                        <div className="flex items-baseline justify-center gap-1">
                            <span className="text-4xl font-header font-bold">${property.price}</span>
                            <span className="text-green-100">/ night</span>
                        </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-8">
                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between items-center text-gray-600 text-sm">
                                <span>Check-in</span>
                                <span className="font-bold text-gray-900">3:00 PM</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-600 text-sm">
                                <span>Check-out</span>
                                <span className="font-bold text-gray-900">11:00 AM</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-600 text-sm">
                                <span>Guests</span>
                                <span className="font-bold text-gray-900">2 Guests</span>
                            </div>
                        </div>

                        {/* WhatsApp Button */}
                        <button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg shadow-green-200 hover:shadow-xl hover:scale-[1.02] group">
                            <FaWhatsapp size={28} className="group-hover:animate-bounce" />
                            Book via WhatsApp
                        </button>
                        
                        <div className="mt-4 flex items-center justify-center gap-2 text-gray-400 text-xs">
                           <CheckCircle size={12} /> No booking fees involved
                        </div>
                    </div>

                    {/* Footer Shade */}
                    <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
                        <p className="text-xs text-gray-400">Secure booking managed by CeylonVillas</p>
                    </div>
                </div>

                {/* Contact Support */}
                <div className="mt-6 bg-amber-50 rounded-xl p-4 border border-amber-100 flex items-start gap-3">
                    <div className="bg-amber-100 p-2 rounded-full text-amber-600">
                        <Clock size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm">Need Help?</h4>
                        <p className="text-xs text-gray-500 mt-1">Our support team is available 24/7 to answer your questions.</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default TourDetails;