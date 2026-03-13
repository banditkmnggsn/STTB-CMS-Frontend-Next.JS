# STTB Next.js Migration Checklist

Status legend:
- [x] Done
- [~] In progress
- [ ] Pending

## 1) Strategy and Freeze
- [x] Lock migration strategy (scaffold-first, keep Vite fallback)
- [x] Freeze major architecture changes on Vite app during porting window
- [x] Keep `sttb-frontend` as active fallback until parity passes

## 2) Scaffold Next.js Baseline
- [x] Create new Next.js app (`sttb-frontend-next`) with TypeScript + Tailwind
- [x] Setup route groups (public/admin) baseline
- [x] Build baseline successfully

## 3) Core Layer Port
- [x] Port API client to Next (`src/lib/api.ts`)
- [x] Migrate env base URL to `NEXT_PUBLIC_API_BASE_URL`
- [x] Port auth utility with SSR-safe guards (`src/lib/auth.ts`)
- [x] Setup admin route protection via Next proxy (`src/proxy.ts`)

## 4) Shared Components and Layout Parity
- [x] Port shared public layout and navigation to Next
- [x] Port footer and key shared visual sections
- [~] Align major style tokens/animations with existing Vite UI

## 5) App Router Structure
- [x] Public area routes initialized
- [x] Admin area routes initialized
- [x] Complete dynamic segment parity with Vite route map

## 6) Public Pages Priority Port
- [x] Home (initial API-powered baseline)
- [x] Berita list + detail
- [x] Program dynamic page (`/program/[slug]`)
- [x] Content dynamic catch-all (`/[...slug]`)
- [x] Lead
- [x] Kegiatan
- [ ] Refine content parity with Vite visuals/components

## 7) SEO Migration
- [x] Replace client SEO pattern with Next metadata on migrated pages
- [ ] Complete metadata coverage for all migrated public pages

## 8) Admin Pages + CRUD Validation
- [x] Admin login flow in Next
- [x] Port Home Content CRUD page (form-field editor)
- [x] Port Lead Content CRUD page (form-field editor)
- [x] Port admin CMS pages: News, Programs, Pages, Site Settings
- [~] Validate CRUD end-to-end to backend (needs admin credential for write tests)

## 9) Parity Verification
- [x] Next build passes
- [x] Basic route smoke tests pass
- [x] Admin auth redirect behavior tested
- [~] Empty-state DB full parity check across all pages
- [~] Cross-check UI/UX parity with Vite app

## 10) Cutover and Fallback
- [~] Final parity sign-off (technical baseline done, content/UAT pending)
- [ ] Cutover deployment to Next.js
- [ ] Keep Vite app available for rollback during stabilization
- [ ] Archive Vite app after stabilization period

## Current Progress Estimate
- Migration completion: ~80%
- Current active phase: Step 9 + Step 10 (full parity/UAT and cutover prep)
