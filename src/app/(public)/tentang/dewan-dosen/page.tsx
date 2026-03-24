import { PageHero } from '@/components/shared/PageHero';
import { GraduationCap, Mail, BookOpen } from 'lucide-react';
import { fetchPublicData } from '@/lib/api';
import { SEO } from '@/components/shared/SEO';

export default async function DewanDosenPage() {
  let faculty: any[] = [];
  try {
    const response = await fetchPublicData('/lecturers?limit=50');
    faculty = Array.isArray(response) 
      ? response 
      : (Array.isArray(response?.data) 
          ? response.data 
          : (response?.items || []));
  } catch (error) {
    console.error('Failed to load lecturers:', error);
  }

  return (
    <>
      <SEO title="Dewan Dosen - STTB" />
      <PageHero
        title="DEWAN DOSEN"
        subtitle="Tim Pengajar Berkualitas dan Berpengalaman"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Introduction */}
            <div className="text-center mb-12">
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Dewan dosen STTB terdiri dari akademisi and praktisi yang memiliki komitmen kuat pada pendidikan teologi and pembentukan karakter. Mereka membawa keahlian akademik, pengalaman pelayanan, and dedikasi untuk membimbing mahasiswa.
              </p>
            </div>

            {/* Faculty Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {faculty.map((member: any) => (
                <div 
                  key={member.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col sm:flex-row"
                >
                  {member.imageUrl && (
                    <div className="sm:w-1/3 bg-gray-100 flex-shrink-0">
                      <img 
                        src={member.imageUrl} 
                        alt={member.name}
                        className="w-full h-full object-cover min-h-[200px]"
                      />
                    </div>
                  )}

                  <div className="flex-grow">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#C1121F] to-[#a00d25] text-white p-5">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-gray-100 font-medium text-sm">{member.position}</p>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-4">
                      {member.education && (
                        <div className="flex items-start gap-3">
                          <GraduationCap className="text-[#0B1F3B] flex-shrink-0 mt-1" size={18} />
                          <div>
                            <p className="text-xs font-bold text-[#0B1F3B] mb-0.5">Pendidikan</p>
                            <p className="text-gray-700 text-sm">{member.education}</p>
                          </div>
                        </div>
                      )}

                      {member.specialization && (
                        <div className="flex items-start gap-3">
                          <BookOpen className="text-[#0B1F3B] flex-shrink-0 mt-1" size={18} />
                          <div>
                            <p className="text-xs font-bold text-[#0B1F3B] mb-0.5">Bidang Keahlian</p>
                            <p className="text-gray-700 text-sm">{member.specialization}</p>
                          </div>
                        </div>
                      )}

                      {member.email && (
                        <div className="flex items-start gap-3">
                          <Mail className="text-[#0B1F3B] flex-shrink-0 mt-1" size={18} />
                          <div>
                            <p className="text-xs font-bold text-[#0B1F3B] mb-0.5">Email</p>
                            <a 
                              href={`mailto:${member.email}`}
                              className="text-[#C1121F] hover:underline text-sm break-all"
                            >
                              {member.email}
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {faculty.length === 0 && (
                <div className="col-span-full text-center p-8 bg-gray-50 rounded-xl outline-dashed outline-gray-200 text-gray-500">
                  Data dosen belum tersedia.
                </div>
              )}
            </div>

            {/* Additional Info */}
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-[#C1121F] mb-2">50+</div>
                <p className="text-gray-700">Dosen Tetap & Tidak Tetap</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-[#0B1F3B] mb-2">80%</div>
                <p className="text-gray-700">Bergelar Doktor</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-[#C1121F] mb-2">25+</div>
                <p className="text-gray-700">Tahun Pengalaman Rata-rata</p>
              </div>
            </div>

            {/* Commitment Statement */}
            <div className="mt-12 bg-gradient-to-r from-[#0B1F3B] to-[#071528] text-white p-8 md:p-12 rounded-xl">
              <h2 className="text-3xl font-bold mb-4 text-center">Komitmen Kami</h2>
              <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
                Setiap dosen di STTB berkomitmen tidak hanya untuk mengajar, tetapi juga menjadi mentor and teladan bagi mahasiswa. Kami percaya bahwa pendidikan teologi yang efektif melibatkan transformasi hidup, bukan hanya transfer informasi.
              </p>
            </div>

            {/* Note */}
            <div className="mt-8 bg-[#C1121F]/10 border border-[#C1121F]/30 p-6 rounded-lg">
              <p className="text-gray-700 text-center">
                <strong>Catatan:</strong> Profil lengkap dosen dapat diakses melalui portal akademik atau dengan menghubungi bagian akademik. Untuk jadwal konsultasi dengan dosen, silakan hubungi sekretariat akademik.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
