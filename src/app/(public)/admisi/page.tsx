import { PageHero } from '@/components/shared/PageHero';
import { InfoPanel } from '@/components/shared/InfoPanel';
import { CheckCircle, Calendar, FileText } from 'lucide-react';
import { SEO } from '@/components/shared/SEO';

export default async function AdmisiPage() {
  return (
    <>
      <SEO 
        title="Admisi & Pendaftaran - STTB"
        description="Informasi lengkap tentang pendaftaran mahasiswa baru STTB Bandung. Jadwal pendaftaran, persyaratan, prosedur, and dokumen yang diperlukan untuk program Sarjana and Magister Teologi."
        path="/admisi"
      />

      <PageHero
        title="PENDAFTARAN MAHASISWA BARU"
        subtitle="Bergabunglah dengan Komunitas Akademik STTB"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B1F3B] mb-8 text-center">Jadwal Pendaftaran 2026/2027</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <InfoPanel title="Gelombang 1" icon={<Calendar size={24} />} variant="accent">
                <p className="mb-2"><strong>Pendaftaran:</strong> 1 Januari - 31 Maret 2026</p>
                <p className="mb-2"><strong>Tes Masuk:</strong> 5 April 2026</p>
                <p><strong>Pengumuman:</strong> 15 April 2026</p>
              </InfoPanel>

              <InfoPanel title="Gelombang 2" icon={<Calendar size={24} />} variant="accent">
                <p className="mb-2"><strong>Pendaftaran:</strong> 1 April - 30 Juni 2026</p>
                <p className="mb-2"><strong>Tes Masuk:</strong> 5 Juli 2026</p>
                <p><strong>Pengumuman:</strong> 15 Juli 2026</p>
              </InfoPanel>
            </div>

            <h2 className="text-3xl font-bold text-[#0B1F3B] mb-8 text-center">Persyaratan Pendaftaran</h2>
            
            <div className="mb-12">
              <InfoPanel title="Dokumen yang Diperlukan" icon={<FileText size={24} />} variant="secondary">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#D4AF37] mt-1 flex-shrink-0" size={20} />
                    <span>Fotokopi ijazah SMA/sederajat yang telah dilegalisir (2 lembar)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#D4AF37] mt-1 flex-shrink-0" size={20} />
                    <span>Fotokopi transkrip nilai yang telah dilegalisir (2 lembar)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#D4AF37] mt-1 flex-shrink-0" size={20} />
                    <span>Pas foto berwarna ukuran 3x4 (4 lembar)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#D4AF37] mt-1 flex-shrink-0" size={20} />
                    <span>Fotokopi KTP/Kartu Identitas (1 lembar)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#D4AF37] mt-1 flex-shrink-0" size={20} />
                    <span>Surat rekomendasi dari pendeta/gereja (asli)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#D4AF37] mt-1 flex-shrink-0" size={20} />
                    <span>Surat keterangan sehat dari dokter (asli)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#D4AF37] mt-1 flex-shrink-0" size={20} />
                    <span>Formulir pendaftaran yang telah diisi lengkap</span>
                  </li>
                </ul>
              </InfoPanel>
            </div>

            <h2 className="text-3xl font-bold text-[#0B1F3B] mb-8 text-center">Prosedur Pendaftaran</h2>
            
            <div className="space-y-6 mb-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0B1F3B] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B1F3B] mb-2">Pendaftaran Online</h3>
                  <p className="text-gray-700">Isi formulir pendaftaran online di website STTB atau datang langsung ke kampus untuk mengambil formulir.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0B1F3B] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B1F3B] mb-2">Pembayaran Biaya Pendaftaran</h3>
                  <p className="text-gray-700">Bayar biaya pendaftaran sebesar Rp 300.000 melalui transfer bank atau datang langsung ke kampus.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0B1F3B] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B1F3B] mb-2">Pengumpulan Berkas</h3>
                  <p className="text-gray-700">Serahkan semua dokumen persyaratan ke bagian admisi paling lambat 3 hari sebelum tes masuk.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0B1F3B] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B1F3B] mb-2">Tes Masuk</h3>
                  <p className="text-gray-700">Ikuti tes masuk yang meliputi tes tertulis (pengetahuan umum and Alkitab) and wawancara.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0B1F3B] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B1F3B] mb-2">Pengumuman & Daftar Ulang</h3>
                  <p className="text-gray-700">Cek pengumuman kelulusan and lakukan daftar ulang sesuai jadwal yang ditentukan.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#0B1F3B] to-[#2a4a6c] text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Butuh Bantuan?</h3>
              <p className="mb-6">Tim admisi kami siap membantu Anda. Hubungi kami untuk informasi lebih lanjut.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+622145884350" className="bg-[#D4AF37] hover:bg-[#c09d2e] text-white font-bold px-6 py-3 rounded-lg transition">
                  📞 (021) 4584350
                </a>
                <a href="mailto:admisi@sttb.ac.id" className="bg-white hover:bg-gray-100 text-[#0B1F3B] font-bold px-6 py-3 rounded-lg transition">
                  ✉️ admisi@sttb.ac.id
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
