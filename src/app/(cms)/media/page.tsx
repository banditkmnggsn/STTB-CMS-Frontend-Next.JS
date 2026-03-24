// 'use client'

// import { PageHeader } from '@/components/admin/PageHeader';
// import { Upload, Search, Grid, List, Image as ImageIcon, FileText, Film } from 'lucide-react';
// import { useState } from 'react';

// export default function MediaLibraryPage() {
//   const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

//   const mediaFiles = [
//     { id: '1', name: 'graduation-2026.jpg', type: 'image', size: '2.4 MB', uploaded: '2026-03-09', url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1' },
//     { id: '2', name: 'campus-library.jpg', type: 'image', size: '1.8 MB', uploaded: '2026-03-09', url: 'https://images.unsplash.com/photo-1763136195116-488709b0370e' },
//     { id: '3', name: 'seminar-banner.png', type: 'image', size: '3.1 MB', uploaded: '2026-03-08', url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87' },
//     { id: '4', name: 'student-life.jpg', type: 'image', size: '2.2 MB', uploaded: '2026-03-08', url: 'https://images.unsplash.com/photo-1772033282500-c85fde65d6fd' },
//     { id: '5', name: 'theology-class.jpg', type: 'image', size: '1.9 MB', uploaded: '2026-03-07', url: 'https://images.unsplash.com/photo-1595315342809-fa10945ed07c' },
//     { id: '6', name: 'worship-service.jpg', type: 'image', size: '2.7 MB', uploaded: '2026-03-06', url: 'https://images.unsplash.com/photo-1765248150496-cd10e83395b6' },
//   ];

//   return (
//     <>
//       <PageHeader
//         title="Media Library"
//         description="Manage images, videos, and documents"
//         breadcrumbs={[{ label: 'Media Library' }]}
//         actions={
//           <button className="px-4 py-2 bg-[#C1121F] text-white rounded-lg hover:bg-[#9A0E19] transition-colors flex items-center gap-2">
//             <Upload size={18} />
//             Upload Files
//           </button>
//         }
//       />

//       <div className="p-8">
//         {/* Toolbar */}
//         <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6 flex items-center justify-between">
//           <div className="flex items-center gap-4 flex-1">
//             <div className="relative flex-1 max-w-md">
//               <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search files..."
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F] focus:border-transparent"
//               />
//             </div>
            
//             <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F] focus:border-transparent">
//               <option>All Types</option>
//               <option>Images</option>
//               <option>Videos</option>
//               <option>Documents</option>
//             </select>
//           </div>

//           <div className="flex items-center gap-2 ml-4">
//             <button
//               onClick={() => setViewMode('grid')}
//               className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
//             >
//               <Grid size={18} />
//             </button>
//             <button
//               onClick={() => setViewMode('list')}
//               className={`p-2 rounded ${viewMode === 'list' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
//             >
//               <List size={18} />
//             </button>
//           </div>
//         </div>

//         {/* Upload Area */}
//         <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-12 mb-6 text-center hover:border-[#C1121F] transition-colors cursor-pointer">
//           <Upload size={48} className="mx-auto text-gray-400 mb-4" />
//           <p className="text-lg font-medium text-gray-900 mb-2">Drag and drop files here</p>
//           <p className="text-sm text-gray-500 mb-4">or click to browse from your computer</p>
//           <button className="px-6 py-2 bg-[#2E90FF] text-white rounded-lg hover:bg-[#1e7ff5] transition-colors">
//             Select Files
//           </button>
//           <p className="text-xs text-gray-500 mt-4">Supported: JPG, PNG, GIF, MP4, PDF (Max 10MB)</p>
//         </div>

