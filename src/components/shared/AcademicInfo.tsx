import { GraduationCap, Clock, BookOpen, FileText, CheckCircle} from 'lucide-react';

interface AcademicInfoProps {
  totalSks: string;
  duration: string;
  system: string;
  requirements?: string;
  additionalInfo?: string;
}

export function AcademicInfo({ totalSks, duration, system, requirements, additionalInfo }: AcademicInfoProps) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Grid of Stats - Light Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          
          {/* Stat Card 1 */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm border-t-4 card-hover hover:border-[var(--sttb-red-primary)] transition-colors">
            <BookOpen className="w-8 h-8 text-[var(--sttb-red-primary)] mb-4" />
            <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-1">Total Beban</h4>
            <p className="text-2xl font-bold text-[var(--sttb-blue-dark)]">{totalSks}</p>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm border-t-4 card-hover hover:border-[var(--sttb-blue-bright)] transition-colors">
            <Clock className="w-8 h-8 text-[var(--sttb-blue-bright)] mb-4" />
            <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-1">Masa Studi</h4>
            <p className="text-2xl font-bold text-[var(--sttb-blue-dark)]">{duration}</p>
          </div>

          {/* Stat Card 3 */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm border-t-4 card-hover hover:border-[var(--sttb-red-primary)] transition-colors lg:col-span-2">
            <GraduationCap className="w-8 h-8 text-[var(--sttb-red-primary)] mb-4" />
            <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-1">Sistem Perkuliahan</h4>
            <p className="text-lg font-medium text-[var(--sttb-blue-dark)] leading-snug">{system}</p>
          </div>
        </div>

        {/* Requirements & Info Box - Soft Blue Theme */}
        <div className="bg-[var(--sttb-blue-light-bg)] p-8 rounded-xl border border-blue-100 flex flex-col md:flex-row gap-8 shadow-sm">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-6 h-6 text-[var(--sttb-blue-bright)]" />
              <h3 className="text-xl font-bold text-[var(--sttb-blue-dark)]">Persyaratan</h3>
            </div>
            <p className="leading-relaxed text-gray-700">{requirements}</p>
          </div>
          
          {additionalInfo && (
            <div className="flex-1 border-t md:border-t-0 md:border-l border-blue-200/60 pt-6 md:pt-0 md:pl-8">
              <div className="flex items-center gap-2 mb-3">
                {/* <Info className="w-6 h-6 text-[var(--sttb-red-primary)]" /> */}
                <h3 className="text-xl font-bold text-[var(--sttb-blue-dark)]">Informasi Tambahan</h3>
              </div>
              <p className="leading-relaxed text-gray-700">{additionalInfo}</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}