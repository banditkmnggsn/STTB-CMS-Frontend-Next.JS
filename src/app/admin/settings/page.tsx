'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Save } from 'lucide-react';
import { fetchSiteSettings, updateSiteSettings } from '@/lib/api';

type GeneralSettings = {
  siteTitle: string;
  siteDescription: string;
  siteUrl: string;
  adminEmail: string;
  phone: string;
  address: string;
};

type SocialSettings = {
  facebook: string;
  instagram: string;
  youtube: string;
  twitter: string;
};

const defaultGeneral: GeneralSettings = {
  siteTitle: 'STTB Bandung - Sekolah Tinggi Teologi Bandung',
  siteDescription: 'Pendidikan Teologi Berkualitas dengan Komitmen pada Keunggulan Akademik dan Spiritualitas',
  siteUrl: 'https://sttb.ac.id',
  adminEmail: 'admin@sttb.ac.id',
  phone: '+62 22 123456',
  address: 'Jl. Ciumbuleuit No. 1, Bandung, Jawa Barat',
};

const defaultSocial: SocialSettings = {
  facebook: 'https://facebook.com/sttbandung',
  instagram: 'https://instagram.com/sttbandung',
  youtube: 'https://youtube.com/@sttbandung',
  twitter: '',
};

const inputCls = 'w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F]';
const labelCls = 'mb-1 block text-sm font-medium text-slate-700';
const cardCls = 'rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4';

