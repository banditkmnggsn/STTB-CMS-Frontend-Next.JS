# STTB CMS Frontend — Project Checklist

Last update: 2026-03-21
Project: STTB Frontend Next.js
Overall: ~60% complete

---

## ✅ Fase 1: Setup & Struktur (SELESAI)

- [x] Install Next.js 16 + TypeScript + Tailwind v4
- [x] Setup struktur folder (app router, route groups)
- [x] Setup `globals.css` dengan design tokens warna brand
- [x] Buat `app/layout.tsx` root
- [x] Buat `app/page.tsx` redirect ke `/login`
- [x] Buat `app/(cms)/layout.tsx` dengan sidebar + topbar
- [x] Buat `Sidebar.tsx` dengan collapse functionality
- [x] Buat `Topbar.tsx` dengan search + notifikasi + user menu
- [x] Buat `UserMenu.tsx` dengan dropdown logout + edit profil
- [x] Setup `.env.local` dengan `NEXT_PUBLIC_API_URL`

---

## ✅ Fase 2: Migrasi Page Admin (SELESAI)

- [x] `LoginPage` → `app/(auth)/login/page.tsx`
- [x] `RegisterPage` → `app/(auth)/register/page.tsx`
- [x] `DashboardPage` → `app/(cms)/dashboard/page.tsx`
- [x] `ContentListPage` → `app/(cms)/content/page.tsx`
- [x] `ContentEditorPage` → `app/(cms)/content/[id]/page.tsx`
- [x] `PagesManagementPage` → `app/(cms)/pages/page.tsx`
- [x] `MediaLibraryPage` → `app/(cms)/media/page.tsx`
- [x] `CategoriesPage` → `app/(cms)/categories/page.tsx`
- [x] `PublishingQueuePage` → `app/(cms)/publishing/page.tsx`
- [x] `AuditLogsPage` → `app/(cms)/audit-logs/page.tsx`
- [x] `UsersPage` → `app/(cms)/users/page.tsx`
- [x] `SettingsPage` → `app/(cms)/settings/page.tsx`
- [x] `HomeContentPage` → `app/(cms)/home-content/page.tsx`
- [x] `LeadContentPage` → `app/(cms)/lead-content/page.tsx`

---

## ✅ Fase 3: Services Layer (SEBAGIAN SELESAI)

- [x] `src/lib/api.ts` — base fetch, token handler, auto refresh
- [x] `src/lib/services/auth.service.ts` — login, logout, register, me
- [x] `src/lib/services/user.service.ts` — get/update profile, avatar
- [x] `src/lib/services/settings.service.ts` — get/update site settings

### Belum dibuat:
- [ ] `src/lib/services/news.service.ts` — CRUD artikel
- [ ] `src/lib/services/media.service.ts` — upload, list, delete
- [ ] `src/lib/services/users.service.ts` — CRUD users (admin)
- [ ] `src/lib/services/roles.service.ts` — CRUD roles
- [ ] `src/lib/services/categories.service.ts` — CRUD categories & tags
- [ ] `src/lib/services/audit.service.ts` — get audit logs
- [ ] `src/lib/services/home-content.service.ts` — get/update home content
- [ ] `src/lib/services/lead-content.service.ts` — get/update lead content
- [ ] `src/lib/services/programs.service.ts` — get/update programs
- [ ] `src/lib/services/events.service.ts` — CRUD events
- [ ] `src/lib/services/pages.service.ts` — CRUD pages

---

## 🔄 Fase 4: Connect FE → BE (SEBAGIAN SELESAI)

### Sudah connect:
- [x] Login → `POST /api/auth/login`
- [x] Logout → `POST /api/auth/logout`
- [x] Dashboard stats → `GET /api/news`, `/api/media`, `/api/users`
- [x] Dashboard recent activity → `GET /api/audit-logs`
- [x] Dashboard pending approvals → `GET /api/news?status=draft`
- [x] Settings → `GET /api/site-settings`, `PUT /api/site-settings/:category`

