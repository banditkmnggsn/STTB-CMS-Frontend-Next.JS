interface Course {
  code: string;
  name: string;
  sks: number;
  semester: number;
}

interface CurriculumTableProps {
  courses: Course[];
  semester: number;
  totalSks: number;
}

export function CurriculumTable({ courses, semester, totalSks }: CurriculumTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-[#1a3a5c] text-white">
            <th className="border border-gray-300 px-4 py-3 text-left font-bold">KODE</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-bold">MATA KULIAH</th>
            <th className="border border-gray-300 px-4 py-3 text-center font-bold">SKS</th>
            <th className="border border-gray-300 px-4 py-3 text-center font-bold">SEMESTER</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="border border-gray-300 px-4 py-3 font-medium text-[#1a3a5c]">{course.code}</td>
              <td className="border border-gray-300 px-4 py-3 text-gray-700">{course.name}</td>
              <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{course.sks}</td>
              <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{course.semester}</td>
            </tr>
          ))}
          <tr className="bg-[#d4af37] text-white font-bold">
            <td colSpan={2} className="border border-gray-300 px-4 py-3 text-right">TOTAL SKS</td>
            <td className="border border-gray-300 px-4 py-3 text-center">{totalSks}</td>
            <td className="border border-gray-300 px-4 py-3"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
