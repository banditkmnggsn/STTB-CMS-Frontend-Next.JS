interface Course {
  name: string;
  sks: number;
}

interface CourseTableProps {
  categoryTitle: string;
  courses: Course[];
  variant?: 'red' | 'blue';
}

export function CourseTable({ categoryTitle, courses, variant = 'red' }: CourseTableProps) {
  const totalSks = courses.reduce((sum, course) => sum + course.sks, 0);
  const headerColor = variant === 'red' ? 'bg-[#C1121F]' : 'bg-[#0B1F3B]';
  
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-[#0B1F3B] mb-4">{categoryTitle}</h3>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className={`${headerColor} text-white`}>
              <th className="px-6 py-4 text-left w-16">No</th>
              <th className="px-6 py-4 text-left">Mata Kuliah</th>
              <th className="px-6 py-4 text-center w-24">SKS</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr 
                key={index} 
                className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-200`}
              >
                <td className="px-6 py-4 text-gray-600">{index + 1}</td>
                <td className="px-6 py-4 text-gray-800">{course.name}</td>
                <td className="px-6 py-4 text-center font-bold text-[#C1121F]">{course.sks}</td>
              </tr>
            ))}
            <tr className="bg-gray-100 font-bold">
              <td colSpan={2} className="px-6 py-4 text-right text-[#0B1F3B]">Total SKS</td>
              <td className="px-6 py-4 text-center text-[#C1121F] text-lg">{totalSks}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
