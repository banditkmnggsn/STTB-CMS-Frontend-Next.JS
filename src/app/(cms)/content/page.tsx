'use client'
import { useState, useEffect } from 'react';
import { PageHeader } from '@/components/admin/PageHeader';
import { Plus, Search, Edit, Trash2, Loader2, Newspaper, Layers } from 'lucide-react';
import { unifiedContentService, ContentType } from '@/services/unified-content.service';
import { useRouter } from 'next/navigation';

export default function ContentListPage() {
  const router = useRouter();
  // State hanya untuk news dan programs
  const [activeType, setActiveType] = useState<ContentType>('news');
  const [items, setItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  const fetchItems = async () => {
    setIsLoading(true);
    try {
      const data = await unifiedContentService.getAll(activeType);
      setItems(Array.isArray(data) ? data : data.items || []);
    } catch (error: any) {
      console.error("Fetch error detail:", {
        message: error.error,
        status: error.status
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [activeType]);

  const handleDelete = async (id: string) => {
    if (!confirm(`Hapus ${activeType} ini?`)) return;
    try {
      await unifiedContentService.delete(activeType, id);
      fetchItems();
    } catch (err) {
      alert("Gagal menghapus konten.");
    }
  };

  const getTypeIcon = (type: ContentType) => {
    if (type === 'news') return <Newspaper size={18} />;
    return <Layers size={18} />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Content Management" 
        description="Manage your News and Programs in one place"
        breadcrumbs={[{ label: 'Content' }]}
        actions={
          <button 
            onClick={() => router.push(`/content/new?type=${activeType}`)}
            className="flex items-center gap-2 px-4 py-2 bg-[#C1121F] text-white rounded-lg hover:bg-[#9A0E19] transition-all shadow-sm"
          >
            <Plus size={18} /> New {activeType === 'news' ? 'News' : 'Program'}
          </button>
        }
      />

      <div className="p-8">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          {/* Tabs Switcher - Hanya News & Programs */}
          <div className="flex border-b border-gray-200 bg-gray-50/50">
            {(['news', 'programs'] as ContentType[]).map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`flex items-center gap-2 px-8 py-4 text-sm font-bold transition-all border-b-2 ${
                  activeType === type 
                  ? 'border-[#C1121F] text-[#C1121F] bg-white' 
                  : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >
                {getTypeIcon(type)}
                <span className="capitalize">{type}</span>
              </button>
            ))}
          </div>

          {/* Toolbar */}
          <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white">
            <div className="relative w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder={`Search ${activeType}...`}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#C1121F]/10 focus:border-[#C1121F] outline-none transition-all"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
               <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total: {items.length}</span>
            </div>
          </div>

          {/* Table Area */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 text-gray-600 text-[10px] uppercase font-bold border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4">Content Details</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Created Date</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {isLoading ? (
                  <tr>
                    <td colSpan={4} className="py-20 text-center">
                      <Loader2 className="animate-spin inline-block text-[#C1121F]" size={32} />
                    </td>
                  </tr>
                ) : items.length > 0 ? (
                  items.filter(item => (item.title || item.name || '').toLowerCase().includes(search.toLowerCase())).map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-gray-100 border border-gray-200 overflow-hidden flex-shrink-0 relative">
                            {item.thumbnail || item.image ? (
                              <img 
                                src={item.thumbnail || item.image} 
                                alt="" 
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-300 bg-gray-50">
                                {getTypeIcon(activeType)}
                              </div>
                            )}
                          </div>
                          <div className="max-w-xs lg:max-w-md">
                            <h4 className="text-sm font-bold text-gray-900 truncate tracking-tight">
                              {item.title || item.name}
                            </h4>
                            <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                              {item.excerpt || item.description || 'No additional description'}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-tighter border ${
                          item.published 
                          ? 'bg-green-50 text-green-700 border-green-200' 
                          : 'bg-orange-50 text-orange-700 border-orange-200'
                        }`}>
                          {item.published ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-[11px] text-gray-500 font-bold uppercase">
                        {new Date(item.createdAt).toLocaleDateString('id-ID', {
                          day: '2-digit', month: 'short', year: 'numeric'
                        })}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={() => router.push(`/content/edit/${item.id}?type=${activeType}`)}
                            className="p-2 text-gray-400 hover:text-[#C1121F] hover:bg-[#C1121F]/5 rounded-md transition-all"
                          >
                            <Edit size={16} />
                          </button>
                          <button 
                            onClick={() => handleDelete(item.id)}
                            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-all"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="py-24 text-center">
                      <div className="flex flex-col items-center gap-2 opacity-40">
                         {getTypeIcon(activeType)}
                         <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Empty {activeType}</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}