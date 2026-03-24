// /**
//  * Content Models untuk STTB Admin CMS
//  * Semua data yang bisa dikontrol oleh admin
//  */

// // ============ HOMEPAGE CONTENT ============
// export   interface HomeHeroContent {
//   id: string;
//   title: string;
//   subtitle: string;
//   description: string;
//   primaryButtonText: string;
//   primaryButtonLink: string;
//   secondaryButtonText: string;
//   secondaryButtonLink: string;
//   backgroundImage: string;
//   isActive: boolean;
//   updatedAt: string;
//   updatedBy: string;
// }

// export interface HomeStatsItem {
//   id: string;
//   icon: string; // Icon name from lucide-react
//   value: string;
//   label: string;
//   description: string;
//   order: number;
// }

// export interface HomeProgramShowcase {
//   id: string;
//   programId: string;
//   title: string;
//   degree: string;
//   description: string;
//   link: string;
//   image: string;
//   order: number;
//   isActive: boolean;
// }

// export interface HomeWhyChooseSection {
//   id: string;
//   title: string;
//   subtitle: string;
//   items: {
//     id: string;
//     icon: string;
//     title: string;
//     description: string;
//     backgroundColor: string;
//     order: number;
//   }[];
// }

// export interface HomeFacilitiesSection {
//   id: string;
//   title: string;
//   backgroundImage: string;
//   items: {
//     id: string;
//     icon: string;
//     title: string;
//     description: string;
//     iconColor: string;
//     order: number;
//   }[];
// }

// export  interface HomeCTASection {
//   id: string;
//   title: string;
//   description: string;
//   primaryButtonText: string;
//   primaryButtonLink: string;
//   secondaryButtonText: string;
//   secondaryButtonLink: string;
//   isActive: boolean;
// }

// // ============ PROGRAM CONTENT ============
// export  interface ProgramContent {
//   id: string;
//   slug: string;
//   title: string;
//   degree: string;
//   shortDescription: string;
//   heroImage: string;
//   heroDescription: string;
  
//   // Academic Info
//   academicInfo: {
//     credits: string;
//     duration: string;
//     schedule: string;
//     accreditation?: string;
//   };
  
//   // Curriculum Categories
//   curriculumCategories: {
//     id: string;
//     title: string;
//     credits: string;
//     icon: string;
//     description: string;
//     order: number;
//   }[];
  
//   // Courses
//   courses: {
//     id: string;
//     semester: string;
//     code: string;
//     name: string;
//     credits: number;
//     category: string;
//     order: number;
//   }[];
  
//   // Graduate Profile
//   graduateProfile: {
//     title: string;
//     description: string;
//     competencies: string[];
//   };
  
//   // Career Opportunities
//   careerOpportunities: {
//     title: string;
//     description: string;
//     careers: {
//       title: string;
//       description: string;
//       icon: string;
//     }[];
//   };
  
//   // Concentrations (for Magister programs)
//   concentrations?: {
//     title: string;
//     description: string;
//     items: {
//       id: string;
//       title: string;
//       description: string;
//       icon: string;
//     }[];
//   };
  
//   // CTA
//   ctaTitle: string;
//   ctaDescription: string;
  
//   // Meta
//   isActive: boolean;
//   seoTitle: string;
//   seoDescription: string;
//   updatedAt: string;
//   updatedBy: string;
// }

// // ============ LEAD CENTER CONTENT ============
// export  interface LeadHeroContent {
//   id: string;
//   badge: string;
//   title: string;
//   subtitle: string;
//   description: string;
//   primaryButtonText: string;
//   primaryButtonLink: string;
//   secondaryButtonText: string;
//   secondaryButtonLink: string;
//   backgroundImage: string;
//   isActive: boolean;
// }

// export  interface LeadPillar {
//   id: string;
//   title: string;
//   description: string;
//   icon: string;
//   iconColor: string;
//   backgroundColor: string;
//   order: number;
//   isActive: boolean;
// }

