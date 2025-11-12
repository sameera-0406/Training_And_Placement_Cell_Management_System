"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Users, Briefcase, FileText, LogOut, Menu } from "lucide-react"
import { useState } from "react"

interface SidebarProps {
  user: {
    id: string
    name: string
    email: string
    role: string
  }
}

export function FacultySidebar({ user }: SidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const { logout } = useAuth()
  const [isOpen, setIsOpen] = useState(true)

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  const navItems = [
    { href: "/faculty/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/faculty/students", label: "Students", icon: Users },
    { href: "/faculty/drives", label: "Placement Drives", icon: Briefcase },
    { href: "/faculty/reports", label: "Reports", icon: FileText },
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
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sidebar-primary rounded-lg flex items-center justify-center">
              <span className="text-sidebar-primary-foreground font-bold">F</span>
            </div>
            <div>
              <h1 className="font-bold text-sidebar-foreground">Faculty</h1>
              <p className="text-xs text-sidebar-accent-foreground">Portal</p>
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
