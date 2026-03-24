import { Calendar, ArrowLeft, User, Share2 } from 'lucide-react';
import Link from 'next/link';
import { fetchPublicData } from '@/lib/api';
import { SEO } from '@/components/shared/SEO';

interface BeritaDetailPageProps {
  params: {
    slug: string;
  };
}

async function getArticleData(slug: string) {
  try {
    const [articleResponse, relatedResponse] = await Promise.all([
      fetchPublicData(`/news/${slug}`),
      fetchPublicData(`/news?limit=4`)
    ]);
    
    return {
      article: articleResponse || null,
      relatedArticles: (relatedResponse.items || []).filter((a: any) => a.slug !== slug).slice(0, 2)
    };
  } catch (error) {
    console.error('Failed to load news detail:', error);
    return { article: null, relatedArticles: [] };
  }
}

export default async function BeritaDetailPage({ params }: BeritaDetailPageProps) {
  const { slug } = params;
  const { article, relatedArticles } = await getArticleData(slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA]">
        <div className="text-center bg-white p-12 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-4xl font-bold font-serif text-[#0B1F3B] mb-4">Artikel Tidak Ditemukan</h1>
          <p className="text-gray-500 mb-8">Maaf, artikel yang Anda cari tidak dapat ditemukan atau telah dihapus.</p>
          <Link href="/berita" className="inline-flex items-center gap-2 bg-[#0B1F3B] hover:bg-[#2E90FF] text-white px-8 py-3.5 rounded-full font-bold transition-colors shadow-md">
            <ArrowLeft size={18} /> Kembali ke Daftar Berita
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString?: string): string => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
    } catch {
      return dateString || '';
    }
  };

  const publishDate = formatDate(article.publishDate || article.date);
  const featureImageUrl = article.featuredImage || article.image || 'https://images.unsplash.com/photo-1568667256531-7d5ac92eaa7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-20">
      <SEO 
        title={`${article.title} - STTB`}
        description={article.excerpt}
        ogImage={featureImageUrl}
        path={`/berita/${article.slug}`}
        ogType="article"
      />

      {/* Hero Image Section */}
      <div className="relative h-[450px] md:h-[550px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${featureImageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B] via-[#0B1F3B]/60 to-transparent" />
        
        <div className="relative h-full container mx-auto px-4 flex items-end pb-16">
          <div className="max-w-4xl">
            <div className="mb-6">
              <span className="inline-block bg-[#D4AF37] text-[#0B1F3B] px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-md">
                {typeof article.category === 'object' ? article.category?.name : article.category || 'Berita'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-300 font-medium">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar size={18} className="text-[#D4AF37]" />
                <time dateTime={article.publishDate || article.date}>{publishDate}</time>
              </div>
              {article.author && (
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <User size={18} className="text-[#D4AF37]" />
                  <span>{article.author}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Article Content Layout */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          
          {/* Main Content Area */}
          <article className="flex-grow bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            {/* Back Button */}
            <Link 
              href="/berita" 
              className="inline-flex items-center gap-2 text-gray-500 hover:text-[#C1121F] font-bold mb-10 transition-colors bg-gray-50 hover:bg-red-50 px-6 py-3 rounded-full"
            >
              <ArrowLeft size={18} /> Kembali ke Daftar Berita
            </Link>

            {/* Article Body HTML */}
            {article.content ? (
              <div 
                className="prose prose-lg max-w-none
                  prose-headings:text-[#0B1F3B] prose-headings:font-serif
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:pb-4 prose-h2:border-gray-100
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                  prose-ul:my-6 prose-ul:space-y-2 prose-li:text-gray-700
                  prose-strong:text-[#0B1F3B]
                  prose-blockquote:border-l-4 prose-blockquote:border-[#D4AF37] prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:italic prose-blockquote:text-gray-600 prose-blockquote:rounded-r-lg
                  prose-img:rounded-2xl prose-img:shadow-md
                  prose-a:text-[#2E90FF] prose-a:font-semibold hover:prose-a:text-[#0B1F3B] hover:prose-a:underline transition-colors"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            ) : (
              <div className="text-lg text-gray-700 leading-relaxed font-medium">
                {article.excerpt || "Konten belum tersedia."}
              </div>
            )}

            {/* Share Section - Simplified for SSR, client interactive parts would need a client component */}
            <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold font-serif text-[#0B1F3B]">Bagikan Artikel Ini</h3>
              <p className="text-sm text-gray-500 italic">Salin tautan ini untuk membagikan: {article.slug}</p>
            </div>
          </article>

          {/* Sidebar Area */}
          <aside className="lg:w-96 flex-shrink-0 space-y-8">
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 sticky top-24">
              <h3 className="text-2xl font-bold font-serif text-[#0B1F3B] mb-8 pb-4 border-b border-gray-100">Berita Terkait</h3>
              
              <div className="flex flex-col gap-6">
                {relatedArticles.length > 0 ? (
                  relatedArticles.map((relatedArticle: any) => (
                    <Link 
                      key={relatedArticle.slug}
                      href={`/berita/${relatedArticle.slug}`}
                      className="group flex gap-4 items-center p-3 -mx-3 rounded-2xl hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-gray-200">
                        <img 
                          src={relatedArticle.featuredImage || relatedArticle.image || 'https://images.unsplash.com/photo-1594750852829-7b6e81f42ba1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'} 
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <p className="text-xs text-[#C1121F] font-bold mb-1 uppercase tracking-wider">{typeof relatedArticle.category === 'object' ? relatedArticle.category?.name : relatedArticle.category || 'Berita'}</p>
                        <h4 className="font-bold font-serif text-[#0B1F3B] group-hover:text-[#2E90FF] transition-colors line-clamp-2 leading-tight">
                          {relatedArticle.title}
                        </h4>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm">Belum ada berita terkait.</p>
                )}
              </div>

              <Link href="/berita" className="block text-center w-full mt-8 bg-gray-50 hover:bg-gray-100 text-[#0B1F3B] font-bold py-3 rounded-xl transition-colors">
                Lihat Semua Berita
              </Link>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
