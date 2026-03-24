import { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureHighlightProps {
  title: string;
  subtitle: string;
  features: Feature[];
  backgroundImage: string;
  imagePosition?: 'left' | 'right';
}

export function FeatureHighlight({ 
  title, 
  subtitle, 
  features, 
  backgroundImage,
  imagePosition = 'right'
}: FeatureHighlightProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Layer 1: Full Background Image (Bottom) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      />
      
      {/* Layer 2: Light Overlay (Middle) */}
      <div 
        className="absolute inset-0 bg-white"
        style={{
          opacity: 0.92
        }}
      />

      {/* Layer 3: Content (Top) */}
      <div className="relative container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${imagePosition === 'left' ? 'lg:grid-flow-dense' : ''}`}>
          {/* Content Section */}
          <div className={imagePosition === 'left' ? 'lg:col-start-2' : ''}>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3B] mb-4">
                {title}
              </h2>
              <p className="text-xl text-gray-700">
                {subtitle}
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className="card-hover bg-white p-6 rounded-2xl shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#C1121F] to-[#9A0E19] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Icon className="text-white" size={28} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#0B1F3B] mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Empty space on opposite side - background shows through */}
          <div className={`hidden lg:block ${imagePosition === 'left' ? 'lg:col-start-1' : ''}`} />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 opacity-5">
        <div className="grid grid-cols-4 gap-1">
          {Array.from({ length: 16 }).map((_, i) => (
            <div 
              key={i} 
              className={`w-4 h-4 ${i % 2 === 0 ? 'bg-[#C1121F]' : 'bg-[#0B1F3B]'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}