### Belum connect:
- [ ] Register → `POST /api/auth/register`
- [ ] Content List → `GET /api/news`
- [ ] Content Editor create → `POST /api/news`
- [ ] Content Editor edit → `PUT /api/news/:id`
- [ ] Content Editor delete → `DELETE /api/news/:id`
- [ ] Media Library list → `GET /api/media`
- [ ] Media Library upload → `POST /api/media/upload`
- [ ] Media Library delete → `DELETE /api/media/:id`
- [ ] Categories list → `GET /api/categories`
- [ ] Categories CRUD → `POST/PUT/DELETE /api/categories`
- [ ] Tags list → `GET /api/tags`
- [ ] Tags CRUD → `POST/PUT/DELETE /api/tags`
- [ ] Publishing Queue → `GET /api/news?status=draft`
- [ ] Audit Logs → `GET /api/audit-logs`
- [ ] Users list → `GET /api/users`
- [ ] Users CRUD → `POST/PUT/DELETE /api/users`
- [ ] Roles list → `GET /api/roles`
- [ ] Roles CRUD → `POST/PUT /api/roles`
- [ ] Home Content → `GET/PUT /api/home-content/:section`
- [ ] Lead Content → `GET/PUT /api/lead-content/:section`

---

## ⏳ Fase 5: Fix UI & Polish (BELUM MULAI)

### Login & Register:
- [ ] Register page connect ke BE (`POST /api/auth/register`)
- [ ] Validasi form register

### Dashboard:
- [ ] Fix link navigasi "Lihat semua aktivitas" dan "Lihat publishing queue"
- [ ] Handle state kosong kalau data BE belum ada

### Content List:
- [ ] Ganti mock data dengan data dari BE
- [ ] Filter status berfungsi
- [ ] Pagination berfungsi
- [ ] Tombol delete konfirmasi + hit BE
- [ ] Search berfungsi

### Content Editor:
- [ ] Ganti mock data dengan data dari BE
- [ ] Save draft → `POST /api/news` dengan status `draft`
- [ ] Submit for review → `PUT /api/news/:id` status `in_review`
- [ ] Publish → `PUT /api/news/:id` status `published`
- [ ] Upload featured image via media library

### Media Library:
- [ ] Ganti mock data dengan data dari BE
- [ ] Upload file berfungsi (multipart)
- [ ] Delete file berfungsi
- [ ] Preview gambar dari URL BE

### Categories & Tags:
- [ ] Ganti mock data dengan data dari BE
- [ ] Add/edit/delete category berfungsi
- [ ] Add/delete tag berfungsi

### Publishing Queue:
- [ ] Ganti mock data dengan data dari BE
- [ ] Tombol Approve → `PUT /api/news/:id` status `published`
- [ ] Tombol Reject → `PUT /api/news/:id` status `rejected`

### Audit Logs:
- [ ] Ganti mock data dengan data dari BE
- [ ] Filter by action berfungsi
- [ ] Filter by date berfungsi
- [ ] Pagination berfungsi

### Users:
- [ ] Ganti mock data dengan data dari BE
- [ ] Add user modal + form
- [ ] Edit user
- [ ] Delete user dengan konfirmasi
- [ ] Merge dengan Roles page (sudah hapus roles dari sidebar)

### Roles:
- [ ] Merge ke Users page sebagai tab
- [ ] Permission matrix connect ke BE

### Home Content:
- [ ] Connect ke `GET /api/home-content/:section`
- [ ] Save → `PUT /api/home-content/:section`

### Lead Content:
- [ ] Connect ke `GET /api/lead-content/:section`
- [ ] Save → `PUT /api/lead-content/:section`

### Settings:
- [ ] ✅ Sudah connect ke BE

### ROUTES constants:
- [ ] Buat `src/constants/routes.ts`
- [ ] Ganti semua hardcode path dengan ROUTES

---

## ⏳ Fase 6: Auth Guard (BELUM MULAI)

- [ ] Buat middleware `src/middleware.ts` untuk proteksi route `/dashboard`, dll
- [ ] Redirect ke `/login` kalau tidak ada token
- [ ] Handle token expired di semua page

---

## 📊 Summary Progress

| Fase | Status | % |
|------|--------|---|
| Setup & Struktur | ✅ Selesai | 100% |
| Migrasi Page | ✅ Selesai | 100% |
| Services Layer | 🔄 Jalan | 35% |
| Connect FE → BE | 🔄 Jalan | 20% |
| Fix UI & Polish | ⏳ Belum | 5% |
| Auth Guard | ⏳ Belum | 0% |
| **Overall** | 🔄 | **~45%** |

---

## 🎯 Prioritas Selanjutnya (Urutan Pengerjaan)

1. Buat semua services yang belum ada
2. Auth guard / middleware
3. Connect Content List + Content Editor ke BE
4. Connect Media Library ke BE
5. Connect Categories & Tags ke BE
6. Connect Publishing Queue ke BE
7. Connect Audit Logs ke BE
8. Connect Users ke BE + merge dengan Roles
9. Connect Home Content & Lead Content ke BE
10. ROUTES constants
11. Polish UI semua page