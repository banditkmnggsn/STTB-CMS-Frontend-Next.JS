import { PageHero } from '@/components/shared/PageHero';
import { Music } from 'lucide-react';
import { SEO } from '@/components/shared/SEO';

export default async function MarsPage() {
  return (
    <>
      <SEO title="Mars STTB - Sekolah Tinggi Teologi Bandung" />
      <PageHero
        title="MARS STTB"
        subtitle="Lagu Kebanggaan Almamater"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-[#C1121F] text-white rounded-full mb-6">
                <Music size={48} />
              </div>
              <p className="text-xl text-gray-600">
                Mars STTB adalah simbol identitas and semangat sivitas akademika dalam mengemban misi pendidikan teologi
              </p>
            </div>

            {/* Mars Lyrics */}
            <div className="bg-gradient-to-br from-[#0B1F3B] to-[#071528] text-white p-8 md:p-12 rounded-xl shadow-2xl mb-12">
              <h2 className="text-3xl font-bold text-center mb-8 text-[#C1121F]">MARS STTB</h2>
              
              <div className="space-y-6 text-lg leading-loose">
                <div>
                  <p className="text-center">
                    STTB almamater tercinta<br />
                    Tempatku menimba ilmu<br />
                    Dengan tekun and setia<br />
                    Kujalani tugas mulia
                  </p>
                </div>

                <div>
                  <p className="text-center">
                    Firman Tuhan jadi dasar<br />
                    Dalam setiap langkah kaki<br />
                    Untuk melayani Tuhan<br />
                    Dan membangun gereja-Nya
                  </p>
                </div>

                <div className="border-t border-white/30 pt-6">
                  <p className="text-center font-bold">
                    Reff:<br />
                    Maju terus STTB<br />
                    Teguh dalam iman<br />
                    Berkarya bagi Kristus<br />
                    Hingga akhir zaman
                  </p>
                </div>

                <div>
                  <p className="text-center">
                    Dengan hikmat and kasih<br />
                    Kami siap berkorban<br />
                    Menjadi terang dunia<br />
                    Membawa damai sejahtera
                  </p>
                </div>
              </div>
            </div>

            {/* Meaning Section */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#0B1F3B] mb-6">Makna Mars STTB</h3>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Mars STTB menggambarkan komitmen sivitas akademika untuk menimba ilmu teologi dengan tekun and setia. Lirik ini mencerminkan fondasi Firman Tuhan sebagai dasar setiap langkah dalam pendidikan and pelayanan.
                </p>
                <p className="leading-relaxed">
                  Bagian reff menegaskan semangat untuk terus maju dengan iman yang teguh, berkarya bagi Kristus hingga akhir zaman. Ini adalah panggilan untuk tidak hanya belajar, tetapi juga menjadi agen transformasi dalam gereja and masyarakat.
                </p>
                <p className="leading-relaxed">
                  Mars ini dinyanyikan dalam berbagai acara resmi kampus sebagai pengingat akan identitas, visi, and misi STTB dalam membentuk pemimpin rohani yang alkitabiah and transformatif.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <div className="bg-[#C1121F]/10 border-2 border-[#C1121F] p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Mars STTB dinyanyikan dalam setiap upacara resmi, wisuda, and acara-acara penting kampus sebagai simbol persatuan and komitmen bersama.
                </p>
                <p className="font-bold text-[#0B1F3B]">
                  "Maju Terus STTB - Teguh dalam Iman"
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
