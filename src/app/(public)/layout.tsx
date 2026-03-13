import Link from 'next/link';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="text-lg font-bold text-[#0B1F3B]">STTB Next</Link>
          <nav className="flex items-center gap-4 text-sm font-medium text-[#0B1F3B]">
            <Link href="/">Home</Link>
            <Link href="/berita">Berita</Link>
            <Link href="/lead">Lead</Link>
            <Link href="/kegiatan">Kegiatan</Link>
            <Link href="/admin/login" className="rounded-full bg-[#C1121F] px-4 py-1.5 text-white">Admin</Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
