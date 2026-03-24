import { api } from '@/lib/api';

/**
 * Berdasarkan api.ts Anda, result yang kembali dari api.get/put 
 * sudah merupakan ApiResponse<T>.
 * Dan berdasarkan Guide, data utama ada di res.data.data
 */
const unwrap = (res: any) => {
  // apiFetch sudah mengembalikan result as ApiResponse<T>
  // Guide 8.1: data utama ada di field .data di dalam .data
  if (res?.success && res?.data) {
    return res.data.data || res.data;
  }
  return res?.data || null;
};

export const leadService = {
async getHero() {
  try {
    const res = await api.get('/api/lead-content/hero');
    return unwrap(res);
  } catch (err: any) {
    return { 
      badge: '', 
      title: '', 
      subtitle: '', 
      description: '', 
      primaryButtonText: '', 
      primaryButtonLink: '', 
      secondaryButtonText: '', 
      secondaryButtonLink: '', 
      backgroundImage: '' // Pastikan konsisten
    };
  }
},

  async getPillars() {
    try {
      const res = await api.get('/api/lead-content/pillars');
      return unwrap(res) || [];
    } catch (err: any) {
      console.error("LEAD Pillars Error:", err.error || err.message);
      return [];
    }
  },

  async getPrograms() {
    try {
      const res = await api.get('/api/lead-content/programs');
      return unwrap(res) || [];
    } catch (err: any) {
      console.error("LEAD Programs Error:", err.error || err.message);
      return [];
    }
  },

  async getEvents() {
    try {
      // Sesuai Guide 8.4
      const res = await api.get('/api/events?isLeadEvent=true');
      return res?.success ? (res.data.items || res.data) : [];
    } catch (err: any) {
      console.error("LEAD Events Error:", err.error || err.message);
      return [];
    }
  },

  // --- UPDATERS ---
  async updateHero(payload: any) {
    const res = await api.put('/api/lead-content/hero', payload);
    return unwrap(res);
  },

  async updateAllPillars(payload: any[]) {
    const res = await api.put('/api/lead-content/pillars', payload);
    return unwrap(res);
  },

  async updateProgram(id: string | number, payload: any) {
    const path = id === 'bulk' ? '/api/lead-content/programs' : `/api/lead-content/programs/${id}`;
    const res = await api.put(path, payload);
    return unwrap(res);
  }
};