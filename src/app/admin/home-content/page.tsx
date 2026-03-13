'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Save, MoveUp, MoveDown, Trash2 } from 'lucide-react';
import { fetchHomeSection, updateHomeSection } from '@/lib/api';

type HomeHero = {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  backgroundImage: string;
};

type StatItem = {
  id: string;
  icon: string;
  value: string;
  label: string;
  description: string;
  order: number;
};

type ShowcaseItem = {
  id: string;
  title: string;
  degree: string;
  description: string;
  link: string;
  image: string;
  isActive: boolean;
};

const defaultHero: HomeHero = {
  title: 'Membentuk Pemimpin Rohani Masa Depan',
  subtitle: 'STTB Bandung',
  description: 'Pendidikan Teologi Berkualitas dengan Komitmen pada Keunggulan Akademik dan Spiritualitas.',
  primaryButtonText: 'Daftar Sekarang',
  primaryButtonLink: '/admisi',
  secondaryButtonText: 'Lihat Program',
  secondaryButtonLink: '/program/sarjana-teologi',
  backgroundImage: '',
};

const defaultStats: StatItem[] = [
  { id: 'stat-1', icon: 'GraduationCap', value: '7', label: 'Program Studi', description: 'Beragam pilihan program sarjana dan magister', order: 1 },
  { id: 'stat-2', icon: 'Users', value: '500+', label: 'Mahasiswa Aktif', description: 'Komunitas belajar yang dinamis', order: 2 },
  { id: 'stat-3', icon: 'BookOpen', value: '50+', label: 'Dosen Berkualitas', description: 'Tenaga pengajar berpengalaman', order: 3 },
  { id: 'stat-4', icon: 'Award', value: 'Terakreditasi', label: 'BAN-PT', description: 'Standar pendidikan tinggi nasional', order: 4 },
];

const defaultShowcase: ShowcaseItem[] = [
  { id: 'sc-1', title: 'Sarjana Teologi', degree: 'S.Th', description: 'Program studi teologi berkualitas.', link: '/program/sarjana-teologi', image: '', isActive: true },
  { id: 'sc-2', title: 'Magister Teologi', degree: 'M.Th', description: 'Program studi lanjutan teologi.', link: '/program/magister-teologi', image: '', isActive: true },
];

const inputCls = 'w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F]';
const labelCls = 'mb-1 block text-sm font-medium text-slate-700';
const cardCls = 'rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4';

type Tab = 'hero' | 'stats' | 'showcase';

