import { ReactNode } from 'react';

interface InfoPanelProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
}

export function InfoPanel({ title, children, icon, variant = 'primary' }: InfoPanelProps) {
  const variants = {
    primary: 'bg-[#1a3a5c] text-white',
    secondary: 'bg-gray-100 text-gray-800 border border-gray-200',
    accent: 'bg-[#d4af37]/10 text-gray-800 border border-[#d4af37]/30',
  };

  return (
    <div className={`rounded-lg p-6 shadow-md ${variants[variant]}`}>
      <div className="flex items-center gap-3 mb-4">
        {icon && <div className="text-[#d4af37]">{icon}</div>}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className={variant === 'primary' ? 'text-gray-200' : 'text-gray-700'}>
        {children}
      </div>
    </div>
  );
}
