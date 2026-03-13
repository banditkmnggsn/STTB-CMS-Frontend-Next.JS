'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { authStorage } from '@/lib/auth';
import { login } from '@/lib/api';

export default function AdminLoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const result = await login(identifier, password);
      authStorage.setTokens(result.accessToken, result.refreshToken);
      router.push('/admin/dashboard');
    } catch {
      setError('Login gagal. Periksa kembali akun Anda.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h1 className="mb-6 text-2xl font-bold text-[#0B1F3B]">Admin Login</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          value={identifier}
          onChange={(event) => setIdentifier(event.target.value)}
          placeholder="Email atau Username"
          className="w-full rounded-lg border border-slate-300 px-3 py-2"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          className="w-full rounded-lg border border-slate-300 px-3 py-2"
          required
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-lg bg-[#C1121F] px-4 py-2 font-semibold text-white disabled:opacity-70"
        >
          {isLoading ? 'Masuk...' : 'Masuk'}
        </button>
      </form>
    </div>
  );
}
