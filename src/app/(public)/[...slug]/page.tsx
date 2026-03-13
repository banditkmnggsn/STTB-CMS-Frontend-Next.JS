import Link from 'next/link';
import { fetchPageBySlug } from '@/lib/api';

type Props = {
  params: Promise<{ slug: string[] }>;
};

function candidatesFromSlug(segments: string[]) {
  const leaf = segments[segments.length - 1] ?? '';
  const joined = segments.join('-');
  const list = [joined, leaf, leaf.replace(/^tentang-/, '')];

  if (joined === 'kontak') {
    list.push('contact', 'kontak-kami');
  }

  if (joined === 'admisi') {
    list.push('pendaftaran', 'admissions');
  }

  return Array.from(new Set(list.filter(Boolean)));
}

function getObject(value: unknown) {
  return value && typeof value === 'object' && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function getString(value: unknown, fallback = '') {
  return typeof value === 'string' && value.trim() ? value : fallback;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const candidates = candidatesFromSlug(slug);

  let page = null;
  for (const candidate of candidates) {
    page = await fetchPageBySlug(candidate).catch(() => null);
    if (page) {
      break;
    }
  }

  const title = page?.title ?? 'Halaman - STTB';
  return {
    title,
    description: 'Konten halaman dinamis STTB dari backend CMS.',
  };
}

export default async function DynamicContentPage({ params }: Props) {
  const { slug } = await params;
  const candidates = candidatesFromSlug(slug);

  let page = null;
  for (const candidate of candidates) {
    page = await fetchPageBySlug(candidate).catch(() => null);
    if (page) {
      break;
    }
  }

  if (!page) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-3xl font-bold text-[#0B1F3B]">Halaman belum diisi</h1>
        <p className="mt-3 text-slate-600">Data belum tersedia untuk path ini. Silakan isi dari admin CMS.</p>
        <Link href="/admin/dashboard" className="mt-6 inline-block rounded-full bg-[#C1121F] px-5 py-2.5 text-white">Buka Admin</Link>
      </section>
    );
  }

  const dataObject = getObject(page.data);
  const title = getString(dataObject?.title, page.title);
  const subtitle = getString(dataObject?.subtitle) || getString(dataObject?.description);
  const html = getString(dataObject?.contentHtml) || getString(dataObject?.html) || getString(dataObject?.content) || getString(dataObject?.body);

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold text-[#0B1F3B]">{title}</h1>
      {subtitle && <p className="mt-4 text-slate-600">{subtitle}</p>}
      {html ? (
        <article className="prose mt-8 max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <pre className="mt-8 overflow-auto rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-700">
          {JSON.stringify(page.data ?? {}, null, 2)}
        </pre>
      )}
    </section>
  );
}
