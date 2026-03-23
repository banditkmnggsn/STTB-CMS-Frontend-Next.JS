/**
 * api.ts
 * Base API client untuk semua request ke backend STTB.
 * Handle: base URL, attach token, auto refresh token, global error handling.
 */

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

// ============================================================
// Token helpers — support localStorage (rememberMe) & sessionStorage
// ============================================================

export function getAccessToken(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('accessToken') ?? sessionStorage.getItem('accessToken')
}

export function getRefreshToken(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('refreshToken') ?? sessionStorage.getItem('refreshToken')
}

export function saveTokens(
  accessToken: string,
  refreshToken: string,
  rememberMe: boolean
) {
  const storage = rememberMe ? localStorage : sessionStorage
  storage.setItem('accessToken', accessToken)
  storage.setItem('refreshToken', refreshToken)
}

export function clearTokens() {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
  localStorage.removeItem('user')
  sessionStorage.removeItem('accessToken')
  sessionStorage.removeItem('refreshToken')
  sessionStorage.removeItem('user')
}

export function saveUser(user: object, rememberMe: boolean) {
  const storage = rememberMe ? localStorage : sessionStorage
  storage.setItem('user', JSON.stringify(user))
}

export function getUser<T = any>(): T | null {
  if (typeof window === 'undefined') return null
  const raw = localStorage.getItem('user') ?? sessionStorage.getItem('user')
  if (!raw) return null
  try {
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

// ============================================================
// Auto refresh token
// ============================================================

let isRefreshing = false
let refreshQueue: Array<(token: string) => void> = []

async function tryRefreshToken(): Promise<string | null> {
  const refreshToken = getRefreshToken()
  if (!refreshToken) return null

  if (isRefreshing) {
    // Kalau sedang refresh, antri request lain
    return new Promise((resolve) => {
      refreshQueue.push((newToken) => resolve(newToken))
    })
  }

  isRefreshing = true

  try {
    const res = await fetch(`${BASE_URL}/api/auth/refresh`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refreshToken }),
    })

    const result = await res.json()

    if (!res.ok || !result.success) {
      clearTokens()
      // Redirect ke login kalau refresh gagal
      if (typeof window !== 'undefined') window.location.href = '/login'
      return null
    }

    const { accessToken, refreshToken: newRefreshToken } = result.data

    // Tentukan storage mana yang aktif
    const isLocal = !!localStorage.getItem('refreshToken')
    saveTokens(accessToken, newRefreshToken, isLocal)

    // Resolve semua request yang antri
    refreshQueue.forEach((cb) => cb(accessToken))
    refreshQueue = []

    return accessToken
  } catch {
    clearTokens()
    if (typeof window !== 'undefined') window.location.href = '/login'
    return null
  } finally {
    isRefreshing = false
  }
}

// ============================================================
// Tipe response global dari BE
// ============================================================

export interface ApiResponse<T = any> {
  success: boolean
  message?: string
  data: T
}

export interface PaginatedData<T = any> {
  items: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface ApiError {
  success: false
  error: string
  details?: any
}

// ============================================================
// Core fetch wrapper
// ============================================================

interface FetchOptions extends RequestInit {
  skipAuth?: boolean       // true untuk endpoint public
  skipRefresh?: boolean    // internal, hindari infinite loop saat refresh
}

export async function apiFetch<T = any>(
  path: string,
  options: FetchOptions = {}
): Promise<ApiResponse<T>> {
  const { skipAuth = false, skipRefresh = false, ...fetchOptions } = options

  const headers: Record<string, string> = {
    ...(fetchOptions.body && !(fetchOptions.body instanceof FormData)
      ? { 'Content-Type': 'application/json' }
      : {}),
    ...(fetchOptions.headers as Record<string, string> || {}),
  }

  if (!skipAuth) {
    const token = getAccessToken()
    if (token) headers['Authorization'] = `Bearer ${token}`
  }

  const res = await fetch(`${BASE_URL}${path}`, {
    ...fetchOptions,
    headers,
  })

  // Token expired → coba refresh lalu retry sekali
  if (res.status === 401 && !skipAuth && !skipRefresh) {
    const newToken = await tryRefreshToken()
    if (newToken) {
      return apiFetch<T>(path, { ...options, skipRefresh: true })
    }
  }

  const result = await res.json()

  if (!res.ok) {
    throw {
      success: false,
      error: result.error || result.message || 'Terjadi kesalahan',
      details: result.details,
      status: res.status,
    } as ApiError & { status: number }
  }

  return result as ApiResponse<T>
}

// ============================================================
// Shorthand helpers
// ============================================================

export const api = {
  get: <T = any>(path: string, options?: FetchOptions) =>
    apiFetch<T>(path, { method: 'GET', ...options }),

  post: <T = any>(path: string, body?: object, options?: FetchOptions) =>
    apiFetch<T>(path, {
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined,
      ...options,
    }),

  put: <T = any>(path: string, body?: object, options?: FetchOptions) =>
    apiFetch<T>(path, {
      method: 'PUT',
      body: body ? JSON.stringify(body) : undefined,
      ...options,
    }),

  delete: <T = any>(path: string, options?: FetchOptions) =>
    apiFetch<T>(path, { method: 'DELETE', ...options }),

  upload: <T = any>(path: string, formData: FormData, options?: FetchOptions) =>
    apiFetch<T>(path, {
      method: 'POST',
      body: formData,
      ...options,
      // Jangan set Content-Type — biarkan browser set boundary multipart
    }),
}