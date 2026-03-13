import { authStorage } from './auth';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3000/api';

type ApiEnvelope<T> = {
  success: boolean;
  data: T;
  message?: string;
};

type PaginatedData<T> = {
  items: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
};

export class ApiError extends Error {
  status: number;
  details: unknown;

  constructor(message: string, status: number, details?: unknown) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.details = details;
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const token = authStorage.getAccessToken();
  const headers = new Headers(init?.headers);

  if (!headers.has('Content-Type') && init?.body && !(init.body instanceof FormData)) {
    headers.set('Content-Type', 'application/json');
  }

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers,
    cache: 'no-store',
  });

  let payload: unknown = null;
  try {
    payload = await response.json();
  } catch {
    payload = null;
  }

  if (!response.ok) {
    const errorPayload = payload as { error?: string; details?: unknown } | null;
    throw new ApiError(
      errorPayload?.error ?? `Request failed with status ${response.status}`,
      response.status,
      errorPayload?.details
    );
  }

  return payload as T;
}

export type LoginResult = {
  user: {
    id: string;
    email: string;
    username: string;
    name: string;
    avatar: string | null;
    isActive: boolean;
    role: {
      id: string;
      name: string;
    };
  };
  accessToken: string;
  refreshToken: string;
};

export type HomeContentRow<T = unknown> = {
  id: string;
  section: string;
  data: T;
  isActive: boolean;
  updatedAt: string;
};

export type LeadContentRow<T = unknown> = {
  id: string;
  section: string;
  data: T;
  isActive: boolean;
  updatedAt: string;
};

export type NewsItem = {
  id: string;
  slug: string;
  title: string;
  excerpt?: string | null;
  content: string;
  featuredImage?: string | null;
  publishDate?: string | null;
  category?: { name: string } | null;
  author?: { name: string } | null;
};

export type ProgramItem = {
  id: string;
  slug: string;
  title: string;
  degree?: string | null;
  shortDescription?: string | null;
  heroImage?: string | null;
  heroDescription?: string | null;
  academicInfo?: Record<string, unknown> | null;
  curriculumCategories?: Array<Record<string, unknown>> | null;
  courses?: Array<Record<string, unknown>> | null;
  graduateProfile?: Record<string, unknown> | Array<unknown> | null;
  careerOpportunities?: Record<string, unknown> | Array<unknown> | null;
  concentrations?: Record<string, unknown> | Array<unknown> | null;
  ctaTitle?: string | null;
  ctaDescription?: string | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
  isActive?: boolean;
  updatedAt?: string;
};

export type CmsPageItem = {
  id: string;
  slug: string;
  title: string;
  data: Record<string, unknown> | Array<unknown> | string | null;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type SiteSettingRow<T = unknown> = {
  id: string;
  category: string;
  data: T;
  updatedAt: string;
};

export type RoleItem = {
  id: string;
  name: string;
};

export type AdminUserItem = {
  id: string;
  email: string;
  username: string;
  name: string;
  isActive: boolean;
  role: {
    id: string;
    name: string;
  };
};

export type LecturerItem = {
  id: string;
  name: string;
  position?: string | null;
  specialization?: string | null;
  education?: string | null;
  email?: string | null;
  imageUrl?: string | null;
  order?: number | null;
  isActive?: boolean;
};

export type EventItem = {
  id: string;
  title: string;
  description?: string | null;
  eventDate: string;
  eventTime?: string | null;
  location?: string | null;
  category?: string | null;
  eventType?: string | null;
  isLeadEvent?: boolean;
  image?: string | null;
  registrationLink?: string | null;
  capacity?: number | null;
  isFeatured?: boolean;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export async function login(identifier: string, password: string) {
  const response = await request<ApiEnvelope<LoginResult>>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ identifier, password }),
  });

  return response.data;
}

export async function fetchHomeSection<T = unknown>(section: string) {
  const response = await request<ApiEnvelope<HomeContentRow<T> | null>>(`/home-content/${section}`);
  return response.data;
}

