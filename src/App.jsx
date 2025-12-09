import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Villas from './pages/Villas';           // <--- 1. Import Villas
import Experiences from './pages/Experiences'; // <--- 2. Import Experiences
import TourDetails from './pages/TourDetails';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* New Main Pages */}
          <Route path="/about-sri-lanka" element={<About />} />
          <Route path="/villas" element={<Villas />} />               {/* <--- 3. Add Route */}
          <Route path="/experiences" element={<Experiences />} />     {/* <--- 4. Add Route */}

          {/* Details Pages */}
          <Route path="/tour/:id" element={<TourDetails />} />
          <Route path="/property/:id" element={<TourDetails />} />
        </Routes>
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;