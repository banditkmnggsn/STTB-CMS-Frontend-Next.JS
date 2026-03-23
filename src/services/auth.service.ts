/**
 * auth.service.ts
 * Semua operasi autentikasi: login, register, logout, refresh, me.
 * Berdasarkan kontrak API BE STTB.
 */

import {
  api,
  ApiResponse,
  saveTokens,
  saveUser,
  clearTokens,
  getAccessToken,
} from '@/lib/api'

// ============================================================
// Tipe data dari BE
// ============================================================

export interface AuthUser {
  id: string
  email: string
  username: string
  name: string
  avatar: string | null
  isActive: boolean
  role: {
    id: string
    name: string // 'admin' | 'editor' | 'author'
  }
}

export interface LoginPayload {
  identifier: string  // email atau username — sesuai BE
  password: string
}

export interface RegisterPayload {
  name: string
  email: string
  username: string
  password: string
}

export interface AuthData {
  user: AuthUser
  accessToken: string
  refreshToken: string
}

// ============================================================
// Role helpers
// ============================================================

const ADMIN_ROLES = ['admin', 'editor', 'author']

export function isAdminRole(roleName: string): boolean {
  return ADMIN_ROLES.includes(roleName.toLowerCase())
}

// ============================================================
// Auth services
// ============================================================

/**
 * Login user.
 * Otomatis simpan token ke storage sesuai rememberMe.
 * Return user data untuk routing di component.
 */
export async function login(
  payload: LoginPayload,
  rememberMe: boolean = false
): Promise<AuthData> {
  const res = await api.post<AuthData>('/api/auth/login', payload, {
    skipAuth: true,
  })

  const { accessToken, refreshToken, user } = res.data

  saveTokens(accessToken, refreshToken, rememberMe)
  saveUser(user, rememberMe)

  return res.data
}

/**
 * Register user baru.
 * Setelah register langsung login otomatis jika BE return token.
 */
export async function register(
  payload: RegisterPayload,
  rememberMe: boolean = false
): Promise<AuthData> {
  const res = await api.post<AuthData>('/api/auth/register', payload, {
    skipAuth: true,
  })

  // Kalau BE langsung return token setelah register
  if (res.data?.accessToken) {
    const { accessToken, refreshToken, user } = res.data
    saveTokens(accessToken, refreshToken, rememberMe)
    saveUser(user, rememberMe)
  }

  return res.data
}

/**
 * Logout — hapus token di BE dan bersihkan storage.
 */
export async function logout(): Promise<void> {
  try {
    const token = getAccessToken()
    if (token) {
      await api.post('/api/auth/logout', {})
    }
  } catch {
    // Tetap lanjut clear meski request gagal
  } finally {
    clearTokens()
  }
}

/**
 * Ambil data user yang sedang login dari BE.
 * Berguna untuk validasi session atau refresh data user.
 */
export async function getMe(): Promise<AuthUser> {
  const res = await api.get<AuthUser>('/api/auth/me')
  return res.data
}

/**
 * Cek apakah user saat ini adalah admin.
 * Hanya ping endpoint admin-only di BE.
 */
export async function checkAdminAccess(): Promise<boolean> {
  try {
    await api.get('/api/auth/admin-only')
    return true
  } catch {
    return false
  }
}