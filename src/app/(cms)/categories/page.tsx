// import { PageHeader } from '@/components/admin/PageHeader';
// import { Plus } from 'lucide-react';

// export default function CategoriesPage() {
//   const categories = [
//     { id: '1', name: 'Seminar', slug: 'seminar', count: 12 },
//     { id: '2', name: 'Wisuda', slug: 'wisuda', count: 8 },
//     { id: '3', name: 'Kegiatan Mahasiswa', slug: 'kegiatan-mahasiswa', count: 24 },
//     { id: '4', name: 'Konferensi', slug: 'konferensi', count: 6 },
//   ];

//   const tags = ['Teologi', 'Event', 'Pelayanan', 'Akademik', 'Kehidupan Kampus', 'Pengumuman'];

//   return (
//     <>
//       <PageHeader
//         title="Categories & Tags"
//         description="Organize your content with categories and tags"
//         breadcrumbs={[{ label: 'Categories & Tags' }]}
//         actions={
//           <button className="px-4 py-2 bg-[#C1121F] text-white rounded-lg hover:bg-[#9A0E19] transition-colors flex items-center gap-2">
//             <Plus size={18} />
//             Add Category
//           </button>
//         }
//       />

//       <div className="p-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Categories */}
//           <div className="bg-white rounded-lg border border-gray-200">
//             <div className="px-6 py-4 border-b border-gray-200">
//               <h2 className="text-lg font-semibold text-gray-900">Categories</h2>
//             </div>
//             <div className="divide-y divide-gray-200">
//               {categories.map((category) => (
//                 <div key={category.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
//                   <div>
//                     <h3 className="font-medium text-gray-900">{category.name}</h3>
//                     <p className="text-sm text-gray-500">/{category.slug}</p>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <span className="text-sm text-gray-600">{category.count} items</span>
//                     <button className="text-[#2E90FF] hover:text-[#1e7ff5] text-sm font-medium">Edit</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Tags */}
//           <div className="bg-white rounded-lg border border-gray-200">
//             <div className="px-6 py-4 border-b border-gray-200">
//               <h2 className="text-lg font-semibold text-gray-900">Tags</h2>
//             </div>
//             <div className="p-6">
//               <div className="flex flex-wrap gap-2">
//                 {tags.map((tag) => (
//                   <span
//                     key={tag}
//                     className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 cursor-pointer"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//               <button className="mt-4 w-full py-2 border border-dashed border-gray-300 text-gray-600 rounded-lg hover:border-[#C1121F] hover:text-[#C1121F] transition-colors">
//                 + Add New Tag
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
