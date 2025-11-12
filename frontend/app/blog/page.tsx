"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Calendar, User, ArrowRight, Bookmark } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([])

  const articles = [
    {
      id: 1,
      title: "How to Ace Your First Technical Interview",
      excerpt:
        "Learn the essential tips and tricks to prepare for your first technical interview. We cover common questions, coding problems, and interview etiquette.",
      author: "Dr. Amit Sharma",
      date: "2024-11-20",
      category: "interview-tips",
      readTime: "8 min read",
      image: "/technical-interview.png",
    },
    {
      id: 2,
      title: "Success Stories: From Campus to Corporate",
      excerpt:
        "Read inspiring stories from our alumni who have successfully transitioned from college to their dream companies. Learn about their journey and key takeaways.",
      author: "Priya Singh",
      date: "2024-11-18",
      category: "success-stories",
      readTime: "10 min read",
      image: "/success-story-mountain-peak.png",
    },
    {
      id: 3,
      title: "Building a Strong Resume for Placements",
      excerpt:
        "Your resume is your first impression. Discover how to create a compelling resume that stands out to recruiters and gets you noticed.",
      author: "Raj Kumar",
      date: "2024-11-15",
      category: "career-guidance",
      readTime: "6 min read",
      image: "/resume-building.jpg",
    },
    {
      id: 4,
      title: "Networking Tips for Students",
      excerpt:
        "Learn how to build meaningful professional relationships and network effectively during your college years. Networking can open doors to amazing opportunities.",
      author: "Dr. Priya Sharma",
      date: "2024-11-12",
      category: "networking",
      readTime: "7 min read",
      image: "/networking-connections.png",
    },
    {
      id: 5,
      title: "Off-Campus Opportunities You Shouldn't Miss",
      excerpt:
        "Explore various off-campus placement opportunities and internships that can boost your career. Learn how to find and apply for these opportunities.",
      author: "Raj Kumar",
      date: "2024-11-10",
      category: "off-campus",
      readTime: "9 min read",
      image: "/off-campus-opportunities.jpg",
    },
    {
      id: 6,
      title: "Company Insights: What Recruiters Look For",
      excerpt:
        "Get insider knowledge about what top companies look for in candidates. Learn about their hiring process, expectations, and tips to impress them.",
      author: "Dr. Priya Sharma",
      date: "2024-11-08",
      category: "company-insights",
      readTime: "8 min read",
      image: "/company-insights-recruitment.jpg",
    },
  ]

  const categories = [
    { id: "all", label: "All Articles" },
    { id: "interview-tips", label: "Interview Tips" },
    { id: "success-stories", label: "Success Stories" },
    { id: "career-guidance", label: "Career Guidance" },
    { id: "networking", label: "Networking" },
    { id: "off-campus", label: "Off-Campus" },
    { id: "company-insights", label: "Company Insights" },
  ]

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const handleBookmark = (id: number) => {
    setBookmarkedIds((prev) => (prev.includes(id) ? prev.filter((bid) => bid !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Placement Blog</h1>
          <p className="text-muted-foreground mt-2">Tips, insights, and success stories from our placement cell</p>
        </div>

        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                size="sm"
                className="whitespace-nowrap"
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>

        {filteredArticles.length === 0 ? (
          <Card className="border-border">
            <CardContent className="pt-6 text-center text-muted-foreground">No articles found</CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="border-border h-full hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted overflow-hidden relative">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                  <button
                    onClick={() => handleBookmark(article.id)}
                    className={`absolute top-2 right-2 p-2 rounded-lg transition-colors ${
                      bookmarkedIds.includes(article.id)
                        ? "bg-yellow-400 text-white"
                        : "bg-black/50 text-white hover:bg-black/70"
                    }`}
                  >
                    <Bookmark size={18} fill={bookmarkedIds.includes(article.id) ? "currentColor" : "none"} />
                  </button>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                      {article.category.replace("-", " ").toUpperCase()}
                    </span>
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User size={16} />
                        {article.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {article.date}
                      </div>
                    </div>
                    <Link href={`/blog/${article.id}`}>
                      <ArrowRight size={16} className="text-primary hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
