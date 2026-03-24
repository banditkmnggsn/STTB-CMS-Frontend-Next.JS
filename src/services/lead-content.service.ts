// import { api } from "@/lib/api";
// import type { LeadPillar, LeadProgram, LeadEvent } from '@/lib/mock-data/contentModels';
// /**
//  * Berdasarkan api.ts Anda, result yang kembali dari api.get/put
//  * sudah merupakan ApiResponse<T>.
//  * Dan berdasarkan Guide, data utama ada di res.data.data
//  */
// const unwrap = (res: any) => {
//   // apiFetch sudah mengembalikan result as ApiResponse<T>
//   // Guide 8.1: data utama ada di field .data di dalam .data
//   if (res?.success && res?.data) {
//     return res.data.data || res.data;
//   }
//   return res?.data || null;
// };

// export const leadService = {
//   async getHero() {
//     try {
//       const res = await api.get("/api/lead-content/hero");
//       return unwrap(res);
//     } catch (err: any) {
//       return {
//         badge: "",
//         title: "",
//         subtitle: "",
//         description: "",
//         primaryButtonText: "",
//         primaryButtonLink: "",
//         secondaryButtonText: "",
//         secondaryButtonLink: "",
//         backgroundImage: "", // Pastikan konsisten
//       };
//     }
//   },

//   async getPillars() {
//     try {
//       const res = await api.get("/api/lead-content/pillars");
//       return unwrap(res) || [];
//     } catch (err: any) {
//       console.error("LEAD Pillars Error:", err.error || err.message);
//       return [];
//     }
//   },

//   async getPrograms() {
//     try {
//       const res = await api.get("/api/lead-content/programs");
//       return unwrap(res) || [];
//     } catch (err: any) {
//       console.error("LEAD Programs Error:", err.error || err.message);
//       return [];
//     }
//   },

//   async getEvents() {
//     try {
//       // Sesuai Guide 8.4
//       const res = await api.get("/api/events?isLeadEvent=true");
//       return res?.success ? res.data.items || res.data : [];
//     } catch (err: any) {
//       console.error("LEAD Events Error:", err.error || err.message);
//       return [];
//     }
//   },

//   // --- UPDATERS ---
//   async updateHero(payload: any) {
//     const res = await api.put("/api/lead-content/hero", payload);
//     return unwrap(res);
//   },

//   async updateAllPillars(payload: any[]) {
//     const res = await api.put("/api/lead-content/pillars", payload);
//     return unwrap(res);
//   },

//   async updateEvents(payload: LeadEvent[]) {
//     const response = await api.put("/api/lead-content/events", payload);
//     return response.data;
//   },

//   async updateProgram(id: string | number, payload: any) {
//     const path =
//       id === "bulk"
//         ? "/api/lead-content/programs"
//         : `/api/lead-content/programs/${id}`;
//     const res = await api.put(path, payload);
//     return unwrap(res);
//   },
// };


import { api } from "@/lib/api";
import type { 
  LeadHeroContent, 
  LeadPillar, 
  LeadProgram, 
  LeadEvent,
  PaginatedData 
} from '@/types/content'; // Asumsi tipe dipindah ke folder types/ atau folder model asli

/**
 * Logic unwrap:
 * res       => ApiResponse<T> (dari apiFetch)
 * res.data  => Payload T (bisa berupa objek data atau PaginatedData)
 */
const unwrap = <T>(res: any): T => {
  if (res?.success) {
    // Jika BE mengikuti pola data: { data: { ... } }
    return res.data?.data ?? res.data;
  }
  throw new Error(res?.message || "Gagal mengambil data dari server");
};

export const leadService = {
  // --- GETTERS ---
  async getHero(): Promise<LeadHeroContent> {
    const res = await api.get<LeadHeroContent>("/api/lead-content/hero");
    return unwrap<LeadHeroContent>(res);
  },

  async getPillars(): Promise<LeadPillar[]> {
    const res = await api.get<LeadPillar[]>("/api/lead-content/pillars");
    return unwrap<LeadPillar[]>(res) || [];
  },

  async getPrograms(): Promise<LeadProgram[]> {
    const res = await api.get<LeadProgram[]>("/api/lead-content/programs");
    return unwrap<LeadProgram[]>(res) || [];
  },

  async getEvents(): Promise<LeadEvent[]> {
    // Berdasarkan Guide 8.4 dan interface PaginatedData di api.ts
    const res = await api.get<PaginatedData<LeadEvent>>("/api/events", {
      params: { isLeadEvent: "true" } // Gunakan params jika wrapper api mendukung, atau manual di string
    } as any);
    
    if (res.success) {
      return res.data.items; // Sesuai interface PaginatedData
    }
    return [];
  },

  // --- UPDATERS ---
  async updateHero(payload: Partial<LeadHeroContent>): Promise<LeadHeroContent> {
    const res = await api.put<LeadHeroContent>("/api/lead-content/hero", payload);
    return unwrap<LeadHeroContent>(res);
  },

  async updateAllPillars(payload: LeadPillar[]): Promise<LeadPillar[]> {
    const res = await api.put<LeadPillar[]>("/api/lead-content/pillars", payload);
    return unwrap<LeadPillar[]>(res);
  },

  async updateEvents(payload: LeadEvent[]): Promise<LeadEvent[]> {
    const res = await api.put<LeadEvent[]>("/api/lead-content/events", payload);
    return unwrap<LeadEvent[]>(res);
  },

async updateProgram(
  id: string | number, 
  payload: Partial<LeadProgram> | LeadProgram[]
): Promise<any> {
  const path = id === "bulk" 
    ? "/api/lead-content/programs" 
    : `/api/lead-content/programs/${id}`;
  
  const res = await api.put<any>(path, payload);
  return unwrap<any>(res);
},
};