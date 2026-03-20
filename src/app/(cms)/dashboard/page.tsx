'use client'

import { StatsCard } from '@/components/admin/StatsCard'
import { StatusBadge } from '@/components/admin/StatusBadge'
import { PageHeader } from '@/components/admin/PageHeader'
import { 
  FileText, 
  Image, 
  Users, 
  Clock,
  TrendingUp,
  Calendar,
  Eye
} from 'lucide-react';
import Link from 'next/link'
export default function DashboardPage() {
  const recentActivity = [
    { id: '1', user: 'John Doe', action: 'Published', item: 'Wisuda STTB 2026', time: '2 minutes ago' },
    { id: '2', user: 'Jane Smith', action: 'Updated', item: 'Homepage Banner', time: '15 minutes ago' },
    { id: '3', user: 'Mike Johnson', action: 'Uploaded', item: '5 new images', time: '1 hour ago' },
    { id: '4', user: 'Sarah Williams', action: 'Submitted for review', item: 'Seminar Teologi Article', time: '2 hours ago' },
    { id: '5', user: 'David Brown', action: 'Created', item: 'New category: Events', time: '3 hours ago' },
  ];

  const pendingApprovals = [
    { id: '1', title: 'Konferensi Teologi 2026', author: 'Sarah Williams', date: '2026-03-08', type: 'Article' },
    { id: '2', title: 'Update Biaya Studi', author: 'John Doe', date: '2026-03-07', type: 'Page' },
    { id: '3', title: 'New Faculty Member Bio', author: 'Jane Smith', date: '2026-03-07', type: 'Page' },
  ];

  const recentMedia = [
    { id: '1', name: 'graduation-2026.jpg', size: '2.4 MB', uploaded: '2026-03-09' },
    { id: '2', name: 'campus-library.jpg', size: '1.8 MB', uploaded: '2026-03-09' },
    { id: '3', name: 'seminar-banner.png', size: '3.1 MB', uploaded: '2026-03-08' },
    { id: '4', name: 'student-life.jpg', size: '2.2 MB', uploaded: '2026-03-08' },
  ];

  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Overview of your content management system"
        breadcrumbs={[{ label: 'Dashboard' }]}
      />

      <div className="p-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Content"
            value="156"
            icon={FileText}
            trend={{ value: '+12 this month', isPositive: true }}
            color="blue"
          />
          <StatsCard
            title="Published Pages"
            value="24"
            icon={TrendingUp}
            trend={{ value: '+3 this week', isPositive: true }}
            color="green"
          />
          <StatsCard
            title="Media Files"
            value="892"
            icon={Image}
            trend={{ value: '+45 this month', isPositive: true }}
            color="purple"
          />
          <StatsCard
            title="Pending Reviews"
            value="8"
            icon={Clock}
            trend={{ value: '-2 from yesterday', isPositive: true }}
            color="orange"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - 2/3 width */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">
                          <span className="font-medium">{activity.user}</span>
                          {' '}
                          <span className="text-gray-600">{activity.action}</span>
                          {' '}
                          <span className="font-medium text-[#C1121F]">{activity.item}</span>
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-6 py-3 border-t border-gray-200 bg-gray-50">
                <Link href="/admin/audit" className="text-sm text-[#C1121F] hover:text-[#9A0E19] font-medium">
                  View all activity →
                </Link>
              </div>
            </div>

            {/* Pending Approvals */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Pending Approvals</h2>
                <StatusBadge status="in-review" label={`${pendingApprovals.length} pending`} />
              </div>
              <div className="divide-y divide-gray-200">
                {pendingApprovals.map((item) => (
                  <div key={item.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{item.title}</h3>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Users size={14} />
                            {item.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {item.date}
                          </span>
                          <span className="text-[#2E90FF]">{item.type}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white text-sm rounded-md transition-colors">
                          Approve
                        </button>
                        <button className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm rounded-md transition-colors">
                          Review
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-6 py-3 border-t border-gray-200 bg-gray-50">
                <Link href="/admin/publishing" className="text-sm text-[#C1121F] hover:text-[#9A0E19] font-medium">
                  View publishing queue →
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - 1/3 width */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-2">
                <Link 
                  href="/admin/content/new"
                  className="block w-full px-4 py-2 bg-[#C1121F] hover:bg-[#9A0E19] text-white text-sm font-medium rounded-lg transition-colors text-center"
                >
                  + Create New Content
                </Link>
                <Link 
                  href="/admin/pages/new"
                  className="block w-full px-4 py-2 bg-[#0B1F3B] hover:bg-[#071528] text-white text-sm font-medium rounded-lg transition-colors text-center"
                >
                  + Create New Page
                </Link>
                <Link 
                  href="/admin/media"
                  className="block w-full px-4 py-2 bg-[#2E90FF] hover:bg-[#1e7ff5] text-white text-sm font-medium rounded-lg transition-colors text-center"
                >
                  Upload Media
                </Link>
              </div>
            </div>

            {/* Recent Media */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Recent Media</h2>
              </div>
              <div className="p-4 space-y-3">
                {recentMedia.map((media) => (
                  <div key={media.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                      <Image size={20} className="text-gray-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{media.name}</p>
                      <p className="text-xs text-gray-500">{media.size} • {media.uploaded}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-6 py-3 border-t border-gray-200 bg-gray-50">
                <Link href="/admin/media" className="text-sm text-[#C1121F] hover:text-[#9A0E19] font-medium">
                  View all media →
                </Link>
              </div>
            </div>

            {/* Publishing Schedule */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Publishing Schedule</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 text-center">
                    <div className="text-2xl font-bold text-[#C1121F]">10</div>
                    <div className="text-xs text-gray-500">MAR</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Easter Announcement</p>
                    <p className="text-xs text-gray-500">10:00 AM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 text-center">
                    <div className="text-2xl font-bold text-[#C1121F]">12</div>
                    <div className="text-xs text-gray-500">MAR</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Weekly Sermon</p>
                    <p className="text-xs text-gray-500">9:00 AM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 text-center">
                    <div className="text-2xl font-bold text-[#C1121F]">15</div>
                    <div className="text-xs text-gray-500">MAR</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Student Registration</p>
                    <p className="text-xs text-gray-500">8:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
