import { PageHero } from '@/components/shared/PageHero';
import { InfoPanel } from '@/components/shared/InfoPanel';
import { CTASection } from '@/components/shared/CTASection';
import { Award, Users, BookOpen, Heart } from 'lucide-react';
import { SEO } from '@/components/shared/SEO';

export default async function BeasiswaPage() {
  return (
    <>
      <SEO title="Program Beasiswa - STTB" />
      <PageHero
        title="PROGRAM BEASISWA"
        subtitle="Dukungan Finansial untuk Mahasiswa STTB"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0B1F3B] mb-4">Jenis Beasiswa</h2>
              <p className="text-gray-600">
                STTB menyediakan berbagai program beasiswa untuk mendukung mahasiswa yang berprestasi and membutuhkan bantuan finansial
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <InfoPanel title="Beasiswa Prestasi Akademik" icon={<Award size={24} />} variant="accent">
                <p className="mb-4 text-sm">
                  Diberikan kepada mahasiswa dengan prestasi akademik yang sangat baik.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Cakupan:</strong> 50% - 100% biaya SPP</p>
                  <p><strong>Syarat:</strong> IPK minimal 3.50</p>
                  <p><strong>Durasi:</strong> 1 Semester (dapat diperpanjang)</p>
                </div>
              </InfoPanel>

              <InfoPanel title="Beasiswa Ekonomi" icon={<Heart size={24} />} variant="accent">
                <p className="mb-4 text-sm">
                  Bantuan untuk mahasiswa yang mengalami kesulitan ekonomi.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Cakupan:</strong> 30% - 70% biaya SPP</p>
                  <p><strong>Syarat:</strong> Surat keterangan tidak mampu</p>
                  <p><strong>Durasi:</strong> 1 Tahun Akademik</p>
                </div>
              </InfoPanel>

              <InfoPanel title="Beasiswa Pelayanan" icon={<Users size={24} />} variant="accent">
                <p className="mb-4 text-sm">
                  Untuk mahasiswa yang aktif dalam pelayanan gereja and kampus.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Cakupan:</strong> 25% - 50% biaya SPP</p>
                  <p><strong>Syarat:</strong> Surat rekomendasi gereja</p>
                  <p><strong>Durasi:</strong> 1 Semester</p>
                </div>
              </InfoPanel>

              <InfoPanel title="Beasiswa Full Pendeta" icon={<BookOpen size={24} />} variant="accent">
                <p className="mb-4 text-sm">
                  Beasiswa penuh untuk calon pendeta yang direkomendasikan gereja.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Cakupan:</strong> 100% biaya kuliah + asrama</p>
                  <p><strong>Syarat:</strong> Rekomendasi gereja and sinode</p>
                  <p><strong>Durasi:</strong> Selama studi</p>
                </div>
              </InfoPanel>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#0B1F3B] mb-6">Persyaratan Umum Beasiswa</h3>
              <InfoPanel title="Dokumen yang Diperlukan" variant="secondary">
                <ul className="space-y-3 text-sm">
                  <li>Formulir permohonan beasiswa yang telah diisi</li>
                  <li>Fotokopi kartu mahasiswa and KTP</li>
                  <li>Transkrip nilai terakhir (untuk mahasiswa aktif)</li>
                  <li>Surat keterangan dari gereja/pendeta</li>
                  <li>Surat pernyataan kesediaan mengikuti ketentuan beasiswa</li>
                  <li>Dokumen pendukung lainnya sesuai jenis beasiswa</li>
                </ul>
              </InfoPanel>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#0B1F3B] mb-6">Cara Mendaftar</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#0B1F3B] text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B1F3B] mb-1">Unduh Formulir</h4>
                    <p className="text-gray-700 text-sm">Download formulir beasiswa dari website atau ambil di bagian akademik</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#0B1F3B] text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B1F3B] mb-1">Lengkapi Dokumen</h4>
                    <p className="text-gray-700 text-sm">Siapkan semua dokumen persyaratan sesuai jenis beasiswa yang diajukan</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#0B1F3B] text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B1F3B] mb-1">Serahkan Berkas</h4>
                    <p className="text-gray-700 text-sm">Serahkan berkas ke bagian kemahasiswaan paling lambat setiap awal semester</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#0B1F3B] text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B1F3B] mb-1">Tunggu Hasil</h4>
                    <p className="text-gray-700 text-sm">Pengumuman hasil seleksi beasiswa akan diumumkan 2 minggu setelah penutupan pendaftaran</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#0B1F3B] to-[#2a4a6c] text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Informasi Lebih Lanjut</h3>
              <p className="mb-6">Hubungi bagian kemahasiswaan untuk konsultasi mengenai beasiswa</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+622145884350" className="bg-[#D4AF37] hover:bg-[#c09d2e] text-white font-bold px-6 py-3 rounded-lg transition">
                  (021) 4584350
                </a>
                <a href="mailto:beasiswa@sttb.ac.id" className="bg-white hover:bg-gray-100 text-[#0B1F3B] font-bold px-6 py-3 rounded-lg transition">
                  beasiswa@sttb.ac.id
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Wujudkan Impian Studi Anda"
        description="Jangan biarkan kendala finansial menghalangi panggilan Anda"
        primaryButton={{
          text: 'Daftar Beasiswa',
          link: '/admisi'
        }}
      />
    </>
  );
}
