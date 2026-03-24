"use client";

import { useState } from 'react';
import { UploadCloud, FileText } from 'lucide-react';

export function LibraryTabs() {
  const [formType, setFormType] = useState<'daftar' | 'bebas'>('daftar');

  return (
    <div className="lg:col-span-3 bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50">
      
      {/* Form Toggle */}
      <div className="flex p-1 bg-gray-100 rounded-xl mb-8 w-fit">
        <button 
          onClick={() => setFormType('daftar')}
          className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${formType === 'daftar' ? 'bg-white text-[#0B1F3B] shadow' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Daftar Anggota
        </button>
        <button 
          onClick={() => setFormType('bebas')}
          className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${formType === 'bebas' ? 'bg-white text-[#0B1F3B] shadow' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Bebas Pustaka
        </button>
      </div>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Lengkap</label>
            <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" placeholder="Sesuai KTP" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Aktif</label>
            <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" placeholder="nama@email.com" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">No. WhatsApp</label>
            <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" placeholder="08..." />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Instansi/Gereja Asal</label>
            <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" placeholder="Asal Instansi" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Alamat Domisili</label>
          <textarea rows={3} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" placeholder="Alamat lengkap sesuai domisili saat ini"></textarea>
        </div>

        {/* Drag & Drop Upload Zone */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Unggah Dokumen (KTP, Pas Foto, Bukti Transfer)</label>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 hover:border-[#D4AF37] transition-all cursor-pointer group">
            <UploadCloud className="mx-auto text-gray-400 group-hover:text-[#D4AF37] mb-3" size={32} />
            <p className="text-sm text-gray-600 font-medium mb-1">Tarik & letakkan file di sini, atau <span className="text-[#D4AF37]">Pilih File</span></p>
            <p className="text-xs text-gray-400">Maksimal 5MB (JPG, PNG, PDF). Total 3 file.</p>
          </div>
        </div>

        <div className="pt-4">
          <button className="w-full bg-[#0B1F3B] hover:bg-[#1a365d] text-white font-bold py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2">
            <FileText size={18} />
            {formType === 'daftar' ? 'Kirim Permohonan Anggota' : 'Kirim Pengajuan Bebas Pustaka'}
          </button>
        </div>
      </form>
    </div>
  );
}
