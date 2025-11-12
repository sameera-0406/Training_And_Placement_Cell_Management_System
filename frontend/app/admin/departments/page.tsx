"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { useState } from "react"

export default function DepartmentDashboards() {
  const [selectedDept, setSelectedDept] = useState("CSE")

  const departments = [
    { id: "CSE", name: "Computer Science & Engineering", color: "#3b82f6" },
    { id: "IT", name: "Information Technology", color: "#10b981" },
    { id: "ME", name: "Mechanical Engineering", color: "#f59e0b" },
    { id: "CE", name: "Civil Engineering", color: "#ef4444" },
    { id: "EE", name: "Electrical Engineering", color: "#8b5cf6" },
    { id: "ECE", name: "Electronics & Communication", color: "#ec4899" },
  ]

  const departmentStats = {
    CSE: {
      totalStudents: 320,
      placed: 280,
      avgPackage: 14.2,
      highestPackage: 42,
      topRecruiters: [
        { name: "Google", placements: 28, package: 18.5 },
        { name: "Microsoft", placements: 24, package: 17.2 },
        { name: "Amazon", placements: 22, package: 16.8 },
        { name: "TCS", placements: 45, package: 12.5 },
        { name: "Infosys", placements: 38, package: 13.2 },
      ],
      monthlyData: [
        { month: "Jan", placements: 18, applications: 45 },
        { month: "Feb", placements: 22, applications: 52 },
        { month: "Mar", placements: 20, applications: 48 },
        { month: "Apr", placements: 28, applications: 61 },
        { month: "May", placements: 25, applications: 55 },
        { month: "Jun", placements: 32, applications: 67 },
      ],
      packageDistribution: [
        { range: "8-10 LPA", count: 25 },
        { range: "10-12 LPA", count: 65 },
        { range: "12-15 LPA", count: 120 },
        { range: "15-20 LPA", count: 55 },
        { range: "20+ LPA", count: 15 },
      ],
    },
    IT: {
      totalStudents: 280,
      placed: 240,
      avgPackage: 12.8,
      highestPackage: 38,
      topRecruiters: [
        { name: "TCS", placements: 42, package: 12.5 },
        { name: "Infosys", placements: 38, package: 13.2 },
        { name: "Wipro", placements: 32, package: 12.8 },
        { name: "HCL", placements: 28, package: 11.9 },
        { name: "Accenture", placements: 24, package: 12.1 },
      ],
      monthlyData: [
        { month: "Jan", placements: 15, applications: 40 },
        { month: "Feb", placements: 18, applications: 45 },
        { month: "Mar", placements: 16, applications: 42 },
        { month: "Apr", placements: 22, applications: 52 },
        { month: "May", placements: 20, applications: 48 },
        { month: "Jun", placements: 25, applications: 58 },
      ],
      packageDistribution: [
        { range: "8-10 LPA", count: 30 },
        { range: "10-12 LPA", count: 85 },
        { range: "12-15 LPA", count: 95 },
        { range: "15-20 LPA", count: 25 },
        { range: "20+ LPA", count: 5 },
      ],
    },
    ME: {
      totalStudents: 240,
      placed: 200,
      avgPackage: 11.5,
      highestPackage: 28,
      topRecruiters: [
        { name: "Maruti Suzuki", placements: 35, package: 10.5 },
        { name: "Bajaj Auto", placements: 28, package: 10.2 },
        { name: "Hero MotoCorp", placements: 25, package: 9.8 },
        { name: "TCS", placements: 32, package: 12.5 },
        { name: "Infosys", placements: 28, package: 13.2 },
      ],
      monthlyData: [
        { month: "Jan", placements: 12, applications: 35 },
        { month: "Feb", placements: 14, applications: 38 },
        { month: "Mar", placements: 13, applications: 36 },
        { month: "Apr", placements: 18, applications: 45 },
        { month: "May", placements: 16, applications: 42 },
        { month: "Jun", placements: 20, applications: 50 },
      ],
      packageDistribution: [
        { range: "8-10 LPA", count: 85 },
        { range: "10-12 LPA", count: 75 },
        { range: "12-15 LPA", count: 35 },
        { range: "15-20 LPA", count: 5 },
        { range: "20+ LPA", count: 0 },
      ],
    },
    CE: {
      totalStudents: 200,
      placed: 160,
      avgPackage: 10.2,
      highestPackage: 22,
      topRecruiters: [
        { name: "L&T", placements: 32, package: 10.8 },
        { name: "Larsen & Toubro", placements: 28, package: 10.5 },
        { name: "Shapoorji Pallonji", placements: 22, package: 9.8 },
        { name: "TCS", placements: 25, package: 12.5 },
        { name: "Infosys", placements: 20, package: 13.2 },
      ],
      monthlyData: [
        { month: "Jan", placements: 10, applications: 30 },
        { month: "Feb", placements: 12, applications: 32 },
        { month: "Mar", placements: 11, applications: 31 },
        { month: "Apr", placements: 15, applications: 38 },
        { month: "May", placements: 13, applications: 35 },
        { month: "Jun", placements: 16, applications: 42 },
      ],
      packageDistribution: [
        { range: "8-10 LPA", count: 95 },
        { range: "10-12 LPA", count: 50 },
        { range: "12-15 LPA", count: 12 },
        { range: "15-20 LPA", count: 3 },
        { range: "20+ LPA", count: 0 },
      ],
    },
    EE: {
      totalStudents: 210,
      placed: 180,
      avgPackage: 11.8,
      highestPackage: 32,
      topRecruiters: [
        { name: "Power Grid", placements: 28, package: 11.2 },
        { name: "NTPC", placements: 24, package: 10.8 },
        { name: "Siemens", placements: 20, package: 12.5 },
        { name: "TCS", placements: 30, package: 12.5 },
        { name: "Infosys", placements: 25, package: 13.2 },
      ],
      monthlyData: [
        { month: "Jan", placements: 11, applications: 32 },
        { month: "Feb", placements: 13, applications: 35 },
        { month: "Mar", placements: 12, applications: 33 },
        { month: "Apr", placements: 17, applications: 42 },
        { month: "May", placements: 15, applications: 38 },
        { month: "Jun", placements: 19, applications: 48 },
      ],
      packageDistribution: [
        { range: "8-10 LPA", count: 45 },
        { range: "10-12 LPA", count: 75 },
        { range: "12-15 LPA", count: 50 },
        { range: "15-20 LPA", count: 8 },
        { range: "20+ LPA", count: 2 },
      ],
    },
    ECE: {
      totalStudents: 280,
      placed: 240,
      avgPackage: 12.8,
      highestPackage: 36,
      topRecruiters: [
        { name: "Samsung", placements: 32, package: 14.5 },
        { name: "Intel", placements: 28, package: 15.2 },
        { name: "Qualcomm", placements: 24, package: 16.8 },
        { name: "TCS", placements: 40, package: 12.5 },
        { name: "Infosys", placements: 35, package: 13.2 },
      ],
      monthlyData: [
        { month: "Jan", placements: 16, applications: 42 },
        { month: "Feb", placements: 19, applications: 48 },
        { month: "Mar", placements: 17, applications: 45 },
        { month: "Apr", placements: 24, applications: 55 },
        { month: "May", placements: 22, applications: 52 },
        { month: "Jun", placements: 28, applications: 62 },
      ],
      packageDistribution: [
        { range: "8-10 LPA", count: 20 },
        { range: "10-12 LPA", count: 70 },
        { range: "12-15 LPA", count: 110 },
        { range: "15-20 LPA", count: 35 },
        { range: "20+ LPA", count: 5 },
      ],
    },
  }

  const stats = departmentStats[selectedDept as keyof typeof departmentStats]
  const dept = departments.find((d) => d.id === selectedDept)
  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"]

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Department Dashboards</h1>
        <p className="text-muted-foreground mt-2">Department-specific placement statistics and insights</p>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {departments.map((d) => (
          <Button
            key={d.id}
            onClick={() => setSelectedDept(d.id)}
            variant={selectedDept === d.id ? "default" : "outline"}
            className="whitespace-nowrap"
          >
            {d.id}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-border">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Total Students</p>
            <p className="text-3xl font-bold text-foreground mt-2">{stats.totalStudents}</p>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Placed Students</p>
            <p className="text-3xl font-bold text-foreground mt-2">{stats.placed}</p>
            <p className="text-xs text-green-600 mt-1">
              {((stats.placed / stats.totalStudents) * 100).toFixed(1)}% placement rate
            </p>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Average Package</p>
            <p className="text-3xl font-bold text-foreground mt-2">{stats.avgPackage} LPA</p>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Highest Package</p>
            <p className="text-3xl font-bold text-foreground mt-2">{stats.highestPackage} LPA</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Monthly Placements</CardTitle>
            <CardDescription>Placements and applications trend</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={stats.monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="applications" fill="#e0e7ff" />
                <Bar dataKey="placements" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle>Package Distribution</CardTitle>
            <CardDescription>Salary range distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={stats.packageDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ range, count }) => `${range}: ${count}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {stats.packageDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle>Top Recruiters in {dept?.name}</CardTitle>
          <CardDescription>Companies with most placements in this department</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {stats.topRecruiters.map((recruiter, index) => (
              <div
                key={recruiter.name}
                className="flex items-center justify-between p-3 border border-border rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm font-semibold text-blue-600">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{recruiter.name}</p>
                    <p className="text-xs text-muted-foreground">{recruiter.placements} placements</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-foreground">{recruiter.package} LPA</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
