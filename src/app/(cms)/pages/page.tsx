'use client'
import { PageHeader } from '@/components/admin/PageHeader';
import { DataTable, Column } from '@/components/admin/DataTable';
import { StatusBadge } from '@/components/admin/StatusBadge';
import { Plus } from 'lucide-react';

interface PageItem {
  id: string;
  title: string;
  path: string;
  lastUpdated: string;
  status: 'published' | 'draft';
}

export default function PagesManagementPage() {
  const pages: PageItem[] = [
    { id: '1', title: 'About Us', path: '/tentang/sejarah', lastUpdated: '2026-03-01', status: 'published' },
    { id: '2', title: 'Admissions', path: '/admisi', lastUpdated: '2026-02-28', status: 'published' },
    { id: '3', title: 'Contact', path: '/kontak', lastUpdated: '2026-02-25', status: 'published' },
    { id: '4', title: 'FAQ', path: '/faq', lastUpdated: '2026-02-20', status: 'draft' },
  ];

  const columns: Column<PageItem>[] = [
    { key: 'title', label: 'Page Title', sortable: true },
    { key: 'path', label: 'URL Path', sortable: true },
    { 
      key: 'lastUpdated', 
      label: 'Last Updated', 
      sortable: true,
      render: (item) => new Date(item.lastUpdated).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      })
    },
    { 
      key: 'status', 
      label: 'Status', 
      render: (item) => <StatusBadge status={item.status} />
    },
  ];

  return (
    <>
      <PageHeader
        title="Page Management"
        description="Manage static pages and landing pages"
        breadcrumbs={[{ label: 'Pages' }]}
        actions={
          <button className="px-4 py-2 bg-[#C1121F] text-white rounded-lg hover:bg-[#9A0E19] transition-colors flex items-center gap-2">
            <Plus size={18} />
            Create Page
          </button>
        }
      />

      <div className="p-8">
        <DataTable
          columns={columns}
          data={pages}
          selectable
          emptyMessage="No pages found"
        />
      </div>
    </>
  );
}
