"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function FacultyDrives() {
  const drives = [
    {
      id: 1,
      company: "Tech Corp",
      position: "Software Engineer",
      salary: "12-15 LPA",
      applications: 45,
      interviews: 12,
      offers: 8,
      status: "Active",
    },
    {
      id: 2,
      company: "Data Systems",
      position: "Data Analyst",
      salary: "10-12 LPA",
      applications: 32,
      interviews: 8,
      offers: 5,
      status: "Active",
    },
    {
      id: 3,
      company: "Cloud Solutions",
      position: "DevOps Engineer",
      salary: "13-16 LPA",
      applications: 28,
      interviews: 6,
      offers: 4,
      status: "Closed",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Placement Drives</h1>
        <p className="text-muted-foreground mt-2">Monitor and coordinate placement drives</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {drives.map((drive) => (
          <Card key={drive.id} className="border-border">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{drive.company}</CardTitle>
                  <CardDescription>{drive.position}</CardDescription>
                </div>
                <Badge variant={drive.status === "Active" ? "default" : "secondary"}>{drive.status}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Salary</p>
                  <p className="font-semibold text-foreground">{drive.salary}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Applications</p>
                  <p className="font-semibold text-foreground">{drive.applications}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-border">
                <div>
                  <p className="text-xs text-muted-foreground">Interviews</p>
                  <p className="font-semibold text-foreground">{drive.interviews}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Offers</p>
                  <p className="font-semibold text-foreground">{drive.offers}</p>
                </div>
              </div>

              <Button className="w-full mt-4">View Details</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