// export  interface LeadProgram {
//   id: string;
//   title: string;
//   description: string;
//   batch: string;
//   status: string;
//   image: string;
//   registrationLink: string;
//   order: number;
//   isActive: boolean;
// }

// export  interface LeadEvent {
//   id: string;
//   title: string;
//   date: string;
//   month: string;
//   time: string;
//   location: string;
//   type: string;
//   registrationLink: string;
//   order: number;
//   isActive: boolean;
// }

// export  interface LeadMediaSection {
//   id: string;
//   badge: string;
//   title: string;
//   description: string;
//   videoThumbnail: string;
//   videoUrl: string;
//   videoDuration: string;
//   features: string[];
//   ctaText: string;
//   ctaLink: string;
// }

// export  interface LeadCTASection {
//   id: string;
//   title: string;
//   description: string;
//   primaryButtonText: string;
//   primaryButtonLink: string;
//   secondaryButtonText: string;
//   secondaryButtonLink: string;
//   backgroundColor: string;
// }

// // ============ TENTANG KAMI CONTENT ============
// export  interface SejarahContent {
//   id: string;
//   heroTitle: string;
//   heroDescription: string;
//   heroImage: string;
//   timeline: {
//     year: string;
//     title: string;
//     description: string;
//     image?: string;
//   }[];
//   updatedAt: string;
// }

// export  interface VisiMisiContent {
//   id: string;
//   heroTitle: string;
//   heroImage: string;
//   vision: {
//     title: string;
//     statement: string;
//   };
//   mission: {
//     title: string;
//     points: string[];
//   };
//   values: {
//     title: string;
//     items: {
//       title: string;
//       description: string;
//       icon: string;
//     }[];
//   };
//   updatedAt: string;
// }

// export  interface MarsContent {
//   id: string;
//   heroTitle: string;
//   heroImage: string;
//   lyrics: {
//     stanza: string[];
//   }[];
//   composer: string;
//   audioUrl?: string;
//   downloadUrl?: string;
//   updatedAt: string;
// }

// export  interface DosenProfile {
//   id: string;
//   name: string;
//   title: string;
//   degree: string;
//   photo: string;
//   specialization: string;
//   email: string;
//   bio: string;
//   education: string[];
//   publications?: string[];
//   order: number;
//   isActive: boolean;
// }

// // ============ ADMISI CONTENT ============
// export  interface AdmisiContent {
//   id: string;
//   heroTitle: string;
//   heroDescription: string;
//   heroImage: string;
  
//   requirements: {
//     program: string;
//     items: string[];
//   }[];
  
//   applicationProcess: {
//     step: number;
//     title: string;
//     description: string;
//     icon: string;
//   }[];
  
//   timeline: {
//     title: string;
//     date: string;
//     description: string;
//   }[];
  
//   registrationForm: {
//     isActive: boolean;
//     formFields: {
//       name: string;
//       type: string;
//       required: boolean;
//       options?: string[];
//     }[];
//   };
  
//   contactSupport: {
//     phone: string;
//     whatsapp: string;
//     email: string;
//     officeHours: string;
//   };
  
//   updatedAt: string;
// }

// // ============ KEUANGAN CONTENT ============
// export  interface BiayaStudiContent {
//   id: string;
//   heroTitle: string;
//   heroDescription: string;
  
//   tuitionFees: {
//     program: string;
//     registrationFee: string;
//     semesterFee: string;
//     totalEstimate: string;
//     notes?: string[];
//   }[];
  
//   otherCosts: {
//     item: string;
//     cost: string;
//     frequency: string;
//   }[];
  
//   paymentSchedule: {
//     phase: string;
//     dueDate: string;
//     amount: string;
//   }[];
  
//   paymentMethods: {
//     method: string;
//     description: string;
//     icon: string;
//   }[];
  
//   updatedAt: string;
// }

// export  interface BeasiswaContent {
//   id: string;
//   heroTitle: string;
//   heroDescription: string;
  
