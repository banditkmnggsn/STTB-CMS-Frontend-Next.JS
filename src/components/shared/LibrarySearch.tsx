"use client";

import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

export function LibrarySearch() {
  const [searchType, setSearchType] = useState('Judul');

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl p-3 shadow-2xl flex flex-col md:flex-row items-center gap-3">
      <div className="relative w-full md:w-48 shrink-0">
        <select 
          className="w-full appearance-none bg-gray-50 border border-gray-200 text-[#0B1F3B] font-semibold py-3.5 pl-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] cursor-pointer"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option>Judul</option>
          <option>Penulis</option>
          <option>ISBN</option>
          <option>Subjek</option>
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
      </div>
      
      <div className="relative flex-grow w-full">
        <input 
          type="text" 
          placeholder="Masukkan kata kunci pencarian katalog..." 
          className="w-full py-3.5 pl-4 pr-12 text-gray-700 bg-transparent border-none focus:outline-none focus:ring-0 text-lg"
        />
      </div>
      
      <button className="w-full md:w-auto bg-[#D4AF37] hover:bg-[#b5952f] text-[#0B1F3B] font-bold px-8 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 shrink-0">
        <Search size={20} />
        <span>Cari Katalog</span>
      </button>
    </div>
  );
}
