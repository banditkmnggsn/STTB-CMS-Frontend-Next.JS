import { 
  BookOpen, Library, CheckCircle2, 
  Settings, Database, ArrowRight, ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import { LibrarySearch } from '@/components/shared/LibrarySearch';
import { LibraryTabs } from '@/components/shared/LibraryTabs';
import { SEO } from '@/components/shared/SEO';

export default async function PerpustakaanPage() {
  const stats = [
    { label: 'Judul', value: '47,254+', icon: <BookOpen className="w-8 h-8 text-[#D4AF37] mb-2" /> },
    { label: 'Eksemplar', value: '51,932+', icon: <Library className="w-8 h-8 text-[#D4AF37] mb-2" /> },
    { label: 'Sirkulasi', value: '39,913+', icon: <Settings className="w-8 h-8 text-[#D4AF37] mb-2" /> },
  ];

  const digitalResources = [
    { name: 'EBSCO', desc: 'Jurnal Teologi Internasional', color: 'from-blue-600 to-blue-800' },
    { name: 'ATLA', desc: 'Religion Database', color: 'from-emerald-600 to-emerald-800' },
    { name: 'PERPUSNAS', desc: 'Perpustakaan Nasional RI', color: 'from-indigo-600 to-indigo-800' },
    { name: 'GARUDA', desc: 'Garba Rujukan Digital', color: 'from-red-600 to-red-800' },
    { name: 'SINTA', desc: 'Science and Technology Index', color: 'from-purple-600 to-purple-800' },
    { name: 'GLOBETHICS', desc: 'Global Digital Library', color: 'from-teal-600 to-teal-800' },
  ];

  const highlights = [
    {
      title: 'Systematic Theology, Second Edition',
      author: 'Wayne Grudem',
      image: 'https://images.unsplash.com/photo-1597149305660-78eb2b9aa78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      synopsis: 'Edisi terbaru dari buku ajar teologi sistematika klasik yang komprehensif and mudah dipahami.'
    },
    {
      title: 'The Cost of Discipleship',
      author: 'Dietrich Bonhoeffer',
      image: 'https://images.unsplash.com/photo-1758889468486-20d3f553ef57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      synopsis: 'Sebuah mahakarya spiritual tentang anugerah and panggilan mengikut Kristus secara radikal.'
    },
    {
      title: 'Christian Beliefs: Twenty Basics',
      author: 'Wayne Grudem',
      image: 'https://images.unsplash.com/photo-1654193404293-886297721ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      synopsis: 'Dua puluh dasar kepercayaan Kristen yang setiap orang percaya harus ketahui.'
    },
    {
      title: 'Institutes of the Christian Religion',
      author: 'John Calvin',
      image: 'https://images.unsplash.com/photo-1660479123634-2c700dfbbbdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      synopsis: 'Karya fundamental Reformasi yang masih sangat relevan hingga hari ini.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans">
      <SEO title="Perpustakaan - STTB" />
      {/* Hero Section */}
      <section className="relative bg-[#0B1F3B] pt-24 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1763890965393-1cea435581ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
            alt="Library Interior" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B] via-[#0B1F3B]/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif text-white drop-shadow-lg">
            Eksplorasi Pengetahuan & Teologi
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
            Akses ke puluhan ribu literatur akademis, jurnal teologi, and sumber daya riset digital untuk mendukung studi Anda.
          </p>

          <LibrarySearch />

          {/* Quick Action Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-6 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2">
              <BookOpen size={16} /> Katalog Fisik
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-6 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2">
              <Settings size={16} /> Perpanjang Mandiri
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-6 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2">
              <Database size={16} /> Pustaka Pintar
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Banner */}
      <section className="bg-[#0B1F3B] border-y border-white/10 py-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center pt-6 md:pt-0">
                {stat.icon}
                <div className="text-4xl font-bold text-white font-serif mb-1">{stat.value}</div>
                <div className="text-gray-400 font-semibold tracking-wider uppercase text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Resources Grid (Bento Style) */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0B1F3B] mb-4">Akses Jurnal & E-Library</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Kemitraan STTB dengan berbagai penyedia pangkalan data akademik untuk menunjang penelitian berkualitas tinggi.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {digitalResources.map((resource, idx) => (
            <a 
              key={idx} 
              href="#" 
              className="group relative overflow-hidden bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${resource.color} opacity-5 rounded-bl-full`}></div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold font-serif text-[#0B1F3B] tracking-tight">{resource.name}</h3>
                <ExternalLink size={20} className="text-gray-300 group-hover:text-[#D4AF37] transition-colors" />
              </div>
              <p className="text-sm text-gray-500 font-medium">{resource.desc}</p>
              <div className="mt-6 w-8 h-1 bg-gray-100 rounded-full group-hover:bg-[#D4AF37] transition-colors"></div>
            </a>
          ))}
        </div>
      </section>

      {/* Membership & Administration Section */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0B1F3B] mb-4">Layanan Keanggotaan Terbuka</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Perpustakaan STTB terbuka untuk umum and komunitas eksternal melalui registrasi keanggotaan.</p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* Left Column (Info Card) */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#0B1F3B] text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute -right-10 -top-10 text-white/5">
                  <Library size={160} />
                </div>
                <h3 className="text-xl font-bold font-serif mb-6 relative z-10">Syarat & Ketentuan Keanggotaan Luar</h3>
                
                <div className="space-y-4 relative z-10">
                  <div className="flex gap-3">
                    <CheckCircle2 className="text-[#D4AF37] shrink-0 mt-0.5" size={20} />
                    <div>
                      <h4 className="font-semibold text-sm">Deposit Peminjaman</h4>
                      <p className="text-xs text-gray-300 mt-1">Rp 250.000 (Dapat dikembalikan jika keanggotaan berakhir)</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="text-[#D4AF37] shrink-0 mt-0.5" size={20} />
                    <div>
                      <h4 className="font-semibold text-sm">Iuran Tahunan</h4>
                      <p className="text-xs text-gray-300 mt-1">Rp 100.000 / tahun (Non-refundable)</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="text-[#D4AF37] shrink-0 mt-0.5" size={20} />
                    <div>
                      <h4 className="font-semibold text-sm">Hak Akses</h4>
                      <p className="text-xs text-gray-300 mt-1">Peminjaman maks. 3 buku fisik & akses ke fasilitas ruang baca.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="text-[#D4AF37] shrink-0 mt-0.5" size={20} />
                    <div>
                      <h4 className="font-semibold text-sm">Syarat Dokumen</h4>
                      <p className="text-xs text-gray-300 mt-1">KTP/KTM asli, Pas Foto 3x4, & Bukti Transfer bank.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20 relative z-10">
                  <p className="text-xs text-gray-400 mb-2">Rekening Pembayaran:</p>
                  <p className="font-mono text-lg font-medium text-[#D4AF37]">BCA 282 144 6444</p>
                  <p className="text-xs text-gray-300">a.n. YAYASAN STT BANDUNG</p>
                </div>
              </div>
            </div>

            {/* Right Column (Form UI) */}
            <LibraryTabs />
          </div>
        </div>
      </section>

      {/* Book Highlights */}
      <section className="py-20 bg-[#FAF9F6]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0B1F3B] mb-2">Rekomendasi Buku</h2>
              <p className="text-gray-600">Koleksi pilihan and literatur terbaru di perpustakaan kami bulan ini.</p>
            </div>
            <Link href="#" className="text-[#D4AF37] font-bold flex items-center gap-1 hover:text-[#0B1F3B] transition-colors shrink-0">
              Lihat Semua Katalog <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((book, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                <div className="h-64 overflow-hidden relative p-6 bg-gray-50 flex items-center justify-center">
                  <img 
                    src={book.image} 
                    alt={book.title} 
                    className="h-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-500 rounded"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-xs text-[#D4AF37] font-bold uppercase tracking-wider mb-2">{book.author}</p>
                  <h3 className="text-lg font-bold font-serif text-[#0B1F3B] mb-3 leading-snug group-hover:text-[#2E90FF] transition-colors">{book.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-3 mb-6 flex-grow">{book.synopsis}</p>
                  <button className="w-full py-2.5 border border-[#0B1F3B] text-[#0B1F3B] hover:bg-[#0B1F3B] hover:text-white rounded-lg text-sm font-bold transition-all mt-auto">
                    Cek Ketersediaan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
