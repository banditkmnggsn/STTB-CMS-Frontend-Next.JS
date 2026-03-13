'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const programs = [
  { name: 'Sarjana Teologi', path: '/program/sarjana-teologi' },
  { name: 'Sarjana Pendidikan Kristen', path: '/program/sarjana-pendidikan-kristen' },
  { name: 'Magister Teologi Pelayanan Pastoral', path: '/program/magister-teologi-pastoral' },
  { name: 'Magister Teologi Transformasi Budaya & Masyarakat', path: '/program/magister-teologi-transformasi' },
  { name: 'Magister Pendidikan Kristen', path: '/program/magister-pendidikan-kristen' },
  { name: 'Magister Ministri Marketplace', path: '/program/magister-ministri-marketplace' },
  { name: 'Magister Ministri Kepemimpinan Pastoral', path: '/program/magister-kepemimpinan-pastoral' },
  { name: 'Magister Ministri Teologi Pelayanan Gerejawi', path: '/program/magister-teologi-pelayanan' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      return;
    }
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="hidden bg-[#0B1F3B] py-2 text-white lg:block">
        <div className="container mx-auto flex items-center justify-end gap-6 px-4 text-sm">
          <Link href="/kegiatan" className="transition hover:text-[#2E90FF]">Kegiatan</Link>
          <Link href="/perpustakaan" className="transition hover:text-[#2E90FF]">Perpustakaan</Link>
          <Link href="/lead" className="transition hover:text-[#2E90FF]">LEAD</Link>
          <Link href="/media" className="transition hover:text-[#2E90FF]">Media</Link>
          <Link href="/admisi" className="transition hover:text-[#2E90FF]">Pendaftaran Online</Link>
          <Link href="/admin/login" className="transition hover:text-[#2E90FF]">Login</Link>
        </div>
      </div>

      <div className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="group flex items-center gap-3 lg:gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#C1121F] shadow-md lg:h-14 lg:w-14">
                <span className="text-lg font-bold text-white lg:text-xl">STTB</span>
              </div>
              <div className="text-[#0B1F3B]">
                <h1 className="text-[13px] font-bold leading-tight tracking-wide lg:text-lg">SEKOLAH TINGGI</h1>
                <h1 className="text-[13px] font-bold leading-tight tracking-wide lg:text-lg">TEOLOGI BANDUNG</h1>
              </div>
            </Link>

            <nav className="hidden items-center gap-5 lg:flex">
              <Link href="/berita" className="text-sm font-semibold text-[#0B1F3B] hover:text-[#C1121F]">Berita</Link>
              <Link href="/kegiatan" className="text-sm font-semibold text-[#0B1F3B] hover:text-[#C1121F]">Kegiatan</Link>
              <Link href="/lead" className="text-sm font-semibold text-[#0B1F3B] hover:text-[#C1121F]">LEAD</Link>
              <Link href="/kontak" className="text-sm font-semibold text-[#0B1F3B] hover:text-[#C1121F]">Kontak</Link>
              <Link href="/admisi" className="rounded-lg bg-[#C1121F] px-5 py-2 text-sm font-bold text-white hover:bg-[#9A0E19]">Daftar Sekarang</Link>
            </nav>

            <button className="text-[#2E90FF] lg:hidden" onClick={() => setOpen((v) => !v)}>
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 top-[88px] z-40 overflow-y-auto bg-white lg:hidden">
          <nav className="container mx-auto space-y-1 px-4 py-6">
            <p className="mb-2 px-4 text-sm font-bold text-[#0B1F3B]">Program Studi</p>
            {programs.map((program) => (
              <Link key={program.path} href={program.path} className="block rounded-lg px-4 py-3 text-[#0B1F3B] hover:bg-[#F3F7FF] hover:text-[#C1121F]">
                {program.name}
              </Link>
            ))}
            <div className="mt-4 border-t border-gray-200 pt-4">
              <Link href="/berita" className="block rounded-lg px-4 py-3 text-[#0B1F3B] hover:bg-[#F3F7FF] hover:text-[#C1121F]">Berita</Link>
              <Link href="/kegiatan" className="block rounded-lg px-4 py-3 text-[#0B1F3B] hover:bg-[#F3F7FF] hover:text-[#C1121F]">Kegiatan</Link>
              <Link href="/lead" className="block rounded-lg px-4 py-3 text-[#0B1F3B] hover:bg-[#F3F7FF] hover:text-[#C1121F]">LEAD</Link>
              <Link href="/kontak" className="block rounded-lg px-4 py-3 text-[#0B1F3B] hover:bg-[#F3F7FF] hover:text-[#C1121F]">Kontak</Link>
              <Link href="/admin/login" className="block rounded-lg px-4 py-3 text-[#0B1F3B] hover:bg-[#F3F7FF] hover:text-[#C1121F]">Login Admin</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
