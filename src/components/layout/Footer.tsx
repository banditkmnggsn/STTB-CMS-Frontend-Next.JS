import Link from 'next/link';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0B1F3B] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#2E90FF]">STTB</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Sekolah Tinggi Teologi Bandung adalah institusi pendidikan tinggi teologi yang berkomitmen menghasilkan pemimpin rohani yang berkualitas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#2E90FF]">Link Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="footer-link hover:text-[#2E90FF]">Home</Link></li>
              <li><Link href="/program/sarjana-teologi" className="footer-link hover:text-[#2E90FF]">Program Studi</Link></li>
              <li><Link href="/admisi" className="footer-link hover:text-[#2E90FF]">Pendaftaran</Link></li>
              <li><Link href="/keuangan/biaya-studi" className="footer-link hover:text-[#2E90FF]">Biaya Studi</Link></li>
              <li><Link href="/keuangan/beasiswa" className="footer-link hover:text-[#2E90FF]">Beasiswa</Link></li>
              <li><Link href="/kontak" className="footer-link hover:text-[#2E90FF]">Kontak</Link></li>
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#2E90FF]">Pendaftaran</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/admisi" className="footer-link hover:text-[#2E90FF]">Pendaftaran Online</Link></li>
              <li><Link href="/keuangan/biaya-studi" className="footer-link hover:text-[#2E90FF]">Informasi Biaya</Link></li>
              <li><Link href="/keuangan/beasiswa" className="footer-link hover:text-[#2E90FF]">Program Beasiswa</Link></li>
              <li><Link href="/kehidupan-kampus" className="footer-link hover:text-[#2E90FF]">Kehidupan Kampus</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#2E90FF]">Kontak Kami</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-[#2E90FF]" />
                <p className="text-gray-300">
                  Jl Dr. Djundjunan No. 105,<br />
                  Bandung 40173, Indonesia
                </p>
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
            
            {/* Social Media */}
            <div className="mt-4">
              <p className="text-sm font-bold mb-3 text-[#2E90FF]">Ikuti Kami</p>
              <div className="flex gap-3">
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#2E90FF] transition">
                  <Facebook size={18} />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#2E90FF] transition">
                  <Instagram size={18} />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#2E90FF] transition">
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#071528] py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          <p>&copy; 2026 Sekolah Tinggi Teologi Bandung. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
