'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Image,
  FolderOpen,
  Tag,
  LayoutTemplate,
  BookOpen,
  Megaphone,
  Clock,
  ScrollText,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

interface NavItem {
  label: string
  href: string
  icon: React.ElementType
}

const navItems: NavItem[] = [
  { label: 'Dashboard',         href: '/dashboard',    icon: LayoutDashboard },
  { label: 'Pages',             href: '/pages',        icon: FolderOpen      },
  // { label: 'Programs',          href: '/programs',     icon: BookOpen         },
  { label: 'Home Content',      href: '/home-content', icon: LayoutTemplate  },
  { label: 'Lead Content',      href: '/lead-content', icon: Megaphone       },
  { label: 'Media Library',     href: '/media',        icon: Image           },
  // { label: 'Categories & Tags', href: '/categories',   icon: Tag             },
  { label: 'Publishing Queue',  href: '/publishing',   icon: Clock           },
  { label: 'Audit Logs',        href: '/audit-logs',   icon: ScrollText      },
  { label: 'Users & Roles',     href: '/users',        icon: Users           },
  { label: 'Settings',          href: '/settings',     icon: Settings        },
]

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
}

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <aside
      className={`
        fixed top-0 left-0 h-screen z-40
        bg-[#0B1F3B] text-white
        flex flex-col
        transition-all duration-300 ease-in-out
        ${collapsed ? 'w-16' : 'w-60'}
      `}
    >
      {/* Logo */}
      <div className={`flex items-center h-16 border-b border-white/10 px-4 flex-shrink-0 ${collapsed ? 'justify-center' : 'gap-3'}`}>
        <div className="w-8 h-8 bg-[#C1121F] rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-sm">S</span>
        </div>
        {!collapsed && (
          <span className="font-semibold text-sm text-white truncate">STTB CMS</span>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 space-y-1 px-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href)

          return (
            <Link
              key={item.href}
              href={item.href}
              title={collapsed ? item.label : undefined}
              className={`
                flex items-center gap-3 rounded-lg px-2 py-2.5
                transition-colors duration-150 group relative
                ${collapsed ? 'justify-center' : ''}
                ${active
                  ? 'bg-[#C1121F] text-white'
                  : 'text-white/60 hover:bg-white/10 hover:text-white'
                }
              `}
            >
              <Icon size={18} className="flex-shrink-0" />
              {!collapsed && (
                <span className="text-sm font-medium truncate">{item.label}</span>
              )}

              {/* Tooltip saat collapsed */}
              {collapsed && (
                <div className="
                  absolute left-full ml-2 px-2 py-1
                  bg-gray-900 text-white text-xs rounded
                  whitespace-nowrap opacity-0 pointer-events-none
                  group-hover:opacity-100
                  transition-opacity duration-150 z-50
                ">
                  {item.label}
                </div>
              )}
            </Link>
          )
        })}
      </nav>

      {/* Collapse Toggle Button */}
      <div className="flex-shrink-0 border-t border-white/10 p-2">
        <button
          onClick={onToggle}
          className={`
            w-full flex items-center gap-3 rounded-lg px-2 py-2.5
            text-white/60 hover:bg-white/10 hover:text-white
            transition-colors duration-150
            ${collapsed ? 'justify-center' : ''}
          `}
        >
          {collapsed
            ? <ChevronRight size={18} />
            : (
              <>
                <ChevronLeft size={18} />
                <span className="text-sm font-medium">Collapse</span>
              </>
            )
          }
        </button>
      </div>
    </aside>
  )
}