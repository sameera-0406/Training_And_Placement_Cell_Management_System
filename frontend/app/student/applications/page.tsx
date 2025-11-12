"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MyApplications() {
  const applications = [
    {
      id: 1,
      company: "Tech Corp",
      position: "Software Engineer",
      status: "Applied",
      appliedDate: "2024-11-15",
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: 2,
      company: "Data Systems",
      position: "Data Analyst",
      status: "Interview",
      appliedDate: "2024-11-10",
      color: "bg-green-100 text-green-700",
    },
    {
      id: 3,
      company: "Cloud Solutions",
      position: "DevOps Engineer",
      status: "Rejected",
      appliedDate: "2024-11-05",
      color: "bg-red-100 text-red-700",
    },
    {
      id: 4,
      company: "AI Innovations",
      position: "ML Engineer",
      status: "Offer",
      appliedDate: "2024-11-01",
      color: "bg-purple-100 text-purple-700",
    },
  ]

  const statuses = ["All", "Applied", "Interview", "Offer", "Rejected"]

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">My Applications</h1>
        <p className="text-muted-foreground mt-2">Track your placement applications</p>
      </div>

      <Tabs defaultValue="All" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          {statuses.map((status) => (
            <TabsTrigger key={status} value={status}>
              {status}
            </TabsTrigger>
          ))}
        </TabsList>

        {statuses.map((status) => (
          <TabsContent key={status} value={status} className="space-y-4 mt-6">
            {applications
              .filter((app) => status === "All" || app.status === status)
              .map((app) => (
                <Card key={app.id} className="border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-foreground">{app.company}</h3>
                        <p className="text-muted-foreground">{app.position}</p>
                        <p className="text-sm text-muted-foreground mt-2">Applied on {app.appliedDate}</p>
                      </div>
                      <Badge className={app.color}>{app.status}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
