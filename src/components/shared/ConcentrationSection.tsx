interface Concentration {
  title: string;
  description: string;
  courses: string[];
}

interface ConcentrationSectionProps {
  concentrations: Concentration[];
}

export function ConcentrationSection({ concentrations }: ConcentrationSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#0B1F3B] mb-12 text-center">Konsentrasi / Spesialisasi</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {concentrations.map((concentration, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-[#C1121F] mb-4">{concentration.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{concentration.description}</p>
              
              <div className="space-y-2">
                <p className="font-bold text-[#0B1F3B] mb-3">Mata Kuliah:</p>
                {concentration.courses.map((course, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm">
                    <div className="w-2 h-2 bg-[#C1121F] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
