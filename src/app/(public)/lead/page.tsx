import { BookOpen, Shield, Target, PlayCircle, MapPin, Clock, ArrowRight, Download, Users } from 'lucide-react';
import Link from 'next/link';
import { fetchPublicData } from '@/lib/api';
import { SEO } from '@/components/shared/SEO';

async function getLeadData() {
  try {
    const [programsResponse, eventsResponse] = await Promise.all([
      fetchPublicData('/lead-content/programs'),
      fetchPublicData('/events?isLeadEvent=true&limit=4')
    ]);
    return {
      programs: programsResponse.items || (Array.isArray(programsResponse) ? programsResponse : []),
      events: eventsResponse.items || []
    };
  } catch (err) {
    console.error('Failed to load LEAD data', err);
    return { programs: [], events: [] };
  }
}

export default async function LeadPage() {
  const { programs, events } = await getLeadData();

  const formatEventDate = (isoString?: string) => {
    if (!isoString) return { date: '', month: '' };
    try {
      const d = new Date(isoString);
      return {
        date: d.getDate().toString(),
        month: d.toLocaleDateString('id-ID', { month: 'short' }).toUpperCase()
      };
    } catch {
      return { date: isoString, month: '' };
    }
  };

  return (
    <>
      <SEO title="LEAD Center - STTB" description="Learning, Equipping, & Development Center STT Bandung." />
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0B1F3B]">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" 
            alt="Professionals Workshop" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3B] via-[#0B1F3B]/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#D4AF37]/20 border border-[#D4AF37]/30 backdrop-blur-sm px-4 py-1.5 rounded-full text-[#F9D462] font-semibold text-sm mb-6">
              Learning, Equipping, & Development
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-6 leading-tight">
              L.E.A.D. Center:<br />
              <span className="text-[#D4AF37]">Memperlengkapi Pelayan,</span><br />
              Membangun Tubuh Kristus.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Pusat Pendidikan & Pelatihan Non-Formal STT Bandung. Kami hadir untuk membekali jemaat, profesional, and pemimpin gereja melalui program yang aplikatif and relevan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#program-unggulan" 
                className="bg-[#D4AF37] hover:bg-[#B8962A] text-[#0B1F3B] font-bold px-8 py-4 rounded-xl shadow-lg shadow-[#D4AF37]/20 transition-all duration-300 text-center flex items-center justify-center gap-2 group"
              >
                Lihat Program & Kelas
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#tentang-lead" 
                className="bg-transparent border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 text-center flex items-center justify-center backdrop-blur-sm"
              >
                Tentang LEAD
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pillars Section */}
      <section id="tentang-lead" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-[#C1121F] font-bold tracking-wider uppercase mb-2">Tiga Pilar Utama</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-serif text-[#0B1F3B] mb-4">Fokus Pelayanan LEAD</h3>
            <p className="text-gray-600">
              LEAD Center bergerak melalui tiga pilar utama untuk menjawab kebutuhan pembinaan and pengembangan kompetensi pelayanan di gereja and marketplace.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-[#D4AF37] group relative overflow-hidden">
              <div className="w-16 h-16 bg-[#F3F7FF] text-[#2E90FF] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#2E90FF] group-hover:text-white transition-colors duration-300 relative z-10">
                <BookOpen size={32} />
              </div>
              <h4 className="text-2xl font-bold text-[#0B1F3B] mb-3 relative z-10">Kelas Audit & Kuliah Umum</h4>
              <p className="text-gray-600 mb-6 relative z-10">
                Ikuti kelas teologi formal secara sit-in sesuai kebutuhan Anda tanpa perlu mengambil program gelar penuh. Kesempatan belajar langsung dari dosen STTB.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-[#D4AF37] group relative overflow-hidden">
              <div className="w-16 h-16 bg-red-50 text-[#C1121F] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#C1121F] group-hover:text-white transition-colors duration-300 relative z-10">
                <Shield size={32} />
              </div>
              <h4 className="text-2xl font-bold text-[#0B1F3B] mb-3 relative z-10">Sertifikasi & Pelatihan</h4>
              <p className="text-gray-600 mb-6 relative z-10">
                Program khusus and sertifikasi yang dirancang untuk memperlengkapi praktisi pelayanan. Termasuk Perspectives Study Program and Little STEP.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-[#D4AF37] group relative overflow-hidden">
              <div className="w-16 h-16 bg-amber-50 text-[#D4AF37] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300 relative z-10">
                <Target size={32} />
              </div>
              <h4 className="text-2xl font-bold text-[#0B1F3B] mb-3 relative z-10">Pengembangan Modul</h4>
              <p className="text-gray-600 mb-6 relative z-10">
                Layanan konsultasi and pembuatan bahan ajar, kurikulum, serta modul untuk kebutuhan spesifik pelayanan gerejawi and organisasi Kristen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section id="program-unggulan" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0B1F3B] mb-4">Program Unggulan Kami</h2>
              <p className="text-gray-600">
                Pilih program yang paling sesuai dengan panggilan and area pelayanan Anda. Didesain secara spesifik, terstruktur, and aplikatif.
              </p>
            </div>
            <Link href="/admisi" className="hidden md:flex items-center gap-2 text-[#2E90FF] font-semibold hover:text-[#0B1F3B] transition-colors">
              Lihat Semua Program <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program: any) => (
              <div key={program.id || program.title} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={program.image || program.heroImage || "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"} 
                    alt={program.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 bg-gray-200"
                  />
                  {program.status && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#0B1F3B] shadow-sm">
                      {program.status}
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  {program.batch && <div className="text-sm font-semibold text-[#C1121F] mb-2">{program.batch}</div>}
                  <h4 className="text-xl font-bold text-[#0B1F3B] mb-3 leading-tight group-hover:text-[#2E90FF] transition-colors">{program.title}</h4>
                  <p className="text-gray-600 text-sm mb-6 flex-grow">{program.description}</p>
                  
                  <Link 
                    href="/admisi" 
                    className="block w-full py-3 px-4 bg-gray-50 hover:bg-[#0B1F3B] text-[#0B1F3B] hover:text-white text-center font-bold rounded-xl transition-colors duration-300 mt-auto"
                  >
                    Daftar Sekarang
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold font-serif text-[#0B1F3B]">Agenda & Kegiatan Mendatang</h2>
              <Link href="/kegiatan" className="flex items-center gap-2 text-[#2E90FF] font-semibold hover:text-[#0B1F3B] transition-colors">
                Kalender Penuh <ArrowRight size={20} />
              </Link>
            </div>

            <div className="space-y-4">
              {events.map((event: any) => {
                const dates = formatEventDate(event.eventDate || event.date);
                return (
                  <div key={event.id || event.title} className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-6 items-center group">
                    <div className="flex-shrink-0 bg-[#F3F7FF] group-hover:bg-[#0B1F3B] transition-colors w-20 h-20 rounded-xl flex flex-col items-center justify-center border border-blue-50">
                      <span className="text-2xl font-bold text-[#0B1F3B] group-hover:text-white leading-none mb-1">{dates.date}</span>
                      <span className="text-sm font-semibold text-[#2E90FF] group-hover:text-gray-300">{dates.month}</span>
                    </div>
                    
                    <div className="flex-grow">
                      <h4 className="text-lg sm:text-xl font-bold text-[#0B1F3B] mb-2 group-hover:text-[#C1121F] transition-colors">
                        {event.title}
                      </h4>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Clock size={16} />
                          {event.time || event.startTime || 'TBA'}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          {event.location || 'STTB'}
                        </div>
                      </div>
                    </div>
                    
                    <Link 
                      href="/kontak" 
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border-2 border-[#0B1F3B] hover:bg-[#0B1F3B] hover:text-white text-[#0B1F3B] font-bold px-6 py-2.5 rounded-xl transition-colors duration-300"
                    >
                      Ikuti
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#C1121F]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-6">Siap Melangkah Bersama Kami?</h2>
          <p className="text-red-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Daftarkan diri Anda atau gereja Anda dalam program pelatihan LEAD Center and jadilah agen perubahan yang berdampak nyata.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/admisi" className="bg-white text-[#C1121F] font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
              Mulai Pendaftaran
            </Link>
            <Link href="/kontak" className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              Hubungi Tim Kami
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
