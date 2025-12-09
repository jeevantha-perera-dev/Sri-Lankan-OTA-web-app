import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaYoutube, FaBars, FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ease-in-out border-b ${
          scrolled 
            ? 'bg-dark/95 backdrop-blur-md py-3 shadow-2xl border-white/10' 
            : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          
          {/* GRID LAYOUT: 
              - Left Column (1fr)
              - Center Column (auto) -> Keeps logo perfectly centered
              - Right Column (1fr)
          */}
          <div className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center">
            
            {/* 1. LEFT SECTION (Mobile Menu & Desktop Links) */}
            <div className="flex items-center justify-start">
              
              {/* Mobile Trigger */}
              <button className="md:hidden text-white hover:text-primary transition-colors p-2 -ml-2">
                <FaBars size={24} />
              </button>

              {/* Desktop Links with "Underline" Effect */}
              <div className="hidden md:flex space-x-8">
                {['About Sri Lanka', 'Villas', 'Experiences'].map((item) => (
                  <Link 
                    key={item}
                    to={`/${item.toLowerCase().replace(/ /g, '-')}`} 
                    className="group relative font-header uppercase tracking-wider text-sm font-medium text-gray-300 hover:text-white transition-colors py-2"
                  >
                    {item}
                    {/* The Cool Animated Line */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* 2. CENTER SECTION (The Logo) */}
            <div className="flex justify-center">
              <Link to="/" className="group flex flex-col items-center justify-center text-center">
                <div className="relative">
                    <span className="font-header text-3xl md:text-4xl font-bold text-white tracking-widest group-hover:text-gray-100 transition-colors">
                        CEYLON
                    </span>
                    {/* Decorative dot */}
                    <span className="absolute -right-3 top-1 text-primary text-xl animate-pulse">.</span>
                </div>
                <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.4em] text-primary uppercase -mt-1 group-hover:tracking-[0.5em] transition-all duration-300">
                    Luxury Stays
                </span>
              </Link>
            </div>

            {/* 3. RIGHT SECTION (Socials & CTA) */}
            <div className="flex items-center justify-end gap-6">
              
              {/* Social Icons (Hidden on small screens) */}
              <div className="hidden lg:flex items-center gap-4 text-gray-400">
                <a href="#" className="hover:text-primary hover:-translate-y-1 transition-all duration-300"><FaInstagram size={18} /></a>
                <a href="#" className="hover:text-blue-500 hover:-translate-y-1 transition-all duration-300"><FaFacebook size={18} /></a>
                <a href="#" className="hover:text-red-500 hover:-translate-y-1 transition-all duration-300"><FaYoutube size={18} /></a>
              </div>

              {/* Robust CTA Button */}
              <Link 
                to="/contact" 
                className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-none font-header font-bold uppercase tracking-wider text-sm transition-all duration-300 border-2 ${
                    scrolled 
                    ? 'bg-primary border-primary text-white hover:bg-transparent hover:text-primary' 
                    : 'bg-white text-dark border-white hover:bg-dark hover:border-dark hover:text-white'
                }`}
              >
                <FaPhoneAlt size={12} />
                <span>Book Now</span>
              </Link>

              {/* Mobile Search/User Icon could go here */}
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;