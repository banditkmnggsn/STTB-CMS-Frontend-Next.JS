/**
 * settings.service.ts
 * Service untuk operasi site settings.
 * Endpoint: GET /api/site-settings, PUT /api/site-settings/:category
 */

import { api } from '@/lib/api'

// ============================================================
// Tipe data sesuai BE
// ============================================================

export interface GeneralSettings {
  siteName: string
  tagline: string
  logo: string
  favicon: string
  timezone: string
  language: string
  dateFormat: string
}

export interface ContactSettings {
  address: string
  phone: string
  whatsapp: string
  email: string
}

export interface SocialSettings {
  facebook?: string
  instagram?: string
  youtube?: string
  linkedin?: string
  twitter?: string
}

export interface SeoSettings {
  defaultTitle: string
  defaultDescription: string
  keywords: string[]
  googleAnalyticsId?: string
  ogImage: string
}

export interface BankAccount {
  bank: string
  accountNumber: string
  accountName: string
  branch: string
}

export interface BankingSettings {
  accounts: BankAccount[]
}

export interface AllSettings {
  general?: GeneralSettings
  contact?: ContactSettings
  social?: SocialSettings
  seo?: SeoSettings
  banking?: BankingSettings
}

// ============================================================
// Services
// ============================================================

/**
 * Ambil semua settings sekaligus
 */
export async function getAllSettings(): Promise<AllSettings> {
  const res = await api.get<AllSettings>('/api/site-settings')
  return res.data
}

/**
 * Ambil settings per kategori
 */
export async function getSettings<T>(
  category: 'general' | 'contact' | 'social' | 'seo' | 'banking'
): Promise<T> {
  const res = await api.get<T>(`/api/site-settings/${category}`)
  return res.data
}

/**
 * Update settings per kategori
 */
export async function updateSettings<T>(
  category: 'general' | 'contact' | 'social' | 'seo' | 'banking',
  payload: Partial<T>
): Promise<T> {
  const res = await api.put<T>(`/api/site-settings/${category}`, payload)
  return res.data
}