import { PageHero } from '@/components/shared/PageHero';
import { MapPin, Phone, Mail, Clock, MessageCircle, Wallet } from 'lucide-react';
import { fetchPublicData } from '@/lib/api';
import { ContactForm } from '@/components/shared/ContactForm';
import { SEO } from '@/components/shared/SEO';

async function getContactData() {
  try {
    const contactSettings = await fetchPublicData('/site-settings/contact');
    return contactSettings?.data || contactSettings || {};
  } catch (error) {
    console.error('Failed to load contact settings:', error);
    return {};
  }
}

export default async function KontakPage() {
  const contact = await getContactData();
  
  // Helper to safely render contact arrays if they exist
  const renderList = (items: string | string[], fallback: React.ReactNode) => {
    if (!items) return fallback;
    if (Array.isArray(items)) {
      return items.map((item, i) => <span key={i} className="block">{item}</span>);
    }
    return <span className="block">{items}</span>;
  };

  return (
    <>
      <SEO title="Hubungi Kami - STTB" />
      <PageHero
        title="HUBUNGI KAMI"
        subtitle="Kami Siap Membantu Anda"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-[#0B1F3B] mb-8">Informasi Kontak</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#0B1F3B] text-[#D4AF37] rounded-full flex items-center justify-center">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0B1F3B] mb-2">Alamat</h3>
                      <p className="text-gray-700 whitespace-pre-line">
                        {contact.address || "Jl Dr. Djundjunan No. 105\nBandung 40173\nIndonesia"}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#0B1F3B] text-[#D4AF37] rounded-full flex items-center justify-center">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0B1F3B] mb-2">Telepon</h3>
                      <div className="text-gray-700">
                        {renderList(contact.phones, "(+62) 22 601-6454\n(+62) 22 607-7920")}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#0B1F3B] text-[#D4AF37] rounded-full flex items-center justify-center">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0B1F3B] mb-2">WhatsApp</h3>
                      <div className="text-gray-700">
                        {renderList(contact.whatsapp, "(+62) 815 7336 0009")}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#0B1F3B] text-[#D4AF37] rounded-full flex items-center justify-center">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0B1F3B] mb-2">Email</h3>
                      <p className="text-gray-700">{contact.email || "official@sttb.ac.id"}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#0B1F3B] text-[#D4AF37] rounded-full flex items-center justify-center">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0B1F3B] mb-2">Jam Operasional</h3>
                      <p className="text-gray-700 whitespace-pre-line">
                        {contact.operationalHours || "Senin - Jumat: 08:00 - 16:00\nSabtu: 08:00 - 12:00\nMinggu: Tutup"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg">
                  <h3 className="font-bold text-[#0B1F3B] mb-3 flex items-center gap-2">
                    <Wallet size={20} />
                    Rekening Bank
                  </h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Bank:</strong> BCA cab. Surya Sumantri Bandung</p>
                    <p><strong>No. Rekening:</strong> 282.300.5555</p>
                    <p><strong>Atas Nama:</strong> Yayasan STT Bandung</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-[#0B1F3B] mb-8">Kirim Pesan</h2>
                <ContactForm />
              </div>
            </div>

            {/* Map */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-[#0B1F3B] mb-8 text-center">Lokasi Kampus</h2>
              <div className="bg-gray-200 rounded-lg overflow-hidden" style={{ height: '400px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5286!2d106.8234!3d-6.3052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTgnMTguNyJTIDEwNsKwNDknMjQuMiJF!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
