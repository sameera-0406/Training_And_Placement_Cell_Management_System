"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Download, Filter, Upload } from "lucide-react"
import { useState } from "react"

export default function StudentsManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterDept, setFilterDept] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")

  const students = [
    {
      id: 1,
      name: "Raj Kumar",
      email: "raj@example.com",
      rollNo: "CS001",
      department: "CSE",
      cgpa: "8.5",
      status: "Placed",
      year: "2024",
    },
    {
      id: 2,
      name: "Priya Singh",
      email: "priya@example.com",
      rollNo: "CS002",
      department: "CSE",
      cgpa: "8.8",
      status: "Placed",
      year: "2024",
    },
    {
      id: 3,
      name: "Amit Patel",
      email: "amit@example.com",
      rollNo: "EC001",
      department: "ECE",
      cgpa: "7.9",
      status: "Pending",
      year: "2024",
    },
    {
      id: 4,
      name: "Neha Sharma",
      email: "neha@example.com",
      rollNo: "ME001",
      department: "ME",
      cgpa: "8.2",
      status: "Placed",
      year: "2023",
    },
  ]

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesDept = filterDept === "all" || student.department === filterDept
    const matchesStatus = filterStatus === "all" || student.status === filterStatus

    return matchesSearch && matchesDept && matchesStatus
  })

  const handleExport = () => {
    const csv = [
      ["Name", "Email", "Roll No", "Department", "CGPA", "Status"],
      ...filteredStudents.map((s) => [s.name, s.email, s.rollNo, s.department, s.cgpa, s.status]),
    ]
      .map((row) => row.join(","))
      .join("\n")

    const blob = new Blob([csv], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "students.csv"
    a.click()
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Students Management</h1>
          <p className="text-muted-foreground mt-2">Manage and track student information</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2 bg-transparent">
            <Upload size={18} />
            Bulk Upload
          </Button>
          <Button onClick={handleExport} className="gap-2">
            <Download size={18} />
            Export
          </Button>
        </div>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter size={20} />
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
            <Input
              placeholder="Search by name or roll number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Department</label>
              <Select value={filterDept} onValueChange={setFilterDept}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="CSE">CSE</SelectItem>
                  <SelectItem value="ECE">ECE</SelectItem>
                  <SelectItem value="ME">ME</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Status</label>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Placed">Placed</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle>Student List</CardTitle>
          <CardDescription>Total: {filteredStudents.length} students</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Roll No</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Department</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">CGPA</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="border-b border-border hover:bg-muted/50">
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium text-foreground">{student.name}</p>
                        <p className="text-sm text-muted-foreground">{student.email}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-foreground">{student.rollNo}</td>
                    <td className="py-3 px-4 text-foreground">{student.department}</td>
                    <td className="py-3 px-4 text-foreground">{student.cgpa}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          student.status === "Placed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {student.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="outline" size="sm" className="bg-transparent">
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
