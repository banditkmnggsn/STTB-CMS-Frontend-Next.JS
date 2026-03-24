# STTB Bandung - Next.js Migration (Phase 1 & 2 Complete)

## Status
Public pages have been successfully migrated to the Next.js App Router architecture. The Admin Dashboard (Phase 3) is currently pending and serves as the next milestone for development.

## Project Structure
- **Public Routes:** Located in `src/app/(public)`. This includes all guest-facing pages like Akademik, Berita, LEAD, etc.
- **Layouts:** Shared layouts and site-wide components are located in `src/components/layout`.
- **Shared Components:** Reusable UI elements are in `src/components/shared` and `src/components/ui`.
- **Styles:** Global CSS and Tailwind configuration are in `src/app/globals.css` and the project root respectively.

## Setup Instructions

### Prerequisites
- Node.js (Latest LTS recommended)
- npm or yarn

### Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file based on `.env.example`:
   ```bash
   cp .env.example .env.local
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Components:** Radix UI
