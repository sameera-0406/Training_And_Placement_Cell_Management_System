"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Users, Briefcase, TrendingUp, CheckCircle } from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Students",
      value: "1,250",
      icon: Users,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Active Drives",
      value: "12",
      icon: Briefcase,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Placement Rate",
      value: "85%",
      icon: TrendingUp,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Offers Generated",
      value: "1,062",
      icon: CheckCircle,
      color: "bg-orange-100 text-orange-600",
    },
  ]

  const placementData = [
    { month: "Jan", placements: 45, applications: 120 },
    { month: "Feb", placements: 52, applications: 135 },
    { month: "Mar", placements: 48, applications: 128 },
    { month: "Apr", placements: 61, applications: 145 },
    { month: "May", placements: 55, applications: 138 },
    { month: "Jun", placements: 67, applications: 155 },
  ]

  const departmentData = [
    { name: "CSE", value: 320 },
    { name: "ECE", value: 280 },
    { name: "ME", value: 240 },
    { name: "CE", value: 200 },
    { name: "EE", value: 210 },
  ]

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"]

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-2">System overview and key metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title} className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold text-foreground mt-2">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <Icon size={24} />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-border">
          <CardHeader>
            <CardTitle>Placement Trends</CardTitle>
            <CardDescription>Monthly placements and applications</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={placementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="placements" fill="#3b82f6" />
                <Bar dataKey="applications" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle>Students by Department</CardTitle>
            <CardDescription>Distribution across departments</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={departmentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {departmentData.map((entry, index) => (
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
