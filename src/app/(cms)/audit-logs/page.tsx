'use client'

import React, { useState, useEffect } from 'react';
import { PageHeader } from '@/components/admin/PageHeader'
import { DataTable, Column } from '@/components/admin/DataTable';
import { Filter, Loader2, Globe, User as UserIcon } from 'lucide-react';
import { getAuditLogs, AuditLog } from '@/services/audit.service';

export default function AuditLogsPage() {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState({ page: 1, limit: 10, total: 0 });
  
  // Filter States
  const [actionFilter, setActionFilter] = useState('All Actions');

  const fetchLogs = async (page = 1, action = 'All Actions') => {
    setIsLoading(true);
    try {
      const data = await getAuditLogs({ page, limit: 15, action });
      setLogs(data.items);
      setPagination(data.pagination);
    } catch (error) {
      console.error("Failed to fetch audit logs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs(1, actionFilter);
  }, [actionFilter]);

  const columns: Column<AuditLog>[] = [
    {
      key: 'createdAt',
      label: 'Timestamp',
      sortable: true,
      render: (item) => (
        <div className="min-w-[140px]">
          <p className="text-sm font-medium text-gray-900">
            {new Date(item.createdAt).toLocaleDateString('id-ID', { 
              day: '2-digit', month: 'short', year: 'numeric' 
            })}
          </p>
          <p className="text-xs text-gray-500">
            {new Date(item.createdAt).toLocaleTimeString('id-ID', { 
              hour: '2-digit', minute: '2-digit', second: '2-digit' 
            })}
          </p>
        </div>
      )
    },
    { 
      key: 'user', 
      label: 'User',
      render: (item) => (
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-gray-100 rounded-full text-gray-500">
            <UserIcon size={14} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">{item.user?.name || 'System'}</p>
            <p className="text-[10px] text-gray-500">{item.user?.email || 'automated@sttb.ac.id'}</p>
          </div>
        </div>
      )
    },
    { 
      key: 'action', 
      label: 'Action', 
      render: (item) => {
        const getActionColor = (action: string) => {
          if (action.includes('CREATE')) return 'bg-green-100 text-green-700';
          if (action.includes('DELETE')) return 'bg-red-100 text-red-700';
          if (action.includes('UPDATE')) return 'bg-amber-100 text-amber-700';
          return 'bg-blue-100 text-blue-700';
        };
        return (
          <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${getActionColor(item.action)}`}>
            {item.action}
          </span>
        );
      }
    },
    { 
      key: 'resourceType', 
      label: 'Resource',
      render: (item) => (
        <div className="max-w-[200px]">
          <p className="text-xs font-semibold text-gray-700 uppercase tracking-tighter">{item.resourceType}</p>
          <p className="text-[10px] text-gray-400 truncate">ID: {item.resourceId || 'N/A'}</p>
        </div>
      )
    },
    { 
      key: 'ipAddress', 
      label: 'Network',
      render: (item) => (
        <div className="flex items-center gap-2 text-gray-500">
          <Globe size={14} />
          <span className="text-xs font-mono">{item.ipAddress || '0.0.0.0'}</span>
        </div>
      )
    },
  ];

  return (
    <>
      <PageHeader
        title="Audit Logs"
        description="Monitoring log aktivitas dan perubahan sistem secara real-time."
        breadcrumbs={[{ label: 'Audit Logs' }]}
        actions={
          <button 
            onClick={() => window.print()}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            Export to PDF
          </button>
        }
      />

      <div className="p-8">
        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter size={18} className="text-gray-400" />
                <span className="text-sm font-semibold text-gray-700">Filter By:</span>
              </div>
              
              <select 
                value={actionFilter}
                onChange={(e) => setActionFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F] bg-white"
              >
                <option>All Actions</option>
                <option value="LOGIN">LOGIN</option>
                <option value="CREATE">CREATE</option>
                <option value="UPDATE">UPDATE</option>
                <option value="DELETE">DELETE</option>
              </select>
            </div>

            <div className="text-xs text-gray-400 font-medium">
              Showing {logs.length} of {pagination.total} entries
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="bg-white rounded-lg border border-gray-200 p-20 flex flex-col items-center justify-center">
            <Loader2 className="animate-spin text-[#C1121F] mb-4" size={40} />
            <p className="text-gray-500 animate-pulse">Synchronizing logs from server...</p>
          </div>
        ) : (
          <DataTable
            columns={columns}
            data={logs}
            emptyMessage="No audit logs recorded in the system yet."
          />
        )}
      </div>
    </>
  );
}