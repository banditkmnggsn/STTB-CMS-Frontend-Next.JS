import { fetchEvents } from '@/lib/api';

export const metadata = {
  title: 'Kegiatan - STTB',
  description: 'Agenda dan kegiatan kampus STTB.',
};

export default async function KegiatanPage() {
  const events = await fetchEvents({ page: 1, limit: 20, upcoming: true }).catch(() => null);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold text-[#0B1F3B]">Kegiatan Kampus</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {(events?.items ?? []).map((event) => (
          <article key={event.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-[#0B1F3B]">{event.title}</h2>
            <p className="mt-1 text-sm text-slate-600">{event.location ?? 'Lokasi menyusul'}</p>
          </article>
        ))}
        {(!events || events.items.length === 0) && (
          <p className="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-500">Belum ada kegiatan mendatang.</p>
        )}
      </div>
    </section>
  );
}
