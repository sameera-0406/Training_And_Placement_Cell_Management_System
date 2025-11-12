"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit2, Trash2, Eye } from "lucide-react"
import { useState } from "react"

export default function ContentManagement() {
  const [activeTab, setActiveTab] = useState<"blog" | "reviews">("blog")

  const blogPosts = [
    {
      id: 1,
      title: "Interview Preparation Tips",
      author: "Admin",
      date: "2024-11-15",
      status: "Published",
      views: 245,
    },
    {
      id: 2,
      title: "Success Stories - Class of 2024",
      author: "Admin",
      date: "2024-11-10",
      status: "Published",
      views: 512,
    },
    {
      id: 3,
      title: "Resume Building Guide",
      author: "Admin",
      date: "2024-11-05",
      status: "Draft",
      views: 0,
    },
  ]

  const reviews = [
    {
      id: 1,
      company: "Tech Corp",
      author: "Raj Kumar",
      rating: 4.5,
      status: "Approved",
      date: "2024-11-14",
    },
    {
      id: 2,
      company: "Data Systems",
      author: "Priya Singh",
      rating: 4.0,
      status: "Pending",
      date: "2024-11-13",
    },
    {
      id: 3,
      company: "Cloud Solutions",
      author: "Amit Patel",
      rating: 3.5,
      status: "Rejected",
      date: "2024-11-12",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Content Management</h1>
          <p className="text-muted-foreground mt-2">Manage blog posts, reviews, and resources</p>
        </div>
        <Button className="gap-2">
          <Plus size={18} />
          New Content
        </Button>
      </div>

      <div className="flex gap-2 border-b border-border">
        <button
          onClick={() => setActiveTab("blog")}
          className={`px-4 py-2 font-medium transition-colors ${
            activeTab === "blog"
              ? "text-foreground border-b-2 border-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Blog Posts
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`px-4 py-2 font-medium transition-colors ${
            activeTab === "reviews"
              ? "text-foreground border-b-2 border-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Reviews
        </button>
      </div>

      {activeTab === "blog" && (
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Blog Posts</CardTitle>
            <CardDescription>Manage placement-related blog content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {blogPosts.map((post) => (
                <div key={post.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{post.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span>By {post.author}</span>
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1">
                        <Eye size={14} />
                        {post.views} views
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={post.status === "Published" ? "default" : "secondary"}
                      className={post.status === "Published" ? "bg-green-100 text-green-700" : ""}
                    >
                      {post.status}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <Edit2 size={18} />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 size={18} className="text-destructive" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === "reviews" && (
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Company Reviews</CardTitle>
            <CardDescription>Moderate and manage student reviews</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{review.company}</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span>By {review.author}</span>
                      <span>Rating: {review.rating}/5</span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        review.status === "Approved"
                          ? "default"
                          : review.status === "Pending"
                            ? "secondary"
                            : "destructive"
                      }
                      className={
                        review.status === "Approved"
                          ? "bg-green-100 text-green-700"
                          : review.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : ""
                      }
                    >
                      {review.status}
                    </Badge>
                    {review.status === "Pending" && (
                      <>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          Approve
                        </Button>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          Reject
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
