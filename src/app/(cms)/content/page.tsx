'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from '@/components/admin/PageHeader';
import { DataTable, Column } from '@/components/admin/DataTable';
import { StatusBadge } from '@/components/admin/StatusBadge';
import { Plus, Filter, Download, MoreVertical, Edit, Trash2, Eye } from 'lucide-react';
import { navigate } from 'next/dist/client/components/segment-cache/navigation';

interface ContentItem {
  id: string;
  title: string;
  type: string;
  author: string;
  lastUpdated: string;
  status: 'draft' | 'in-review' | 'approved' | 'published' | 'scheduled';
  views?: number;
}

export default function ContentListPage() {
  const router = useRouter();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterType, setFilterType] = useState<string>('all');

  const contentData: ContentItem[] = [
    {
      id: '1',
      title: 'Seminar Teologi Nasional 2026',
      type: 'Article',
      author: 'Sarah Williams',
      lastUpdated: '2026-03-09',
      status: 'published',
      views: 1245
    },
    {
      id: '2',
      title: 'Wisuda Sarjana dan Magister',
      type: 'Article',
      author: 'John Doe',
      lastUpdated: '2026-03-08',
      status: 'published',
      views: 856
    },
    {
      id: '3',
      title: 'Homepage Banner - Easter 2026',
      type: 'Banner',
      author: 'Jane Smith',
      lastUpdated: '2026-03-07',
      status: 'scheduled',
      views: 0
    },
    {
      id: '4',
      title: 'Konferensi Teologi Reformed',
      type: 'Article',
      author: 'Sarah Williams',
      lastUpdated: '2026-03-07',
      status: 'in-review',
      views: 0
    },
    {
      id: '5',
      title: 'Student Registration Guide',
      type: 'Landing Page',
      author: 'Mike Johnson',
      lastUpdated: '2026-03-06',
      status: 'draft',
      views: 0
    },
    {
      id: '6',
      title: 'Retret Mahasiswa Baru 2026',
      type: 'Article',
      author: 'David Brown',
      lastUpdated: '2026-03-05',
      status: 'published',
      views: 542
    },
    {
      id: '7',
      title: 'FAQ - Pendaftaran STTB',
      type: 'Page',
      author: 'Jane Smith',
      lastUpdated: '2026-03-04',
      status: 'approved',
      views: 0
    },
    {
      id: '8',
      title: 'Weekly Sermon - March Week 1',
      type: 'Article',
      author: 'John Doe',
      lastUpdated: '2026-03-03',
      status: 'published',
      views: 2341
    },
  ];

  const columns: Column<ContentItem>[] = [
    {
      key: 'title',
      label: 'Title',
      sortable: true,
      render: (item) => (
        <div>
          <p className="font-medium text-gray-900">{item.title}</p>
          <p className="text-xs text-gray-500 mt-1">{item.type}</p>
        </div>
      )
    },
    {
      key: 'author',
      label: 'Author',
      sortable: true,
      render: (item) => (
        <span className="text-gray-700">{item.author}</span>
      )
    },
    {
      key: 'lastUpdated',
      label: 'Last Updated',
      sortable: true,
      render: (item) => (
        <span className="text-gray-700">{new Date(item.lastUpdated).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric' 
        })}</span>
      )
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (item) => <StatusBadge status={item.status} />
    },
    {
      key: 'views',
      label: 'Views',
      sortable: true,
      render: (item) => (
        <div className="flex items-center gap-2 text-gray-700">
          <Eye size={14} className="text-gray-400" />
          {item.views?.toLocaleString() || '-'}
        </div>
      )
    },
  ];

  const handleRowClick = (item: ContentItem) => {
    router.push(`/content/edit`);
  };

  const renderActions = (item: ContentItem) => (
    <div className="flex items-center gap-2">
      <button
        onClick={() => router.push(`/content/edit`)}
        className="p-1.5 hover:bg-gray-100 rounded transition-colors"
        title="Edit"
      >
        <Edit size={16} className="text-gray-600" />
      </button>
      <button
        className="p-1.5 hover:bg-gray-100 rounded transition-colors"
        title="View"
      >
        <Eye size={16} className="text-gray-600" />
      </button>
      <button
        className="p-1.5 hover:bg-red-50 rounded transition-colors"
        title="Delete"
      >
        <Trash2 size={16} className="text-red-600" />
      </button>
    </div>
  );

  const filteredData = contentData.filter(item => {
    if (filterStatus !== 'all' && item.status !== filterStatus) return false;
    if (filterType !== 'all' && item.type !== filterType) return false;
    return true;
  });

  return (
    <>
      <PageHeader
        title="Content Management"
        description="Manage all articles, banners, and landing pages"
        breadcrumbs={[{ label: 'Content' }]}
        actions={
          <>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
              <Download size={18} />
              Export
            </button>
            <button 
              onClick={() => router.push('/admin/content/new')}
              className="px-4 py-2 bg-[#C1121F] text-white rounded-lg hover:bg-[#9A0E19] transition-colors flex items-center gap-2"
            >
              <Plus size={18} />
              Create Content
            </button>
          </>
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
            
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F] focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="draft">Draft</option>
              <option value="in-review">In Review</option>
              <option value="approved">Approved</option>
              <option value="published">Published</option>
              <option value="scheduled">Scheduled</option>
            </select>

            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F] focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="Article">Article</option>
              <option value="Page">Page</option>
              <option value="Banner">Banner</option>
              <option value="Landing Page">Landing Page</option>
            </select>

            {selectedIds.length > 0 && (
              <div className="ml-auto flex items-center gap-3">
                <span className="text-sm text-gray-600">{selectedIds.length} selected</span>
                <button className="px-3 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors">
                  Delete Selected
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Data Table */}
        <DataTable
          columns={columns}
          data={filteredData}
          onRowClick={handleRowClick}
          selectable
          onSelectionChange={setSelectedIds}
          actions={renderActions}
          emptyMessage="No content found. Create your first content item!"
        />

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredData.length}</span> of{' '}
            <span className="font-medium">{contentData.length}</span> results
          </p>
          <div className="flex gap-2">
            <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
              Previous
            </button>
            <button className="px-3 py-2 bg-[#C1121F] text-white rounded-lg text-sm hover:bg-[#9A0E19] transition-colors">
              1
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
              2
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
