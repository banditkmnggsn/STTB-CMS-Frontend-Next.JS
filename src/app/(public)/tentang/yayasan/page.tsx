import { PageHero } from '@/components/shared/PageHero';
import { Building2, Users, Heart, TrendingUp, Phone, Mail } from 'lucide-react';
import { SEO } from '@/components/shared/SEO';

export default async function YayasanPage() {
  return (
    <>
      <SEO title="Yayasan STTB - Sekolah Tinggi Teologi Bandung" />
      <PageHero
        title="YAYASAN STTB"
        subtitle="Pengurus dan Dukungan Institusi"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-[#0B1F3B] mb-6">Tentang Yayasan</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Yayasan Sekolah Tinggi Teologi Bandung adalah badan hukum yang menaungi and mengelola STTB. Yayasan bertanggung jawab atas kebijakan strategis, pengembangan institusi, and pengelolaan sumber daya untuk memastikan kelangsungan and kemajuan STTB dalam melaksanakan misi pendidikan teologi.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Yayasan bekerja sama dengan berbagai gereja and mitra untuk mendukung visi STTB dalam menghasilkan pemimpin rohani yang alkitabiah and transformatif.
              </p>
            </div>

            {/* Board Structure */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0B1F3B] mb-6">Struktur Pengurus Yayasan</h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-[#C1121F] to-[#a00d25] text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Ketua Yayasan</h3>
                  <p>Pdt. Dr. Surya Wijaya, M.Th.</p>
                </div>

                <div className="bg-[#0B1F3B] text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Wakil Ketua</h3>
                  <p>Ir. Michael Tanujaya, M.M.</p>
                </div>

                <div className="bg-gray-100 border-l-4 border-[#C1121F] p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#0B1F3B] mb-2">Sekretaris</h3>
                  <p className="text-gray-700">Dra. Esther Liem, M.Pd.</p>
                </div>

                <div className="bg-gray-100 border-l-4 border-[#0B1F3B] p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#0B1F3B] mb-2">Bendahara</h3>
                  <p className="text-gray-700">Drs. Thomas Santoso, Ak., M.M.</p>
                </div>

                <div className="bg-gray-100 border-l-4 border-[#C1121F] p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#0B1F3B] mb-4">Anggota Pengurus</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Pdt. Dr. David Kurniawan, M.Div.</li>
                    <li>• Dr. Christina Halim, M.Pd.K.</li>
                    <li>• Drs. William Tanuwidjaja, M.Th.</li>
                    <li>• Ibu Rachel Gunawan, S.E., M.M.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mission & Role */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0B1F3B] mb-6">Peran Yayasan</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#C1121F]/10 rounded-full flex items-center justify-center">
                      <Building2 className="text-[#C1121F]" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-[#0B1F3B]">Tata Kelola</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Mengawasi tata kelola institusi, menetapkan kebijakan strategis, and memastikan akuntabilitas dalam pengelolaan STTB.
                  </p>
                </div>

                <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#0B1F3B]/10 rounded-full flex items-center justify-center">
                      <TrendingUp className="text-[#0B1F3B]" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-[#0B1F3B]">Pengembangan</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Merencanakan and mendukung pengembangan fasilitas, program akademik, and sumber daya manusia STTB.
                  </p>
                </div>

                <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#C1121F]/10 rounded-full flex items-center justify-center">
                      <Users className="text-[#C1121F]" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-[#0B1F3B]">Kemitraan</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Membangun and memelihara hubungan dengan gereja, lembaga, and individu yang mendukung misi STTB.
                  </p>
                </div>

                <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#0B1F3B]/10 rounded-full flex items-center justify-center">
                      <Heart className="text-[#0B1F3B]" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-[#0B1F3B]">Penggalangan Dana</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Mengelola program penggalangan dana and dukungan finansial untuk keberlanjutan and pertumbuhan STTB.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-gradient-to-r from-[#C1121F] to-[#a00d25] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Dukung Pelayanan STTB</h2>
            <p className="text-xl leading-relaxed mb-8">
              Yayasan STTB mengundang Anda untuk menjadi mitra dalam misi pendidikan teologi. Dukungan Anda membantu STTB terus melayani gereja and menghasilkan pemimpin rohani yang berkualitas.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Beasiswa Mahasiswa</h3>
                <p className="text-sm">Dukung mahasiswa yang membutuhkan</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Pengembangan Fasilitas</h3>
                <p className="text-sm">Bantu perbaikan infrastruktur kampus</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Program Akademik</h3>
                <p className="text-sm">Kontribusi untuk keunggulan akademik</p>
              </div>
            </div>

            <div className="bg-white text-[#0B1F3B] p-8 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Informasi Donasi</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <Phone className="text-[#C1121F]" size={20} />
                  <span>(021) 4584350</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-[#C1121F]" size={20} />
                  <span>yayasan@sttb.ac.id</span>
                </div>
              </div>
              <a 
                href="/keuangan/dukung-sttb"
                className="inline-block mt-6 bg-[#C1121F] hover:bg-[#a00d25] text-white font-bold px-8 py-3 rounded-lg transition"
              >
                Informasi Lengkap Donasi
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
