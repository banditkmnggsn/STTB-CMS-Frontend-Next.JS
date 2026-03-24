import { ProgramHero } from '@/components/shared/ProgramHero';
import { GraduateProfile } from '@/components/shared/GraduateProfile';
import { AcademicInfo } from '@/components/shared/AcademicInfo';
import { CurriculumAccordion } from '@/components/shared/CurriculumAccordion';
import { CareerOpportunities } from '@/components/shared/CareerOpportunities';
import { CTASection } from '@/components/shared/CTASection';
import { SEO } from '@/components/shared/SEO';

export default async function MagisterMinistriMarketplacePage() {  
  const biblicalFoundationCourses = [
    { name: 'Fondasi Perjanjian Lama', sks: 3 },
    { name: 'Fondasi Perjanjian Baru', sks: 3 },
    { name: 'Hermeneutika', sks: 3 }
  ];
  
  const systematicHistoricalCourses = [
    { name: 'Allah, Alkitab & Penciptaan', sks: 3 },
    { name: 'Kristus & Keselamatan', sks: 3 },
    { name: 'Roh Kudus & Gereja', sks: 3 },
    { name: 'Gereja Dalam Konteks Sosio-Historis', sks: 3 }
  ];
  
  const coreCourses = [
    { name: 'Spiritualitas Dunia Kerja', sks: 3 },
    { name: 'Pemuridan Dunia Kerja', sks: 3 },
    { name: 'Misi Integral Dunia Kerja', sks: 3 },
    { name: 'Kepemimpinan Transformasional Dunia Kerja', sks: 3 }
  ];
  
  const concentrationCourses = [
    { name: 'Teologi Kerja', sks: 3 },
    { name: 'Etika Kerja', sks: 3 }
  ];

  const electiveCourses = [
    { name: 'Kesehatan Mental Dalam Dunia Kerja', sks: 3 },
    { name: 'Konseling Dasar Untuk Dunia Kerja', sks: 3 },
    { name: 'Isu-Isu Kontemporer Dalam Dunia Kerja', sks: 3 },
    { name: 'Perspektif Misi Dunia', sks: 3 },
    { name: 'Mata Kuliah Di Prodi S2 Lain', sks: 3 }
  ];
  
  const researchAndFinalCourses = [
    { name: 'Mentoring Profesi', sks: 3 },
    { name: 'Proyek Tugas Akhir', sks: 6 }
  ];
  
  const fullCurriculum = [
    {
      title: 'Fondasi Biblika',
      description: 'Studi kitab Perjanjian Lama, Perjanjian Baru, and Hermeneutika sebagai landasan sudut pandang Alkitabiah di dunia kerja.',
      sks: 9,
      courses: biblicalFoundationCourses,
      variant: 'red' as const
    },
    {
      title: 'Fondasi Sistematika – Historika',
      description: 'Mempelajari doktrin dasar kekristenan (Allah, Kristus, Roh Kudus) and sejarah gereja dalam konteks sosio-historis masa kini.',
      sks: 12,
      courses: systematicHistoricalCourses,
      variant: 'blue' as const
    },
    {
      title: 'Mata Kuliah Inti',
      description: 'Fokus pada spiritualitas, pemuridan, misi integral, and kepemimpinan transformasional di dunia kerja perkotaan.',
      sks: 12,
      courses: coreCourses,
      variant: 'red' as const
    },
    {
      title: 'Mata Kuliah Konsentrasi',
      description: 'Studi mendalam mengenai Teologi Kerja and Etika Kerja bagi profesional Kristen.',
      sks: 6,
      courses: concentrationCourses,
      variant: 'blue' as const
    },
    {
      title: 'Mata Kuliah Elektif',
      description: 'Mata kuliah pilihan yang membahas isu-isu spesifik seperti kesehatan mental, konseling, and misi dunia.',
      sks: 6,
      courses: electiveCourses,
      variant: 'red' as const
    },
    {
      title: 'Mata Kuliah Penelitian',
      description: 'Mentoring profesi secara langsung oleh praktisi/pebisnis Kristen and pengerjaan Proyek Tugas Akhir.',
      sks: 9,
      courses: researchAndFinalCourses,
      variant: 'blue' as const
    }
  ];

  const careers = [
    'Profesional / Eksekutif Kristen',
    'Pengusaha / Pebisnis (Entrepreneur)',
    'Pemimpin Gereja di Marketplace',
    'Konselor / Mentor Dunia Kerja',
    'Aktivis Misi Integral Perkotaan',
    'Pemimpin Organisasi Parachurch / NGO'
  ];

  return (
    <>
      <SEO title="Magister Ministri Marketplace - STTB" />
      <ProgramHero
        title="MAGISTER MINISTRI MARKETPLACE"
        degree="M.Min. (Magister Ministri)"
        description="Program studi untuk memperlengkapi profesional, wirausahawan, pebisnis and pemimpin gereja dengan landasan teologis Reformed guna menerapkan prinsip-prinsip kerja Kristen."
        backgroundImage="https://images.unsplash.com/photo-1612477954848-96b886143262?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <GraduateProfile />

      <AcademicInfo
        totalSks="54 SKS"
        duration="2 Tahun"
        system="Kuliah block teaching daring & luring di akhir pekan (Jumat 18.00-21.00 & Sabtu 09.00-16.00 WIB). Rata-rata 3 matkul online and 1 matkul onsite per semester."
        requirements="Minimal lulusan S1 semua jurusan. Sudah baptis dewasa/sidi. Pengalaman kerja min. 2 tahun. Terlibat pelayanan min. 1 tahun. Menyerahkan Book Review."
        additionalInfo="Profil Lulusan yang dituju adalah 'Transformative Christian Professionals'. Program ini dilengkapi dengan Mentoring Profesi oleh pebisnis/profesional Kristen berpengalaman."
      />

      <CurriculumAccordion categories={fullCurriculum} />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white p-8 rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold text-[#0B1F3B] mb-4">Catatan Perkuliahan & Mentoring:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Mahasiswa wajib menyelesaikan total 54 SKS untuk lulus.</li>
              <li>• Kuliah didesain khusus untuk pekerja profesional (dilakukan pada Jumat malam and Sabtu).</li>
              <li>• Mahasiswa yang diterima dapat mulai kuliah di bulan Agustus (Semester Ganjil) atau Januari (Semester Genap).</li>
              <li>• **Mentoring Profesi:** Mahasiswa akan dimentoring langsung oleh profesional/pebisnis Kristen selama 1-2 semester secara online atau onsite untuk mengintegrasikan akademik dengan dunia nyata.</li>
            </ul>
          </div>
        </div>
      </section>

      <CareerOpportunities careers={careers} />

      <CTASection
        title="Terpanggil Menjadi Terang di Dunia Kerja?"
        description="Daftar ke Program Magister Ministri Marketplace (M.Min.) STTB and integrasikan iman Anda dengan panggilan profesional."
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
