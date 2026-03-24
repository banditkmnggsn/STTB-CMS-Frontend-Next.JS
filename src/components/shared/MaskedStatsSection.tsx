import { LucideIcon } from 'lucide-react';

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
}

interface MaskedStatsSectionProps {
  title: string;
  subtitle?: string;
  stats: Stat[];
  backgroundImage: string;
}

export function MaskedStatsSection({ 
  title, 
  subtitle, 
  stats, 
  backgroundImage 
}: MaskedStatsSectionProps) {
  return (
    <section className="relative py-20 overflow-hidden">
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
          opacity: 0.85
        }}
      />

      {/* Layer 3: Content (Top) */}
      <div className="relative container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Stats Grid with Organic Cutouts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            
            return (
              <div 
                key={index}
                className="stat-card bg-white rounded-2xl p-8 shadow-xl"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#C1121F] to-[#9A0E19] rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <Icon className="text-white" size={32} />
                  </div>
                  <div className="text-4xl font-bold text-[#C1121F] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-bold text-[#0B1F3B] mb-2">
                    {stat.label}
                  </div>
                  <p className="text-sm text-gray-600">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path 
            d="M0,0 L0,60 Q300,90 600,60 T1200,60 L1200,0 Z" 
            fill="white" 
            opacity="0.1"
          />
        </svg>
      </div>
    </section>
  );
}