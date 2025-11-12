"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, DollarSign, Calendar, Filter } from "lucide-react"
import { useState } from "react"

export default function PlacementDrives() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterPackage, setFilterPackage] = useState("all")
  const [filterLocation, setFilterLocation] = useState("all")
  const [filterDept, setFilterDept] = useState("all")

  const drives = [
    {
      id: 1,
      company: "Tech Corp",
      position: "Software Engineer",
      salary: "12-15 LPA",
      location: "Bangalore",
      deadline: "2024-11-30",
      applied: false,
      department: "CSE",
      minCGPA: 7.5,
    },
    {
      id: 2,
      company: "Data Systems",
      position: "Data Analyst",
      salary: "10-12 LPA",
      location: "Mumbai",
      deadline: "2024-11-25",
      applied: true,
      department: "CSE",
      minCGPA: 7.0,
    },
    {
      id: 3,
      company: "Cloud Solutions",
      position: "DevOps Engineer",
      salary: "13-16 LPA",
      location: "Hyderabad",
      deadline: "2024-12-05",
      applied: false,
      department: "ECE",
      minCGPA: 7.8,
    },
    {
      id: 4,
      company: "AI Innovations",
      position: "ML Engineer",
      salary: "15-18 LPA",
      location: "Bangalore",
      deadline: "2024-12-10",
      applied: false,
      department: "CSE",
      minCGPA: 8.0,
    },
  ]

  const filteredDrives = drives.filter((drive) => {
    const matchesSearch =
      drive.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      drive.position.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesPackage =
      filterPackage === "all" ||
      (filterPackage === "10-12" && Number.parseInt(drive.salary) >= 10 && Number.parseInt(drive.salary) <= 12) ||
      (filterPackage === "12-15" && Number.parseInt(drive.salary) >= 12 && Number.parseInt(drive.salary) <= 15) ||
      (filterPackage === "15+" && Number.parseInt(drive.salary) >= 15)

    const matchesLocation = filterLocation === "all" || drive.location === filterLocation

    const matchesDept = filterDept === "all" || drive.department === filterDept

    return matchesSearch && matchesPackage && matchesLocation && matchesDept
  })

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Placement Drives</h1>
        <p className="text-muted-foreground mt-2">Browse and apply to active placement drives</p>
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
              placeholder="Search by company or position..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Package Range</label>
              <Select value={filterPackage} onValueChange={setFilterPackage}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Packages</SelectItem>
                  <SelectItem value="10-12">10-12 LPA</SelectItem>
                  <SelectItem value="12-15">12-15 LPA</SelectItem>
                  <SelectItem value="15+">15+ LPA</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Location</label>
              <Select value={filterLocation} onValueChange={setFilterLocation}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="Bangalore">Bangalore</SelectItem>
                  <SelectItem value="Mumbai">Mumbai</SelectItem>
                  <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                </SelectContent>
              </Select>
            </div>

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
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredDrives.map((drive) => (
          <Card key={drive.id} className="border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{drive.company}</CardTitle>
                  <CardDescription className="text-base mt-1">{drive.position}</CardDescription>
                </div>
                {drive.applied && <Badge className="bg-green-100 text-green-700">Applied</Badge>}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <DollarSign size={18} className="text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Salary</p>
                    <p className="font-semibold text-foreground">{drive.salary}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="font-semibold text-foreground">{drive.location}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-border">
                <Calendar size={18} className="text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Application Deadline</p>
                  <p className="font-semibold text-foreground">{drive.deadline}</p>
                </div>
              </div>

              <Button className="w-full mt-4" disabled={drive.applied} variant={drive.applied ? "outline" : "default"}>
                {drive.applied ? "Already Applied" : "Apply Now"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredDrives.length === 0 && (
        <Card className="border-border">
          <CardContent className="pt-6 text-center">
            <p className="text-muted-foreground">No drives match your filters. Try adjusting your search.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
