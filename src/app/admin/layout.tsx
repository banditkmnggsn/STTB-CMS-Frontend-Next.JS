import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-4 py-3 text-sm">
          <Link href="/admin/dashboard" className="rounded-full border border-slate-300 px-3 py-1.5 text-slate-700 hover:bg-slate-50">Dashboard</Link>
          <Link href="/admin/home-content" className="rounded-full border border-slate-300 px-3 py-1.5 text-slate-700 hover:bg-slate-50">Home</Link>
          <Link href="/admin/lead-content" className="rounded-full border border-slate-300 px-3 py-1.5 text-slate-700 hover:bg-slate-50">LEAD</Link>
          <Link href="/admin/news" className="rounded-full border border-slate-300 px-3 py-1.5 text-slate-700 hover:bg-slate-50">Berita</Link>
          <Link href="/admin/programs" className="rounded-full border border-slate-300 px-3 py-1.5 text-slate-700 hover:bg-slate-50">Program</Link>
          <Link href="/admin/pages" className="rounded-full border border-slate-300 px-3 py-1.5 text-slate-700 hover:bg-slate-50">Pages</Link>
          <Link href="/admin/register" className="rounded-full border border-slate-300 px-3 py-1.5 text-slate-700 hover:bg-slate-50">Register</Link>
          <Link href="/admin/settings" className="rounded-full border border-slate-300 px-3 py-1.5 text-slate-700 hover:bg-slate-50">Settings</Link>
          <Link href="/" className="ml-auto rounded-full bg-[#0B1F3B] px-3 py-1.5 text-white">Public Site</Link>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-10">
        {children}
      </div>
    </div>
  );
}
