import { PageHero } from '@/components/shared/PageHero';
import { SEO } from '@/components/shared/SEO';

export default async function SejarahPage() {
  return (
    <>
      <SEO title="Sejarah STTB - Sekolah Tinggi Teologi Bandung" />
      <PageHero
        title="SEJARAH STTB"
        subtitle="Perjalanan Iman dan Pendidikan Teologi"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Timeline */}
            <div className="space-y-12">
              
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-[#C8102E] text-white rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold">1952</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-[#003478] mb-3">Pendirian</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Sekolah Tinggi Teologi Bandung (STTB) didirikan pada tahun 1952 dengan visi untuk menyediakan pendidikan teologi yang alkitabiah dan berkualitas di Indonesia. Pendirian STTB merupakan respons terhadap kebutuhan mendesak akan pemimpin gereja yang terlatih secara teologis dan memiliki komitmen kuat pada pelayanan.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-[#003478] text-white rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold">1965</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-[#003478] mb-3">Pengakuan Resmi</h3>
                  <p className="text-gray-700 leading-relaxed">
                    STTB mendapat pengakuan resmi dari Departemen Pendidikan dan Kebudayaan Republik Indonesia. Pengakuan ini menandai tonggak penting dalam perjalanan institusi, memungkinkan lulusan untuk diakui secara nasional dan membuka peluang lebih luas dalam pelayanan.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-[#C8102E] text-white rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold">1985</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-[#003478] mb-3">Ekspansi Program</h3>
                  <p className="text-gray-700 leading-relaxed">
                    STTB memperluas program studi dengan menambahkan Program Sarjana Pendidikan Kristen (PAK). Langkah ini merespons kebutuhan gereja akan pendidik Kristen yang profesional di sekolah-sekolah dan lembaga pendidikan gereja.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-[#003478] text-white rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold">2000</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-[#003478] mb-3">Program Pascasarjana</h3>
                  <p className="text-gray-700 leading-relaxed">
                    STTB membuka Program Magister Teologi, menandai era baru dalam penyediaan pendidikan teologi tingkat lanjut. Program ini dirancang untuk memperlengkapi pemimpin gereja dengan pemahaman teologis yang mendalam dan keterampilan kepemimpinan yang mumpuni.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-[#C8102E] text-white rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold">2010</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-[#003478] mb-3">Akreditasi Nasional</h3>
                  <p className="text-gray-700 leading-relaxed">
                    STTB meraih akreditasi dari BAN-PT untuk program-program studinya, mengukuhkan komitmen institusi terhadap standar kualitas pendidikan tinggi. Akreditasi ini menjadi bukti pengakuan eksternal atas keunggulan akademik STTB.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-[#003478] text-white rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold">2020</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-[#003478] mb-3">Diversifikasi Program</h3>
                  <p className="text-gray-700 leading-relaxed">
                    STTB menambahkan beberapa program magister baru dengan berbagai konsentrasi, termasuk Magister Ministri Marketplace, Kepemimpinan Pastoral, dan Teologi Pelayanan Gerejawi. Diversifikasi ini merespons kebutuhan kontemporer gereja dan masyarakat.
                  </p>
                </div>
              </div>

            </div>

            {/* Legacy Section */}
            <div className="mt-16 bg-gradient-to-br from-[#0B1F3B] to-[#071528] text-white p-8 md:p-12 rounded-xl">
              <h2 className="text-3xl font-bold mb-6">Warisan dan Komitmen</h2>
              <p className="text-lg leading-relaxed mb-4">
                Selama lebih dari 70 tahun, STTB telah menghasilkan ribuan lulusan yang melayani di berbagai bidang pelayanan - dari pendeta, misionaris, pendidik, hingga pemimpin organisasi Kristen. Komitmen kami tetap sama: membentuk pemimpin rohani yang memiliki fondasi teologis yang kokoh, karakter Kristiani yang matang, dan visi pelayanan yang transformatif.
              </p>
              <p className="text-lg leading-relaxed">
                Di era yang terus berubah, STTB terus berinovasi sambil mempertahankan komitmen pada kebenaran Alkitab, keunggulan akademik, and pembentukan karakter rohani.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
