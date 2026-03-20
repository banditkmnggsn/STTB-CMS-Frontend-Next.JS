'use client'

import { PageHeader } from '@/components/admin/PageHeader'
import { DataTable, Column } from '@/components/admin/DataTable';
import { StatusBadge } from '@/components/admin/StatusBadge';
import { Plus, Mail } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  lastLogin: string;
}

export default function UsersPage() {
  const users: User[] = [
    { id: '1', name: 'John Doe', email: 'john@sttb.ac.id', role: 'Content Admin', status: 'active', lastLogin: '2026-03-09' },
    { id: '2', name: 'Jane Smith', email: 'jane@sttb.ac.id', role: 'Editor', status: 'active', lastLogin: '2026-03-09' },
    { id: '3', name: 'Mike Johnson', email: 'mike@sttb.ac.id', role: 'Editor', status: 'active', lastLogin: '2026-03-08' },
    { id: '4', name: 'Sarah Williams', email: 'sarah@sttb.ac.id', role: 'Approver', status: 'active', lastLogin: '2026-03-07' },
    { id: '5', name: 'David Brown', email: 'david@sttb.ac.id', role: 'Editor', status: 'inactive', lastLogin: '2026-02-28' },
  ];

  const columns: Column<User>[] = [
    {
      key: 'name',
      label: 'User',
      sortable: true,
      render: (item) => (
        <div>
          <p className="font-medium text-gray-900">{item.name}</p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <Mail size={12} />
            {item.email}
          </p>
        </div>
      )
    },
    {
      key: 'role',
      label: 'Role',
      sortable: true,
      render: (item) => (
        <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
          {item.role}
        </span>
      )
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (item) => <StatusBadge status={item.status} />
    },
    {
      key: 'lastLogin',
      label: 'Last Login',
      sortable: true,
      render: (item) => new Date(item.lastLogin).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    },
  ];

  return (
    <>
      <PageHeader
        title="User Management"
        description="Manage system users and their access"
        breadcrumbs={[{ label: 'Users' }]}
        actions={
          <button className="px-4 py-2 bg-[#C1121F] text-white rounded-lg hover:bg-[#9A0E19] transition-colors flex items-center gap-2">
            <Plus size={18} />
            Add User
          </button>
        }
      />

      <div className="p-8">
        <DataTable
          columns={columns}
          data={users}
          selectable
          emptyMessage="No users found"
        />

        {/* User Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-sm text-gray-600 mb-1">Total Users</p>
            <p className="text-2xl font-bold text-gray-900">{users.length}</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-sm text-gray-600 mb-1">Active Users</p>
            <p className="text-2xl font-bold text-green-600">{users.filter(u => u.status === 'active').length}</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-sm text-gray-600 mb-1">Admins</p>
            <p className="text-2xl font-bold text-blue-600">{users.filter(u => u.role === 'Content Admin').length}</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-sm text-gray-600 mb-1">Editors</p>
            <p className="text-2xl font-bold text-purple-600">{users.filter(u => u.role === 'Editor').length}</p>
          </div>
        </div>
      </div>
    </>
  );
}
