'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchHomeSection, updateHomeSection } from '@/lib/api';

type EditableSections = {
  hero: string;
  stats: string;
  showcase: string;
};

const defaultSections: EditableSections = {
  hero: '{\n  "title": "Membentuk Pemimpin Rohani Masa Depan",\n  "subtitle": "STTB Bandung"\n}',
  stats: '[\n  { "label": "Program Studi", "value": "7" }\n]',
  showcase: '[\n  { "title": "Sarjana Teologi", "link": "/program/sarjana-teologi" }\n]',
};

export default function AdminHomeContentPage() {
  const [sections, setSections] = useState<EditableSections>(defaultSections);
  const [message, setMessage] = useState('');
  const [savingSection, setSavingSection] = useState<keyof EditableSections | null>(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      const [hero, stats, showcase] = await Promise.all([
        fetchHomeSection<Record<string, unknown>>('hero').catch(() => null),
        fetchHomeSection<unknown[]>('stats').catch(() => null),
        fetchHomeSection<unknown[]>('showcase').catch(() => null),
      ]);

      if (!mounted) {
        return;
      }

      setSections({
        hero: JSON.stringify(hero?.data ?? JSON.parse(defaultSections.hero), null, 2),
        stats: JSON.stringify(stats?.data ?? JSON.parse(defaultSections.stats), null, 2),
        showcase: JSON.stringify(showcase?.data ?? JSON.parse(defaultSections.showcase), null, 2),
      });
    }

    void load();

    return () => {
      mounted = false;
    };
  }, []);

  async function saveSection(section: keyof EditableSections) {
    setMessage('');
    setSavingSection(section);

    try {
      const parsed = JSON.parse(sections[section]);
      await updateHomeSection(section, parsed);
      setMessage(`Section ${section} berhasil disimpan.`);
    } catch {
      setMessage(`Gagal menyimpan section ${section}. Pastikan format JSON valid.`);
    } finally {
      setSavingSection(null);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-[#0B1F3B]">Admin - Home Content</h1>
          <p className="text-sm text-slate-600">Edit section homepage langsung ke backend CMS (format JSON).</p>
        </div>
        <Link href="/admin/dashboard" className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700">
          Kembali ke Dashboard
        </Link>
      </div>

      {message && (
        <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
          {message}
        </div>
      )}

      {(['hero', 'stats', 'showcase'] as Array<keyof EditableSections>).map((section) => (
        <section key={section} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-semibold capitalize text-[#0B1F3B]">{section}</h2>
            <button
              onClick={() => void saveSection(section)}
              disabled={savingSection === section}
              className="rounded-lg bg-[#C1121F] px-4 py-2 text-sm font-semibold text-white disabled:opacity-70"
            >
              {savingSection === section ? 'Menyimpan...' : 'Simpan'}
            </button>
          </div>
          <textarea
            value={sections[section]}
            onChange={(event) =>
              setSections((prev) => ({
                ...prev,
                [section]: event.target.value,
              }))
            }
            className="h-64 w-full rounded-lg border border-slate-300 p-3 font-mono text-sm"
          />
        </section>
      ))}
    </div>
  );
}
