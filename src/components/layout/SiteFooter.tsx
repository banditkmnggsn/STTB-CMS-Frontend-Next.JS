import Link from 'next/link';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="bg-[#0B1F3B] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold text-[#2E90FF]">STTB</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              Sekolah Tinggi Teologi Bandung berkomitmen menghasilkan pemimpin rohani yang berkualitas dan transformatif.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold text-[#2E90FF]">Link Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-[#2E90FF]">Home</Link></li>
              <li><Link href="/program/sarjana-teologi" className="hover:text-[#2E90FF]">Program Studi</Link></li>
              <li><Link href="/admisi" className="hover:text-[#2E90FF]">Pendaftaran</Link></li>
              <li><Link href="/berita" className="hover:text-[#2E90FF]">Berita</Link></li>
              <li><Link href="/kontak" className="hover:text-[#2E90FF]">Kontak</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold text-[#2E90FF]">Pendaftaran</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/admisi" className="hover:text-[#2E90FF]">Pendaftaran Online</Link></li>
              <li><Link href="/keuangan/biaya-studi" className="hover:text-[#2E90FF]">Informasi Biaya</Link></li>
              <li><Link href="/keuangan/beasiswa" className="hover:text-[#2E90FF]">Program Beasiswa</Link></li>
              <li><Link href="/kehidupan-kampus" className="hover:text-[#2E90FF]">Kehidupan Kampus</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold text-[#2E90FF]">Kontak Kami</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-[#2E90FF]" />
                <p className="text-gray-300">Jl Dr. Djundjunan No. 105, Bandung 40173, Indonesia</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#2E90FF]" />
                <p className="text-gray-300">(+62) 22 601-6454</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#2E90FF]" />
                <p className="text-gray-300">official@sttb.ac.id</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="mb-3 text-sm font-bold text-[#2E90FF]">Ikuti Kami</p>
              <div className="flex gap-3">
                <a href="#" className="rounded-full bg-white/10 p-2 transition hover:bg-[#2E90FF]" aria-label="Facebook"><Facebook size={18} /></a>
                <a href="#" className="rounded-full bg-white/10 p-2 transition hover:bg-[#2E90FF]" aria-label="Instagram"><Instagram size={18} /></a>
                <a href="#" className="rounded-full bg-white/10 p-2 transition hover:bg-[#2E90FF]" aria-label="Youtube"><Youtube size={18} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#071528] py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          <p>&copy; 2026 Sekolah Tinggi Teologi Bandung. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
