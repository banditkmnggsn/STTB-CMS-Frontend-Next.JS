'use client'

import { useState } from 'react'
import Sidebar from '@/components/layout/Sidebar'
import Topbar from '@/components/layout/Topbar'

export default function CmsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
      />

      {/* Topbar */}
      <Topbar sidebarCollapsed={collapsed} />

      {/* Main Content */}
      <main
        className={`
          pt-16 min-h-screen
          transition-all duration-300 ease-in-out
          ${collapsed ? 'ml-16' : 'ml-60'}
        `}
      >
        {children}
      </main>
    </div>
  )
}