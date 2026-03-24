"use client";

import { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

export function EventFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeCategory = searchParams.get('category') || 'Semua';
  const searchQuery = searchParams.get('q') || '';

  const categories = ['Semua', 'Seminar', 'Admisi', 'Chapel', 'Kalender Akademik', 'Riset'];

  const handleCategoryChange = (cat: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (cat === 'Semua') {
      params.delete('category');
    } else {
      params.set('category', cat);
    }
    router.push(`?${params.toString()}`);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const q = formData.get('q') as string;
    const params = new URLSearchParams(searchParams.toString());
    if (q) {
      params.set('q', q);
    } else {
      params.delete('q');
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 mb-10 flex flex-col md:flex-row items-center justify-between gap-4 border border-gray-100">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
        <Filter size={20} className="text-gray-400 flex-shrink-0 mr-2" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeCategory === cat 
                ? 'bg-[#C1121F] text-white shadow-md' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      
      <form onSubmit={handleSearch} className="relative w-full md:w-64 flex-shrink-0">
        <input 
          type="text" 
          name="q"
          defaultValue={searchQuery}
          placeholder="Cari kegiatan..." 
          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-[#2E90FF] focus:ring-1 focus:ring-[#2E90FF] text-sm"
        />
        <button type="submit" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
          <Search size={18} />
        </button>
      </form>
    </div>
  );
}
