import { BookOpen, Heart, Users } from 'lucide-react';

export function GraduateProfile() {
  const profiles = [
    {
      title: 'Informed',
      description: 'Lulusan memiliki pengetahuan teologis yang kuat dan pemahaman akademik yang mendalam.',
      icon: <BookOpen size={40} />
    },
    {
      title: 'Transformed',
      description: 'Lulusan menunjukkan kedewasaan spiritual dan karakter yang berpusat pada Kristus.',
      icon: <Heart size={40} />
    },
    {
      title: 'Transformative',
      description: 'Lulusan mampu membawa dampak transformasi bagi gereja, masyarakat dan pelayanan.',
      icon: <Users size={40} />
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0B1F3B] mb-4">Profil Lulusan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lulusan program ini dibekali dengan tiga karakteristik utama yang menjadi fondasi pelayanan mereka
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {profiles.map((profile, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#C1121F] to-[#9A0E19] text-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                {profile.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{profile.title}</h3>
              <p className="text-gray-100 leading-relaxed">
                {profile.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
