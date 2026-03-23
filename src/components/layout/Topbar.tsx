'use client'

import { Bell, Search } from 'lucide-react'
import UserMenu from '@/components/layout/usermenu'

interface TopbarProps {
  sidebarCollapsed: boolean
}

export default function Topbar({ sidebarCollapsed }: TopbarProps) {
  return (
    <header
      className={`
        fixed top-0 right-0 h-16 z-30
        bg-white border-b border-gray-200
        flex items-center justify-between px-6
        transition-all duration-300 ease-in-out
        ${sidebarCollapsed ? 'left-16' : 'left-60'}
      `}
    >
      {/* Search */}
      <div className="relative w-72">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Cari..."
          className="
            w-full pl-9 pr-4 py-2
            bg-gray-50 border border-gray-200 rounded-lg
            text-sm text-gray-900 placeholder:text-gray-400
            focus:outline-none focus:ring-2 focus:ring-[#C1121F] focus:border-transparent
          "
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Notification Bell */}
        <button className="relative p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#C1121F] rounded-full" />
        </button>

        {/* User Menu */}
        <UserMenu />
      </div>
    </header>
  )
}