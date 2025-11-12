"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Plus, Trash2, AlertCircle } from "lucide-react"
import { useState } from "react"

export default function AnnouncementsPage() {
  const [isCreating, setIsCreating] = useState(false)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [isEmergency, setIsEmergency] = useState(false)

  const announcements = [
    {
      id: 1,
      title: "Tech Corp Drive - Applications Open",
      content: "Applications are now open for Tech Corp Software Engineer position. Deadline: Nov 30, 2024",
      date: "2024-11-15",
      isEmergency: false,
    },
    {
      id: 2,
      title: "Interview Schedule Released",
      content: "Interview schedules for Data Systems have been released. Check your email for details.",
      date: "2024-11-14",
      isEmergency: false,
    },
    {
      id: 3,
      title: "System Maintenance Notice",
      content: "The placement portal will be under maintenance on Nov 20 from 2 AM to 4 AM IST.",
      date: "2024-11-13",
      isEmergency: true,
    },
  ]

  const handleCreateAnnouncement = () => {
    if (title.trim() && content.trim()) {
      console.log("[v0] Creating announcement:", { title, content, isEmergency })
      setTitle("")
      setContent("")
      setIsEmergency(false)
      setIsCreating(false)
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Announcements & Live Updates</h1>
          <p className="text-muted-foreground mt-2">Post announcements and emergency banners</p>
        </div>
        <Button onClick={() => setIsCreating(!isCreating)} className="gap-2">
          <Plus size={18} />
          New Announcement
        </Button>
      </div>

      {isCreating && (
        <Card className="border-border bg-blue-50">
          <CardHeader>
            <CardTitle>Create Announcement</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Title</label>
              <Input placeholder="Announcement title..." value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Content</label>
              <Textarea
                placeholder="Announcement content..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={4}
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="emergency"
                checked={isEmergency}
                onChange={(e) => setIsEmergency(e.target.checked)}
                className="w-4 h-4"
              />
              <label htmlFor="emergency" className="text-sm font-medium text-foreground">
                Mark as Emergency Banner
              </label>
            </div>

            <div className="flex gap-2">
              <Button onClick={handleCreateAnnouncement} className="flex-1">
                Post Announcement
              </Button>
              <Button variant="outline" onClick={() => setIsCreating(false)} className="flex-1 bg-transparent">
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {announcements.map((announcement) => (
          <Card key={announcement.id} className={`border-border ${announcement.isEmergency ? "bg-red-50" : ""}`}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-foreground text-lg">{announcement.title}</h3>
                    {announcement.isEmergency && (
                      <Badge className="bg-red-100 text-red-700 gap-1">
                        <AlertCircle size={14} />
                        Emergency
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-3">{announcement.content}</p>
                  <p className="text-xs text-muted-foreground">{announcement.date}</p>
                </div>
                <Button variant="ghost" size="sm">
                  <Trash2 size={18} className="text-destructive" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
