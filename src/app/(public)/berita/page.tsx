import Link from 'next/link';
import { fetchNews } from '@/lib/api';

export const metadata = {
  title: 'Berita - STTB',
  description: 'Daftar berita terbaru STTB.',
};

export default async function BeritaPage() {
  const news = await fetchNews({ page: 1, limit: 20, status: 'published' }).catch(() => null);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold text-[#0B1F3B]">Berita</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {(news?.items ?? []).map((item) => (
          <article key={item.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-[#0B1F3B]">
              <Link href={`/berita/${item.slug}`} className="hover:text-[#C1121F]">{item.title}</Link>
            </h2>
            <p className="mt-2 text-sm text-slate-600">{item.excerpt ?? 'Tanpa ringkasan.'}</p>
          </article>
        ))}
        {(!news || news.items.length === 0) && (
          <p className="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-500">Belum ada berita yang tersedia.</p>
        )}
      </div>
    </section>
  );
}
