'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Save, Trash2, X } from 'lucide-react';
import { createPage, deletePage, fetchPages, updatePage, type CmsPageItem } from '@/lib/api';

const inputCls = 'w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F]';
const labelCls = 'mb-1 block text-sm font-medium text-slate-700';

type PageForm = {
  title: string;
  slug: string;
  data: string;
  isActive: boolean;
};

const emptyForm: PageForm = {
  title: '',
  slug: '',
  data: '{\n  "content": ""\n}',
  isActive: true,
};

function autoSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export default function AdminPagesPage() {
  const [items, setItems] = useState<CmsPageItem[]>([]);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [editor, setEditor] = useState<PageForm>(emptyForm);
  const [showCreate, setShowCreate] = useState(false);
  const [createForm, setCreateForm] = useState<PageForm>(emptyForm);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    void load();
  }, []);

  async function load() {
    try {
      const pages = await fetchPages();
      setItems(pages ?? []);

      if (pages && pages.length > 0) {
        const first = pages[0];
        setSelectedSlug(first.slug);
        setEditor({
          title: first.title,
          slug: first.slug,
          data: JSON.stringify(first.data ?? {}, null, 2),
          isActive: first.isActive,
        });
      }
    } catch {
      setMessage('Gagal memuat daftar page dari backend.');
    }
  }

  function selectItem(item: CmsPageItem) {
    setSelectedSlug(item.slug);
    setEditor({
      title: item.title,
      slug: item.slug,
      data: JSON.stringify(item.data ?? {}, null, 2),
      isActive: item.isActive,
    });
  }

  async function saveSelected() {
    if (!selectedSlug) return;

    setIsSaving(true);
    setMessage('');
    try {
      const parsed = JSON.parse(editor.data);
      const updated = await updatePage(selectedSlug, {
        title: editor.title,
        data: parsed,
        isActive: editor.isActive,
      });
      setItems((prev) => prev.map((p) => (p.slug === selectedSlug ? updated : p)));
      setMessage('Page berhasil diperbarui.');
      setTimeout(() => setMessage(''), 3000);
    } catch {
      setMessage('Gagal menyimpan page. Pastikan JSON valid dan Anda sudah login admin.');
    } finally {
      setIsSaving(false);
    }
  }

  async function createNew() {
    setIsSaving(true);
    setMessage('');
    try {
      const parsed = JSON.parse(createForm.data);
      const created = await createPage({
        title: createForm.title,
        slug: createForm.slug || autoSlug(createForm.title),
        data: parsed,
        isActive: createForm.isActive,
      });
      setItems((prev) => [created, ...prev]);
      setShowCreate(false);
      setCreateForm(emptyForm);
      selectItem(created);
      setMessage('Page baru berhasil dibuat.');
      setTimeout(() => setMessage(''), 3000);
    } catch {
      setMessage('Gagal membuat page. Pastikan data valid dan Anda sudah login admin.');
    } finally {
      setIsSaving(false);
    }
  }

  async function removeSelected() {
    if (!selectedSlug) return;
    if (!confirm(`Hapus page "${selectedSlug}"?`)) return;

    try {
      await deletePage(selectedSlug);
      const next = items.filter((p) => p.slug !== selectedSlug);
      setItems(next);
      if (next.length > 0) {
        selectItem(next[0]);
      } else {
        setSelectedSlug(null);
        setEditor(emptyForm);
      }
      setMessage('Page berhasil dihapus.');
      setTimeout(() => setMessage(''), 3000);
    } catch {
      setMessage('Gagal menghapus page.');
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-[#0B1F3B]">Manajemen Pages</h1>
          <p className="text-sm text-slate-600">Kelola halaman CMS dinamis untuk route publik.</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setShowCreate((p) => !p)}
            className="inline-flex items-center gap-2 rounded-lg bg-[#C1121F] px-4 py-2 text-sm font-semibold text-white hover:bg-[#9A0E19]"
          >
            {showCreate ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            {showCreate ? 'Batal' : 'Tambah Page'}
          </button>
          <Link href="/admin/dashboard" className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700">
            Dashboard
          </Link>
        </div>
      </div>

      {message && (
        <div className={`rounded-lg border px-4 py-3 text-sm ${message.startsWith('Gagal') ? 'border-red-200 bg-red-50 text-red-800' : 'border-green-200 bg-green-50 text-green-800'}`}>{message}</div>
      )}

      {showCreate && (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
          <h2 className="text-lg font-semibold text-[#0B1F3B]">Buat Page Baru</h2>
          <div>
            <label className={labelCls}>Judul</label>
            <input className={inputCls} value={createForm.title} onChange={(e) => setCreateForm((p) => ({ ...p, title: e.target.value, slug: autoSlug(e.target.value) }))} />
          </div>
          <div>
            <label className={labelCls}>Slug</label>
            <input className={inputCls} value={createForm.slug} onChange={(e) => setCreateForm((p) => ({ ...p, slug: e.target.value }))} />
          </div>
          <div>
            <label className={labelCls}>Data (JSON)</label>
            <textarea className={inputCls} rows={8} value={createForm.data} onChange={(e) => setCreateForm((p) => ({ ...p, data: e.target.value }))} />
          </div>
          <button
            onClick={() => void createNew()}
            disabled={isSaving}
            className="inline-flex items-center gap-2 rounded-lg bg-[#C1121F] px-4 py-2 text-sm font-semibold text-white hover:bg-[#9A0E19] disabled:opacity-70"
          >
            <Save className="h-4 w-4" />
            {isSaving ? 'Menyimpan...' : 'Simpan Page Baru'}
          </button>
        </div>
      )}

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
          <h3 className="mb-2 px-2 text-sm font-semibold text-slate-700">Daftar Page</h3>
          <div className="space-y-1">
            {items.length === 0 && <div className="px-2 py-3 text-sm text-slate-500">Belum ada page.</div>}
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => selectItem(item)}
                className={`w-full rounded-lg px-3 py-2 text-left text-sm ${selectedSlug === item.slug ? 'bg-slate-100 font-medium text-slate-900' : 'text-slate-700 hover:bg-slate-50'}`}
              >
                <div className="line-clamp-1">{item.title}</div>
                <div className="text-xs text-slate-400">/{item.slug}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-2">
          {selectedSlug ? (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-[#0B1F3B]">Edit Page</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => void saveSelected()}
                    disabled={isSaving}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#C1121F] px-4 py-2 text-sm font-semibold text-white hover:bg-[#9A0E19] disabled:opacity-70"
                  >
                    <Save className="h-4 w-4" />
                    {isSaving ? 'Menyimpan...' : 'Simpan'}
                  </button>
                  <button
                    onClick={() => void removeSelected()}
                    className="inline-flex items-center gap-2 rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                    Hapus
                  </button>
                </div>
              </div>

              <div>
                <label className={labelCls}>Judul</label>
                <input className={inputCls} value={editor.title} onChange={(e) => setEditor((p) => ({ ...p, title: e.target.value }))} />
              </div>
              <div>
                <label className={labelCls}>Slug</label>
                <input className={inputCls} value={editor.slug} disabled />
              </div>
              <div>
                <label className={labelCls}>Data (JSON)</label>
                <textarea className={inputCls} rows={14} value={editor.data} onChange={(e) => setEditor((p) => ({ ...p, data: e.target.value }))} />
              </div>
              <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={editor.isActive}
                  onChange={(e) => setEditor((p) => ({ ...p, isActive: e.target.checked }))}
                  className="rounded border-slate-300"
                />
                Page aktif
              </label>
            </div>
          ) : (
            <div className="py-16 text-center text-sm text-slate-500">Pilih page dari sisi kiri untuk mulai edit.</div>
          )}
        </div>
      </div>
    </div>
  );
}