type Tab = 'general' | 'social';

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('general');
  const [general, setGeneral] = useState<GeneralSettings>(defaultGeneral);
  const [social, setSocial] = useState<SocialSettings>(defaultSocial);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function load() {
      try {
        const [genRes, socialRes] = await Promise.all([
          fetchSiteSettings('general').catch(() => null),
          fetchSiteSettings('social').catch(() => null),
        ]);

        if (genRes && !Array.isArray(genRes) && genRes.data && typeof genRes.data === 'object') {
          setGeneral((p) => ({ ...p, ...(genRes.data as Partial<GeneralSettings>) }));
        }
        if (socialRes && !Array.isArray(socialRes) && socialRes.data && typeof socialRes.data === 'object') {
          setSocial((p) => ({ ...p, ...(socialRes.data as Partial<SocialSettings>) }));
        }
      } catch {
        // Use defaults silently
      }
    }
    void load();
  }, []);

  async function save(category: string, label: string, data: unknown) {
    setIsSaving(true);
    setMessage('');
    try {
      await updateSiteSettings(category, data);
      setMessage(`${label} berhasil disimpan!`);
      setTimeout(() => setMessage(''), 3000);
    } catch {
      setMessage(`Gagal menyimpan ${label}. Pastikan Anda sudah login admin.`);
    } finally {
      setIsSaving(false);
    }
  }

  const tabs: { key: Tab; label: string }[] = [
    { key: 'general', label: 'Umum' },
    { key: 'social', label: 'Media Sosial' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-[#0B1F3B]">Pengaturan Website</h1>
          <p className="text-sm text-slate-600">Konfigurasi umum website STTB.</p>
        </div>
        <Link href="/admin/dashboard" className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700">
          Dashboard
        </Link>
      </div>

      {message && (
        <div className={`rounded-lg border px-4 py-3 text-sm ${message.startsWith('Gagal') ? 'border-red-200 bg-red-50 text-red-800' : 'border-green-200 bg-green-50 text-green-800'}`}>{message}</div>
      )}

      {/* Tabs */}
      <div className="flex gap-1 rounded-xl border border-slate-200 bg-slate-100 p-1 max-w-xs">
        {tabs.map((t) => (
          <button key={t.key} onClick={() => setActiveTab(t.key)}
            className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${activeTab === t.key ? 'bg-white text-[#0B1F3B] shadow-sm' : 'text-slate-600 hover:text-slate-800'}`}>
            {t.label}
          </button>
        ))}
      </div>

      {/* GENERAL TAB */}
      {activeTab === 'general' && (
        <div className={cardCls}>
          <div>
            <h2 className="text-lg font-semibold text-[#0B1F3B]">Pengaturan Umum</h2>
            <p className="text-sm text-slate-500">Informasi dasar tentang website.</p>
          </div>
          <div>
            <label className={labelCls}>Judul Website</label>
            <input className={inputCls} value={general.siteTitle} onChange={(e) => setGeneral((p) => ({ ...p, siteTitle: e.target.value }))} />
          </div>
          <div>
            <label className={labelCls}>Deskripsi Website</label>
            <textarea className={inputCls} rows={3} value={general.siteDescription} onChange={(e) => setGeneral((p) => ({ ...p, siteDescription: e.target.value }))} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>URL Website</label>
              <input type="url" className={inputCls} value={general.siteUrl} onChange={(e) => setGeneral((p) => ({ ...p, siteUrl: e.target.value }))} />
            </div>
            <div>
              <label className={labelCls}>Email Admin</label>
              <input type="email" className={inputCls} value={general.adminEmail} onChange={(e) => setGeneral((p) => ({ ...p, adminEmail: e.target.value }))} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Nomor Telepon</label>
              <input className={inputCls} value={general.phone} onChange={(e) => setGeneral((p) => ({ ...p, phone: e.target.value }))} />
            </div>
            <div>
              <label className={labelCls}>Alamat</label>
              <input className={inputCls} value={general.address} onChange={(e) => setGeneral((p) => ({ ...p, address: e.target.value }))} />
            </div>
          </div>
          <button onClick={() => void save('general', 'Pengaturan Umum', general)} disabled={isSaving}
            className="inline-flex items-center gap-2 rounded-lg bg-[#C1121F] px-5 py-2 text-sm font-semibold text-white hover:bg-[#9A0E19] disabled:opacity-70">
            <Save className="h-4 w-4" />{isSaving ? 'Menyimpan...' : 'Simpan Pengaturan'}
          </button>
        </div>
      )}

      {/* SOCIAL TAB */}
      {activeTab === 'social' && (
        <div className={cardCls}>
          <div>
            <h2 className="text-lg font-semibold text-[#0B1F3B]">Media Sosial</h2>
            <p className="text-sm text-slate-500">Link media sosial resmi STTB.</p>
          </div>
          <div>
            <label className={labelCls}>Facebook</label>
            <input type="url" className={inputCls} value={social.facebook} onChange={(e) => setSocial((p) => ({ ...p, facebook: e.target.value }))} placeholder="https://facebook.com/..." />
          </div>
          <div>
            <label className={labelCls}>Instagram</label>
            <input type="url" className={inputCls} value={social.instagram} onChange={(e) => setSocial((p) => ({ ...p, instagram: e.target.value }))} placeholder="https://instagram.com/..." />
          </div>
          <div>
            <label className={labelCls}>YouTube</label>
            <input type="url" className={inputCls} value={social.youtube} onChange={(e) => setSocial((p) => ({ ...p, youtube: e.target.value }))} placeholder="https://youtube.com/..." />
          </div>
          <div>
            <label className={labelCls}>Twitter / X</label>
            <input type="url" className={inputCls} value={social.twitter} onChange={(e) => setSocial((p) => ({ ...p, twitter: e.target.value }))} placeholder="https://x.com/..." />
          </div>
          <button onClick={() => void save('social', 'Media Sosial', social)} disabled={isSaving}
            className="inline-flex items-center gap-2 rounded-lg bg-[#C1121F] px-5 py-2 text-sm font-semibold text-white hover:bg-[#9A0E19] disabled:opacity-70">
            <Save className="h-4 w-4" />{isSaving ? 'Menyimpan...' : 'Simpan Media Sosial'}
          </button>
        </div>
      )}
    </div>
  );
}
