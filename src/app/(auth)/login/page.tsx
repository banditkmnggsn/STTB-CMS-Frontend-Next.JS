'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { Lock, Mail, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '', 
    password: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, handle actual authentication
    console.log('Login attempt:', formData);
    router.push('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1F3B] via-[#0B1F3B] to-[#C1121F] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-4">
            <span className="text-3xl font-bold text-[#C1121F]">S</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">STTB Admin</h1>
          <p className="text-gray-300">Content Management System</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sign In</h2>
          
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C1121F] focus:border-transparent"
                  placeholder="admin@sttb.ac.id"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
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

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-[#C1121F] border-gray-300 rounded focus:ring-[#C1121F]"
                />
                <span className="text-sm text-gray-700">Remember me</span>
              </label>
              <button
                type="button"
                className="text-sm text-[#C1121F] hover:text-[#9A0E19] font-medium"
              >
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#C1121F] hover:bg-[#9A0E19] text-white font-semibold rounded-lg transition-colors"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Quick Access</span>
            </div>
          </div>

          {/* Demo Credentials */}
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-gray-700 mb-2">Demo Credentials:</p>
            <div className="space-y-1 text-xs text-gray-600">
              <p><strong>Email:</strong> admin@sttb.ac.id</p>
              <p><strong>Password:</strong> admin123</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-300 text-sm mt-6">
          © 2026 STTB Bandung. All rights reserved.
        </p>
      </div>
    </div>
  );
}