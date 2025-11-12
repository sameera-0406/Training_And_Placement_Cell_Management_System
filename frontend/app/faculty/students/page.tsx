"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState } from "react"

export default function FacultyStudents() {
  const [searchTerm, setSearchTerm] = useState("")

  const students = [
    {
      id: 1,
      name: "Raj Kumar",
      rollNo: "CS001",
      cgpa: "8.5",
      placements: 2,
      status: "Placed",
    },
    {
      id: 2,
      name: "Priya Singh",
      rollNo: "CS002",
      cgpa: "8.8",
      placements: 1,
      status: "Placed",
    },
    {
      id: 3,
      name: "Amit Patel",
      rollNo: "EC001",
      cgpa: "7.9",
      placements: 0,
      status: "Active",
    },
  ]

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">My Students</h1>
        <p className="text-muted-foreground mt-2">Monitor and guide your mentees</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
        <Input
          placeholder="Search by name or roll number..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle>Student List</CardTitle>
          <CardDescription>Total: {filteredStudents.length} students</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredStudents.map((student) => (
              <div key={student.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{student.name}</h3>
                  <p className="text-sm text-muted-foreground">Roll No: {student.rollNo}</p>
                  <div className="flex gap-4 mt-2 text-sm">
                    <span className="text-foreground">CGPA: {student.cgpa}</span>
                    <span className="text-foreground">Placements: {student.placements}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      student.status === "Placed" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {student.status}
                  </span>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    View Profile
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
