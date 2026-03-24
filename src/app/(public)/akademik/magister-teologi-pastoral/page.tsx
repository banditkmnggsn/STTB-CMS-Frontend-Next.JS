import { ProgramHero } from '@/components/shared/ProgramHero';
import { GraduateProfile } from '@/components/shared/GraduateProfile';
import { AcademicInfo } from '@/components/shared/AcademicInfo';
import { CurriculumAccordion } from '@/components/shared/CurriculumAccordion';
import { CareerOpportunities } from '@/components/shared/CareerOpportunities';
import { CTASection } from '@/components/shared/CTASection';
import { SEO } from '@/components/shared/SEO';

export default async function MagisterTeologiPastoralPage() {
  
  const coreCourses = [
    { name: 'Pandangan Reformed tentang Peran Gereja Dalam Transformasi Masyarakat', sks: 3 },
    { name: 'Gereja Perkotaan', sks: 3 },
    { name: 'Sosiologi dan Misi Perkotaan', sks: 3 },
    { name: 'Sejarah Gereja dalam Perspektif Transformasi Sosial Budaya', sks: 3 },
    { name: 'Kehidupan Spiritual Seorang Gembala', sks: 3 }
  ];

  const concentrationCourses = [
    { name: 'Homiletika Lanjutan', sks: 3 },
    { name: 'Pengembangan Gereja', sks: 3 },
    { name: 'Kepemimpinan & Manajemen Perubahan', sks: 3 },
    { name: 'Isu-Isu Kontemporer Etika Kristen', sks: 3 },
    { name: 'Pelayanan Antar Generasi', sks: 3 },
    { name: 'Konseling Pastoral', sks: 3 }
  ];
  
  const electiveCourses = [
    { name: 'Elektif: Pelayanan Kategorial 1', sks: 3 },
    { name: 'Elektif: Pelayanan Kategorial 2', sks: 3 }
  ];
  
  const researchAndFinalCourses = [
    { name: 'Penulisan Akademik', sks: 3 },
    { name: 'Riset Praktis Dalam Pelayanan Pastoral (Kualitatif)', sks: 3 },
    { name: 'Praktik Pelayanan Weekend', sks: 3 },
    { name: 'Praktik Pelayanan 6 Bulan / Tugas Akhir Penelitian', sks: 6 }
  ];
  
  const mentoringCourses = [
    { name: 'Mentoring Akademik', sks: 1 },
    { name: 'Mentoring Spiritual I-Learn', sks: 1 }
  ];
  
  const fullCurriculum = [
    {
      title: 'Mata Kuliah Inti',
      description: 'Mata kuliah dasar untuk membangun fondasi pemahaman tentang gereja dalam transformasi masyarakat and konteks perkotaan.',
      sks: 15,
      courses: coreCourses,
      variant: 'red' as const
    },
    {
      title: 'Mata Kuliah Konsentrasi',
      description: 'Fokus pada keahlian pelayanan pastoral urban, seperti homiletika lanjutan, manajemen perubahan, and konseling pastoral.',
      sks: 18,
      courses: concentrationCourses,
      variant: 'blue' as const
    },
    {
      title: 'Mata Kuliah Elektif',
      description: 'Mata kuliah pilihan (Pelayanan Kategorial) yang dapat diambil dari program studi lain.',
      sks: 6,
      courses: electiveCourses,
      variant: 'red' as const
    },
    {
      title: 'Penelitian & Tugas Akhir',
      description: 'Mencakup riset praktis, penulisan akademik, serta praktik pelayanan lapangan and penyusunan tugas akhir.',
      sks: 15,
      courses: researchAndFinalCourses,
      variant: 'blue' as const
    },
    {
      title: 'Mentoring',
      description: 'Bimbingan akademik and spiritual per semester untuk mendukung formasi mahasiswa.',
      sks: 2,
      courses: mentoringCourses,
      variant: 'red' as const
    }
  ];

  const careers = [
    'Pastor / Gembala Sidang Gereja Urban',
    'Pemimpin Organisasi Parachurch',
    'Konselor Pastoral',
    'Penggerak Misi Perkotaan',
    'Peneliti / Akademisi Teologi Praktika'
  ];
  
  return (
    <>
      <SEO title="Magister Teologi Pelayanan Pastoral - STTB" />
      <ProgramHero
        title="MAGISTER TEOLOGI PELAYANAN PASTORAL GEREJA URBAN"
        degree="M.Th. (Magister Teologi)"
        description="Program studi ini ditujukan untuk memperlengkapi rohaniwan dengan landasan teologis Reformed untuk menerapkan misi yang integral dalam pelayanan pastoral mereka di dalam gereja and konteks perkotaan."
        backgroundImage="https://images.unsplash.com/photo-1738949538943-e54722a44ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      />

      <GraduateProfile />

      <AcademicInfo
        totalSks="56 SKS"
        duration="2 Tahun"
        system="Kuliah dalam bentuk block teaching secara daring and luring. Dalam 1 semester rata-rata terdapat 3 mata kuliah online and 1 mata kuliah onsite."
        requirements="Lulusan S.Th./M.Div./M.Min. dari sekolah terakreditasi, atau lulusan S1 umum (wajib matrikulasi). Terlibat pelayanan min. 2 tahun. Menyerahkan paper akademik min. 15 halaman."
        additionalInfo="Lulusan S1 umum wajib mengikuti kuliah matrikulasi kelas teologi (86 SKS) selama 2 tahun pertama sebelum melanjutkan ke mata kuliah fondasi and inti. Profil lulusan adalah 'Transformative Pastor-Scholar'."
      />

      <CurriculumAccordion categories={fullCurriculum} />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white p-8 rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold text-[#0B1F3B] mb-4">Catatan Perkuliahan & Matrikulasi:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Mahasiswa wajib menyelesaikan total 56 SKS (untuk jalur linear).</li>
              <li>• Mata kuliah fondasi and inti dilakukan secara intensif pada hari Senin-Jumat (08.00 - 17.00).</li>
              <li>• Lulusan S1 non-teologi diwajibkan mengikuti program M.Min. (Teologi and Pelayanan Gerejawi) terlebih dahulu sebagai matrikulasi.</li>
              <li>• Pada 6 bulan terakhir, mahasiswa akan menjalani praktik pelayanan (6 SKS) atau penyusunan tugas akhir penelitian.</li>
            </ul>
          </div>
        </div>
      </section>

      <CareerOpportunities careers={careers} />

      <CTASection
        title="Siap Mengembangkan Pelayanan Pastoral Anda?"
        description="Daftar ke Program Magister Teologi (M.Th.) STTB and perlengkapi diri Anda untuk merespons tantangan gereja urban secara relevan and alkitabiah."
        primaryButton={{
          text: 'Daftar Sekarang',
          link: '/admisi'
        }}
        secondaryButton={{
          text: 'Konsultasi',
          link: '/kontak'
        }}
      />
    </>
  );
}
