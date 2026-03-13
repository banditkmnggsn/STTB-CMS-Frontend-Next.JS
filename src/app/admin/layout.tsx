import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-4 text-sm">
          <Link href="/admin/dashboard" className="rounded-full border border-slate-300 px-4 py-1.5 text-slate-700">Dashboard</Link>
          <Link href="/admin/home-content" className="rounded-full border border-slate-300 px-4 py-1.5 text-slate-700">Home Content</Link>
          <Link href="/admin/lead-content" className="rounded-full border border-slate-300 px-4 py-1.5 text-slate-700">Lead Content</Link>
          <Link href="/" className="rounded-full bg-[#0B1F3B] px-4 py-1.5 text-white">Public Site</Link>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-10">
        {children}
      </div>
    </div>
  );
}
