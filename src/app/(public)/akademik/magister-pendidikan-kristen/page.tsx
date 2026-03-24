import { ProgramHero } from '@/components/shared/ProgramHero';
import { GraduateProfile } from '@/components/shared/GraduateProfile';
import { AcademicInfo } from '@/components/shared/AcademicInfo';
import { CurriculumAccordion } from '@/components/shared/CurriculumAccordion';
import { ConcentrationSection } from '@/components/shared/ConcentrationSection';
import { CareerOpportunities } from '@/components/shared/CareerOpportunities';
import { CTASection } from '@/components/shared/CTASection';
import { SEO } from '@/components/shared/SEO';

export default async function MagisterPendidikanKristenPage() {
  
  const foundationCourses = [
    { name: 'Fondasi Teologi Sistematika', sks: 3 },
    { name: 'Fondasi Perjanjian Baru', sks: 3 },
    { name: 'Fondasi Perjanjian Lama', sks: 3 },
    { name: 'Hermeneutika', sks: 3 }
  ];
  
  const coreCourses = [
    { name: 'Teologi Natur Manusia', sks: 3 },
    { name: 'Sejarah, Filosofi dan Teologi Pendidikan Kristen', sks: 3 },
    { name: 'Psikologi Perkembangan & Pendidikan', sks: 3 },
    { name: 'Transformasi Spiritualitas Pendidikan', sks: 3 },
    { name: 'Pendidikan Berbasis Keluarga', sks: 3 },
    { name: 'Mentoring Perjalanan Studi', sks: 1 }
  ];
  
  const electiveCourses = [
    { name: 'Elektif 1', sks: 3 },
    { name: 'Elektif 2', sks: 3 }
  ];
  
  const researchAndFinalCourses = [
    { name: 'Penulisan Akademik', sks: 3 },
    { name: 'Metodologi Pendidikan Kualitatif ATAU Metodologi Penelitian Proyek Kreatif', sks: 3 },
    { name: 'Proposal', sks: 3 },
    { name: 'Tugas Akhir: Tesis / Proyek Kreatif', sks: 8 }
  ];

  const concentrations = [
    {
      title: 'Desain Kurikulum & Pembelajaran',
      description: 'Memperlengkapi mahasiswa untuk merancang, mengembangkan, and mengevaluasi kurikulum berpusat pada peserta didik dengan pendekatan mengajar berdiferensiasi and aplikasi teknologi digital.',
      courses: [
        'Desain & Pengembangan Kurikulum (3 SKS)',
        'Evaluasi Pembelajaran (3 SKS)',
        'Desain Strategi & Media Pembelajaran (3 SKS)'
      ]
    },
    {
      title: 'Kepemimpinan Pendidikan',
      description: 'Memperlengkapi pemimpin pendidik Kristen dengan kemampuan perencanaan strategis, manajemen kewirausahaan, serta supervisi and pengembangan Sumber Daya Manusia (SDM).',
      courses: [
        'Fondasi Kepemimpinan Pendidikan Kristen (3 SKS)',
        'Manajemen Pendidikan Entrepreneurial (3 SKS)',
        'Pengelolaan and Pengembangan SDM (3 SKS)'
      ]
    }
  ];
  
  const concentrationsCourses = [
    { name: 'Desain Kurikulum & Pembelajaran / Kepemimpinan Pendidikan', sks: 9 },
  ];

  const fullCurriculum = [
    {
      title: 'Mata Kuliah Fondasi',
      description: 'Mata kuliah dasar yang membangun sudut pandang Alkitabiah melalui teologi sistematika, biblika, and hermeneutika.',
      sks: 12,
      courses: foundationCourses,
      variant: 'red' as const
    },
    {
      title: 'Mata Kuliah Inti',
      description: 'Fokus pada filosofi pendidikan Kristen, teologi natur manusia, psikologi perkembangan, and pendidikan berbasis keluarga.',
      sks: 16,
      courses: coreCourses,
      variant: 'blue' as const
    },
    {
      title: 'Konsentrasi',
      description: 'Mahasiswa memilih spesialisasi antara Desain Kurikulum & Pembelajaran atau Kepemimpinan Pendidikan.',
      sks: 9,
      courses: concentrationsCourses,
      variant: 'red' as const
    },
    {
      title: 'Mata Kuliah Elektif',
      description: 'Mata kuliah pilihan yang dapat diambil dari program studi magister lain untuk memperkaya wawasan.',
      sks: 6,
      courses: electiveCourses,
      variant: 'blue' as const
    },
    {
      title: 'Mata Kuliah Penelitian & Tugas Akhir',
      description: 'Mencakup metodologi penelitian (kualitatif atau proyek kreatif), penulisan akademik, proposal, and Tesis/Proyek Akhir.',
      sks: 17,
      courses: researchAndFinalCourses,
      variant: 'red' as const
    }
  ];

  const careers = [
    'Pemimpin / Kepala Sekolah Kristen',
    'Perancang and Pengembang Kurikulum',
    'Dosen / Pendidik Tingkat Lanjut',
    'Konsultan Pendidikan Kristen',
    'Direktur Pendidikan Gereja / Sinode',
    'Pemimpin Lembaga Parachurch / NGO Pendidikan'
  ];
  
  return (
    <>
      <SEO title="Magister Pendidikan Kristen - STTB" />
      <ProgramHero
        title="MAGISTER PENDIDIKAN KRISTEN"
        degree="M.Pd. (Magister Pendidikan)"
        description="Program studi pascasarjana untuk memperlengkapi pemimpin and pendidik dengan fondasi biblika-teologis yang solid, teori pendidikan, and formasi spiritualitas untuk berkarya secara transformatif."
        backgroundImage="https://plus.unsplash.com/premium_photo-1715588659634-1c9ff348d59c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <GraduateProfile />

      <AcademicInfo
        totalSks="60 SKS"
        duration="2 Tahun"
        system="Mata kuliah diajarkan secara block teaching (intensif) dengan 1 Semester berisi 5 mata kuliah. 1 Mata Kuliah diadakan Onsite setiap semester."
        requirements="Minimal lulusan S1 dari semua jurusan. Sudah baptis dewasa/sidi. Terlibat pelayanan sekolah/gereja min. 2 tahun. Menyerahkan Book Review."
        additionalInfo="Profil Lulusan yang dituju adalah 'Transformative Educational Leaders' yang memiliki kecakapan memimpin and merancang pendidikan Kristen yang transformatif. Mahasiswa dapat memilih jalur Tesis atau Proyek Kreatif untuk Tugas Akhir."
      />

      <CurriculumAccordion categories={fullCurriculum} />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white p-8 rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold text-[#0B1F3B] mb-4">Catatan Penilitian & Tugas Akhir:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Mahasiswa wajib menyelesaikan total 60 SKS untuk lulus.</li>
              <li>• Untuk metodologi penelitian, mahasiswa dapat memilih antara pendekatan Kualitatif atau metodologi untuk Proyek Kreatif (berbasis proyek/prototipe).</li>
              <li>• Metodologi Penelitian Kuantitatif dapat diadakan jika jumlah mahasiswa yang berminat mencukupi.</li>
              <li>• Tugas akhir (8 SKS) dapat berupa Tesis (penelitian kuantitatif/kualitatif/tindakan kelas) atau Proyek Kreatif / Prototipe yang relevan dengan pergumulan dunia pendidikan Kristen di Indonesia.</li>
            </ul>
          </div>
        </div>
      </section>

      <ConcentrationSection concentrations={concentrations} />

      <CareerOpportunities careers={careers} />

      <CTASection
        title="Siap Memimpin Transformasi di Dunia Pendidikan?"
        description="Daftar ke Program Magister Pendidikan (M.Pd.) STTB and perlengkapi diri Anda menjadi pendidik and pemimpin Kristen yang berdampak."
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
