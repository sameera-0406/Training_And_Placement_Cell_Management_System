"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Upload, Plus, X } from "lucide-react"
import { useState } from "react"

export default function StudentProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: "Rahul Kumar",
    rollNo: "2021001",
    department: "Computer Science",
    cgpa: "8.5",
    email: "rahul@example.com",
    phone: "+91-9876543210",
    resume: "Resume_Rahul_Kumar.pdf",
    skills: ["React", "Node.js", "Python", "MongoDB"],
    certifications: ["AWS Solutions Architect", "Google Cloud Associate"],
    projects: [
      { name: "E-commerce Platform", description: "Built full-stack e-commerce app" },
      { name: "AI Chatbot", description: "Developed ML-based chatbot" },
    ],
  })

  const [newSkill, setNewSkill] = useState("")
  const [newCert, setNewCert] = useState("")

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setProfile({
        ...profile,
        skills: [...profile.skills, newSkill],
      })
      setNewSkill("")
    }
  }

  const handleRemoveSkill = (skill: string) => {
    setProfile({
      ...profile,
      skills: profile.skills.filter((s) => s !== skill),
    })
  }

  const handleAddCert = () => {
    if (newCert.trim()) {
      setProfile({
        ...profile,
        certifications: [...profile.certifications, newCert],
      })
      setNewCert("")
    }
  }

  const handleRemoveCert = (cert: string) => {
    setProfile({
      ...profile,
      certifications: profile.certifications.filter((c) => c !== cert),
    })
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Profile</h1>
          <p className="text-muted-foreground mt-2">Manage your placement profile</p>
        </div>
        <Button onClick={() => setIsEditing(!isEditing)} variant={isEditing ? "destructive" : "default"}>
          {isEditing ? "Cancel" : "Edit Profile"}
        </Button>
      </div>

      {/* Personal Information */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Your basic details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground">Name</label>
              <Input value={profile.name} disabled={!isEditing} className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Roll No</label>
              <Input value={profile.rollNo} disabled className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Department</label>
              <Input value={profile.department} disabled className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">CGPA</label>
              <Input value={profile.cgpa} disabled={!isEditing} className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Email</label>
              <Input value={profile.email} disabled={!isEditing} className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Phone</label>
              <Input value={profile.phone} disabled={!isEditing} className="mt-1" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Resume Upload */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Resume</CardTitle>
          <CardDescription>Upload or update your resume</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border-2 border-dashed border-border rounded-lg">
            <div>
              <p className="font-medium text-foreground">{profile.resume}</p>
              <p className="text-sm text-muted-foreground">PDF • 245 KB</p>
            </div>
            {isEditing && (
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Upload size={16} />
                Replace
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Skills</CardTitle>
          <CardDescription>Add technical and professional skills</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="gap-2 px-3 py-1">
                {skill}
                {isEditing && (
                  <button onClick={() => handleRemoveSkill(skill)} className="ml-1">
                    <X size={14} />
                  </button>
                )}
              </Badge>
            ))}
          </div>
          {isEditing && (
            <div className="flex gap-2">
              <Input
                placeholder="Add a skill..."
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleAddSkill()}
              />
              <Button onClick={handleAddSkill} size="sm" variant="outline">
                <Plus size={16} />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Certifications</CardTitle>
          <CardDescription>Professional certifications and achievements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            {profile.certifications.map((cert) => (
              <div key={cert} className="flex items-center justify-between p-3 border border-border rounded-lg">
                <p className="text-foreground">{cert}</p>
                {isEditing && (
                  <button onClick={() => handleRemoveCert(cert)}>
                    <X size={18} className="text-muted-foreground hover:text-foreground" />
                  </button>
                )}
              </div>
            ))}
          </div>
          {isEditing && (
            <div className="flex gap-2">
              <Input
                placeholder="Add a certification..."
                value={newCert}
                onChange={(e) => setNewCert(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleAddCert()}
              />
              <Button onClick={handleAddCert} size="sm" variant="outline">
                <Plus size={16} />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Projects */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Projects</CardTitle>
          <CardDescription>Showcase your work and achievements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {profile.projects.map((project) => (
            <div key={project.name} className="p-4 border border-border rounded-lg">
              <h3 className="font-semibold text-foreground">{project.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {isEditing && (
        <div className="flex gap-3">
          <Button className="w-full">Save Changes</Button>
          <Button variant="outline" className="w-full bg-transparent" onClick={() => setIsEditing(false)}>
            Cancel
          </Button>
        </div>
      )}
    </div>
  )
}
