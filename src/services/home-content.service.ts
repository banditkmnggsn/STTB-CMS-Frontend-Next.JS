import { api } from '@/lib/api';

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface HomeContent {
  id: string;
  section: string;
  data: any; 
  createdAt: string;
  updatedAt: string;
}

export const homeContentService = {
  /**
   * GET Section - Mengambil data
   */
  async getSection<T = any>(section: string): Promise<T | null> {
    try {
      const res = await api.get<ApiResponse<HomeContent>>(`/api/home-content/${section}`);
      if (res?.success && res?.data) {
        let content = res.data.data.data;
        if (content && typeof content === 'object' && 'data' in content) {
          content = content.data;
        }
        return content as T;
      }
      return null;
    } catch (error) {
      console.error(`[Service] Error GET ${section}:`, error);
      throw error;
    }
  },

  /**
   * UPDATE Section - VERSI ANTI-ERROR
   * Kita hapus semua IF status agar tidak ada celah untuk 'throw error' palsu
   */
  async updateSection(section: string, payload: any): Promise<any> {
    try {
      // Kita kirim request dan langsung return hasilnya
      const res: any = await api.put(`/api/home-content/${section}`, payload);

      // Selama kode sampai di sini (tidak loncat ke catch), 
      // berarti request HTTP sukses (200/201). Langsung kembalikan data.
      return res.data;

    } catch (error: any) {
      console.error(`[Service] Error PUT ${section}:`, error);
      // Hanya di sini kita lempar error jika benar-benar gagal (400, 500, dsb)
      const msg = error.response?.data?.message || error.message || 'Gagal memperbarui konten';
      throw new Error(msg);
    }
  },

  /**
   * GET Multiple Sections
   */
  async getMultipleSections(sections: string[]): Promise<Record<string, any>> {
    try {
      const results = await Promise.all(
        sections.map(async (s) => {
          const content = await this.getSection(s);
          return { section: s, content };
        })
      );

      return results.reduce((acc, curr) => {
        acc[curr.section] = curr.content;
        return acc;
      }, {} as Record<string, any>);
    } catch (error) {
      console.error("[Service] Error GET Multiple:", error);
      throw error;
    }
  }
};