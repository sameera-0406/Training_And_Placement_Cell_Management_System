"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
  role: "student" | "faculty" | "admin"
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const MOCK_USERS: Record<string, User> = {
  "student@example.com": {
    id: "1",
    name: "John Student",
    email: "student@example.com",
    role: "student",
  },
  "faculty@example.com": {
    id: "2",
    name: "Dr. Faculty",
    email: "faculty@example.com",
    role: "faculty",
  },
  "admin@example.com": {
    id: "3",
    name: "Admin User",
    email: "admin@example.com",
    role: "admin",
  },
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error("Failed to parse stored user:", error)
        localStorage.removeItem("user")
      }
    }
    setLoading(false)
  }, [])

  const login = (email: string) => {
    const userData = MOCK_USERS[email]
    if (userData) {
      setUser(userData)
      localStorage.setItem("user", JSON.stringify(userData))
    } else {
      throw new Error("Invalid email")
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return <AuthContext.Provider value={{ user, loading, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}
