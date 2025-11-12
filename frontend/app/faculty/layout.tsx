"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"
import { FacultySidebar } from "@/components/faculty/sidebar"

export default function FacultyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const { user, loading } = useAuth()

  useEffect(() => {
    if (!loading && (!user || user.role !== "faculty")) {
      router.push("/login")
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!user || user.role !== "faculty") {
    return null
  }

  return (
    <div className="flex h-screen bg-background">
      <FacultySidebar user={user} />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}
