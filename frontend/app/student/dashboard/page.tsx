"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/hooks/use-auth"
import Link from "next/link"
import { Briefcase, FileText, TrendingUp, Users, Calendar } from "lucide-react"

export default function StudentDashboard() {
  const { user } = useAuth()

  const placementStatus = {
    status: "Applied",
    appliedCount: 12,
    shortlistedCount: 3,
    interviewCount: 2,
    offersCount: 1,
  }

  const stats = [
    {
      title: "Active Drives",
      value: "5",
      icon: Briefcase,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Applications",
      value: "12",
      icon: FileText,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Interviews",
      value: "3",
      icon: TrendingUp,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Offers",
      value: "1",
      icon: Users,
      color: "bg-orange-100 text-orange-600",
    },
  ]

  const upcomingDeadlines = [
    { company: "Tech Corp", deadline: "2024-11-30", daysLeft: 2 },
    { company: "Cloud Solutions", deadline: "2024-12-05", daysLeft: 7 },
    { company: "AI Innovations", deadline: "2024-12-10", daysLeft: 12 },
  ]

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Welcome back, {user?.name}!</h1>
        <p className="text-muted-foreground mt-2">Here's your placement journey overview</p>
      </div>

      <Card className="border-border bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle>Your Placement Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">{placementStatus.appliedCount}</p>
              <p className="text-sm text-muted-foreground">Applied</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">{placementStatus.shortlistedCount}</p>
              <p className="text-sm text-muted-foreground">Shortlisted</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">{placementStatus.interviewCount}</p>
              <p className="text-sm text-muted-foreground">Interviews</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">{placementStatus.offersCount}</p>
              <p className="text-sm text-muted-foreground">Offers</p>
            </div>
            <div className="text-center">
              <Badge className="bg-green-100 text-green-700 px-3 py-1">{placementStatus.status}</Badge>
              <p className="text-sm text-muted-foreground mt-2">Current Status</p>
            </div>
          </div>
        </CardContent>
      </Card>

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
            <CardTitle>Recent Applications</CardTitle>
            <CardDescription>Your latest placement applications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { company: "Tech Corp", position: "Software Engineer", status: "Applied" },
                { company: "Data Systems", position: "Data Analyst", status: "Interview" },
                { company: "Cloud Solutions", position: "DevOps Engineer", status: "Applied" },
              ].map((app) => (
                <div
                  key={app.company}
                  className="flex items-center justify-between p-4 border border-border rounded-lg"
                >
                  <div>
                    <p className="font-medium text-foreground">{app.company}</p>
                    <p className="text-sm text-muted-foreground">{app.position}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      app.status === "Interview" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {app.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar size={20} />
              Upcoming Deadlines
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingDeadlines.map((deadline) => (
              <div key={deadline.company} className="p-3 border border-border rounded-lg">
                <p className="font-medium text-foreground text-sm">{deadline.company}</p>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-xs text-muted-foreground">{deadline.deadline}</p>
                  <Badge variant={deadline.daysLeft <= 3 ? "destructive" : "secondary"} className="text-xs">
                    {deadline.daysLeft} days
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <Link href="/student/profile">
            <Button className="w-full justify-start">View Profile</Button>
          </Link>
          <Link href="/student/drives">
            <Button variant="outline" className="w-full justify-start bg-transparent">
              Browse Drives
            </Button>
          </Link>
          <Link href="/student/applications">
            <Button variant="outline" className="w-full justify-start bg-transparent">
              My Applications
            </Button>
          </Link>
          <Link href="/student/community">
            <Button variant="outline" className="w-full justify-start bg-transparent">
              Community
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