//   scholarships: {
//     id: string;
//     title: string;
//     description: string;
//     coverage: string;
//     eligibility: string[];
//     howToApply: string[];
//     deadline: string;
//     icon: string;
//     isActive: boolean;
//   }[];
  
//   contactInfo: {
//     email: string;
//     phone: string;
//     officeHours: string;
//   };
  
//   updatedAt: string;
// }

// export  interface DukungSTTBContent {
//   id: string;
//   heroTitle: string;
//   heroDescription: string;
//   heroImage: string;
  
//   donationOptions: {
//     id: string;
//     title: string;
//     description: string;
//     icon: string;
//     order: number;
//   }[];
  
//   bankAccounts: {
//     bank: string;
//     accountNumber: string;
//     accountName: string;
//     branch: string;
//   }[];
  
//   taxBenefits: {
//     title: string;
//     description: string;
//   };
  
//   testimonials: {
//     id: string;
//     name: string;
//     role: string;
//     message: string;
//     photo?: string;
//   }[];
  
//   updatedAt: string;
// }

// // ============ BERITA & KEGIATAN ============
// export  interface NewsArticle {
//   id: string;
//   slug: string;
//   title: string;
//   excerpt: string;
//   content: string; // Rich text HTML
//   image: string;
//   category: string;
//   tags: string[];
//   author: string;
//   publishDate: string;
//   isFeatured: boolean;
//   isPublished: boolean;
//   views: number;
//   createdAt: string;
//   updatedAt: string;
// }

// export  interface KegiatanEvent {
//   id: string;
//   title: string;
//   description: string;
//   date: string;
//   time: string;
//   location: string;
//   category: string;
//   image: string;
//   registrationLink?: string;
//   capacity?: number;
//   registeredCount?: number;
//   isFeatured: boolean;
//   isActive: boolean;
//   createdAt: string;
//   updatedAt: string;
// }

// // ============ PERPUSTAKAAN CONTENT ============
// export  interface PerpustakaanContent {
//   id: string;
//   heroTitle: string;
//   heroDescription: string;
//   heroImage: string;
  
//   services: {
//     id: string;
//     title: string;
//     description: string;
//     icon: string;
//     order: number;
//   }[];
  
//   operatingHours: {
//     weekdays: string;
//     saturday: string;
//     sunday: string;
//   };
  
//   borrowingRules: {
//     userType: string;
//     maxBooks: number;
//     maxDays: number;
//     renewalTimes: number;
//   }[];
  
//   digitalResources: {
//     title: string;
//     description: string;
//     link: string;
//   }[];
  
//   contactLibrarian: {
//     email: string;
//     phone: string;
//     whatsapp: string;
//   };
  
//   updatedAt: string;
// }

// export  interface BookCatalog {
//   id: string;
//   title: string;
//   author: string;
//   publisher: string;
//   year: string;
//   isbn: string;
//   category: string;
//   subjects: string[];
//   copies: number;
//   available: number;
//   location: string;
//   coverImage?: string;
//   description?: string;
// }

// // ============ KEHIDUPAN KAMPUS CONTENT ============
// export  interface KehidupanKampusContent {
//   id: string;
//   heroTitle: string;
//   heroDescription: string;
//   heroImage: string;
  
//   activities: {
//     id: string;
//     title: string;
//     description: string;
//     icon: string;
//     image: string;
//     order: number;
//   }[];
  
//   dormitory: {
//     title: string;
//     description: string;
//     facilities: string[];
//     rules: string[];
//     photos: string[];
//   };
  
//   studentOrganizations: {
//     id: string;
//     name: string;
//     description: string;
//     logo?: string;
//     contactPerson: string;
//   }[];
  
//   updatedAt: string;
// }

// // ============ KONTAK CONTENT ============
// export  interface KontakContent {
//   id: string;
//   heroTitle: string;
//   heroDescription: string;
  
//   mainContact: {
//     address: string;
//     city: string;
//     province: string;
//     postalCode: string;
//     phone: string;
//     whatsapp: string;
//     email: string;
//     mapEmbedUrl: string;
//     coordinates: {
//       latitude: number;
//       longitude: number;
//     };
//   };
  
