"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertCircle, Info, Trash2, Bell, Clock } from "lucide-react"
import { useState } from "react"

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: "1",
      type: "drive-announcement",
      category: "Drive",
      title: "New Placement Drive",
      message: "Google is conducting a placement drive for Software Engineers. Registration opens tomorrow!",
      timestamp: "2 hours ago",
      read: false,
      icon: "bell",
    },
    {
      id: "2",
      type: "shortlist-update",
      category: "Shortlist",
      title: "You've Been Shortlisted",
      message: "Congratulations! You have been shortlisted for the Microsoft interview round.",
      timestamp: "4 hours ago",
      read: false,
      icon: "check",
    },
    {
      id: "3",
      type: "interview-schedule",
      category: "Interview",
      title: "Interview Scheduled",
      message: "Your interview with Data Systems is scheduled for Nov 25 at 2:00 PM. Prepare well!",
      timestamp: "1 day ago",
      read: true,
      icon: "clock",
    },
    {
      id: "4",
      type: "placement-confirmation",
      category: "Placement",
      title: "Offer Received",
      message: "Congratulations! You have received an offer from AI Innovations with a package of 15 LPA.",
      timestamp: "2 days ago",
      read: true,
      icon: "check",
    },
    {
      id: "5",
      type: "deadline-reminder",
      category: "Deadline",
      title: "Application Deadline Reminder",
      message: "Application deadline for Cloud Solutions is tomorrow at 5:00 PM. Don't miss it!",
      timestamp: "3 days ago",
      read: true,
      icon: "alert",
    },
    {
      id: "6",
      type: "drive-announcement",
      category: "Drive",
      title: "Drive Registration Closed",
      message: "Registration for TCS placement drive has been closed. Screening will start next week.",
      timestamp: "4 days ago",
      read: true,
      icon: "bell",
    },
  ])

  const handleDelete = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  const handleMarkAsRead = (id: string) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const getIcon = (icon: string) => {
    switch (icon) {
      case "check":
        return <CheckCircle className="text-green-600" size={24} />
      case "alert":
        return <AlertCircle className="text-yellow-600" size={24} />
      case "clock":
        return <Clock className="text-blue-600" size={24} />
      case "bell":
        return <Bell className="text-purple-600" size={24} />
      default:
        return <Info className="text-gray-600" size={24} />
    }
  }

  const filterByCategory = (category: string) => {
    if (category === "all") return notifications
    if (category === "unread") return notifications.filter((n) => !n.read)
    return notifications.filter((n) => n.category === category)
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Notifications</h1>
          <p className="text-muted-foreground mt-2">Stay updated with your placement journey</p>
        </div>
        {unreadCount > 0 && (
          <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg font-semibold">{unreadCount} unread</div>
        )}
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">Unread</TabsTrigger>
          <TabsTrigger value="Drive">Drives</TabsTrigger>
          <TabsTrigger value="Shortlist">Shortlist</TabsTrigger>
          <TabsTrigger value="Interview">Interview</TabsTrigger>
          <TabsTrigger value="Placement">Placement</TabsTrigger>
        </TabsList>

        {["all", "unread", "Drive", "Shortlist", "Interview", "Placement", "Deadline"].map((category) => (
          <TabsContent key={category} value={category} className="space-y-4 mt-6">
            {filterByCategory(category).length === 0 ? (
              <Card className="border-border">
                <CardContent className="pt-6 text-center text-muted-foreground">
                  No {category === "all" ? "notifications" : category.toLowerCase()} found
                </CardContent>
              </Card>
            ) : (
              filterByCategory(category).map((notification) => (
                <Card
                  key={notification.id}
                  className={`border-border transition-colors ${!notification.read ? "bg-blue-50 border-blue-200" : ""}`}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      {getIcon(notification.icon)}
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground">{notification.title}</h3>
                            <span className="inline-block mt-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                              {notification.category}
                            </span>
                          </div>
                          {!notification.read && (
                            <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0 mt-1" />
                          )}
                        </div>
                        <p className="text-muted-foreground mt-2">{notification.message}</p>
                        <p className="text-xs text-muted-foreground mt-3">{notification.timestamp}</p>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        {!notification.read && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleMarkAsRead(notification.id)}
                            className="text-muted-foreground hover:text-primary"
                            title="Mark as read"
                          >
                            <CheckCircle size={18} />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(notification.id)}
                          className="text-muted-foreground hover:text-destructive"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
