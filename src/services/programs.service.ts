// import { Program } from '@/types/program'

// import { api } from '@/lib/api'
// export const programsService = {

//   async getBySlug(slug: string): Promise<Program> {
//     const res = await fetch(`${api}/api/programs`)

//     if (!res.ok) {
//       throw new Error('Failed to fetch program')
//     }

//     return res.json()
//   },

//   async updateProgram(slug: string, data: Partial<Program>) {
//     return fetch(`${api}/api/programs/${slug}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data)
//     })
//   },

//   async updateAcademicInfo(slug: string, data: any[]) {
//     return fetch(`${api}/api/programs/${slug}/academic-info`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data)
//     })
//   },

//   async updateGraduateProfiles(slug: string, data: any[]) {
//     return fetch(`${api}/api/programs/${slug}/graduate-profile`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data)
//     })
//   },

//   async updateCurriculum(slug: string, data: any[]) {
//     return fetch(`${api}/api/programs/${slug}/curriculum`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data)
//     })
//   },

//   async updateCareer(slug: string, data: string[]) {
//     return fetch(`${api}/api/programs/${slug}/career-opportunities`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data)
//     })
//   }

// }