'use client'
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { PageHeader } from '@/components/admin/PageHeader';
import { Save, X, ImageIcon, Loader2 } from 'lucide-react';
import { unifiedContentService, ContentType } from '@/services/unified-content.service';

export default function ContentFormPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const contentType = (searchParams.get('type') as ContentType) || 'news';

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    thumbnail: '',
    published: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await unifiedContentService.create(contentType, formData);
      router.push('/content');
    } catch (error) {
      alert("Gagal menyimpan konten.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title={`Create New ${contentType.slice(0, -1)}`}
        description={`Fill in the details for your new ${contentType}`}
breadcrumbs={[{ label: 'Content' }, { label: 'New' }]}      />

      <form onSubmit={handleSubmit} className="p-8 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Title</label>
              <input 
                type="text" required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#C1121F]/20 focus:border-[#C1121F] outline-none"
                placeholder={`Enter ${contentType} title...`}
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Content</label>
              <textarea 
                rows={12} required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#C1121F]/20 focus:border-[#C1121F] outline-none text-sm"
                placeholder="Write your content here..."
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
              />
            </div>
          </div>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h3 className="font-bold text-gray-900 text-xs uppercase border-b pb-2">Publish Settings</h3>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 font-medium">Status</span>
              <select 
                className="text-sm font-semibold text-[#C1121F] bg-white outline-none"
                value={formData.published ? 'true' : 'false'}
                onChange={(e) => setFormData({...formData, published: e.target.value === 'true'})}
              >
                <option value="true">Published</option>
                <option value="false">Draft</option>
              </select>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full py-3 bg-[#C1121F] text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#9A0E19] disabled:bg-gray-400"
            >
              {isLoading ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
              Save {contentType.slice(0, -1)}
            </button>
            
            <button 
              type="button"
              onClick={() => router.back()}
              className="w-full py-3 bg-gray-100 text-gray-600 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-gray-200"
            >
              <X size={18} /> Cancel
            </button>
          </div>

          {/* Thumbnail Preview Area */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h3 className="font-bold text-gray-900 text-xs uppercase border-b pb-2">Featured Image</h3>
            <div className="aspect-video bg-gray-50 border-2 border-dashed rounded-lg flex flex-col items-center justify-center text-gray-400 gap-2 overflow-hidden relative group">
              {formData.thumbnail ? (
                <img src={formData.thumbnail} className="w-full h-full object-cover" alt="preview" />
              ) : (
                <>
                  <ImageIcon size={24} />
                  <span className="text-[10px] font-bold">NO IMAGE SELECTED</span>
                </>
              )}
            </div>
            <input 
              type="text"
              placeholder="Paste image URL from Media Library"
              className="w-full px-3 py-2 border rounded text-[10px] focus:border-[#C1121F] outline-none"
              value={formData.thumbnail}
              onChange={(e) => setFormData({...formData, thumbnail: e.target.value})}
            />
            <p className="text-[10px] text-gray-400 italic text-center">Tip: Copy link from your Media Library page</p>
          </div>
        </div>
      </form>
    </div>
  );
}