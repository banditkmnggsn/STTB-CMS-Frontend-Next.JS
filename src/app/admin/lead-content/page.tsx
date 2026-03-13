'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchLeadPrograms, fetchLeadSection, updateLeadSection } from '@/lib/api';

type EditableSections = {
  hero: string;
  pillars: string;
  programs: string;
  events: string;
};

const defaultSections: EditableSections = {
  hero: '{\n  "title": "LEAD Center"\n}',
  pillars: '[\n  { "title": "Learning", "description": "..." }\n]',
  programs: '[\n  { "title": "Vocatio", "description": "..." }\n]',
  events: '[\n  { "title": "Webinar", "date": "23", "month": "FEB" }\n]',
};

export default function AdminLeadContentPage() {
  const [sections, setSections] = useState<EditableSections>(defaultSections);
  const [message, setMessage] = useState('');
  const [savingSection, setSavingSection] = useState<keyof EditableSections | null>(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      const [hero, pillars, programs, events] = await Promise.all([
        fetchLeadSection<Record<string, unknown>>('hero').catch(() => null),
        fetchLeadSection<unknown[]>('pillars').catch(() => null),
        fetchLeadPrograms<unknown>().catch(() => []),
        fetchLeadSection<unknown[]>('events').catch(() => null),
      ]);

      if (!mounted) {
        return;
      }

      setSections({
        hero: JSON.stringify(hero?.data ?? JSON.parse(defaultSections.hero), null, 2),
        pillars: JSON.stringify(pillars?.data ?? JSON.parse(defaultSections.pillars), null, 2),
        programs: JSON.stringify(programs ?? JSON.parse(defaultSections.programs), null, 2),
        events: JSON.stringify(events?.data ?? JSON.parse(defaultSections.events), null, 2),
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
      await updateLeadSection(section, parsed);
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
          <h1 className="text-2xl font-bold text-[#0B1F3B]">Admin - LEAD Content</h1>
          <p className="text-sm text-slate-600">Edit section LEAD langsung ke backend CMS (format JSON).</p>
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

      {(['hero', 'pillars', 'programs', 'events'] as Array<keyof EditableSections>).map((section) => (
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
