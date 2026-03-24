import { ProgramHero } from '@/components/shared/ProgramHero';
import { GraduateProfile } from '@/components/shared/GraduateProfile';
import { AcademicInfo } from '@/components/shared/AcademicInfo';
import { CurriculumAccordion } from '@/components/shared/CurriculumAccordion';
import { CareerOpportunities } from '@/components/shared/CareerOpportunities';
import { CTASection } from '@/components/shared/CTASection';
import { SEO } from '@/components/shared/SEO';

export default async function MagisterTeologiTransformasiPage() {
  
  const coreCourses = [
    { name: 'Pandangan Reformed tentang Peran Gereja Dalam Transformasi Masyarakat', sks: 3 },
    { name: 'Gereja Perkotaan', sks: 3 },
    { name: 'Sosiologi dan Misi Perkotaan', sks: 3 },
    { name: 'Sejarah Gereja Dalam Perspektif Tranformasi Sosial Budaya', sks: 3 },
    { name: 'Kehidupan Spiritual Seorang Gembala', sks: 3 }
  ];
  
  const concentrationCourses = [
    { name: 'Perspektif Teologi/Biblika Tentang Kemiskinan', sks: 3 },
    { name: 'Perspektif Teologi/Biblika Tentang Dunia Kerja Dan Perekonomian', sks: 3 },
    { name: 'Perspektif Teologi/Biblika Tentang Ekologi', sks: 3 },
    { name: 'Perspektif Teologi/Biblika Tentang Keadilan Dan Kekuasaan', sks: 3 },
    { name: 'Perspektif Teologi/Biblika Tentang Kemajemukan/Pluralisme', sks: 3 },
    { name: 'Pelayanan Antar Generasi', sks: 3 }
  ];
  
  const electiveCourses = [
    { name: 'Elektif 1', sks: 3 },
    { name: 'Elektif 2', sks: 3 }
  ];
  
  const researchAndFinalCourses = [
    { name: 'Penulisan Ilmiah Akademik', sks: 3 },
    { name: 'Seminar Riset', sks: 3 },
    { name: 'Proposal', sks: 3 },
    { name: 'Tesis', sks: 6 }
  ];
  
  const mentoringCourses = [
    { name: 'Mentoring Akademik', sks: 1 },
    { name: 'Mentoring Spiritual I-Learn', sks: 1 }
  ];
  
  const fullCurriculum = [
    {
      title: 'Mata Kuliah Inti',
      description: 'Mata kuliah dasar untuk memahami peran gereja dalam transformasi masyarakat and dinamika sosiologi perkotaan.',
      sks: 15,
      courses: coreCourses,
      variant: 'red' as const
    },
    {
      title: 'Mata Kuliah Konsentrasi',
      description: 'Studi mendalam tentang perspektif teologi and biblika terhadap isu-isu sosial seperti kemiskinan, ekologi, keadilan, and pluralisme.',
      sks: 18,
      courses: concentrationCourses,
      variant: 'blue' as const
    },
    {
      title: 'Mata Kuliah Elektif',
      description: 'Mata kuliah pilihan yang dapat diambil dari program studi magister lain untuk memperkaya wawasan mahasiswa.',
      sks: 6,
      courses: electiveCourses,
      variant: 'red' as const
    },
    {
      title: 'Penelitian & Tugas Akhir',
      description: 'Mencakup penulisan ilmiah akademik, seminar riset, penyusunan proposal, and penulisan Tesis.',
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
    'Peneliti / Akademisi Teologi Publik',
    'Pemimpin Lembaga Sosial / NGO Kristen',
    'Pastor / Gembala Sidang',
    'Aktivis Transformasi Sosial / Kebudayaan',
    'Penulis / Pemikir Kristen Kontemporer',
    'Konsultan Etika Kristen'
  ];
  
  return (
    <>
      <SEO title="Magister Teologi Transformasi Budaya - STTB" />
      <ProgramHero
        title="MAGISTER TEOLOGI TRANSFORMASI BUDAYA & MASYARAKAT"
        degree="M.Th. (Magister Teologi)"
        description="Program pascasarjana untuk memperlengkapi rohaniwan dengan landasan Teologi Reformed guna menerapkan peran gereja dalam melakukan transformasi budaya and masyarakat di konteks perkotaan."
        backgroundImage="https://images.unsplash.com/photo-1602582646830-a54bdf985894?q=80&w=657&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              <li>• Lulusan S1 non-teologi diwajibkan mengikuti program matrikulasi (Teologi and Pelayanan Gerejawi) secara reguler sebelum mengambil mata kuliah inti.</li>
              <li>• Mata kuliah fondasi and inti dilakukan secara intensif pada hari Senin-Jumat (08.00 - 17.00).</li>
              <li>• Mahasiswa dapat mengajukan proposal tesis (6 SKS) setelah menyelesaikan minimal 70% dari jumlah SKS yang ditetapkan.</li>
            </ul>
          </div>
        </div>
      </section>

      <CareerOpportunities careers={careers} />

      <CTASection
        title="Terpanggil untuk Membawa Transformasi Sosial?"
        description="Daftar ke Program Magister Teologi (M.Th.) Transformasi Budaya & Masyarakat STTB and perlengkapi diri Anda untuk memberikan dampak alkitabiah di tengah dunia."
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
