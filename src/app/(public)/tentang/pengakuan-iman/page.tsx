import { PageHero } from '@/components/shared/PageHero';
import { Book, Check } from 'lucide-react';
import { SEO } from '@/components/shared/SEO';

export default async function PengakuanImanPage() {
  const beliefs = [
    {
      title: 'Alkitab',
      content: 'Kami percaya bahwa Alkitab adalah Firman Allah yang diilhamkan oleh Roh Kudus, tidak mengandung kesalahan dalam naskah aslinya, and merupakan otoritas tertinggi dalam hal iman and kehidupan.'
    },
    {
      title: 'Allah Tritunggal',
      content: 'Kami percaya kepada satu Allah yang kekal, yang menyatakan diri-Nya dalam tiga pribadi: Allah Bapa, Allah Anak (Yesus Kristus), and Allah Roh Kudus - sama dalam esensi, namun berbeda dalam fungsi.'
    },
    {
      title: 'Yesus Kristus',
      content: 'Kami percaya bahwa Yesus Kristus adalah Allah yang sejati and manusia yang sejati, dikandung oleh Roh Kudus, lahir dari anak dara Maria, hidup tanpa dosa, mati di kayu salib sebagai kurban penebusan dosa, bangkit dari kematian pada hari ketiga, naik ke surga, and akan datang kembali untuk menghakimi yang hidup and yang mati.'
    },
    {
      title: 'Roh Kudus',
      content: 'Kami percaya bahwa Roh Kudus adalah pribadi ketiga dari Allah Tritunggal yang menginsafkan manusia akan dosa, melahirbarukan, membaptis, memeteraikan, and mendiami setiap orang percaya, serta memberikan karunia-karunia rohani untuk pelayanan.'
    },
    {
      title: 'Keselamatan',
      content: 'Kami percaya bahwa keselamatan adalah anugerah Allah semata melalui iman kepada Yesus Kristus. Manusia diselamatkan bukan karena perbuatan baik, tetapi karena kasih karunia Allah yang diterima melalui iman.'
    },
    {
      title: 'Gereja',
      content: 'Kami percaya bahwa gereja adalah tubuh Kristus yang terdiri dari semua orang percaya sejati. Gereja lokal adalah persekutuan orang-orang percaya yang dibaptis, yang berkumpul untuk ibadah, persekutuan, pengajaran, and pelayanan di bawah kepemimpinan yang ditetapkan Allah.'
    },
    {
      title: 'Baptisan dan Perjamuan Kudus',
      content: 'Kami percaya pada dua ordinasi: Baptisan Selam sebagai tanda ketaatan and kesaksian publik iman kepada Kristus, and Perjamuan Kudus sebagai peringatan akan kematian and kebangkitan Kristus.'
    },
    {
      title: 'Kehidupan Kekal',
      content: 'Kami percaya pada kebangkitan tubuh, kehidupan kekal bagi orang-orang percaya di hadirat Allah, and penghukuman kekal bagi mereka yang menolak Kristus.'
    }
  ];

  return (
    <>
      <SEO title="Pengakuan Iman - STTB" />
      <PageHero
        title="PENGAKUAN IMAN"
        subtitle="Fondasi Teologis STTB"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#C1121F] text-white rounded-full mb-6">
                <Book size={40} />
              </div>
              <h2 className="text-3xl font-bold text-[#0B1F3B] mb-4">Kami Percaya</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Pengakuan Iman STTB merangkum keyakinan teologis fundamental yang menjadi dasar seluruh pengajaran and pelayanan kami. Pengakuan ini selaras dengan pengakuan iman injili secara umum and tradisi Reformasi.
              </p>
            </div>

            {/* Statement of Faith */}
            <div className="space-y-6">
              {beliefs.map((belief, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-[#C1121F] hover:shadow-lg transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-[#0B1F3B] text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0B1F3B] mb-3">{belief.title}</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {belief.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Core Principles */}
            <div className="mt-16 bg-gradient-to-br from-[#0B1F3B] to-[#071528] text-white p-8 md:p-12 rounded-xl">
              <h2 className="text-3xl font-bold mb-6">Prinsip-Prinsip Teologi STTB</h2>
              <p className="text-lg leading-relaxed mb-6">
                Sebagai institusi pendidikan teologi injili, STTB menjunjung tinggi prinsip-prinsip teologis yang alkitabiah:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Check className="flex-shrink-0 mt-1" size={20} />
                  <span>Otoritas Alkitab sebagai Firman Allah yang sempurna</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="flex-shrink-0 mt-1" size={20} />
                  <span>Keselamatan semata-mata karena anugerah melalui iman</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="flex-shrink-0 mt-1" size={20} />
                  <span>Imamat semua orang percaya</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="flex-shrink-0 mt-1" size={20} />
                  <span>Kesatuan dalam keberagaman tubuh Kristus</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="flex-shrink-0 mt-1" size={20} />
                  <span>Baptisan and Perjamuan Kudus sebagai ordinasi gereja</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="flex-shrink-0 mt-1" size={20} />
                  <span>Misi global untuk memberitakan Injil</span>
                </div>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="mt-12 bg-[#C1121F]/10 border-2 border-[#C1121F] p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed text-center">
                Pengakuan Iman ini bukan pengganti Alkitab, melainkan ringkasan keyakinan teologis yang dipegang oleh STTB. Kami terus berkomitmen untuk setia pada Firman Allah and mengajarkannya dengan integritas dalam semua aspek pendidikan and pelayanan kami.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
