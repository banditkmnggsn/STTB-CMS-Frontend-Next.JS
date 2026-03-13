'use client';

import { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { PlusCircle } from 'lucide-react';
import { createAdminUser, fetchRoles, type RoleItem } from '@/lib/api';

const inputCls = 'w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F]';
const labelCls = 'mb-1 block text-sm font-medium text-slate-700';

type RegisterForm = {
  name: string;
  email: string;
  username: string;
  password: string;
  roleId: string;
  isActive: boolean;
};

const initialForm: RegisterForm = {
  name: '',
  email: '',
  username: '',
  password: '',
  roleId: '',
  isActive: true,
};

export default function AdminRegisterPage() {
  const [form, setForm] = useState<RegisterForm>(initialForm);
  const [roles, setRoles] = useState<RoleItem[]>([]);
  const [isLoadingRoles, setIsLoadingRoles] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function loadRoles() {
      try {
        const data = await fetchRoles();
        setRoles(data);
        if (data.length > 0) {
          setForm((prev) => ({ ...prev, roleId: data[0].id }));
        }
      } catch {
        setMessage('Gagal memuat role. Pastikan akun Anda memiliki akses admin.');
      } finally {
        setIsLoadingRoles(false);
      }
    }

    void loadRoles();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage('');
    setIsSubmitting(true);

    try {
      await createAdminUser({
        name: form.name.trim(),
        email: form.email.trim(),
        username: form.username.trim(),
        password: form.password,
        roleId: form.roleId,
        isActive: form.isActive,
      });

      setForm((prev) => ({ ...initialForm, roleId: prev.roleId }));
      setMessage('Akun berhasil dibuat.');
    } catch {
      setMessage('Gagal membuat akun. Cek data (email/username mungkin sudah dipakai).');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-[#0B1F3B]">Registrasi Admin User</h1>
          <p className="text-sm text-slate-600">Tambah akun baru untuk akses ke panel admin.</p>
        </div>
        <Link href="/admin/dashboard" className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700">
          Dashboard
        </Link>
      </div>

      {message && (
        <div className={`rounded-lg border px-4 py-3 text-sm ${message.startsWith('Gagal') ? 'border-red-200 bg-red-50 text-red-800' : 'border-green-200 bg-green-50 text-green-800'}`}>
          {message}
        </div>
      )}

      <div className="max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className={labelCls}>Nama Lengkap</label>
            <input
              type="text"
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
              className={inputCls}
              placeholder="Nama pengguna"
              required
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className={labelCls}>Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                className={inputCls}
                placeholder="email@domain.com"
                required
              />
            </div>
            <div>
              <label className={labelCls}>Username</label>
              <input
                type="text"
                value={form.username}
                onChange={(event) => setForm((prev) => ({ ...prev, username: event.target.value }))}
                className={inputCls}
                placeholder="username"
                minLength={3}
                required
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className={labelCls}>Password</label>
              <input
                type="password"
                value={form.password}
                onChange={(event) => setForm((prev) => ({ ...prev, password: event.target.value }))}
                className={inputCls}
                placeholder="Minimal 8 karakter"
                minLength={8}
                required
              />
            </div>
            <div>
              <label className={labelCls}>Role</label>
              <select
                value={form.roleId}
                onChange={(event) => setForm((prev) => ({ ...prev, roleId: event.target.value }))}
                className={inputCls}
                required
                disabled={isLoadingRoles}
              >
                {roles.length === 0 ? <option value="">Role tidak tersedia</option> : null}
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={form.isActive}
              onChange={(event) => setForm((prev) => ({ ...prev, isActive: event.target.checked }))}
              className="rounded border-slate-300"
            />
            Akun aktif
          </label>

          <button
            type="submit"
            disabled={isSubmitting || isLoadingRoles || !form.roleId}
            className="inline-flex items-center gap-2 rounded-lg bg-[#C1121F] px-5 py-2 text-sm font-semibold text-white hover:bg-[#9A0E19] disabled:opacity-70"
          >
            <PlusCircle className="h-4 w-4" />
            {isSubmitting ? 'Menyimpan...' : 'Tambah Akun'}
          </button>
        </form>
      </div>
    </div>
  );
}
