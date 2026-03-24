import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  description: string;
  degree: string;
  duration: string;
  link: string;
  image?: string;
}

export function ProgramCard({ title, description, degree, duration, link, image }: ProgramCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover group">
      {image && (
        <div className="h-48 overflow-hidden image-zoom-container">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover image-zoom"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-bold text-[#d4af37] bg-[#d4af37]/10 px-3 py-1 rounded-full">
            {degree}
          </span>
          <span className="text-xs text-gray-500">{duration}</span>
        </div>
        <h3 className="text-xl font-bold text-[#1a3a5c] mb-3">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>
        <Link 
          href={link}
          className="inline-flex items-center gap-2 text-[#1a3a5c] hover:text-[#d4af37] font-medium link-hover group"
        >
          Selengkapnya 
          <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </div>
  );
}