import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    link: string;
  };
  secondaryButton?: {
    text: string;
    link: string;
  };
}

export function CTASection({ title, description, primaryButton, secondaryButton }: CTASectionProps) {
  return (
    <section className="bg-gradient-to-r from-[#C1121F] to-[#9A0E19] text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryButton.link}
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#C1121F] font-bold px-8 py-4 rounded-lg shadow-lg scale-hover"
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
    </section>
  );
}