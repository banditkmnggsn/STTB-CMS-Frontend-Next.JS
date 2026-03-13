'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Trash2, Edit, Save, X } from 'lucide-react';
import { fetchNews, createNews, deleteNews, type NewsItem } from '@/lib/api';

const inputCls = 'w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F]';
const labelCls = 'mb-1 block text-sm font-medium text-slate-700';

type NewsForm = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
};

const emptyForm: NewsForm = {
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  featuredImage: '',
};

export default function AdminNewsPage() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<NewsForm>(emptyForm);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    void load();
  }, []);

  async function load() {
    setLoading(true);
    try {
      const res = await fetchNews({ limit: 50 });
      setItems(res?.items ?? []);
    } catch {
      setMessage('Gagal memuat berita. Periksa koneksi backend.');
    } finally {
      setLoading(false);
    }
  }

  function autoSlug(title: string) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  async function handleCreate() {
    if (!form.title.trim()) { setMessage('Judul tidak boleh kosong.'); return; }
    setIsSaving(true);
    setMessage('');
    try {
      const newItem = await createNews({
        slug: form.slug || autoSlug(form.title),
        title: form.title,
        excerpt: form.excerpt || null,
        content: form.content,
        featuredImage: form.featuredImage || null,
      });
      setItems((p) => [newItem, ...p]);
      setForm(emptyForm);
      setShowForm(false);
      setMessage('Berita berhasil dibuat!');
      setTimeout(() => setMessage(''), 3000);
    } catch {
      setMessage('Gagal membuat berita. Pastikan Anda sudah login admin.');
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDelete(id: string, title: string) {
    if (!confirm(`Hapus berita "${title}"?`)) return;
    try {
      await deleteNews(id);
      setItems((p) => p.filter((n) => n.id !== id));
      setMessage('Berita berhasil dihapus.');
      setTimeout(() => setMessage(''), 3000);
    } catch {
      setMessage('Gagal menghapus berita.');
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-[#0B1F3B]">Manajemen Berita</h1>
          <p className="text-sm text-slate-600">Kelola artikel dan berita yang ditampilkan di website.</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => { setShowForm((p) => !p); setForm(emptyForm); }}
            className="inline-flex items-center gap-2 rounded-lg bg-[#C1121F] px-4 py-2 text-sm font-semibold text-white hover:bg-[#9A0E19]"
          >
            {showForm ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            {showForm ? 'Batal' : 'Tambah Berita'}
          </button>
          <Link href="/admin/dashboard" className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700">
            Dashboard
          </Link>
        </div>
      </div>

      {message && (
        <div className={`rounded-lg border px-4 py-3 text-sm ${message.startsWith('Gagal') ? 'border-red-200 bg-red-50 text-red-800' : 'border-green-200 bg-green-50 text-green-800'}`}>{message}</div>
      )}

      {/* Create Form */}
      {showForm && (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
          <h2 className="text-lg font-semibold text-[#0B1F3B]">Tambah Berita Baru</h2>
          <div>
            <label className={labelCls}>Judul *</label>
            <input
              className={inputCls}
              value={form.title}
              onChange={(e) => setForm((p) => ({ ...p, title: e.target.value, slug: autoSlug(e.target.value) }))}
              placeholder="Judul berita..."
            />
          </div>
          <div>
            <label className={labelCls}>Slug (URL)</label>
            <input className={inputCls} value={form.slug} onChange={(e) => setForm((p) => ({ ...p, slug: e.target.value }))} placeholder="judul-berita" />
          </div>
          <div>
            <label className={labelCls}>Ringkasan</label>
            <textarea className={inputCls} rows={2} value={form.excerpt} onChange={(e) => setForm((p) => ({ ...p, excerpt: e.target.value }))} />
          </div>
          <div>
            <label className={labelCls}>Konten</label>
            <textarea className={inputCls} rows={6} value={form.content} onChange={(e) => setForm((p) => ({ ...p, content: e.target.value }))} placeholder="Tulis isi berita di sini (mendukung HTML)..." />
          </div>
          <div>
            <label className={labelCls}>Featured Image URL</label>
            <input className={inputCls} value={form.featuredImage} onChange={(e) => setForm((p) => ({ ...p, featuredImage: e.target.value }))} placeholder="https://..." />
            {form.featuredImage && <img src={form.featuredImage} alt="Preview" className="mt-2 h-28 w-full rounded-lg object-cover" />}
          </div>
          <button
            onClick={() => void handleCreate()}
            disabled={isSaving}
            className="inline-flex items-center gap-2 rounded-lg bg-[#C1121F] px-5 py-2 text-sm font-semibold text-white hover:bg-[#9A0E19] disabled:opacity-70"
          >
            <Save className="h-4 w-4" />{isSaving ? 'Menyimpan...' : 'Simpan Berita'}
          </button>
        </div>
      )}

      {/* News List */}
      {loading ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500">Memuat berita...</div>
      ) : items.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500">
          Belum ada berita. Klik &ldquo;Tambah Berita&rdquo; untuk membuat yang pertama.
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="border-b border-slate-200 bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Judul</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700 hidden md:table-cell">Kategori</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700 hidden lg:table-cell">Tanggal</th>
                <th className="px-4 py-3 text-right font-semibold text-slate-700">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {items.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50">
                  <td className="px-4 py-3">
                    <div className="font-medium text-slate-800 line-clamp-1">{item.title}</div>
                    <div className="text-xs text-slate-400">/berita/{item.slug}</div>
                  </td>
                  <td className="px-4 py-3 text-slate-600 hidden md:table-cell">{item.category?.name ?? '—'}</td>
                  <td className="px-4 py-3 text-slate-600 hidden lg:table-cell">
                    {item.publishDate ? new Date(item.publishDate).toLocaleDateString('id-ID') : '—'}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={`/berita/${item.slug}`}
                        target="_blank"
                        className="rounded p-1.5 text-slate-500 hover:bg-slate-100"
                        title="Lihat di publik"
                      >
                        <Edit className="h-4 w-4" />
                      </Link>
                      <button
                        onClick={() => void handleDelete(item.id, item.title)}
                        className="rounded p-1.5 text-red-500 hover:bg-red-50"
                        title="Hapus"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