export default function AdminHomeContentPage() {
  const [activeTab, setActiveTab] = useState<Tab>('hero');
  const [hero, setHero] = useState<HomeHero>(defaultHero);
  const [stats, setStats] = useState<StatItem[]>(defaultStats);
  const [showcase, setShowcase] = useState<ShowcaseItem[]>(defaultShowcase);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [loadNote, setLoadNote] = useState('');

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const [heroRes, statsRes, showcaseRes] = await Promise.all([
          fetchHomeSection<HomeHero>('hero').catch(() => null),
          fetchHomeSection<StatItem[]>('stats').catch(() => null),
          fetchHomeSection<ShowcaseItem[]>('showcase').catch(() => null),
        ]);

        if (!mounted) return;

        if (heroRes?.data && typeof heroRes.data === 'object') setHero((p) => ({ ...p, ...heroRes.data }));
        if (Array.isArray(statsRes?.data) && statsRes.data.length > 0) setStats(statsRes.data as StatItem[]);
        if (Array.isArray(showcaseRes?.data) && showcaseRes.data.length > 0) setShowcase(showcaseRes.data as ShowcaseItem[]);
      } catch {
        if (mounted) setLoadNote('Data backend belum ada, menampilkan data default sementara.');
      }
    }

    void load();
    return () => { mounted = false; };
  }, []);

  async function save(section: string, label: string, data: unknown) {
    setIsSaving(true);
    setMessage('');
    try {
      await updateHomeSection(section, data);
      setMessage(`${label} berhasil disimpan!`);
      setTimeout(() => setMessage(''), 3000);
    } catch {
      setMessage(`Gagal menyimpan ${label}. Pastikan Anda sudah login admin.`);
    } finally {
      setIsSaving(false);
    }
  }

  function updateStat(idx: number, field: keyof StatItem, val: string | number) {
    setStats((prev) => { const n = [...prev]; n[idx] = { ...n[idx], [field]: val }; return n; });
  }

  function moveStat(idx: number, dir: 'up' | 'down') {
    setStats((prev) => {
      const n = [...prev];
      const swap = dir === 'up' ? idx - 1 : idx + 1;
      if (swap < 0 || swap >= n.length) return n;
      [n[idx], n[swap]] = [n[swap], n[idx]];
      n[idx].order = idx + 1; n[swap].order = swap + 1;
      return n;
    });
  }

  function updateShowcase(idx: number, field: keyof ShowcaseItem, val: string | boolean) {
    setShowcase((prev) => { const n = [...prev]; n[idx] = { ...n[idx], [field]: val }; return n; });
  }

  const tabs: { key: Tab; label: string }[] = [
    { key: 'hero', label: 'Hero' },
    { key: 'stats', label: 'Statistik' },
    { key: 'showcase', label: 'Program' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-[#0B1F3B]">Konten Homepage</h1>
          <p className="text-sm text-slate-600">Kelola semua konten yang tampil di halaman utama website.</p>
        </div>
        <Link href="/admin/dashboard" className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700">
          Kembali ke Dashboard
        </Link>
      </div>

      {loadNote && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">{loadNote}</div>
      )}
      {message && (
        <div className={`rounded-lg border px-4 py-3 text-sm ${message.startsWith('Gagal') ? 'border-red-200 bg-red-50 text-red-800' : 'border-green-200 bg-green-50 text-green-800'}`}>{message}</div>
      )}

      {/* Tabs */}
      <div className="flex gap-1 rounded-xl border border-slate-200 bg-slate-100 p-1 max-w-md">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${activeTab === t.key ? 'bg-white text-[#0B1F3B] shadow-sm' : 'text-slate-600 hover:text-slate-800'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* HERO TAB */}
      {activeTab === 'hero' && (
        <div className={cardCls}>
          <div>
            <h2 className="text-lg font-semibold text-[#0B1F3B]">Hero Section</h2>
            <p className="text-sm text-slate-500">Bagian pertama yang dilihat pengunjung saat membuka website.</p>
          </div>

          <div>
            <label className={labelCls}>Judul Utama</label>
            <input className={inputCls} value={hero.title} onChange={(e) => setHero((p) => ({ ...p, title: e.target.value }))} placeholder="Membentuk Pemimpin Rohani Masa Depan" />
          </div>
          <div>
            <label className={labelCls}>Subtitle</label>
            <input className={inputCls} value={hero.subtitle} onChange={(e) => setHero((p) => ({ ...p, subtitle: e.target.value }))} placeholder="STTB Bandung" />
          </div>
          <div>
            <label className={labelCls}>Deskripsi</label>
            <textarea className={inputCls} rows={4} value={hero.description} onChange={(e) => setHero((p) => ({ ...p, description: e.target.value }))} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Tombol Utama - Teks</label>
              <input className={inputCls} value={hero.primaryButtonText} onChange={(e) => setHero((p) => ({ ...p, primaryButtonText: e.target.value }))} />
            </div>
            <div>
              <label className={labelCls}>Tombol Utama - Link</label>
              <input className={inputCls} value={hero.primaryButtonLink} onChange={(e) => setHero((p) => ({ ...p, primaryButtonLink: e.target.value }))} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Tombol Sekunder - Teks</label>
              <input className={inputCls} value={hero.secondaryButtonText} onChange={(e) => setHero((p) => ({ ...p, secondaryButtonText: e.target.value }))} />
            </div>
            <div>
              <label className={labelCls}>Tombol Sekunder - Link</label>
              <input className={inputCls} value={hero.secondaryButtonLink} onChange={(e) => setHero((p) => ({ ...p, secondaryButtonLink: e.target.value }))} />
            </div>
          </div>
          <div>
            <label className={labelCls}>Background Image URL</label>
            <input className={inputCls} value={hero.backgroundImage} onChange={(e) => setHero((p) => ({ ...p, backgroundImage: e.target.value }))} placeholder="https://..." />
            {hero.backgroundImage && (
              <img src={hero.backgroundImage} alt="Preview" className="mt-2 h-32 w-full rounded-lg object-cover" />
            )}
          </div>
          <button
            onClick={() => void save('hero', 'Hero Section', hero)}
            disabled={isSaving}
            className="inline-flex items-center gap-2 rounded-lg bg-[#C1121F] px-5 py-2 text-sm font-semibold text-white hover:bg-[#9A0E19] disabled:opacity-70"
          >
            <Save className="h-4 w-4" />
            {isSaving ? 'Menyimpan...' : 'Simpan Perubahan'}
          </button>
        </div>
      )}

      {/* STATS TAB */}
      {activeTab === 'stats' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-[#0B1F3B]">Statistik STTB</h2>
              <p className="text-sm text-slate-500">Angka-angka penting yang ditampilkan di homepage.</p>
            </div>
          </div>

          {stats.map((stat, idx) => (
            <div key={stat.id} className={cardCls}>
              <div className="flex items-center justify-between">
                <span className="font-medium text-slate-700">Statistik #{idx + 1}</span>
                <div className="flex gap-1">
                  <button onClick={() => moveStat(idx, 'up')} disabled={idx === 0} className="rounded p-1 hover:bg-slate-100 disabled:opacity-30"><MoveUp className="h-4 w-4" /></button>
                  <button onClick={() => moveStat(idx, 'down')} disabled={idx === stats.length - 1} className="rounded p-1 hover:bg-slate-100 disabled:opacity-30"><MoveDown className="h-4 w-4" /></button>
                  <button onClick={() => setStats((p) => p.filter((_, i) => i !== idx))} className="rounded p-1 text-red-500 hover:bg-red-50"><Trash2 className="h-4 w-4" /></button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Icon (Lucide)</label>
                  <input className={inputCls} value={stat.icon} onChange={(e) => updateStat(idx, 'icon', e.target.value)} placeholder="GraduationCap" />
                  <p className="mt-1 text-xs text-slate-400">Contoh: GraduationCap, Users, BookOpen, Award</p>
                </div>
                <div>
                  <label className={labelCls}>Nilai</label>
                  <input className={inputCls} value={stat.value} onChange={(e) => updateStat(idx, 'value', e.target.value)} placeholder="7, 500+, etc" />
                </div>
              </div>
              <div>
                <label className={labelCls}>Label</label>
                <input className={inputCls} value={stat.label} onChange={(e) => updateStat(idx, 'label', e.target.value)} placeholder="Program Studi" />
              </div>
              <div>
                <label className={labelCls}>Deskripsi</label>
                <textarea className={inputCls} rows={2} value={stat.description} onChange={(e) => updateStat(idx, 'description', e.target.value)} />
              </div>
            </div>
          ))}

          <button
            onClick={() => void save('stats', 'Statistik', stats)}
            disabled={isSaving}
            className="inline-flex items-center gap-2 rounded-lg bg-[#C1121F] px-5 py-2 text-sm font-semibold text-white hover:bg-[#9A0E19] disabled:opacity-70"
          >
            <Save className="h-4 w-4" />
            {isSaving ? 'Menyimpan...' : 'Simpan Semua Statistik'}
          </button>
        </div>
      )}

      {/* SHOWCASE TAB */}
      {activeTab === 'showcase' && (
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-[#0B1F3B]">Program Showcase</h2>
            <p className="text-sm text-slate-500">Program yang ditampilkan di homepage.</p>
          </div>

          {showcase.map((item, idx) => (
            <div key={item.id} className={cardCls}>
              <div className="flex items-center justify-between">
                <span className="font-medium text-slate-700">{item.title || `Program #${idx + 1}`}</span>
                <button onClick={() => setShowcase((p) => p.filter((_, i) => i !== idx))} className="rounded p-1 text-red-500 hover:bg-red-50"><Trash2 className="h-4 w-4" /></button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Judul Program</label>
                  <input className={inputCls} value={item.title} onChange={(e) => updateShowcase(idx, 'title', e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Gelar</label>
                  <input className={inputCls} value={item.degree} onChange={(e) => updateShowcase(idx, 'degree', e.target.value)} placeholder="S.Th, M.Th, etc" />
                </div>
              </div>
              <div>
                <label className={labelCls}>Deskripsi</label>
                <textarea className={inputCls} rows={3} value={item.description} onChange={(e) => updateShowcase(idx, 'description', e.target.value)} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Link Program</label>
                  <input className={inputCls} value={item.link} onChange={(e) => updateShowcase(idx, 'link', e.target.value)} placeholder="/program/..." />
                </div>
                <div>
                  <label className={labelCls}>Image URL</label>
                  <input className={inputCls} value={item.image} onChange={(e) => updateShowcase(idx, 'image', e.target.value)} />
                </div>
              </div>
              {item.image && <img src={item.image} alt={item.title} className="h-32 w-full rounded-lg object-cover" />}
              <label className="flex cursor-pointer items-center gap-2 text-sm">
                <input type="checkbox" checked={item.isActive} onChange={(e) => updateShowcase(idx, 'isActive', e.target.checked)} className="rounded border-slate-300" />
                Aktif (tampilkan di homepage)
              </label>
            </div>
          ))}

          <button
            onClick={() => void save('showcase', 'Program Showcase', showcase)}
            disabled={isSaving}
            className="inline-flex items-center gap-2 rounded-lg bg-[#C1121F] px-5 py-2 text-sm font-semibold text-white hover:bg-[#9A0E19] disabled:opacity-70"
          >
            <Save className="h-4 w-4" />
            {isSaving ? 'Menyimpan...' : 'Simpan Program Showcase'}
          </button>
        </div>
      )}
    </div>
  );
}
