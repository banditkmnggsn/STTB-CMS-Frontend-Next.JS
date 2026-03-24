import { PageHero } from '@/components/shared/PageHero';
import { InfoPanel } from '@/components/shared/InfoPanel';
import { DollarSign } from 'lucide-react';
import { SEO } from '@/components/shared/SEO';

export default async function BiayaStudiPage() {
  return (
    <>
      <SEO title="Biaya Studi - STTB" />
      <PageHero
        title="BIAYA STUDI"
        subtitle="Informasi Biaya Pendidikan di STTB"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B1F3B] mb-8 text-center">Biaya Pendidikan 2026/2027</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Sarjana */}
              <div>
                <h3 className="text-2xl font-bold text-[#0B1F3B] mb-6">Program Sarjana (S1)</h3>
                
                <InfoPanel title="Sarjana Teologi" icon={<DollarSign size={24} />} variant="accent">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Biaya Pendaftaran:</span>
                      <strong>Rp 300.000</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Uang Pangkal:</span>
                      <strong>Rp 5.000.000</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>SPP per Semester:</span>
                      <strong>Rp 3.500.000</strong>
                    </div>
                    <div className="border-t pt-3 flex justify-between font-bold text-base">
                      <span>Total Tahun Pertama:</span>
                      <span className="text-[#D4AF37]">Rp 12.300.000</span>
                    </div>
                  </div>
                </InfoPanel>

                <div className="mt-4">
                  <InfoPanel title="Sarjana Pendidikan Kristen" icon={<DollarSign size={24} />} variant="accent">
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Biaya Pendaftaran:</span>
                        <strong>Rp 300.000</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Uang Pangkal:</span>
                        <strong>Rp 5.000.000</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>SPP per Semester:</span>
                        <strong>Rp 3.500.000</strong>
                      </div>
                      <div className="border-t pt-3 flex justify-between font-bold text-base">
                        <span>Total Tahun Pertama:</span>
                        <span className="text-[#D4AF37]">Rp 12.300.000</span>
                      </div>
                    </div>
                  </InfoPanel>
                </div>
              </div>

              {/* Magister */}
              <div>
                <h3 className="text-2xl font-bold text-[#0B1F3B] mb-6">Program Magister (S2)</h3>
                
                <InfoPanel title="Magister Teologi" icon={<DollarSign size={24} />} variant="accent">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Biaya Pendaftaran:</span>
                      <strong>Rp 500.000</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Uang Pangkal:</span>
                      <strong>Rp 7.000.000</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>SPP per Semester:</span>
                      <strong>Rp 4.500.000</strong>
                    </div>
                    <div className="border-t pt-3 flex justify-between font-bold text-base">
                      <span>Total Tahun Pertama:</span>
                      <span className="text-[#D4AF37]">Rp 16.500.000</span>
                    </div>
                  </div>
                </InfoPanel>

                <div className="mt-4">
                  <InfoPanel title="Program Magister Lainnya" icon={<DollarSign size={24} />} variant="accent">
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Biaya Pendaftaran:</span>
                        <strong>Rp 500.000</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Uang Pangkal:</span>
                        <strong>Rp 7.000.000</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>SPP per Semester:</span>
                        <strong>Rp 4.500.000</strong>
                      </div>
                      <div className="border-t pt-3 flex justify-between font-bold text-base">
                        <span>Total Tahun Pertama:</span>
                        <span className="text-[#D4AF37]">Rp 16.500.000</span>
                      </div>
                    </div>
                  </InfoPanel>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#0B1F3B] mb-6">Biaya Lain-lain</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-[#0B1F3B] text-white">
                      <th className="border border-gray-300 px-6 py-4 text-left">Keterangan</th>
                      <th className="border border-gray-300 px-6 py-4 text-right">Biaya</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4">Biaya Wisuda</td>
                      <td className="border border-gray-300 px-6 py-4 text-right">Rp 2.500.000</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-6 py-4">Biaya Asrama per Semester (opsional)</td>
                      <td className="border border-gray-300 px-6 py-4 text-right">Rp 2.000.000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4">Biaya Makan per Bulan (opsional)</td>
                      <td className="border border-gray-300 px-6 py-4 text-right">Rp 1.000.000</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-6 py-4">Biaya Seragam</td>
                      <td className="border border-gray-300 px-6 py-4 text-right">Rp 500.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#0B1F3B] mb-4">Catatan Penting:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Pembayaran dapat dilakukan secara tunai atau cicilan (dengan persetujuan)</li>
                <li>• Tersedia program beasiswa untuk mahasiswa berprestasi and kurang mampu</li>
                <li>• Biaya dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu</li>
                <li>• Untuk informasi lebih lanjut, hubungi bagian keuangan kampus</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
