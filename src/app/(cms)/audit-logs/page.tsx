'use client'
import { PageHeader } from '@/components/admin/PageHeader'
import { DataTable, Column } from '@/components/admin/DataTable';
import { Filter } from 'lucide-react';
import { use } from 'react';

interface AuditLog {
  id: string;
  user: string;
  action: string;
  resource: string;
  timestamp: string;
  ipAddress: string;
}

export default function AuditLogsPage() {
  const logs: AuditLog[] = [
    { id: '1', user: 'John Doe', action: 'Published', resource: 'Wisuda STTB 2026', timestamp: '2026-03-09 14:35:22', ipAddress: '192.168.1.100' },
    { id: '2', user: 'Jane Smith', action: 'Updated', resource: 'Homepage Banner', timestamp: '2026-03-09 14:20:15', ipAddress: '192.168.1.101' },
    { id: '3', user: 'Mike Johnson', action: 'Uploaded', resource: '5 images to Media Library', timestamp: '2026-03-09 13:45:08', ipAddress: '192.168.1.102' },
    { id: '4', user: 'Sarah Williams', action: 'Created', resource: 'Seminar Article Draft', timestamp: '2026-03-09 12:30:45', ipAddress: '192.168.1.103' },
    { id: '5', user: 'Admin User', action: 'Deleted', resource: 'Old Banner Image', timestamp: '2026-03-09 11:15:33', ipAddress: '192.168.1.104' },
    { id: '6', user: 'John Doe', action: 'Logged in', resource: 'Admin Panel', timestamp: '2026-03-09 09:00:12', ipAddress: '192.168.1.100' },
  ];

  const columns: Column<AuditLog>[] = [
    {
      key: 'timestamp',
      label: 'Timestamp',
      sortable: true,
      render: (item) => (
        <div>
          <p className="text-sm font-medium text-gray-900">
            {new Date(item.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </p>
          <p className="text-xs text-gray-500">
            {new Date(item.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      )
    },
    { key: 'user', label: 'User', sortable: true },
    { 
      key: 'action', 
      label: 'Action', 
      sortable: true,
      render: (item) => (
        <span className="inline-flex px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
          {item.action}
        </span>
      )
    },
    { key: 'resource', label: 'Resource' },
    { key: 'ipAddress', label: 'IP Address' },
  ];

  return (
    <>
      <PageHeader
        title="Audit Logs"
        description="Track all system activities and changes"
        breadcrumbs={[{ label: 'Audit Logs' }]}
        actions={
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            Export Logs
          </button>
        }
      />

      <div className="p-8">
        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filters:</span>
            </div>
            
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F]">
              <option>All Actions</option>
              <option>Published</option>
              <option>Updated</option>
              <option>Deleted</option>
              <option>Created</option>
              <option>Logged in</option>
            </select>

            <input
              type="date"
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
            />
          </div>
        </div>

        <DataTable
          columns={columns}
          data={logs}
          emptyMessage="No audit logs found"
        />
      </div>
    </>
  );
}
