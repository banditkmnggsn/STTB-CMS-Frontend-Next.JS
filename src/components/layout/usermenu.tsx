'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronDown, User, LogOut, Settings } from 'lucide-react'
import { logout } from '@/services/auth.service'
import { getUser } from '@/lib/api'
import type { AuthUser } from '@/services/auth.service'

export default function UserMenu() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const [user, setUser] = useState<AuthUser | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const userData = getUser<AuthUser>()
    if (userData) setUser(userData)
  }, [])

  // Tutup dropdown kalau klik di luar
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogout = async () => {
    setIsLoggingOut(true)
    await logout()
    router.push('/login')
  }

  const handleEditProfile = () => {
    setOpen(false)
    router.push('/settings')
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const roleLabelMap: Record<string, string> = {
    admin: 'Super Admin',
    editor: 'Editor',
    author: 'Author',
  }

  const roleLabel = roleLabelMap[user?.role?.name?.toLowerCase() || ''] || user?.role?.name || ''

  return (
    <div className="relative" ref={menuRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 pl-3 pr-2 py-1.5 hover:bg-gray-100 rounded-lg transition-colors"
      >
        {/* Avatar */}
        {user?.avatar ? (
          <img
            src={user.avatar}
            alt={user.name}
            className="w-7 h-7 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-7 h-7 bg-[#0B1F3B] rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs font-semibold">
              {user ? getInitials(user.name) : 'A'}
            </span>
          </div>
        )}

        {/* Name & Role */}
        <div className="text-left hidden sm:block">
          <p className="text-sm font-medium text-gray-900 leading-none">
            {user?.name || 'Admin'}
          </p>
          <p className="text-xs text-gray-500 mt-0.5">{roleLabel}</p>
        </div>

        <ChevronDown
          size={14}
          className={`text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl border border-gray-200 shadow-lg z-50 overflow-hidden">
          {/* User Info Header */}
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm font-semibold text-gray-900 truncate">{user?.name}</p>
            <p className="text-xs text-gray-500 truncate">{user?.email}</p>
            <span className="inline-block mt-1.5 px-2 py-0.5 bg-[#0B1F3B] text-white text-xs rounded-full">
              {roleLabel}
            </span>
          </div>

          {/* Menu Items */}
          <div className="py-1">
            <button
              onClick={handleEditProfile}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <User size={16} className="text-gray-400" />
              Edit Profil
            </button>

            <button
              onClick={() => { setOpen(false); router.push('/settings') }}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Settings size={16} className="text-gray-400" />
              Pengaturan
            </button>
          </div>

          {/* Logout */}
          <div className="border-t border-gray-100 py-1">
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors disabled:opacity-50"
            >
              <LogOut size={16} />
              {isLoggingOut ? 'Keluar...' : 'Keluar'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}