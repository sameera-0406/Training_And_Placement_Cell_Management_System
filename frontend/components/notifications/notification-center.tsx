"use client"
import { Button } from "@/components/ui/button"
import { Bell, X, CheckCircle, AlertCircle, Info } from "lucide-react"
import { useState } from "react"

interface Notification {
  id: string
  type: "success" | "warning" | "info"
  title: string
  message: string
  timestamp: string
  read: boolean
}

export function NotificationCenter() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "success",
      title: "Application Submitted",
      message: "Your application to Tech Corp has been submitted successfully",
      timestamp: "2 hours ago",
      read: false,
    },
    {
      id: "2",
      type: "info",
      title: "Interview Scheduled",
      message: "You have an interview with Data Systems on Nov 25 at 2:00 PM",
      timestamp: "4 hours ago",
      read: false,
    },
    {
      id: "3",
      type: "warning",
      title: "Application Deadline",
      message: "Application deadline for Cloud Solutions is tomorrow",
      timestamp: "1 day ago",
      read: true,
    },
  ])

  const [isOpen, setIsOpen] = useState(false)

  const unreadCount = notifications.filter((n) => !n.read).length

  const handleMarkAsRead = (id: string) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const handleDelete = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="text-green-600" size={20} />
      case "warning":
        return <AlertCircle className="text-yellow-600" size={20} />
      case "info":
        return <Info className="text-blue-600" size={20} />
      default:
        return <Bell className="text-gray-600" size={20} />
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <Bell size={24} />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 w-5 h-5 bg-destructive text-white text-xs rounded-full flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-card border border-border rounded-lg shadow-lg z-50">
          <div className="p-4 border-b border-border">
            <h3 className="font-semibold text-foreground">Notifications</h3>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">No notifications</div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border-b border-border last:border-b-0 ${!notification.read ? "bg-muted/50" : ""}`}
                >
                  <div className="flex items-start gap-3">
                    {getIcon(notification.type)}
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{notification.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                      <p className="text-xs text-muted-foreground mt-2">{notification.timestamp}</p>
                    </div>
                    <button
                      onClick={() => handleDelete(notification.id)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-4 border-t border-border">
            <Button variant="outline" className="w-full bg-transparent">
              View All Notifications
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