//   departments: {
//     id: string;
//     name: string;
//     email: string;
//     phone?: string;
//     icon: string;
//   }[];
  
//   officeHours: {
//     weekdays: string;
//     saturday: string;
//     sunday: string;
//   };
  
//   socialMedia: {
//     facebook?: string;
//     instagram?: string;
//     youtube?: string;
//     linkedin?: string;
//     twitter?: string;
//   };
  
//   contactForm: {
//     isActive: boolean;
//     submitEndpoint: string;
//   };
  
//   faq: {
//     question: string;
//     answer: string;
//   }[];
  
//   updatedAt: string;
// }

// // ============ SITE SETTINGS ============
// export  interface SiteSettings {
//   id: string;
  
//   general: {
//     siteName: string;
//     tagline: string;
//     logo: string;
//     favicon: string;
//     timezone: string;
//     language: string;
//     dateFormat: string;
//   };
  
//   seo: {
//     defaultTitle: string;
//     defaultDescription: string;
//     keywords: string[];
//     googleAnalyticsId?: string;
//     googleSearchConsoleId?: string;
//     ogImage: string;
//   };
  
//   contact: {
//     address: string;
//     phone: string;
//     whatsapp: string;
//     email: string;
//   };
  
//   socialMedia: {
//     facebook?: string;
//     instagram?: string;
//     youtube?: string;
//     linkedin?: string;
//     twitter?: string;
//   };
  
//   banking: {
//     accounts: {
//       bank: string;
//       accountNumber: string;
//       accountName: string;
//       branch: string;
//     }[];
//   };
  
//   email: {
//     smtpServer: string;
//     smtpPort: number;
//     username: string;
//     fromEmail: string;
//     fromName: string;
//   };
  
//   maintenance: {
//     isEnabled: boolean;
//     message: string;
//   };
  
//   updatedAt: string;
//   updatedBy: string;
// }

// // ============ USER & ROLES ============
// export  interface User {
//   id: string;
//   name: string;
//   email: string;
//   username: string;
//   avatar?: string;
//   role: string;
//   isActive: boolean;
//   lastLogin?: string;
//   createdAt: string;
//   updatedAt: string;
// }

// export  interface Role {
//   id: string;
//   name: string;
//   description: string;
//   permissions: {
//     module: string;
//     actions: ('create' | 'read' | 'update' | 'delete' | 'publish')[];
//   }[];
//   isSystem: boolean; // Cannot be deleted
//   createdAt: string;
//   updatedAt: string;
// }

// // ============ AUDIT LOG ============
// export  interface AuditLog {
//   id: string;
//   userId: string;
//   userName: string;
//   action: 'created' | 'updated' | 'deleted' | 'published' | 'login' | 'logout';
//   resourceType: string;
//   resourceId: string;
//   resourceTitle?: string;
//   changes?: Record<string, { old: any; new: any }>;
//   ipAddress: string;
//   userAgent: string;
//   timestamp: string;
// }

// // ============ MEDIA LIBRARY ============
// export  interface MediaFile {
//   id: string;
//   filename: string;
//   originalName: string;
//   mimeType: string;
//   size: number; // bytes
//   width?: number;
//   height?: number;
//   url: string;
//   thumbnailUrl?: string;
//   alt?: string;
//   title?: string;
//   caption?: string;
//   description?: string;
//   folder?: string;
//   uploadedBy: string;
//   createdAt: string;
//   updatedAt: string;
// }

// // ============ CATEGORY & TAG ============
// export  interface Category {
//   id: string;
//   name: string;
//   slug: string;
//   description?: string;
//   parentId?: string;
//   color?: string;
//   order: number;
//   createdAt: string;
//   updatedAt: string;
// }

// export  interface Tag {
//   id: string;
//   name: string;
//   slug: string;
//   count: number; // Number of posts using this tag
//   createdAt: string;
// }
