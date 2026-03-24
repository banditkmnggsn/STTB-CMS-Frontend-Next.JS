interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  const defaultBg = 'https://images.unsplash.com/photo-1675295740364-320b831fd16e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';
  
  return (
    <section className="relative min-h-[400px] md:min-h-[500px] overflow-hidden">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 31, 59, 0.8), rgba(11, 31, 59, 0.9)), url(${backgroundImage || defaultBg})`
        }}
      />
      
      {/* Content Layer with Curved Bottom Mask */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            {/* White Box with Angled Cut */}
            <div 
              className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-[#0B1F3B] mb-4">
                {title}
              </h1>
              {subtitle && (
                <p className="text-xl md:text-2xl text-gray-700">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Pattern Overlay */}
      <div className="absolute top-0 right-0 w-48 h-48 opacity-10 pointer-events-none">
        <div className="grid grid-cols-4 gap-1">
          {Array.from({ length: 48 }).map((_, i) => (
            <div 
              key={i} 
              className={`w-3 h-3 ${i % 3 === 0 ? 'bg-[#C1121F]' : 'bg-white'}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Wave Cutout */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path 
            d="M0,0 L0,60 Q300,90 600,60 T1200,60 L1200,120 L0,120 Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
