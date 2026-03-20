import { PageHeader } from '@/components/admin/PageHeader';
import { StatusBadge } from '@/components/admin/StatusBadge';
import { Calendar, User } from 'lucide-react';

export default function PublishingQueuePage() {
  const pendingItems = [
    { id: '1', title: 'Konferensi Teologi 2026', author: 'Sarah Williams', date: '2026-03-08', status: 'in-review' as const },
    { id: '2', title: 'Update Biaya Studi', author: 'John Doe', date: '2026-03-07', status: 'in-review' as const },
    { id: '3', title: 'New Faculty Member Bio', author: 'Jane Smith', date: '2026-03-07', status: 'approved' as const },
  ];

  const scheduledItems = [
    { id: '4', title: 'Easter Announcement', scheduledDate: '2026-03-10 10:00', author: 'Admin' },
    { id: '5', title: 'Weekly Sermon', scheduledDate: '2026-03-12 09:00', author: 'John Doe' },
  ];

  return (
    <>
      <PageHeader
        title="Publishing Queue"
        description="Review and approve content awaiting publication"
        breadcrumbs={[{ label: 'Publishing Queue' }]}
      />

      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pending Approvals */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Pending Approvals</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {pendingItems.map((item) => (
                <div key={item.id} className="px-6 py-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-2">{item.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <User size={14} />
                          {item.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {item.date}
                        </span>
                      </div>
                    </div>
                    <StatusBadge status={item.status} />
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-colors">
                      Approve
                    </button>
                    <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors">
                      Reject
                    </button>
                    <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm rounded-lg transition-colors">
                      Review
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scheduled Posts */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Scheduled Posts</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {scheduledItems.map((item) => (
                <div key={item.id} className="px-6 py-4">
                  <h3 className="font-medium text-gray-900 mb-2">{item.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <p>Scheduled: {item.scheduledDate}</p>
                      <p>By: {item.author}</p>
                    </div>
                    <button className="text-[#2E90FF] hover:text-[#1e7ff5] text-sm font-medium">
                      Edit Schedule
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
