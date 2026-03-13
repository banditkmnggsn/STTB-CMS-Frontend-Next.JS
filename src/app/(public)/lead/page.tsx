import { fetchLeadSection } from '@/lib/api';

export const metadata = {
  title: 'LEAD - STTB',
  description: 'Learning, Equipping, and Development STTB.',
};

export default async function LeadPage() {
  const hero = await fetchLeadSection<{ title?: string; description?: string }>('hero').catch(() => null);
  const title = hero?.data?.title ?? 'LEAD Center';
  const description = hero?.data?.description ?? 'Konten LEAD akan ditampilkan dari backend CMS.';

  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl font-bold text-[#0B1F3B]">{title}</h1>
      <p className="mt-4 text-slate-600">{description}</p>
    </section>
  );
}
