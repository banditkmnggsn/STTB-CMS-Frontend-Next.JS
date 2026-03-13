import { fetchNewsBySlug } from '@/lib/api';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = await fetchNewsBySlug(slug).catch(() => null);

  return {
    title: article?.title ? `${article.title} - STTB` : 'Detail Berita - STTB',
    description: article?.excerpt ?? 'Detail berita STTB.',
  };
}

export default async function BeritaDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = await fetchNewsBySlug(slug).catch(() => null);

  if (!article) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold text-[#0B1F3B]">Berita tidak ditemukan</h1>
        <p className="mt-3 text-slate-600">Data belum tersedia atau slug tidak valid.</p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-[#0B1F3B]">{article.title}</h1>
      <p className="mt-3 text-slate-600">{article.excerpt ?? 'Tanpa ringkasan.'}</p>
      <article className="prose mt-8 max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
    </section>
  );
}
