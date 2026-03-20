/**
 * Mock CMS Data - Simulasi data dari backend
 * Dalam production, data ini akan diambil dari API
 */

import {
  HomeHeroContent,
  HomeStatsItem,
  HomeProgramShowcase,
  LeadHeroContent,
  LeadPillar,
  LeadProgram,
  LeadEvent,
  ProgramContent,
  SiteSettings,
} from './contentModels';

// ============ HOMEPAGE MOCK DATA ============
export const mockHomeHero: HomeHeroContent = {
  id: 'home-hero-1',
  title: 'Membentuk Pemimpin Rohani Masa Depan',
  subtitle: 'STTB Bandung',
  description: 'Pendidikan Teologi Berkualitas dengan Komitmen pada Keunggulan Akademik dan Spiritualitas. Bergabunglah dengan komunitas akademik yang berkomitmen menghasilkan pemimpin rohani yang Informed, Transformed, dan Transformative.',
  primaryButtonText: 'Daftar Sekarang',
  primaryButtonLink: '/admisi',
  secondaryButtonText: 'Lihat Program',
  secondaryButtonLink: '/program/sarjana-teologi',
  backgroundImage: 'https://images.unsplash.com/photo-1772033282500-c85fde65d6fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  isActive: true,
  updatedAt: '2026-03-11T10:00:00Z',
  updatedBy: 'admin',
};

export const mockHomeStats: HomeStatsItem[] = [
  {
    id: 'stat-1',
    icon: 'GraduationCap',
    value: '7',
    label: 'Program Studi',
    description: 'Beragam pilihan program sarjana dan magister',
    order: 1,
  },
  {
    id: 'stat-2',
    icon: 'Users',
    value: '500+',
    label: 'Mahasiswa Aktif',
    description: 'Komunitas belajar yang dinamis',
    order: 2,
  },
  {
    id: 'stat-3',
    icon: 'BookOpen',
    value: '50+',
    label: 'Dosen Berkualitas',
    description: 'Tenaga pengajar berpengalaman',
    order: 3,
  },
  {
    id: 'stat-4',
    icon: 'Award',
    value: 'Terakreditasi',
    label: 'BAN-PT',
    description: 'Standar pendidikan tinggi nasional',
    order: 4,
  },
];

export const mockHomeProgramShowcase: HomeProgramShowcase[] = [
  {
    id: 'showcase-1',
    programId: 'sarjana-teologi',
    title: 'Sarjana Teologi',
    degree: 'S.Th',
    description: 'Program studi yang membekali mahasiswa dengan pemahaman teologi yang mendalam dan alkitabiah.',
    link: '/program/sarjana-teologi',
    image: 'https://images.unsplash.com/photo-1763136195116-488709b0370e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    order: 1,
    isActive: true,
  },
  {
    id: 'showcase-2',
    programId: 'sarjana-pendidikan-kristen',
    title: 'Sarjana Pendidikan Kristen',
    degree: 'S.Pd.K',
    description: 'Program yang dirancang untuk menghasilkan pendidik Kristen yang profesional dan berkarakter.',
    link: '/program/sarjana-pendidikan-kristen',
    image: 'https://images.unsplash.com/photo-1566831453303-34a2c76ec34f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    order: 2,
    isActive: true,
  },
  {
    id: 'showcase-3',
    programId: 'magister-teologi-pelayanan',
    title: 'Magister Teologi Pelayanan',
    degree: 'M.Th',
    description: 'Program magister untuk mengembangkan kemampuan teologis dan praktis dalam pelayanan gereja.',
    link: '/program/magister-teologi-pelayanan',
    image: 'https://images.unsplash.com/photo-1595315342809-fa10945ed07c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    order: 3,
    isActive: true,
  },
];

// ============ LEAD CENTER MOCK DATA ============
export const mockLeadHero: LeadHeroContent = {
  id: 'lead-hero-1',
  badge: 'Learning, Equipping, & Development',
  title: 'L.E.A.D. Center: Memperlengkapi Pelayan, Membangun Tubuh Kristus.',
  subtitle: 'Pusat Pendidikan & Pelatihan Non-Formal STT Bandung',
  description: 'Pusat Pendidikan & Pelatihan Non-Formal STT Bandung. Kami hadir untuk membekali jemaat, profesional, dan pemimpin gereja melalui program yang aplikatif dan relevan.',
  primaryButtonText: 'Lihat Program & Kelas',
  primaryButtonLink: '#program-unggulan',
  secondaryButtonText: 'Tentang LEAD',
  secondaryButtonLink: '#tentang-lead',
  backgroundImage: 'https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
  isActive: true,
};