//         {/* Media Grid */}
//         {viewMode === 'grid' ? (
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
//             {mediaFiles.map((file) => (
//               <div key={file.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
//                 <div className="aspect-square bg-gray-100 relative">
//                   {file.type === 'image' ? (
//                     <img src={file.url} alt={file.name} className="w-full h-full object-cover" />
//                   ) : (
//                     <div className="w-full h-full flex items-center justify-center">
//                       <FileText size={48} className="text-gray-400" />
//                     </div>
//                   )}
//                   <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
//                     <button className="px-3 py-1.5 bg-white text-gray-900 rounded text-sm font-medium">
//                       View
//                     </button>
//                   </div>
//                 </div>
//                 <div className="p-3">
//                   <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
//                   <p className="text-xs text-gray-500">{file.size}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//             <table className="w-full">
//               <thead className="bg-gray-50 border-b">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Name</th>
//                   <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
//                   <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Size</th>
//                   <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Uploaded</th>
//                   <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {mediaFiles.map((file) => (
//                   <tr key={file.id} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 text-sm text-gray-900">{file.name}</td>
//                     <td className="px-6 py-4 text-sm text-gray-600 capitalize">{file.type}</td>
//                     <td className="px-6 py-4 text-sm text-gray-600">{file.size}</td>
//                     <td className="px-6 py-4 text-sm text-gray-600">{file.uploaded}</td>
//                     <td className="px-6 py-4 text-right">
//                       <button className="text-[#2E90FF] hover:text-[#1e7ff5] text-sm font-medium">View</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

'use client'
import { PageHeader } from '@/components/admin/PageHeader';
import { 
  Upload, Search, Grid, List, Trash2, 
  Loader2, Image as ImageIcon, FileText, 
  Film, XCircle, CheckCircle2 
} from 'lucide-react';
import { useState, useEffect, useRef, useMemo } from 'react';
import { mediaService } from '@/services/media.service';
import { MediaFile } from '@/types/content';
import Image from 'next/image';

