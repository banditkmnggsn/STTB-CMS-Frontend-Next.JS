import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

interface NewsCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category?: string;
}

export function NewsCard({ slug, title, excerpt, date, image, category }: NewsCardProps) {
  return (
    <Link href={`/berita/${slug}`} className="group block">
      <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden card-hover h-full flex flex-col">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {category && (
            <div className="absolute top-4 left-4 bg-[#C1121F] text-white px-3 py-1 rounded-full text-sm font-semibold">
              {typeof category === 'object' ? (category as any).name : category}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Date */}
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
            <Calendar size={16} />
            <time dateTime={date}>{formatDate(date)}</time>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-[#0B1F3B] mb-3 group-hover:text-[#C1121F] transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-700 mb-4 line-clamp-3 flex-grow">
            {excerpt}
          </p>

          {/* Read More Link */}
          <div className="flex items-center gap-2 text-[#2E90FF] font-semibold group-hover:gap-3 transition-all">
            Baca Selengkapnya
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </article>
    </Link>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return date.toLocaleDateString('id-ID', options);
}
