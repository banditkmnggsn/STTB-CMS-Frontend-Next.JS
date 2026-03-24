import { ProgramHero } from '@/components/shared/ProgramHero';
import { GraduateProfile } from '@/components/shared/GraduateProfile';
import { AcademicInfo } from '@/components/shared/AcademicInfo';
import { CurriculumAccordion } from '@/components/shared/CurriculumAccordion';
import { CareerOpportunities } from '@/components/shared/CareerOpportunities';
import { CTASection } from '@/components/shared/CTASection';
import { SEO } from '@/components/shared/SEO';

export default async function SarjanaPendidikanKristenPage() {
  const generalCourses = [
    { name: 'Pancasila & Kewarganegaraan', sks: 2 },
    { name: 'Bahasa Indonesia', sks: 2 },
    { name: 'Bahasa Inggris Teologi', sks: 3 },
    { name: 'Psikologi Perkembangan Masa Hidup', sks: 2 },
    { name: 'Metode Penulisan & Penelitian', sks: 3 }
  ];
  
  const biblicalStudies = [
    { name: 'Studi PL 1: Kitab Taurat', sks: 3 },
    { name: 'Studi PL 2: Kitab Sejarah', sks: 3 },
    { name: 'Studi PL 3: Kitab Sastra', sks: 3 },
    { name: 'Studi PL 4: Kitab Nabi-nabi', sks: 3 },
    { name: 'Studi PB 1: Kitab Injil', sks: 3 },
    { name: 'Studi PB 2: Kisah Para Rasul & Surat Paulus', sks: 3 },
    { name: 'Studi PB 3: Surat Umum & Wahyu', sks: 3 },
    { name: 'Bahasa Ibrani', sks: 3 },
    { name: 'Bahasa Yunani', sks: 2 },
    { name: 'Hermeneutika Biblika', sks: 3 }
  ];

  const theologicalStudies = [
    { name: 'Prolegomena & Doktrin Alkitab', sks: 3 },
    { name: 'Doktrin Allah Penciptaan & Manusia', sks: 3 },
    { name: 'Doktrin Kristus, Dosa & Keselamatan', sks: 3 },
    { name: 'Doktrin Roh Kudus & Akhir Zaman', sks: 3 },
    { name: 'Doktrin Gereja', sks: 3 },
    { name: 'Apologetika', sks: 3 },
    { name: 'Etika Kristen', sks: 2 }
  ];

  const historyAndCultureCourses = [
    { name: 'Sejarah & Filosofi Pendidikan Kristen', sks: 3 }
  ];

  const educationAndPracticalCourses = [
    { name: 'Teologi Asuhan Kristen', sks: 2 },
    { name: 'Formasi Spiritualitas', sks: 2 },
    { name: 'Pelayanan Ibadah & Musik', sks: 3 },
    { name: 'Homiletika 1', sks: 3 },
    { name: 'Homiletika 2', sks: 3 },
    { name: 'Konseling Pastoral 1 - Dasar Konseling', sks: 2 },
    { name: 'Konseling Pastoral 2 - Praktik Konseling Sekolah', sks: 3 },
    { name: 'Pemuridan Transformatif', sks: 3 },
    { name: 'Pelayanan Anak Transformatif', sks: 3 },
    { name: 'Pelayanan Kaum Muda Transformatif', sks: 3 },
    { name: 'Pelayanan Orang Tua Transformatif', sks: 3 },
    { name: 'Introduksi Pendidikan Kristen', sks: 2 },
    { name: 'Psikologi Pendidikan Kristen', sks: 3 },
    { name: 'Teologi Pendidikan Kristen', sks: 2 },
    { name: 'Pendidikan Kristen', sks: 2 },
    { name: 'Integrasi Iman & Ilmu', sks: 3 },
    { name: 'Integrasi Teologi and Spiritualitas Anak and Remaja', sks: 3 },
    { name: 'Kurikulum Pendidikan Kristen', sks: 3 },
    { name: 'Perencanaan & Evaluasi Pembelajaran', sks: 3 },
    { name: 'Strategi Pembelajaran', sks: 3 },
    { name: 'Media & Teknologi Pembelajaran', sks: 2 },
    { name: 'Manajemen / Administrasi Pendidikan', sks: 3 },
    { name: 'Micro Teaching 1', sks: 2 },
    { name: 'Micro Teaching 2', sks: 4 }
  ];

  const FieldPracticalCourses = [
    { name: 'Praktik Pelayanan Media 1', sks: 0 },
    { name: 'Praktik Pelayanan Media 2', sks: 0 },
    { name: 'Praktik Pelayanan Akhir Pekan 1', sks: 0 },
    { name: 'Praktik Pelayanan Akhir Pekan 2', sks: 0 },
    { name: 'Praktik Pelayanan Misi', sks: 1 },
    { name: 'Praktik Pelayanan 1 Tahun', sks: 8 }
  ];

  const FinalTasks = [
    { name: 'Penulisan Artikel Jurnal', sks: 3 },
    { name: 'Proyek Merancang Program Pembinaan', sks: 4 }
  ];

  const fullCurriculum = [
    {
      title: 'Mata Kuliah Dasar Umum',
      description: 'Mata kuliah dasar yang membentuk pemikiran kebangsaan, keterampilan bahasa, and metode penelitian.',
      sks: 12,
      courses: generalCourses,
      variant: 'red' as const
    },
    {
      title: 'Studi Biblika',
      description: 'Studi komprehensif terhadap Alkitab, bahasa asli (Ibrani and Yunani), serta hermeneutika biblika.',
      sks: 29,
      courses: biblicalStudies,
      variant: 'blue' as const
    },
    {
      title: 'Studi Teologi',
      description: 'Pemahaman mendalam tentang doktrin-doktrin utama kekristenan, apologetika, and etika Kristen.',
      sks: 20,
      courses: theologicalStudies,
      variant: 'red' as const
    },
    {
      title: 'Studi Sejarah & Budaya',
      description: 'Mempelajari sejarah and filosofi dalam konteks Pendidikan Kristen.',
      sks: 3,
      courses: historyAndCultureCourses,
      variant: 'blue' as const
    },
    {
      title: 'Studi Pendidikan & Praktika',
      description: 'Fokus utama pada ilmu kependidikan, psikologi, kurikulum, strategi pembelajaran, hingga micro teaching and konseling pastoral.',
      sks: 65,
      courses: educationAndPracticalCourses,
      variant: 'red' as const
    },
    {
      title: 'Praktik Pelayanan',
      description: 'Pengalaman langsung melayani di sekolah atau gereja, mencakup pelayanan misi and praktik 1 tahun penuh.',
      sks: 9,
      courses: FieldPracticalCourses,
      variant: 'blue' as const
    },
    {
      title: 'Tugas Akhir',
      description: 'Penulisan artikel jurnal and penyusunan proyek merancang program pembinaan.',
      sks: 7,
      courses: FinalTasks,
      variant: 'red' as const
    }
  ];

  const careers = [
    'Guru / Pendidik Kristen',
    'Kepala Sekolah / Administrator Pendidikan',
    'Perancang Kurikulum Pendidikan',
    'Konselor Sekolah',
    'Pembina Rohani / Chaplain Sekolah',
    'Pendeta Anak & Remaja',
    'Pengurus Yayasan Pendidikan Kristen'
  ];

  return (
    <>
      <SEO title="Sarjana Pendidikan Kristen - STTB" />
      <ProgramHero
        title="SARJANA PENDIDIKAN KRISTEN"
        degree="S.Pd.K (Sarjana Pendidikan Kristen)"
        description="Program studi ini ditujukan untuk memperlengkapi mereka yang terpanggil menjadi pendidik Kristen yang akan melayani di sekolah, gereja, maupun di lembaga pelayanan lainnya, dalam konteks urban."
        backgroundImage="https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      />

      <GraduateProfile />

      <AcademicInfo
        totalSks="145 SKS"
        duration="4 Tahun Full Time"
        system="Perkuliahan dilakukan secara blok teaching (3 minggu + minggu tugas). Berlangsung selama 6 semester and dilanjut praktik pelayanan selama 1 tahun."
        requirements="Minimal lulusan SMA/sederajat. Sudah baptis dewasa/sidi. Terlibat pelayanan gerejawi/lembaga Kristen. Memiliki panggilan jelas sebagai pendidik Kristen penuh waktu."
        additionalInfo="Profil Lulusan yang dituju adalah 'Transformative Educator'. Dalam studinya, mahasiswa diwajibkan menjalani praktik tiga bulan, praktik satu tahun, youth camp and Mission Education & Exposure Training (MEET)."
      />

      <CurriculumAccordion categories={fullCurriculum} />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white p-8 rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold text-[#0B1F3B] mb-4">Catatan Perkuliahan & Praktik:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Mahasiswa wajib menyelesaikan total 145 SKS untuk lulus.</li>
              <li>• Masa studi: 3 tahun kuliah (6 semester) + 1 tahun praktik pelayanan di lapangan.</li>
              <li>• Lingkup tugas praktik meliputi pelayanan di sekolah Kristen, gereja, organisasi pendamping gereja, panti asuhan, atau lembaga rehabilitasi.</li>
              <li>• Pengalaman praktik mencakup mengajar, pelayanan sekolah minggu, pemuda-remaja, misi penginjilan, and administrasi pendidikan.</li>
              <li>• Tugas Akhir (7 SKS) dikerjakan dalam bentuk Artikel Jurnal (3 SKS) and Proyek (4 SKS).</li>
            </ul>
          </div>
        </div>
      </section>

      <CareerOpportunities careers={careers} />

      <CTASection
        title="Terpanggil Menjadi Pendidik yang Transformatif?"
        description="Bergabunglah dengan Program Sarjana Pendidikan Kristen STTB and persiapkan diri Anda untuk mencerdaskan and membentuk karakter generasi masa depan."
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
