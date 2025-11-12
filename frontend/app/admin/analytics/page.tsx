"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
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
  ComposedChart,
} from "recharts"
import { TrendingUp, TrendingDown } from "lucide-react"

export default function AdvancedAnalytics() {
  const yearOverYearData = [
    { month: "Jan", "2023-24": 35, "2024-25": 45 },
    { month: "Feb", "2023-24": 42, "2024-25": 52 },
    { month: "Mar", "2023-24": 38, "2024-25": 48 },
    { month: "Apr", "2023-24": 48, "2024-25": 61 },
    { month: "May", "2023-24": 45, "2024-25": 55 },
    { month: "Jun", "2023-24": 52, "2024-25": 67 },
  ]

  const monthlyPlacementData = [
    { month: "Jan", placements: 45, applications: 120, offers: 38 },
    { month: "Feb", placements: 52, applications: 135, offers: 44 },
    { month: "Mar", placements: 48, applications: 128, offers: 40 },
    { month: "Apr", placements: 61, applications: 145, offers: 52 },
    { month: "May", placements: 55, applications: 138, offers: 47 },
    { month: "Jun", placements: 67, applications: 155, offers: 58 },
  ]

  const packageCategoryData = [
    { category: "Dream (20+ LPA)", count: 62, percentage: 5.8 },
    { category: "Super-Dream (15-20 LPA)", count: 180, percentage: 16.9 },
    { category: "Regular (10-15 LPA)", count: 700, percentage: 65.9 },
    { category: "Standard (8-10 LPA)", count: 120, percentage: 11.3 },
  ]

  const departmentData = [
    { name: "CSE", students: 320, placed: 280, avgPackage: 14.2 },
    { name: "ECE", students: 280, placed: 240, avgPackage: 12.8 },
    { name: "ME", students: 240, placed: 200, avgPackage: 11.5 },
    { name: "CE", students: 200, placed: 160, avgPackage: 10.2 },
    { name: "EE", students: 210, placed: 180, avgPackage: 11.8 },
  ]

  const salaryDistribution = [
    { range: "8-10 LPA", count: 120 },
    { range: "10-12 LPA", count: 280 },
    { range: "12-15 LPA", count: 420 },
    { range: "15-20 LPA", count: 180 },
    { range: "20+ LPA", count: 62 },
  ]

  const topRecruiters = [
    { name: "TCS", placements: 145, avgPackage: 12.5 },
    { name: "Infosys", placements: 128, avgPackage: 13.2 },
    { name: "Wipro", placements: 112, avgPackage: 12.8 },
    { name: "HCL", placements: 98, avgPackage: 11.9 },
    { name: "Accenture", placements: 85, avgPackage: 12.1 },
  ]

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"]

  const keyMetrics = [
    { label: "Highest Package", value: "42 LPA", growth: "+8.5%", positive: true },
    { label: "Average Package", value: "12.5 LPA", growth: "+2.3%", positive: true },
    { label: "PPOs Received", value: "156", growth: "+12.1%", positive: true },
    { label: "Avg Placement Duration", value: "3.2 months", growth: "-0.8%", positive: false },
  ]

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Advanced Analytics</h1>
        <p className="text-muted-foreground mt-2">Comprehensive placement statistics and insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {keyMetrics.map((metric) => (
          <Card key={metric.label} className="border-border">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">{metric.label}</p>
              <p className="text-2xl font-bold text-foreground mt-2">{metric.value}</p>
              <div className="flex items-center gap-1 mt-2">
                {metric.positive ? (
                  <TrendingUp size={16} className="text-green-600" />
                ) : (
                  <TrendingDown size={16} className="text-red-600" />
                )}
                <span className={metric.positive ? "text-green-600 text-sm" : "text-red-600 text-sm"}>
                  {metric.growth}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Year-over-Year Comparison</CardTitle>
            <CardDescription>Placements: 2023-24 vs 2024-25</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={yearOverYearData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="2023-24" stroke="#94a3b8" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="2024-25" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle>Monthly Placement Tracking</CardTitle>
            <CardDescription>Placements, applications, and offers</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={monthlyPlacementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="applications" fill="#e0e7ff" />
                <Bar dataKey="offers" fill="#fbbf24" />
                <Line type="monotone" dataKey="placements" stroke="#3b82f6" strokeWidth={2} />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle>Package Categorization</CardTitle>
            <CardDescription>Dream, Super-Dream, Regular, Standard</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {packageCategoryData.map((item, index) => (
                <div key={item.category} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                    <span className="text-sm text-foreground">{item.category}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">{item.count}</p>
                    <p className="text-xs text-muted-foreground">{item.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle>Top Recruiters</CardTitle>
            <CardDescription>Companies with most placements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topRecruiters.map((recruiter, index) => (
                <div
                  key={recruiter.name}
                  className="flex items-center justify-between p-2 border border-border rounded"
                >
                  <div>
                    <p className="font-semibold text-foreground">{recruiter.name}</p>
                    <p className="text-xs text-muted-foreground">{recruiter.placements} placements</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-foreground">{recruiter.avgPackage} LPA</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Department-wise Placement</CardTitle>
            <CardDescription>Students placed vs total students</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={departmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="students" fill="#e0e7ff" />
                <Bar dataKey="placed" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle>Salary Distribution</CardTitle>
            <CardDescription>Number of students in each salary range</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={salaryDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ range, count }) => `${range}: ${count}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {salaryDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