export default function MediaLibraryPage() {
  // --- States ---
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- Actions ---
  const fetchMedia = async () => {
    setIsLoading(true);
    try {
      const data = await mediaService.getMedia({ limit: 100 });
      setMediaFiles(data.items);
    } catch (err) {
      console.error("Gagal load media:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    try {
      // Menangani multiple upload secara sekuensial
      for (let i = 0; i < files.length; i++) {
        await mediaService.uploadMedia(files[i], { folder: 'sttb-media' });
      }
      await fetchMedia();
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (err) {
      alert("Proses upload gagal. Pastikan ukuran file tidak melebihi batas.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Apakah Anda yakin ingin menghapus media ini secara permanen?')) return;
    
    try {
      const success = await mediaService.deleteMedia(id);
      if (success) {
        setMediaFiles(prev => prev.filter(file => file.id !== id));
      }
    } catch (err) {
      alert("Gagal menghapus file.");
    }
  };

  // --- Filtering Logic ---
  const filteredFiles = useMemo(() => {
    return mediaFiles.filter(file => {
      const matchesSearch = file.filename.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = filterType === 'all' || file.mimeType.startsWith(filterType);
      return matchesSearch && matchesType;
    });
  }, [mediaFiles, searchQuery, filterType]);

  // Render Helper untuk Icon berdasarkan File Type
  const renderFilePreview = (file: MediaFile) => {
    if (file.mimeType.startsWith('image/')) {
      return (
        <Image 
          src={file.url} 
          alt={file.filename} 
          fill 
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, 16vw"
          unoptimized={file.url.includes('localhost')} // Bypass Next.js optimization jika localhost bermasalah
        />
      );
    }
    if (file.mimeType.startsWith('video/')) return <Film className="text-gray-400" size={40} />;
    return <FileText className="text-gray-400" size={40} />;
  };

// --- UI Render ---
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Media Library"
        description="Manage images, videos, and documents"
        breadcrumbs={[{ label: 'Media Library' }]}
        actions={
          <button 
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="px-4 py-2 bg-[#C1121F] text-white rounded-lg hover:bg-[#9A0E19] disabled:bg-gray-400 transition-all flex items-center gap-2 shadow-sm"
          >
            {isUploading ? <Loader2 className="animate-spin" size={18} /> : <Upload size={18} />}
            {isUploading ? 'Uploading...' : 'Upload Files'}
          </button>
        }
      />

      {/* Hidden File Input */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileUpload} 
        className="hidden" 
        multiple
        accept="image/*,video/*,application/pdf"
      />

      <div className="p-8">
        {/* Toolbar */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6 flex flex-wrap items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-4 flex-1 min-w-[300px]">
            <div className="relative flex-1 max-w-md">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by filename..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F]/20 focus:border-[#C1121F] transition-all"
              />
            </div>
            
            <select 
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F]/20 bg-white"
            >
              <option value="all">All Types</option>
              <option value="image/">Images</option>
              <option value="video/">Videos</option>
              <option value="application/pdf">PDF Documents</option>
            </select>
          </div>

          <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-[#C1121F]' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-[#C1121F]' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <List size={18} />
            </button>
          </div>
        </div>

        {/* Content Area */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <Loader2 className="animate-spin text-[#C1121F]" size={40} />
            <p className="text-gray-500 animate-pulse">Fetching your media...</p>
          </div>
        ) : filteredFiles.length > 0 ? (
          <>
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {filteredFiles.map((file) => (
                  <div key={file.id} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-[#C1121F] hover:shadow-lg transition-all duration-300">
                    <div className="aspect-square relative bg-gray-100 flex items-center justify-center overflow-hidden">
                      {renderFilePreview(file)}
                      
                      {/* Actions Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <button 
                          onClick={() => window.open(file.url, '_blank')}
                          className="p-2 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
                          title="View Full"
                        >
                          <ImageIcon size={16} />
                        </button>
                        <button 
                          onClick={() => handleDelete(file.id)}
                          className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors shadow-lg"
                          title="Delete File"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-xs font-semibold text-gray-800 truncate mb-1" title={file.filename}>
                        {file.filename}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] text-gray-400 uppercase font-medium">{file.mimeType.split('/')[1]}</span>
                        <span className="text-[10px] text-gray-500">{(file.size / (1024 * 1024)).toFixed(2)} MB</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* List View Table */
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-gray-50 text-gray-600 text-xs uppercase font-bold border-bottom border-gray-200">
                    <tr>
                      <th className="px-6 py-4">File</th>
                      <th className="px-6 py-4">Type</th>
                      <th className="px-6 py-4">Size</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredFiles.map((file) => (
                      <tr key={file.id} className="hover:bg-gray-50 transition-colors group">
                        <td className="px-6 py-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 relative rounded bg-gray-100 flex-shrink-0 flex items-center justify-center overflow-hidden border border-gray-200">
                              {file.mimeType.startsWith('image/') ? (
                                <Image src={file.url} alt="" fill className="object-cover" unoptimized={file.url.includes('localhost')} />
                              ) : <FileText size={20} className="text-gray-400" />}
                            </div>
                            <span className="text-sm font-medium text-gray-700 truncate max-w-[300px]">{file.filename}</span>
                          </div>
                        </td>
                        <td className="px-6 py-3 text-sm text-gray-500 capitalize">{file.mimeType.split('/')[1]}</td>
                        <td className="px-6 py-3 text-sm text-gray-500">{(file.size / (1024 * 1024)).toFixed(2)} MB</td>
                        <td className="px-6 py-3 text-right">
                          <button 
                            onClick={() => handleDelete(file.id)}
                            className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        ) : (
          /* Empty Search Results / Empty Library */
          <div className="bg-white rounded-2xl border-2 border-dashed border-gray-200 py-32 text-center">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-gray-300" size={32} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">No media found</h3>
            <p className="text-gray-500 max-w-xs mx-auto text-sm">
              {searchQuery ? `We couldn't find anything matching "${searchQuery}"` : "Your library is empty. Start by uploading some files!"}
            </p>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-4 text-[#C1121F] font-medium text-sm hover:underline"
              >
                Clear search
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}