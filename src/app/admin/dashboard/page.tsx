import Link from 'next/link';

export default function AdminDashboardPage() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h1 className="mb-3 text-2xl font-bold text-[#0B1F3B]">Dashboard Admin</h1>
      <p className="mb-6 text-slate-600">Halaman admin Next.js sudah aktif dan diproteksi middleware berbasis cookie token.</p>
      <div className="mb-6 grid gap-3 sm:grid-cols-2">
        <Link href="/admin/home-content" className="rounded-xl border border-slate-200 p-4 text-sm font-semibold text-[#0B1F3B] hover:bg-slate-50">
          Kelola Home Content
        </Link>
        <Link href="/admin/lead-content" className="rounded-xl border border-slate-200 p-4 text-sm font-semibold text-[#0B1F3B] hover:bg-slate-50">
          Kelola LEAD Content
        </Link>
      </div>
      <div className="flex flex-wrap gap-3 text-sm">
        <Link href="/" className="rounded-full bg-[#0B1F3B] px-4 py-2 text-white">Kembali ke Public</Link>
        <Link href="/admin/login" className="rounded-full border border-slate-300 px-4 py-2 text-slate-700">Ganti Akun</Link>
      </div>
    </div>
  );
}