export const mockLeadPillars: LeadPillar[] = [
  {
    id: 'pillar-1',
    title: 'Kelas Audit & Kuliah Umum',
    description: 'Ikuti kelas teologi formal secara sit-in sesuai kebutuhan Anda tanpa perlu mengambil program gelar penuh. Kesempatan belajar langsung dari dosen STTB.',
    icon: 'BookOpen',
    iconColor: '#2E90FF',
    backgroundColor: '#F3F7FF',
    order: 1,
    isActive: true,
  },
  {
    id: 'pillar-2',
    title: 'Sertifikasi & Pelatihan',
    description: 'Program khusus dan sertifikasi yang dirancang untuk memperlengkapi praktisi pelayanan. Termasuk Perspectives Study Program dan Little STEP.',
    icon: 'Shield',
    iconColor: '#C1121F',
    backgroundColor: '#FEF2F2',
    order: 2,
    isActive: true,
  },
  {
    id: 'pillar-3',
    title: 'Pengembangan Modul',
    description: 'Layanan konsultasi dan pembuatan bahan ajar, kurikulum, serta modul untuk kebutuhan spesifik pelayanan gerejawi dan organisasi Kristen.',
    icon: 'Target',
    iconColor: '#D4AF37',
    backgroundColor: '#FFFBEB',
    order: 3,
    isActive: true,
  },
];

export const mockLeadPrograms: LeadProgram[] = [
  {
    id: 'lead-prog-1',
    title: 'Vocatio Marketplace Fellow',
    description: 'Program intensif 6 bulan untuk memperlengkapi profesional dan pengusaha Kristen dalam mengintegrasikan iman di dunia kerja.',
    batch: 'Batch 5 - Buka Pendaftaran',
    status: 'Pendaftaran Dibuka',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    registrationLink: '/admisi',
    order: 1,
    isActive: true,
  },
  {
    id: 'lead-prog-2',
    title: 'Perspectives Study Program',
    description: 'Kursus 15 minggu yang membuka wawasan tentang misi global Allah dan bagaimana gereja/individu dapat mengambil peran di dalamnya.',
    batch: 'Kelas Reguler 2026',
    status: 'Berjalan',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    registrationLink: '/admisi',
    order: 2,
    isActive: true,
  },
  {
    id: 'lead-prog-3',
    title: 'Little STEP',
    description: 'Sertifikasi Teologi Dasar untuk Jemaat Awam. Memperlengkapi jemaat dengan pemahaman teologi alkitabiah dan aplikatif.',
    batch: 'Batch 12 - Kuota Terbatas',
    status: 'Pendaftaran Dibuka',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    registrationLink: '/admisi',
    order: 3,
    isActive: true,
  },
];

export const mockLeadEvents: LeadEvent[] = [
  {
    id: 'lead-event-1',
    title: 'Webinar: Kepemimpinan Kristen di Era AI',
    date: '23',
    month: 'FEB',
    time: '19:00 - 21:00 WIB',
    location: 'Zoom Online',
    type: 'Webinar',
    registrationLink: '/kontak',
    order: 1,
    isActive: true,
  },
  {
    id: 'lead-event-2',
    title: 'Workshop: Modul Sekolah Minggu Interaktif',
    date: '05',
    month: 'MAR',
    time: '09:00 - 15:00 WIB',
    location: 'Kampus STTB (On-site)',
    type: 'Workshop',
    registrationLink: '/kontak',
    order: 2,
    isActive: true,
  },
  {
    id: 'lead-event-3',
    title: 'Kuliah Umum: Etika Bisnis dalam Perspektif Teologi Reformed',
    date: '12',
    month: 'MAR',
    time: '18:30 - 20:30 WIB',
    location: 'Hybrid (Zoom & Kampus)',
    type: 'Kuliah Umum',
    registrationLink: '/kontak',
    order: 3,
    isActive: true,
  },
  {
    id: 'lead-event-4',
    title: 'Pembukaan Kelas Little STEP Batch 13',
    date: '28',
    month: 'APR',
    time: '18:00 - 20:00 WIB',
    location: 'Kampus STTB',
    type: 'Sertifikasi',
    registrationLink: '/kontak',
    order: 4,
    isActive: true,
  },
];

