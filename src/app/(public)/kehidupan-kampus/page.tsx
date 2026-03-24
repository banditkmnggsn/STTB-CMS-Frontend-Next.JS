import { PageHero } from '@/components/shared/PageHero';
import { Users, BookOpen, Heart, Music } from 'lucide-react';
import { SEO } from '@/components/shared/SEO';

export default async function KehidupanKampusPage() {
  const facilities = [
    {
      title: 'Perpustakaan',
      description: 'Koleksi buku teologi yang lengkap and ruang baca yang nyaman',
      icon: <BookOpen size={40} />
    },
    {
      title: 'Asrama',
      description: 'Tempat tinggal yang aman and kondusif untuk mahasiswa',
      icon: <Users size={40} />
    },
    {
      title: 'Kapel',
      description: 'Tempat ibadah and kegiatan rohani mahasiswa',
      icon: <Heart size={40} />
    },
    {
      title: 'Ruang Musik',
      description: 'Fasilitas untuk latihan musik and pujian',
      icon: <Music size={40} />
    },
  ];

  return (
    <>
      <SEO title="Kehidupan Kampus - STTB" />
      <PageHero
        title="KEHIDUPAN KAMPUS"
        subtitle="Pengalaman Kampus yang Berkesan di STTB"
        backgroundImage="https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0B1F3B] mb-4">Fasilitas Kampus</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                STTB menyediakan berbagai fasilitas untuk mendukung pembelajaran and pengembangan diri mahasiswa
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {facilities.map((facility, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#0B1F3B] text-[#D4AF37] rounded-full mb-4">
                    {facility.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1F3B] mb-2">{facility.title}</h3>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-[#0B1F3B] mb-6">Kegiatan Kemahasiswaan</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2"></div>
                    <div>
                      <strong className="text-[#0B1F3B]">Ibadah Harian</strong>
                      <p className="text-gray-600 text-sm">Persekutuan doa and renungan setiap pagi</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2"></div>
                    <div>
                      <strong className="text-[#0B1F3B]">Kelompok Kecil</strong>
                      <p className="text-gray-600 text-sm">Pembinaan and sharing dalam kelompok kecil</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2"></div>
                    <div>
                      <strong className="text-[#0B1F3B]">Retret Spiritual</strong>
                      <p className="text-gray-600 text-sm">Kegiatan retret untuk pendalaman rohani</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2"></div>
                    <div>
                      <strong className="text-[#0B1F3B]">Pelayanan Praktis</strong>
                      <p className="text-gray-600 text-sm">Praktik pelayanan di gereja and masyarakat</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0B1F3B] mb-6">Organisasi Mahasiswa</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2"></div>
                    <div>
                      <strong className="text-[#0B1F3B]">Senat Mahasiswa</strong>
                      <p className="text-gray-600 text-sm">Organisasi perwakilan mahasiswa</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2"></div>
                    <div>
                      <strong className="text-[#0B1F3B]">Tim Musik & Pujian</strong>
                      <p className="text-gray-600 text-sm">Pelayanan worship and musik gereja</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2"></div>
                    <div>
                      <strong className="text-[#0B1F3B]">Tim Olahraga</strong>
                      <p className="text-gray-600 text-sm">Kegiatan olahraga and rekreasi</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2"></div>
                    <div>
                      <strong className="text-[#0B1F3B]">Kelompok Studi</strong>
                      <p className="text-gray-600 text-sm">Diskusi and pendalaman materi akademik</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#0B1F3B] to-[#2a4a6c] text-white p-8 md:p-12 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Komunitas yang Mendukung</h3>
                  <p className="text-gray-200 mb-6">
                    Di STTB, Anda akan menemukan keluarga kedua - komunitas yang saling mendukung dalam pertumbuhan rohani and akademik.
                  </p>
                  <ul className="space-y-2 text-gray-200">
                    <li>Pembinaan mentor yang personal</li>
                    <li>Persahabatan yang erat antar mahasiswa</li>
                    <li>Dukungan dosen yang peduli</li>
                    <li>Pengalaman pelayanan yang nyata</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4">Jadwal Harian</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between border-b border-white/20 pb-2">
                      <span>05:30 - 06:30</span>
                      <span>Devosi Pagi</span>
                    </div>
                    <div className="flex justify-between border-b border-white/20 pb-2">
                      <span>07:00 - 12:00</span>
                      <span>Kuliah</span>
                    </div>
                    <div className="flex justify-between border-b border-white/20 pb-2">
                      <span>13:00 - 17:00</span>
                      <span>Kuliah/Tugas</span>
                    </div>
                    <div className="flex justify-between border-b border-white/20 pb-2">
                      <span>19:00 - 20:00</span>
                      <span>Kelompok Kecil</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
