import { ReactNode } from 'react';

interface LayeredSectionProps {
  children: ReactNode;
  backgroundImage: string;
  variant?: 'left' | 'right' | 'center';
  overlay?: 'dark' | 'light';
}

export function LayeredSection({ 
  children, 
  backgroundImage, 
  variant = 'center',
  overlay = 'dark'
}: LayeredSectionProps) {
  const getOverlayStyles = () => {
    if (overlay === 'dark') {
      return {
        backgroundColor: '#0B1F3B',
        opacity: 0.85
      };
    } else {
      return {
        backgroundColor: '#FFFFFF',
        opacity: 0.92
      };
    }
  };

  const getMaskShape = () => {
    switch (variant) {
      case 'left':
        return 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)';
      case 'right':
        return 'polygon(0 15%, 15% 0, 100% 0, 100% 100%, 0 100%)';
      case 'center':
        return 'ellipse(90% 95% at 50% 50%)';
      default:
        return 'none';
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Layer 1: Full Background Image (Bottom) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      />
      
      {/* Layer 2: Colored Overlay (Middle) */}
      <div 
        className="absolute inset-0"
        style={getOverlayStyles()}
      />

      {/* Layer 3: White Content Layer with Mask (Top) */}
      <div className="relative">
        <div className="container mx-auto px-4">
          <div 
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-16"
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}