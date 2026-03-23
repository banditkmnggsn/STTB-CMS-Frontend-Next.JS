import { api } from '@/lib/api'

// ============================================================
// Types & Interfaces
// ============================================================

export interface Role {
  id: string;
  name: string;
  description?: string;
  permissions?: any; // JSONB field dari DB
  _count?: {
    users: number;
  };
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  username: string;
  avatar: string | null;
  isActive: boolean;
  roleId: string;
  role: Role;
  lastLogin: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// ============================================================
// User Management Services (Admin Protected)
// ============================================================

/**
 * Mengambil daftar semua user (Paginated)
 * Endpoint: GET /api/users
 */
export async function getAllUsers(page = 1, limit = 10): Promise<PaginatedResponse<UserProfile>> {
  const res = await api.get<PaginatedResponse<UserProfile>>(`/api/users?page=${page}&limit=${limit}`)
  return res.data
}

/**
 * Update data user (termasuk ganti Role)
 * Endpoint: PUT /api/users/:id
 */
export async function updateUser(
  userId: string, 
  payload: Partial<UserProfile>
): Promise<UserProfile> {
  const res = await api.put<UserProfile>(`/api/users/${userId}`, payload)
  return res.data
}

/**
 * Hapus user
 * Endpoint: DELETE /api/users/:id
 */
export async function deleteUser(userId: string): Promise<void> {
  await api.delete(`/api/users/${userId}`)
}

// ============================================================
// Role & Permission Services (Admin Protected)
// ============================================================

/**
 * Mengambil semua daftar role yang tersedia
 * Endpoint: GET /api/roles
 */
export async function getAllRoles(): Promise<Role[]> {
  const res = await api.get<Role[]>('/api/roles')
  return res.data
}

/**
 * Update Permission Matrix untuk Role tertentu
 * Endpoint: PUT /api/roles/:id
 */
export async function updateRolePermissions(
  roleId: string, 
  permissions: Record<string, any>
): Promise<Role> {
  const res = await api.put<Role>(`/api/roles/${roleId}`, { permissions })
  return res.data
}

/**
 * Membuat role baru
 * Endpoint: POST /api/roles
 */
export async function createRole(payload: { name: string; description: string }): Promise<Role> {
  const res = await api.post<Role>('/api/roles', payload)
  return res.data
}

// ============================================================
// Auth / Personal Profile Services
// ============================================================

export async function getMyProfile(): Promise<UserProfile> {
  const res = await api.get<UserProfile>('/api/auth/me')
  return res.data
}

export async function updateAvatar(userId: string, avatarUrl: string): Promise<UserProfile> {
  const res = await api.put<UserProfile>(`/api/users/${userId}`, { avatar: avatarUrl })
  return res.data
}