"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/use-auth"
import Link from "next/link"
import { Users, Briefcase, TrendingUp, AlertCircle } from "lucide-react"

export default function FacultyDashboard() {
  const { user } = useAuth()

  const stats = [
    {
      title: "Students Mentored",
      value: "45",
      icon: Users,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Active Drives",
      value: "8",
      icon: Briefcase,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Placements",
      value: "38",
      icon: TrendingUp,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Pending Reviews",
      value: "12",
      icon: AlertCircle,
      color: "bg-orange-100 text-orange-600",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Welcome, {user?.name}!</h1>
        <p className="text-muted-foreground mt-2">Faculty placement coordination dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title} className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold text-foreground mt-2">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <Icon size={24} />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-border">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest updates from your students</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { student: "Raj Kumar", action: "Applied to Tech Corp", time: "2 hours ago" },
                { student: "Priya Singh", action: "Got interview call from Data Systems", time: "4 hours ago" },
                { student: "Amit Patel", action: "Received offer from Cloud Solutions", time: "1 day ago" },
              ].map((activity) => (
                <div
                  key={activity.student}
                  className="flex items-center justify-between p-4 border border-border rounded-lg"
                >
                  <div>
                    <p className="font-medium text-foreground">{activity.student}</p>
                    <p className="text-sm text-muted-foreground">{activity.action}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link href="/faculty/students">
              <Button className="w-full justify-start">View Students</Button>
            </Link>
            <Link href="/faculty/drives">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                Manage Drives
              </Button>
            </Link>
            <Link href="/faculty/reports">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                Generate Report
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
