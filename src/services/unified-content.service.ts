import { api } from "@/lib/api";

export type ContentType = 'news' | 'articles' | 'programs';

export const unifiedContentService = {
  // Ambil list berdasarkan tipe
  async getAll(type: ContentType) {
    const res = await api.get(`/api/${type}`);
    return res.success ? res.data : [];
  },

  async getById(type: ContentType, id: string) {
    return await api.get(`/api/${type}/${id}`);
  },

  async create(type: ContentType, data: any) {
    return await api.post(`/api/${type}`, data);
  },

  async update(type: ContentType, id: string, data: any) {
    return await api.put(`/api/${type}/${id}`, data);
  },

  async delete(type: ContentType, id: string) {
    return await api.delete(`/api/${type}/${id}`);
  }
};