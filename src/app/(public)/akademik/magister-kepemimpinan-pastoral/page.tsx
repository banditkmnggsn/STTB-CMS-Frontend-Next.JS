import { ProgramHero } from '@/components/shared/ProgramHero';
import { GraduateProfile } from '@/components/shared/GraduateProfile';
import { AcademicInfo } from '@/components/shared/AcademicInfo';
import { CurriculumAccordion } from '@/components/shared/CurriculumAccordion';
import { CareerOpportunities } from '@/components/shared/CareerOpportunities';
import { CTASection } from '@/components/shared/CTASection';
import { SEO } from '@/components/shared/SEO';

export default async function MagisterMinistriKepemimpinanPastoralPage() {
  
  const biblicalFoundationCourses = [
    { name: 'Hermeneutika (Advanced)', sks: 3 },
    { name: 'Revisit Fondasi Biblika (Metanarasi)', sks: 3 },
    { name: 'Revisit Fondasi Sistematika (Teologi Reformed)', sks: 3 }
  ];
  
  const coreCourses = [
    { name: 'Spiritualitas Pemimpin Gereja', sks: 3 },
    { name: 'Pemuridan Intensional Gereja', sks: 3 },
    { name: 'Misi Integral Gereja', sks: 3 },
    { name: 'Kepemimpinan Transformasional Gereja', sks: 3 },
    { name: 'Pembinaan Spiritualitas Tiap Fase Kehidupan', sks: 3 }
  ];
  
  const concentrationCourses = [
    { name: 'Teologi Pastoral', sks: 3 },
    { name: 'Khotbah Ekspositori (Advanced)', sks: 3 },
    { name: 'Ibadah Transformatif', sks: 3 }
  ];
  
  const electiveCourses = [
    { name: 'Perintisan dan Pertumbuhan Gereja (Timothy Institute)', sks: 3 },
    { name: 'Manajemen Perubahan dan Konflik', sks: 3 }
  ];
  
  const researchAndFinalCourses = [
    { name: 'Mentoring Pastoral', sks: 3 },
    { name: 'Tugas Akhir', sks: 6 }
  ];
  
  const fullCurriculum = [
    {
      title: 'Fondasi Biblika',
      description: 'Mempelajari Hermeneutika Advanced, Metanarasi Alkitab, and Teologi Reformed sebagai kerangka dasar pelayanan.',
      sks: 9,
      courses: biblicalFoundationCourses,
      variant: 'red' as const
    },
    {
      title: 'Mata Kuliah Inti',
      description: 'Fokus pada spiritualitas pemimpin, pemuridan, misi integral, and kepemimpinan transformasional di gereja urban.',
      sks: 15,
      courses: coreCourses,
      variant: 'blue' as const
    },
    {
      title: 'Mata Kuliah Konsentrasi',
      description: 'Studi mendalam mengenai Teologi Pastoral, Khotbah Ekspositori Advanced, and perancangan Ibadah Transformatif.',
      sks: 9,
      courses: concentrationCourses,
      variant: 'red' as const
    },
    {
      title: 'Mata Kuliah Elektif',
      description: 'Mata kuliah pilihan yang membahas perintisan gereja atau manajemen perubahan and konflik.',
      sks: 3,
      courses: electiveCourses,
      variant: 'blue' as const
    },
    {
      title: 'Mata Kuliah Penelitian',
      description: 'Pembentukan karakter melalui Mentoring Pastoral and penyusunan Tugas Akhir berupa proyek kreatif.',
      sks: 9,
      courses: researchAndFinalCourses,
      variant: 'red' as const
    }
  ];

  const careers = [
    'Gembala Sidang / Pastor Senior',
    'Pemimpin Gereja Urban',
    'Perintis Gereja (Church Planter)',
    'Direktur Pemuridan / Pembinaan Jemaat',
    'Pemimpin Organisasi Pelayanan / Parachurch',
    'Konsultan Kepemimpinan Kristen'
  ];

  return (
    <>
      <SEO title="Magister Kepemimpinan Pastoral - STTB" />
      <ProgramHero
        title="MAGISTER MINISTRI KEPEMIMPINAN PASTORAL"
        degree="M.Min. (Magister Ministri)"
        description="Program studi untuk memberikan kerangka biblika and teologis yang solid serta membangun perspektif utuh bagi kepemimpinan gereja urban yang adaptif dengan perubahan zaman."
        backgroundImage="https://images.unsplash.com/photo-1609234680415-f10a17c1fa72?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <GraduateProfile />

      <AcademicInfo
        totalSks="45 SKS"
        duration="2 Tahun"
        system="Berbentuk cohort atas kerja sama dengan institusi pengutus. Jadwal kuliah disesuaikan dengan kesepakatan sistem cohort."
        requirements="Minimal lulusan S1 Teologi. Sudah baptis dewasa/sidi. Pengalaman kerja min. 2 tahun. Terlibat pelayanan min. 1 tahun. Menyerahkan Book Review."
        additionalInfo="Mata Kuliah Fondasi S1 (15 SKS) akan ditransfer dari ijazah S1 Teologi mahasiswa, sehingga total akhir menjadi 60 SKS. Profil lulusan adalah 'Transformative Christian Professionals'."
      />

      <CurriculumAccordion categories={fullCurriculum} />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white p-8 rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold text-[#0B1F3B] mb-4">Catatan Perkuliahan & Mentoring:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Program ini mewajibkan mahasiswa untuk menempuh 45 SKS (ditambah 15 SKS transfer dari S1 Teologi).</li>
              <li>• **Sistem Cohort:** Jadwal perkuliahan tidak kaku, melainkan dibentuk berdasarkan kesepakatan kelompok studi (cohort) yang diutus oleh institusi/gereja tertentu.</li>
              <li>• **Mentoring Pastoral:** Mahasiswa akan didampingi secara pribadi oleh dosen pembimbing setiap bulan untuk pertumbuhan iman, refleksi panggilan, and pembentukan karakter.</li>
              <li>• Tugas akhir (6 SKS) dikerjakan dalam bentuk penelitian proyek kreatif yang aktual untuk pergumulan kepemimpinan Kristen di masa kini.</li>
            </ul>
          </div>
        </div>
      </section>

      <CareerOpportunities careers={careers} />

      <CTASection
        title="Tingkatkan Kapasitas Kepemimpinan Pastoral Anda"
        description="Daftar ke Program Magister Ministri Kepemimpinan Pastoral (M.Min.) STTB and perlengkapi diri Anda untuk merespons tantangan gereja masa kini."
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
