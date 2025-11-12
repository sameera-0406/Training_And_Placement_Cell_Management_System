"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [selectedEmail, setSelectedEmail] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (email: string) => {
    setError("")
    setLoading(true)

    try {
      login(email)

      const roleMap: Record<string, string> = {
        "student@example.com": "/student/dashboard",
        "faculty@example.com": "/faculty/dashboard",
        "admin@example.com": "/admin/dashboard",
      }

      const dashboardPath = roleMap[email] || "/student/dashboard"
      router.push(dashboardPath)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="border-0 shadow-xl">
          <CardHeader className="space-y-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
            <div className="flex items-center justify-center mb-4">
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-blue-600 font-bold text-2xl">P</span>
              </div>
            </div>
            <CardTitle className="text-2xl text-center">GCOE Placement Portal</CardTitle>
            <CardDescription className="text-center text-blue-100">
              Government College of Engineering Aurangabad
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm mb-6">{error}</div>
            )}

            <div className="space-y-4">
              <p className="text-center text-gray-600 font-medium mb-6">Select your account to login</p>

              <Button
                onClick={() => handleLogin("student@example.com")}
                disabled={loading}
                className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold rounded-lg transition-all"
              >
                <div className="text-left">
                  <div className="font-bold">Student</div>
                  <div className="text-sm font-normal opacity-90">student@example.com</div>
                </div>
              </Button>

              <Button
                onClick={() => handleLogin("faculty@example.com")}
                disabled={loading}
                className="w-full h-16 bg-green-600 hover:bg-green-700 text-white text-base font-semibold rounded-lg transition-all"
              >
                <div className="text-left">
                  <div className="font-bold">Faculty</div>
                  <div className="text-sm font-normal opacity-90">faculty@example.com</div>
                </div>
              </Button>

              <Button
                onClick={() => handleLogin("admin@example.com")}
                disabled={loading}
                className="w-full h-16 bg-purple-600 hover:bg-purple-700 text-white text-base font-semibold rounded-lg transition-all"
              >
                <div className="text-left">
                  <div className="font-bold">Admin</div>
                  <div className="text-sm font-normal opacity-90">admin@example.com</div>
                </div>
              </Button>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-xs font-semibold text-blue-900 mb-3">Quick Access:</p>
              <div className="space-y-2 text-xs text-blue-800">
                <div>
                  <p className="font-medium">Student Portal</p>
                  <p className="text-blue-600">View drives, apply, track applications</p>
                </div>
                <div>
                  <p className="font-medium">Faculty Portal</p>
                  <p className="text-blue-600">Manage students and placement drives</p>
                </div>
                <div>
                  <p className="font-medium">Admin Portal</p>
                  <p className="text-blue-600">Full system control and analytics</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
          <div>
            <div className="font-semibold text-gray-800 mb-1">Students</div>
            <p>Apply to drives</p>
          </div>
          <div>
            <div className="font-semibold text-gray-800 mb-1">Faculty</div>
            <p>Manage drives</p>
          </div>
          <div>
            <div className="font-semibold text-gray-800 mb-1">Admin</div>
            <p>Full control</p>
          </div>
        </div>
      </div>
    </div>
  )
}
