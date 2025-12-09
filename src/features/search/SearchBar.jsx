import React, { useState } from 'react';
import DatePicker from 'react-datepicker'; // You installed this earlier
import "react-datepicker/dist/react-datepicker.css";

const SearchBar = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="bg-white p-4 rounded-2xl shadow-xl max-w-4xl mx-auto -mt-10 relative z-20 flex flex-col md:flex-row gap-4 items-center border border-gray-100">
      
      {/* Location Input */}
      <div className="flex-1 w-full">
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Where to?</label>
        <input type="text" placeholder="Ella, Kandy, Galle..." className="w-full font-bold text-gray-700 outline-none placeholder-gray-300" />
      </div>

      <div className="w-px h-10 bg-gray-200 hidden md:block"></div>

      {/* Date Picker */}
      <div className="flex-1 w-full">
         <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">When?</label>
         <DatePicker 
            selected={startDate} 
            onChange={(date) => setStartDate(date)} 
            className="w-full font-bold text-gray-700 outline-none cursor-pointer"
         />
      </div>

      {/* Search Button */}
      <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition w-full md:w-auto shadow-lg shadow-blue-200">
        Search
      </button>
    </div>
  );
};

export default SearchBar;