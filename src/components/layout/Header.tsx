"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Search } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramOpen, setIsProgramOpen] = useState(false);
  const [isTentangOpen, setIsTentangOpen] = useState(false);
  const [isKeuanganOpen, setIsKeuanganOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [pathname]);

  const programs = [
    { name: 'Sarjana Teologi', path: '/akademik/sarjana-teologi' },
    { name: 'Sarjana Pendidikan Kristen', path: '/akademik/sarjana-pendidikan-kristen' },
    { name: 'Magister Teologi Pelayanan Pastoral', path: '/akademik/magister-teologi-pastoral' },
    { name: 'Magister Teologi Transformasi Budaya & Masyarakat', path: '/akademik/magister-teologi-transformasi' },
    { name: 'Magister Pendidikan Kristen', path: '/akademik/magister-pendidikan-kristen' },
    { name: 'Magister Ministri Marketplace', path: '/akademik/magister-ministri-marketplace' },
    { name: 'Magister Ministri Kepemimpinan Pastoral', path: '/akademik/magister-kepemimpinan-pastoral' },
    { name: 'Magister Ministri Teologi Pelayanan Gerejawi', path: '/akademik/magister-teologi-pelayanan' },
  ];

  const tentangKami = [
    { name: 'Sejarah', path: '/tentang/sejarah' },
    { name: 'Visi & Misi', path: '/tentang/visi-misi' },
    { name: 'Mars STTB', path: '/tentang/mars-sttb' },
    { name: 'Pengakuan Iman', path: '/tentang/pengakuan-iman' },
    { name: 'Dewan Dosen', path: '/tentang/dewan-dosen' },
    { name: 'Yayasan', path: '/tentang/yayasan' },
  ];

  const keuangan = [
    { name: 'Biaya Studi', path: '/admisi/biaya-studi' },
    { name: 'Beasiswa', path: '/admisi/beasiswa' },
    { name: 'Dukung STTB', path: '/kontak' }, // Placeholder for now as I haven't seen a specific Dukung STTB page
  ];

  const isActive = (path: string) => pathname === path;

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="hidden lg:block bg-[#0B1F3B] text-white py-2">
        <div className="container mx-auto px-4 flex justify-end items-center gap-6 text-sm">
          <Link href="/kegiatan" className="hover:text-[#2E90FF] transition">Kegiatan</Link>
          <Link href="/perpustakaan" className="hover:text-[#2E90FF] transition">Perpustakaan</Link>
          <Link href="/lead" className="hover:text-[#2E90FF] transition">LEAD</Link>
          <Link href="/media" className="hover:text-[#2E90FF] transition">Media</Link>
          <Link href="/admisi" className="hover:text-[#2E90FF] transition">Pendaftaran Online</Link>
          <a href="#" className="hover:text-[#2E90FF] transition">Login</a>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
              <img 
                src="https://sttb.ac.id/storage/2022/01/logo.png" 
                alt="Logo STT Bandung" 
                className="h-12 lg:h-16 w-auto object-contain drop-shadow-sm" 
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
              {/* Program Studi Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsProgramOpen(true)}
                onMouseLeave={() => setIsProgramOpen(false)}
              >
                <button className="nav-link text-[#0B1F3B] flex items-center gap-1.5 font-semibold text-sm xl:text-[15px] hover:text-[#C1121F] transition-colors">
                  <div className="flex flex-col items-start leading-[1.2] text-left">
                    <span>Program</span>
                    <span>Studi</span>
                  </div>
                  <ChevronDown size={16} className="text-[#0B1F3B]" />
                </button>
                {isProgramOpen && (
                  <div className="dropdown-menu absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg py-2 border border-gray-200">
                    {programs.map((program) => (
                      <Link
                        key={program.path}
                        href={program.path}
                        className="block px-4 py-3 text-[#0B1F3B] hover:bg-[#F3F7FF] hover:text-[#C1121F] transition-colors duration-200 text-sm"
                      >
                        {program.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Tentang Kami Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsTentangOpen(true)}
                onMouseLeave={() => setIsTentangOpen(false)}
              >
                <button className="nav-link text-[#0B1F3B] flex items-center gap-1.5 font-semibold text-sm xl:text-[15px] hover:text-[#C1121F] transition-colors">
                  <div className="flex flex-col items-start leading-[1.2] text-left">
                    <span>Tentang</span>
                    <span>Kami</span>
                  </div>
                  <ChevronDown size={16} className="text-[#0B1F3B]" />
                </button>
                {isTentangOpen && (
                  <div className="dropdown-menu absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 border border-gray-200">
                    {tentangKami.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        className="block px-4 py-3 text-[#0B1F3B] hover:bg-[#F3F7FF] hover:text-[#C1121F] transition-colors duration-200 text-sm"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                href="/admisi" 
                className={`nav-link font-semibold text-sm xl:text-[15px] hover:text-[#C1121F] transition-colors ${isActive('/admisi') ? 'text-[#C1121F]' : 'text-[#0B1F3B]'}`}
              >
                Admisi
              </Link>

              {/* Keuangan Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsKeuanganOpen(true)}
                onMouseLeave={() => setIsKeuanganOpen(false)}
              >
                <button className="nav-link text-[#0B1F3B] flex items-center gap-1.5 font-semibold text-sm xl:text-[15px] hover:text-[#C1121F] transition-colors">
                  <div className="flex flex-col items-start leading-[1.2] text-left">
                    <span>Keuangan</span>
                  </div>
                  <ChevronDown size={16} className="text-[#0B1F3B]" />
                </button>
                {isKeuanganOpen && (
                  <div className="dropdown-menu absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg py-2 border border-gray-200">
                    {keuangan.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        className="block px-4 py-3 text-[#0B1F3B] hover:bg-[#F3F7FF] hover:text-[#C1121F] transition-colors duration-200 text-sm"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                href="/kehidupan-kampus" 
                className={`nav-link font-semibold text-sm xl:text-[15px] hover:text-[#C1121F] transition-colors flex flex-col items-start leading-[1.2] text-left ${isActive('/kehidupan-kampus') ? 'text-[#C1121F]' : 'text-[#0B1F3B]'}`}
              >
                <span>Kehidupan</span>
                <span>Kampus</span>
              </Link>
              <Link 
                href="/berita" 
                className={`nav-link font-semibold text-sm xl:text-[15px] hover:text-[#C1121F] transition-colors flex flex-col items-start leading-[1.2] text-left ${isActive('/berita') ? 'text-[#C1121F]' : 'text-[#0B1F3B]'}`}
              >
                Berita
              </Link>
              <Link 
                href="/kontak" 
                className={`nav-link font-semibold text-sm xl:text-[15px] hover:text-[#C1121F] transition-colors flex flex-col items-start leading-[1.2] text-left ${isActive('/kontak') ? 'text-[#C1121F]' : 'text-[#0B1F3B]'}`}
              >
                Kontak
              </Link>

              <div className="relative ml-2">
                <button 
                  className="icon-button text-[#0B1F3B] hover:text-[#C1121F] transition-colors"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  <Search size={22} />
                </button>
                {isSearchOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsSearchOpen(false)}></div>
                    <div className="absolute right-0 top-full mt-4 w-72 bg-white p-3 rounded-xl shadow-2xl z-50 border border-gray-100">
                      <div className="relative">
                        <input 
                          type="text" 
                          placeholder="Cari..." 
                          className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#C1121F] focus:ring-1 focus:ring-[#C1121F] text-sm" 
                          autoFocus 
                        />
                        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                  </>
                )}
              </div>

              <Link
                href="/admisi"
                className="btn-primary bg-[#C1121F] hover:bg-[#9A0E19] text-white font-bold px-6 py-2.5 rounded-lg shadow-md flex flex-col items-center leading-[1.2] ml-2 transition-colors text-[13px] xl:text-[15px]"
              >
                <span>Daftar</span>
                <span>Sekarang</span>
              </Link>
            </nav>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-4">
              <button 
                className="text-[#2E90FF]"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search size={24} />
              </button>
              {isSearchOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsSearchOpen(false)}></div>
                  <div className="absolute right-4 top-[88px] w-[calc(100%-2rem)] max-w-sm bg-white p-4 rounded-xl shadow-2xl z-50 border border-gray-100">
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Cari..." 
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#C1121F] focus:ring-1 focus:ring-[#C1121F]" 
                        autoFocus 
                      />
                      <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                </>
              )}
              <button 
                className="text-[#2E90FF]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Full Screen Overlay */}
      <div
        className={`fixed inset-0 top-[88px] lg:hidden bg-white z-40 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          height: 'calc(100vh - 88px)',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        <nav className="container mx-auto px-4 py-6 space-y-1">
          <div className="pt-2">
            <p className="text-sm font-bold text-[#0B1F3B] mb-2 px-4">Program Studi</p>
            <div className="space-y-1">
              {programs.map((program) => (
                <Link
                  key={program.path}
                  href={program.path}
                  onClick={handleLinkClick}
                  className="block text-[#0B1F3B] hover:text-[#C1121F] hover:bg-[#F3F7FF] py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  {program.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-4">
            <p className="text-sm font-bold text-[#0B1F3B] mb-2 px-4">Tentang Kami</p>
            <div className="space-y-1">
              {tentangKami.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={handleLinkClick}
                  className="block text-[#0B1F3B] hover:text-[#C1121F] hover:bg-[#F3F7FF] py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link 
            href="/admisi" 
            onClick={handleLinkClick}
            className="block text-[#0B1F3B] hover:text-[#C1121F] hover:bg-[#F3F7FF] py-3 px-4 rounded-lg transition-colors duration-200 font-medium"
          >
            Admisi
          </Link>

          <div className="border-t border-gray-200 pt-4 mt-4">
            <p className="text-sm font-bold text-[#0B1F3B] mb-2 px-4">Keuangan</p>
            <div className="space-y-1">
              {keuangan.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={handleLinkClick}
                  className="block text-[#0B1F3B] hover:text-[#C1121F] hover:bg-[#F3F7FF] py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link 
            href="/kehidupan-kampus" 
            onClick={handleLinkClick}
            className="block text-[#0B1F3B] hover:text-[#C1121F] hover:bg-[#F3F7FF] py-3 px-4 rounded-lg transition-colors duration-200 font-medium"
          >
            Kehidupan Kampus
          </Link>
          
          <Link 
            href="/berita" 
            onClick={handleLinkClick}
            className="block text-[#0B1F3B] hover:text-[#C1121F] hover:bg-[#F3F7FF] py-3 px-4 rounded-lg transition-colors duration-200 font-medium"
          >
            Berita
          </Link>
          
          <Link 
            href="/kontak" 
            onClick={handleLinkClick}
            className="block text-[#0B1F3B] hover:text-[#C1121F] hover:bg-[#F3F7FF] py-3 px-4 rounded-lg transition-colors duration-200 font-medium"
          >
            Kontak
          </Link>

          <div className="border-t border-gray-200 pt-4 mt-4">
            <Link 
              href="/kegiatan" 
              onClick={handleLinkClick}
              className="block text-[#0B1F3B] hover:text-[#C1121F] hover:bg-[#F3F7FF] py-3 px-4 rounded-lg transition-colors duration-200 font-medium"
            >
              Kegiatan
            </Link>
            <Link 
              href="/perpustakaan" 
              onClick={handleLinkClick}
              className="block text-[#0B1F3B] hover:text-[#C1121F] hover:bg-[#F3F7FF] py-3 px-4 rounded-lg transition-colors duration-200 font-medium"
            >
              Perpustakaan
            </Link>
            <Link 
              href="/lead" 
              onClick={handleLinkClick}
              className="block text-[#0B1F3B] hover:text-[#C1121F] hover:bg-[#F3F7FF] py-3 px-4 rounded-lg transition-colors duration-200 font-medium"
            >
              LEAD
            </Link>
            <Link 
              href="/media" 
              onClick={handleLinkClick}
              className="block text-[#0B1F3B] hover:text-[#C1121F] hover:bg-[#F3F7FF] py-3 px-4 rounded-lg transition-colors duration-200 font-medium"
            >
              Media
            </Link>
          </div>
          
          <div className="pt-6 pb-8 space-y-3">
            <Link
              href="/admisi"
              onClick={handleLinkClick}
              className="block bg-[#C1121F] hover:bg-[#9A0E19] text-white font-bold px-6 py-4 rounded-lg transition-colors duration-200 text-center shadow-md"
            >
              Daftar Sekarang
            </Link>
            <a
              href="#"
              onClick={handleLinkClick}
              className="block border-2 border-[#0B1F3B] text-[#0B1F3B] hover:bg-gray-50 font-bold px-6 py-3 rounded-lg transition-colors duration-200 text-center"
            >
              Login
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
