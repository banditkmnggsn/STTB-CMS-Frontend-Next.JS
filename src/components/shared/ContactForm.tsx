"use client";

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'General',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error('Submission failed');
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', type: 'General', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (submitStatus === 'success') {
    return (
      <div className="p-8 bg-green-50 rounded-xl border border-green-200 text-center flex flex-col items-center">
        <CheckCircle className="text-green-500 mb-4" size={48} />
        <h3 className="text-xl font-bold text-green-800 mb-2">Terkirim!</h3>
        <p className="text-green-700">Pesan Anda berhasil dikirim. Kami akan segera menghubungi Anda kembali.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-bold text-[#0B1F3B] mb-2" htmlFor="name">Nama Lengkap *</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37]"
          placeholder="Masukkan nama lengkap"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-[#0B1F3B] mb-2" htmlFor="email">Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37]"
          placeholder="email@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-[#0B1F3B] mb-2" htmlFor="phone">Nomor Telepon</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37]"
          placeholder="08xx xxxx xxxx"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-[#0B1F3B] mb-2" htmlFor="type">Perihal</label>
        <select 
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37]">
          <option value="Admission">Informasi Pendaftaran</option>
          <option value="Program">Program Studi</option>
          <option value="General">Lainnya</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-bold text-[#0B1F3B] mb-2" htmlFor="message">Pesan *</label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37]"
          placeholder="Tulis pesan Anda di sini..."
        ></textarea>
      </div>

      {submitStatus === 'error' && (
        <p className="text-red-500 text-sm">Terjadi kesalahan. Silakan coba lagi nanti.</p>
      )}

      <button
        type="submit"
        disabled={submitStatus === 'loading'}
        className="w-full bg-[#0B1F3B] hover:bg-[#1a365d] text-white font-bold py-4 rounded-lg transition disabled:opacity-70 flex justify-center items-center"
      >
        {submitStatus === 'loading' ? 'Mengirim...' : 'Kirim Pesan'}
      </button>
    </form>
  );
}
