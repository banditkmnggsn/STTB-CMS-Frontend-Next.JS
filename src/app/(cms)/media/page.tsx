'use client'

import { PageHeader } from '@/components/admin/PageHeader';
import { Upload, Search, Grid, List, Image as ImageIcon, FileText, Film } from 'lucide-react';
import { useState } from 'react';

export default function MediaLibraryPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const mediaFiles = [
    { id: '1', name: 'graduation-2026.jpg', type: 'image', size: '2.4 MB', uploaded: '2026-03-09', url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1' },
    { id: '2', name: 'campus-library.jpg', type: 'image', size: '1.8 MB', uploaded: '2026-03-09', url: 'https://images.unsplash.com/photo-1763136195116-488709b0370e' },
    { id: '3', name: 'seminar-banner.png', type: 'image', size: '3.1 MB', uploaded: '2026-03-08', url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87' },
    { id: '4', name: 'student-life.jpg', type: 'image', size: '2.2 MB', uploaded: '2026-03-08', url: 'https://images.unsplash.com/photo-1772033282500-c85fde65d6fd' },
    { id: '5', name: 'theology-class.jpg', type: 'image', size: '1.9 MB', uploaded: '2026-03-07', url: 'https://images.unsplash.com/photo-1595315342809-fa10945ed07c' },
    { id: '6', name: 'worship-service.jpg', type: 'image', size: '2.7 MB', uploaded: '2026-03-06', url: 'https://images.unsplash.com/photo-1765248150496-cd10e83395b6' },
  ];

  return (
    <>
      <PageHeader
        title="Media Library"
        description="Manage images, videos, and documents"
        breadcrumbs={[{ label: 'Media Library' }]}
        actions={
          <button className="px-4 py-2 bg-[#C1121F] text-white rounded-lg hover:bg-[#9A0E19] transition-colors flex items-center gap-2">
            <Upload size={18} />
            Upload Files
          </button>
        }
      />

      <div className="p-8">
        {/* Toolbar */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search files..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F] focus:border-transparent"
              />
            </div>
            
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F] focus:border-transparent">
              <option>All Types</option>
              <option>Images</option>
              <option>Videos</option>
              <option>Documents</option>
            </select>
          </div>

          <div className="flex items-center gap-2 ml-4">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
            >
              <List size={18} />
            </button>
          </div>
        </div>

        {/* Upload Area */}
        <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-12 mb-6 text-center hover:border-[#C1121F] transition-colors cursor-pointer">
          <Upload size={48} className="mx-auto text-gray-400 mb-4" />
          <p className="text-lg font-medium text-gray-900 mb-2">Drag and drop files here</p>
          <p className="text-sm text-gray-500 mb-4">or click to browse from your computer</p>
          <button className="px-6 py-2 bg-[#2E90FF] text-white rounded-lg hover:bg-[#1e7ff5] transition-colors">
            Select Files
          </button>
          <p className="text-xs text-gray-500 mt-4">Supported: JPG, PNG, GIF, MP4, PDF (Max 10MB)</p>
        </div>

        {/* Media Grid */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {mediaFiles.map((file) => (
              <div key={file.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="aspect-square bg-gray-100 relative">
                  {file.type === 'image' ? (
                    <img src={file.url} alt={file.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <FileText size={48} className="text-gray-400" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button className="px-3 py-1.5 bg-white text-gray-900 rounded text-sm font-medium">
                      View
                    </button>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                  <p className="text-xs text-gray-500">{file.size}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Size</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Uploaded</th>
                  <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {mediaFiles.map((file) => (
                  <tr key={file.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{file.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 capitalize">{file.type}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{file.size}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{file.uploaded}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-[#2E90FF] hover:text-[#1e7ff5] text-sm font-medium">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