// ============ PROGRAM CONTENT MOCK DATA ============
export const mockProgramContent: Record<string, ProgramContent> = {
  'sarjana-teologi': {
    id: 'prog-1',
    slug: 'sarjana-teologi',
    title: 'Sarjana Teologi',
    degree: 'S.Th',
    shortDescription: 'Program studi yang membekali mahasiswa dengan pemahaman teologi yang mendalam dan alkitabiah.',
    heroImage: 'https://images.unsplash.com/photo-1763136195116-488709b0370e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    heroDescription: 'Program Sarjana Teologi dirancang untuk membentuk pemimpin gereja yang memiliki pemahaman teologi yang kuat, karakter rohani yang matang, dan keterampilan pelayanan yang efektif.',
    
    academicInfo: {
      credits: '144 SKS',
      duration: '4 Tahun (8 Semester)',
      schedule: 'Senin - Jumat, 08:00 - 16:00 WIB',
      accreditation: 'Terakreditasi B oleh BAN-PT',
    },
    
    curriculumCategories: [
      {
        id: 'cat-1',
        title: 'Mata Kuliah Dasar',
        credits: '24 SKS',
        icon: 'Book',
        description: 'Fondasi teologi dan pengetahuan umum',
        order: 1,
      },
      {
        id: 'cat-2',
        title: 'Mata Kuliah Inti',
        credits: '96 SKS',
        icon: 'BookOpen',
        description: 'Studi mendalam Alkitab, teologi, dan sejarah gereja',
        order: 2,
      },
      {
        id: 'cat-3',
        title: 'Mata Kuliah Praktis',
        credits: '18 SKS',
        icon: 'Users',
        description: 'Keterampilan pelayanan dan praktik',
        order: 3,
      },
      {
        id: 'cat-4',
        title: 'Tugas Akhir',
        credits: '6 SKS',
        icon: 'FileText',
        description: 'Skripsi dan ujian komprehensif',
        order: 4,
      },
    ],
    
    courses: [
      {
        id: 'course-1',
        semester: '1',
        code: 'TH101',
        name: 'Pengantar Teologi Sistematika',
        credits: 3,
        category: 'Inti',
        order: 1,
      },
      {
        id: 'course-2',
        semester: '1',
        code: 'AL101',
        name: 'Pengantar Perjanjian Lama',
        credits: 3,
        category: 'Inti',
        order: 2,
      },
      {
        id: 'course-3',
        semester: '1',
        code: 'AL102',
        name: 'Pengantar Perjanjian Baru',
        credits: 3,
        category: 'Inti',
        order: 3,
      },
      {
        id: 'course-4',
        semester: '1',
        code: 'BH101',
        name: 'Bahasa Yunani I',
        credits: 3,
        category: 'Dasar',
        order: 4,
      },
      // ... more courses
    ],
    
    graduateProfile: {
      title: 'Profil Lulusan',
      description: 'Lulusan Program Sarjana Teologi diharapkan menjadi:',
      competencies: [
        'Hamba Tuhan yang memiliki integritas rohani dan karakter kristiani',
        'Pemimpin gereja yang mampu memahami dan mengajarkan Alkitab dengan benar',
        'Pelayan yang terampil dalam berbagai aspek pelayanan gerejawi',
        'Teolog yang dapat berpikir kritis dan kontekstual',
        'Komunikator yang efektif dalam menyampaikan kebenaran firman Tuhan',
      ],
    },
    
    careerOpportunities: {
      title: 'Peluang Karir',
      description: 'Lulusan dapat melayani sebagai:',
      careers: [
        {
          title: 'Pendeta/Gembala Jemaat',
          description: 'Memimpin dan menggembalakan jemaat lokal',
          icon: 'Church',
        },
        {
          title: 'Pengajar Sekolah Minggu',
          description: 'Mendidik dan membina anak-anak dalam iman',
          icon: 'Users',
        },
        {
          title: 'Misionaris',
          description: 'Melayani dalam pekabaran Injil lintas budaya',
          icon: 'Globe',
        },
        {
          title: 'Dosen Teologi',
          description: 'Mengajar di sekolah tinggi atau seminari',
          icon: 'GraduationCap',
        },
      ],
    },
    
    ctaTitle: 'Siap Memulai Perjalanan Teologi Anda?',
    ctaDescription: 'Bergabunglah dengan Program Sarjana Teologi dan kembangkan potensi Anda dalam pelayanan',
    
    isActive: true,
    seoTitle: 'Program Sarjana Teologi (S.Th) - STTB Bandung',
    seoDescription: 'Program Sarjana Teologi STTB Bandung membekali mahasiswa dengan pemahaman teologi yang mendalam untuk menjadi pemimpin gereja yang berkualitas.',
    updatedAt: '2026-03-11T10:00:00Z',
    updatedBy: 'admin',
  },
};

