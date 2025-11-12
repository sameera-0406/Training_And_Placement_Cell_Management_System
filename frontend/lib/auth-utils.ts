export function getDashboardPath(role: string): string {
  const dashboardPaths: Record<string, string> = {
    student: "/student/dashboard",
    faculty: "/faculty/dashboard",
    admin: "/admin/dashboard",
  }
  return dashboardPaths[role] || "/student/dashboard"
}
