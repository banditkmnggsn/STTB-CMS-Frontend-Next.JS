interface Category {
  title: string;
  description: string;
  sks?: number;
}

interface CurriculumCategoriesProps {
  categories: Category[];
}

export function CurriculumCategories({ categories }: CurriculumCategoriesProps) {
  return (
    <section className="py-16 bg-white" id="kurikulum">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#0B1F3B] mb-12 text-center">Struktur Kurikulum</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#F3F7FF] to-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-[#C1121F]"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-[#0B1F3B]">{category.title}</h3>
                {category.sks && (
                  <span className="bg-[#C1121F] text-white px-3 py-1 rounded-full text-sm font-bold">
                    {category.sks} SKS
                  </span>
                )}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
