'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Save } from 'lucide-react';
import { fetchAllPrograms, updateProgramBySlug, type ProgramItem } from '@/lib/api';

const inputCls = 'w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F]';
const labelCls = 'mb-1 block text-sm font-medium text-slate-700';
const cardCls = 'rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4';

export default function AdminProgramsPage() {
  const [items, setItems] = useState<ProgramItem[]>([]);
  const [savingSlug, setSavingSlug] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    void load();
  }, []);

  async function load() {
    setLoading(true);
    setMessage('');
    try {
      const programs = await fetchAllPrograms();
      setItems(programs ?? []);
    } catch {
      setMessage('Gagal memuat program. Periksa koneksi backend.');
    } finally {
      setLoading(false);
    }
  }

  function updateField(index: number, field: keyof ProgramItem, value: string | boolean) {
    setItems((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  }

  async function saveItem(item: ProgramItem) {
    if (!item.slug) {
      setMessage('Slug program tidak boleh kosong.');
      return;
    }

    setSavingSlug(item.slug);
    setMessage('');

    try {
      await updateProgramBySlug(item.slug, {
        title: item.title,
        degree: item.degree,
        shortDescription: item.shortDescription,
        heroDescription: item.heroDescription,
        heroImage: item.heroImage,
        isActive: item.isActive,
      });
      setMessage(`Program ${item.title} berhasil disimpan.`);
      setTimeout(() => setMessage(''), 3000);
    } catch {
      setMessage(`Gagal menyimpan program ${item.title}. Pastikan Anda sudah login admin.`);
    } finally {
      setSavingSlug(null);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-[#0B1F3B]">Manajemen Program</h1>
          <p className="text-sm text-slate-600">Edit data program yang sudah ada di backend CMS.</p>
        </div>
        <Link href="/admin/dashboard" className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700">
          Dashboard
        </Link>
      </div>

      {message && (
        <div className={`rounded-lg border px-4 py-3 text-sm ${message.startsWith('Gagal') ? 'border-red-200 bg-red-50 text-red-800' : 'border-green-200 bg-green-50 text-green-800'}`}>
          {message}
        </div>
      )}

      {loading ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500">Memuat program...</div>
      ) : items.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500">
          Belum ada program di backend.
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={item.id} className={cardCls}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h2 className="text-lg font-semibold text-[#0B1F3B]">{item.title}</h2>
                  <p className="text-xs text-slate-500">Slug: {item.slug}</p>
                </div>
                <button
                  onClick={() => void saveItem(item)}
                  disabled={savingSlug === item.slug}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#C1121F] px-4 py-2 text-sm font-semibold text-white hover:bg-[#9A0E19] disabled:opacity-70"
                >
                  <Save className="h-4 w-4" />
                  {savingSlug === item.slug ? 'Menyimpan...' : 'Simpan Program'}
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className={labelCls}>Nama Program</label>
                  <input className={inputCls} value={item.title} onChange={(e) => updateField(index, 'title', e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Gelar</label>
                  <input className={inputCls} value={item.degree ?? ''} onChange={(e) => updateField(index, 'degree', e.target.value)} />
                </div>
              </div>

              <div>
                <label className={labelCls}>Deskripsi Singkat</label>
                <textarea
                  className={inputCls}
                  rows={2}
                  value={item.shortDescription ?? ''}
                  onChange={(e) => updateField(index, 'shortDescription', e.target.value)}
                />
              </div>

              <div>
                <label className={labelCls}>Deskripsi Hero</label>
                <textarea
                  className={inputCls}
                  rows={3}
                  value={item.heroDescription ?? ''}
                  onChange={(e) => updateField(index, 'heroDescription', e.target.value)}
                />
              </div>

              <div>
                <label className={labelCls}>Hero Image URL</label>
                <input
                  className={inputCls}
                  value={item.heroImage ?? ''}
                  onChange={(e) => updateField(index, 'heroImage', e.target.value)}
                  placeholder="https://..."
                />
                {item.heroImage && <img src={item.heroImage} alt={item.title} className="mt-2 h-28 w-full rounded-lg object-cover" />}
              </div>

              <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={item.isActive !== false}
                  onChange={(e) => updateField(index, 'isActive', e.target.checked)}
                  className="rounded border-slate-300"
                />
                Program aktif
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}