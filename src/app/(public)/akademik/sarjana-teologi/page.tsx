import { ProgramHero } from '@/components/shared/ProgramHero';
import { GraduateProfile } from '@/components/shared/GraduateProfile';
import { AcademicInfo } from '@/components/shared/AcademicInfo';
import { CurriculumAccordion } from '@/components/shared/CurriculumAccordion';
import { ConcentrationSection } from '@/components/shared/ConcentrationSection';
import { CareerOpportunities } from '@/components/shared/CareerOpportunities';
import { CTASection } from '@/components/shared/CTASection';
import { SEO } from '@/components/shared/SEO';

export default async function SarjanaTeologiPage() {
  const generalCourses = [
    { name: 'Pancasila Dan Kewarganegaraan', sks: 2 },
    { name: 'Bahasa Indonesia', sks: 2 },
    { name: 'Bahasa Inggris Teologi', sks: 3 },
    { name: 'Metode Berpikir', sks: 2 },
    { name: 'Psikologi Perkembangan Masa Hidup', sks: 2 },
    { name: 'Metode Penulisan & Penelitian', sks: 3 }
  ];

  const biblicalStudies = [
    { name: 'Pengantar Alkitab dan Teologi Biblika', sks: 3 },
    { name: 'Studi PL 1: Kitab Taurat', sks: 3 },
    { name: 'Studi PL 2: Kitab Sejarah', sks: 3 },
    { name: 'Studi PL 3: Kitab Sastra', sks: 3 },
    { name: 'Studi PL 4: Kitab Nabi-nabi', sks: 3 },
    { name: 'Studi PB 1: Kitab Injil', sks: 3 },
    { name: 'Studi PB 2: Kis Para Rasul & Surat Paulus', sks: 3 },
    { name: 'Studi PB3: Surat Umum & Wahyu', sks: 3 },
    { name: 'Hermeneutika Biblika', sks: 3 },
    { name: 'Bahasa Ibrani', sks: 3 },
    { name: 'Bahasa Yunani', sks: 2 },
    { name: 'Bahasa Yunani Lanjutan', sks: 2 }
  ];

  const theologicalStudies = [
    { name: 'Prolegomena & Doktrin Alkitab', sks: 3 },
    { name: 'Doktrin Allah, Penciptaan & Manusia', sks: 3 },
    { name: 'Doktrin Kristus, Dosa & Keselamatan', sks: 3 },
    { name: 'Doktrin Roh Kudus & Akhir Zaman', sks: 3 },
    { name: 'Doktrin Gereja', sks: 3 },
    { name: 'Apologetika', sks: 2 },
    { name: 'Etika Kristen', sks: 2 },
    { name: 'Teologi Reformed & Injili', sks: 3 }
  ];

  const historyAndCultureCourses = [
    { name: 'Sejarah Gereja Dunia', sks: 2 },
    { name: 'Sejarah Gereja Indonesia', sks: 2 },
    { name: 'Sejarah Teologi', sks: 3 },
    { name: 'Fenomenologi Agama', sks: 2 },
    { name: 'Iman & Kebudayaan', sks: 2 }
  ];
  
  const practicalCourses = [
    { name: 'Asuhan Kristen', sks: 2 },
    { name: 'Formasi Spiritualitas', sks: 2 },
    { name: 'Homiletika 1 (Khotbah Ekspositori)', sks: 3 },
    { name: 'Homiletika 2', sks: 3 },
    { name: 'Pelayanan Ibadah & Musik', sks: 3 },
    { name: 'Konseling Pastoral - Dasar', sks: 2 },
    { name: 'Konseling Pastoral - Pastoral Issues', sks: 2 },
    { name: 'Misiologi', sks: 3 },
    { name: 'Pelayanan Penggembalaan', sks: 2 },
    { name: 'Kepemimpinan Kristen & Manajemen Gereja', sks: 2 },
    { name: 'Perintisan & Pengembangan Gereja', sks: 2 },
    { name: 'Pelayanan Anak Transformatif', sks: 3 },
    { name: 'Pelayanan Kaum Muda Transformatif', sks: 3 },
    { name: 'Pelayanan Orang Dewasa', sks: 3 },
    { name: 'Pemuridan Transformatif', sks: 3 },
    { name: 'Perancangan Kurikulum & Program Pembinaan', sks: 2 },
    { name: 'Media Pembelajaran & Teknologi Pendidikan', sks: 2 }
  ];
  
  const concentrations = [
    {
      title: 'Pemuridan & Misi',
      description: 'Mempersiapkan mahasiswa menjadi penggerak misi yang dapat membawa umat ke dalam keterlibatan strategis dan merancang pembinaan jemaat.',
      courses: [
        'Gereja & Pengembangan Masyarakat (3 SKS)',
        'Mobilisasi Misi (3 SKS)',
        'Perancangan Kurikulum Pemuridan di Gereja (3 SKS)'
      ]
    },
    {
      title: 'Pelayanan Anak Holistik',
      description: 'Memperlengkapi mahasiswa merancang pelayanan anak dengan fondasi teologis yang kuat, dinamis, dan transformatif dalam konteks urban.',
      courses: [
        'Spiritualitas Anak (3 SKS)',
        'Perancangan Pelayanan Anak Urban (3 SKS)',
        'Pendidikan Anak Integral (3 SKS)'
      ]
    }
  ];
  
  const concentrationsCourses = [
    { name: 'Pemuridan & Misi / Pelayanan Anak Holistik', sks: 9 },
  ];

  const FieldPracticalCourses = [
    { name: 'Praktik Pelayanan Media 1', sks: 0 },
    { name: 'Praktik Pelayanan Media 2', sks: 0 },
    { name: 'Praktik Pelayanan Akhir Pekan 1', sks: 0 },
    { name: 'Praktik Pelayanan Akhir Pekan 2', sks: 0 },
    { name: 'Praktik Pelayanan Akhir Pekan 3', sks: 0 },
    { name: 'Praktik Pelayanan Akhir Pekan 4', sks: 0 },
    { name: 'Praktik Pelayanan Akhir Pekan 5', sks: 0 },
    { name: 'Praktik Pelayanan Misi', sks: 1 },
    { name: 'Praktik Pelayanan 2,5 Bulan', sks: 2 },
    { name: 'Praktik Pelayanan 6 Bulan', sks: 6 }
  ];

  const FinalTasks = [
    { name: 'Penulisan Artikel Jurnal', sks: 3 },
    { name: 'Proyek Merancang Program Pembinaan', sks: 3 }
  ];

  const fullCurriculum = [
    {
      title: 'Mata Kuliah Umum',
      description: 'Mata kuliah dasar yang membentuk pemikiran kebangsaan, keterampilan bahasa, logika, dan metode penelitian.',
      sks: 14,
      courses: generalCourses,
      variant: 'red' as const
    },
    {
      title: 'Studi Biblika',
      description: 'Studi komprehensif terhadap Alkitab, bahasa asli (Ibrani dan Yunani), serta hermeneutika biblika.',
      sks: 34,
      courses: biblicalStudies,
      variant: 'blue' as const
    },
    {
      title: 'Studi Teologi',
      description: 'Pemahaman mendalam tentang doktrin-doktrin utama kekristenan, apologetika, etika, dan teologi Reformed & Injili.',
      sks: 23,
      courses: theologicalStudies,
      variant: 'red' as const
    },
    {
      title: 'Sejarah & Budaya',
      description: 'Mempelajari sejarah gereja dunia dan Indonesia, sejarah teologi, fenomenologi agama, serta iman dan kebudayaan.',
      sks: 11,
      courses: historyAndCultureCourses,
      variant: 'blue' as const
    },
    {
      title: 'Praktika',
      description: 'Keterampilan praktis pelayanan termasuk homiletika, konseling, misiologi, kepemimpinan, dan pelayanan transformatif.',
      sks: 42,
      courses: practicalCourses,
      variant: 'blue' as const
    },
    {
      title: 'Konsentrasi',
      description: 'PenMata kuliah spesialisasi yang dipilih sesuai panggilan pelayanan (Pemuridan & Misi atau Pelayanan Anak Holistik).',
      sks: 9,
      courses: concentrationsCourses,
      variant: 'red' as const
    },
    {
      title: 'Praktik Lapangan',
      description: 'Praktik pelayanan nyata secara berjenjang hingga praktik pelayanan 6 bulan secara intensif.',
      sks: 9,
      courses: FieldPracticalCourses,
      variant: 'blue' as const
    },
    {
      title: 'Tugas Akhir',
      description: 'Penulisan artikel jurnal and penyusunan proyek merancang program pembinaan jemaat.',
      sks: 6,
      courses: FinalTasks,
      variant: 'red' as const
    }
  ];

  const careers = [
    'Rohaniwan Penuh Waktu',
    'Pendeta / Gembala Sidang',
    'Penginjil / Misionaris',
    'Pemimpin Lembaga Pelayanan Kristen',
    'Pemimpin Pelayanan Anak',
    'Pemimpin Pelayanan Kaum Muda',
    'Pendidik Teologi',
    'Perancang Kurikulum Pembinaan Jemaat'
  ];

  return (
    <>
      <SEO title="Sarjana Teologi - STTB" />
      <ProgramHero
        title="SARJANA TEOLOGI"
        degree="S.Th (Sarjana Teologi)"
        description="Program studi Sarjana Teologi ditujukan untuk memperlengkapi mereka yang terpanggil untuk melayani sebagai rohaniwan penuh waktu di gereja, lembaga pelayanan, maupun ladang misi."
        backgroundImage="https://images.unsplash.com/photo-1575581535069-f9ef30a209b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      />

      <GraduateProfile />

      <AcademicInfo
        totalSks="148 SKS"
        duration="4 Tahun Full-Time"
        system="Perkuliahan dilakukan secara blok teaching (3 minggu + minggu tugas). Berlangsung selama 7 semester and dilanjut praktik pelayanan selama 6 bulan."
        requirements="Minimal lulusan SMA/sederajat. Terlibat pelayanan gerejawi/lembaga Kristen min. 2 tahun. Memiliki panggilan jelas sebagai rohaniwan penuh waktu, serta mampu memahami teks bahasa Inggris."
        additionalInfo="Profil Lulusan yang dituju adalah 'Transformative Pastor-Scholar': Berpengetahuan luas, memiliki fondasi spiritualitas kokoh, karakter yang matang, serta berdampak bagi jemaat and lingkungan urban."/>

      <CurriculumAccordion categories={fullCurriculum} />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#0B1F3B] mb-4">Catatan Perkuliahan:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Mahasiswa wajib menyelesaikan total 148 SKS untuk lulus.</li>
              <li>• Masa studi normal: 3,5 tahun kuliah (7 semester) + 6 bulan praktik pelayanan.</li>
              <li>• Mahasiswa yang belum menikah wajib tinggal di asrama.</li>
              <li>• Tugas Akhir (6 SKS) dikerjakan dalam bentuk Artikel Jurnal (3 SKS) and Proyek (3 SKS).</li>
              <li>• Praktik Lapangan (9 SKS) dilakukan secara bertahap mulai dari pelayanan media, akhir pekan, misi, hingga praktik 6 bulan.</li></ul>
          </div>
        </div>
      </section>

      <ConcentrationSection concentrations={concentrations} />

      <CareerOpportunities careers={careers} />

      <CTASection
        title="Siap Memulai Perjalanan Teologi Anda?"
        description="Bergabunglah dengan Program Sarjana Teologi STTB and kembangkan potensi pelayanan Anda"
        primaryButton={{
          text: 'Daftar Sekarang',
          link: '/admisi'
        }}
        secondaryButton={{
          text: 'Hubungi Admisi',
          link: '/kontak'
        }}
      />
    </>
  );
}
