import { api } from '@/lib/api'
import { PaginatedResponse } from './users.service'

export interface AuditLog {
  id: string;
  userId: string;
  user: {
    name: string;
    email: string;
  };
  action: string;
  resourceType: string;
  resourceId: string | null;
  ipAddress: string | null;
  userAgent: string | null;
  changes: any; // JSONB field untuk detail perubahan
  createdAt: string;
}

export interface AuditFilter {
  page?: number;
  limit?: number;
  userId?: string;
  action?: string;
  resourceType?: string;
}

/**
 * Mengambil daftar Audit Logs dari API
 * Endpoint: GET /api/audit-logs
 */
export async function getAuditLogs(filters: AuditFilter = {}): Promise<PaginatedResponse<AuditLog>> {
  const params = new URLSearchParams();
  if (filters.page) params.append('page', filters.page.toString());
  if (filters.limit) params.append('limit', filters.limit.toString());
  if (filters.action && filters.action !== 'All Actions') params.append('action', filters.action);
  if (filters.resourceType) params.append('resourceType', filters.resourceType);

  const res = await api.get<PaginatedResponse<AuditLog>>(`/api/audit-logs?${params.toString()}`);
  return res.data;
}