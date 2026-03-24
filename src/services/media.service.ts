import { api } from "@/lib/api";
import { PaginatedData, MediaFile } from "@/types/content";

export const mediaService = {
  // Ambil daftar media dengan rakitan URL manual
  async getMedia(params?: { 
    page?: number; 
    limit?: number; 
    search?: string; 
    folder?: string 
  }): Promise<PaginatedData<MediaFile>> {
    
    // Rakit query string secara manual
    const searchParams = new URLSearchParams();
    if (params?.page) searchParams.append("page", params.page.toString());
    if (params?.limit) searchParams.append("limit", params.limit.toString());
    if (params?.search) searchParams.append("search", params.search);
    if (params?.folder) searchParams.append("folder", params.folder);

    const queryString = searchParams.toString();
    const path = `/api/media${queryString ? `?${queryString}` : ""}`;

    // Panggil api.get tanpa properti 'params' yang bikin error tadi
    const res = await api.get<PaginatedData<MediaFile>>(path);
    
    if (res.success) {
      return res.data;
    }
    return { items: [], pagination: { page: 1, limit: 10, total: 0, totalPages: 0 } };
  },

  // Upload file tetap aman karena api.upload tidak pakai params
  async uploadMedia(file: File, metadata?: { 
    title?: string; 
    alt?: string; 
    folder?: string 
  }): Promise<MediaFile> {
    const formData = new FormData();
    formData.append("file", file);
    if (metadata?.title) formData.append("title", metadata.title);
    if (metadata?.alt) formData.append("alt", metadata.alt);
    if (metadata?.folder) formData.append("folder", metadata.folder);

    // Gunakan helper upload yang sudah ada di api.ts kamu
    const res = await api.upload<MediaFile>("/api/media/upload", formData);

    if (res.success) return res.data;
    throw new Error(res.message || "Upload gagal");
  },

  async deleteMedia(id: string): Promise<boolean> {
    const res = await api.delete(`/api/media/${id}`);
    return res.success;
  }
};