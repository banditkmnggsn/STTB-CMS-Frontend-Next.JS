import { Search, ChevronLeft, ChevronRight, ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';
import { fetchNews } from '@/lib/api';

export default async function BeritaPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const resolvedParams = await searchParams;
  const q = typeof resolvedParams.q === 'string' ? resolvedParams.q : '';
  const category = typeof resolvedParams.category === 'string' ? resolvedParams.category : 'Semua';
  const pageStr = typeof resolvedParams.page === 'string' ? resolvedParams.page : '1';
  const page = parseInt(pageStr, 10) || 1;
  const limit = 6;
  
  let featuredNews = null;
  let newsArticles = [];
  let pagination = { page: 1, totalPages: 1 };

  try {
    const filters: any = { limit, page, status: 'published' };
    if (q) filters.search = q;
    if (category && category !== 'Semua') filters.category = category;
    
    // Fetch latest featured article and paginated news list concurrently
    const [featuredResponse, newsResponse] = await Promise.all([
      fetchNews({ featured: true, limit: 1, status: 'published' }),
      fetchNews(filters)
    ]);

    featuredNews = (featuredResponse?.items && featuredResponse.items.length > 0) ? featuredResponse.items[0] : null;
    newsArticles = newsResponse?.items || [];
    pagination = newsResponse?.pagination || { page: 1, totalPages: 1 };
  } catch (error) {
    console.error('Failed to load news data:', error);
  }

  const categories = ['Semua', 'Akademik', 'Institusi', 'Kemahasiswaan', 'Kegiatan'];

  // Helper to safely format dates
  const formatDate = (isoString?: string) => {
    if (!isoString) return '';
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
    } catch {
      return isoString;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans">
      {/* Hero Header Component */}
      <section className="bg-[#0B1F3B] text-white pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 mt-8">Berita & Dokumentasi STTB</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Pusat informasi resmi, kabar terkini, dan dokumentasi kegiatan civitas akademika Sekolah Tinggi Teologi Bandung.
          </p>
        </div>
      </section>

      {/* Featured News Hero Card */}
      {featuredNews && (
        <section className="container mx-auto px-4 -mt-6 relative z-10 mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden group">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-[450px] overflow-hidden">
                <img 
                  src={featuredNews.featuredImage || featuredNews.image || 'https://images.unsplash.com/photo-1750629231282-5180e8d5201e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'} 
                  alt={featuredNews.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 bg-gray-200"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center bg-white">
                <div className="mb-4 flex items-center gap-3 text-sm font-semibold text-gray-500">
                  <span className="text-[#C1121F] bg-red-50 px-3 py-1 rounded-full">{typeof featuredNews.category === 'object' ? featuredNews.category?.name : featuredNews.category || 'Berita'}</span>
                  <span>•</span>
                  <span>{formatDate(featuredNews.publishDate || featuredNews.date)}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold font-serif text-[#0B1F3B] mb-6 leading-tight group-hover:text-[#2E90FF] transition-colors">
                  <Link href={`/berita/${featuredNews.slug}`}>{featuredNews.title}</Link>
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed line-clamp-3">
                  {featuredNews.excerpt}
                </p>
                <div>
                  <Link 
                    href={`/berita/${featuredNews.slug}`}
                    className="inline-flex items-center gap-2 bg-[#0B1F3B] hover:bg-[#2E90FF] text-white px-8 py-3.5 rounded-full font-bold transition-colors shadow-md"
                  >
                    Baca Selengkapnya <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Dynamic Filtering System */}
      <section className="container mx-auto px-4 mb-12" style={{ marginTop: featuredNews ? 0 : '3rem' }}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          
          {/* Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-hide">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/berita?category=${encodeURIComponent(cat)}&page=1${q ? `&q=${encodeURIComponent(q)}` : ''}`}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  category === cat 
                    ? 'bg-[#0B1F3B] text-white shadow-md' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>

          {/* Search */}
          <form action="/berita" className="relative w-full lg:w-80">
            <input 
              type="text" 
              name="q"
              defaultValue={q}
              placeholder="Cari berita..." 
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-sm transition-all"
            />
            {category !== 'Semua' && <input type="hidden" name="category" value={category} />}
            <button type="submit" className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <Search size={18} />
            </button>
          </form>

        </div>
      </section>

      {/* News Feed Grid */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((item: any) => (
            <article key={item.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 overflow-hidden flex flex-col group transition-all duration-300">
              <Link href={`/berita/${item.slug}`} className="block relative h-56 overflow-hidden bg-gray-100">
                <img 
                  src={item.featuredImage || item.image || 'https://images.unsplash.com/photo-1568667256531-7d5ac92eaa7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-4 tracking-wide uppercase">
                  <span className="text-[#C1121F]">{typeof item.category === 'object' ? item.category?.name : item.category || 'Berita'}</span>
                  <span>|</span>
                  <span>{formatDate(item.publishDate || item.date)}</span>
                </div>
                <h3 className="text-xl font-bold font-serif text-[#0B1F3B] mb-3 leading-snug group-hover:text-[#2E90FF] transition-colors line-clamp-2">
                  <Link href={`/berita/${item.slug}`}>{item.title}</Link>
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">
                  {item.excerpt}
                </p>
                <Link 
                  href={`/berita/${item.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#D4AF37] hover:text-[#0B1F3B] transition-colors mt-auto"
                >
                  Read more <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {newsArticles.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 mt-8">
            <p className="text-xl text-gray-500 font-serif">Tidak ada berita ditemukan di kategori ini.</p>
          </div>
        )}

        {/* Minimalist Pagination */}
        {newsArticles.length > 0 && pagination.totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-16">
            <Link 
              href={`/berita?page=${pagination.page - 1}${q ? `&q=${q}` : ''}${category !== 'Semua' ? `&category=${category}` : ''}`}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${pagination.page <= 1 ? 'text-gray-300 pointer-events-none' : 'text-gray-500 hover:bg-gray-200'}`}
            >
              <ChevronLeft size={20} />
            </Link>
            
            {Array.from({ length: pagination.totalPages }).map((_, idx) => {
              const pageNum = idx + 1;
              return (
                <Link 
                  key={pageNum}
                  href={`/berita?page=${pageNum}${q ? `&q=${q}` : ''}${category !== 'Semua' ? `&category=${category}` : ''}`}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${pagination.page === pageNum ? 'bg-[#0B1F3B] text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'}`}
                >
                  {pageNum}
                </Link>
              );
            })}

            <Link 
              href={`/berita?page=${pagination.page + 1}${q ? `&q=${q}` : ''}${category !== 'Semua' ? `&category=${category}` : ''}`}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${pagination.page >= pagination.totalPages ? 'text-gray-300 pointer-events-none' : 'text-gray-500 hover:bg-gray-200'}`}
            >
              <ChevronRight size={20} />
            </Link>
          </div>
        )}
      </section>

      {/* Newsletter Subscription Banner */}
      <section className="bg-[#0B1F3B] py-20 border-t-4 border-[#C1121F]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 text-center">
            <Mail size={40} className="mx-auto text-[#D4AF37] mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">Berlangganan Newsletter STTB</h2>
            <p className="text-gray-300 mb-10 max-w-xl mx-auto">
              Dapatkan pembaruan terkini seputar berita kampus, artikel teologi, dan jadwal kegiatan langsung di kotak masuk email Anda.
            </p>
            
            <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto" action="#">
              <input 
                type="text" 
                placeholder="Nama Lengkap" 
                className="flex-1 px-5 py-4 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                required
              />
              <input 
                type="email" 
                placeholder="Alamat Email" 
                className="flex-1 px-5 py-4 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                required
              />
              <button 
                type="submit"
                className="bg-[#D4AF37] hover:bg-[#b5952f] text-[#0B1F3B] px-8 py-4 rounded-xl font-bold transition-colors whitespace-nowrap shadow-lg"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-6">
              Kami menjaga privasi Anda. Tidak ada spam.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
