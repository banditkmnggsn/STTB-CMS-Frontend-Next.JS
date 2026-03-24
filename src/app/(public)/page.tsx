import { GraduationCap, Users, BookOpen, Award, Heart, Target } from 'lucide-react';
import Link from 'next/link';
import { fetchAllPrograms, fetchNews } from '@/lib/api';

import { LayeredHero } from '@/components/shared/LayeredHero';
import { MaskedStatsSection } from '@/components/shared/MaskedStatsSection';
import { ProgramShowcase } from '@/components/shared/ProgramShowcase';
import { LayeredSection } from '@/components/shared/LayeredSection';
import { CTASection } from '@/components/shared/CTASection';
import { SEO } from '@/components/shared/SEO';
import { NewsCard } from '@/components/shared/NewsCard';

export default async function HomePage() {
  let programs = [];
  let newsArticles = [];

  try {
    const [programsData, newsData] = await Promise.all([
      fetchAllPrograms(),
      fetchNews({ limit: 3, status: 'published' })
    ]);

    programs = programsData || [];
    newsArticles = newsData?.items || [];
  } catch (error) {
    console.error('Failed to load home page data:', error);
  }

  const stats = [
    {
      icon: GraduationCap,
      value: '7',
      label: 'Program Studi',
      description: 'Beragam pilihan program sarjana dan magister'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Mahasiswa Aktif',
      description: 'Komunitas belajar yang dinamis'
    },
    {
      icon: BookOpen,
      value: '50+',
      label: 'Dosen Berkualitas',
      description: 'Tenaga pengajar berpengalaman'
    },
    {
      icon: Award,
      value: 'Terakreditasi',
      label: 'BAN-PT',
      description: 'Standar pendidikan tinggi nasional'
    }
  ];

  return (
    <>
      <SEO 
        title="STTB - Sekolah Tinggi Teologi Bandung"
        description="Sekolah Tinggi Teologi Bandung (STTB) menyediakan program Sarjana dan Magister Teologi untuk mempersiapkan pemimpin gereja yang informed, transformed, dan transformative."
        ogImage="https://images.unsplash.com/photo-1772033282500-c85fde65d6fd?w=1200&h=630&fit=crop"
        path="/"
      />

      {/* Hero Section with Layered Design */}
      <LayeredHero
        title="Membentuk Pemimpin Rohani Masa Depan"
        subtitle="STTB Bandung"
        description="Pendidikan Teologi Berkualitas dengan Komitmen pada Keunggulan Akademik dan Spiritualitas. Bergabunglah dengan komunitas akademik yang berkomitmen menghasilkan pemimpin rohani yang Informed, Transformed, dan Transformative."
        primaryButton={{
          text: 'Daftar Sekarang',
          link: '/admisi'
        }}
        secondaryButton={{
          text: 'Lihat Program',
          link: '/program/sarjana-teologi'
        }}
        backgroundImage="https://images.unsplash.com/photo-1772033282500-c85fde65d6fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      />

      {/* Stats Section with Masked Cards */}
      <MaskedStatsSection
        title="STTB dalam Angka"
        subtitle="Lebih dari 50 tahun menghasilkan pemimpin rohani berkualitas"
        stats={stats}
        backgroundImage="https://images.unsplash.com/photo-1765248150496-cd10e83395b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      />

      {/* Programs Showcase with Curved Masks */}
      <ProgramShowcase
        title="Program Studi"
        subtitle="Pilih program studi yang sesuai dengan panggilan dan visi pelayanan Anda"
        programs={programs.map((p: any) => ({
          title: p.title,
          degree: p.degree,
          description: p.shortDescription || p.description,
          link: `/program/${p.slug}`,
          image: p.heroImage || p.image || 'https://images.unsplash.com/photo-1595315342809-fa10945ed07c'
        }))}
        backgroundImage="https://images.unsplash.com/photo-1595315342809-fa10945ed07c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      />

      {/* Why Choose Us - Layered Section */}
      <LayeredSection
        backgroundImage="https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        variant="center"
        overlay="light"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3B] mb-4">
            Mengapa Memilih STTB?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Komitmen kami adalah menghasilkan lulusan yang tidak hanya memiliki pengetahuan teologis yang kuat, 
            tetapi juga karakter rohani yang matang dan kemampuan untuk membawa transformasi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#C1121F] to-[#9A0E19] text-white rounded-2xl mb-6 shadow-lg">
              <BookOpen size={40} />
            </div>
            <h3 className="text-2xl font-bold text-[#0B1F3B] mb-3">Informed</h3>
            <p className="text-gray-700 leading-relaxed">
              Pembelajaran yang memadukan teori teologi dengan praktik pelayanan yang relevan dan kontekstual
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#2E90FF] to-[#1e7ff5] text-white rounded-2xl mb-6 shadow-lg">
              <Heart size={40} />
            </div>
            <h3 className="text-2xl font-bold text-[#0B1F3B] mb-3">Transformed</h3>
            <p className="text-gray-700 leading-relaxed">
              Pembentukan karakter rohani melalui mentoring, disiplin spiritual, dan kehidupan komunitas
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0B1F3B] to-[#071528] text-white rounded-2xl mb-6 shadow-lg">
              <Target size={40} />
            </div>
            <h3 className="text-2xl font-bold text-[#0B1F3B] mb-3">Transformative</h3>
            <p className="text-gray-700 leading-relaxed">
              Perlengkapan untuk membawa dampak transformasi bagi gereja, masyarakat, dan bangsa
            </p>
          </div>
        </div>
      </LayeredSection>

      {/* Facilities Section with Background Image */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(11, 31, 59, 0.75), rgba(11, 31, 59, 0.85)), url(https://images.unsplash.com/photo-1675295740364-320b831fd16e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080)`
          }}
        />
        
        <div className="relative container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image Cutout */}
            <div 
              className="h-[500px] rounded-3xl shadow-2xl overflow-hidden"
            >
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1613306760141-68395e377bb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080)'
                }}
              />
            </div>

            {/* Right: Content */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Fasilitas Modern untuk Pembelajaran Optimal
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C1121F] rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Perpustakaan Lengkap</h3>
                    <p className="text-gray-300">
                      Koleksi buku teologi, jurnal akademik, dan referensi terkini
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2E90FF] rounded-full flex items-center justify-center flex-shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Ruang Kelas Nyaman</h3>
                    <p className="text-gray-300">
                      Lingkungan belajar yang kondusif dengan teknologi modern
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C1121F] rounded-full flex items-center justify-center flex-shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Asrama Mahasiswa</h3>
                    <p className="text-gray-300">
                      Hunian yang nyaman untuk pembentukan karakter dan komunitas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3B] mb-4">
              Berita Terbaru
            </h2>
            <p className="text-xl text-gray-700">
              Informasi terkini seputar kegiatan dan acara di kampus STTB Bandung
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {newsArticles.slice(0, 3).map((article: any) => (
              <NewsCard
                key={article.slug}
                slug={article.slug}
                title={article.title}
                excerpt={article.excerpt}
                date={article.createdAt || article.publishDate || article.date}
                image={article.featuredImage || article.image}
                category={typeof article.category === 'object' ? article.category?.name : article.category}
              />
            ))}
            {/* Show a fallback if database is completely empty */}
            {newsArticles.length === 0 && (
              <p className="col-span-3 text-center text-gray-500 py-8">Belum ada berita yang dipublikasikan.</p>
            )}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/berita"
              className="inline-block bg-[#C1121F] hover:bg-[#9A0E19] text-white font-bold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg"
            >
              Lihat Semua Berita
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Siap Memulai Perjalanan Anda?"
        description="Bergabunglah dengan komunitas akademik kami dan kembangkan potensi Anda dalam pelayanan"
        primaryButton={{
          text: 'Daftar Sekarang',
          link: '/admisi'
        }}
        secondaryButton={{
          text: 'Hubungi Kami',
          link: '/kontak'
        }}
      />
    </>
  );
}
