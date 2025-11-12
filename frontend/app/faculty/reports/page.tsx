"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"

export default function FacultyReports() {
  const reports = [
    {
      id: 1,
      title: "Placement Summary Report",
      description: "Overall placement statistics and trends",
      date: "2024-11-20",
    },
    {
      id: 2,
      title: "Student Performance Report",
      description: "Individual student placement outcomes",
      date: "2024-11-15",
    },
    {
      id: 3,
      title: "Company Feedback Report",
      description: "Feedback from recruiting companies",
      date: "2024-11-10",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Reports</h1>
        <p className="text-muted-foreground mt-2">Generate and download placement reports</p>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle>Available Reports</CardTitle>
          <CardDescription>Download or generate new reports</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {reports.map((report) => (
            <div key={report.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <FileText size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{report.title}</h3>
                  <p className="text-sm text-muted-foreground">{report.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">Generated: {report.date}</p>
                </div>
              </div>
              <Button className="gap-2">
                <Download size={18} />
                Download
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle>Generate New Report</CardTitle>
          <CardDescription>Create a custom report based on your requirements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button className="w-full">Generate Custom Report</Button>
        </CardContent>
      </Card>
    </div>
  )
}
