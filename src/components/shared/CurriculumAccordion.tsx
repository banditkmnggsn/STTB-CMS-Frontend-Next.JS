import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"; 
import { CourseTable } from "./CourseTable";

interface Course {
  name: string;
  sks: number;
}

interface CourseCategory {
  title: string;
  description: string;
  sks: number;
  courses: Course[];
  variant?: 'red' | 'blue';
}

interface CurriculumAccordionProps {
  categories: CourseCategory[];
}

export function CurriculumAccordion({ categories }: CurriculumAccordionProps) {
  return (
    <section className="py-16 bg-white shadow-md rounded-lg">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[var(--sttb-blue-dark)] mb-4">Daftar Kurikulum</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Klik pada setiap kategori di bawah ini untuk melihat detail mata kuliah dan SKS.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {categories.map((category, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="border-l-4 border-[#C1121F] border-b-0 rounded-lg px-2 sm:px-6 bg-gray-50/50 hover:bg-gray-50 transition-colors shadow-sm"
            >
              <AccordionTrigger className="hover:no-underline py-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full pr-4 text-left gap-4">
                  <div>
                    <h4 className="text-lg font-bold text-[var(--sttb-blue-dark)] group-hover:text-[var(--sttb-blue-bright)] transition-colors">
                      {category.title}
                    </h4>
                    <p className="text-sm text-gray-500 font-normal mt-1 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  <span className="shrink-0 inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[var(--sttb-blue-light-bg)] text-[var(--sttb-blue-bright)] text-sm font-bold whitespace-nowrap border border-blue-100">
                    {category.sks} SKS
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6">
                {/* We pass an empty string to categoryTitle since the Accordion header handles the title now */}
                <CourseTable 
                  categoryTitle="" 
                  courses={category.courses} 
                  variant={category.variant || (index % 2 === 0 ? 'red' : 'blue')} 
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}