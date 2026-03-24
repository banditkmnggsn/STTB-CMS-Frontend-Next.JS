import Link from 'next/link';

interface ProgramHeroProps {
  title: string;
  degree: string;
  description: string;
  backgroundImage?: string;
}

export function ProgramHero({ title, degree, description, backgroundImage }: ProgramHeroProps) {
  return (
    <section 
      className="relative bg-gradient-to-r from-[#C1121F] to-[#9A0E19] text-white py-20 md:py-32 overflow-hidden"
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(193, 18, 31, 0.9), rgba(154, 14, 25, 0.9)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : undefined}
    >
      {/* Decorative pattern - red and blue squares */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
        <div className="grid grid-cols-4 gap-1">
          {Array.from({ length: 64 }).map((_, i) => (
            <div 
              key={i} 
              className={`w-4 h-4 ${i % 3 === 0 ? 'bg-[#0B1F3B]' : 'bg-white'}`}
            />
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-20">
        <div className="grid grid-cols-4 gap-1">
          {Array.from({ length: 48 }).map((_, i) => (
            <div 
              key={i} 
              className={`w-4 h-4 ${i % 2 === 0 ? 'bg-[#0B1F3B]' : 'bg-white'}`}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block bg-white text-[#C1121F] px-6 py-2 rounded-full mb-6 font-bold">
            {degree}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/admisi"
              className="inline-flex items-center justify-center bg-white text-[#C1121F] hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition shadow-lg"
            >
              Daftar Sekarang
            </Link>
            <a
              href="#kurikulum"
              className="inline-flex items-center justify-center bg-[#0B1F3B] hover:bg-[#071528] text-white font-bold px-8 py-4 rounded-lg transition shadow-lg"
            >
              Pelajari Kurikulum
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
