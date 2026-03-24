"use client";

import { useEffect, useState } from "react";
import { StatsCard } from "@/components/admin/StatsCard";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { PageHeader } from "@/components/admin/PageHeader";
import { FileText, Image, Users, Clock, Calendar } from "lucide-react";
import Link from "next/link";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

function getToken() {
  if (typeof window === "undefined") return null;
  return (
    localStorage.getItem("accessToken") ?? sessionStorage.getItem("accessToken")
  );
}

async function fetchWithAuth(path: string) {
  const token = getToken();
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error(`Failed to fetch ${path}`);
  return res.json();
}

interface StatsState {
  totalContent: number;
  pendingReview: number;
  totalMedia: number;
  totalUsers: number;
}

interface ActivityItem {
  id: string;
  action: string;
  resourceType: string;
  resourceTitle: string;
  createdAt: string;
  user?: { name: string };
}

interface PendingItem {
  id: string;
  title: string;
  status: string;
  type: string;
  publishDate: string;
  author?: { name: string };
}

interface MediaItem {
  id: string;
  originalName: string;
  size: number;
  createdAt: string;
  url: string;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<StatsState>({
    totalContent: 0,
    pendingReview: 0,
    totalMedia: 0,
    totalUsers: 0,
  });
  const [recentActivity, setRecentActivity] = useState<ActivityItem[]>([]);
  const [pendingApprovals, setPendingApprovals] = useState<PendingItem[]>([]);
  const [recentMedia, setRecentMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const [newsAll, newsPending, mediaRes, usersRes, auditRes] =
          await Promise.allSettled([
            fetchWithAuth("/api/news?limit=1"),
            fetchWithAuth("/api/news?status=draft&limit=10"),
            fetchWithAuth("/api/media?limit=4"),
            fetchWithAuth("/api/users?limit=1"),
            fetchWithAuth("/api/audit-logs?limit=5"),
          ]);

        // Stats
        if (newsAll.status === "fulfilled") {
          setStats((prev) => ({
            ...prev,
            totalContent: newsAll.value?.data?.pagination?.total || 0,
          }));
        }
        if (newsPending.status === "fulfilled") {
          const items = newsPending.value?.data?.items || [];
          setStats((prev) => ({
            ...prev,
            pendingReview: newsPending.value?.data?.pagination?.total || 0,
          }));
          setPendingApprovals(
            items.slice(0, 3).map((item: any) => ({
              id: item.id,
              title: item.title,
              status: item.status,
              type: item.type || "Article",
              publishDate: item.publishDate || item.createdAt,
              author: item.author,
            })),
          );
        }
        if (mediaRes.status === "fulfilled") {
          const items = mediaRes.value?.data?.items || [];
          setStats((prev) => ({
            ...prev,
            totalMedia: mediaRes.value?.data?.pagination?.total || 0,
          }));
          setRecentMedia(items);
        }
        if (usersRes.status === "fulfilled") {
          setStats((prev) => ({
            ...prev,
            totalUsers: usersRes.value?.data?.pagination?.total || 0,
          }));
        }
        if (auditRes.status === "fulfilled") {
          const items = auditRes.value?.data?.items || [];
          setRecentActivity(items);
        }
      } catch (err) {
        console.error("Dashboard load error:", err);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  const formatSize = (bytes: number) => {
    if (!bytes) return "-";
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "-";
    return new Date(dateStr).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const formatRelativeTime = (dateStr: string) => {
    if (!dateStr) return "-";
    const diff = Date.now() - new Date(dateStr).getTime();
    const minutes = Math.floor(diff / 60000);
    if (minutes < 60) return `${minutes} menit lalu`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} jam lalu`;
    return `${Math.floor(hours / 24)} hari lalu`;
  };

  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Overview of your content management system"
        breadcrumbs={[{ label: "Dashboard" }]}
      />

      <div className="p-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Artikel"
            value={loading ? "..." : String(stats.totalContent)}
            icon={FileText}
            trend={{ value: "Total konten CMS", isPositive: true }}
            color="blue"
          />
          <StatsCard
            title="Pending Review"
            value={loading ? "..." : String(stats.pendingReview)}
            icon={Clock}
            trend={{ value: "Menunggu persetujuan", isPositive: false }}
            color="orange"
          />
          <StatsCard
            title="Total Media"
            value={loading ? "..." : String(stats.totalMedia)}
            icon={Image}
            trend={{ value: "File di media library", isPositive: true }}
            color="purple"
          />
          <StatsCard
            title="Total Users"
            value={loading ? "..." : String(stats.totalUsers)}
            icon={Users}
            trend={{ value: "Pengguna terdaftar", isPositive: true }}
            color="green"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Recent Activity
                </h2>
              </div>
              <div className="divide-y divide-gray-200">
                {loading ? (
                  <div className="px-6 py-8 text-center text-sm text-gray-400">
                    Memuat data...
                  </div>
                ) : recentActivity.length === 0 ? (
                  <div className="px-6 py-8 text-center text-sm text-gray-400">
                    Belum ada aktivitas
                  </div>
                ) : (
                  recentActivity.map((activity) => (
                    <div
                      key={activity.id}
                      className="px-6 py-4 hover:bg-gray-50 transition-colors"
                    >
                      <p className="text-sm text-gray-900">
                        <span className="font-medium">
                          {activity.user?.name || "System"}
                        </span>{" "}
                        <span className="text-gray-600">{activity.action}</span>{" "}
                        <span className="font-medium text-[#C1121F]">
                          {activity.resourceTitle || activity.resourceType}
                        </span>
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatRelativeTime(activity.createdAt)}
                      </p>
                    </div>
                  ))
                )}
              </div>
              <div className="px-6 py-3 border-t border-gray-200 bg-gray-50">
                <Link
                  href="/audit-logs"
                  className="text-sm text-[#C1121F] hover:text-[#9A0E19] font-medium"
                >
                  Lihat semua aktivitas →
                </Link>
              </div>
            </div>

            {/* Pending Approvals */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                  Pending Approvals
                </h2>
                <StatusBadge
                  status="in-review"
                  label={`${pendingApprovals.length} pending`}
                />
              </div>
              <div className="divide-y divide-gray-200">
                {loading ? (
                  <div className="px-6 py-8 text-center text-sm text-gray-400">
                    Memuat data...
                  </div>
                ) : pendingApprovals.length === 0 ? (
                  <div className="px-6 py-8 text-center text-sm text-gray-400">
                    Tidak ada konten pending
                  </div>
                ) : (
                  pendingApprovals.map((item) => (
                    <div
                      key={item.id}
                      className="px-6 py-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Users size={14} />
                              {item.author?.name || "-"}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar size={14} />
                              {formatDate(item.publishDate)}
                            </span>
                            <span className="text-[#2E90FF] capitalize">
                              {item.type}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Link
                            href={`/content/${item.id}`}
                            className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm rounded-md transition-colors"
                          >
                            Review
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="px-6 py-3 border-t border-gray-200 bg-gray-50">
                <Link
                  href="/publishing"
                  className="text-sm text-[#C1121F] hover:text-[#9A0E19] font-medium"
                >
                  Lihat publishing queue →
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Actions
              </h2>
              <div className="space-y-2">
                <Link
                  href="/content/new"
                  className="block w-full px-4 py-2 bg-[#C1121F] hover:bg-[#9A0E19] text-white text-sm font-medium rounded-lg transition-colors text-center"
                >
                  + Buat Konten Baru
                </Link>
                <Link
                  href="/media"
                  className="block w-full px-4 py-2 bg-[#2E90FF] hover:bg-[#1e7ff5] text-white text-sm font-medium rounded-lg transition-colors text-center"
                >
                  Upload Media
                </Link>
                <Link
                  href="/audit-logs"
                  className="block w-full px-4 py-2 bg-[#0B1F3B] hover:bg-[#071528] text-white text-sm font-medium rounded-lg transition-colors text-center"
                >
                  Lihat Audit Log
                </Link>
              </div>
            </div>

            {/* Recent Media */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Recent Media
                </h2>
              </div>
              <div className="p-4 space-y-3">
                {loading ? (
                  <div className="text-center text-sm text-gray-400 py-4">
                    Memuat data...
                  </div>
                ) : recentMedia.length === 0 ? (
                  <div className="text-center text-sm text-gray-400 py-4">
                    Belum ada media
                  </div>
                ) : (
                  recentMedia.map((media) => (
                    <div
                      key={media.id}
                      className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                        {media.url ? (
                          <img
                            src={`${BASE_URL}${media.url}`}
                            alt={media.originalName}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Image size={20} className="text-gray-400" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {media.originalName}
                        </p>
                        <p className="text-xs text-gray-500">
                          {formatSize(media.size)} •{" "}
                          {formatDate(media.createdAt)}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="px-6 py-3 border-t border-gray-200 bg-gray-50">
                <Link
                  href="/media"
                  className="text-sm text-[#C1121F] hover:text-[#9A0E19] font-medium"
                >
                  Lihat semua media →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// Yang sudah connect ke BE:

// Stats cards → GET /api/news, GET /api/media, GET /api/users
// Recent Activity → GET /api/audit-logs?limit=5
// Pending Approvals → GET /api/news?status=draft&limit=10
// Recent Media → GET /api/media?limit=4 dengan preview gambar

// raw figma
// 'use client'

// import { StatsCard } from '@/components/admin/StatsCard'
// import { StatusBadge } from '@/components/admin/StatusBadge'
// import { PageHeader } from '@/components/admin/PageHeader'
// import {
//   FileText,
//   Image,
//   Users,
//   Clock,
//   TrendingUp,
//   Calendar,
//   Eye
// } from 'lucide-react';
// import Link from 'next/link'
// export default function DashboardPage() {
//   const recentActivity = [
//     { id: '1', user: 'John Doe', action: 'Published', item: 'Wisuda STTB 2026', time: '2 minutes ago' },
//     { id: '2', user: 'Jane Smith', action: 'Updated', item: 'Homepage Banner', time: '15 minutes ago' },
//     { id: '3', user: 'Mike Johnson', action: 'Uploaded', item: '5 new images', time: '1 hour ago' },
//     { id: '4', user: 'Sarah Williams', action: 'Submitted for review', item: 'Seminar Teologi Article', time: '2 hours ago' },
//     { id: '5', user: 'David Brown', action: 'Created', item: 'New category: Events', time: '3 hours ago' },
//   ];

//   const pendingApprovals = [
//     { id: '1', title: 'Konferensi Teologi 2026', author: 'Sarah Williams', date: '2026-03-08', type: 'Article' },
//     { id: '2', title: 'Update Biaya Studi', author: 'John Doe', date: '2026-03-07', type: 'Page' },
//     { id: '3', title: 'New Faculty Member Bio', author: 'Jane Smith', date: '2026-03-07', type: 'Page' },
//   ];

//   const recentMedia = [
//     { id: '1', name: 'graduation-2026.jpg', size: '2.4 MB', uploaded: '2026-03-09' },
//     { id: '2', name: 'campus-library.jpg', size: '1.8 MB', uploaded: '2026-03-09' },
//     { id: '3', name: 'seminar-banner.png', size: '3.1 MB', uploaded: '2026-03-08' },
//     { id: '4', name: 'student-life.jpg', size: '2.2 MB', uploaded: '2026-03-08' },
//   ];

//   return (
//     <>
//       <PageHeader
//         title="Dashboard"
//         description="Overview of your content management system"
//         breadcrumbs={[{ label: 'Dashboard' }]}
//       />

//       <div className="p-8">
//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <StatsCard
//             title="Total Content"
//             value="156"
//             icon={FileText}
//             trend={{ value: '+12 this month', isPositive: true }}
//             color="blue"
//           />
//           <StatsCard
//             title="Published Pages"
//             value="24"
//             icon={TrendingUp}
//             trend={{ value: '+3 this week', isPositive: true }}
//             color="green"
//           />
//           <StatsCard
//             title="Media Files"
//             value="892"
//             icon={Image}
//             trend={{ value: '+45 this month', isPositive: true }}
//             color="purple"
//           />
//           <StatsCard
//             title="Pending Reviews"
//             value="8"
//             icon={Clock}
//             trend={{ value: '-2 from yesterday', isPositive: true }}
//             color="orange"
//           />
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column - 2/3 width */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Recent Activity */}
//             <div className="bg-white rounded-lg border border-gray-200">
//               <div className="px-6 py-4 border-b border-gray-200">
//                 <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
//               </div>
//               <div className="divide-y divide-gray-200">
//                 {recentActivity.map((activity) => (
//                   <div key={activity.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
//                     <div className="flex items-start justify-between">
//                       <div className="flex-1">
//                         <p className="text-sm text-gray-900">
//                           <span className="font-medium">{activity.user}</span>
//                           {' '}
//                           <span className="text-gray-600">{activity.action}</span>
//                           {' '}
//                           <span className="font-medium text-[#C1121F]">{activity.item}</span>
//                         </p>
//                         <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="px-6 py-3 border-t border-gray-200 bg-gray-50">
//                 <Link href="/admin/audit" className="text-sm text-[#C1121F] hover:text-[#9A0E19] font-medium">
//                   View all activity →
//                 </Link>
//               </div>
//             </div>

//             {/* Pending Approvals */}
//             <div className="bg-white rounded-lg border border-gray-200">
//               <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
//                 <h2 className="text-lg font-semibold text-gray-900">Pending Approvals</h2>
//                 <StatusBadge status="in-review" label={`${pendingApprovals.length} pending`} />
//               </div>
//               <div className="divide-y divide-gray-200">
//                 {pendingApprovals.map((item) => (
//                   <div key={item.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
//                     <div className="flex items-start justify-between">
//                       <div className="flex-1">
//                         <h3 className="font-medium text-gray-900">{item.title}</h3>
//                         <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
//                           <span className="flex items-center gap-1">
//                             <Users size={14} />
//                             {item.author}
//                           </span>
//                           <span className="flex items-center gap-1">
//                             <Calendar size={14} />
//                             {item.date}
//                           </span>
//                           <span className="text-[#2E90FF]">{item.type}</span>
//                         </div>
//                       </div>
//                       <div className="flex gap-2">
//                         <button className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white text-sm rounded-md transition-colors">
//                           Approve
//                         </button>
//                         <button className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm rounded-md transition-colors">
//                           Review
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="px-6 py-3 border-t border-gray-200 bg-gray-50">
//                 <Link href="/admin/publishing" className="text-sm text-[#C1121F] hover:text-[#9A0E19] font-medium">
//                   View publishing queue →
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - 1/3 width */}
//           <div className="space-y-6">
//             {/* Quick Actions */}
//             <div className="bg-white rounded-lg border border-gray-200 p-6">
//               <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
//               <div className="space-y-2">
//                 <Link
//                   href="/admin/content/new"
//                   className="block w-full px-4 py-2 bg-[#C1121F] hover:bg-[#9A0E19] text-white text-sm font-medium rounded-lg transition-colors text-center"
//                 >
//                   + Create New Content
//                 </Link>
//                 <Link
//                   href="/admin/pages/new"
//                   className="block w-full px-4 py-2 bg-[#0B1F3B] hover:bg-[#071528] text-white text-sm font-medium rounded-lg transition-colors text-center"
//                 >
//                   + Create New Page
//                 </Link>
//                 <Link
//                   href="/admin/media"
//                   className="block w-full px-4 py-2 bg-[#2E90FF] hover:bg-[#1e7ff5] text-white text-sm font-medium rounded-lg transition-colors text-center"
//                 >
//                   Upload Media
//                 </Link>
//               </div>
//             </div>

//             {/* Recent Media */}
//             <div className="bg-white rounded-lg border border-gray-200">
//               <div className="px-6 py-4 border-b border-gray-200">
//                 <h2 className="text-lg font-semibold text-gray-900">Recent Media</h2>
//               </div>
//               <div className="p-4 space-y-3">
//                 {recentMedia.map((media) => (
//                   <div key={media.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
//                     <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
//                       <Image size={20} className="text-gray-500" />
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <p className="text-sm font-medium text-gray-900 truncate">{media.name}</p>
//                       <p className="text-xs text-gray-500">{media.size} • {media.uploaded}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="px-6 py-3 border-t border-gray-200 bg-gray-50">
//                 <Link href="/admin/media" className="text-sm text-[#C1121F] hover:text-[#9A0E19] font-medium">
//                   View all media →
//                 </Link>
//               </div>
//             </div>

//             {/* Publishing Schedule */}
//             <div className="bg-white rounded-lg border border-gray-200 p-6">
//               <h2 className="text-lg font-semibold text-gray-900 mb-4">Publishing Schedule</h2>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <div className="flex-shrink-0 w-12 text-center">
//                     <div className="text-2xl font-bold text-[#C1121F]">10</div>
//                     <div className="text-xs text-gray-500">MAR</div>
//                   </div>
//                   <div className="flex-1">
//                     <p className="text-sm font-medium text-gray-900">Easter Announcement</p>
//                     <p className="text-xs text-gray-500">10:00 AM</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="flex-shrink-0 w-12 text-center">
//                     <div className="text-2xl font-bold text-[#C1121F]">12</div>
//                     <div className="text-xs text-gray-500">MAR</div>
//                   </div>
//                   <div className="flex-1">
//                     <p className="text-sm font-medium text-gray-900">Weekly Sermon</p>
//                     <p className="text-xs text-gray-500">9:00 AM</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="flex-shrink-0 w-12 text-center">
//                     <div className="text-2xl font-bold text-[#C1121F]">15</div>
//                     <div className="text-xs text-gray-500">MAR</div>
//                   </div>
//                   <div className="flex-1">
//                     <p className="text-sm font-medium text-gray-900">Student Registration</p>
//                     <p className="text-xs text-gray-500">8:00 AM</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
