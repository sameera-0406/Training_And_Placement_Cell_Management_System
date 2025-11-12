// Application constants

export const DEPARTMENTS = [
  { id: "CSE", name: "Computer Science & Engineering" },
  { id: "IT", name: "Information Technology" },
  { id: "ME", name: "Mechanical Engineering" },
  { id: "CE", name: "Civil Engineering" },
  { id: "EE", name: "Electrical Engineering" },
  { id: "ECE", name: "Electronics & Communication" },
]

export const ROLES = [
  { id: "student", label: "Student" },
  { id: "faculty", label: "Faculty" },
  { id: "admin", label: "Admin" },
]

export const PLACEMENT_STATUS = [
  { id: "placed", label: "Placed" },
  { id: "not-placed", label: "Not Placed" },
  { id: "pursuing-higher-studies", label: "Pursuing Higher Studies" },
]

export const APPLICATION_STATUS = [
  { id: "applied", label: "Applied" },
  { id: "screening", label: "Screening" },
  { id: "selected", label: "Selected" },
  { id: "rejected", label: "Rejected" },
  { id: "offer-received", label: "Offer Received" },
]

export const NOTIFICATION_TYPES = [
  { id: "drive-announcement", label: "Drive Announcement" },
  { id: "shortlist-update", label: "Shortlist Update" },
  { id: "interview-schedule", label: "Interview Schedule" },
  { id: "placement-confirmation", label: "Placement Confirmation" },
  { id: "deadline-reminder", label: "Deadline Reminder" },
]

export const PACKAGE_CATEGORIES = {
  DREAM: { min: 20, label: "Dream (20+ LPA)" },
  SUPER_DREAM: { min: 15, max: 20, label: "Super-Dream (15-20 LPA)" },
  REGULAR: { min: 10, max: 15, label: "Regular (10-15 LPA)" },
  STANDARD: { min: 8, max: 10, label: "Standard (8-10 LPA)" },
}

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/api/auth/login",
    REGISTER: "/api/auth/register",
    LOGOUT: "/api/auth/logout",
    ME: "/api/auth/me",
  },
  STUDENTS: "/api/students",
  DRIVES: "/api/drives",
  APPLICATIONS: "/api/applications",
  NOTIFICATIONS: "/api/notifications",
  POSTS: "/api/posts",
  REVIEWS: "/api/reviews",
}

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100,
}

export const RATE_LIMIT = {
  WINDOW_MS: 15 * 60 * 1000, // 15 minutes
  MAX_REQUESTS: 100,
}
