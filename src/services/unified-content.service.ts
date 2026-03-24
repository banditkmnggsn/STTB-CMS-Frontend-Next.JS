import { api } from "@/lib/api";

export type ContentType = 'news' | 'programs';

export const unifiedContentService = {
  // Ambil list berdasarkan tipe
  async getAll(type: ContentType) {
    const res = await api.get(`/api/${type}`);
    return res.success ? res.data : [];
  },

  async getById(type: ContentType, idOrSlug: string) {
    return await api.get(`/api/${type}/${idOrSlug}`);
  },

  async create(type: ContentType, data: any) {
    // Logic Check: Program biasanya butuh slug di URL jika mengacu pada list API kamu
    const endpoint = type === 'programs' && data.slug 
      ? `/api/programs/${data.slug}` 
      : `/api/${type}`;
      
    return await api.post(endpoint, data);
  },

  async update(type: ContentType, idOrSlug: string, data: any) {
    return await api.put(`/api/${type}/${idOrSlug}`, data);
  },

  async delete(type: ContentType, idOrSlug: string) {
    return await api.delete(`/api/${type}/${idOrSlug}`);
  },

  // --- Khusus Program Detail (Berdasarkan API kamu) ---
  async updateProgramDetail(slug: string, section: 'academic-info' | 'curriculum' | 'graduate-profile' | 'career-opportunities', data: any) {
    return await api.put(`/api/programs/${slug}/${section}`, data);
  },

  async addCourse(slug: string, data: any) {
    return await api.post(`/api/programs/${slug}/courses`, data);
  },

  async deleteCourse(slug: string, courseId: string) {
    return await api.delete(`/api/programs/${slug}/courses/${courseId}`);
  }
};