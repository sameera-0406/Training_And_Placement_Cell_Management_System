import { type NextRequest, NextResponse } from "next/server"

// Mock database for notifications
const notificationsDB: any[] = [
  {
    id: "1",
    userId: "student1",
    type: "drive-announcement",
    title: "New Placement Drive",
    message: "Google is conducting a placement drive for Software Engineers",
    read: false,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: "2",
    userId: "student1",
    type: "shortlist-update",
    title: "Shortlist Update",
    message: "You have been shortlisted for the Microsoft interview",
    read: false,
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
  },
  {
    id: "3",
    userId: "student1",
    type: "interview-schedule",
    title: "Interview Scheduled",
    message: "Your interview with Amazon is scheduled for Nov 25, 2024 at 2:00 PM",
    read: true,
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
  },
]

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get("userId")

  if (!userId) {
    return NextResponse.json({ error: "userId is required" }, { status: 400 })
  }

  const userNotifications = notificationsDB.filter((n) => n.userId === userId)

  return NextResponse.json({
    notifications: userNotifications,
    unreadCount: userNotifications.filter((n) => !n.read).length,
  })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { userId, type, title, message } = body

  if (!userId || !type || !title || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  const notification = {
    id: Date.now().toString(),
    userId,
    type,
    title,
    message,
    read: false,
    createdAt: new Date(),
  }

  notificationsDB.push(notification)

  return NextResponse.json(notification, { status: 201 })
}
