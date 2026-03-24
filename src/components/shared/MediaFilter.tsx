"use client";

import { useState } from 'react';
import { Search } from 'lucide-react';

interface MediaFilterProps {
  onSearch: (q: string) => void;
  onTabChange: (tab: string) => void;
  activeTab: string;
}

export function MediaFilter({ onSearch, onTabChange, activeTab }: MediaFilterProps) {
  const tabs = ['Semua', 'Video', 'Dokumen', 'Audio'];

  return (
    <div className="sticky top-[72px] lg:top-[124px] z-30 bg-[#002147] border-b border-white/10 shadow-lg shadow-[#002147]/20">
      <div className="container mx-auto px-4 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className={`px-5 py-2 rounded-full whitespace-nowrap text-sm font-semibold transition-all ${
                  activeTab === tab 
                    ? 'bg-white text-[#002147]' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64 lg:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Cari media..." 
              className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
