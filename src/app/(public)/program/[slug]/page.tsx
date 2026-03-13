import Link from 'next/link';
import { fetchProgramBySlug } from '@/lib/api';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const program = await fetchProgramBySlug(slug).catch(() => null);

  return {
    title: program?.seoTitle ?? `${program?.title ?? 'Program'} - STTB`,
    description: program?.seoDescription ?? program?.shortDescription ?? 'Informasi program studi STTB.',
  };
}

export default async function ProgramDetailPage({ params }: Props) {
  const { slug } = await params;
  const program = await fetchProgramBySlug(slug).catch(() => null);

  if (!program) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-3xl font-bold text-[#0B1F3B]">Program belum tersedia</h1>
        <p className="mt-3 text-slate-600">Konten program ini belum ada di backend CMS.</p>
        <Link href="/admin/dashboard" className="mt-6 inline-block rounded-full bg-[#C1121F] px-5 py-2.5 text-white">Buka Admin</Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <p className="text-sm font-medium uppercase tracking-wide text-[#C1121F]">Program Studi</p>
      <h1 className="mt-2 text-4xl font-bold text-[#0B1F3B]">{program.title}</h1>
      {program.degree && <p className="mt-2 text-lg font-semibold text-[#2E90FF]">{program.degree}</p>}
      <p className="mt-4 text-slate-600">{program.heroDescription ?? program.shortDescription ?? 'Deskripsi program belum tersedia.'}</p>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-xl font-semibold text-[#0B1F3B]">Ringkasan Akademik</h2>
        <pre className="mt-4 overflow-auto rounded-lg bg-white p-4 text-xs text-slate-700">
          {JSON.stringify(program.academicInfo ?? {}, null, 2)}
        </pre>
      </div>
    </section>
  );
}
