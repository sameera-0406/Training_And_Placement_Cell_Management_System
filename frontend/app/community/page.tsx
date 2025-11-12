"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Heart, MessageCircle, Share2, Search, Bookmark } from "lucide-react"
import { useState } from "react"

export default function CommunityPage() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Raj Kumar",
      role: "Student",
      avatar: "RK",
      content: "Just got an offer from Tech Corp! Excited to start my journey. Thanks to all the mentors!",
      likes: 124,
      comments: 18,
      shares: 5,
      timestamp: "2 hours ago",
      liked: false,
      bookmarked: false,
      tags: ["success", "offer"],
      department: "CSE",
      category: "success-story",
    },
    {
      id: 2,
      author: "Priya Singh",
      role: "Student",
      avatar: "PS",
      content:
        "Tips for cracking the Data Systems interview:\n1. Focus on SQL and statistics\n2. Practice coding problems\n3. Be confident and communicate clearly\n4. Ask clarifying questions",
      likes: 89,
      comments: 24,
      shares: 12,
      timestamp: "4 hours ago",
      liked: false,
      bookmarked: false,
      tags: ["tips", "interview"],
      department: "IT",
      category: "interview-tips",
    },
    {
      id: 3,
      author: "Dr. Amit Sharma",
      role: "Faculty",
      avatar: "AS",
      content:
        "Congratulations to all students who got placed! Your hard work and dedication have paid off. Keep supporting each other!",
      likes: 156,
      comments: 32,
      shares: 8,
      timestamp: "1 day ago",
      liked: false,
      bookmarked: false,
      tags: ["announcement"],
      department: "All",
      category: "announcement",
    },
  ])

  const [newPost, setNewPost] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [selectedDept, setSelectedDept] = useState("all")

  const filterOptions = [
    { id: "all", label: "All Posts" },
    { id: "latest", label: "Latest" },
    { id: "popular", label: "Popular" },
    { id: "bookmarked", label: "Bookmarked" },
  ]

  const departments = [
    { id: "all", label: "All Departments" },
    { id: "CSE", label: "CSE" },
    { id: "IT", label: "IT" },
    { id: "ME", label: "ME" },
    { id: "CE", label: "CE" },
    { id: "EE", label: "EE" },
    { id: "ECE", label: "ECE" },
  ]

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      setPosts([
        {
          id: posts.length + 1,
          author: "You",
          role: "Student",
          avatar: "YO",
          content: newPost,
          likes: 0,
          comments: 0,
          shares: 0,
          timestamp: "now",
          liked: false,
          bookmarked: false,
          tags: [],
          department: "CSE",
          category: "general",
        },
        ...posts,
      ])
      setNewPost("")
    }
  }

  const handleLike = (id: number) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 } : post,
      ),
    )
  }

  const handleBookmark = (id: number) => {
    setPosts(posts.map((post) => (post.id === id ? { ...post, bookmarked: !post.bookmarked } : post)))
  }

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesDept = selectedDept === "all" || post.department === selectedDept

    const matchesFilter =
      selectedFilter === "all" ||
      (selectedFilter === "latest" && true) ||
      (selectedFilter === "popular" && post.likes > 50) ||
      (selectedFilter === "bookmarked" && post.bookmarked)

    return matchesSearch && matchesDept && matchesFilter
  })

  if (selectedFilter === "popular") {
    filteredPosts.sort((a, b) => b.likes - a.likes)
  } else if (selectedFilter === "latest") {
    filteredPosts.sort((a, b) => b.id - a.id)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Community</h1>
          <p className="text-muted-foreground mt-2">Share experiences, tips, and celebrate success together</p>
        </div>

        <div className="space-y-3">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
              <Input
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {filterOptions.map((option) => (
              <Button
                key={option.id}
                onClick={() => setSelectedFilter(option.id)}
                variant={selectedFilter === option.id ? "default" : "outline"}
                size="sm"
                className="whitespace-nowrap"
              >
                {option.label}
              </Button>
            ))}
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {departments.map((dept) => (
              <Button
                key={dept.id}
                onClick={() => setSelectedDept(dept.id)}
                variant={selectedDept === dept.id ? "default" : "outline"}
                size="sm"
                className="whitespace-nowrap"
              >
                {dept.label}
              </Button>
            ))}
          </div>
        </div>

        <Card className="border-border">
          <CardHeader>
            <CardTitle>Share Your Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="What's on your mind? Share tips, experiences, success stories, or ask questions..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="min-h-24"
            />
            <div className="flex gap-2 justify-end">
              <Button variant="outline" className="bg-transparent">
                Cancel
              </Button>
              <Button onClick={handlePostSubmit} disabled={!newPost.trim()}>
                Post
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {filteredPosts.length === 0 ? (
            <Card className="border-border">
              <CardContent className="pt-6 text-center text-muted-foreground">No posts found</CardContent>
            </Card>
          ) : (
            filteredPosts.map((post) => (
              <Card key={post.id} className="border-border hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-bold">{post.avatar}</span>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="font-semibold text-foreground">{post.author}</p>
                          <p className="text-sm text-muted-foreground">
                            {post.role} • {post.timestamp}
                          </p>
                        </div>
                        <button
                          onClick={() => handleBookmark(post.id)}
                          className={`p-2 rounded-lg transition-colors ${
                            post.bookmarked
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-gray-100 text-muted-foreground hover:bg-gray-200"
                          }`}
                        >
                          <Bookmark size={18} fill={post.bookmarked ? "currentColor" : "none"} />
                        </button>
                      </div>

                      <p className="text-foreground whitespace-pre-wrap mb-4">{post.content}</p>

                      {post.tags.length > 0 && (
                        <div className="flex gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center gap-6 pt-4 border-t border-border">
                        <button
                          onClick={() => handleLike(post.id)}
                          className={`flex items-center gap-2 transition-colors ${
                            post.liked ? "text-primary" : "text-muted-foreground hover:text-primary"
                          }`}
                        >
                          <Heart size={18} fill={post.liked ? "currentColor" : "none"} />
                          <span className="text-sm">{post.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                          <MessageCircle size={18} />
                          <span className="text-sm">{post.comments}</span>
                        </button>
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                          <Share2 size={18} />
                          <span className="text-sm">{post.shares}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
