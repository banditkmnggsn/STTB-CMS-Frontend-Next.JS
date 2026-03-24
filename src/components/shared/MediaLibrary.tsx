"use client";

import { useState } from 'react';
import { Play, Clock, Search, Tag, Calendar } from 'lucide-react';
import { MediaFilter } from './MediaFilter';

interface MediaLibraryProps {
  mediaItems: any[];
}

export function MediaLibrary({ mediaItems }: MediaLibraryProps) {
  const [activeTab, setActiveTab] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const displayItems = mediaItems.map((item: any) => {
    const fileType = item.type || (item.mimeType ? item.mimeType.split('/')[0] : 'document');
    return {
      ...item,
      displayType: fileType === 'image' || fileType === 'video' ? 'Video' : fileType === 'audio' ? 'Audio' : 'Dokumen'
    };
  });

  const filteredItems = displayItems.filter((item: any) => {
    const matchesTab = activeTab === 'Semua' || item.displayType === activeTab;
    const matchesSearch = item.title?.toLowerCase().includes(searchQuery.toLowerCase()) || item.description?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const videos = filteredItems.filter((item: any) => item.displayType === 'Video');
  const documents = filteredItems.filter((item: any) => item.displayType !== 'Video');

  const topics = ['Apologetika', 'Spiritualitas', 'Kepemimpinan', 'Teologi', 'Acara'];

  return (
    <>
      <MediaFilter 
        activeTab={activeTab} 
        onSearch={setSearchQuery} 
        onTabChange={setActiveTab} 
      />

      {/* Video Grid (Simplified without Slider for now) */}
      {(activeTab === 'Semua' || activeTab === 'Video') && (
        <section className="bg-[#00152D] py-16 text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#D4AF37] rounded-full inline-block"></span>
              Video & Multimedia
            </h2>
            
            {videos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video: any) => (
                  <div key={video.id || video._id} className="outline-none">
                    <a href={video.fileUrl} target="_blank" rel="noreferrer" className="group cursor-pointer block">
                      <div className="relative aspect-video rounded-xl overflow-hidden mb-3 bg-gray-800">
                        <img 
                          src={video.fileUrl || 'https://images.unsplash.com/photo-1748904013387-3b34401359a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'} 
                          alt={video.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#D4AF37] transition-all duration-300">
                            <Play fill="currentColor" size={24} className="text-white group-hover:text-[#002147] ml-1" />
                          </div>
                        </div>
                      </div>
                      <h3 className="font-semibold text-white group-hover:text-[#D4AF37] transition-colors line-clamp-2 leading-tight mb-1">
                        {video.title || video.fileName}
                      </h3>
                      {video.createdAt && (
                        <div className="flex items-center text-gray-400 text-xs gap-1">
                          <Clock size={12} />
                          <span>{new Date(video.createdAt).toLocaleDateString('id-ID')}</span>
                        </div>
                      )}
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400">Belum ada video tersedia.</p>
            )}
          </div>
        </section>
      )}

      {/* Legacy Resource Library */}
      <section className="bg-[#F8F9FA] py-16 flex-grow">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[#002147] mb-8 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#C1121F] rounded-full inline-block"></span>
                Dokumen & Audio
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {documents.length > 0 ? documents.map((doc: any) => (
                  <a key={doc.id || doc._id} href={doc.fileUrl} target="_blank" rel="noreferrer" className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex gap-4 hover:shadow-md transition-shadow group">
                    <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                      <Tag className="text-gray-400" size={32} />
                    </div>
                    <div className="flex-1 flex flex-col justify-center min-w-0">
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#C1121F] bg-[#C1121F]/10 px-2 py-0.5 rounded">
                          {doc.displayType}
                        </span>
                      </div>
                      <h3 className="font-bold text-[#002147] group-hover:text-[#2E90FF] transition-colors mb-2 line-clamp-2 leading-snug">
                        {doc.title || doc.fileName}
                      </h3>
                      {doc.createdAt && (
                        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1"><Calendar size={12} /> {new Date(doc.createdAt).toLocaleDateString('id-ID')}</span>
                        </div>
                      )}
                    </div>
                  </a>
                )) : (
                  <p className="text-gray-500 col-span-2">Tidak ada dokumen atau rekaman audio ditemukan.</p>
                )}
              </div>
            </div>

            <div className="w-full lg:w-80 shrink-0 border-t lg:border-t-0 pt-8 lg:pt-0">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-[200px]">
                <h3 className="text-lg font-bold text-[#002147] mb-4 flex items-center gap-2">
                  <Tag size={18} className="text-[#D4AF37]" />
                  Jelajahi Topik
                </h3>
                <div className="flex flex-wrap gap-2">
                  {topics.map(topic => (
                    <button 
                      key={topic}
                      onClick={() => setSearchQuery(topic)}
                      className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-gray-600 rounded-full text-sm font-medium hover:bg-[#002147] hover:text-white hover:border-[#002147] transition-colors"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
