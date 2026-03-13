import Link from 'next/link';
import { fetchNews } from '@/lib/api';

export default async function HomePage() {
  const news = await fetchNews({ page: 1, limit: 3, status: 'published' }).catch(() => null);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="mb-4 text-4xl font-bold text-[#0B1F3B]">STTB Next.js Migration</h1>
      <p className="mb-10 text-slate-600">
        Fase awal migrasi selesai: Next.js baseline, API client, auth guard admin, dan route group public/admin sudah aktif.
      </p>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="mb-4 text-xl font-semibold text-[#0B1F3B]">Berita Terbaru dari Backend</h2>
        <ul className="space-y-3">
          {(news?.items ?? []).map((item) => (
            <li key={item.id} className="rounded-xl bg-white p-4 shadow-sm">
              <Link href={`/berita/${item.slug}`} className="font-semibold text-[#0B1F3B] hover:text-[#C1121F]">
                {item.title}
              </Link>
              <p className="mt-1 text-sm text-slate-600">{item.excerpt ?? 'Tanpa ringkasan'}</p>
            </li>
          ))}
          {(!news || news.items.length === 0) && (
            <li className="rounded-xl bg-white p-4 text-sm text-slate-500 shadow-sm">
              Belum ada berita yang dipublikasi. Data kosong tetap tertangani aman.
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