// ============ SITE SETTINGS MOCK DATA ============
export const mockSiteSettings: SiteSettings = {
  id: 'settings-1',
  
  general: {
    siteName: 'Sekolah Tinggi Teologi Bandung',
    tagline: 'Membentuk Pemimpin Rohani Masa Depan',
    logo: '/logo.png',
    favicon: '/favicon.ico',
    timezone: 'Asia/Jakarta',
    language: 'id',
    dateFormat: 'DD MMMM YYYY',
  },
  
  seo: {
    defaultTitle: 'STTB - Sekolah Tinggi Teologi Bandung',
    defaultDescription: 'Sekolah Tinggi Teologi Bandung (STTB) menyediakan program Sarjana dan Magister Teologi untuk mempersiapkan pemimpin gereja yang informed, transformed, dan transformative.',
    keywords: ['teologi', 'sttb', 'sekolah tinggi teologi', 'bandung', 'pendidikan kristen'],
    googleAnalyticsId: 'UA-XXXXXXXXX-X',
    ogImage: 'https://images.unsplash.com/photo-1772033282500-c85fde65d6fd?w=1200&h=630&fit=crop',
  },
  
  contact: {
    address: 'Jl. Teologi Raya No. 123, Bandung 40123, Jawa Barat, Indonesia',
    phone: '(022) 1234-5678',
    whatsapp: '+62 812-3456-7890',
    email: 'info@sttb-bandung.ac.id',
  },
  
  socialMedia: {
    facebook: 'https://facebook.com/sttbbandung',
    instagram: 'https://instagram.com/sttb.official',
    youtube: 'https://youtube.com/@sttbbandung',
    linkedin: 'https://linkedin.com/school/sttb-bandung',
  },
  
  banking: {
    accounts: [
      {
        bank: 'Bank BCA',
        accountNumber: '1234567890',
        accountName: 'Yayasan Pendidikan Teologi Bandung',
        branch: 'Bandung Dago',
      },
      {
        bank: 'Bank Mandiri',
        accountNumber: '9876543210',
        accountName: 'Yayasan Pendidikan Teologi Bandung',
        branch: 'Bandung Buah Batu',
      },
      {
        bank: 'Bank BNI',
        accountNumber: '0123456789',
        accountName: 'Yayasan Pendidikan Teologi Bandung',
        branch: 'Bandung Asia Afrika',
      },
    ],
  },
  
  email: {
    smtpServer: 'smtp.gmail.com',
    smtpPort: 587,
    username: 'noreply@sttb-bandung.ac.id',
    fromEmail: 'noreply@sttb-bandung.ac.id',
    fromName: 'STTB Bandung',
  },
  
  maintenance: {
    isEnabled: false,
    message: 'Website sedang dalam pemeliharaan. Kami akan segera kembali.',
  },
  
  updatedAt: '2026-03-11T10:00:00Z',
  updatedBy: 'admin',
};

// ============ HELPER FUNCTIONS ============
export const getCMSContent = <T>(contentType: string, id?: string): T | null => {
  // Simulasi API call
  // Dalam production, ini akan fetch dari backend
  const contentMap: Record<string, any> = {
    'home-hero': mockHomeHero,
    'home-stats': mockHomeStats,
    'home-showcase': mockHomeProgramShowcase,
    'lead-hero': mockLeadHero,
    'lead-pillars': mockLeadPillars,
    'lead-programs': mockLeadPrograms,
    'lead-events': mockLeadEvents,
    'site-settings': mockSiteSettings,
    'program-content': mockProgramContent,
  };
  
  return contentMap[contentType] || null;
};

export const updateCMSContent = async (contentType: string, id: string, data: any): Promise<boolean> => {
  // Simulasi API call untuk update
  console.log(`Updating ${contentType} with id ${id}:`, data);
  
  // Dalam production, ini akan POST/PUT ke backend
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
};

export const deleteCMSContent = async (contentType: string, id: string): Promise<boolean> => {
  // Simulasi API call untuk delete
  console.log(`Deleting ${contentType} with id ${id}`);
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
};
