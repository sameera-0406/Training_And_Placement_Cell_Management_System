"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Star, Plus, ThumbsUp } from "lucide-react"
import { useState } from "react"

export default function CompanyReviews() {
  const [isWriting, setIsWriting] = useState(false)
  const [selectedCompany, setSelectedCompany] = useState("")
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState("")

  const companies = [
    { id: 1, name: "Tech Corp", position: "Software Engineer" },
    { id: 2, name: "Data Systems", position: "Data Analyst" },
    { id: 3, name: "Cloud Solutions", position: "DevOps Engineer" },
  ]

  const reviews = [
    {
      id: 1,
      company: "Tech Corp",
      author: "Raj Kumar",
      rating: 4.5,
      culture: 4,
      interview: 4,
      package: 5,
      growth: 4,
      content: "Great company with excellent work culture and growth opportunities.",
      helpful: 24,
      date: "2024-11-10",
    },
    {
      id: 2,
      company: "Data Systems",
      author: "Priya Singh",
      rating: 4.0,
      culture: 4,
      interview: 3,
      package: 4,
      growth: 4,
      content: "Good experience overall. Interview process was straightforward.",
      helpful: 18,
      date: "2024-11-08",
    },
  ]

  const handleSubmitReview = () => {
    if (selectedCompany && rating > 0 && review.trim()) {
      console.log("[v0] Submitting review:", { selectedCompany, rating, review })
      setIsWriting(false)
      setSelectedCompany("")
      setRating(0)
      setReview("")
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Company Reviews</h1>
          <p className="text-muted-foreground mt-2">Read and write verified company reviews</p>
        </div>
        <Button onClick={() => setIsWriting(!isWriting)} className="gap-2">
          <Plus size={18} />
          Write Review
        </Button>
      </div>

      {isWriting && (
        <Card className="border-border bg-blue-50">
          <CardHeader>
            <CardTitle>Write a Review</CardTitle>
            <CardDescription>Share your experience with other students</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Company</label>
              <select
                value={selectedCompany}
                onChange={(e) => setSelectedCompany(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
              >
                <option value="">Select a company...</option>
                {companies.map((company) => (
                  <option key={company.id} value={company.name}>
                    {company.name} - {company.position}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Overall Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} onClick={() => setRating(star)} className="transition-colors">
                    <Star
                      size={28}
                      className={star <= rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Your Review</label>
              <Textarea
                placeholder="Share your experience..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
                rows={4}
              />
            </div>

            <div className="flex gap-2">
              <Button onClick={handleSubmitReview} className="flex-1">
                Submit Review
              </Button>
              <Button variant="outline" onClick={() => setIsWriting(false)} className="flex-1 bg-transparent">
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {reviews.map((rev) => (
          <Card key={rev.id} className="border-border">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-foreground text-lg">{rev.company}</h3>
                  <p className="text-sm text-muted-foreground">By {rev.author}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < Math.floor(rev.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                      }
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 p-3 bg-muted rounded-lg">
                <div className="text-center">
                  <p className="text-sm font-medium text-foreground">{rev.culture}/5</p>
                  <p className="text-xs text-muted-foreground">Culture</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-foreground">{rev.interview}/5</p>
                  <p className="text-xs text-muted-foreground">Interview</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-foreground">{rev.package}/5</p>
                  <p className="text-xs text-muted-foreground">Package</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-foreground">{rev.growth}/5</p>
                  <p className="text-xs text-muted-foreground">Growth</p>
                </div>
              </div>

              <p className="text-foreground mb-4">{rev.content}</p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">{rev.date}</p>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <ThumbsUp size={16} />
                  Helpful ({rev.helpful})
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
