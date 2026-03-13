'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Save, MoveUp, MoveDown, Trash2 } from 'lucide-react';
import { fetchLeadPrograms, fetchLeadSection, updateLeadSection } from '@/lib/api';

type LeadHero = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  backgroundImage: string;
};

type Pillar = {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  backgroundColor: string;
  isActive: boolean;
};

type LeadProgram = {
  id: string;
  title: string;
  description: string;
  batch: string;
  status: string;
  image: string;
  registrationLink: string;
  isActive: boolean;
  order: number;
};

type LeadEvent = {
  id: string;
  title: string;
  date: string;
  month: string;
  location: string;
  description: string;
  isLeadEvent: boolean;
};

const defaultHero: LeadHero = {
  badge: 'Learning, Equipping, & Development',
  title: 'L.E.A.D. Center: Memperlengkapi Pelayan',
  subtitle: 'Pusat Pendidikan & Pelatihan Non-Formal STT Bandung',
  description: 'Memperlengkapi jemaat, hamba Tuhan, dan pemimpin gereja dengan keahlian praktis.',
  primaryButtonText: 'Lihat Program',
  primaryButtonLink: '/lead',
  secondaryButtonText: 'Hubungi Kami',
  secondaryButtonLink: '/kontak',
  backgroundImage: '',
};

const defaultPillars: Pillar[] = [
  { id: 'p-1', title: 'Learning', description: 'Belajar secara mendalam', icon: 'BookOpen', iconColor: '#2e90ff', backgroundColor: '#eef6ff', isActive: true },
  { id: 'p-2', title: 'Equipping', description: 'Diperlengkapi untuk melayani', icon: 'Users', iconColor: '#c1121f', backgroundColor: '#fff0f0', isActive: true },
  { id: 'p-3', title: 'Development', description: 'Bertumbuh dalam karakter', icon: 'Award', iconColor: '#0b1f3b', backgroundColor: '#f0f4ff', isActive: true },
];

const inputCls = 'w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F]';
const labelCls = 'mb-1 block text-sm font-medium text-slate-700';
const cardCls = 'rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4';

type Tab = 'hero' | 'pillars' | 'programs' | 'events';

