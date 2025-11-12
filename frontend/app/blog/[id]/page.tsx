"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, Share2, Heart } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function BlogArticle({ params }: { params: { id: string } }) {
  const [liked, setLiked] = useState(false)

  const article = {
    id: params.id,
    title: "How to Ace Your First Technical Interview",
    author: "Dr. Amit Sharma",
    date: "2024-11-20",
    readTime: "8 min read",
    category: "Interview Tips",
    image: "/technical-interview.png",
    content: `
# How to Ace Your First Technical Interview

Your first technical interview can be nerve-wracking, but with proper preparation and the right mindset, you can absolutely ace it. Here are some essential tips to help you succeed.

## 1. Understand the Interview Format

Before your interview, make sure you understand what to expect:
- **Duration**: Usually 45-60 minutes
- **Format**: Coding problems, system design, or behavioral questions
- **Tools**: Online coding platform or whiteboard
- **Interviewers**: Usually 1-2 senior engineers

## 2. Master the Fundamentals

Focus on core data structures and algorithms:
- Arrays and Strings
- Linked Lists
- Trees and Graphs
- Hash Tables
- Sorting and Searching
- Dynamic Programming

Practice solving problems on platforms like LeetCode and HackerRank.

## 3. Communication is Key

During the interview:
- **Think out loud**: Explain your approach before coding
- **Ask clarifying questions**: Understand the problem completely
- **Discuss trade-offs**: Talk about time and space complexity
- **Walk through examples**: Test your solution with examples

## 4. Practice Mock Interviews

- Take mock interviews with friends or mentors
- Record yourself and review
- Get feedback on your approach and communication
- Practice under time pressure

## 5. Day Before Tips

- Get good sleep
- Review key concepts
- Prepare your environment (quiet, good internet)
- Have water and snacks ready
- Arrive early if it's in-person

## 6. During the Interview

- Stay calm and composed
- Don't rush into coding
- Write clean, readable code
- Test your solution thoroughly
- Be honest if you don't know something

## 7. After the Interview

- Thank the interviewer
- Ask about next steps
- Follow up with a thank you email
- Reflect on what went well and what to improve

Remember, the interviewer wants you to succeed. They're looking for your problem-solving approach, not just the final answer. Good luck!
    `,
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto p-6 space-y-6">
        <Link href="/blog">
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <ArrowLeft size={18} />
            Back to Blog
          </Button>
        </Link>

        <article className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="px-2 py-1 bg-primary/10 text-primary font-medium rounded">{article.category}</span>
              <span>{article.readTime}</span>
            </div>

            <h1 className="text-4xl font-bold text-foreground">{article.title}</h1>

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  {article.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {article.date}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setLiked(!liked)}
                  className={liked ? "text-primary" : "text-muted-foreground"}
                >
                  <Heart size={18} fill={liked ? "currentColor" : "none"} />
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <Share2 size={18} />
                </Button>
              </div>
            </div>
          </div>

          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
            <img src={article.image || "/placeholder.svg"} alt={article.title} className="w-full h-full object-cover" />
          </div>

          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="prose prose-invert max-w-none text-foreground space-y-4">
                {article.content.split("\n\n").map((paragraph, idx) => {
                  if (paragraph.startsWith("#")) {
                    const level = paragraph.match(/^#+/)?.[0].length || 1
                    const text = paragraph.replace(/^#+\s/, "")
                    const className =
                      level === 1 ? "text-2xl font-bold" : level === 2 ? "text-xl font-bold" : "text-lg font-semibold"
                    return (
                      <h2 key={idx} className={className}>
                        {text}
                      </h2>
                    )
                  }
                  if (paragraph.startsWith("-")) {
                    return (
                      <ul key={idx} className="list-disc list-inside space-y-2">
                        {paragraph.split("\n").map((item, i) => (
                          <li key={i} className="text-foreground">
                            {item.replace(/^-\s/, "")}
                          </li>
                        ))}
                      </ul>
                    )
                  }
                  return (
                    <p key={idx} className="text-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </article>
      </div>
    </div>
  )
}
