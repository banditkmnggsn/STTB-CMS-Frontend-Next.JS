import { ProgramHero } from '@/components/shared/ProgramHero';
import { GraduateProfile } from '@/components/shared/GraduateProfile';
import { AcademicInfo } from '@/components/shared/AcademicInfo';
import { CurriculumAccordion } from '@/components/shared/CurriculumAccordion';
import { CareerOpportunities } from '@/components/shared/CareerOpportunities';
import { CTASection } from '@/components/shared/CTASection';
import { SEO } from '@/components/shared/SEO';

export default async function MagisterMinistriTeologiPelayananPage() {
  
  const biblicalFoundationCourses = [
    { name: 'Fondasi Perjanjian Lama (Taurat)', sks: 3 },
    { name: 'Fondasi Perjanjian Baru (Injil)', sks: 3 },
    { name: 'Hermeneutika', sks: 3 }
  ];
  
  const systematicHistoricalCourses = [
    { name: 'Allah, Alkitab, & Penciptaan', sks: 3 },
    { name: 'Kristus & Keselamatan', sks: 3 },
    { name: 'Roh Kudus & Gereja', sks: 3 },
    { name: 'Gereja Dalam Konteks Sosio - Historis', sks: 3 }
  ];
  
  const coreCourses = [
    { name: 'Transformasi Spiritualitas', sks: 3 },
    { name: 'Pemuridan', sks: 2 },
    { name: 'Misi Integral', sks: 3 },
    { name: 'Kepemimpinan Transformasional', sks: 3 }
  ];
  
  const concentrationCourses = [
    { name: 'Studi Perjanjian Lama : Kitab Sejarah', sks: 3 },
    { name: 'Studi Perjanjian Lama : Kitab Puisi / Nabi', sks: 3 },
    { name: 'Studi Perjanjian Baru : Para Rasul & Surat Paulus', sks: 3 },
    { name: 'Studi Perjanjian Baru : Kitab Umum & Wahyu', sks: 3 },
    { name: 'Homiletika', sks: 3 },
    { name: 'Teologi & Praktik Ibadah', sks: 3 },
    { name: 'Bahasa Ibrani', sks: 2 },
    { name: 'Bahasa Yunani', sks: 2 }
  ];
  
  const researchAndFinalCourses = [
    { name: 'Mentoring Akademik', sks: 1 },
    { name: 'Penulisan Akademik', sks: 3 },
    { name: 'Tugas Akhir : Praktik Pelayanan', sks: 6 }
  ];
  
  const fullCurriculum = [
    {
      title: 'Fondasi Biblika',
      description: 'Mempelajari dasar-dasar kitab Perjanjian Lama (Taurat), Perjanjian Baru (Injil), and Hermeneutika.',
      sks: 9,
      courses: biblicalFoundationCourses,
      variant: 'red' as const
    },
    {
      title: 'Fondasi Sistematika – Historika',
      description: 'Mempelajari pengantar teologi sistematika, Kristologi, doktrin Roh Kudus, and sejarah gereja.',
      sks: 12,
      courses: systematicHistoricalCourses,
      variant: 'blue' as const
    },
    {
      title: 'Mata Kuliah Inti',
      description: 'Fokus pada transformasi spiritualitas, pemuridan intensional, misi integral, and kepemimpinan transformasional.',
      sks: 12,
      courses: coreCourses,
      variant: 'red' as const
    },
    {
      title: 'Mata Kuliah Konsentrasi',
      description: 'Studi mendalam kitab-kitab sejarah, puisi/nabi, surat-surat rasul, homiletika, ibadah, serta bahasa Ibrani & Yunani.',
      sks: 22,
      courses: concentrationCourses,
      variant: 'blue' as const
    },
    {
      title: 'Tugas Akhir',
      description: 'Mencakup mentoring akademik, penulisan akademik, and praktik pelayanan nyata di lapangan.',
      sks: 10,
      courses: researchAndFinalCourses,
      variant: 'red' as const
    }
  ];

  const careers = [
    'Rohaniwan / Pendeta Penuh Waktu',
    'Gembala Sidang',
    'Pemimpin Pelayanan Gerejawi',
    'Penginjil / Misionaris',
    'Staf Pastoral (Khususnya Lulusan S1 Non-Teologi)'
  ];
  
  return (
    <>
      <SEO title="Magister Teologi Pelayanan - STTB" />
      <ProgramHero
        title="MAGISTER MINISTRI TEOLOGI PELAYANAN GEREJAWI"
        degree="M.Min. (Magister Ministri)"
        description="Menyediakan fondasi biblika-teologi and pelayanan praktis gerejawi untuk memperlengkapi calon rohaniwan, khususnya yang berlatar belakang S1 non-S.Th."
        backgroundImage="https://images.unsplash.com/photo-1760367121608-79219f1c9d2a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <GraduateProfile />

      <AcademicInfo
        totalSks="65 SKS"
        duration="2,5 Tahun"
        system="Block teaching daring and luring (Senin-Jumat, 17.00 - 21.00 WIB). Rata-rata 5 matkul online and 1 matkul onsite per semester."
        requirements="Minimal lulusan S1 Umum/Teologi. Sudah baptis dewasa/sidi. Pengalaman kerja min. 2 tahun. Terlibat pelayanan min. 1 tahun. Menyerahkan Book Review."
        additionalInfo="Program ini memiliki karakteristik 'M.Div. Plus'. Dapat menjadi batu loncatan (matrikulasi) untuk melanjutkan 2 tahun berikutnya ke tahap M.Th. (konsentrasi Pelayanan Pastoral Gereja Urban)."
      />

      <CurriculumAccordion categories={fullCurriculum} />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white p-8 rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold text-[#0B1F3B] mb-4">Catatan Perkuliahan:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Mahasiswa wajib menyelesaikan total 65 SKS untuk lulus program M.Min. ini.</li>
              <li>• Kelas diadakan pada sore/malam hari (17.00 – 21.00 WIB) and beberapa kelas dapat bergabung bersama mahasiswa M.Min. Marketplace.</li>
              <li>• **Mentoring Akademik:** Mahasiswa akan didampingi secara khusus oleh dosen pembimbing untuk mengelola waktu, strategi belajar, and integrasi spiritualitas.</li>
              <li>• Tugas Akhir (6 SKS) berupa **Praktik Pelayanan** langsung di lapangan, mengintegrasikan teori dari kelas ke dalam dinamika pelayanan gerejawi nyata.</li>
            </ul>
          </div>
        </div>
      </section>

      <CareerOpportunities careers={careers} />

      <CTASection
        title="Terpanggil Melayani Sepenuh Waktu?"
        description="Daftar ke Program Magister Ministri (M.Min.) Teologi Pelayanan Gerejawi STTB. Sangat cocok bagi profesional (S1 Umum) yang ingin bertransisi menjadi hamba Tuhan."
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
