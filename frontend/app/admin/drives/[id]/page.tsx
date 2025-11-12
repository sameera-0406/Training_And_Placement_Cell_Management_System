"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Edit2, Trash2 } from "lucide-react"
import Link from "next/link"

export default function DriveDetails({ params }: { params: { id: string } }) {
  const drive = {
    id: params.id,
    company: "Tech Corp",
    position: "Software Engineer",
    salary: "12-15 LPA",
    location: "Bangalore",
    description: "We are looking for talented software engineers to join our team.",
    requirements: ["B.Tech in CSE/IT", "CGPA >= 7.0", "Strong programming skills"],
    applications: 45,
    interviews: 12,
    offers: 8,
    status: "Active",
    deadline: "2024-11-30",
  }

  const applicants = [
    { id: 1, name: "Raj Kumar", status: "Applied", appliedDate: "2024-11-15" },
    { id: 2, name: "Priya Singh", status: "Interview", appliedDate: "2024-11-10" },
    { id: 3, name: "Amit Patel", status: "Offer", appliedDate: "2024-11-05" },
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <Link href="/admin/drives">
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <ArrowLeft size={18} />
            Back
          </Button>
        </Link>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Edit2 size={18} />
            Edit
          </Button>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Trash2 size={18} className="text-destructive" />
            Delete
          </Button>
        </div>
      </div>

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
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Salary</p>
                  <p className="font-semibold text-foreground">{drive.salary}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold text-foreground">{drive.location}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Description</p>
                <p className="text-foreground mt-2">{drive.description}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Requirements</p>
                <ul className="space-y-1">
                  {drive.requirements.map((req, idx) => (
                    <li key={idx} className="text-foreground flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">Application Deadline</p>
                <p className="font-semibold text-foreground">{drive.deadline}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle>Applicants</CardTitle>
              <CardDescription>Total: {applicants.length} applicants</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {applicants.map((applicant) => (
                  <div
                    key={applicant.id}
                    className="flex items-center justify-between p-3 border border-border rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-foreground">{applicant.name}</p>
                      <p className="text-xs text-muted-foreground">Applied: {applicant.appliedDate}</p>
                    </div>
                    <Badge
                      variant={
                        applicant.status === "Offer"
                          ? "default"
                          : applicant.status === "Interview"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {applicant.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Applications</p>
                <p className="text-3xl font-bold text-foreground">{drive.applications}</p>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">Interviews</p>
                <p className="text-3xl font-bold text-foreground">{drive.interviews}</p>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">Offers</p>
                <p className="text-3xl font-bold text-foreground">{drive.offers}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full">Send Notifications</Button>
              <Button variant="outline" className="w-full bg-transparent">
                Export Applicants
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                Close Drive
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
