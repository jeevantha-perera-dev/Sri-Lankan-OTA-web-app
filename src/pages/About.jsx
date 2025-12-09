import React from 'react';
import { MapPin, Sun, Calendar, Users, ArrowRight, Mountain, Sprout, Waves } from 'lucide-react';

const About = () => {
  return (
    // 1. Changed main background to a light green tint
    <div className="bg-green-50 min-h-screen font-sans text-gray-800">
      
      {/* =========================================
          1. HERO SECTION (Centered & Bold)
      ========================================= */}
      <div className="relative h-[70vh] flex items-center justify-center text-center text-white">
        
        {/* 2. Replaced image with solid dark green color from your brand palette */}
        <div 
          className="absolute inset-0 bg-dark"
        ></div>

        <div className="relative z-20 px-4 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Sprout size={48} className="text-primary" />
          </div>
          <h1 className="font-header text-6xl md:text-8xl font-bold uppercase tracking-tight mb-4 drop-shadow-lg">
            About Ceylon
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl font-light tracking-wide text-gray-100">
            Discover the pearl of the Indian Ocean
          </p>
        </div>
      </div>

      {/* =========================================
          2. INTRO SECTION (Split Layout: Text Left / Image Right)
          Aligned perfectly like the "About Dolomites" screenshot
      ========================================= */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Mountain className="text-primary" size={32} />
              <span className="text-gray-500 font-bold uppercase tracking-widest text-sm">Our Heritage</span>
            </div>
            
            <h2 className="font-header text-5xl md:text-6xl font-bold text-dark mb-8 leading-none">
              SMALL ISLAND, <br/> 
              <span className="text-primary">GIANT EXPERIENCES</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Sri Lanka is one of the few places in the world where you can see the world's largest land mammal (Elephant) and the world's largest marine mammal (Blue Whale) within a few hours of each other.
              </p>
              <p>
                From the misty mountains of the central highlands to the golden beaches of the south, this island offers a diversity of landscapes that captivates every traveler. Our mission is to show you the authentic heart of Ceylon.
              </p>
            </div>

            <div className="mt-10">
              <button className="group flex items-center gap-3 text-dark font-bold uppercase tracking-widest hover:text-primary transition-colors">
                Read Our Story <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative">
            <div className="relative h-[600px] w-full rounded-tr-[4rem] rounded-bl-[4rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2000&auto=format&fit=crop" // Elephants
                alt="Sri Lanka Wildlife" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
              />
              {/* Decorative Border Box */}
              <div className="absolute inset-0 border-[1rem] border-white/10 pointer-events-none"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-10 bg-white p-6 shadow-xl rounded-tr-3xl border-l-4 border-primary hidden md:block">
              <p className="font-header text-4xl font-bold text-dark">10+</p>
              <p className="text-gray-500 text-sm uppercase tracking-wider">Years of Experience</p>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================
          3. STATS BAR (Dark Section)
          Recreating the "15,9 THSD KM" look from your screenshot
      ========================================= */}
      <div className="bg-dark text-white py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/10">
            
            <div className="group">
              <div className="flex justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                <MapPin size={40} />
              </div>
              <h3 className="font-header text-5xl font-bold mb-2">50+</h3>
              <p className="text-gray-400 text-sm uppercase tracking-widest">Unique Destinations</p>
            </div>

            <div className="group">
              <div className="flex justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                <Sun size={40} />
              </div>
              <h3 className="font-header text-5xl font-bold mb-2">365</h3>
              <p className="text-gray-400 text-sm uppercase tracking-widest">Days of Sun</p>
            </div>

            <div className="group">
              <div className="flex justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                <Users size={40} />
              </div>
              <h3 className="font-header text-5xl font-bold mb-2">10K</h3>
              <p className="text-gray-400 text-sm uppercase tracking-widest">Happy Travelers</p>
            </div>

            <div className="group">
              <div className="flex justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                <Mountain size={40} />
              </div>
              <h3 className="font-header text-5xl font-bold mb-2">2500<span className="text-2xl">m</span></h3>
              <p className="text-gray-400 text-sm uppercase tracking-widest">Highest Peak</p>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================
          4. GALLERY / REGIONS GRID
          Aligned layout for different categories
      ========================================= */}
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Explore</span>
          <h2 className="font-header text-5xl font-bold text-dark mt-2">DIVERSE REGIONS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto md:h-[500px]">
          
          {/* Card 1: Hill Country */}
          <div className="group relative overflow-hidden rounded-2xl h-80 md:h-full">
            <img 
              src="https://images.unsplash.com/photo-1598556776374-0a37466d7906?q=80&w=2000&auto=format&fit=crop" // Tea Plantation
              alt="Tea Country" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white font-header text-3xl font-bold uppercase mb-2">Hill Country</h3>
              <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                Ella, Nuwara Eliya, Kandy
              </p>
            </div>
          </div>

          {/* Card 2: Coastal (Split into 2) */}
          <div className="flex flex-col gap-8 h-full">
            <div className="group relative overflow-hidden rounded-2xl flex-1">
              <img 
                src="https://images.unsplash.com/photo-1540206395-688085723adb?q=80&w=2000&auto=format&fit=crop" // Beach
                alt="South Coast" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors"></div>
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                 <Waves className="text-primary" size={28} />
                 <h3 className="text-white font-header text-2xl font-bold uppercase">South Coast</h3>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl flex-1">
              <img 
                src="https://images.unsplash.com/photo-1580666677983-58580521e16b?q=80&w=2000&auto=format&fit=crop" // Sigiriya close
                alt="Cultural Triangle" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors"></div>
              <div className="absolute bottom-6 left-6">
                 <h3 className="text-white font-header text-2xl font-bold uppercase">Cultural Triangle</h3>
              </div>
            </div>
          </div>

          {/* Card 3: Safari */}
          <div className="group relative overflow-hidden rounded-2xl h-80 md:h-full">
            <img 
              src="https://images.unsplash.com/photo-1534960339908-142823674b34?q=80&w=2000&auto=format&fit=crop" // Leopard/Wildlife
              alt="Yala National Park" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white font-header text-3xl font-bold uppercase mb-2">Wild Safari</h3>
              <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                Yala, Udawalawe, Wilpattu
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default About;