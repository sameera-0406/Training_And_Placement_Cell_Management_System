"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2, Users, Bell, Calendar } from "lucide-react"
import { useState } from "react"

export default function DrivesManagement() {
  const [selectedDrive, setSelectedDrive] = useState<number | null>(null)

  const drives = [
    {
      id: 1,
      company: "Tech Corp",
      position: "Software Engineer",
      salary: "12-15 LPA",
      applications: 45,
      shortlisted: 12,
      status: "Active",
      interviewDate: "2024-12-01",
    },
    {
      id: 2,
      company: "Data Systems",
      position: "Data Analyst",
      salary: "10-12 LPA",
      applications: 32,
      shortlisted: 8,
      status: "Active",
      interviewDate: "2024-11-28",
    },
    {
      id: 3,
      company: "Cloud Solutions",
      position: "DevOps Engineer",
      salary: "13-16 LPA",
      applications: 28,
      shortlisted: 6,
      status: "Closed",
      interviewDate: "2024-11-20",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Placement Drives</h1>
          <p className="text-muted-foreground mt-2">Create and manage placement drives</p>
        </div>
        <Button className="gap-2">
          <Plus size={18} />
          New Drive
        </Button>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle>Active Drives</CardTitle>
          <CardDescription>Total: {drives.length} drives</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {drives.map((drive) => (
              <div key={drive.id} className="p-4 border border-border rounded-lg">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-lg">{drive.company}</h3>
                    <p className="text-sm text-muted-foreground">{drive.position}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      drive.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {drive.status}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4 py-3 border-y border-border">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">{drive.applications}</p>
                    <p className="text-xs text-muted-foreground">Applications</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">{drive.shortlisted}</p>
                    <p className="text-xs text-muted-foreground">Shortlisted</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-foreground">{drive.salary}</p>
                    <p className="text-xs text-muted-foreground">Salary</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Users size={16} />
                    Shortlist
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Bell size={16} />
                    Send Notification
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Calendar size={16} />
                    Schedule Interview
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit2 size={18} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 size={18} className="text-destructive" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
