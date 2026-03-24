/**
 * Global API Response Wrapper
 */
export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

/**
 * Pagination Meta (Sesuai Guide 8.4)
 */
export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PaginatedData<T> {
  items: T[];
  pagination: PaginationMeta;
}

// ==========================================
// LEAD CENTER CONTENT MODELS
// ==========================================

export interface LeadHeroContent {
  id?: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  backgroundImage: string;
  updatedAt?: string;
}

export interface LeadPillar {
  id: string;
  title: string;
  description: string;
  icon?: string;
  iconColor?: string;
  backgroundColor?: string;
  order: number;
  isActive: boolean;
}

export interface LeadProgram {
  id: string;
  title: string;
  description: string;
  batch: string;
  status: string; // e.g., 'open', 'closed', 'upcoming'
  image: string;
  registrationLink: string;
  order: number;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface LeadEvent {
  id: string;
  title: string;
  date: string;    // Tanggal (misal: "24")
  month: string;   // Bulan (misal: "Mar")
  time: string;    // Waktu (misal: "09:00 - 12:00")
  location: string;
  type: string;    // 'online' | 'offline'
  description?: string;
  registrationLink: string;
  isLeadEvent: boolean;
  order: number;
  isActive: boolean;
  createdAt?: string;
}

// ==========================================
// MEDIA MODELS
// ==========================================

export interface MediaFile {
id: string;
  filename: string;
  url: string;
  size: number;
  mimeType: string; // Pastikan menggunakan T ini
  folder?: string;
  createdAt?: string;
}