"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Users, Briefcase, BarChart3, Bell, FileText, Settings, LogOut, Menu } from "lucide-react"
import { useState } from "react"

interface SidebarProps {
  user: {
    id: string
    name: string
    email: string
    role: string
  }
}

export function AdminSidebar({ user }: SidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const { logout } = useAuth()
  const [isOpen, setIsOpen] = useState(true)

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  const navItems = [
    { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/students", label: "Students", icon: Users },
    { href: "/admin/drives", label: "Placement Drives", icon: Briefcase },
    { href: "/admin/announcements", label: "Announcements", icon: Bell },
    { href: "/admin/content", label: "Content", icon: FileText },
    { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
    { href: "/admin/settings", label: "Settings", icon: Settings },
  ]

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-primary text-primary-foreground rounded-lg"
      >
        <Menu size={20} />
      </button>

      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:relative w-64 h-screen bg-sidebar border-r border-sidebar-border transition-transform duration-300 z-40 flex flex-col`}
      >
        <div className="p-6 border-b border-sidebar-border bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-blue-600 font-bold text-lg">GCOE</span>
            </div>
            <div>
              <h1 className="font-bold text-white text-sm">GCOE Admin</h1>
              <p className="text-xs text-blue-100">Control Panel</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent"
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-sidebar-border space-y-4">
          <div className="px-4 py-3 bg-sidebar-accent rounded-lg">
            <p className="text-sm font-medium text-sidebar-foreground">{user.name}</p>
            <p className="text-xs text-sidebar-accent-foreground">{user.email}</p>
          </div>
          <Button onClick={handleLogout} variant="outline" className="w-full justify-start gap-2 bg-transparent">
            <LogOut size={18} />
            Logout
          </Button>
        </div>
      </aside>

      {isOpen && <div className="md:hidden fixed inset-0 bg-black/50 z-30" onClick={() => setIsOpen(false)} />}
    </>
  )
}
