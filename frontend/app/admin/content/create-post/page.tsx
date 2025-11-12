"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Bold, Italic, List, Link2, ImageIcon, Save } from "lucide-react"

export default function CreatePost() {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("placement-stories")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState("")

  const categories = [
    { id: "placement-stories", label: "Placement Stories" },
    { id: "off-campus", label: "Off-Campus Alerts" },
    { id: "interview-prep", label: "Interview Prep Resources" },
    { id: "company-insights", label: "Company Insights" },
    { id: "alumni-guidance", label: "Alumni Guidance" },
  ]

  const handleBoldClick = () => {
    setContent(content + "**bold text**")
  }

  const handleItalicClick = () => {
    setContent(content + "*italic text*")
  }

  const handleListClick = () => {
    setContent(content + "\n- List item\n")
  }

  const handleLinkClick = () => {
    setContent(content + "[link text](url)")
  }

  const handleImageClick = () => {
    setContent(content + "![alt text](image-url)")
  }

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Create New Post</h1>
        <p className="text-muted-foreground mt-2">Write and publish content for the community</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Title */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Post Title</CardTitle>
            </CardHeader>
            <CardContent>
              <input
                type="text"
                placeholder="Enter post title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </CardContent>
          </Card>

          {/* Rich Text Editor */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Content</CardTitle>
              <CardDescription>Write your post content with formatting</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {/* Toolbar */}
              <div className="flex gap-2 p-2 bg-gray-50 rounded-lg border border-border flex-wrap">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleBoldClick}
                  title="Bold"
                  className="gap-2 bg-transparent"
                >
                  <Bold size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleItalicClick}
                  title="Italic"
                  className="gap-2 bg-transparent"
                >
                  <Italic size={16} />
                </Button>
                <div className="w-px bg-border" />
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleListClick}
                  title="List"
                  className="gap-2 bg-transparent"
                >
                  <List size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleLinkClick}
                  title="Link"
                  className="gap-2 bg-transparent"
                >
                  <Link2 size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleImageClick}
                  title="Image"
                  className="gap-2 bg-transparent"
                >
                  <ImageIcon size={16} />
                </Button>
              </div>

              {/* Editor */}
              <textarea
                placeholder="Write your content here... Use markdown formatting"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full h-96 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
              />

              {/* Preview */}
              <div className="p-4 bg-gray-50 rounded-lg border border-border">
                <p className="text-sm font-semibold text-foreground mb-2">Preview</p>
                <div className="prose prose-sm max-w-none text-foreground whitespace-pre-wrap break-words">
                  {content || "Preview will appear here..."}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Category */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Category</CardTitle>
            </CardHeader>
            <CardContent>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </CardContent>
          </Card>

          {/* Tags */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Tags</CardTitle>
              <CardDescription>Separate with commas</CardDescription>
            </CardHeader>
            <CardContent>
              <textarea
                placeholder="e.g., placement, interview, tips"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="w-full h-24 px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </CardContent>
          </Card>

          {/* Publish */}
          <Card className="border-border">
            <CardContent className="pt-6 space-y-3">
              <Button className="w-full gap-2">
                <Save size={18} />
                Publish Post
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                Save as Draft
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
