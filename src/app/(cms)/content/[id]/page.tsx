'use client';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { PageHeader } from '@/components/admin/PageHeader';
import { StatusBadge } from '@/components/admin/StatusBadge';
import { 
  Save, 
  Eye, 
  Send, 
  Calendar,
  Image as ImageIcon,
  Tag,
  X
} from 'lucide-react';
import router from 'next/dist/shared/lib/router/router';

export default function ContentEditorPage() {
  const { id } = useParams();
  const router = useRouter();
  const isNew = id === 'new';

  const [formData, setFormData] = useState({
    title: isNew ? '' : 'Seminar Teologi Nasional 2026',
    slug: isNew ? '' : 'seminar-teologi-nasional-2026',
    type: isNew ? 'Article' : 'Article',
    category: isNew ? '' : 'Seminar',
    tags: isNew ? [] : ['Seminar', 'Teologi', 'Event'],
    status: isNew ? 'draft' : 'published',
    content: isNew ? '' : '<p>Content goes here...</p>',
    featuredImage: isNew ? '' : 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
    publishDate: isNew ? '' : '2026-03-09',
    author: 'Admin User'
  });

  const [newTag, setNewTag] = useState('');

  const handleAddTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, newTag.trim()]
      });
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove)
    });
  };

  const handleSaveDraft = () => {
    console.log('Saving draft...', formData);
    alert('Draft saved successfully!');
  };

  const handleSubmitReview = () => {
    console.log('Submitting for review...', formData);
    alert('Content submitted for review!');
    router.push(`content`);
  };

  const handlePublish = () => {
    console.log('Publishing...', formData);
    alert('Content published successfully!');
    router.push(`content`);
  };

  return (
    <>
      <PageHeader
        title={isNew ? 'Create New Content' : 'Edit Content'}
        description={isNew ? 'Create a new article, banner, or landing page' : `Editing: ${formData.title}`}
        breadcrumbs={[
          { label: 'Content', path: '/content' },
          { label: isNew ? 'New' : 'Edit' }
        ]}
        actions={
          <>
            <button 
              onClick={() => router.push('/content')}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleSaveDraft}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <Save size={18} />
              Save Draft
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
              <Eye size={18} />
              Preview
            </button>
            {formData.status === 'draft' || formData.status === 'rejected' ? (
              <button 
                onClick={handleSubmitReview}
                className="px-4 py-2 bg-[#2E90FF] text-white rounded-lg hover:bg-[#1e7ff5] transition-colors flex items-center gap-2"
              >
                <Send size={18} />
                Submit for Review
              </button>
            ) : (
              <button 
                onClick={handlePublish}
                className="px-4 py-2 bg-[#C1121F] text-white rounded-lg hover:bg-[#9A0E19] transition-colors flex items-center gap-2"
              >
                <Calendar size={18} />
                Publish
              </button>
            )}
          </>
        }
      />

      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area - 2/3 */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#C1121F] focus:border-transparent"
                placeholder="Enter content title..."
              />
            </div>

            {/* Slug */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                URL Slug <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">sttb.ac.id/berita/</span>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F] focus:border-transparent"
                  placeholder="url-slug"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">This will be the URL for this content</p>
            </div>

            {/* Rich Text Editor */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Content <span className="text-red-500">*</span>
              </label>
              
              {/* Editor Toolbar */}
              <div className="border border-gray-300 rounded-t-lg bg-gray-50 p-2 flex items-center gap-1 flex-wrap">
                <button className="px-3 py-1.5 hover:bg-gray-200 rounded text-sm font-bold" title="Bold">B</button>
                <button className="px-3 py-1.5 hover:bg-gray-200 rounded text-sm italic" title="Italic">I</button>
                <button className="px-3 py-1.5 hover:bg-gray-200 rounded text-sm underline" title="Underline">U</button>
                <div className="w-px h-6 bg-gray-300 mx-1"></div>
                <button className="px-3 py-1.5 hover:bg-gray-200 rounded text-sm" title="Heading 1">H1</button>
                <button className="px-3 py-1.5 hover:bg-gray-200 rounded text-sm" title="Heading 2">H2</button>
                <button className="px-3 py-1.5 hover:bg-gray-200 rounded text-sm" title="Heading 3">H3</button>
                <div className="w-px h-6 bg-gray-300 mx-1"></div>
                <button className="px-3 py-1.5 hover:bg-gray-200 rounded text-sm" title="Bullet List">• List</button>
                <button className="px-3 py-1.5 hover:bg-gray-200 rounded text-sm" title="Numbered List">1. List</button>
                <button className="px-3 py-1.5 hover:bg-gray-200 rounded text-sm" title="Link">Link</button>
                <button className="px-3 py-1.5 hover:bg-gray-200 rounded text-sm" title="Image">Image</button>
              </div>

              {/* Editor Content */}
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full h-96 px-4 py-3 border border-gray-300 border-t-0 rounded-b-lg focus:outline-none focus:ring-2 focus:ring-[#C1121F] focus:border-transparent font-mono text-sm"
                placeholder="Write your content here..."
              />
              <p className="text-xs text-gray-500 mt-2">Use the toolbar above to format your content</p>
            </div>

            {/* Featured Image */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Featured Image
              </label>
              
              {formData.featuredImage ? (
                <div className="relative">
                  <img 
                    src={formData.featuredImage} 
                    alt="Featured" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => setFormData({ ...formData, featuredImage: '' })}
                    className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-[#C1121F] transition-colors cursor-pointer">
                  <ImageIcon size={48} className="mx-auto text-gray-400 mb-4" />
                  <p className="text-sm text-gray-600 mb-2">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar - 1/3 */}
          <div className="space-y-6">
            {/* Status & Publishing */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Publishing</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <StatusBadge status={formData.status as any} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Publish Date</label>
                  <input
                    type="date"
                    value={formData.publishDate}
                    onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
                  <input
                    type="text"
                    value={formData.author}
                    disabled
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50"
                  />
                </div>
              </div>
            </div>

            {/* Content Type */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Content Type</h3>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F] focus:border-transparent"
              >
                <option value="Article">Article</option>
                <option value="Page">Page</option>
                <option value="Banner">Banner</option>
                <option value="Landing Page">Landing Page</option>
              </select>
            </div>

            {/* Category */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Category</h3>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F] focus:border-transparent"
              >
                <option value="">Select category...</option>
                <option value="Seminar">Seminar</option>
                <option value="Wisuda">Wisuda</option>
                <option value="Kegiatan Mahasiswa">Kegiatan Mahasiswa</option>
                <option value="Konferensi">Konferensi</option>
                <option value="Kuliah Umum">Kuliah Umum</option>
              </select>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Tags</h3>
              
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F] focus:border-transparent"
                  placeholder="Add tag..."
                />
                <button
                  onClick={handleAddTag}
                  className="px-4 py-2 bg-[#2E90FF] text-white rounded-lg hover:bg-[#1e7ff5] transition-colors"
                >
                  <Tag size={16} />
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                    <button
                      onClick={() => handleRemoveTag(tag)}
                      className="hover:text-red-600 transition-colors"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
