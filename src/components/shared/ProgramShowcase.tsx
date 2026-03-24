import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Program {
  title: string;
  degree: string;
  description: string;
  link: string;
  image: string;
}

interface ProgramShowcaseProps {
  title: string;
  subtitle: string;
  programs: Program[];
  backgroundImage: string;
}

export function ProgramShowcase({ 
  title, 
  subtitle, 
  programs, 
  backgroundImage 
}: ProgramShowcaseProps) {
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
          opacity: 0.88
        }}
      />

      {/* Layer 3: Content (Top) */}
      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3B] mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            return (
              <Link
                key={index}
                href={program.link}
                className="group block"
              >
                <div 
                  className="card-hover bg-white rounded-2xl overflow-hidden shadow-xl"
                >
                  {/* Program Image with Overlay */}
                  <div className="relative h-64 overflow-hidden image-zoom-container">
                    <div 
                      className="image-zoom absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${program.image})`
                      }}
                    />
                    <div 
                      className="absolute inset-0 bg-[#0B1F3B]"
                      style={{
                        opacity: 0.7
                      }}
                    />
                    <div className="absolute inset-0 flex items-end p-6">
                      <div className="bg-[#C1121F] text-white px-4 py-2 rounded-full text-sm font-bold">
                        {program.degree}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#0B1F3B] mb-3 group-hover:text-[#C1121F] transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {program.description}
                    </p>
                    <div className="flex items-center text-[#C1121F] font-bold group-hover:gap-3 transition-all">
                      Pelajari Lebih Lanjut
                      <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom Wave Mask */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20">
          <path 
            d="M0,60 Q300,120 600,60 T1200,60 L1200,120 L0,120 Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}