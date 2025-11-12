"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, DollarSign, Calendar, Users } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function DriveDetail({ params }: { params: { id: string } }) {
  const [applied, setApplied] = useState(false)

  const drive = {
    id: params.id,
    company: "Tech Corp",
    position: "Software Engineer",
    salary: "12-15 LPA",
    location: "Bangalore",
    description:
      "We are looking for talented software engineers to join our innovative team. You will work on cutting-edge technologies and contribute to products used by millions.",
    requirements: ["B.Tech in CSE/IT", "CGPA >= 7.0", "Strong programming skills", "Problem-solving ability"],
    deadline: "2024-11-30",
    totalApplications: 45,
    status: "Active",
  }

  const handleApply = () => {
    setApplied(true)
  }

  return (
    <div className="p-6 space-y-6">
      <Link href="/student/drives">
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          <ArrowLeft size={18} />
          Back
        </Button>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-border">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">{drive.company}</CardTitle>
                  <CardDescription className="text-base mt-2">{drive.position}</CardDescription>
                </div>
                <Badge variant="default">{drive.status}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <DollarSign className="text-muted-foreground" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Salary</p>
                    <p className="font-semibold text-foreground">{drive.salary}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-muted-foreground" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold text-foreground">{drive.location}</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">About the Role</p>
                <p className="text-foreground leading-relaxed">{drive.description}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-3">Requirements</p>
                <ul className="space-y-2">
                  {drive.requirements.map((req, idx) => (
                    <li key={idx} className="text-foreground flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-border flex items-center gap-3">
                <Calendar className="text-muted-foreground" size={20} />
                <div>
                  <p className="text-sm text-muted-foreground">Application Deadline</p>
                  <p className="font-semibold text-foreground">{drive.deadline}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Application Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {applied ? (
                <div className="text-center py-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 text-xl">✓</span>
                  </div>
                  <p className="font-semibold text-foreground">Application Submitted</p>
                  <p className="text-sm text-muted-foreground mt-2">We will notify you about the next steps</p>
                </div>
              ) : (
                <Button onClick={handleApply} className="w-full">
                  Apply Now
                </Button>
              )}
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle>Drive Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Users className="text-muted-foreground" size={20} />
                <div>
                  <p className="text-sm text-muted-foreground">Total Applications</p>
                  <p className="font-semibold text-foreground">{drive.totalApplications}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
