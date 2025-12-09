import React, { useState, useEffect } from 'react';
import { Search, MapPin, Calendar, Users, SlidersHorizontal } from 'lucide-react';
import PropertyCard from '../features/properties/PropertyCard'; // Import the new card
import { mockProperties } from '../data/mockProperties'; // Import the new data

const Home = () => {
  // State for properties and filtering
  const [properties, setProperties] = useState(mockProperties);
  const [filteredProperties, setFilteredProperties] = useState(mockProperties);
  
  // Search States
  const [locationSearch, setLocationSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  // Categories for the filter bar
  const categories = ["All", "Villa", "Hotel", "Bungalow", "Cabana"];

  // THE SEARCH LOGIC
  const handleSearch = () => {
    let result = properties;

    // 1. Filter by Location Text
    if (locationSearch) {
      result = result.filter(p => 
        p.location.toLowerCase().includes(locationSearch.toLowerCase()) || 
        p.title.toLowerCase().includes(locationSearch.toLowerCase())
      );
    }

    // 2. Filter by Category
    if (categoryFilter !== 'All') {
        result = result.filter(p => p.type === categoryFilter);
    }

    setFilteredProperties(result);
  };

  // Auto-filter when category changes
  useEffect(() => {
    handleSearch();
  }, [categoryFilter, locationSearch]);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      
      {/* 1. HERO SECTION (Updated for Stays) */}
      <div className="relative h-[70vh] flex flex-col items-center justify-center text-white">
        {/* Background Image - Luxury Villa Vibe */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2574&auto=format&fit=crop')",
            filter: 'brightness(0.6)'
          }}
        />
        
        <div className="relative z-10 text-center px-4">
          <h1 className="font-header text-5xl md:text-7xl font-bold mb-6">
            Find Your Perfect <br/>
            <span className="text-green-400">Stay in Sri Lanka</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            From luxury beachfront villas in Mirissa to cozy bungalows in Ella.
          </p>
        </div>
      </div>

      {/* 2. FUNCTIONAL SEARCH BAR */}
      <div className="relative z-30 container mx-auto px-4 -mt-16 mb-12">
        <div className="bg-white rounded-xl shadow-2xl p-4 md:p-6 border border-gray-100 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Location Input */}
            <div className="md:col-span-5 relative">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 ml-1">Destination</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 w-5 h-5" />
                <input 
                    type="text" 
                    placeholder="Where do you want to go?" 
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-lg focus:ring-2 focus:ring-green-500 font-medium text-gray-800"
                    value={locationSearch}
                    onChange={(e) => setLocationSearch(e.target.value)}
                />
              </div>
            </div>

            {/* Check-in/out (Visual Only for now) */}
            <div className="md:col-span-3 relative">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 ml-1">Dates</label>
                <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 w-5 h-5" />
                    <input type="text" placeholder="Add Dates" className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-lg focus:ring-2 focus:ring-green-500 font-medium text-gray-800" />
                </div>
            </div>

            {/* Search Button */}
            <div className="md:col-span-4 h-full flex items-end">
                <button 
                    onClick={handleSearch}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-green-200 transition-all flex items-center justify-center gap-2"
                >
                    <Search className="w-5 h-5" />
                    Find Stays
                </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. CATEGORY FILTER & RESULTS */}
      <div className="container mx-auto px-4 pb-24">
        
        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-8 justify-center no-scrollbar">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-6 py-2 rounded-full font-bold whitespace-nowrap transition-all ${
                        categoryFilter === cat 
                        ? 'bg-gray-900 text-white shadow-lg' 
                        : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-900'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-500 font-medium">
            Showing {filteredProperties.length} properties in Sri Lanka
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((prop, index) => (
                <PropertyCard key={prop.id} property={prop} index={index} />
            ))
          ) : (
            <div className="col-span-3 text-center py-20">
                <div className="text-gray-300 text-6xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold text-gray-800">No properties found</h3>
                <p className="text-gray-500">Try changing your search location or category.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Home;