"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { Clock, CheckCircle, AlertCircle } from "lucide-react"

export default function LiveDriveTracker() {
  const [timeLeft, setTimeLeft] = useState<Record<string, string>>({})

  const drives = [
    {
      id: 1,
      company: "Google",
      role: "Software Engineer",
      status: "Interview",
      startDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      registrations: 245,
      screening: 120,
      interviews: 45,
      offers: 12,
      statusFlow: [
        { stage: "Registration", count: 245, completed: true },
        { stage: "Screening", count: 120, completed: true },
        { stage: "Interview", count: 45, completed: true },
        { stage: "Results", count: 12, completed: false },
      ],
    },
    {
      id: 2,
      company: "Microsoft",
      role: "Cloud Engineer",
      status: "Screening",
      startDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      registrations: 198,
      screening: 85,
      interviews: 0,
      offers: 0,
      statusFlow: [
        { stage: "Registration", count: 198, completed: true },
        { stage: "Screening", count: 85, completed: true },
        { stage: "Interview", count: 0, completed: false },
        { stage: "Results", count: 0, completed: false },
      ],
    },
    {
      id: 3,
      company: "Amazon",
      role: "Data Scientist",
      status: "Registration",
      startDate: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000),
      registrations: 312,
      screening: 0,
      interviews: 0,
      offers: 0,
      statusFlow: [
        { stage: "Registration", count: 312, completed: true },
        { stage: "Screening", count: 0, completed: false },
        { stage: "Interview", count: 0, completed: false },
        { stage: "Results", count: 0, completed: false },
      ],
    },
    {
      id: 4,
      company: "TCS",
      role: "Associate Engineer",
      status: "Results",
      startDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
      registrations: 425,
      screening: 280,
      interviews: 95,
      offers: 68,
      statusFlow: [
        { stage: "Registration", count: 425, completed: true },
        { stage: "Screening", count: 280, completed: true },
        { stage: "Interview", count: 95, completed: true },
        { stage: "Results", count: 68, completed: true },
      ],
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft: Record<string, string> = {}
      drives.forEach((drive) => {
        const now = new Date()
        const diff = drive.startDate.getTime() - now.getTime()

        if (diff > 0) {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24))
          const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
          newTimeLeft[drive.id] = `${days}d ${hours}h ${minutes}m`
        } else {
          newTimeLeft[drive.id] = "Ongoing"
        }
      })
      setTimeLeft(newTimeLeft)
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Registration":
        return "bg-blue-100 text-blue-800"
      case "Screening":
        return "bg-yellow-100 text-yellow-800"
      case "Interview":
        return "bg-purple-100 text-purple-800"
      case "Results":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Live Placement Drive Tracker</h1>
        <p className="text-muted-foreground mt-2">Real-time tracking of ongoing and upcoming placement drives</p>
      </div>

      <div className="space-y-6">
        {drives.map((drive) => (
          <Card key={drive.id} className="border-border overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{drive.company}</CardTitle>
                  <CardDescription>{drive.role}</CardDescription>
                </div>
                <Badge className={getStatusColor(drive.status)}>{drive.status}</Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Countdown Timer */}
              <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <Clock size={20} className="text-blue-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Time until drive</p>
                  <p className="font-semibold text-foreground">{timeLeft[drive.id] || "Loading..."}</p>
                </div>
              </div>

              {/* Status Flow */}
              <div>
                <p className="text-sm font-semibold text-foreground mb-3">Status Flow</p>
                <div className="flex items-center justify-between">
                  {drive.statusFlow.map((flow, index) => (
                    <div key={flow.stage} className="flex flex-col items-center flex-1">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                          flow.completed ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {flow.completed ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                      </div>
                      <p className="text-xs text-center text-foreground font-medium">{flow.stage}</p>
                      <p className="text-xs text-muted-foreground">{flow.count} candidates</p>
                      {index < drive.statusFlow.length - 1 && (
                        <div className="absolute w-12 h-0.5 bg-gray-200 mt-5 ml-12" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Candidate Count */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-xs text-muted-foreground">Registrations</p>
                  <p className="text-2xl font-bold text-blue-600">{drive.registrations}</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-xs text-muted-foreground">Screening</p>
                  <p className="text-2xl font-bold text-yellow-600">{drive.screening}</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <p className="text-xs text-muted-foreground">Interviews</p>
                  <p className="text-2xl font-bold text-purple-600">{drive.interviews}</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-xs text-muted-foreground">Offers</p>
                  <p className="text-2xl font-bold text-green-600">{drive.offers}</p>
                </div>
              </div>

              {/* Conversion Rates */}
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="p-2 bg-gray-50 rounded">
                  <p className="text-muted-foreground">Screening Rate</p>
                  <p className="font-semibold text-foreground">
                    {((drive.screening / drive.registrations) * 100).toFixed(1)}%
                  </p>
                </div>
                <div className="p-2 bg-gray-50 rounded">
                  <p className="text-muted-foreground">Interview Rate</p>
                  <p className="font-semibold text-foreground">
                    {drive.screening > 0 ? ((drive.interviews / drive.screening) * 100).toFixed(1) : "0"}%
                  </p>
                </div>
                <div className="p-2 bg-gray-50 rounded">
                  <p className="text-muted-foreground">Offer Rate</p>
                  <p className="font-semibold text-foreground">
                    {drive.interviews > 0 ? ((drive.offers / drive.interviews) * 100).toFixed(1) : "0"}%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
