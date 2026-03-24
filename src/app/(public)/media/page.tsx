import { fetchPublicData } from '@/lib/api';
import { MediaLibrary } from '@/components/shared/MediaLibrary';
import { SEO } from '@/components/shared/SEO';

async function getMediaData() {
  try {
    const response = await fetchPublicData('/media?limit=50');
    return response.items || [];
  } catch (err) {
    console.error('Failed to load media:', err);
    return [];
  }
}

export default async function MediaPage() {
  const mediaItems = await getMediaData();

  return (
    <div className="bg-white min-h-screen font-sans flex flex-col pt-0">
      <SEO title="LEAD Center - STTB" description="Learning, Equipping, & Development Center STT Bandung." />
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] bg-[#002147] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1748904013387-3b34401359a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" 
            alt="Media STTB" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002147] via-[#002147]/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-6">
            Pustaka Media STTB
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Akses berbagai dokumenter, kuliah umum, buletin, and podcast untuk mendukung pertumbuhan rohani and wawasan teologi Anda.
          </p>
        </div>
      </section>

      <MediaLibrary mediaItems={mediaItems} />
    </div>
  );
}
