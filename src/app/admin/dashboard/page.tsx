import Link from 'next/link';

export default function AdminDashboardPage() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h1 className="mb-3 text-2xl font-bold text-[#0B1F3B]">Dashboard Admin</h1>
      <p className="mb-6 text-slate-600">Halaman admin Next.js sudah aktif dan diproteksi middleware berbasis cookie token.</p>
      <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <Link href="/admin/home-content" className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50">
          <div className="text-sm font-semibold text-[#0B1F3B]">Konten Homepage</div>
          <div className="mt-1 text-xs text-slate-500">Edit hero, statistik, program showcase</div>
        </Link>
        <Link href="/admin/lead-content" className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50">
          <div className="text-sm font-semibold text-[#0B1F3B]">Konten LEAD</div>
          <div className="mt-1 text-xs text-slate-500">Hero, 3 pilar, program, agenda</div>
        </Link>
        <Link href="/admin/news" className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50">
          <div className="text-sm font-semibold text-[#0B1F3B]">Manajemen Berita</div>
          <div className="mt-1 text-xs text-slate-500">Buat, lihat, dan hapus artikel berita</div>
        </Link>
        <Link href="/admin/programs" className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50">
          <div className="text-sm font-semibold text-[#0B1F3B]">Manajemen Program</div>
          <div className="mt-1 text-xs text-slate-500">Kelola program studi STTB</div>
        </Link>
        <Link href="/admin/pages" className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50">
          <div className="text-sm font-semibold text-[#0B1F3B]">Manajemen Pages</div>
          <div className="mt-1 text-xs text-slate-500">Kelola halaman dinamis CMS</div>
        </Link>
        <Link href="/admin/register" className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50">
          <div className="text-sm font-semibold text-[#0B1F3B]">Registrasi Admin User</div>
          <div className="mt-1 text-xs text-slate-500">Tambah akun user baru dengan role</div>
        </Link>
        <Link href="/admin/settings" className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50">
          <div className="text-sm font-semibold text-[#0B1F3B]">Pengaturan Website</div>
          <div className="mt-1 text-xs text-slate-500">Informasi umum dan media sosial</div>
        </Link>
      </div>
      <div className="flex flex-wrap gap-3 text-sm">
        <Link href="/" className="rounded-full bg-[#0B1F3B] px-4 py-2 text-white">Kembali ke Public</Link>
        <Link href="/admin/login" className="rounded-full border border-slate-300 px-4 py-2 text-slate-700">Ganti Akun</Link>
      </div>
    </div>
  );
}
