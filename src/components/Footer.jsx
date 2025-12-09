import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-24 pb-12 mt-auto border-t-4 border-primary">
      <div className="container mx-auto px-6">
        
        {/* TOP SECTION: Brand & Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-20">
            
            {/* Logo Area */}
            <div>
                <Link to="/" className="inline-block group">
                    <div className="flex flex-col">
                        <span className="font-header text-4xl font-bold tracking-widest text-white group-hover:text-gray-200 transition-colors">
                            CEYLON
                        </span>
                        <span className="font-sans text-xs font-bold tracking-[0.4em] text-primary uppercase -mt-1 group-hover:tracking-[0.5em] transition-all duration-300">
                            Luxury Stays
                        </span>
                    </div>
                </Link>
                <p className="mt-6 text-gray-400 max-w-sm text-sm leading-relaxed">
                    Experience the finest villas, hotels, and bungalows Sri Lanka has to offer. 
                    Curated for luxury, comfort, and unforgettable memories.
                </p>
            </div>

            {/* Newsletter Form */}
            <div className="w-full lg:w-auto bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h4 className="font-header text-xl font-bold mb-2">Join our Newsletter</h4>
                <p className="text-gray-400 text-sm mb-4">Get the latest deals and travel tips.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="bg-white/10 border border-white/20 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-primary w-full sm:w-64 placeholder-gray-500"
                    />
                    <button className="bg-primary hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                        Subscribe <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </div>

        {/* MIDDLE SECTION: Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/10 pt-16 mb-16">
            
            {/* Column 1: Explore */}
            <div>
                <h4 className="font-header text-lg font-bold mb-6 text-primary uppercase tracking-wider">Explore</h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                    <li><Link to="/" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 hover:opacity-100 transition-opacity"></span> Home</Link></li>
                    <li><Link to="/about-sri-lanka" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 hover:opacity-100 transition-opacity"></span> About Sri Lanka</Link></li>
                    <li><Link to="/tours" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 hover:opacity-100 transition-opacity"></span> Villas & Hotels</Link></li>
                    <li><Link to="/schedule" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 hover:opacity-100 transition-opacity"></span> Tour Schedule</Link></li>
                </ul>
            </div>

            {/* Column 2: Legal */}
            <div>
                <h4 className="font-header text-lg font-bold mb-6 text-primary uppercase tracking-wider">Company</h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                    <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                    <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Partner with Us</a></li>
                </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
                <h4 className="font-header text-lg font-bold mb-6 text-primary uppercase tracking-wider">Contact</h4>
                <ul className="space-y-6 text-gray-400 text-sm">
                    <li className="flex items-start gap-3">
                        <MapPin className="text-primary shrink-0" size={20} />
                        <span>123 Lotus Road, Colombo 03, <br/>Sri Lanka</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Phone className="text-primary shrink-0" size={20} />
                        <a href="tel:+94770000000" className="hover:text-white transition-colors">+94 77 000 0000</a>
                    </li>
                    <li className="flex items-center gap-3">
                        <Mail className="text-primary shrink-0" size={20} />
                        <a href="mailto:hello@ceylonstays.com" className="hover:text-white transition-colors">hello@ceylonstays.com</a>
                    </li>
                </ul>
            </div>

            {/* Column 4: Socials */}
            <div>
                <h4 className="font-header text-lg font-bold mb-6 text-primary uppercase tracking-wider">Follow Us</h4>
                <div className="flex gap-4">
                    <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary hover:text-white text-gray-400 transition-all duration-300">
                        <Facebook size={20} />
                    </a>
                    <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary hover:text-white text-gray-400 transition-all duration-300">
                        <Instagram size={20} />
                    </a>
                    <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary hover:text-white text-gray-400 transition-all duration-300">
                        <Youtube size={20} />
                    </a>
                </div>
            </div>
        </div>

        {/* BOTTOM SECTION: Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
                &copy; 2024 Ceylon Luxury Stays. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs flex items-center gap-1">
                Designed for <span className="text-white font-bold">Adventures</span>
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;