export default function AdminLeadContentPage() {
  const [activeTab, setActiveTab] = useState<Tab>('hero');
  const [hero, setHero] = useState<LeadHero>(defaultHero);
  const [pillars, setPillars] = useState<Pillar[]>(defaultPillars);
  const [programs, setPrograms] = useState<LeadProgram[]>([]);
  const [events, setEvents] = useState<LeadEvent[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [loadNote, setLoadNote] = useState('');

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const [heroRes, pillarsRes, programsRes, eventsRes] = await Promise.all([
          fetchLeadSection<LeadHero>('hero').catch(() => null),
          fetchLeadSection<Pillar[]>('pillars').catch(() => null),
          fetchLeadPrograms<LeadProgram>().catch(() => null),
          fetchLeadSection<LeadEvent[]>('events').catch(() => null),
        ]);

        if (!mounted) return;

        if (heroRes?.data && typeof heroRes.data === 'object') setHero((p) => ({ ...p, ...heroRes.data }));
        if (Array.isArray(pillarsRes?.data) && pillarsRes.data.length > 0) setPillars(pillarsRes.data as Pillar[]);
        if (Array.isArray(programsRes) && programsRes.length > 0) setPrograms(programsRes as LeadProgram[]);
        if (Array.isArray(eventsRes?.data) && eventsRes.data.length > 0) setEvents(eventsRes.data as LeadEvent[]);
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
      await updateLeadSection(section, data);
      setMessage(`${label} berhasil disimpan!`);
      setTimeout(() => setMessage(''), 3000);
    } catch {
      setMessage(`Gagal menyimpan ${label}. Pastikan Anda sudah login admin.`);
    } finally {
      setIsSaving(false);
    }
  }

  function updatePillar(idx: number, field: keyof Pillar, val: string | boolean) {
    setPillars((p) => { const n = [...p]; n[idx] = { ...n[idx], [field]: val }; return n; });
  }

  function updateProgram(idx: number, field: keyof LeadProgram, val: string | boolean | number) {
    setPrograms((p) => { const n = [...p]; n[idx] = { ...n[idx], [field]: val }; return n; });
  }

  function moveProgram(idx: number, dir: 'up' | 'down') {
    setPrograms((p) => {
      const n = [...p];
      const swap = dir === 'up' ? idx - 1 : idx + 1;
      if (swap < 0 || swap >= n.length) return n;
      [n[idx], n[swap]] = [n[swap], n[idx]];
      n[idx].order = idx + 1; n[swap].order = swap + 1;
      return n;
    });
  }

  function updateEvent(idx: number, field: keyof LeadEvent, val: string | boolean) {
    setEvents((p) => { const n = [...p]; n[idx] = { ...n[idx], [field]: val }; return n; });
  }

  const tabs: { key: Tab; label: string }[] = [
    { key: 'hero', label: 'Hero' },
    { key: 'pillars', label: '3 Pilar' },
    { key: 'programs', label: 'Program' },
    { key: 'events', label: 'Agenda' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-[#0B1F3B]">Konten LEAD Center</h1>
          <p className="text-sm text-slate-600">Kelola konten halaman Learning, Equipping, &amp; Development Center.</p>
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
      <div className="flex gap-1 rounded-xl border border-slate-200 bg-slate-100 p-1 max-w-lg">
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
            <h2 className="text-lg font-semibold text-[#0B1F3B]">Hero Section - LEAD Center</h2>
            <p className="text-sm text-slate-500">Bagian header utama halaman LEAD Center.</p>
          </div>
          <div>
            <label className={labelCls}>Badge Text</label>
            <input className={inputCls} value={hero.badge} onChange={(e) => setHero((p) => ({ ...p, badge: e.target.value }))} placeholder="Learning, Equipping, & Development" />
          </div>
          <div>
            <label className={labelCls}>Judul Utama</label>
            <textarea className={inputCls} rows={2} value={hero.title} onChange={(e) => setHero((p) => ({ ...p, title: e.target.value }))} />
          </div>
          <div>
            <label className={labelCls}>Subtitle</label>
            <input className={inputCls} value={hero.subtitle} onChange={(e) => setHero((p) => ({ ...p, subtitle: e.target.value }))} />
          </div>
          <div>
            <label className={labelCls}>Deskripsi</label>
            <textarea className={inputCls} rows={3} value={hero.description} onChange={(e) => setHero((p) => ({ ...p, description: e.target.value }))} />
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
            {hero.backgroundImage && <img src={hero.backgroundImage} alt="Preview" className="mt-2 h-32 w-full rounded-lg object-cover" />}
          </div>
          <button onClick={() => void save('hero', 'Hero Section', hero)} disabled={isSaving}
            className="inline-flex items-center gap-2 rounded-lg bg-[#C1121F] px-5 py-2 text-sm font-semibold text-white hover:bg-[#9A0E19] disabled:opacity-70">
            <Save className="h-4 w-4" />{isSaving ? 'Menyimpan...' : 'Simpan Perubahan'}
          </button>
        </div>
      )}

      {/* PILLARS TAB */}
      {activeTab === 'pillars' && (
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-[#0B1F3B]">Tiga Pilar Utama LEAD</h2>
            <p className="text-sm text-slate-500">Learning, Equipping, &amp; Development</p>
          </div>
          {pillars.map((pillar, idx) => (
            <div key={pillar.id} className={cardCls}>
              <div className="flex items-center justify-between">
                <span className="font-medium text-slate-700">Pilar {idx + 1}: {pillar.title}</span>
                <span className={`rounded px-2 py-1 text-xs font-semibold ${pillar.isActive ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
                  {pillar.isActive ? 'Aktif' : 'Non-aktif'}
                </span>
              </div>
              <div>
                <label className={labelCls}>Judul Pilar</label>
                <input className={inputCls} value={pillar.title} onChange={(e) => updatePillar(idx, 'title', e.target.value)} />
              </div>
              <div>
                <label className={labelCls}>Deskripsi</label>
                <textarea className={inputCls} rows={3} value={pillar.description} onChange={(e) => updatePillar(idx, 'description', e.target.value)} />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className={labelCls}>Icon (Lucide)</label>
                  <input className={inputCls} value={pillar.icon} onChange={(e) => updatePillar(idx, 'icon', e.target.value)} placeholder="BookOpen" />
                </div>
                <div>
                  <label className={labelCls}>Icon Color</label>
                  <input type="color" className="h-10 w-full rounded-lg border border-slate-300 p-1" value={pillar.iconColor} onChange={(e) => updatePillar(idx, 'iconColor', e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Background Color</label>
                  <input type="color" className="h-10 w-full rounded-lg border border-slate-300 p-1" value={pillar.backgroundColor} onChange={(e) => updatePillar(idx, 'backgroundColor', e.target.value)} />
                </div>
              </div>
              <label className="flex cursor-pointer items-center gap-2 text-sm">
                <input type="checkbox" checked={pillar.isActive} onChange={(e) => updatePillar(idx, 'isActive', e.target.checked)} className="rounded border-slate-300" />
                Aktifkan pilar ini
              </label>
            </div>
          ))}
          <button onClick={() => void save('pillars', '3 Pilar', pillars)} disabled={isSaving}
            className="inline-flex items-center gap-2 rounded-lg bg-[#C1121F] px-5 py-2 text-sm font-semibold text-white hover:bg-[#9A0E19] disabled:opacity-70">
            <Save className="h-4 w-4" />{isSaving ? 'Menyimpan...' : 'Simpan 3 Pilar'}
          </button>
        </div>
      )}

      {/* PROGRAMS TAB */}
      {activeTab === 'programs' && (
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-[#0B1F3B]">Program Unggulan LEAD</h2>
            <p className="text-sm text-slate-500">Daftar program pelatihan dan sertifikasi.</p>
          </div>
          {programs.length === 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500">
              Belum ada program. Data akan muncul setelah terhubung ke backend.
            </div>
          )}
          {programs.map((prog, idx) => (
            <div key={prog.id} className={cardCls}>
              <div className="flex items-center justify-between">
                <span className="font-medium text-slate-700">{prog.title || `Program #${idx + 1}`}</span>
                <div className="flex gap-1">
                  <button onClick={() => moveProgram(idx, 'up')} disabled={idx === 0} className="rounded p-1 hover:bg-slate-100 disabled:opacity-30"><MoveUp className="h-4 w-4" /></button>
                  <button onClick={() => moveProgram(idx, 'down')} disabled={idx === programs.length - 1} className="rounded p-1 hover:bg-slate-100 disabled:opacity-30"><MoveDown className="h-4 w-4" /></button>
                  <button onClick={() => setPrograms((p) => p.filter((_, i) => i !== idx))} className="rounded p-1 text-red-500 hover:bg-red-50"><Trash2 className="h-4 w-4" /></button>
                </div>
              </div>
              <div>
                <label className={labelCls}>Nama Program</label>
                <input className={inputCls} value={prog.title} onChange={(e) => updateProgram(idx, 'title', e.target.value)} />
              </div>
              <div>
                <label className={labelCls}>Deskripsi</label>
                <textarea className={inputCls} rows={3} value={prog.description} onChange={(e) => updateProgram(idx, 'description', e.target.value)} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Batch Info</label>
                  <input className={inputCls} value={prog.batch} onChange={(e) => updateProgram(idx, 'batch', e.target.value)} placeholder="Batch 5 - Buka Pendaftaran" />
                </div>
                <div>
                  <label className={labelCls}>Status</label>
                  <input className={inputCls} value={prog.status} onChange={(e) => updateProgram(idx, 'status', e.target.value)} placeholder="Pendaftaran Dibuka" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Image URL</label>
                  <input className={inputCls} value={prog.image} onChange={(e) => updateProgram(idx, 'image', e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Link Pendaftaran</label>
                  <input className={inputCls} value={prog.registrationLink} onChange={(e) => updateProgram(idx, 'registrationLink', e.target.value)} />
                </div>
              </div>
              {prog.image && <img src={prog.image} alt={prog.title} className="h-32 w-full rounded-lg object-cover" />}
              <label className="flex cursor-pointer items-center gap-2 text-sm">
                <input type="checkbox" checked={prog.isActive} onChange={(e) => updateProgram(idx, 'isActive', e.target.checked)} className="rounded border-slate-300" />
                Tampilkan program ini
              </label>
            </div>
          ))}
          {programs.length > 0 && (
            <button onClick={() => void save('programs', 'Program LEAD', programs)} disabled={isSaving}
              className="inline-flex items-center gap-2 rounded-lg bg-[#C1121F] px-5 py-2 text-sm font-semibold text-white hover:bg-[#9A0E19] disabled:opacity-70">
              <Save className="h-4 w-4" />{isSaving ? 'Menyimpan...' : 'Simpan Program'}
            </button>
          )}
        </div>
      )}

      {/* EVENTS TAB */}
      {activeTab === 'events' && (
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-[#0B1F3B]">Agenda LEAD</h2>
            <p className="text-sm text-slate-500">Daftar kegiatan dan agenda LEAD Center.</p>
          </div>
          {events.length === 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500">
              Belum ada agenda. Data akan muncul setelah terhubung ke backend.
            </div>
          )}
          {events.map((ev, idx) => (
            <div key={ev.id} className={cardCls}>
              <div className="flex items-center justify-between">
                <span className="font-medium text-slate-700">{ev.title || `Agenda #${idx + 1}`}</span>
                <button onClick={() => setEvents((p) => p.filter((_, i) => i !== idx))} className="rounded p-1 text-red-500 hover:bg-red-50"><Trash2 className="h-4 w-4" /></button>
              </div>
              <div>
                <label className={labelCls}>Judul Acara</label>
                <input className={inputCls} value={ev.title} onChange={(e) => updateEvent(idx, 'title', e.target.value)} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Tanggal</label>
                  <input className={inputCls} value={ev.date} onChange={(e) => updateEvent(idx, 'date', e.target.value)} placeholder="23" />
                </div>
                <div>
                  <label className={labelCls}>Bulan</label>
                  <input className={inputCls} value={ev.month} onChange={(e) => updateEvent(idx, 'month', e.target.value)} placeholder="FEB" />
                </div>
              </div>
              <div>
                <label className={labelCls}>Lokasi</label>
                <input className={inputCls} value={ev.location} onChange={(e) => updateEvent(idx, 'location', e.target.value)} />
              </div>
              <div>
                <label className={labelCls}>Deskripsi</label>
                <textarea className={inputCls} rows={2} value={ev.description} onChange={(e) => updateEvent(idx, 'description', e.target.value)} />
              </div>
              <label className="flex cursor-pointer items-center gap-2 text-sm">
                <input type="checkbox" checked={ev.isLeadEvent} onChange={(e) => updateEvent(idx, 'isLeadEvent', e.target.checked)} className="rounded border-slate-300" />
                Tandai sebagai LEAD Event
              </label>
            </div>
          ))}
          {events.length > 0 && (
            <button onClick={() => void save('events', 'Agenda', events)} disabled={isSaving}
              className="inline-flex items-center gap-2 rounded-lg bg-[#C1121F] px-5 py-2 text-sm font-semibold text-white hover:bg-[#9A0E19] disabled:opacity-70">
              <Save className="h-4 w-4" />{isSaving ? 'Menyimpan...' : 'Simpan Agenda'}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
