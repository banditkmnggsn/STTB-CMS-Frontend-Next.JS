import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface LayeredHeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryButton: {
    text: string;
    link: string;
  };
  secondaryButton?: {
    text: string;
    link: string;
  };
  backgroundImage: string;
}

export function LayeredHero({ 
  title, 
  subtitle, 
  description, 
  primaryButton, 
  secondaryButton,
  backgroundImage 
}: LayeredHeroProps) {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Layer 1: Full Background Image (Bottom) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      />
      
      {/* Layer 2: Dark Overlay (Middle) */}
      <div 
        className="absolute inset-0 bg-[#0B1F3B]"
        style={{
          opacity: 0.75
        }}
      />
      
      {/* Layer 3: White Content Layer (Top) */}
      <div className="relative h-full">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            {/* Text Content on White Background */}
            <div className="relative">
              <div 
                className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl relative"
              >
                <div className="inline-block bg-[#C1121F] text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                  {subtitle}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#0B1F3B] mb-6 leading-tight">
                  {title}
                </h1>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={primaryButton.link}
                    className="btn-primary inline-flex items-center justify-center gap-2 bg-[#C1121F] hover:bg-[#9A0E19] text-white font-bold px-8 py-4 rounded-lg shadow-lg"
                  >
                    {primaryButton.text}
                    <ArrowRight size={20} />
                  </Link>
                  {secondaryButton && (
                    <Link
                      href={secondaryButton.link}
                      className="btn-secondary inline-flex items-center justify-center gap-2 bg-[#0B1F3B] hover:bg-[#071528] text-white font-bold px-8 py-4 rounded-lg shadow-lg"
                    >
                      {secondaryButton.text}
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Empty space on desktop - background shows through naturally */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>

      {/* Decorative Pattern Overlay */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
        <div className="grid grid-cols-4 gap-1">
          {Array.from({ length: 64 }).map((_, i) => (
            <div 
              key={i} 
              className={`w-4 h-4 ${i % 3 === 0 ? 'bg-[#C1121F]' : 'bg-white'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}