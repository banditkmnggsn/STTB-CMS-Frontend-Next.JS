'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock, Mail, Eye, EyeOff, AlertCircle } from 'lucide-react'
import { login, isAdminRole } from '@/services/auth.service'

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
    rememberMe: false,
  })

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')
    setIsLoading(true)

    try {
      const { user } = await login(
        { identifier: formData.identifier, password: formData.password },
        formData.rememberMe
      )

      if (isAdminRole(user.role.name)) {
        router.push('/dashboard')
      } else {
        router.push('/')
      }
    } catch (err: any) {
      setErrorMessage(err.error || 'Email atau password salah.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1F3B] via-[#0B1F3B] to-[#C1121F] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-4 overflow-hidden">
            <img src="/Logo-STT-Bdg.jpg" alt="STTB Logo" className="object-contain w-14 h-14" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Sekolah Tinggi Teologi Bandung</h1>
          <p className="text-gray-300">Silakan masuk untuk mengakses sistem.</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Masuk</h2>

          {/* Error Message */}
          {errorMessage && (
            <div className="flex items-center gap-2 mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle size={16} className="text-red-600 flex-shrink-0" />
              <p className="text-sm text-red-700">{errorMessage}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email / Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email atau Username
              </label>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={formData.identifier}
                  onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C1121F] focus:border-transparent"
                  placeholder="admin@sttb.ac.id"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kata Sandi
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C1121F] focus:border-transparent"
                  placeholder="••••••••"
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember Me & Register */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                  className="w-4 h-4 text-[#C1121F] border-gray-300 rounded focus:ring-[#C1121F]"
                  disabled={isLoading}
                />
                <span className="text-sm text-gray-700">Ingat saya</span>
              </label>
              <a href="/register" className="text-sm text-[#C1121F] hover:text-[#9A0E19] font-medium">
                Belum punya akun? Daftar
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-[#C1121F] hover:bg-[#9A0E19] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Sedang masuk...
                </>
              ) : (
                'Masuk'
              )}
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
          </div>

          {/* Created by */}
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-gray-700 mb-2">Dibuat oleh:</p>
            <div className="space-y-1 text-xs text-gray-600">
              <p>Stephen Chuang</p>
              <p>Moeh Adji Anggalaksana</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-300 text-sm mt-6">
          © 2026 STTB Bandung. Hak cipta dilindungi.
        </p>
      </div>
    </div>
  )
}
//Yang sudah ditambahkan:
// Connect BE — POST /api/auth/login dengan identifier + password sesuai kontrak API kamu.
// Remember Me — kalau dicentang simpan ke localStorage (permanen), kalau tidak dicentang simpan ke sessionStorage (hilang saat browser ditutup).
// Role-based routing:

// Role admin, editor, author → /dashboard
// Role lain / bukan admin → / (public page)

// Figma raw
// 'use client'

// import { useState } from 'react';
// import { useRouter } from 'next/navigation'
// import { Lock, Mail, Eye, EyeOff } from 'lucide-react';

// export default function LoginPage() {
// const router = useRouter();
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '', 
//     password: ''
//   });

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     // In production, handle actual authentication
//     console.log('Login attempt:', formData);
//     router.push('/admin/dashboard');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0B1F3B] via-[#0B1F3B] to-[#C1121F] flex items-center justify-center p-4">
//       <div className="w-full max-w-md">
//         {/* Logo & Title */}
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-4 overflow-hidden">
//             <img src="/Logo-STT-Bdg.jpg" alt="STTB Logo" className="object-contain w-14 h-14" />
//           </div>
//           <h1 className="text-2xl font-bold text-white mb-2">Sekolah Tinggi Teologi Bandung</h1>
//           <p className="text-gray-300">Silakan login untuk mengakses website Sekolah Tinggi Teologi Bandung.</p>
//         </div>

//         {/* Login Card */}
//         <div className="bg-white rounded-2xl shadow-2xl p-8">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">Sign In</h2>
          
//           <form onSubmit={handleLogin} className="space-y-5">
//             {/* Email Field */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="email"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C1121F] focus:border-transparent"
//                   placeholder="admin@sttb.ac.id"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Password Field */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   value={formData.password}
//                   onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                   className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C1121F] focus:border-transparent"
//                   placeholder="••••••••"
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                 >
//                   {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                 </button>
//               </div>
//             </div>

//             {/* Remember Me & Forgot Password */}
//             <div className="flex items-center justify-between">
//               <label className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   className="w-4 h-4 text-[#C1121F] border-gray-300 rounded focus:ring-[#C1121F]"
//                 />
//                 <span className="text-sm text-gray-700">Remember me</span>
//               </label>
//               <a
//                 href="/register"
//                 className="text-sm text-[#C1121F] hover:text-[#9A0E19] font-medium"
//               >
//                 Belum punya akun? Register
//               </a>
//             </div>

//             {/* Login Button */}
//             <button
//               type="submit"
//               className="w-full py-3 bg-[#C1121F] hover:bg-[#9A0E19] text-white font-semibold rounded-lg transition-colors"
//             >
//               Sign In
//             </button>
//           </form>

//           {/* Divider */}
//           <div className="relative my-6">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//           </div>

//           {/* Demo Credentials */}
//           <div className="bg-gray-50 rounded-lg p-4">
//             <p className="text-xs font-semibold text-gray-700 mb-2">Created by:</p>
//             <div className="space-y-1 text-xs text-gray-600">
//               <p>Stephen Chuang</p>
//               <p>Moeh Adji Anggalaksana</p>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <p className="text-center text-gray-300 text-sm mt-6">
//           © 2026 STTB Bandung. All rights reserved.
//         </p>
//       </div>
//     </div>
//   );
// }