export async function updateHomeSection<T = unknown>(section: string, data: T) {
  const response = await request<ApiEnvelope<HomeContentRow<T>>>(`/home-content/${section}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
  return response.data;
}

export async function fetchLeadSection<T = unknown>(section: string) {
  const response = await request<ApiEnvelope<LeadContentRow<T> | null>>(`/lead-content/${section}`);
  return response.data;
}

export async function fetchLeadPrograms<T = unknown>() {
  const response = await request<ApiEnvelope<T[]>>('/lead-content/programs');
  return response.data;
}

export async function updateLeadSection<T = unknown>(section: string, data: T) {
  const response = await request<ApiEnvelope<LeadContentRow<T>>>(`/lead-content/${section}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
  return response.data;
}

export async function fetchNews(params?: Record<string, string | number | boolean | undefined>) {
  const query = new URLSearchParams();

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        query.set(key, String(value));
      }
    });
  }

  const suffix = query.toString() ? `?${query.toString()}` : '';
  const response = await request<ApiEnvelope<PaginatedData<NewsItem>>>(`/news${suffix}`);
  return response.data;
}

export async function fetchNewsBySlug(slug: string) {
  const response = await request<ApiEnvelope<NewsItem>>(`/news/${slug}`);
  return response.data;
}

export async function fetchProgramBySlug(slug: string) {
  const response = await request<ApiEnvelope<ProgramItem>>(`/programs/${slug}`);
  return response.data;
}

export async function fetchPageBySlug(slug: string) {
  const response = await request<ApiEnvelope<CmsPageItem>>(`/pages/${slug}`);
  return response.data;
}

export async function fetchPages() {
  const response = await request<ApiEnvelope<CmsPageItem[]>>('/pages');
  return response.data;
}

export async function createPage(data: { title: string; slug: string; data: unknown; isActive?: boolean }) {
  const response = await request<ApiEnvelope<CmsPageItem>>('/pages', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  return response.data;
}

export async function updatePage(slug: string, data: Partial<{ title: string; data: unknown; isActive: boolean }>) {
  const response = await request<ApiEnvelope<CmsPageItem>>(`/pages/${slug}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
  return response.data;
}

export async function deletePage(slug: string) {
  await request<ApiEnvelope<null>>(`/pages/${slug}`, { method: 'DELETE' });
}

export async function fetchLecturers() {
  const response = await request<ApiEnvelope<LecturerItem[]>>('/lecturers');
  return response.data;
}

export async function fetchEvents(params?: Record<string, string | number | boolean | undefined>) {
  const query = new URLSearchParams();

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        query.set(key, String(value));
      }
    });
  }

  const suffix = query.toString() ? `?${query.toString()}` : '';
  const response = await request<ApiEnvelope<PaginatedData<EventItem>>>(`/events${suffix}`);
  return response.data;
}

export async function createNews(data: Omit<NewsItem, 'id'>) {
  const response = await request<ApiEnvelope<NewsItem>>('/news', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  return response.data;
}

export async function updateNews(id: string, data: Partial<NewsItem>) {
  const response = await request<ApiEnvelope<NewsItem>>(`/news/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
  return response.data;
}

export async function deleteNews(id: string) {
  await request<ApiEnvelope<null>>(`/news/${id}`, { method: 'DELETE' });
}

export async function fetchAllPrograms() {
  const response = await request<ApiEnvelope<ProgramItem[]>>('/programs');
  return response.data;
}

export async function updateProgramBySlug(slug: string, data: Partial<ProgramItem>) {
  const response = await request<ApiEnvelope<ProgramItem>>(`/programs/${slug}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
  return response.data;
}

export async function fetchSiteSettings(category?: string) {
  const path = category ? `/site-settings/${category}` : '/site-settings';
  const response = await request<ApiEnvelope<SiteSettingRow | SiteSettingRow[]>>(path);
  return response.data;
}

export async function fetchRoles() {
  const response = await request<ApiEnvelope<RoleItem[]>>('/roles');
  return response.data;
}

export async function createAdminUser(data: {
  email: string;
  username: string;
  password: string;
  name: string;
  roleId: string;
  isActive?: boolean;
}) {
  const response = await request<ApiEnvelope<AdminUserItem>>('/users', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  return response.data;
}

export async function updateSiteSettings(category: string, data: unknown) {
  const response = await request<ApiEnvelope<SiteSettingRow>>(`/site-settings/${category}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
  return response.data;
}

export { API_BASE_URL };
