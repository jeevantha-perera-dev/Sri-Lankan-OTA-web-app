import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/94770000000?text=Hi, I am interested in a tour!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition z-50 animate-bounce"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppButton;