import { Briefcase } from 'lucide-react';

interface CareerOpportunitiesProps {
  careers: string[];
}

export function CareerOpportunities({ careers }: CareerOpportunitiesProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0B1F3B] mb-4">Prospek Karir</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lulusan program ini memiliki berbagai peluang karir di bidang pelayanan dan kepemimpinan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {careers.map((career, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#0B1F3B] to-[#071528] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <Briefcase size={32} />
              </div>
              <h3 className="font-bold text-lg">{career}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
